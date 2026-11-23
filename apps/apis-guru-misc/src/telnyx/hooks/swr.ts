import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionsKey() {
  return ['actions'] as const
}

export function getAddressesKey() {
  return ['addresses'] as const
}

export function getAuthenticationProvidersKey() {
  return ['authentication_providers'] as const
}

export function getAvailablePhoneNumberBlocksKey() {
  return ['available_phone_number_blocks'] as const
}

export function getAvailablePhoneNumbersKey() {
  return ['available_phone_numbers'] as const
}

export function getBalanceKey() {
  return ['balance'] as const
}

export function getBillingGroupsKey() {
  return ['billing_groups'] as const
}

export function getCallControlApplicationsKey() {
  return ['call_control_applications'] as const
}

export function getCallEventsKey() {
  return ['call_events'] as const
}

export function getCallsKey() {
  return ['calls'] as const
}

export function getCommentsKey() {
  return ['comments'] as const
}

export function getConferencesKey() {
  return ['conferences'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getCredentialConnectionsKey() {
  return ['credential_connections'] as const
}

export function getDetailRecordsKey() {
  return ['detail_records'] as const
}

export function getDocumentLinksKey() {
  return ['document_links'] as const
}

export function getDocumentsKey() {
  return ['documents'] as const
}

export function getFaxApplicationsKey() {
  return ['fax_applications'] as const
}

export function getFaxesKey() {
  return ['faxes'] as const
}

export function getFqdnConnectionsKey() {
  return ['fqdn_connections'] as const
}

export function getFqdnsKey() {
  return ['fqdns'] as const
}

export function getInventoryCoverageKey() {
  return ['inventory_coverage'] as const
}

export function getIpConnectionsKey() {
  return ['ip_connections'] as const
}

export function getIpsKey() {
  return ['ips'] as const
}

export function getLedgerBillingGroupReportsKey() {
  return ['ledger_billing_group_reports'] as const
}

export function getManagedAccountsKey() {
  return ['managed_accounts'] as const
}

export function getMediaKey() {
  return ['media'] as const
}

export function getMessageDetailRecordsKey() {
  return ['message_detail_records'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getMessagingHostedNumberOrdersKey() {
  return ['messaging_hosted_number_orders'] as const
}

export function getMessagingHostedNumbersKey() {
  return ['messaging_hosted_numbers'] as const
}

export function getMessagingProfileMetricsKey() {
  return ['messaging_profile_metrics'] as const
}

export function getMessagingProfilesKey() {
  return ['messaging_profiles'] as const
}

export function getMessagingUrlDomainsKey() {
  return ['messaging_url_domains'] as const
}

export function getMobileOperatorNetworksKey() {
  return ['mobile_operator_networks'] as const
}

export function getNotificationChannelsKey() {
  return ['notification_channels'] as const
}

export function getNotificationEventConditionsKey() {
  return ['notification_event_conditions'] as const
}

export function getNotificationEventsKey() {
  return ['notification_events'] as const
}

export function getNotificationProfilesKey() {
  return ['notification_profiles'] as const
}

export function getNotificationSettingsKey() {
  return ['notification_settings'] as const
}

export function getNumberBlockOrdersKey() {
  return ['number_block_orders'] as const
}

export function getNumberLookupKey() {
  return ['number_lookup'] as const
}

export function getNumberOrderDocumentsKey() {
  return ['number_order_documents'] as const
}

export function getNumberOrderPhoneNumbersKey() {
  return ['number_order_phone_numbers'] as const
}

export function getNumberOrdersKey() {
  return ['number_orders'] as const
}

export function getNumberReservationsKey() {
  return ['number_reservations'] as const
}

export function getOtaUpdatesKey() {
  return ['ota_updates'] as const
}

export function getOutboundVoiceProfilesKey() {
  return ['outbound_voice_profiles'] as const
}

export function getPhoneNumberBlocksKey() {
  return ['phone_number_blocks'] as const
}

export function getPhoneNumbersKey() {
  return ['phone_numbers'] as const
}

export function getPortabilityChecksKey() {
  return ['portability_checks'] as const
}

export function getPortingOrdersKey() {
  return ['porting_orders'] as const
}

export function getPortingPhoneNumbersKey() {
  return ['porting_phone_numbers'] as const
}

export function getPortoutsKey() {
  return ['portouts'] as const
}

export function getPrivateWirelessGatewaysKey() {
  return ['private_wireless_gateways'] as const
}

export function getQueuesKey() {
  return ['queues'] as const
}

export function getRecordingsKey() {
  return ['recordings'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getRequirementTypesKey() {
  return ['requirement_types'] as const
}

export function getRequirementsKey() {
  return ['requirements'] as const
}

export function getRoomParticipantsKey() {
  return ['room_participants'] as const
}

export function getRoomSessionsKey() {
  return ['room_sessions'] as const
}

export function getRoomsKey() {
  return ['rooms'] as const
}

export function getShortCodesKey() {
  return ['short_codes'] as const
}

export function getSimCardGroupActionsKey() {
  return ['sim_card_group_actions'] as const
}

export function getSimCardGroupsKey() {
  return ['sim_card_groups'] as const
}

export function getSimCardOrderPreviewKey() {
  return ['sim_card_order_preview'] as const
}

export function getSimCardOrdersKey() {
  return ['sim_card_orders'] as const
}

export function getSimCardsKey() {
  return ['sim_cards'] as const
}

export function getSubNumberOrdersKey() {
  return ['sub_number_orders'] as const
}

export function getTelephonyCredentialsKey() {
  return ['telephony_credentials'] as const
}

export function getTexmlApplicationsKey() {
  return ['texml_applications'] as const
}

export function getVerificationsKey() {
  return ['verifications'] as const
}

export function getVerifyProfilesKey() {
  return ['verify_profiles'] as const
}

export function getWebhookDeliveriesKey() {
  return ['webhook_deliveries'] as const
}

export function getWhatsappContactsKey() {
  return ['whatsapp_contacts'] as const
}

export function getWhatsappDetailRecordReportsKey() {
  return ['whatsapp_detail_record_reports'] as const
}

export function getWhatsappMediaKey() {
  return ['whatsapp_media'] as const
}

export function getWhatsappMessagesKey() {
  return ['whatsapp_messages'] as const
}

export function getWhatsappUsageAggregationsKey() {
  return ['whatsapp_usage_aggregations'] as const
}

export function getWhatsappUsersKey() {
  return ['whatsapp_users'] as const
}

export function getWirelessKey() {
  return ['wireless'] as const
}

export function getPostActionsBulkTelephonyCredentialsKey() {
  return ['actions', '/actions/bulk/telephony_credentials', 'POST'] as const
}

export function usePostActionsBulkTelephonyCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.actions.bulk.telephony_credentials.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.actions.bulk.telephony_credentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionsBulkTelephonyCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.actions.bulk.telephony_credentials.$post> },
      ) => parseResponse(client.actions.bulk.telephony_credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteActionsBulkTelephonyCredentialsKey() {
  return ['actions', '/actions/bulk/telephony_credentials', 'DELETE'] as const
}

export function useDeleteActionsBulkTelephonyCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.actions.bulk.telephony_credentials.$delete>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.actions.bulk.telephony_credentials.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteActionsBulkTelephonyCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.actions.bulk.telephony_credentials.$delete> },
      ) => parseResponse(client.actions.bulk.telephony_credentials.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchActionsBulkTelephonyCredentialsKey() {
  return ['actions', '/actions/bulk/telephony_credentials', 'PATCH'] as const
}

export function usePatchActionsBulkTelephonyCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.actions.bulk.telephony_credentials.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.actions.bulk.telephony_credentials.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchActionsBulkTelephonyCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.actions.bulk.telephony_credentials.$patch> },
      ) => parseResponse(client.actions.bulk.telephony_credentials.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutActionsNetworkPreferencesSimCardsKey() {
  return ['actions', '/actions/network_preferences/sim_cards', 'PUT'] as const
}

export function usePutActionsNetworkPreferencesSimCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.actions.network_preferences.sim_cards.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.actions.network_preferences.sim_cards.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutActionsNetworkPreferencesSimCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.actions.network_preferences.sim_cards.$put> },
      ) => parseResponse(client.actions.network_preferences.sim_cards.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostActionsRegisterSimCardsKey() {
  return ['actions', '/actions/register/sim_cards', 'POST'] as const
}

export function usePostActionsRegisterSimCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.actions.register.sim_cards.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.actions.register.sim_cards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionsRegisterSimCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.actions.register.sim_cards.$post> },
      ) => parseResponse(client.actions.register.sim_cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostActionsActionTelephonyCredentialsKey() {
  return ['actions', '/actions/:action/telephony_credentials', 'POST'] as const
}

export function usePostActionsActionTelephonyCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':action']['telephony_credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actions)[':action']['telephony_credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionsActionTelephonyCredentialsKey()
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
            (typeof client.actions)[':action']['telephony_credentials']['$post']
          >
        },
      ) => parseResponse(client.actions[':action'].telephony_credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAddressesKey(args: InferRequestType<typeof client.addresses.$get>) {
  return ['addresses', '/addresses', args] as const
}

export function useGetAddresses<TError = unknown>(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddressesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddresses<TError = unknown>(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddressesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAddressesKey() {
  return ['addresses', '/addresses', 'POST'] as const
}

export function usePostAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.addresses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.addresses.$post> }) =>
        parseResponse(client.addresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAddressesActionsValidateKey() {
  return ['addresses', '/addresses/actions/validate', 'POST'] as const
}

export function usePostAddressesActionsValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.addresses.actions.validate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.addresses.actions.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAddressesActionsValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.addresses.actions.validate.$post> },
      ) => parseResponse(client.addresses.actions.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAddressesIdKey(
  args: InferRequestType<(typeof client.addresses)[':id']['$get']>,
) {
  return ['addresses', '/addresses/:id', args] as const
}

export function useGetAddressesId<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddressesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddressesId<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddressesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAddressesIdKey() {
  return ['addresses', '/addresses/:id', 'DELETE'] as const
}

export function useDeleteAddressesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.addresses)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAddressesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.addresses)[':id']['$delete']> },
      ) => parseResponse(client.addresses[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthenticationProvidersKey(
  args: InferRequestType<typeof client.authentication_providers.$get>,
) {
  return ['authentication_providers', '/authentication_providers', args] as const
}

export function useGetAuthenticationProviders<TError = unknown>(
  args: InferRequestType<typeof client.authentication_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthenticationProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authentication_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthenticationProviders<TError = unknown>(
  args: InferRequestType<typeof client.authentication_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthenticationProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authentication_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthenticationProvidersKey() {
  return ['authentication_providers', '/authentication_providers', 'POST'] as const
}

export function usePostAuthenticationProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authentication_providers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authentication_providers.$post> },
      ) => parseResponse(client.authentication_providers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthenticationProvidersIdKey(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$get']>,
) {
  return ['authentication_providers', '/authentication_providers/:id', args] as const
}

export function useGetAuthenticationProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthenticationProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authentication_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthenticationProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthenticationProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authentication_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAuthenticationProvidersIdKey() {
  return ['authentication_providers', '/authentication_providers/:id', 'DELETE'] as const
}

export function useDeleteAuthenticationProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authentication_providers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthenticationProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.authentication_providers)[':id']['$delete']> },
      ) => parseResponse(client.authentication_providers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthenticationProvidersIdKey() {
  return ['authentication_providers', '/authentication_providers/:id', 'PATCH'] as const
}

export function usePatchAuthenticationProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authentication_providers)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthenticationProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.authentication_providers)[':id']['$patch']> },
      ) => parseResponse(client.authentication_providers[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAvailablePhoneNumberBlocksKey(
  args: InferRequestType<typeof client.available_phone_number_blocks.$get>,
) {
  return ['available_phone_number_blocks', '/available_phone_number_blocks', args] as const
}

export function useGetAvailablePhoneNumberBlocks<TError = unknown>(
  args: InferRequestType<typeof client.available_phone_number_blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.available_phone_number_blocks.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAvailablePhoneNumberBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.available_phone_number_blocks.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.available_phone_number_blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAvailablePhoneNumberBlocks<TError = unknown>(
  args: InferRequestType<typeof client.available_phone_number_blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.available_phone_number_blocks.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAvailablePhoneNumberBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.available_phone_number_blocks.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.available_phone_number_blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAvailablePhoneNumbersKey(
  args: InferRequestType<typeof client.available_phone_numbers.$get>,
) {
  return ['available_phone_numbers', '/available_phone_numbers', args] as const
}

export function useGetAvailablePhoneNumbers<TError = unknown>(
  args: InferRequestType<typeof client.available_phone_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_numbers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAvailablePhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_numbers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.available_phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAvailablePhoneNumbers<TError = unknown>(
  args: InferRequestType<typeof client.available_phone_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_numbers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAvailablePhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_numbers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.available_phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBalanceKey() {
  return ['balance', '/balance'] as const
}

export function useGetBalance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBalanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBalanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillingGroupsKey(args: InferRequestType<typeof client.billing_groups.$get>) {
  return ['billing_groups', '/billing_groups', args] as const
}

export function useGetBillingGroups<TError = unknown>(
  args: InferRequestType<typeof client.billing_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingGroups<TError = unknown>(
  args: InferRequestType<typeof client.billing_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBillingGroupsKey() {
  return ['billing_groups', '/billing_groups', 'POST'] as const
}

export function usePostBillingGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.billing_groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.billing_groups.$post> }) =>
        parseResponse(client.billing_groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingGroupsIdKey(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$get']>,
) {
  return ['billing_groups', '/billing_groups/:id', args] as const
}

export function useGetBillingGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBillingGroupsIdKey() {
  return ['billing_groups', '/billing_groups/:id', 'DELETE'] as const
}

export function useDeleteBillingGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billing_groups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBillingGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.billing_groups)[':id']['$delete']> },
      ) => parseResponse(client.billing_groups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBillingGroupsIdKey() {
  return ['billing_groups', '/billing_groups/:id', 'PATCH'] as const
}

export function usePatchBillingGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billing_groups)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBillingGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.billing_groups)[':id']['$patch']> },
      ) => parseResponse(client.billing_groups[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCallControlApplicationsKey(
  args: InferRequestType<typeof client.call_control_applications.$get>,
) {
  return ['call_control_applications', '/call_control_applications', args] as const
}

export function useGetCallControlApplications<TError = unknown>(
  args: InferRequestType<typeof client.call_control_applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCallControlApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call_control_applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallControlApplications<TError = unknown>(
  args: InferRequestType<typeof client.call_control_applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCallControlApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call_control_applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCallControlApplicationsKey() {
  return ['call_control_applications', '/call_control_applications', 'POST'] as const
}

export function usePostCallControlApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.call_control_applications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallControlApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.call_control_applications.$post> },
      ) => parseResponse(client.call_control_applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCallControlApplicationsIdKey(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$get']>,
) {
  return ['call_control_applications', '/call_control_applications/:id', args] as const
}

export function useGetCallControlApplicationsId<TError = unknown>(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCallControlApplicationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call_control_applications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallControlApplicationsId<TError = unknown>(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCallControlApplicationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call_control_applications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCallControlApplicationsIdKey() {
  return ['call_control_applications', '/call_control_applications/:id', 'DELETE'] as const
}

export function useDeleteCallControlApplicationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.call_control_applications)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCallControlApplicationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.call_control_applications)[':id']['$delete']> },
      ) => parseResponse(client.call_control_applications[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCallControlApplicationsIdKey() {
  return ['call_control_applications', '/call_control_applications/:id', 'PATCH'] as const
}

export function usePatchCallControlApplicationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.call_control_applications)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCallControlApplicationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.call_control_applications)[':id']['$patch']> },
      ) => parseResponse(client.call_control_applications[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCallEventsKey(args: InferRequestType<typeof client.call_events.$get>) {
  return ['call_events', '/call_events', args] as const
}

export function useGetCallEvents<TError = unknown>(
  args: InferRequestType<typeof client.call_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call_events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call_events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallEvents<TError = unknown>(
  args: InferRequestType<typeof client.call_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call_events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call_events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCallsKey() {
  return ['calls', '/calls', 'POST'] as const
}

export function usePostCalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.calls.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.calls.$post> }) =>
        parseResponse(client.calls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCallsCallControlIdKey(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['$get']>,
) {
  return ['calls', '/calls/:call_control_id', args] as const
}

export function useGetCallsCallControlId<TError = unknown>(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':call_control_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCallsCallControlIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':call_control_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calls[':call_control_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallsCallControlId<TError = unknown>(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':call_control_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCallsCallControlIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':call_control_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calls[':call_control_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsAnswerKey() {
  return ['calls', '/calls/:call_control_id/actions/answer', 'POST'] as const
}

export function usePostCallsCallControlIdActionsAnswer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['answer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['answer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsAnswerKey()
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
            (typeof client.calls)[':call_control_id']['actions']['answer']['$post']
          >
        },
      ) => parseResponse(client.calls[':call_control_id'].actions.answer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsBridgeKey() {
  return ['calls', '/calls/:call_control_id/actions/bridge', 'POST'] as const
}

export function usePostCallsCallControlIdActionsBridge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['bridge']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['bridge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsBridgeKey()
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
            (typeof client.calls)[':call_control_id']['actions']['bridge']['$post']
          >
        },
      ) => parseResponse(client.calls[':call_control_id'].actions.bridge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsEnqueueKey() {
  return ['calls', '/calls/:call_control_id/actions/enqueue', 'POST'] as const
}

export function usePostCallsCallControlIdActionsEnqueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['enqueue']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['enqueue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsEnqueueKey()
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
            (typeof client.calls)[':call_control_id']['actions']['enqueue']['$post']
          >
        },
      ) =>
        parseResponse(client.calls[':call_control_id'].actions.enqueue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsForkStartKey() {
  return ['calls', '/calls/:call_control_id/actions/fork_start', 'POST'] as const
}

export function usePostCallsCallControlIdActionsForkStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['fork_start']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['fork_start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsForkStartKey()
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
            (typeof client.calls)[':call_control_id']['actions']['fork_start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.fork_start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsForkStopKey() {
  return ['calls', '/calls/:call_control_id/actions/fork_stop', 'POST'] as const
}

export function usePostCallsCallControlIdActionsForkStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['fork_stop']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['fork_stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsForkStopKey()
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
            (typeof client.calls)[':call_control_id']['actions']['fork_stop']['$post']
          >
        },
      ) =>
        parseResponse(client.calls[':call_control_id'].actions.fork_stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsGatherStopKey() {
  return ['calls', '/calls/:call_control_id/actions/gather_stop', 'POST'] as const
}

export function usePostCallsCallControlIdActionsGatherStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['gather_stop']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['gather_stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsGatherStopKey()
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
            (typeof client.calls)[':call_control_id']['actions']['gather_stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.gather_stop.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsGatherUsingAudioKey() {
  return ['calls', '/calls/:call_control_id/actions/gather_using_audio', 'POST'] as const
}

export function usePostCallsCallControlIdActionsGatherUsingAudio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.calls)[':call_control_id']['actions']['gather_using_audio']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['gather_using_audio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsGatherUsingAudioKey()
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
            (typeof client.calls)[':call_control_id']['actions']['gather_using_audio']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.gather_using_audio.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsGatherUsingSpeakKey() {
  return ['calls', '/calls/:call_control_id/actions/gather_using_speak', 'POST'] as const
}

export function usePostCallsCallControlIdActionsGatherUsingSpeak<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.calls)[':call_control_id']['actions']['gather_using_speak']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['gather_using_speak']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsGatherUsingSpeakKey()
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
            (typeof client.calls)[':call_control_id']['actions']['gather_using_speak']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.gather_using_speak.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsHangupKey() {
  return ['calls', '/calls/:call_control_id/actions/hangup', 'POST'] as const
}

export function usePostCallsCallControlIdActionsHangup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['hangup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['hangup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsHangupKey()
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
            (typeof client.calls)[':call_control_id']['actions']['hangup']['$post']
          >
        },
      ) => parseResponse(client.calls[':call_control_id'].actions.hangup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsLeaveQueueKey() {
  return ['calls', '/calls/:call_control_id/actions/leave_queue', 'POST'] as const
}

export function usePostCallsCallControlIdActionsLeaveQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['leave_queue']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['leave_queue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsLeaveQueueKey()
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
            (typeof client.calls)[':call_control_id']['actions']['leave_queue']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.leave_queue.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsPlaybackStartKey() {
  return ['calls', '/calls/:call_control_id/actions/playback_start', 'POST'] as const
}

export function usePostCallsCallControlIdActionsPlaybackStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.calls)[':call_control_id']['actions']['playback_start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['playback_start']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsPlaybackStartKey()
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
            (typeof client.calls)[':call_control_id']['actions']['playback_start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.playback_start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsPlaybackStopKey() {
  return ['calls', '/calls/:call_control_id/actions/playback_stop', 'POST'] as const
}

export function usePostCallsCallControlIdActionsPlaybackStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.calls)[':call_control_id']['actions']['playback_stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['playback_stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsPlaybackStopKey()
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
            (typeof client.calls)[':call_control_id']['actions']['playback_stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.playback_stop.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsRecordPauseKey() {
  return ['calls', '/calls/:call_control_id/actions/record_pause', 'POST'] as const
}

export function usePostCallsCallControlIdActionsRecordPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.calls)[':call_control_id']['actions']['record_pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['record_pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsRecordPauseKey()
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
            (typeof client.calls)[':call_control_id']['actions']['record_pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.record_pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsRecordResumeKey() {
  return ['calls', '/calls/:call_control_id/actions/record_resume', 'POST'] as const
}

export function usePostCallsCallControlIdActionsRecordResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.calls)[':call_control_id']['actions']['record_resume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['record_resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsRecordResumeKey()
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
            (typeof client.calls)[':call_control_id']['actions']['record_resume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.record_resume.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsRecordStartKey() {
  return ['calls', '/calls/:call_control_id/actions/record_start', 'POST'] as const
}

export function usePostCallsCallControlIdActionsRecordStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.calls)[':call_control_id']['actions']['record_start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['record_start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsRecordStartKey()
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
            (typeof client.calls)[':call_control_id']['actions']['record_start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.record_start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsRecordStopKey() {
  return ['calls', '/calls/:call_control_id/actions/record_stop', 'POST'] as const
}

export function usePostCallsCallControlIdActionsRecordStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['record_stop']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['record_stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsRecordStopKey()
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
            (typeof client.calls)[':call_control_id']['actions']['record_stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.record_stop.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsReferKey() {
  return ['calls', '/calls/:call_control_id/actions/refer', 'POST'] as const
}

export function usePostCallsCallControlIdActionsRefer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['refer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['refer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsReferKey()
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
            (typeof client.calls)[':call_control_id']['actions']['refer']['$post']
          >
        },
      ) => parseResponse(client.calls[':call_control_id'].actions.refer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsRejectKey() {
  return ['calls', '/calls/:call_control_id/actions/reject', 'POST'] as const
}

export function usePostCallsCallControlIdActionsReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['reject']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsRejectKey()
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
            (typeof client.calls)[':call_control_id']['actions']['reject']['$post']
          >
        },
      ) => parseResponse(client.calls[':call_control_id'].actions.reject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsSendDtmfKey() {
  return ['calls', '/calls/:call_control_id/actions/send_dtmf', 'POST'] as const
}

export function usePostCallsCallControlIdActionsSendDtmf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['send_dtmf']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['send_dtmf']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsSendDtmfKey()
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
            (typeof client.calls)[':call_control_id']['actions']['send_dtmf']['$post']
          >
        },
      ) =>
        parseResponse(client.calls[':call_control_id'].actions.send_dtmf.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsSpeakKey() {
  return ['calls', '/calls/:call_control_id/actions/speak', 'POST'] as const
}

export function usePostCallsCallControlIdActionsSpeak<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['speak']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['speak']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsSpeakKey()
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
            (typeof client.calls)[':call_control_id']['actions']['speak']['$post']
          >
        },
      ) => parseResponse(client.calls[':call_control_id'].actions.speak.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsTranscriptionStartKey() {
  return ['calls', '/calls/:call_control_id/actions/transcription_start', 'POST'] as const
}

export function usePostCallsCallControlIdActionsTranscriptionStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.calls)[':call_control_id']['actions']['transcription_start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['transcription_start']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsTranscriptionStartKey()
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
            (typeof client.calls)[':call_control_id']['actions']['transcription_start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.transcription_start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsTranscriptionStopKey() {
  return ['calls', '/calls/:call_control_id/actions/transcription_stop', 'POST'] as const
}

export function usePostCallsCallControlIdActionsTranscriptionStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.calls)[':call_control_id']['actions']['transcription_stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['transcription_stop']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsTranscriptionStopKey()
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
            (typeof client.calls)[':call_control_id']['actions']['transcription_stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calls[':call_control_id'].actions.transcription_stop.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCallsCallControlIdActionsTransferKey() {
  return ['calls', '/calls/:call_control_id/actions/transfer', 'POST'] as const
}

export function usePostCallsCallControlIdActionsTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calls)[':call_control_id']['actions']['transfer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsCallControlIdActionsTransferKey()
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
            (typeof client.calls)[':call_control_id']['actions']['transfer']['$post']
          >
        },
      ) =>
        parseResponse(client.calls[':call_control_id'].actions.transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCommentsKey(args: InferRequestType<typeof client.comments.$get>) {
  return ['comments', '/comments', args] as const
}

export function useGetComments<TError = unknown>(
  args: InferRequestType<typeof client.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.comments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetComments<TError = unknown>(
  args: InferRequestType<typeof client.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.comments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCommentsKey() {
  return ['comments', '/comments', 'POST'] as const
}

export function usePostComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.comments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.comments.$post> }) =>
        parseResponse(client.comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCommentsIdKey(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
) {
  return ['comments', '/comments/:id', args] as const
}

export function useGetCommentsId<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsId<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCommentsIdReadKey() {
  return ['comments', '/comments/:id/read', 'PATCH'] as const
}

export function usePatchCommentsIdRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['read']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':id']['read']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCommentsIdReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.comments)[':id']['read']['$patch']> },
      ) => parseResponse(client.comments[':id'].read.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConferencesKey(args: InferRequestType<typeof client.conferences.$get>) {
  return ['conferences', '/conferences', args] as const
}

export function useGetConferences<TError = unknown>(
  args: InferRequestType<typeof client.conferences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConferencesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConferences<TError = unknown>(
  args: InferRequestType<typeof client.conferences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConferencesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConferencesKey() {
  return ['conferences', '/conferences', 'POST'] as const
}

export function usePostConferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.conferences.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.conferences.$post> }) =>
        parseResponse(client.conferences.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConferencesConferenceIdParticipantsKey(
  args: InferRequestType<(typeof client.conferences)[':conference_id']['participants']['$get']>,
) {
  return ['conferences', '/conferences/:conference_id/participants', args] as const
}

export function useGetConferencesConferenceIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.conferences)[':conference_id']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conferences)[':conference_id']['participants']['$get']>
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
        ? getGetConferencesConferenceIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conferences)[':conference_id']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conferences[':conference_id'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConferencesConferenceIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.conferences)[':conference_id']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conferences)[':conference_id']['participants']['$get']>
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
        ? getGetConferencesConferenceIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conferences)[':conference_id']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conferences[':conference_id'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConferencesIdKey(
  args: InferRequestType<(typeof client.conferences)[':id']['$get']>,
) {
  return ['conferences', '/conferences/:id', args] as const
}

export function useGetConferencesId<TError = unknown>(
  args: InferRequestType<(typeof client.conferences)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.conferences)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConferencesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.conferences)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conferences[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConferencesId<TError = unknown>(
  args: InferRequestType<(typeof client.conferences)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.conferences)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConferencesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.conferences)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conferences[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConferencesIdActionsDialParticipantKey() {
  return ['conferences', '/conferences/:id/actions/dial_participant', 'POST'] as const
}

export function usePostConferencesIdActionsDialParticipant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conferences)[':id']['actions']['dial_participant']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['dial_participant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsDialParticipantKey()
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
            (typeof client.conferences)[':id']['actions']['dial_participant']['$post']
          >
        },
      ) =>
        parseResponse(client.conferences[':id'].actions.dial_participant.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsHoldKey() {
  return ['conferences', '/conferences/:id/actions/hold', 'POST'] as const
}

export function usePostConferencesIdActionsHold<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['hold']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['hold']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsHoldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conferences)[':id']['actions']['hold']['$post']>
        },
      ) => parseResponse(client.conferences[':id'].actions.hold.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsJoinKey() {
  return ['conferences', '/conferences/:id/actions/join', 'POST'] as const
}

export function usePostConferencesIdActionsJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['join']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conferences)[':id']['actions']['join']['$post']>
        },
      ) => parseResponse(client.conferences[':id'].actions.join.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsLeaveKey() {
  return ['conferences', '/conferences/:id/actions/leave', 'POST'] as const
}

export function usePostConferencesIdActionsLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['leave']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conferences)[':id']['actions']['leave']['$post']>
        },
      ) => parseResponse(client.conferences[':id'].actions.leave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsMuteKey() {
  return ['conferences', '/conferences/:id/actions/mute', 'POST'] as const
}

export function usePostConferencesIdActionsMute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['mute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['mute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsMuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conferences)[':id']['actions']['mute']['$post']>
        },
      ) => parseResponse(client.conferences[':id'].actions.mute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsPlayKey() {
  return ['conferences', '/conferences/:id/actions/play', 'POST'] as const
}

export function usePostConferencesIdActionsPlay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['play']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['play']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsPlayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conferences)[':id']['actions']['play']['$post']>
        },
      ) => parseResponse(client.conferences[':id'].actions.play.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsRecordStartKey() {
  return ['conferences', '/conferences/:id/actions/record_start', 'POST'] as const
}

export function usePostConferencesIdActionsRecordStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conferences)[':id']['actions']['record_start']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['record_start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsRecordStartKey()
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
            (typeof client.conferences)[':id']['actions']['record_start']['$post']
          >
        },
      ) => parseResponse(client.conferences[':id'].actions.record_start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsRecordStopKey() {
  return ['conferences', '/conferences/:id/actions/record_stop', 'POST'] as const
}

export function usePostConferencesIdActionsRecordStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['record_stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['record_stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsRecordStopKey()
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
            (typeof client.conferences)[':id']['actions']['record_stop']['$post']
          >
        },
      ) => parseResponse(client.conferences[':id'].actions.record_stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsSpeakKey() {
  return ['conferences', '/conferences/:id/actions/speak', 'POST'] as const
}

export function usePostConferencesIdActionsSpeak<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['speak']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['speak']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsSpeakKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conferences)[':id']['actions']['speak']['$post']>
        },
      ) => parseResponse(client.conferences[':id'].actions.speak.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsStopKey() {
  return ['conferences', '/conferences/:id/actions/stop', 'POST'] as const
}

export function usePostConferencesIdActionsStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conferences)[':id']['actions']['stop']['$post']>
        },
      ) => parseResponse(client.conferences[':id'].actions.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsUnholdKey() {
  return ['conferences', '/conferences/:id/actions/unhold', 'POST'] as const
}

export function usePostConferencesIdActionsUnhold<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['unhold']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['unhold']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsUnholdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conferences)[':id']['actions']['unhold']['$post']>
        },
      ) => parseResponse(client.conferences[':id'].actions.unhold.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsUnmuteKey() {
  return ['conferences', '/conferences/:id/actions/unmute', 'POST'] as const
}

export function usePostConferencesIdActionsUnmute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['unmute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['unmute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsUnmuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conferences)[':id']['actions']['unmute']['$post']>
        },
      ) => parseResponse(client.conferences[':id'].actions.unmute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConferencesIdActionsUpdateKey() {
  return ['conferences', '/conferences/:id/actions/update', 'POST'] as const
}

export function usePostConferencesIdActionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conferences)[':id']['actions']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConferencesIdActionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conferences)[':id']['actions']['update']['$post']>
        },
      ) => parseResponse(client.conferences[':id'].actions.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectionsKey(args: InferRequestType<typeof client.connections.$get>) {
  return ['connections', '/connections', args] as const
}

export function useGetConnections<TError = unknown>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnections<TError = unknown>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConnectionsIdKey(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
) {
  return ['connections', '/connections/:id', args] as const
}

export function useGetConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCredentialConnectionsKey(
  args: InferRequestType<typeof client.credential_connections.$get>,
) {
  return ['credential_connections', '/credential_connections', args] as const
}

export function useGetCredentialConnections<TError = unknown>(
  args: InferRequestType<typeof client.credential_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCredentialConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credential_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCredentialConnections<TError = unknown>(
  args: InferRequestType<typeof client.credential_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCredentialConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credential_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCredentialConnectionsKey() {
  return ['credential_connections', '/credential_connections', 'POST'] as const
}

export function usePostCredentialConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credential_connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCredentialConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credential_connections.$post> },
      ) => parseResponse(client.credential_connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCredentialConnectionsIdKey(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$get']>,
) {
  return ['credential_connections', '/credential_connections/:id', args] as const
}

export function useGetCredentialConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credential_connections)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCredentialConnectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credential_connections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credential_connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCredentialConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credential_connections)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCredentialConnectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credential_connections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credential_connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCredentialConnectionsIdKey() {
  return ['credential_connections', '/credential_connections/:id', 'DELETE'] as const
}

export function useDeleteCredentialConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credential_connections)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credential_connections)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCredentialConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.credential_connections)[':id']['$delete']> },
      ) => parseResponse(client.credential_connections[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCredentialConnectionsIdKey() {
  return ['credential_connections', '/credential_connections/:id', 'PATCH'] as const
}

export function usePatchCredentialConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credential_connections)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credential_connections)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCredentialConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.credential_connections)[':id']['$patch']> },
      ) => parseResponse(client.credential_connections[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetailRecordsKey(args: InferRequestType<typeof client.detail_records.$get>) {
  return ['detail_records', '/detail_records', args] as const
}

export function useGetDetailRecords<TError = unknown>(
  args: InferRequestType<typeof client.detail_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detail_records.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDetailRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detail_records.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detail_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetailRecords<TError = unknown>(
  args: InferRequestType<typeof client.detail_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detail_records.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDetailRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detail_records.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detail_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentLinksKey(args: InferRequestType<typeof client.document_links.$get>) {
  return ['document_links', '/document_links', args] as const
}

export function useGetDocumentLinks<TError = unknown>(
  args: InferRequestType<typeof client.document_links.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_links.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_links.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.document_links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentLinks<TError = unknown>(
  args: InferRequestType<typeof client.document_links.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_links.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_links.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.document_links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentsKey(args: InferRequestType<typeof client.documents.$get>) {
  return ['documents', '/documents', args] as const
}

export function useGetDocuments<TError = unknown>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocuments<TError = unknown>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocumentsKey() {
  return ['documents', '/documents', 'POST'] as const
}

export function usePostDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.documents.$post> }) =>
        parseResponse(client.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentsIdKey(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
) {
  return ['documents', '/documents/:id', args] as const
}

export function useGetDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDocumentsIdKey() {
  return ['documents', '/documents/:id', 'DELETE'] as const
}

export function useDeleteDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDocumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':id']['$delete']> },
      ) => parseResponse(client.documents[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDocumentsIdKey() {
  return ['documents', '/documents/:id', 'PATCH'] as const
}

export function usePatchDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDocumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':id']['$patch']> },
      ) => parseResponse(client.documents[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentsIdDownloadKey(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
) {
  return ['documents', '/documents/:id/download', args] as const
}

export function useGetDocumentsIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDocumentsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDocumentsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFaxApplicationsKey(
  args: InferRequestType<typeof client.fax_applications.$get>,
) {
  return ['fax_applications', '/fax_applications', args] as const
}

export function useGetFaxApplications<TError = unknown>(
  args: InferRequestType<typeof client.fax_applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFaxApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax_applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaxApplications<TError = unknown>(
  args: InferRequestType<typeof client.fax_applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFaxApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax_applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFaxApplicationsKey() {
  return ['fax_applications', '/fax_applications', 'POST'] as const
}

export function usePostFaxApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fax_applications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFaxApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fax_applications.$post> }) =>
        parseResponse(client.fax_applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFaxApplicationsIdKey(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$get']>,
) {
  return ['fax_applications', '/fax_applications/:id', args] as const
}

export function useGetFaxApplicationsId<TError = unknown>(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax_applications)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFaxApplicationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax_applications)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax_applications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaxApplicationsId<TError = unknown>(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax_applications)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFaxApplicationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax_applications)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax_applications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFaxApplicationsIdKey() {
  return ['fax_applications', '/fax_applications/:id', 'DELETE'] as const
}

export function useDeleteFaxApplicationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fax_applications)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fax_applications)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFaxApplicationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.fax_applications)[':id']['$delete']> },
      ) => parseResponse(client.fax_applications[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFaxApplicationsIdKey() {
  return ['fax_applications', '/fax_applications/:id', 'PATCH'] as const
}

export function usePatchFaxApplicationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fax_applications)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fax_applications)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFaxApplicationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.fax_applications)[':id']['$patch']> },
      ) => parseResponse(client.fax_applications[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFaxesKey(args: InferRequestType<typeof client.faxes.$get>) {
  return ['faxes', '/faxes', args] as const
}

export function useGetFaxes<TError = unknown>(
  args: InferRequestType<typeof client.faxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.faxes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFaxes<TError = unknown>(
  args: InferRequestType<typeof client.faxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.faxes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFaxesKey() {
  return ['faxes', '/faxes', 'POST'] as const
}

export function usePostFaxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.faxes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFaxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.faxes.$post> }) =>
        parseResponse(client.faxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFaxesIdKey(args: InferRequestType<(typeof client.faxes)[':id']['$get']>) {
  return ['faxes', '/faxes/:id', args] as const
}

export function useGetFaxesId<TError = unknown>(
  args: InferRequestType<(typeof client.faxes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.faxes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaxesId<TError = unknown>(
  args: InferRequestType<(typeof client.faxes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.faxes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFaxesIdKey() {
  return ['faxes', '/faxes/:id', 'DELETE'] as const
}

export function useDeleteFaxesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.faxes)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFaxesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.faxes)[':id']['$delete']> }) =>
        parseResponse(client.faxes[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFaxesIdActionsRefreshKey() {
  return ['faxes', '/faxes/:id/actions/refresh', 'POST'] as const
}

export function usePostFaxesIdActionsRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.faxes)[':id']['actions']['refresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.faxes)[':id']['actions']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFaxesIdActionsRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.faxes)[':id']['actions']['refresh']['$post']> },
      ) => parseResponse(client.faxes[':id'].actions.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFqdnConnectionsKey(
  args: InferRequestType<typeof client.fqdn_connections.$get>,
) {
  return ['fqdn_connections', '/fqdn_connections', args] as const
}

export function useGetFqdnConnections<TError = unknown>(
  args: InferRequestType<typeof client.fqdn_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFqdnConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fqdn_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFqdnConnections<TError = unknown>(
  args: InferRequestType<typeof client.fqdn_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFqdnConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fqdn_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFqdnConnectionsKey() {
  return ['fqdn_connections', '/fqdn_connections', 'POST'] as const
}

export function usePostFqdnConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fqdn_connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFqdnConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fqdn_connections.$post> }) =>
        parseResponse(client.fqdn_connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFqdnConnectionsIdKey(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$get']>,
) {
  return ['fqdn_connections', '/fqdn_connections/:id', args] as const
}

export function useGetFqdnConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFqdnConnectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fqdn_connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFqdnConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFqdnConnectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fqdn_connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFqdnConnectionsIdKey() {
  return ['fqdn_connections', '/fqdn_connections/:id', 'DELETE'] as const
}

export function useDeleteFqdnConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fqdn_connections)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFqdnConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.fqdn_connections)[':id']['$delete']> },
      ) => parseResponse(client.fqdn_connections[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFqdnConnectionsIdKey() {
  return ['fqdn_connections', '/fqdn_connections/:id', 'PATCH'] as const
}

export function usePatchFqdnConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fqdn_connections)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFqdnConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.fqdn_connections)[':id']['$patch']> },
      ) => parseResponse(client.fqdn_connections[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFqdnsKey(args: InferRequestType<typeof client.fqdns.$get>) {
  return ['fqdns', '/fqdns', args] as const
}

export function useGetFqdns<TError = unknown>(
  args: InferRequestType<typeof client.fqdns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFqdnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fqdns.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFqdns<TError = unknown>(
  args: InferRequestType<typeof client.fqdns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFqdnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fqdns.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFqdnsKey() {
  return ['fqdns', '/fqdns', 'POST'] as const
}

export function usePostFqdns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fqdns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFqdnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fqdns.$post> }) =>
        parseResponse(client.fqdns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFqdnsIdKey(args: InferRequestType<(typeof client.fqdns)[':id']['$get']>) {
  return ['fqdns', '/fqdns/:id', args] as const
}

export function useGetFqdnsId<TError = unknown>(
  args: InferRequestType<(typeof client.fqdns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFqdnsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fqdns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFqdnsId<TError = unknown>(
  args: InferRequestType<(typeof client.fqdns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFqdnsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fqdns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFqdnsIdKey() {
  return ['fqdns', '/fqdns/:id', 'DELETE'] as const
}

export function useDeleteFqdnsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fqdns)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFqdnsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.fqdns)[':id']['$delete']> }) =>
        parseResponse(client.fqdns[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFqdnsIdKey() {
  return ['fqdns', '/fqdns/:id', 'PATCH'] as const
}

export function usePatchFqdnsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fqdns)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFqdnsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.fqdns)[':id']['$patch']> }) =>
        parseResponse(client.fqdns[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInventoryCoverageKey(
  args: InferRequestType<typeof client.inventory_coverage.$get>,
) {
  return ['inventory_coverage', '/inventory_coverage', args] as const
}

export function useGetInventoryCoverage<TError = unknown>(
  args: InferRequestType<typeof client.inventory_coverage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_coverage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInventoryCoverageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_coverage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inventory_coverage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInventoryCoverage<TError = unknown>(
  args: InferRequestType<typeof client.inventory_coverage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_coverage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInventoryCoverageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_coverage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inventory_coverage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpConnectionsKey(args: InferRequestType<typeof client.ip_connections.$get>) {
  return ['ip_connections', '/ip_connections', args] as const
}

export function useGetIpConnections<TError = unknown>(
  args: InferRequestType<typeof client.ip_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpConnections<TError = unknown>(
  args: InferRequestType<typeof client.ip_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpConnectionsKey() {
  return ['ip_connections', '/ip_connections', 'POST'] as const
}

export function usePostIpConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ip_connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ip_connections.$post> }) =>
        parseResponse(client.ip_connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpConnectionsIdKey(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$get']>,
) {
  return ['ip_connections', '/ip_connections/:id', args] as const
}

export function useGetIpConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpConnectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpConnectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIpConnectionsIdKey() {
  return ['ip_connections', '/ip_connections/:id', 'DELETE'] as const
}

export function useDeleteIpConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ip_connections)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ip_connections)[':id']['$delete']> },
      ) => parseResponse(client.ip_connections[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpConnectionsIdKey() {
  return ['ip_connections', '/ip_connections/:id', 'PATCH'] as const
}

export function usePatchIpConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ip_connections)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ip_connections)[':id']['$patch']> },
      ) => parseResponse(client.ip_connections[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
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

export function getGetIpsIdKey(args: InferRequestType<(typeof client.ips)[':id']['$get']>) {
  return ['ips', '/ips/:id', args] as const
}

export function useGetIpsId<TError = unknown>(
  args: InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpsId<TError = unknown>(
  args: InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIpsIdKey() {
  return ['ips', '/ips/:id', 'DELETE'] as const
}

export function useDeleteIpsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.ips)[':id']['$delete']> }) =>
        parseResponse(client.ips[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpsIdKey() {
  return ['ips', '/ips/:id', 'PATCH'] as const
}

export function usePatchIpsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.ips)[':id']['$patch']> }) =>
        parseResponse(client.ips[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLedgerBillingGroupReportsKey() {
  return ['ledger_billing_group_reports', '/ledger_billing_group_reports', 'POST'] as const
}

export function usePostLedgerBillingGroupReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ledger_billing_group_reports.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ledger_billing_group_reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgerBillingGroupReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ledger_billing_group_reports.$post> },
      ) => parseResponse(client.ledger_billing_group_reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLedgerBillingGroupReportsIdKey(
  args: InferRequestType<(typeof client.ledger_billing_group_reports)[':id']['$get']>,
) {
  return ['ledger_billing_group_reports', '/ledger_billing_group_reports/:id', args] as const
}

export function useGetLedgerBillingGroupReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.ledger_billing_group_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledger_billing_group_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLedgerBillingGroupReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledger_billing_group_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ledger_billing_group_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLedgerBillingGroupReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.ledger_billing_group_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledger_billing_group_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLedgerBillingGroupReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledger_billing_group_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ledger_billing_group_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetManagedAccountsKey(
  args: InferRequestType<typeof client.managed_accounts.$get>,
) {
  return ['managed_accounts', '/managed_accounts', args] as const
}

export function useGetManagedAccounts<TError = unknown>(
  args: InferRequestType<typeof client.managed_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedAccounts<TError = unknown>(
  args: InferRequestType<typeof client.managed_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostManagedAccountsKey() {
  return ['managed_accounts', '/managed_accounts', 'POST'] as const
}

export function usePostManagedAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.managed_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagedAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.managed_accounts.$post> }) =>
        parseResponse(client.managed_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManagedAccountsIdKey(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['$get']>,
) {
  return ['managed_accounts', '/managed_accounts/:id', args] as const
}

export function useGetManagedAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.managed_accounts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.managed_accounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed_accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.managed_accounts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.managed_accounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed_accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostManagedAccountsIdActionsDisableKey() {
  return ['managed_accounts', '/managed_accounts/:id/actions/disable', 'POST'] as const
}

export function usePostManagedAccountsIdActionsDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.managed_accounts)[':id']['actions']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed_accounts)[':id']['actions']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagedAccountsIdActionsDisableKey()
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
            (typeof client.managed_accounts)[':id']['actions']['disable']['$post']
          >
        },
      ) => parseResponse(client.managed_accounts[':id'].actions.disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostManagedAccountsIdActionsEnableKey() {
  return ['managed_accounts', '/managed_accounts/:id/actions/enable', 'POST'] as const
}

export function usePostManagedAccountsIdActionsEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed_accounts)[':id']['actions']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed_accounts)[':id']['actions']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagedAccountsIdActionsEnableKey()
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
            (typeof client.managed_accounts)[':id']['actions']['enable']['$post']
          >
        },
      ) => parseResponse(client.managed_accounts[':id'].actions.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMediaKey() {
  return ['media', '/media'] as const
}

export function useGetMedia<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMediaKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMedia<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMediaKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMediaKey() {
  return ['media', '/media', 'POST'] as const
}

export function usePostMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.media.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.media.$post> }) =>
        parseResponse(client.media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMediaMediaNameKey(
  args: InferRequestType<(typeof client.media)[':media_name']['$get']>,
) {
  return ['media', '/media/:media_name', args] as const
}

export function useGetMediaMediaName<TError = unknown>(
  args: InferRequestType<(typeof client.media)[':media_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMediaMediaNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media[':media_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaMediaName<TError = unknown>(
  args: InferRequestType<(typeof client.media)[':media_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMediaMediaNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media[':media_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMediaMediaNameKey() {
  return ['media', '/media/:media_name', 'PUT'] as const
}

export function usePutMediaMediaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.media)[':media_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMediaMediaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.media)[':media_name']['$put']> },
      ) => parseResponse(client.media[':media_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMediaMediaNameKey() {
  return ['media', '/media/:media_name', 'DELETE'] as const
}

export function useDeleteMediaMediaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.media)[':media_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMediaMediaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.media)[':media_name']['$delete']> },
      ) => parseResponse(client.media[':media_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMediaMediaNameDownloadKey(
  args: InferRequestType<(typeof client.media)[':media_name']['download']['$get']>,
) {
  return ['media', '/media/:media_name/download', args] as const
}

export function useGetMediaMediaNameDownload<TError = unknown>(
  args: InferRequestType<(typeof client.media)[':media_name']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media)[':media_name']['download']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMediaMediaNameDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media)[':media_name']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media[':media_name'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaMediaNameDownload<TError = unknown>(
  args: InferRequestType<(typeof client.media)[':media_name']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media)[':media_name']['download']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMediaMediaNameDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media)[':media_name']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media[':media_name'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessageDetailRecordsKey(
  args: InferRequestType<typeof client.message_detail_records.$get>,
) {
  return ['message_detail_records', '/message_detail_records', args] as const
}

export function useGetMessageDetailRecords<TError = unknown>(
  args: InferRequestType<typeof client.message_detail_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.message_detail_records.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageDetailRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.message_detail_records.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_detail_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessageDetailRecords<TError = unknown>(
  args: InferRequestType<typeof client.message_detail_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.message_detail_records.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageDetailRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.message_detail_records.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_detail_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessageDetailRecordsIdMessageBodyKey(
  args: InferRequestType<(typeof client.message_detail_records)[':id']['message_body']['$get']>,
) {
  return ['message_detail_records', '/message_detail_records/:id/message_body', args] as const
}

export function useGetMessageDetailRecordsIdMessageBody<TError = unknown>(
  args: InferRequestType<(typeof client.message_detail_records)[':id']['message_body']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.message_detail_records)[':id']['message_body']['$get']>
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
        ? getGetMessageDetailRecordsIdMessageBodyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.message_detail_records)[':id']['message_body']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.message_detail_records[':id'].message_body.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessageDetailRecordsIdMessageBody<TError = unknown>(
  args: InferRequestType<(typeof client.message_detail_records)[':id']['message_body']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.message_detail_records)[':id']['message_body']['$get']>
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
        ? getGetMessageDetailRecordsIdMessageBodyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.message_detail_records)[':id']['message_body']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.message_detail_records[':id'].message_body.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagesKey() {
  return ['messages', '/messages', 'POST'] as const
}

export function usePostMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.$post> }) =>
        parseResponse(client.messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesLongCodeKey() {
  return ['messages', '/messages/long_code', 'POST'] as const
}

export function usePostMessagesLongCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.long_code.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.long_code.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesLongCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.long_code.$post> }) =>
        parseResponse(client.messages.long_code.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesNumberPoolKey() {
  return ['messages', '/messages/number_pool', 'POST'] as const
}

export function usePostMessagesNumberPool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messages.number_pool.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.number_pool.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesNumberPoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messages.number_pool.$post> },
      ) => parseResponse(client.messages.number_pool.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesShortCodeKey() {
  return ['messages', '/messages/short_code', 'POST'] as const
}

export function usePostMessagesShortCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.short_code.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.short_code.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesShortCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.short_code.$post> }) =>
        parseResponse(client.messages.short_code.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagesIdKey(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
) {
  return ['messages', '/messages/:id', args] as const
}

export function useGetMessagesId<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesId<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagingHostedNumberOrdersKey(
  args: InferRequestType<typeof client.messaging_hosted_number_orders.$get>,
) {
  return ['messaging_hosted_number_orders', '/messaging_hosted_number_orders', args] as const
}

export function useGetMessagingHostedNumberOrders<TError = unknown>(
  args: InferRequestType<typeof client.messaging_hosted_number_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingHostedNumberOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_hosted_number_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingHostedNumberOrders<TError = unknown>(
  args: InferRequestType<typeof client.messaging_hosted_number_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingHostedNumberOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_hosted_number_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagingHostedNumberOrdersKey() {
  return ['messaging_hosted_number_orders', '/messaging_hosted_number_orders', 'POST'] as const
}

export function usePostMessagingHostedNumberOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging_hosted_number_orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingHostedNumberOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging_hosted_number_orders.$post> },
      ) => parseResponse(client.messaging_hosted_number_orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagingHostedNumberOrdersIdKey(
  args: InferRequestType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>,
) {
  return ['messaging_hosted_number_orders', '/messaging_hosted_number_orders/:id', args] as const
}

export function useGetMessagingHostedNumberOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingHostedNumberOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging_hosted_number_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingHostedNumberOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingHostedNumberOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging_hosted_number_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagingHostedNumberOrdersIdActionsFileUploadKey() {
  return [
    'messaging_hosted_number_orders',
    '/messaging_hosted_number_orders/:id/actions/file_upload',
    'POST',
  ] as const
}

export function usePostMessagingHostedNumberOrdersIdActionsFileUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.messaging_hosted_number_orders)[':id']['actions']['file_upload']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.messaging_hosted_number_orders)[':id']['actions']['file_upload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingHostedNumberOrdersIdActionsFileUploadKey()
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
            (typeof client.messaging_hosted_number_orders)[':id']['actions']['file_upload']['$post']
          >
        },
      ) =>
        parseResponse(
          client.messaging_hosted_number_orders[':id'].actions.file_upload.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMessagingHostedNumbersIdKey() {
  return ['messaging_hosted_numbers', '/messaging_hosted_numbers/:id', 'DELETE'] as const
}

export function useDeleteMessagingHostedNumbersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging_hosted_numbers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging_hosted_numbers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessagingHostedNumbersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.messaging_hosted_numbers)[':id']['$delete']> },
      ) => parseResponse(client.messaging_hosted_numbers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagingProfileMetricsKey(
  args: InferRequestType<typeof client.messaging_profile_metrics.$get>,
) {
  return ['messaging_profile_metrics', '/messaging_profile_metrics', args] as const
}

export function useGetMessagingProfileMetrics<TError = unknown>(
  args: InferRequestType<typeof client.messaging_profile_metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profile_metrics.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfileMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profile_metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_profile_metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingProfileMetrics<TError = unknown>(
  args: InferRequestType<typeof client.messaging_profile_metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profile_metrics.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfileMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profile_metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_profile_metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagingProfilesKey(
  args: InferRequestType<typeof client.messaging_profiles.$get>,
) {
  return ['messaging_profiles', '/messaging_profiles', args] as const
}

export function useGetMessagingProfiles<TError = unknown>(
  args: InferRequestType<typeof client.messaging_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingProfiles<TError = unknown>(
  args: InferRequestType<typeof client.messaging_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagingProfilesKey() {
  return ['messaging_profiles', '/messaging_profiles', 'POST'] as const
}

export function usePostMessagingProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging_profiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messaging_profiles.$post> }) =>
        parseResponse(client.messaging_profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagingProfilesIdKey(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$get']>,
) {
  return ['messaging_profiles', '/messaging_profiles/:id', args] as const
}

export function useGetMessagingProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMessagingProfilesIdKey() {
  return ['messaging_profiles', '/messaging_profiles/:id', 'DELETE'] as const
}

export function useDeleteMessagingProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging_profiles)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessagingProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messaging_profiles)[':id']['$delete']> },
      ) => parseResponse(client.messaging_profiles[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingProfilesIdKey() {
  return ['messaging_profiles', '/messaging_profiles/:id', 'PATCH'] as const
}

export function usePatchMessagingProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging_profiles)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messaging_profiles)[':id']['$patch']> },
      ) => parseResponse(client.messaging_profiles[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagingProfilesIdMetricsKey(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>,
) {
  return ['messaging_profiles', '/messaging_profiles/:id/metrics', args] as const
}

export function useGetMessagingProfilesIdMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfilesIdMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_profiles[':id'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingProfilesIdMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfilesIdMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_profiles[':id'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagingProfilesIdPhoneNumbersKey(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>,
) {
  return ['messaging_profiles', '/messaging_profiles/:id/phone_numbers', args] as const
}

export function useGetMessagingProfilesIdPhoneNumbers<TError = unknown>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfilesIdPhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging_profiles[':id'].phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingProfilesIdPhoneNumbers<TError = unknown>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfilesIdPhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging_profiles[':id'].phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagingProfilesIdShortCodesKey(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>,
) {
  return ['messaging_profiles', '/messaging_profiles/:id/short_codes', args] as const
}

export function useGetMessagingProfilesIdShortCodes<TError = unknown>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfilesIdShortCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging_profiles[':id'].short_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingProfilesIdShortCodes<TError = unknown>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingProfilesIdShortCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging_profiles[':id'].short_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagingUrlDomainsKey(
  args: InferRequestType<typeof client.messaging_url_domains.$get>,
) {
  return ['messaging_url_domains', '/messaging_url_domains', args] as const
}

export function useGetMessagingUrlDomains<TError = unknown>(
  args: InferRequestType<typeof client.messaging_url_domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging_url_domains.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingUrlDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging_url_domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_url_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingUrlDomains<TError = unknown>(
  args: InferRequestType<typeof client.messaging_url_domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging_url_domains.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagingUrlDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging_url_domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging_url_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMobileOperatorNetworksKey(
  args: InferRequestType<typeof client.mobile_operator_networks.$get>,
) {
  return ['mobile_operator_networks', '/mobile_operator_networks', args] as const
}

export function useGetMobileOperatorNetworks<TError = unknown>(
  args: InferRequestType<typeof client.mobile_operator_networks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mobile_operator_networks.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMobileOperatorNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mobile_operator_networks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mobile_operator_networks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMobileOperatorNetworks<TError = unknown>(
  args: InferRequestType<typeof client.mobile_operator_networks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mobile_operator_networks.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMobileOperatorNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mobile_operator_networks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mobile_operator_networks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationChannelsKey(
  args: InferRequestType<typeof client.notification_channels.$get>,
) {
  return ['notification_channels', '/notification_channels', args] as const
}

export function useGetNotificationChannels<TError = unknown>(
  args: InferRequestType<typeof client.notification_channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationChannels<TError = unknown>(
  args: InferRequestType<typeof client.notification_channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationChannelsKey() {
  return ['notification_channels', '/notification_channels', 'POST'] as const
}

export function usePostNotificationChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notification_channels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notification_channels.$post> },
      ) => parseResponse(client.notification_channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationChannelsIdKey(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$get']>,
) {
  return ['notification_channels', '/notification_channels/:id', args] as const
}

export function useGetNotificationChannelsId<TError = unknown>(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_channels)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationChannelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_channels)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_channels[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationChannelsId<TError = unknown>(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_channels)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationChannelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_channels)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_channels[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNotificationChannelsIdKey() {
  return ['notification_channels', '/notification_channels/:id', 'DELETE'] as const
}

export function useDeleteNotificationChannelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_channels)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notification_channels)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationChannelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notification_channels)[':id']['$delete']> },
      ) => parseResponse(client.notification_channels[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNotificationChannelsIdKey() {
  return ['notification_channels', '/notification_channels/:id', 'PATCH'] as const
}

export function usePatchNotificationChannelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_channels)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notification_channels)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNotificationChannelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notification_channels)[':id']['$patch']> },
      ) => parseResponse(client.notification_channels[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationEventConditionsKey(
  args: InferRequestType<typeof client.notification_event_conditions.$get>,
) {
  return ['notification_event_conditions', '/notification_event_conditions', args] as const
}

export function useGetNotificationEventConditions<TError = unknown>(
  args: InferRequestType<typeof client.notification_event_conditions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notification_event_conditions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationEventConditionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notification_event_conditions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_event_conditions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationEventConditions<TError = unknown>(
  args: InferRequestType<typeof client.notification_event_conditions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notification_event_conditions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationEventConditionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notification_event_conditions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_event_conditions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationEventsKey(
  args: InferRequestType<typeof client.notification_events.$get>,
) {
  return ['notification_events', '/notification_events', args] as const
}

export function useGetNotificationEvents<TError = unknown>(
  args: InferRequestType<typeof client.notification_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_events.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationEvents<TError = unknown>(
  args: InferRequestType<typeof client.notification_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_events.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationProfilesKey(
  args: InferRequestType<typeof client.notification_profiles.$get>,
) {
  return ['notification_profiles', '/notification_profiles', args] as const
}

export function useGetNotificationProfiles<TError = unknown>(
  args: InferRequestType<typeof client.notification_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationProfiles<TError = unknown>(
  args: InferRequestType<typeof client.notification_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationProfilesKey() {
  return ['notification_profiles', '/notification_profiles', 'POST'] as const
}

export function usePostNotificationProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notification_profiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notification_profiles.$post> },
      ) => parseResponse(client.notification_profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationProfilesIdKey(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$get']>,
) {
  return ['notification_profiles', '/notification_profiles/:id', args] as const
}

export function useGetNotificationProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNotificationProfilesIdKey() {
  return ['notification_profiles', '/notification_profiles/:id', 'DELETE'] as const
}

export function useDeleteNotificationProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notification_profiles)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notification_profiles)[':id']['$delete']> },
      ) => parseResponse(client.notification_profiles[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNotificationProfilesIdKey() {
  return ['notification_profiles', '/notification_profiles/:id', 'PATCH'] as const
}

export function usePatchNotificationProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notification_profiles)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNotificationProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notification_profiles)[':id']['$patch']> },
      ) => parseResponse(client.notification_profiles[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationSettingsKey(
  args: InferRequestType<typeof client.notification_settings.$get>,
) {
  return ['notification_settings', '/notification_settings', args] as const
}

export function useGetNotificationSettings<TError = unknown>(
  args: InferRequestType<typeof client.notification_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationSettings<TError = unknown>(
  args: InferRequestType<typeof client.notification_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationSettingsKey() {
  return ['notification_settings', '/notification_settings', 'POST'] as const
}

export function usePostNotificationSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notification_settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notification_settings.$post> },
      ) => parseResponse(client.notification_settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationSettingsIdKey(
  args: InferRequestType<(typeof client.notification_settings)[':id']['$get']>,
) {
  return ['notification_settings', '/notification_settings/:id', args] as const
}

export function useGetNotificationSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.notification_settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_settings)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationSettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_settings)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.notification_settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_settings)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationSettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_settings)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNotificationSettingsIdKey() {
  return ['notification_settings', '/notification_settings/:id', 'DELETE'] as const
}

export function useDeleteNotificationSettingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_settings)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notification_settings)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationSettingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notification_settings)[':id']['$delete']> },
      ) => parseResponse(client.notification_settings[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNumberBlockOrdersKey(
  args: InferRequestType<typeof client.number_block_orders.$get>,
) {
  return ['number_block_orders', '/number_block_orders', args] as const
}

export function useGetNumberBlockOrders<TError = unknown>(
  args: InferRequestType<typeof client.number_block_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumberBlockOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_block_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberBlockOrders<TError = unknown>(
  args: InferRequestType<typeof client.number_block_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumberBlockOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_block_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNumberBlockOrdersKey() {
  return ['number_block_orders', '/number_block_orders', 'POST'] as const
}

export function usePostNumberBlockOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.number_block_orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNumberBlockOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.number_block_orders.$post> }) =>
        parseResponse(client.number_block_orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNumberBlockOrdersNumberBlockOrderIdKey(
  args: InferRequestType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>,
) {
  return ['number_block_orders', '/number_block_orders/:number_block_order_id', args] as const
}

export function useGetNumberBlockOrdersNumberBlockOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>
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
        ? getGetNumberBlockOrdersNumberBlockOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.number_block_orders[':number_block_order_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberBlockOrdersNumberBlockOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>
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
        ? getGetNumberBlockOrdersNumberBlockOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.number_block_orders[':number_block_order_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNumberLookupPhoneNumberKey(
  args: InferRequestType<(typeof client.number_lookup)[':phone_number']['$get']>,
) {
  return ['number_lookup', '/number_lookup/:phone_number', args] as const
}

export function useGetNumberLookupPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client.number_lookup)[':phone_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.number_lookup)[':phone_number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumberLookupPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.number_lookup)[':phone_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_lookup[':phone_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberLookupPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client.number_lookup)[':phone_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.number_lookup)[':phone_number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumberLookupPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.number_lookup)[':phone_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_lookup[':phone_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumberOrderDocumentsKey(
  args: InferRequestType<typeof client.number_order_documents.$get>,
) {
  return ['number_order_documents', '/number_order_documents', args] as const
}

export function useGetNumberOrderDocuments<TError = unknown>(
  args: InferRequestType<typeof client.number_order_documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumberOrderDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_order_documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberOrderDocuments<TError = unknown>(
  args: InferRequestType<typeof client.number_order_documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumberOrderDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_order_documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNumberOrderDocumentsKey() {
  return ['number_order_documents', '/number_order_documents', 'POST'] as const
}

export function usePostNumberOrderDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.number_order_documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNumberOrderDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.number_order_documents.$post> },
      ) => parseResponse(client.number_order_documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNumberOrderDocumentsNumberOrderDocumentIdKey(
  args: InferRequestType<
    (typeof client.number_order_documents)[':number_order_document_id']['$get']
  >,
) {
  return [
    'number_order_documents',
    '/number_order_documents/:number_order_document_id',
    args,
  ] as const
}

export function useGetNumberOrderDocumentsNumberOrderDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.number_order_documents)[':number_order_document_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.number_order_documents)[':number_order_document_id']['$get']
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
        ? getGetNumberOrderDocumentsNumberOrderDocumentIdKey(args)
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
                (typeof client.number_order_documents)[':number_order_document_id']['$get']
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
          client.number_order_documents[':number_order_document_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberOrderDocumentsNumberOrderDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.number_order_documents)[':number_order_document_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.number_order_documents)[':number_order_document_id']['$get']
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
        ? getGetNumberOrderDocumentsNumberOrderDocumentIdKey(args)
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
                (typeof client.number_order_documents)[':number_order_document_id']['$get']
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
          client.number_order_documents[':number_order_document_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchNumberOrderDocumentsNumberOrderDocumentIdKey() {
  return [
    'number_order_documents',
    '/number_order_documents/:number_order_document_id',
    'PATCH',
  ] as const
}

export function usePatchNumberOrderDocumentsNumberOrderDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.number_order_documents)[':number_order_document_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.number_order_documents)[':number_order_document_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNumberOrderDocumentsNumberOrderDocumentIdKey()
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
            (typeof client.number_order_documents)[':number_order_document_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.number_order_documents[':number_order_document_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNumberOrderPhoneNumbersKey() {
  return ['number_order_phone_numbers', '/number_order_phone_numbers'] as const
}

export function useGetNumberOrderPhoneNumbers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.number_order_phone_numbers.$get>>>
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
        ? getGetNumberOrderPhoneNumbersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_order_phone_numbers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_order_phone_numbers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberOrderPhoneNumbers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.number_order_phone_numbers.$get>>>
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
        ? getGetNumberOrderPhoneNumbersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_order_phone_numbers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_order_phone_numbers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumberOrderPhoneNumbersNumberOrderPhoneNumberIdKey(
  args: InferRequestType<
    (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
  >,
) {
  return [
    'number_order_phone_numbers',
    '/number_order_phone_numbers/:number_order_phone_number_id',
    args,
  ] as const
}

export function useGetNumberOrderPhoneNumbersNumberOrderPhoneNumberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
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
        ? getGetNumberOrderPhoneNumbersNumberOrderPhoneNumberIdKey(args)
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
                (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
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
          client.number_order_phone_numbers[':number_order_phone_number_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberOrderPhoneNumbersNumberOrderPhoneNumberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
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
        ? getGetNumberOrderPhoneNumbersNumberOrderPhoneNumberIdKey(args)
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
                (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
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
          client.number_order_phone_numbers[':number_order_phone_number_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdKey() {
  return [
    'number_order_phone_numbers',
    '/number_order_phone_numbers/:number_order_phone_number_id',
    'PATCH',
  ] as const
}

export function usePatchNumberOrderPhoneNumbersNumberOrderPhoneNumberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdKey()
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
            (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.number_order_phone_numbers[':number_order_phone_number_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNumberOrdersKey(args: InferRequestType<typeof client.number_orders.$get>) {
  return ['number_orders', '/number_orders', args] as const
}

export function useGetNumberOrders<TError = unknown>(
  args: InferRequestType<typeof client.number_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumberOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberOrders<TError = unknown>(
  args: InferRequestType<typeof client.number_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumberOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNumberOrdersKey() {
  return ['number_orders', '/number_orders', 'POST'] as const
}

export function usePostNumberOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.number_orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNumberOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.number_orders.$post> }) =>
        parseResponse(client.number_orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNumberOrdersNumberOrderIdKey(
  args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$get']>,
) {
  return ['number_orders', '/number_orders/:number_order_id', args] as const
}

export function useGetNumberOrdersNumberOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumberOrdersNumberOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_orders[':number_order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberOrdersNumberOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumberOrdersNumberOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_orders[':number_order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchNumberOrdersNumberOrderIdKey() {
  return ['number_orders', '/number_orders/:number_order_id', 'PATCH'] as const
}

export function usePatchNumberOrdersNumberOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.number_orders)[':number_order_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNumberOrdersNumberOrderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.number_orders)[':number_order_id']['$patch']> },
      ) => parseResponse(client.number_orders[':number_order_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNumberReservationsKey(
  args: InferRequestType<typeof client.number_reservations.$get>,
) {
  return ['number_reservations', '/number_reservations', args] as const
}

export function useGetNumberReservations<TError = unknown>(
  args: InferRequestType<typeof client.number_reservations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumberReservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_reservations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberReservations<TError = unknown>(
  args: InferRequestType<typeof client.number_reservations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumberReservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number_reservations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNumberReservationsKey() {
  return ['number_reservations', '/number_reservations', 'POST'] as const
}

export function usePostNumberReservations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.number_reservations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNumberReservationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.number_reservations.$post> }) =>
        parseResponse(client.number_reservations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNumberReservationsNumberReservationIdKey(
  args: InferRequestType<(typeof client.number_reservations)[':number_reservation_id']['$get']>,
) {
  return ['number_reservations', '/number_reservations/:number_reservation_id', args] as const
}

export function useGetNumberReservationsNumberReservationId<TError = unknown>(
  args: InferRequestType<(typeof client.number_reservations)[':number_reservation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.number_reservations)[':number_reservation_id']['$get']>
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
        ? getGetNumberReservationsNumberReservationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.number_reservations)[':number_reservation_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.number_reservations[':number_reservation_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberReservationsNumberReservationId<TError = unknown>(
  args: InferRequestType<(typeof client.number_reservations)[':number_reservation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.number_reservations)[':number_reservation_id']['$get']>
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
        ? getGetNumberReservationsNumberReservationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.number_reservations)[':number_reservation_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.number_reservations[':number_reservation_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNumberReservationsNumberReservationIdActionsExtendKey() {
  return [
    'number_reservations',
    '/number_reservations/:number_reservation_id/actions/extend',
    'POST',
  ] as const
}

export function usePostNumberReservationsNumberReservationIdActionsExtend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.number_reservations)[':number_reservation_id']['actions']['extend']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.number_reservations)[':number_reservation_id']['actions']['extend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNumberReservationsNumberReservationIdActionsExtendKey()
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
            (typeof client.number_reservations)[':number_reservation_id']['actions']['extend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.number_reservations[':number_reservation_id'].actions.extend.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOtaUpdatesKey(args: InferRequestType<typeof client.ota_updates.$get>) {
  return ['ota_updates', '/ota_updates', args] as const
}

export function useGetOtaUpdates<TError = unknown>(
  args: InferRequestType<typeof client.ota_updates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ota_updates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOtaUpdatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ota_updates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ota_updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOtaUpdates<TError = unknown>(
  args: InferRequestType<typeof client.ota_updates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ota_updates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOtaUpdatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ota_updates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ota_updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOtaUpdatesIdKey(
  args: InferRequestType<(typeof client.ota_updates)[':id']['$get']>,
) {
  return ['ota_updates', '/ota_updates/:id', args] as const
}

export function useGetOtaUpdatesId<TError = unknown>(
  args: InferRequestType<(typeof client.ota_updates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ota_updates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOtaUpdatesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ota_updates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ota_updates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOtaUpdatesId<TError = unknown>(
  args: InferRequestType<(typeof client.ota_updates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ota_updates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOtaUpdatesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ota_updates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ota_updates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOutboundVoiceProfilesKey(
  args: InferRequestType<typeof client.outbound_voice_profiles.$get>,
) {
  return ['outbound_voice_profiles', '/outbound_voice_profiles', args] as const
}

export function useGetOutboundVoiceProfiles<TError = unknown>(
  args: InferRequestType<typeof client.outbound_voice_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOutboundVoiceProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.outbound_voice_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOutboundVoiceProfiles<TError = unknown>(
  args: InferRequestType<typeof client.outbound_voice_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOutboundVoiceProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.outbound_voice_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOutboundVoiceProfilesKey() {
  return ['outbound_voice_profiles', '/outbound_voice_profiles', 'POST'] as const
}

export function usePostOutboundVoiceProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.outbound_voice_profiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOutboundVoiceProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.outbound_voice_profiles.$post> },
      ) => parseResponse(client.outbound_voice_profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOutboundVoiceProfilesIdKey(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$get']>,
) {
  return ['outbound_voice_profiles', '/outbound_voice_profiles/:id', args] as const
}

export function useGetOutboundVoiceProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOutboundVoiceProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.outbound_voice_profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOutboundVoiceProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOutboundVoiceProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.outbound_voice_profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOutboundVoiceProfilesIdKey() {
  return ['outbound_voice_profiles', '/outbound_voice_profiles/:id', 'DELETE'] as const
}

export function useDeleteOutboundVoiceProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOutboundVoiceProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$delete']> },
      ) => parseResponse(client.outbound_voice_profiles[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOutboundVoiceProfilesIdKey() {
  return ['outbound_voice_profiles', '/outbound_voice_profiles/:id', 'PATCH'] as const
}

export function usePatchOutboundVoiceProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOutboundVoiceProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$patch']> },
      ) => parseResponse(client.outbound_voice_profiles[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneNumberBlocksJobsKey(
  args: InferRequestType<typeof client.phone_number_blocks.jobs.$get>,
) {
  return ['phone_number_blocks', '/phone_number_blocks/jobs', args] as const
}

export function useGetPhoneNumberBlocksJobs<TError = unknown>(
  args: InferRequestType<typeof client.phone_number_blocks.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_number_blocks.jobs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumberBlocksJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_number_blocks.jobs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_number_blocks.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumberBlocksJobs<TError = unknown>(
  args: InferRequestType<typeof client.phone_number_blocks.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_number_blocks.jobs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumberBlocksJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_number_blocks.jobs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_number_blocks.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneNumberBlocksJobsDeletePhoneNumberBlockKey() {
  return [
    'phone_number_blocks',
    '/phone_number_blocks/jobs/delete_phone_number_block',
    'POST',
  ] as const
}

export function usePostPhoneNumberBlocksJobsDeletePhoneNumberBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.phone_number_blocks.jobs.delete_phone_number_block.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone_number_blocks.jobs.delete_phone_number_block.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumberBlocksJobsDeletePhoneNumberBlockKey()
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
            typeof client.phone_number_blocks.jobs.delete_phone_number_block.$post
          >
        },
      ) =>
        parseResponse(
          client.phone_number_blocks.jobs.delete_phone_number_block.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneNumberBlocksJobsIdKey(
  args: InferRequestType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>,
) {
  return ['phone_number_blocks', '/phone_number_blocks/jobs/:id', args] as const
}

export function useGetPhoneNumberBlocksJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumberBlocksJobsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_number_blocks.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumberBlocksJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumberBlocksJobsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_number_blocks.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumbersKey(args: InferRequestType<typeof client.phone_numbers.$get>) {
  return ['phone_numbers', '/phone_numbers', args] as const
}

export function useGetPhoneNumbers<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbers<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumbersCsvDownloadsKey(
  args: InferRequestType<typeof client.phone_numbers.csv_downloads.$get>,
) {
  return ['phone_numbers', '/phone_numbers/csv_downloads', args] as const
}

export function useGetPhoneNumbersCsvDownloads<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.csv_downloads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersCsvDownloadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.csv_downloads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersCsvDownloads<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.csv_downloads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersCsvDownloadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.csv_downloads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneNumbersCsvDownloadsKey() {
  return ['phone_numbers', '/phone_numbers/csv_downloads', 'POST'] as const
}

export function usePostPhoneNumbersCsvDownloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersCsvDownloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.phone_numbers.csv_downloads.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneNumbersCsvDownloadsIdKey(
  args: InferRequestType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/csv_downloads/:id', args] as const
}

export function useGetPhoneNumbersCsvDownloadsId<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersCsvDownloadsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone_numbers.csv_downloads[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersCsvDownloadsId<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersCsvDownloadsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone_numbers.csv_downloads[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumbersInboundChannelsKey() {
  return ['phone_numbers', '/phone_numbers/inbound_channels'] as const
}

export function useGetPhoneNumbersInboundChannels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$get>>>
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
        ? getGetPhoneNumbersInboundChannelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone_numbers.inbound_channels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersInboundChannels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$get>>>
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
        ? getGetPhoneNumbersInboundChannelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone_numbers.inbound_channels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPhoneNumbersInboundChannelsKey() {
  return ['phone_numbers', '/phone_numbers/inbound_channels', 'PATCH'] as const
}

export function usePatchPhoneNumbersInboundChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone_numbers.inbound_channels.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneNumbersInboundChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.phone_numbers.inbound_channels.$patch> },
      ) => parseResponse(client.phone_numbers.inbound_channels.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneNumbersJobsKey(
  args: InferRequestType<typeof client.phone_numbers.jobs.$get>,
) {
  return ['phone_numbers', '/phone_numbers/jobs', args] as const
}

export function useGetPhoneNumbersJobs<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersJobs<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneNumbersJobsDeletePhoneNumbersKey() {
  return ['phone_numbers', '/phone_numbers/jobs/delete_phone_numbers', 'POST'] as const
}

export function usePostPhoneNumbersJobsDeletePhoneNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.phone_numbers.jobs.delete_phone_numbers.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone_numbers.jobs.delete_phone_numbers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersJobsDeletePhoneNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.phone_numbers.jobs.delete_phone_numbers.$post> },
      ) => parseResponse(client.phone_numbers.jobs.delete_phone_numbers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneNumbersJobsUpdateEmergencySettingsKey() {
  return ['phone_numbers', '/phone_numbers/jobs/update_emergency_settings', 'POST'] as const
}

export function usePostPhoneNumbersJobsUpdateEmergencySettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.phone_numbers.jobs.update_emergency_settings.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone_numbers.jobs.update_emergency_settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersJobsUpdateEmergencySettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.phone_numbers.jobs.update_emergency_settings.$post>
        },
      ) =>
        parseResponse(
          client.phone_numbers.jobs.update_emergency_settings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneNumbersJobsUpdatePhoneNumbersKey() {
  return ['phone_numbers', '/phone_numbers/jobs/update_phone_numbers', 'POST'] as const
}

export function usePostPhoneNumbersJobsUpdatePhoneNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.phone_numbers.jobs.update_phone_numbers.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone_numbers.jobs.update_phone_numbers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersJobsUpdatePhoneNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.phone_numbers.jobs.update_phone_numbers.$post> },
      ) => parseResponse(client.phone_numbers.jobs.update_phone_numbers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneNumbersJobsIdKey(
  args: InferRequestType<(typeof client.phone_numbers.jobs)[':id']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/jobs/:id', args] as const
}

export function useGetPhoneNumbersJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers.jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers.jobs)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersJobsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers.jobs)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers.jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers.jobs)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersJobsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers.jobs)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumbersMessagingKey(
  args: InferRequestType<typeof client.phone_numbers.messaging.$get>,
) {
  return ['phone_numbers', '/phone_numbers/messaging', args] as const
}

export function useGetPhoneNumbersMessaging<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.messaging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.messaging.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersMessagingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.messaging.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.messaging.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersMessaging<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.messaging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.messaging.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersMessagingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.messaging.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.messaging.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumbersVoiceKey(
  args: InferRequestType<typeof client.phone_numbers.voice.$get>,
) {
  return ['phone_numbers', '/phone_numbers/voice', args] as const
}

export function useGetPhoneNumbersVoice<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.voice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.voice.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersVoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.voice.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.voice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersVoice<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.voice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.voice.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersVoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.voice.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.voice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumbersIdKey(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/:id', args] as const
}

export function useGetPhoneNumbersId<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumbersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersId<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumbersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePhoneNumbersIdKey() {
  return ['phone_numbers', '/phone_numbers/:id', 'DELETE'] as const
}

export function useDeletePhoneNumbersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.phone_numbers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneNumbersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.phone_numbers)[':id']['$delete']> },
      ) => parseResponse(client.phone_numbers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPhoneNumbersIdKey() {
  return ['phone_numbers', '/phone_numbers/:id', 'PATCH'] as const
}

export function usePatchPhoneNumbersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.phone_numbers)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneNumbersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.phone_numbers)[':id']['$patch']> },
      ) => parseResponse(client.phone_numbers[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneNumbersIdActionsEnableEmergencyKey() {
  return ['phone_numbers', '/phone_numbers/:id/actions/enable_emergency', 'POST'] as const
}

export function usePostPhoneNumbersIdActionsEnableEmergency<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.phone_numbers)[':id']['actions']['enable_emergency']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.phone_numbers)[':id']['actions']['enable_emergency']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersIdActionsEnableEmergencyKey()
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
            (typeof client.phone_numbers)[':id']['actions']['enable_emergency']['$post']
          >
        },
      ) =>
        parseResponse(
          client.phone_numbers[':id'].actions.enable_emergency.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneNumbersIdMessagingKey(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/:id/messaging', args] as const
}

export function useGetPhoneNumbersIdMessaging<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersIdMessagingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers[':id'].messaging.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersIdMessaging<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersIdMessagingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers[':id'].messaging.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPhoneNumbersIdMessagingKey() {
  return ['phone_numbers', '/phone_numbers/:id/messaging', 'PATCH'] as const
}

export function usePatchPhoneNumbersIdMessaging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneNumbersIdMessagingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$patch']> },
      ) => parseResponse(client.phone_numbers[':id'].messaging.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneNumbersIdVoiceKey(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/:id/voice', args] as const
}

export function useGetPhoneNumbersIdVoice<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersIdVoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers[':id'].voice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersIdVoice<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneNumbersIdVoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers[':id'].voice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPhoneNumbersIdVoiceKey() {
  return ['phone_numbers', '/phone_numbers/:id/voice', 'PATCH'] as const
}

export function usePatchPhoneNumbersIdVoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneNumbersIdVoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$patch']> },
      ) => parseResponse(client.phone_numbers[':id'].voice.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortabilityChecksKey() {
  return ['portability_checks', '/portability_checks', 'POST'] as const
}

export function usePostPortabilityChecks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portability_checks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.portability_checks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortabilityChecksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.portability_checks.$post> }) =>
        parseResponse(client.portability_checks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPortingOrdersKey(args: InferRequestType<typeof client.porting_orders.$get>) {
  return ['porting_orders', '/porting_orders', args] as const
}

export function useGetPortingOrders<TError = unknown>(
  args: InferRequestType<typeof client.porting_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortingOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.porting_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortingOrders<TError = unknown>(
  args: InferRequestType<typeof client.porting_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortingOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.porting_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPortingOrdersKey() {
  return ['porting_orders', '/porting_orders', 'POST'] as const
}

export function usePostPortingOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.porting_orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortingOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.porting_orders.$post> }) =>
        parseResponse(client.porting_orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPortingOrdersExceptionTypesKey() {
  return ['porting_orders', '/porting_orders/exception_types'] as const
}

export function useGetPortingOrdersExceptionTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.exception_types.$get>>>
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
        ? getGetPortingOrdersExceptionTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.porting_orders.exception_types.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.porting_orders.exception_types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortingOrdersExceptionTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.exception_types.$get>>>
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
        ? getGetPortingOrdersExceptionTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.porting_orders.exception_types.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.porting_orders.exception_types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPortingOrdersIdKey(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$get']>,
) {
  return ['porting_orders', '/porting_orders/:id', args] as const
}

export function useGetPortingOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortingOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.porting_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortingOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortingOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.porting_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePortingOrdersIdKey() {
  return ['porting_orders', '/porting_orders/:id', 'DELETE'] as const
}

export function useDeletePortingOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.porting_orders)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePortingOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.porting_orders)[':id']['$delete']> },
      ) => parseResponse(client.porting_orders[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPortingOrdersIdKey() {
  return ['porting_orders', '/porting_orders/:id', 'PATCH'] as const
}

export function usePatchPortingOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.porting_orders)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPortingOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.porting_orders)[':id']['$patch']> },
      ) => parseResponse(client.porting_orders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortingOrdersIdActionsActivateKey() {
  return ['porting_orders', '/porting_orders/:id/actions/activate', 'POST'] as const
}

export function usePostPortingOrdersIdActionsActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.porting_orders)[':id']['actions']['activate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.porting_orders)[':id']['actions']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortingOrdersIdActionsActivateKey()
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
            (typeof client.porting_orders)[':id']['actions']['activate']['$post']
          >
        },
      ) => parseResponse(client.porting_orders[':id'].actions.activate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortingOrdersIdActionsCancelKey() {
  return ['porting_orders', '/porting_orders/:id/actions/cancel', 'POST'] as const
}

export function usePostPortingOrdersIdActionsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.porting_orders)[':id']['actions']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.porting_orders)[':id']['actions']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortingOrdersIdActionsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.porting_orders)[':id']['actions']['cancel']['$post']>
        },
      ) => parseResponse(client.porting_orders[':id'].actions.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortingOrdersIdActionsConfirmKey() {
  return ['porting_orders', '/porting_orders/:id/actions/confirm', 'POST'] as const
}

export function usePostPortingOrdersIdActionsConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.porting_orders)[':id']['actions']['confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.porting_orders)[':id']['actions']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortingOrdersIdActionsConfirmKey()
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
            (typeof client.porting_orders)[':id']['actions']['confirm']['$post']
          >
        },
      ) => parseResponse(client.porting_orders[':id'].actions.confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPortingOrdersIdActivationJobsKey(
  args: InferRequestType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>,
) {
  return ['porting_orders', '/porting_orders/:id/activation_jobs', args] as const
}

export function useGetPortingOrdersIdActivationJobs<TError = unknown>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortingOrdersIdActivationJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.porting_orders[':id'].activation_jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortingOrdersIdActivationJobs<TError = unknown>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortingOrdersIdActivationJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.porting_orders[':id'].activation_jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPortingOrdersIdActivationJobsActivationJobIdKey(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
  >,
) {
  return ['porting_orders', '/porting_orders/:id/activation_jobs/:activationJobId', args] as const
}

export function useGetPortingOrdersIdActivationJobsActivationJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
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
        ? getGetPortingOrdersIdActivationJobsActivationJobIdKey(args)
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
                (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
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
          client.porting_orders[':id'].activation_jobs[':activationJobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortingOrdersIdActivationJobsActivationJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
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
        ? getGetPortingOrdersIdActivationJobsActivationJobIdKey(args)
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
                (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
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
          client.porting_orders[':id'].activation_jobs[':activationJobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPortingOrdersIdCommentsKey(
  args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$get']>,
) {
  return ['porting_orders', '/porting_orders/:id/comments', args] as const
}

export function useGetPortingOrdersIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortingOrdersIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.porting_orders[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortingOrdersIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortingOrdersIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.porting_orders[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPortingOrdersIdCommentsKey() {
  return ['porting_orders', '/porting_orders/:id/comments', 'POST'] as const
}

export function usePostPortingOrdersIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.porting_orders)[':id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortingOrdersIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$post']> },
      ) => parseResponse(client.porting_orders[':id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPortingOrdersIdLoaTemplateKey(
  args: InferRequestType<(typeof client.porting_orders)[':id']['loa_template']['$get']>,
) {
  return ['porting_orders', '/porting_orders/:id/loa_template', args] as const
}

export function useGetPortingOrdersIdLoaTemplate<TError = unknown>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['loa_template']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['loa_template']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortingOrdersIdLoaTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['loa_template']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.porting_orders[':id'].loa_template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortingOrdersIdLoaTemplate<TError = unknown>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['loa_template']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['loa_template']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortingOrdersIdLoaTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.porting_orders)[':id']['loa_template']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.porting_orders[':id'].loa_template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPortingPhoneNumbersKey(
  args: InferRequestType<typeof client.porting_phone_numbers.$get>,
) {
  return ['porting_phone_numbers', '/porting_phone_numbers', args] as const
}

export function useGetPortingPhoneNumbers<TError = unknown>(
  args: InferRequestType<typeof client.porting_phone_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.porting_phone_numbers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortingPhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.porting_phone_numbers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.porting_phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortingPhoneNumbers<TError = unknown>(
  args: InferRequestType<typeof client.porting_phone_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.porting_phone_numbers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortingPhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.porting_phone_numbers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.porting_phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPortoutsKey(args: InferRequestType<typeof client.portouts.$get>) {
  return ['portouts', '/portouts', args] as const
}

export function useGetPortouts<TError = unknown>(
  args: InferRequestType<typeof client.portouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portouts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portouts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.portouts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPortouts<TError = unknown>(
  args: InferRequestType<typeof client.portouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portouts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portouts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.portouts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPortoutsIdKey(
  args: InferRequestType<(typeof client.portouts)[':id']['$get']>,
) {
  return ['portouts', '/portouts/:id', args] as const
}

export function useGetPortoutsId<TError = unknown>(
  args: InferRequestType<(typeof client.portouts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortoutsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portouts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortoutsId<TError = unknown>(
  args: InferRequestType<(typeof client.portouts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortoutsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portouts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPortoutsIdCommentsKey(
  args: InferRequestType<(typeof client.portouts)[':id']['comments']['$get']>,
) {
  return ['portouts', '/portouts/:id/comments', args] as const
}

export function useGetPortoutsIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.portouts)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortoutsIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portouts[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortoutsIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.portouts)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortoutsIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portouts[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPortoutsIdCommentsKey() {
  return ['portouts', '/portouts/:id/comments', 'POST'] as const
}

export function usePostPortoutsIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portouts)[':id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortoutsIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.portouts)[':id']['comments']['$post']> },
      ) => parseResponse(client.portouts[':id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPortoutsIdStatusKey() {
  return ['portouts', '/portouts/:id/:status', 'PATCH'] as const
}

export function usePatchPortoutsIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portouts)[':id'][':status']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portouts)[':id'][':status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPortoutsIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.portouts)[':id'][':status']['$patch']> },
      ) => parseResponse(client.portouts[':id'][':status'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrivateWirelessGatewaysKey(
  args: InferRequestType<typeof client.private_wireless_gateways.$get>,
) {
  return ['private_wireless_gateways', '/private_wireless_gateways', args] as const
}

export function useGetPrivateWirelessGateways<TError = unknown>(
  args: InferRequestType<typeof client.private_wireless_gateways.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrivateWirelessGatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.private_wireless_gateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrivateWirelessGateways<TError = unknown>(
  args: InferRequestType<typeof client.private_wireless_gateways.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrivateWirelessGatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.private_wireless_gateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPrivateWirelessGatewaysKey() {
  return ['private_wireless_gateways', '/private_wireless_gateways', 'POST'] as const
}

export function usePostPrivateWirelessGateways<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.private_wireless_gateways.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPrivateWirelessGatewaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.private_wireless_gateways.$post> },
      ) => parseResponse(client.private_wireless_gateways.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrivateWirelessGatewaysIdKey(
  args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$get']>,
) {
  return ['private_wireless_gateways', '/private_wireless_gateways/:id', args] as const
}

export function useGetPrivateWirelessGatewaysId<TError = unknown>(
  args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrivateWirelessGatewaysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.private_wireless_gateways[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrivateWirelessGatewaysId<TError = unknown>(
  args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrivateWirelessGatewaysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.private_wireless_gateways[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePrivateWirelessGatewaysIdKey() {
  return ['private_wireless_gateways', '/private_wireless_gateways/:id', 'DELETE'] as const
}

export function useDeletePrivateWirelessGatewaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.private_wireless_gateways)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePrivateWirelessGatewaysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$delete']> },
      ) => parseResponse(client.private_wireless_gateways[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQueuesQueueNameKey(
  args: InferRequestType<(typeof client.queues)[':queue_name']['$get']>,
) {
  return ['queues', '/queues/:queue_name', args] as const
}

export function useGetQueuesQueueName<TError = unknown>(
  args: InferRequestType<(typeof client.queues)[':queue_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queue_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQueuesQueueNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queue_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queues[':queue_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueuesQueueName<TError = unknown>(
  args: InferRequestType<(typeof client.queues)[':queue_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queue_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQueuesQueueNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queue_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queues[':queue_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueuesQueueNameCallsKey(
  args: InferRequestType<(typeof client.queues)[':queue_name']['calls']['$get']>,
) {
  return ['queues', '/queues/:queue_name/calls', args] as const
}

export function useGetQueuesQueueNameCalls<TError = unknown>(
  args: InferRequestType<(typeof client.queues)[':queue_name']['calls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queues)[':queue_name']['calls']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQueuesQueueNameCallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queues)[':queue_name']['calls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queues[':queue_name'].calls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueuesQueueNameCalls<TError = unknown>(
  args: InferRequestType<(typeof client.queues)[':queue_name']['calls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queues)[':queue_name']['calls']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQueuesQueueNameCallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queues)[':queue_name']['calls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queues[':queue_name'].calls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueuesQueueNameCallsCallControlIdKey(
  args: InferRequestType<
    (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']
  >,
) {
  return ['queues', '/queues/:queue_name/calls/:call_control_id', args] as const
}

export function useGetQueuesQueueNameCallsCallControlId<TError = unknown>(
  args: InferRequestType<
    (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']>
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
        ? getGetQueuesQueueNameCallsCallControlIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.queues[':queue_name'].calls[':call_control_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueuesQueueNameCallsCallControlId<TError = unknown>(
  args: InferRequestType<
    (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']>
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
        ? getGetQueuesQueueNameCallsCallControlIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.queues[':queue_name'].calls[':call_control_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRecordingsKey(args: InferRequestType<typeof client.recordings.$get>) {
  return ['recordings', '/recordings', args] as const
}

export function useGetRecordings<TError = unknown>(
  args: InferRequestType<typeof client.recordings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordings<TError = unknown>(
  args: InferRequestType<typeof client.recordings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecordingsIdKey(
  args: InferRequestType<(typeof client.recordings)[':id']['$get']>,
) {
  return ['recordings', '/recordings/:id', args] as const
}

export function useGetRecordingsId<TError = unknown>(
  args: InferRequestType<(typeof client.recordings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recordings)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordingsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recordings)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recordings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordingsId<TError = unknown>(
  args: InferRequestType<(typeof client.recordings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recordings)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordingsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recordings)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recordings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsBatchMdrReportsKey(
  args: InferRequestType<typeof client.reports.batch_mdr_reports.$get>,
) {
  return ['reports', '/reports/batch_mdr_reports', args] as const
}

export function useGetReportsBatchMdrReports<TError = unknown>(
  args: InferRequestType<typeof client.reports.batch_mdr_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsBatchMdrReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.batch_mdr_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsBatchMdrReports<TError = unknown>(
  args: InferRequestType<typeof client.reports.batch_mdr_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsBatchMdrReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.batch_mdr_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReportsBatchMdrReportsKey() {
  return ['reports', '/reports/batch_mdr_reports', 'POST'] as const
}

export function usePostReportsBatchMdrReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.reports.batch_mdr_reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsBatchMdrReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.reports.batch_mdr_reports.$post> },
      ) => parseResponse(client.reports.batch_mdr_reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportsBatchMdrReportsIdKey(
  args: InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>,
) {
  return ['reports', '/reports/batch_mdr_reports/:id', args] as const
}

export function useGetReportsBatchMdrReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsBatchMdrReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.batch_mdr_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsBatchMdrReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsBatchMdrReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.batch_mdr_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteReportsBatchMdrReportsIdKey() {
  return ['reports', '/reports/batch_mdr_reports/:id', 'DELETE'] as const
}

export function useDeleteReportsBatchMdrReportsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReportsBatchMdrReportsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$delete']> },
      ) => parseResponse(client.reports.batch_mdr_reports[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportsCdrUsageReportsSyncKey(
  args: InferRequestType<typeof client.reports.cdr_usage_reports.sync.$get>,
) {
  return ['reports', '/reports/cdr_usage_reports/sync', args] as const
}

export function useGetReportsCdrUsageReportsSync<TError = unknown>(
  args: InferRequestType<typeof client.reports.cdr_usage_reports.sync.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.cdr_usage_reports.sync.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsCdrUsageReportsSyncKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.cdr_usage_reports.sync.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.cdr_usage_reports.sync.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsCdrUsageReportsSync<TError = unknown>(
  args: InferRequestType<typeof client.reports.cdr_usage_reports.sync.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.cdr_usage_reports.sync.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsCdrUsageReportsSyncKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.cdr_usage_reports.sync.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.cdr_usage_reports.sync.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsMdrUsageReportsKey(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.$get>,
) {
  return ['reports', '/reports/mdr_usage_reports', args] as const
}

export function useGetReportsMdrUsageReports<TError = unknown>(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsMdrUsageReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.mdr_usage_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsMdrUsageReports<TError = unknown>(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsMdrUsageReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.mdr_usage_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReportsMdrUsageReportsKey() {
  return ['reports', '/reports/mdr_usage_reports', 'POST'] as const
}

export function usePostReportsMdrUsageReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.reports.mdr_usage_reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsMdrUsageReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.reports.mdr_usage_reports.$post> },
      ) => parseResponse(client.reports.mdr_usage_reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportsMdrUsageReportsSyncKey(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.sync.$get>,
) {
  return ['reports', '/reports/mdr_usage_reports/sync', args] as const
}

export function useGetReportsMdrUsageReportsSync<TError = unknown>(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.sync.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.mdr_usage_reports.sync.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsMdrUsageReportsSyncKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.mdr_usage_reports.sync.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.mdr_usage_reports.sync.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsMdrUsageReportsSync<TError = unknown>(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.sync.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.mdr_usage_reports.sync.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsMdrUsageReportsSyncKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.mdr_usage_reports.sync.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.mdr_usage_reports.sync.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsMdrUsageReportsIdKey(
  args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>,
) {
  return ['reports', '/reports/mdr_usage_reports/:id', args] as const
}

export function useGetReportsMdrUsageReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsMdrUsageReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.mdr_usage_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsMdrUsageReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsMdrUsageReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.mdr_usage_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteReportsMdrUsageReportsIdKey() {
  return ['reports', '/reports/mdr_usage_reports/:id', 'DELETE'] as const
}

export function useDeleteReportsMdrUsageReportsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReportsMdrUsageReportsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$delete']> },
      ) => parseResponse(client.reports.mdr_usage_reports[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportsMdrsKey(args: InferRequestType<typeof client.reports.mdrs.$get>) {
  return ['reports', '/reports/mdrs', args] as const
}

export function useGetReportsMdrs<TError = unknown>(
  args: InferRequestType<typeof client.reports.mdrs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdrs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsMdrsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdrs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.mdrs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsMdrs<TError = unknown>(
  args: InferRequestType<typeof client.reports.mdrs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdrs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsMdrsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdrs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.mdrs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsWdrsKey(args: InferRequestType<typeof client.reports.wdrs.$get>) {
  return ['reports', '/reports/wdrs', args] as const
}

export function useGetReportsWdrs<TError = unknown>(
  args: InferRequestType<typeof client.reports.wdrs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.wdrs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsWdrsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.wdrs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.wdrs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsWdrs<TError = unknown>(
  args: InferRequestType<typeof client.reports.wdrs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.wdrs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsWdrsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.wdrs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.wdrs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRequirementTypesKey(
  args: InferRequestType<typeof client.requirement_types.$get>,
) {
  return ['requirement_types', '/requirement_types', args] as const
}

export function useGetRequirementTypes<TError = unknown>(
  args: InferRequestType<typeof client.requirement_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirement_types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRequirementTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirement_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requirement_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequirementTypes<TError = unknown>(
  args: InferRequestType<typeof client.requirement_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirement_types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRequirementTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirement_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requirement_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRequirementTypesIdKey(
  args: InferRequestType<(typeof client.requirement_types)[':id']['$get']>,
) {
  return ['requirement_types', '/requirement_types/:id', args] as const
}

export function useGetRequirementTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.requirement_types)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requirement_types)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRequirementTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requirement_types)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requirement_types[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequirementTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.requirement_types)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requirement_types)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRequirementTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requirement_types)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requirement_types[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRequirementsKey(args: InferRequestType<typeof client.requirements.$get>) {
  return ['requirements', '/requirements', args] as const
}

export function useGetRequirements<TError = unknown>(
  args: InferRequestType<typeof client.requirements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequirementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requirements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequirements<TError = unknown>(
  args: InferRequestType<typeof client.requirements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequirementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requirements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRequirementsIdKey(
  args: InferRequestType<(typeof client.requirements)[':id']['$get']>,
) {
  return ['requirements', '/requirements/:id', args] as const
}

export function useGetRequirementsId<TError = unknown>(
  args: InferRequestType<(typeof client.requirements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.requirements)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequirementsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.requirements)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requirements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequirementsId<TError = unknown>(
  args: InferRequestType<(typeof client.requirements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.requirements)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequirementsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.requirements)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requirements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoomParticipantsKey(
  args: InferRequestType<typeof client.room_participants.$get>,
) {
  return ['room_participants', '/room_participants', args] as const
}

export function useGetRoomParticipants<TError = unknown>(
  args: InferRequestType<typeof client.room_participants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_participants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_participants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.room_participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomParticipants<TError = unknown>(
  args: InferRequestType<typeof client.room_participants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_participants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_participants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.room_participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoomParticipantsRoomParticipantIdKey(
  args: InferRequestType<(typeof client.room_participants)[':room_participant_id']['$get']>,
) {
  return ['room_participants', '/room_participants/:room_participant_id', args] as const
}

export function useGetRoomParticipantsRoomParticipantId<TError = unknown>(
  args: InferRequestType<(typeof client.room_participants)[':room_participant_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.room_participants)[':room_participant_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomParticipantsRoomParticipantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.room_participants)[':room_participant_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.room_participants[':room_participant_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomParticipantsRoomParticipantId<TError = unknown>(
  args: InferRequestType<(typeof client.room_participants)[':room_participant_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.room_participants)[':room_participant_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomParticipantsRoomParticipantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.room_participants)[':room_participant_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.room_participants[':room_participant_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoomSessionsKey(args: InferRequestType<typeof client.room_sessions.$get>) {
  return ['room_sessions', '/room_sessions', args] as const
}

export function useGetRoomSessions<TError = unknown>(
  args: InferRequestType<typeof client.room_sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.room_sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomSessions<TError = unknown>(
  args: InferRequestType<typeof client.room_sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.room_sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoomSessionsRoomSessionIdKey(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['$get']>,
) {
  return ['room_sessions', '/room_sessions/:room_session_id', args] as const
}

export function useGetRoomSessionsRoomSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.room_sessions)[':room_session_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomSessionsRoomSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.room_sessions)[':room_session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.room_sessions[':room_session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomSessionsRoomSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.room_sessions)[':room_session_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomSessionsRoomSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.room_sessions)[':room_session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.room_sessions[':room_session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoomSessionsRoomSessionIdParticipantsKey(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>,
) {
  return ['room_sessions', '/room_sessions/:room_session_id/participants', args] as const
}

export function useGetRoomSessionsRoomSessionIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>
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
        ? getGetRoomSessionsRoomSessionIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.room_sessions[':room_session_id'].participants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomSessionsRoomSessionIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>
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
        ? getGetRoomSessionsRoomSessionIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.room_sessions[':room_session_id'].participants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRoomsKey(args: InferRequestType<typeof client.rooms.$get>) {
  return ['rooms', '/rooms', args] as const
}

export function useGetRooms<TError = unknown>(
  args: InferRequestType<typeof client.rooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rooms.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRooms<TError = unknown>(
  args: InferRequestType<typeof client.rooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rooms.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRoomsKey() {
  return ['rooms', '/rooms', 'POST'] as const
}

export function usePostRooms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.rooms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoomsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rooms.$post> }) =>
        parseResponse(client.rooms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsRoomIdKey(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$get']>,
) {
  return ['rooms', '/rooms/:room_id', args] as const
}

export function useGetRoomsRoomId<TError = unknown>(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomsRoomIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms[':room_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsRoomId<TError = unknown>(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomsRoomIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms[':room_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRoomsRoomIdKey() {
  return ['rooms', '/rooms/:room_id', 'DELETE'] as const
}

export function useDeleteRoomsRoomId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rooms)[':room_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRoomsRoomIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rooms)[':room_id']['$delete']> },
      ) => parseResponse(client.rooms[':room_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRoomsRoomIdActionsGenerateJoinClientTokenKey() {
  return ['rooms', '/rooms/:room_id/actions/generate_join_client_token', 'POST'] as const
}

export function usePostRoomsRoomIdActionsGenerateJoinClientToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rooms)[':room_id']['actions']['generate_join_client_token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rooms)[':room_id']['actions']['generate_join_client_token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoomsRoomIdActionsGenerateJoinClientTokenKey()
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
            (typeof client.rooms)[':room_id']['actions']['generate_join_client_token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rooms[':room_id'].actions.generate_join_client_token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRoomsRoomIdActionsRefreshClientTokenKey() {
  return ['rooms', '/rooms/:room_id/actions/refresh_client_token', 'POST'] as const
}

export function usePostRoomsRoomIdActionsRefreshClientToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rooms)[':room_id']['actions']['refresh_client_token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rooms)[':room_id']['actions']['refresh_client_token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoomsRoomIdActionsRefreshClientTokenKey()
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
            (typeof client.rooms)[':room_id']['actions']['refresh_client_token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rooms[':room_id'].actions.refresh_client_token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsRoomIdSessionsKey(
  args: InferRequestType<(typeof client.rooms)[':room_id']['sessions']['$get']>,
) {
  return ['rooms', '/rooms/:room_id/sessions', args] as const
}

export function useGetRoomsRoomIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.rooms)[':room_id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':room_id']['sessions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomsRoomIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':room_id']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms[':room_id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsRoomIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.rooms)[':room_id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':room_id']['sessions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomsRoomIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':room_id']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms[':room_id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShortCodesKey(args: InferRequestType<typeof client.short_codes.$get>) {
  return ['short_codes', '/short_codes', args] as const
}

export function useGetShortCodes<TError = unknown>(
  args: InferRequestType<typeof client.short_codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.short_codes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShortCodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.short_codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.short_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShortCodes<TError = unknown>(
  args: InferRequestType<typeof client.short_codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.short_codes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShortCodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.short_codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.short_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShortCodesIdKey(
  args: InferRequestType<(typeof client.short_codes)[':id']['$get']>,
) {
  return ['short_codes', '/short_codes/:id', args] as const
}

export function useGetShortCodesId<TError = unknown>(
  args: InferRequestType<(typeof client.short_codes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShortCodesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.short_codes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShortCodesId<TError = unknown>(
  args: InferRequestType<(typeof client.short_codes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShortCodesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.short_codes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchShortCodesIdKey() {
  return ['short_codes', '/short_codes/:id', 'PATCH'] as const
}

export function usePatchShortCodesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.short_codes)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchShortCodesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.short_codes)[':id']['$patch']> },
      ) => parseResponse(client.short_codes[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSimCardGroupActionsKey(
  args: InferRequestType<typeof client.sim_card_group_actions.$get>,
) {
  return ['sim_card_group_actions', '/sim_card_group_actions', args] as const
}

export function useGetSimCardGroupActions<TError = unknown>(
  args: InferRequestType<typeof client.sim_card_group_actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_group_actions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimCardGroupActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_group_actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_group_actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCardGroupActions<TError = unknown>(
  args: InferRequestType<typeof client.sim_card_group_actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_group_actions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimCardGroupActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_group_actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_group_actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSimCardGroupActionsIdKey(
  args: InferRequestType<(typeof client.sim_card_group_actions)[':id']['$get']>,
) {
  return ['sim_card_group_actions', '/sim_card_group_actions/:id', args] as const
}

export function useGetSimCardGroupActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.sim_card_group_actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sim_card_group_actions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimCardGroupActionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sim_card_group_actions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_group_actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCardGroupActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.sim_card_group_actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sim_card_group_actions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimCardGroupActionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sim_card_group_actions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_group_actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSimCardGroupsKey(args: InferRequestType<typeof client.sim_card_groups.$get>) {
  return ['sim_card_groups', '/sim_card_groups', args] as const
}

export function useGetSimCardGroups<TError = unknown>(
  args: InferRequestType<typeof client.sim_card_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimCardGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCardGroups<TError = unknown>(
  args: InferRequestType<typeof client.sim_card_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimCardGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSimCardGroupsKey() {
  return ['sim_card_groups', '/sim_card_groups', 'POST'] as const
}

export function usePostSimCardGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sim_card_groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimCardGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sim_card_groups.$post> }) =>
        parseResponse(client.sim_card_groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSimCardGroupsIdKey(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$get']>,
) {
  return ['sim_card_groups', '/sim_card_groups/:id', args] as const
}

export function useGetSimCardGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimCardGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCardGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimCardGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSimCardGroupsIdKey() {
  return ['sim_card_groups', '/sim_card_groups/:id', 'DELETE'] as const
}

export function useDeleteSimCardGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sim_card_groups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSimCardGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sim_card_groups)[':id']['$delete']> },
      ) => parseResponse(client.sim_card_groups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSimCardGroupsIdKey() {
  return ['sim_card_groups', '/sim_card_groups/:id', 'PATCH'] as const
}

export function usePatchSimCardGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sim_card_groups)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSimCardGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sim_card_groups)[':id']['$patch']> },
      ) => parseResponse(client.sim_card_groups[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimCardGroupsIdActionsRemovePrivateWirelessGatewayKey() {
  return [
    'sim_card_groups',
    '/sim_card_groups/:id/actions/remove_private_wireless_gateway',
    'POST',
  ] as const
}

export function usePostSimCardGroupsIdActionsRemovePrivateWirelessGateway<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sim_card_groups)[':id']['actions']['remove_private_wireless_gateway']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sim_card_groups)[':id']['actions']['remove_private_wireless_gateway']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimCardGroupsIdActionsRemovePrivateWirelessGatewayKey()
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
            (typeof client.sim_card_groups)[':id']['actions']['remove_private_wireless_gateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sim_card_groups[':id'].actions.remove_private_wireless_gateway.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimCardGroupsIdActionsSetPrivateWirelessGatewayKey() {
  return [
    'sim_card_groups',
    '/sim_card_groups/:id/actions/set_private_wireless_gateway',
    'POST',
  ] as const
}

export function usePostSimCardGroupsIdActionsSetPrivateWirelessGateway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sim_card_groups)[':id']['actions']['set_private_wireless_gateway']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sim_card_groups)[':id']['actions']['set_private_wireless_gateway']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimCardGroupsIdActionsSetPrivateWirelessGatewayKey()
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
            (typeof client.sim_card_groups)[':id']['actions']['set_private_wireless_gateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sim_card_groups[':id'].actions.set_private_wireless_gateway.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimCardOrderPreviewKey() {
  return ['sim_card_order_preview', '/sim_card_order_preview', 'POST'] as const
}

export function usePostSimCardOrderPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_order_preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sim_card_order_preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimCardOrderPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sim_card_order_preview.$post> },
      ) => parseResponse(client.sim_card_order_preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSimCardOrdersKey(args: InferRequestType<typeof client.sim_card_orders.$get>) {
  return ['sim_card_orders', '/sim_card_orders', args] as const
}

export function useGetSimCardOrders<TError = unknown>(
  args: InferRequestType<typeof client.sim_card_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimCardOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCardOrders<TError = unknown>(
  args: InferRequestType<typeof client.sim_card_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimCardOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSimCardOrdersKey() {
  return ['sim_card_orders', '/sim_card_orders', 'POST'] as const
}

export function usePostSimCardOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sim_card_orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimCardOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sim_card_orders.$post> }) =>
        parseResponse(client.sim_card_orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSimCardOrdersIdKey(
  args: InferRequestType<(typeof client.sim_card_orders)[':id']['$get']>,
) {
  return ['sim_card_orders', '/sim_card_orders/:id', args] as const
}

export function useGetSimCardOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.sim_card_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimCardOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCardOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.sim_card_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimCardOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_card_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSimCardsKey(args: InferRequestType<typeof client.sim_cards.$get>) {
  return ['sim_cards', '/sim_cards', args] as const
}

export function useGetSimCards<TError = unknown>(
  args: InferRequestType<typeof client.sim_cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_cards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCards<TError = unknown>(
  args: InferRequestType<typeof client.sim_cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_cards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSimCardsActionsValidateRegistrationCodesKey() {
  return ['sim_cards', '/sim_cards/actions/validate_registration_codes', 'POST'] as const
}

export function usePostSimCardsActionsValidateRegistrationCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sim_cards.actions.validate_registration_codes.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sim_cards.actions.validate_registration_codes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimCardsActionsValidateRegistrationCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.sim_cards.actions.validate_registration_codes.$post>
        },
      ) =>
        parseResponse(
          client.sim_cards.actions.validate_registration_codes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSimCardsIdKey(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$get']>,
) {
  return ['sim_cards', '/sim_cards/:id', args] as const
}

export function useGetSimCardsId<TError = unknown>(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimCardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_cards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCardsId<TError = unknown>(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimCardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim_cards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSimCardsIdKey() {
  return ['sim_cards', '/sim_cards/:id', 'DELETE'] as const
}

export function useDeleteSimCardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sim_cards)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSimCardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sim_cards)[':id']['$delete']> },
      ) => parseResponse(client.sim_cards[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSimCardsIdKey() {
  return ['sim_cards', '/sim_cards/:id', 'PATCH'] as const
}

export function usePatchSimCardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sim_cards)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSimCardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sim_cards)[':id']['$patch']> },
      ) => parseResponse(client.sim_cards[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimCardsIdActionsDisableKey() {
  return ['sim_cards', '/sim_cards/:id/actions/disable', 'POST'] as const
}

export function usePostSimCardsIdActionsDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_cards)[':id']['actions']['disable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sim_cards)[':id']['actions']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimCardsIdActionsDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sim_cards)[':id']['actions']['disable']['$post']>
        },
      ) => parseResponse(client.sim_cards[':id'].actions.disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimCardsIdActionsEnableKey() {
  return ['sim_cards', '/sim_cards/:id/actions/enable', 'POST'] as const
}

export function usePostSimCardsIdActionsEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_cards)[':id']['actions']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sim_cards)[':id']['actions']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimCardsIdActionsEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sim_cards)[':id']['actions']['enable']['$post']>
        },
      ) => parseResponse(client.sim_cards[':id'].actions.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimCardsIdActionsSetStandbyKey() {
  return ['sim_cards', '/sim_cards/:id/actions/set_standby', 'POST'] as const
}

export function usePostSimCardsIdActionsSetStandby<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_cards)[':id']['actions']['set_standby']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sim_cards)[':id']['actions']['set_standby']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimCardsIdActionsSetStandbyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sim_cards)[':id']['actions']['set_standby']['$post']>
        },
      ) => parseResponse(client.sim_cards[':id'].actions.set_standby.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSimCardsSimCardIdNetworkPreferencesKey(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>,
) {
  return ['sim_cards', '/sim_cards/:sim_card_id/network_preferences', args] as const
}

export function useGetSimCardsSimCardIdNetworkPreferences<TError = unknown>(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>
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
        ? getGetSimCardsSimCardIdNetworkPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sim_cards[':sim_card_id'].network_preferences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCardsSimCardIdNetworkPreferences<TError = unknown>(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>
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
        ? getGetSimCardsSimCardIdNetworkPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sim_cards[':sim_card_id'].network_preferences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSimCardsSimCardIdNetworkPreferencesKey() {
  return ['sim_cards', '/sim_cards/:sim_card_id/network_preferences', 'PUT'] as const
}

export function usePutSimCardsSimCardIdNetworkPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSimCardsSimCardIdNetworkPreferencesKey()
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
            (typeof client.sim_cards)[':sim_card_id']['network_preferences']['$put']
          >
        },
      ) =>
        parseResponse(
          client.sim_cards[':sim_card_id'].network_preferences.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSimCardsSimCardIdNetworkPreferencesKey() {
  return ['sim_cards', '/sim_cards/:sim_card_id/network_preferences', 'DELETE'] as const
}

export function useDeleteSimCardsSimCardIdNetworkPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSimCardsSimCardIdNetworkPreferencesKey()
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
            (typeof client.sim_cards)[':sim_card_id']['network_preferences']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sim_cards[':sim_card_id'].network_preferences.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSimCardsSimCardIdPublicIpKey(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>,
) {
  return ['sim_cards', '/sim_cards/:sim_card_id/public_ip', args] as const
}

export function useGetSimCardsSimCardIdPublicIp<TError = unknown>(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimCardsSimCardIdPublicIpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sim_cards[':sim_card_id'].public_ip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCardsSimCardIdPublicIp<TError = unknown>(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimCardsSimCardIdPublicIpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sim_cards[':sim_card_id'].public_ip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSimCardsSimCardIdPublicIpKey() {
  return ['sim_cards', '/sim_cards/:sim_card_id/public_ip', 'POST'] as const
}

export function usePostSimCardsSimCardIdPublicIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimCardsSimCardIdPublicIpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$post']>
        },
      ) => parseResponse(client.sim_cards[':sim_card_id'].public_ip.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSimCardsSimCardIdPublicIpKey() {
  return ['sim_cards', '/sim_cards/:sim_card_id/public_ip', 'DELETE'] as const
}

export function useDeleteSimCardsSimCardIdPublicIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSimCardsSimCardIdPublicIpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$delete']>
        },
      ) => parseResponse(client.sim_cards[':sim_card_id'].public_ip.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSimCardsSimCardIdWirelessConnectivityLogsKey(
  args: InferRequestType<
    (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
  >,
) {
  return ['sim_cards', '/sim_cards/:sim_card_id/wireless_connectivity_logs', args] as const
}

export function useGetSimCardsSimCardIdWirelessConnectivityLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
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
        ? getGetSimCardsSimCardIdWirelessConnectivityLogsKey(args)
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
                (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
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
          client.sim_cards[':sim_card_id'].wireless_connectivity_logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCardsSimCardIdWirelessConnectivityLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
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
        ? getGetSimCardsSimCardIdWirelessConnectivityLogsKey(args)
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
                (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
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
          client.sim_cards[':sim_card_id'].wireless_connectivity_logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSubNumberOrdersKey(
  args: InferRequestType<typeof client.sub_number_orders.$get>,
) {
  return ['sub_number_orders', '/sub_number_orders', args] as const
}

export function useGetSubNumberOrders<TError = unknown>(
  args: InferRequestType<typeof client.sub_number_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_number_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubNumberOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_number_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sub_number_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubNumberOrders<TError = unknown>(
  args: InferRequestType<typeof client.sub_number_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_number_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubNumberOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_number_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sub_number_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubNumberOrdersSubNumberOrderIdKey(
  args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>,
) {
  return ['sub_number_orders', '/sub_number_orders/:sub_number_order_id', args] as const
}

export function useGetSubNumberOrdersSubNumberOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubNumberOrdersSubNumberOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sub_number_orders[':sub_number_order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubNumberOrdersSubNumberOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubNumberOrdersSubNumberOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sub_number_orders[':sub_number_order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSubNumberOrdersSubNumberOrderIdKey() {
  return ['sub_number_orders', '/sub_number_orders/:sub_number_order_id', 'PATCH'] as const
}

export function usePatchSubNumberOrdersSubNumberOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSubNumberOrdersSubNumberOrderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$patch']>
        },
      ) =>
        parseResponse(client.sub_number_orders[':sub_number_order_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTelephonyCredentialsKey(
  args: InferRequestType<typeof client.telephony_credentials.$get>,
) {
  return ['telephony_credentials', '/telephony_credentials', args] as const
}

export function useGetTelephonyCredentials<TError = unknown>(
  args: InferRequestType<typeof client.telephony_credentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTelephonyCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telephony_credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelephonyCredentials<TError = unknown>(
  args: InferRequestType<typeof client.telephony_credentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTelephonyCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telephony_credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTelephonyCredentialsKey() {
  return ['telephony_credentials', '/telephony_credentials', 'POST'] as const
}

export function usePostTelephonyCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.telephony_credentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTelephonyCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.telephony_credentials.$post> },
      ) => parseResponse(client.telephony_credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTelephonyCredentialsTagsKey(
  args: InferRequestType<typeof client.telephony_credentials.tags.$get>,
) {
  return ['telephony_credentials', '/telephony_credentials/tags', args] as const
}

export function useGetTelephonyCredentialsTags<TError = unknown>(
  args: InferRequestType<typeof client.telephony_credentials.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.tags.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTelephonyCredentialsTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.tags.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telephony_credentials.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelephonyCredentialsTags<TError = unknown>(
  args: InferRequestType<typeof client.telephony_credentials.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.tags.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTelephonyCredentialsTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.tags.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telephony_credentials.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTelephonyCredentialsIdKey(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$get']>,
) {
  return ['telephony_credentials', '/telephony_credentials/:id', args] as const
}

export function useGetTelephonyCredentialsId<TError = unknown>(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTelephonyCredentialsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telephony_credentials[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelephonyCredentialsId<TError = unknown>(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTelephonyCredentialsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telephony_credentials[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTelephonyCredentialsIdKey() {
  return ['telephony_credentials', '/telephony_credentials/:id', 'DELETE'] as const
}

export function useDeleteTelephonyCredentialsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.telephony_credentials)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTelephonyCredentialsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.telephony_credentials)[':id']['$delete']> },
      ) => parseResponse(client.telephony_credentials[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTelephonyCredentialsIdKey() {
  return ['telephony_credentials', '/telephony_credentials/:id', 'PATCH'] as const
}

export function usePatchTelephonyCredentialsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.telephony_credentials)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTelephonyCredentialsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.telephony_credentials)[':id']['$patch']> },
      ) => parseResponse(client.telephony_credentials[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTelephonyCredentialsIdActionsActionKey() {
  return ['telephony_credentials', '/telephony_credentials/:id/actions/:action', 'POST'] as const
}

export function usePostTelephonyCredentialsIdActionsAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.telephony_credentials)[':id']['actions'][':action']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.telephony_credentials)[':id']['actions'][':action']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTelephonyCredentialsIdActionsActionKey()
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
            (typeof client.telephony_credentials)[':id']['actions'][':action']['$post']
          >
        },
      ) =>
        parseResponse(
          client.telephony_credentials[':id'].actions[':action'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTelephonyCredentialsIdTokenKey() {
  return ['telephony_credentials', '/telephony_credentials/:id/token', 'POST'] as const
}

export function usePostTelephonyCredentialsIdToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.telephony_credentials)[':id']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTelephonyCredentialsIdTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.telephony_credentials)[':id']['token']['$post']>
        },
      ) => parseResponse(client.telephony_credentials[':id'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTexmlApplicationsKey(
  args: InferRequestType<typeof client.texml_applications.$get>,
) {
  return ['texml_applications', '/texml_applications', args] as const
}

export function useGetTexmlApplications<TError = unknown>(
  args: InferRequestType<typeof client.texml_applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTexmlApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.texml_applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTexmlApplications<TError = unknown>(
  args: InferRequestType<typeof client.texml_applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTexmlApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.texml_applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTexmlApplicationsKey() {
  return ['texml_applications', '/texml_applications', 'POST'] as const
}

export function usePostTexmlApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.texml_applications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTexmlApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.texml_applications.$post> }) =>
        parseResponse(client.texml_applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTexmlApplicationsIdKey(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$get']>,
) {
  return ['texml_applications', '/texml_applications/:id', args] as const
}

export function useGetTexmlApplicationsId<TError = unknown>(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.texml_applications)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTexmlApplicationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.texml_applications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.texml_applications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTexmlApplicationsId<TError = unknown>(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.texml_applications)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTexmlApplicationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.texml_applications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.texml_applications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTexmlApplicationsIdKey() {
  return ['texml_applications', '/texml_applications/:id', 'DELETE'] as const
}

export function useDeleteTexmlApplicationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.texml_applications)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.texml_applications)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTexmlApplicationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.texml_applications)[':id']['$delete']> },
      ) => parseResponse(client.texml_applications[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTexmlApplicationsIdKey() {
  return ['texml_applications', '/texml_applications/:id', 'PATCH'] as const
}

export function usePatchTexmlApplicationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.texml_applications)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.texml_applications)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTexmlApplicationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.texml_applications)[':id']['$patch']> },
      ) => parseResponse(client.texml_applications[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVerificationsByPhoneNumberPhoneNumberKey(
  args: InferRequestType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>,
) {
  return ['verifications', '/verifications/by_phone_number/:phone_number', args] as const
}

export function useGetVerificationsByPhoneNumberPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>
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
        ? getGetVerificationsByPhoneNumberPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.verifications.by_phone_number[':phone_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVerificationsByPhoneNumberPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>
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
        ? getGetVerificationsByPhoneNumberPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.verifications.by_phone_number[':phone_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVerificationsByPhoneNumberPhoneNumberActionsVerifyKey() {
  return [
    'verifications',
    '/verifications/by_phone_number/:phone_number/actions/verify',
    'POST',
  ] as const
}

export function usePostVerificationsByPhoneNumberPhoneNumberActionsVerify<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.verifications.by_phone_number)[':phone_number']['actions']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.verifications.by_phone_number)[':phone_number']['actions']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerificationsByPhoneNumberPhoneNumberActionsVerifyKey()
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
            (typeof client.verifications.by_phone_number)[':phone_number']['actions']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.verifications.by_phone_number[':phone_number'].actions.verify.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVerificationsCallKey() {
  return ['verifications', '/verifications/call', 'POST'] as const
}

export function usePostVerificationsCall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.call.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.verifications.call.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerificationsCallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.verifications.call.$post> }) =>
        parseResponse(client.verifications.call.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVerificationsFlashcallKey() {
  return ['verifications', '/verifications/flashcall', 'POST'] as const
}

export function usePostVerificationsFlashcall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.verifications.flashcall.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.verifications.flashcall.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerificationsFlashcallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.verifications.flashcall.$post> },
      ) => parseResponse(client.verifications.flashcall.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVerificationsPsd2Key() {
  return ['verifications', '/verifications/psd2', 'POST'] as const
}

export function usePostVerificationsPsd2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.psd2.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.verifications.psd2.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerificationsPsd2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.verifications.psd2.$post> }) =>
        parseResponse(client.verifications.psd2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVerificationsSmsKey() {
  return ['verifications', '/verifications/sms', 'POST'] as const
}

export function usePostVerificationsSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.sms.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.verifications.sms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerificationsSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.verifications.sms.$post> }) =>
        parseResponse(client.verifications.sms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVerificationsWhatsappKey() {
  return ['verifications', '/verifications/whatsapp', 'POST'] as const
}

export function usePostVerificationsWhatsapp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.verifications.whatsapp.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.verifications.whatsapp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerificationsWhatsappKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.verifications.whatsapp.$post> },
      ) => parseResponse(client.verifications.whatsapp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVerificationsVerificationIdKey(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
) {
  return ['verifications', '/verifications/:verification_id', args] as const
}

export function useGetVerificationsVerificationId<TError = unknown>(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVerificationsVerificationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verifications[':verification_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVerificationsVerificationId<TError = unknown>(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVerificationsVerificationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verifications[':verification_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVerifyProfilesKey(
  args: InferRequestType<typeof client.verify_profiles.$get>,
) {
  return ['verify_profiles', '/verify_profiles', args] as const
}

export function useGetVerifyProfiles<TError = unknown>(
  args: InferRequestType<typeof client.verify_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVerifyProfilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verify_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVerifyProfiles<TError = unknown>(
  args: InferRequestType<typeof client.verify_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVerifyProfilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verify_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVerifyProfilesKey() {
  return ['verify_profiles', '/verify_profiles', 'POST'] as const
}

export function usePostVerifyProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.verify_profiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerifyProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.verify_profiles.$post> }) =>
        parseResponse(client.verify_profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVerifyProfilesVerifyProfileIdKey(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>,
) {
  return ['verify_profiles', '/verify_profiles/:verify_profile_id', args] as const
}

export function useGetVerifyProfilesVerifyProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVerifyProfilesVerifyProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.verify_profiles[':verify_profile_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVerifyProfilesVerifyProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVerifyProfilesVerifyProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.verify_profiles[':verify_profile_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVerifyProfilesVerifyProfileIdKey() {
  return ['verify_profiles', '/verify_profiles/:verify_profile_id', 'DELETE'] as const
}

export function useDeleteVerifyProfilesVerifyProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVerifyProfilesVerifyProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$delete']>
        },
      ) => parseResponse(client.verify_profiles[':verify_profile_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVerifyProfilesVerifyProfileIdKey() {
  return ['verify_profiles', '/verify_profiles/:verify_profile_id', 'PATCH'] as const
}

export function usePatchVerifyProfilesVerifyProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVerifyProfilesVerifyProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$patch']>
        },
      ) => parseResponse(client.verify_profiles[':verify_profile_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookDeliveriesKey(
  args: InferRequestType<typeof client.webhook_deliveries.$get>,
) {
  return ['webhook_deliveries', '/webhook_deliveries', args] as const
}

export function useGetWebhookDeliveries<TError = unknown>(
  args: InferRequestType<typeof client.webhook_deliveries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_deliveries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookDeliveriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_deliveries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_deliveries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookDeliveries<TError = unknown>(
  args: InferRequestType<typeof client.webhook_deliveries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_deliveries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookDeliveriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_deliveries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_deliveries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhookDeliveriesIdKey(
  args: InferRequestType<(typeof client.webhook_deliveries)[':id']['$get']>,
) {
  return ['webhook_deliveries', '/webhook_deliveries/:id', args] as const
}

export function useGetWebhookDeliveriesId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_deliveries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_deliveries)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookDeliveriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_deliveries)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_deliveries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookDeliveriesId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_deliveries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_deliveries)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookDeliveriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_deliveries)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_deliveries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWhatsappContactsKey() {
  return ['whatsapp_contacts', '/whatsapp_contacts', 'POST'] as const
}

export function usePostWhatsappContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_contacts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.whatsapp_contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhatsappContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.whatsapp_contacts.$post> }) =>
        parseResponse(client.whatsapp_contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhatsappDetailRecordReportsKey(
  args: InferRequestType<typeof client.whatsapp_detail_record_reports.$get>,
) {
  return ['whatsapp_detail_record_reports', '/whatsapp_detail_record_reports', args] as const
}

export function useGetWhatsappDetailRecordReports<TError = unknown>(
  args: InferRequestType<typeof client.whatsapp_detail_record_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWhatsappDetailRecordReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsapp_detail_record_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhatsappDetailRecordReports<TError = unknown>(
  args: InferRequestType<typeof client.whatsapp_detail_record_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWhatsappDetailRecordReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsapp_detail_record_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWhatsappDetailRecordReportsKey() {
  return ['whatsapp_detail_record_reports', '/whatsapp_detail_record_reports', 'POST'] as const
}

export function usePostWhatsappDetailRecordReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.whatsapp_detail_record_reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhatsappDetailRecordReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.whatsapp_detail_record_reports.$post> },
      ) => parseResponse(client.whatsapp_detail_record_reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhatsappDetailRecordReportsIdKey(
  args: InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>,
) {
  return ['whatsapp_detail_record_reports', '/whatsapp_detail_record_reports/:id', args] as const
}

export function useGetWhatsappDetailRecordReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWhatsappDetailRecordReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.whatsapp_detail_record_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhatsappDetailRecordReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWhatsappDetailRecordReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.whatsapp_detail_record_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWhatsappDetailRecordReportsIdKey() {
  return [
    'whatsapp_detail_record_reports',
    '/whatsapp_detail_record_reports/:id',
    'DELETE',
  ] as const
}

export function useDeleteWhatsappDetailRecordReportsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWhatsappDetailRecordReportsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$delete']>
        },
      ) => parseResponse(client.whatsapp_detail_record_reports[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWhatsappMediaKey() {
  return ['whatsapp_media', '/whatsapp_media', 'POST'] as const
}

export function usePostWhatsappMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_media.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.whatsapp_media.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhatsappMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.whatsapp_media.$post> }) =>
        parseResponse(client.whatsapp_media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhatsappMediaWhatsappUserIdMediaIdKey(
  args: InferRequestType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>,
) {
  return ['whatsapp_media', '/whatsapp_media/:whatsapp_user_id/:media_id', args] as const
}

export function useGetWhatsappMediaWhatsappUserIdMediaId<TError = unknown>(
  args: InferRequestType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>
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
        ? getGetWhatsappMediaWhatsappUserIdMediaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.whatsapp_media[':whatsapp_user_id'][':media_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhatsappMediaWhatsappUserIdMediaId<TError = unknown>(
  args: InferRequestType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>
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
        ? getGetWhatsappMediaWhatsappUserIdMediaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.whatsapp_media[':whatsapp_user_id'][':media_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteWhatsappMediaWhatsappUserIdMediaIdKey() {
  return ['whatsapp_media', '/whatsapp_media/:whatsapp_user_id/:media_id', 'DELETE'] as const
}

export function useDeleteWhatsappMediaWhatsappUserIdMediaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWhatsappMediaWhatsappUserIdMediaIdKey()
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
            (typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.whatsapp_media[':whatsapp_user_id'][':media_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWhatsappMessagesKey() {
  return ['whatsapp_messages', '/whatsapp_messages', 'POST'] as const
}

export function usePostWhatsappMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_messages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.whatsapp_messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhatsappMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.whatsapp_messages.$post> }) =>
        parseResponse(client.whatsapp_messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWhatsappMessagesMessageIdKey() {
  return ['whatsapp_messages', '/whatsapp_messages/:message_id', 'PATCH'] as const
}

export function usePatchWhatsappMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_messages)[':message_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.whatsapp_messages)[':message_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWhatsappMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.whatsapp_messages)[':message_id']['$patch']> },
      ) => parseResponse(client.whatsapp_messages[':message_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhatsappUsageAggregationsKey(
  args: InferRequestType<typeof client.whatsapp_usage_aggregations.$get>,
) {
  return ['whatsapp_usage_aggregations', '/whatsapp_usage_aggregations', args] as const
}

export function useGetWhatsappUsageAggregations<TError = unknown>(
  args: InferRequestType<typeof client.whatsapp_usage_aggregations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_usage_aggregations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWhatsappUsageAggregationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_usage_aggregations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsapp_usage_aggregations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhatsappUsageAggregations<TError = unknown>(
  args: InferRequestType<typeof client.whatsapp_usage_aggregations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_usage_aggregations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWhatsappUsageAggregationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_usage_aggregations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsapp_usage_aggregations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWhatsappUsersWhatsappUserIdKey(
  args: InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>,
) {
  return ['whatsapp_users', '/whatsapp_users/:whatsapp_user_id', args] as const
}

export function useGetWhatsappUsersWhatsappUserId<TError = unknown>(
  args: InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWhatsappUsersWhatsappUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.whatsapp_users[':whatsapp_user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhatsappUsersWhatsappUserId<TError = unknown>(
  args: InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWhatsappUsersWhatsappUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.whatsapp_users[':whatsapp_user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchWhatsappUsersWhatsappUserIdKey() {
  return ['whatsapp_users', '/whatsapp_users/:whatsapp_user_id', 'PATCH'] as const
}

export function usePatchWhatsappUsersWhatsappUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWhatsappUsersWhatsappUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$patch']> },
      ) => parseResponse(client.whatsapp_users[':whatsapp_user_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWirelessDetailRecordsReportsKey(
  args: InferRequestType<typeof client.wireless.detail_records_reports.$get>,
) {
  return ['wireless', '/wireless/detail_records_reports', args] as const
}

export function useGetWirelessDetailRecordsReports<TError = unknown>(
  args: InferRequestType<typeof client.wireless.detail_records_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wireless.detail_records_reports.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWirelessDetailRecordsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wireless.detail_records_reports.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wireless.detail_records_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessDetailRecordsReports<TError = unknown>(
  args: InferRequestType<typeof client.wireless.detail_records_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wireless.detail_records_reports.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWirelessDetailRecordsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wireless.detail_records_reports.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wireless.detail_records_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWirelessDetailRecordsReportsKey() {
  return ['wireless', '/wireless/detail_records_reports', 'POST'] as const
}

export function usePostWirelessDetailRecordsReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wireless.detail_records_reports.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wireless.detail_records_reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWirelessDetailRecordsReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wireless.detail_records_reports.$post> },
      ) => parseResponse(client.wireless.detail_records_reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWirelessDetailRecordsReportsIdKey(
  args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$get']>,
) {
  return ['wireless', '/wireless/detail_records_reports/:id', args] as const
}

export function useGetWirelessDetailRecordsReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWirelessDetailRecordsReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wireless.detail_records_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWirelessDetailRecordsReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWirelessDetailRecordsReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wireless.detail_records_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWirelessDetailRecordsReportsIdKey() {
  return ['wireless', '/wireless/detail_records_reports/:id', 'DELETE'] as const
}

export function useDeleteWirelessDetailRecordsReportsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWirelessDetailRecordsReportsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$delete']>
        },
      ) => parseResponse(client.wireless.detail_records_reports[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
