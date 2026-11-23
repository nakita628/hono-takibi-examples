import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function getPostActionsBulkTelephonyCredentialsMutationKey() {
  return ['actions', '/actions/bulk/telephony_credentials', 'POST'] as const
}

export function getPostActionsBulkTelephonyCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.actions.bulk.telephony_credentials.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.actions.bulk.telephony_credentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActionsBulkTelephonyCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.actions.bulk.telephony_credentials.$post>,
    ) {
      return parseResponse(client.actions.bulk.telephony_credentials.$post(args, options))
    },
  })
}

export function usePostActionsBulkTelephonyCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.actions.bulk.telephony_credentials.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.actions.bulk.telephony_credentials.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionsBulkTelephonyCredentialsMutationOptions<
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

export function getDeleteActionsBulkTelephonyCredentialsMutationKey() {
  return ['actions', '/actions/bulk/telephony_credentials', 'DELETE'] as const
}

export function getDeleteActionsBulkTelephonyCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.actions.bulk.telephony_credentials.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.actions.bulk.telephony_credentials.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActionsBulkTelephonyCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.actions.bulk.telephony_credentials.$delete>,
    ) {
      return parseResponse(client.actions.bulk.telephony_credentials.$delete(args, options))
    },
  })
}

export function useDeleteActionsBulkTelephonyCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.actions.bulk.telephony_credentials.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.actions.bulk.telephony_credentials.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteActionsBulkTelephonyCredentialsMutationOptions<
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

export function getPatchActionsBulkTelephonyCredentialsMutationKey() {
  return ['actions', '/actions/bulk/telephony_credentials', 'PATCH'] as const
}

export function getPatchActionsBulkTelephonyCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.actions.bulk.telephony_credentials.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.actions.bulk.telephony_credentials.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchActionsBulkTelephonyCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.actions.bulk.telephony_credentials.$patch>,
    ) {
      return parseResponse(client.actions.bulk.telephony_credentials.$patch(args, options))
    },
  })
}

export function usePatchActionsBulkTelephonyCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.actions.bulk.telephony_credentials.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.actions.bulk.telephony_credentials.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchActionsBulkTelephonyCredentialsMutationOptions<
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

export function getPutActionsNetworkPreferencesSimCardsMutationKey() {
  return ['actions', '/actions/network_preferences/sim_cards', 'PUT'] as const
}

export function getPutActionsNetworkPreferencesSimCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.actions.network_preferences.sim_cards.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.actions.network_preferences.sim_cards.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutActionsNetworkPreferencesSimCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.actions.network_preferences.sim_cards.$put>,
    ) {
      return parseResponse(client.actions.network_preferences.sim_cards.$put(args, options))
    },
  })
}

export function usePutActionsNetworkPreferencesSimCards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.actions.network_preferences.sim_cards.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.actions.network_preferences.sim_cards.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutActionsNetworkPreferencesSimCardsMutationOptions<
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

export function getPostActionsRegisterSimCardsMutationKey() {
  return ['actions', '/actions/register/sim_cards', 'POST'] as const
}

export function getPostActionsRegisterSimCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.actions.register.sim_cards.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.actions.register.sim_cards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActionsRegisterSimCardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.actions.register.sim_cards.$post>) {
      return parseResponse(client.actions.register.sim_cards.$post(args, options))
    },
  })
}

export function usePostActionsRegisterSimCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.actions.register.sim_cards.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.actions.register.sim_cards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionsRegisterSimCardsMutationOptions<TError, TOnMutateResult>(
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

export function getPostActionsActionTelephonyCredentialsMutationKey() {
  return ['actions', '/actions/:action/telephony_credentials', 'POST'] as const
}

export function getPostActionsActionTelephonyCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':action']['telephony_credentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':action']['telephony_credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionsActionTelephonyCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.actions)[':action']['telephony_credentials']['$post']>,
    ) {
      return parseResponse(client.actions[':action'].telephony_credentials.$post(args, options))
    },
  })
}

export function usePostActionsActionTelephonyCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.actions)[':action']['telephony_credentials']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.actions)[':action']['telephony_credentials']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionsActionTelephonyCredentialsMutationOptions<
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

export function getAddressesQueryKey(args: InferRequestType<typeof client.addresses.$get>) {
  return ['addresses', '/addresses', args] as const
}

export function getAddressesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.addresses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddressesQueryKey>
  >({
    queryKey: getAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAddressesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAddressesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAddressesMutationKey() {
  return ['addresses', '/addresses', 'POST'] as const
}

export function getPostAddressesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$post>>>>>,
    TError,
    InferRequestType<typeof client.addresses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddressesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.addresses.$post>) {
      return parseResponse(client.addresses.$post(args, options))
    },
  })
}

export function usePostAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.addresses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAddressesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAddressesActionsValidateMutationKey() {
  return ['addresses', '/addresses/actions/validate', 'POST'] as const
}

export function getPostAddressesActionsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.addresses.actions.validate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.addresses.actions.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddressesActionsValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.addresses.actions.validate.$post>) {
      return parseResponse(client.addresses.actions.validate.$post(args, options))
    },
  })
}

export function usePostAddressesActionsValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.addresses.actions.validate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.addresses.actions.validate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAddressesActionsValidateMutationOptions<TError, TOnMutateResult>(
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

export function getAddressesIdQueryKey(
  args: InferRequestType<(typeof client.addresses)[':id']['$get']>,
) {
  return ['addresses', '/addresses/:id', args] as const
}

export function getAddressesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesIdQueryKey>
  >({
    queryKey: getAddressesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAddressesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAddressesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAddressesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAddressesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAddressesIdMutationKey() {
  return ['addresses', '/addresses/:id', 'DELETE'] as const
}

export function getDeleteAddressesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.addresses)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAddressesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.addresses)[':id']['$delete']>) {
      return parseResponse(client.addresses[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAddressesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.addresses)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAddressesIdMutationOptions<TError, TOnMutateResult>(
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

export function getAuthenticationProvidersQueryKey(
  args: InferRequestType<typeof client.authentication_providers.$get>,
) {
  return ['authentication_providers', '/authentication_providers', args] as const
}

export function getAuthenticationProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authentication_providers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationProvidersQueryKey>
  >({
    queryKey: getAuthenticationProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authentication_providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthenticationProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authentication_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthenticationProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthenticationProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthenticationProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authentication_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthenticationProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthenticationProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAuthenticationProvidersMutationKey() {
  return ['authentication_providers', '/authentication_providers', 'POST'] as const
}

export function getPostAuthenticationProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication_providers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationProvidersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication_providers.$post>) {
      return parseResponse(client.authentication_providers.$post(args, options))
    },
  })
}

export function usePostAuthenticationProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication_providers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authentication_providers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthenticationProvidersMutationOptions<TError, TOnMutateResult>(
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

export function getAuthenticationProvidersIdQueryKey(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$get']>,
) {
  return ['authentication_providers', '/authentication_providers/:id', args] as const
}

export function getAuthenticationProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationProvidersIdQueryKey>
  >({
    queryKey: getAuthenticationProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authentication_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthenticationProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthenticationProvidersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthenticationProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthenticationProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthenticationProvidersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthenticationProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAuthenticationProvidersIdMutationKey() {
  return ['authentication_providers', '/authentication_providers/:id', 'DELETE'] as const
}

export function getDeleteAuthenticationProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authentication_providers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthenticationProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authentication_providers)[':id']['$delete']>,
    ) {
      return parseResponse(client.authentication_providers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAuthenticationProvidersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.authentication_providers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthenticationProvidersIdMutationOptions<
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

export function getPatchAuthenticationProvidersIdMutationKey() {
  return ['authentication_providers', '/authentication_providers/:id', 'PATCH'] as const
}

export function getPatchAuthenticationProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authentication_providers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthenticationProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authentication_providers)[':id']['$patch']>,
    ) {
      return parseResponse(client.authentication_providers[':id'].$patch(args, options))
    },
  })
}

export function usePatchAuthenticationProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authentication_providers)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.authentication_providers)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthenticationProvidersIdMutationOptions<
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

export function getAvailablePhoneNumberBlocksQueryKey(
  args: InferRequestType<typeof client.available_phone_number_blocks.$get>,
) {
  return ['available_phone_number_blocks', '/available_phone_number_blocks', args] as const
}

export function getAvailablePhoneNumberBlocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_number_blocks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.available_phone_number_blocks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_number_blocks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAvailablePhoneNumberBlocksQueryKey>
  >({
    queryKey: getAvailablePhoneNumberBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.available_phone_number_blocks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAvailablePhoneNumberBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_number_blocks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.available_phone_number_blocks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.available_phone_number_blocks.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAvailablePhoneNumberBlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAvailablePhoneNumberBlocksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAvailablePhoneNumberBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_number_blocks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.available_phone_number_blocks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.available_phone_number_blocks.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAvailablePhoneNumberBlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAvailablePhoneNumberBlocksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAvailablePhoneNumbersQueryKey(
  args: InferRequestType<typeof client.available_phone_numbers.$get>,
) {
  return ['available_phone_numbers', '/available_phone_numbers', args] as const
}

export function getAvailablePhoneNumbersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_numbers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.available_phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_numbers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAvailablePhoneNumbersQueryKey>
  >({
    queryKey: getAvailablePhoneNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.available_phone_numbers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAvailablePhoneNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_numbers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.available_phone_numbers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_numbers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAvailablePhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAvailablePhoneNumbersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAvailablePhoneNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_numbers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.available_phone_numbers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.available_phone_numbers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAvailablePhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAvailablePhoneNumbersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBalanceQueryKey() {
  return ['balance', '/balance'] as const
}

export function getBalanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBalanceQueryKey>
  >({
    queryKey: getBalanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.balance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBalanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBalanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBillingGroupsQueryKey(
  args: InferRequestType<typeof client.billing_groups.$get>,
) {
  return ['billing_groups', '/billing_groups', args] as const
}

export function getBillingGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.billing_groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBillingGroupsQueryKey>
  >({
    queryKey: getBillingGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing_groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBillingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing_groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBillingGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBillingGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBillingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing_groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBillingGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBillingGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBillingGroupsMutationKey() {
  return ['billing_groups', '/billing_groups', 'POST'] as const
}

export function getPostBillingGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.billing_groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBillingGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.billing_groups.$post>) {
      return parseResponse(client.billing_groups.$post(args, options))
    },
  })
}

export function usePostBillingGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.billing_groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBillingGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getBillingGroupsIdQueryKey(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$get']>,
) {
  return ['billing_groups', '/billing_groups/:id', args] as const
}

export function getBillingGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingGroupsIdQueryKey>
  >({
    queryKey: getBillingGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing_groups[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBillingGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBillingGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBillingGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBillingGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteBillingGroupsIdMutationKey() {
  return ['billing_groups', '/billing_groups/:id', 'DELETE'] as const
}

export function getDeleteBillingGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.billing_groups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBillingGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.billing_groups)[':id']['$delete']>) {
      return parseResponse(client.billing_groups[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBillingGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing_groups)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.billing_groups)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBillingGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchBillingGroupsIdMutationKey() {
  return ['billing_groups', '/billing_groups/:id', 'PATCH'] as const
}

export function getPatchBillingGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.billing_groups)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBillingGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.billing_groups)[':id']['$patch']>) {
      return parseResponse(client.billing_groups[':id'].$patch(args, options))
    },
  })
}

export function usePatchBillingGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing_groups)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.billing_groups)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBillingGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCallControlApplicationsQueryKey(
  args: InferRequestType<typeof client.call_control_applications.$get>,
) {
  return ['call_control_applications', '/call_control_applications', args] as const
}

export function getCallControlApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.call_control_applications.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallControlApplicationsQueryKey>
  >({
    queryKey: getCallControlApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call_control_applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCallControlApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.call_control_applications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallControlApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCallControlApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCallControlApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.call_control_applications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallControlApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCallControlApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCallControlApplicationsMutationKey() {
  return ['call_control_applications', '/call_control_applications', 'POST'] as const
}

export function getPostCallControlApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.call_control_applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCallControlApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.call_control_applications.$post>) {
      return parseResponse(client.call_control_applications.$post(args, options))
    },
  })
}

export function usePostCallControlApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.call_control_applications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.call_control_applications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallControlApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getCallControlApplicationsIdQueryKey(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$get']>,
) {
  return ['call_control_applications', '/call_control_applications/:id', args] as const
}

export function getCallControlApplicationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallControlApplicationsIdQueryKey>
  >({
    queryKey: getCallControlApplicationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call_control_applications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCallControlApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallControlApplicationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCallControlApplicationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCallControlApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallControlApplicationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCallControlApplicationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCallControlApplicationsIdMutationKey() {
  return ['call_control_applications', '/call_control_applications/:id', 'DELETE'] as const
}

export function getDeleteCallControlApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.call_control_applications)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCallControlApplicationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.call_control_applications)[':id']['$delete']>,
    ) {
      return parseResponse(client.call_control_applications[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCallControlApplicationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.call_control_applications)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCallControlApplicationsIdMutationOptions<
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

export function getPatchCallControlApplicationsIdMutationKey() {
  return ['call_control_applications', '/call_control_applications/:id', 'PATCH'] as const
}

export function getPatchCallControlApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.call_control_applications)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCallControlApplicationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.call_control_applications)[':id']['$patch']>,
    ) {
      return parseResponse(client.call_control_applications[':id'].$patch(args, options))
    },
  })
}

export function usePatchCallControlApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.call_control_applications)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.call_control_applications)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCallControlApplicationsIdMutationOptions<
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

export function getCallEventsQueryKey(args: InferRequestType<typeof client.call_events.$get>) {
  return ['call_events', '/call_events', args] as const
}

export function getCallEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call_events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.call_events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call_events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCallEventsQueryKey>
  >({
    queryKey: getCallEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call_events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCallEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call_events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.call_events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call_events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCallEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCallEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCallEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call_events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.call_events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call_events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCallEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCallEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCallsMutationKey() {
  return ['calls', '/calls', 'POST'] as const
}

export function getPostCallsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$post>>>>>,
    TError,
    InferRequestType<typeof client.calls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.calls.$post>) {
      return parseResponse(client.calls.$post(args, options))
    },
  })
}

export function usePostCalls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$post>>>>>,
        TError,
        InferRequestType<typeof client.calls.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCallsCallControlIdQueryKey(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['$get']>,
) {
  return ['calls', '/calls/:call_control_id', args] as const
}

export function getCallsCallControlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_control_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_control_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallsCallControlIdQueryKey>
  >({
    queryKey: getCallsCallControlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calls[':call_control_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCallsCallControlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_control_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.calls)[':call_control_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallsCallControlIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCallsCallControlIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCallsCallControlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_control_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.calls)[':call_control_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallsCallControlIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCallsCallControlIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCallsCallControlIdActionsAnswerMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/answer', 'POST'] as const
}

export function getPostCallsCallControlIdActionsAnswerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['answer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsAnswerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['answer']['$post']
      >,
    ) {
      return parseResponse(client.calls[':call_control_id'].actions.answer.$post(args, options))
    },
  })
}

export function usePostCallsCallControlIdActionsAnswer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.calls)[':call_control_id']['actions']['answer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsAnswerMutationOptions<
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

export function getPostCallsCallControlIdActionsBridgeMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/bridge', 'POST'] as const
}

export function getPostCallsCallControlIdActionsBridgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['bridge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsBridgeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['bridge']['$post']
      >,
    ) {
      return parseResponse(client.calls[':call_control_id'].actions.bridge.$post(args, options))
    },
  })
}

export function usePostCallsCallControlIdActionsBridge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.calls)[':call_control_id']['actions']['bridge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsBridgeMutationOptions<
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

export function getPostCallsCallControlIdActionsEnqueueMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/enqueue', 'POST'] as const
}

export function getPostCallsCallControlIdActionsEnqueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['enqueue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsEnqueueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['enqueue']['$post']
      >,
    ) {
      return parseResponse(client.calls[':call_control_id'].actions.enqueue.$post(args, options))
    },
  })
}

export function usePostCallsCallControlIdActionsEnqueue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.calls)[':call_control_id']['actions']['enqueue']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsEnqueueMutationOptions<
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

export function getPostCallsCallControlIdActionsForkStartMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/fork_start', 'POST'] as const
}

export function getPostCallsCallControlIdActionsForkStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['fork_start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsForkStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['fork_start']['$post']
      >,
    ) {
      return parseResponse(client.calls[':call_control_id'].actions.fork_start.$post(args, options))
    },
  })
}

export function usePostCallsCallControlIdActionsForkStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.calls)[':call_control_id']['actions']['fork_start']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['fork_start']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsForkStartMutationOptions<
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

export function getPostCallsCallControlIdActionsForkStopMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/fork_stop', 'POST'] as const
}

export function getPostCallsCallControlIdActionsForkStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['fork_stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsForkStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['fork_stop']['$post']
      >,
    ) {
      return parseResponse(client.calls[':call_control_id'].actions.fork_stop.$post(args, options))
    },
  })
}

export function usePostCallsCallControlIdActionsForkStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.calls)[':call_control_id']['actions']['fork_stop']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['fork_stop']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsForkStopMutationOptions<
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

export function getPostCallsCallControlIdActionsGatherStopMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/gather_stop', 'POST'] as const
}

export function getPostCallsCallControlIdActionsGatherStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['gather_stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsGatherStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['gather_stop']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.gather_stop.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsGatherStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.calls)[':call_control_id']['actions']['gather_stop']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['gather_stop']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsGatherStopMutationOptions<
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

export function getPostCallsCallControlIdActionsGatherUsingAudioMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/gather_using_audio', 'POST'] as const
}

export function getPostCallsCallControlIdActionsGatherUsingAudioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['gather_using_audio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsGatherUsingAudioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['gather_using_audio']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.gather_using_audio.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsGatherUsingAudio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['gather_using_audio']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsGatherUsingAudioMutationOptions<
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

export function getPostCallsCallControlIdActionsGatherUsingSpeakMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/gather_using_speak', 'POST'] as const
}

export function getPostCallsCallControlIdActionsGatherUsingSpeakMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['gather_using_speak']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsGatherUsingSpeakMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['gather_using_speak']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.gather_using_speak.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsGatherUsingSpeak<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['gather_using_speak']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsGatherUsingSpeakMutationOptions<
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

export function getPostCallsCallControlIdActionsHangupMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/hangup', 'POST'] as const
}

export function getPostCallsCallControlIdActionsHangupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['hangup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsHangupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['hangup']['$post']
      >,
    ) {
      return parseResponse(client.calls[':call_control_id'].actions.hangup.$post(args, options))
    },
  })
}

export function usePostCallsCallControlIdActionsHangup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.calls)[':call_control_id']['actions']['hangup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsHangupMutationOptions<
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

export function getPostCallsCallControlIdActionsLeaveQueueMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/leave_queue', 'POST'] as const
}

export function getPostCallsCallControlIdActionsLeaveQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['leave_queue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsLeaveQueueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['leave_queue']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.leave_queue.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsLeaveQueue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.calls)[':call_control_id']['actions']['leave_queue']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['leave_queue']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsLeaveQueueMutationOptions<
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

export function getPostCallsCallControlIdActionsPlaybackStartMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/playback_start', 'POST'] as const
}

export function getPostCallsCallControlIdActionsPlaybackStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['playback_start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsPlaybackStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['playback_start']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.playback_start.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsPlaybackStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['playback_start']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsPlaybackStartMutationOptions<
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

export function getPostCallsCallControlIdActionsPlaybackStopMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/playback_stop', 'POST'] as const
}

export function getPostCallsCallControlIdActionsPlaybackStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['playback_stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsPlaybackStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['playback_stop']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.playback_stop.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsPlaybackStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['playback_stop']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsPlaybackStopMutationOptions<
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

export function getPostCallsCallControlIdActionsRecordPauseMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/record_pause', 'POST'] as const
}

export function getPostCallsCallControlIdActionsRecordPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['record_pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsRecordPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['record_pause']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.record_pause.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsRecordPause<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['record_pause']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsRecordPauseMutationOptions<
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

export function getPostCallsCallControlIdActionsRecordResumeMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/record_resume', 'POST'] as const
}

export function getPostCallsCallControlIdActionsRecordResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['record_resume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsRecordResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['record_resume']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.record_resume.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsRecordResume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['record_resume']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsRecordResumeMutationOptions<
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

export function getPostCallsCallControlIdActionsRecordStartMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/record_start', 'POST'] as const
}

export function getPostCallsCallControlIdActionsRecordStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['record_start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsRecordStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['record_start']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.record_start.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsRecordStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['record_start']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsRecordStartMutationOptions<
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

export function getPostCallsCallControlIdActionsRecordStopMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/record_stop', 'POST'] as const
}

export function getPostCallsCallControlIdActionsRecordStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['record_stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsRecordStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['record_stop']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.record_stop.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsRecordStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.calls)[':call_control_id']['actions']['record_stop']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['record_stop']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsRecordStopMutationOptions<
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

export function getPostCallsCallControlIdActionsReferMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/refer', 'POST'] as const
}

export function getPostCallsCallControlIdActionsReferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['refer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsReferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['refer']['$post']
      >,
    ) {
      return parseResponse(client.calls[':call_control_id'].actions.refer.$post(args, options))
    },
  })
}

export function usePostCallsCallControlIdActionsRefer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.calls)[':call_control_id']['actions']['refer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsReferMutationOptions<
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

export function getPostCallsCallControlIdActionsRejectMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/reject', 'POST'] as const
}

export function getPostCallsCallControlIdActionsRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['reject']['$post']
      >,
    ) {
      return parseResponse(client.calls[':call_control_id'].actions.reject.$post(args, options))
    },
  })
}

export function usePostCallsCallControlIdActionsReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.calls)[':call_control_id']['actions']['reject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsRejectMutationOptions<
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

export function getPostCallsCallControlIdActionsSendDtmfMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/send_dtmf', 'POST'] as const
}

export function getPostCallsCallControlIdActionsSendDtmfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['send_dtmf']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsSendDtmfMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['send_dtmf']['$post']
      >,
    ) {
      return parseResponse(client.calls[':call_control_id'].actions.send_dtmf.$post(args, options))
    },
  })
}

export function usePostCallsCallControlIdActionsSendDtmf<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.calls)[':call_control_id']['actions']['send_dtmf']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['send_dtmf']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsSendDtmfMutationOptions<
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

export function getPostCallsCallControlIdActionsSpeakMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/speak', 'POST'] as const
}

export function getPostCallsCallControlIdActionsSpeakMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['speak']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsSpeakMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['speak']['$post']
      >,
    ) {
      return parseResponse(client.calls[':call_control_id'].actions.speak.$post(args, options))
    },
  })
}

export function usePostCallsCallControlIdActionsSpeak<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.calls)[':call_control_id']['actions']['speak']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsSpeakMutationOptions<
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

export function getPostCallsCallControlIdActionsTranscriptionStartMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/transcription_start', 'POST'] as const
}

export function getPostCallsCallControlIdActionsTranscriptionStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['transcription_start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsTranscriptionStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['transcription_start']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.transcription_start.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsTranscriptionStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['transcription_start']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsTranscriptionStartMutationOptions<
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

export function getPostCallsCallControlIdActionsTranscriptionStopMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/transcription_stop', 'POST'] as const
}

export function getPostCallsCallControlIdActionsTranscriptionStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.calls)[':call_control_id']['actions']['transcription_stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsTranscriptionStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['transcription_stop']['$post']
      >,
    ) {
      return parseResponse(
        client.calls[':call_control_id'].actions.transcription_stop.$post(args, options),
      )
    },
  })
}

export function usePostCallsCallControlIdActionsTranscriptionStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.calls)[':call_control_id']['actions']['transcription_stop']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsTranscriptionStopMutationOptions<
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

export function getPostCallsCallControlIdActionsTransferMutationKey() {
  return ['calls', '/calls/:call_control_id/actions/transfer', 'POST'] as const
}

export function getPostCallsCallControlIdActionsTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.calls)[':call_control_id']['actions']['transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallControlIdActionsTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calls)[':call_control_id']['actions']['transfer']['$post']
      >,
    ) {
      return parseResponse(client.calls[':call_control_id'].actions.transfer.$post(args, options))
    },
  })
}

export function usePostCallsCallControlIdActionsTransfer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.calls)[':call_control_id']['actions']['transfer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.calls)[':call_control_id']['actions']['transfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsCallControlIdActionsTransferMutationOptions<
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

export function getCommentsQueryKey(args: InferRequestType<typeof client.comments.$get>) {
  return ['comments', '/comments', args] as const
}

export function getCommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommentsQueryKey>
  >({
    queryKey: getCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.comments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.comments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCommentsMutationKey() {
  return ['comments', '/comments', 'POST'] as const
}

export function getPostCommentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>>,
    TError,
    InferRequestType<typeof client.comments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.comments.$post>) {
      return parseResponse(client.comments.$post(args, options))
    },
  })
}

export function usePostComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.comments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCommentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCommentsIdQueryKey(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
) {
  return ['comments', '/comments/:id', args] as const
}

export function getCommentsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.comments)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdQueryKey>
  >({
    queryKey: getCommentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCommentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchCommentsIdReadMutationKey() {
  return ['comments', '/comments/:id/read', 'PATCH'] as const
}

export function getPatchCommentsIdReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['read']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.comments)[':id']['read']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCommentsIdReadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':id']['read']['$patch']>) {
      return parseResponse(client.comments[':id'].read.$patch(args, options))
    },
  })
}

export function usePatchCommentsIdRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':id']['read']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.comments)[':id']['read']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCommentsIdReadMutationOptions<TError, TOnMutateResult>(
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

export function getConferencesQueryKey(args: InferRequestType<typeof client.conferences.$get>) {
  return ['conferences', '/conferences', args] as const
}

export function getConferencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.conferences.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConferencesQueryKey>
  >({
    queryKey: getConferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conferences.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conferences.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConferencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conferences.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConferencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostConferencesMutationKey() {
  return ['conferences', '/conferences', 'POST'] as const
}

export function getPostConferencesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$post>>>>>,
    TError,
    InferRequestType<typeof client.conferences.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conferences.$post>) {
      return parseResponse(client.conferences.$post(args, options))
    },
  })
}

export function usePostConferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.conferences.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConferencesConferenceIdParticipantsQueryKey(
  args: InferRequestType<(typeof client.conferences)[':conference_id']['participants']['$get']>,
) {
  return ['conferences', '/conferences/:conference_id/participants', args] as const
}

export function getConferencesConferenceIdParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conferences)[':conference_id']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conferences)[':conference_id']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':conference_id']['participants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConferencesConferenceIdParticipantsQueryKey>
  >({
    queryKey: getConferencesConferenceIdParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conferences[':conference_id'].participants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConferencesConferenceIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conferences)[':conference_id']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conferences)[':conference_id']['participants']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.conferences)[':conference_id']['participants']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConferencesConferenceIdParticipantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConferencesConferenceIdParticipantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConferencesConferenceIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conferences)[':conference_id']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conferences)[':conference_id']['participants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.conferences)[':conference_id']['participants']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConferencesConferenceIdParticipantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConferencesConferenceIdParticipantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConferencesIdQueryKey(
  args: InferRequestType<(typeof client.conferences)[':id']['$get']>,
) {
  return ['conferences', '/conferences/:id', args] as const
}

export function getConferencesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.conferences)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conferences)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.conferences)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConferencesIdQueryKey>
  >({
    queryKey: getConferencesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conferences[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConferencesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.conferences)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conferences)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.conferences)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConferencesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConferencesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConferencesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.conferences)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conferences)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.conferences)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConferencesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConferencesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostConferencesIdActionsDialParticipantMutationKey() {
  return ['conferences', '/conferences/:id/actions/dial_participant', 'POST'] as const
}

export function getPostConferencesIdActionsDialParticipantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conferences)[':id']['actions']['dial_participant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsDialParticipantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conferences)[':id']['actions']['dial_participant']['$post']
      >,
    ) {
      return parseResponse(client.conferences[':id'].actions.dial_participant.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsDialParticipant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conferences)[':id']['actions']['dial_participant']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conferences)[':id']['actions']['dial_participant']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsDialParticipantMutationOptions<
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

export function getPostConferencesIdActionsHoldMutationKey() {
  return ['conferences', '/conferences/:id/actions/hold', 'POST'] as const
}

export function getPostConferencesIdActionsHoldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['hold']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conferences)[':id']['actions']['hold']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsHoldMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conferences)[':id']['actions']['hold']['$post']>,
    ) {
      return parseResponse(client.conferences[':id'].actions.hold.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsHold<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['hold']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conferences)[':id']['actions']['hold']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsHoldMutationOptions<TError, TOnMutateResult>(
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

export function getPostConferencesIdActionsJoinMutationKey() {
  return ['conferences', '/conferences/:id/actions/join', 'POST'] as const
}

export function getPostConferencesIdActionsJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['join']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conferences)[':id']['actions']['join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsJoinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conferences)[':id']['actions']['join']['$post']>,
    ) {
      return parseResponse(client.conferences[':id'].actions.join.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['join']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conferences)[':id']['actions']['join']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsJoinMutationOptions<TError, TOnMutateResult>(
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

export function getPostConferencesIdActionsLeaveMutationKey() {
  return ['conferences', '/conferences/:id/actions/leave', 'POST'] as const
}

export function getPostConferencesIdActionsLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['leave']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conferences)[':id']['actions']['leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsLeaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conferences)[':id']['actions']['leave']['$post']>,
    ) {
      return parseResponse(client.conferences[':id'].actions.leave.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['leave']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conferences)[':id']['actions']['leave']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsLeaveMutationOptions<TError, TOnMutateResult>(
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

export function getPostConferencesIdActionsMuteMutationKey() {
  return ['conferences', '/conferences/:id/actions/mute', 'POST'] as const
}

export function getPostConferencesIdActionsMuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['mute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conferences)[':id']['actions']['mute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsMuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conferences)[':id']['actions']['mute']['$post']>,
    ) {
      return parseResponse(client.conferences[':id'].actions.mute.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsMute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['mute']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conferences)[':id']['actions']['mute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsMuteMutationOptions<TError, TOnMutateResult>(
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

export function getPostConferencesIdActionsPlayMutationKey() {
  return ['conferences', '/conferences/:id/actions/play', 'POST'] as const
}

export function getPostConferencesIdActionsPlayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['play']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conferences)[':id']['actions']['play']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsPlayMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conferences)[':id']['actions']['play']['$post']>,
    ) {
      return parseResponse(client.conferences[':id'].actions.play.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsPlay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['play']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conferences)[':id']['actions']['play']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsPlayMutationOptions<TError, TOnMutateResult>(
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

export function getPostConferencesIdActionsRecordStartMutationKey() {
  return ['conferences', '/conferences/:id/actions/record_start', 'POST'] as const
}

export function getPostConferencesIdActionsRecordStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conferences)[':id']['actions']['record_start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsRecordStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conferences)[':id']['actions']['record_start']['$post']
      >,
    ) {
      return parseResponse(client.conferences[':id'].actions.record_start.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsRecordStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.conferences)[':id']['actions']['record_start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsRecordStartMutationOptions<
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

export function getPostConferencesIdActionsRecordStopMutationKey() {
  return ['conferences', '/conferences/:id/actions/record_stop', 'POST'] as const
}

export function getPostConferencesIdActionsRecordStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['record_stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conferences)[':id']['actions']['record_stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsRecordStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conferences)[':id']['actions']['record_stop']['$post']>,
    ) {
      return parseResponse(client.conferences[':id'].actions.record_stop.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsRecordStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.conferences)[':id']['actions']['record_stop']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conferences)[':id']['actions']['record_stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsRecordStopMutationOptions<
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

export function getPostConferencesIdActionsSpeakMutationKey() {
  return ['conferences', '/conferences/:id/actions/speak', 'POST'] as const
}

export function getPostConferencesIdActionsSpeakMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['speak']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conferences)[':id']['actions']['speak']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsSpeakMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conferences)[':id']['actions']['speak']['$post']>,
    ) {
      return parseResponse(client.conferences[':id'].actions.speak.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsSpeak<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['speak']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conferences)[':id']['actions']['speak']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsSpeakMutationOptions<TError, TOnMutateResult>(
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

export function getPostConferencesIdActionsStopMutationKey() {
  return ['conferences', '/conferences/:id/actions/stop', 'POST'] as const
}

export function getPostConferencesIdActionsStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conferences)[':id']['actions']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conferences)[':id']['actions']['stop']['$post']>,
    ) {
      return parseResponse(client.conferences[':id'].actions.stop.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['stop']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conferences)[':id']['actions']['stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsStopMutationOptions<TError, TOnMutateResult>(
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

export function getPostConferencesIdActionsUnholdMutationKey() {
  return ['conferences', '/conferences/:id/actions/unhold', 'POST'] as const
}

export function getPostConferencesIdActionsUnholdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['unhold']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conferences)[':id']['actions']['unhold']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsUnholdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conferences)[':id']['actions']['unhold']['$post']>,
    ) {
      return parseResponse(client.conferences[':id'].actions.unhold.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsUnhold<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['unhold']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conferences)[':id']['actions']['unhold']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsUnholdMutationOptions<
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

export function getPostConferencesIdActionsUnmuteMutationKey() {
  return ['conferences', '/conferences/:id/actions/unmute', 'POST'] as const
}

export function getPostConferencesIdActionsUnmuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['unmute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conferences)[':id']['actions']['unmute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsUnmuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conferences)[':id']['actions']['unmute']['$post']>,
    ) {
      return parseResponse(client.conferences[':id'].actions.unmute.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsUnmute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['unmute']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conferences)[':id']['actions']['unmute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsUnmuteMutationOptions<
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

export function getPostConferencesIdActionsUpdateMutationKey() {
  return ['conferences', '/conferences/:id/actions/update', 'POST'] as const
}

export function getPostConferencesIdActionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conferences)[':id']['actions']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConferencesIdActionsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conferences)[':id']['actions']['update']['$post']>,
    ) {
      return parseResponse(client.conferences[':id'].actions.update.$post(args, options))
    },
  })
}

export function usePostConferencesIdActionsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conferences)[':id']['actions']['update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conferences)[':id']['actions']['update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConferencesIdActionsUpdateMutationOptions<
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

export function getConnectionsQueryKey(args: InferRequestType<typeof client.connections.$get>) {
  return ['connections', '/connections', args] as const
}

export function getConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >({
    queryKey: getConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getConnectionsIdQueryKey(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
) {
  return ['connections', '/connections/:id', args] as const
}

export function getConnectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsIdQueryKey>
  >({
    queryKey: getConnectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConnectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConnectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCredentialConnectionsQueryKey(
  args: InferRequestType<typeof client.credential_connections.$get>,
) {
  return ['credential_connections', '/credential_connections', args] as const
}

export function getCredentialConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.credential_connections.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCredentialConnectionsQueryKey>
  >({
    queryKey: getCredentialConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credential_connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCredentialConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.credential_connections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCredentialConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCredentialConnectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCredentialConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.credential_connections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCredentialConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCredentialConnectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCredentialConnectionsMutationKey() {
  return ['credential_connections', '/credential_connections', 'POST'] as const
}

export function getPostCredentialConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.credential_connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCredentialConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credential_connections.$post>) {
      return parseResponse(client.credential_connections.$post(args, options))
    },
  })
}

export function usePostCredentialConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.credential_connections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.credential_connections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCredentialConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getCredentialConnectionsIdQueryKey(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$get']>,
) {
  return ['credential_connections', '/credential_connections/:id', args] as const
}

export function getCredentialConnectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.credential_connections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credential_connections)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCredentialConnectionsIdQueryKey>
  >({
    queryKey: getCredentialConnectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credential_connections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCredentialConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.credential_connections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.credential_connections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCredentialConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCredentialConnectionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCredentialConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.credential_connections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.credential_connections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCredentialConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCredentialConnectionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCredentialConnectionsIdMutationKey() {
  return ['credential_connections', '/credential_connections/:id', 'DELETE'] as const
}

export function getDeleteCredentialConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credential_connections)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.credential_connections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCredentialConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.credential_connections)[':id']['$delete']>,
    ) {
      return parseResponse(client.credential_connections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCredentialConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.credential_connections)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.credential_connections)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCredentialConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCredentialConnectionsIdMutationKey() {
  return ['credential_connections', '/credential_connections/:id', 'PATCH'] as const
}

export function getPatchCredentialConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credential_connections)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.credential_connections)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCredentialConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.credential_connections)[':id']['$patch']>,
    ) {
      return parseResponse(client.credential_connections[':id'].$patch(args, options))
    },
  })
}

export function usePatchCredentialConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.credential_connections)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.credential_connections)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCredentialConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDetailRecordsQueryKey(
  args: InferRequestType<typeof client.detail_records.$get>,
) {
  return ['detail_records', '/detail_records', args] as const
}

export function getDetailRecordsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detail_records.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.detail_records.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detail_records.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDetailRecordsQueryKey>
  >({
    queryKey: getDetailRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detail_records.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDetailRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detail_records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.detail_records.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detail_records.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDetailRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDetailRecordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDetailRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detail_records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.detail_records.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detail_records.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDetailRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDetailRecordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDocumentLinksQueryKey(
  args: InferRequestType<typeof client.document_links.$get>,
) {
  return ['document_links', '/document_links', args] as const
}

export function getDocumentLinksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_links.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.document_links.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_links.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentLinksQueryKey>
  >({
    queryKey: getDocumentLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.document_links.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocumentLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_links.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.document_links.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_links.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentLinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocumentLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_links.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.document_links.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_links.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentLinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDocumentsQueryKey(args: InferRequestType<typeof client.documents.$get>) {
  return ['documents', '/documents', args] as const
}

export function getDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.documents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocumentsQueryKey>
  >({
    queryKey: getDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDocumentsMutationKey() {
  return ['documents', '/documents', 'POST'] as const
}

export function getPostDocumentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$post>>>>>,
    TError,
    InferRequestType<typeof client.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.documents.$post>) {
      return parseResponse(client.documents.$post(args, options))
    },
  })
}

export function usePostDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDocumentsIdQueryKey(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
) {
  return ['documents', '/documents/:id', args] as const
}

export function getDocumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsIdQueryKey>
  >({
    queryKey: getDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocumentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocumentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteDocumentsIdMutationKey() {
  return ['documents', '/documents/:id', 'DELETE'] as const
}

export function getDeleteDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.documents)[':id']['$delete']>) {
      return parseResponse(client.documents[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDocumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDocumentsIdMutationKey() {
  return ['documents', '/documents/:id', 'PATCH'] as const
}

export function getPatchDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.documents)[':id']['$patch']>) {
      return parseResponse(client.documents[':id'].$patch(args, options))
    },
  })
}

export function usePatchDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDocumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDocumentsIdDownloadQueryKey(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
) {
  return ['documents', '/documents/:id/download', args] as const
}

export function getDocumentsIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsIdDownloadQueryKey>
  >({
    queryKey: getDocumentsIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocumentsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentsIdDownloadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocumentsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentsIdDownloadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFaxApplicationsQueryKey(
  args: InferRequestType<typeof client.fax_applications.$get>,
) {
  return ['fax_applications', '/fax_applications', args] as const
}

export function getFaxApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fax_applications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFaxApplicationsQueryKey>
  >({
    queryKey: getFaxApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax_applications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFaxApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fax_applications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFaxApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFaxApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFaxApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fax_applications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFaxApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFaxApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFaxApplicationsMutationKey() {
  return ['fax_applications', '/fax_applications', 'POST'] as const
}

export function getPostFaxApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fax_applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFaxApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fax_applications.$post>) {
      return parseResponse(client.fax_applications.$post(args, options))
    },
  })
}

export function usePostFaxApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fax_applications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.fax_applications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFaxApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getFaxApplicationsIdQueryKey(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$get']>,
) {
  return ['fax_applications', '/fax_applications/:id', args] as const
}

export function getFaxApplicationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fax_applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fax_applications)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFaxApplicationsIdQueryKey>
  >({
    queryKey: getFaxApplicationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax_applications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFaxApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fax_applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fax_applications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFaxApplicationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFaxApplicationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFaxApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fax_applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fax_applications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFaxApplicationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFaxApplicationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteFaxApplicationsIdMutationKey() {
  return ['fax_applications', '/fax_applications/:id', 'DELETE'] as const
}

export function getDeleteFaxApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fax_applications)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.fax_applications)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFaxApplicationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.fax_applications)[':id']['$delete']>) {
      return parseResponse(client.fax_applications[':id'].$delete(args, options))
    },
  })
}

export function useDeleteFaxApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fax_applications)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.fax_applications)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFaxApplicationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchFaxApplicationsIdMutationKey() {
  return ['fax_applications', '/fax_applications/:id', 'PATCH'] as const
}

export function getPatchFaxApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fax_applications)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.fax_applications)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFaxApplicationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.fax_applications)[':id']['$patch']>) {
      return parseResponse(client.fax_applications[':id'].$patch(args, options))
    },
  })
}

export function usePatchFaxApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fax_applications)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.fax_applications)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFaxApplicationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getFaxesQueryKey(args: InferRequestType<typeof client.faxes.$get>) {
  return ['faxes', '/faxes', args] as const
}

export function getFaxesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.faxes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFaxesQueryKey>
  >({
    queryKey: getFaxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.faxes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFaxes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.faxes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFaxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFaxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFaxes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.faxes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFaxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFaxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFaxesMutationKey() {
  return ['faxes', '/faxes', 'POST'] as const
}

export function getPostFaxesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$post>>>>>,
    TError,
    InferRequestType<typeof client.faxes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFaxesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.faxes.$post>) {
      return parseResponse(client.faxes.$post(args, options))
    },
  })
}

export function usePostFaxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$post>>>>>,
        TError,
        InferRequestType<typeof client.faxes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFaxesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFaxesIdQueryKey(args: InferRequestType<(typeof client.faxes)[':id']['$get']>) {
  return ['faxes', '/faxes/:id', args] as const
}

export function getFaxesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.faxes)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFaxesIdQueryKey>
  >({
    queryKey: getFaxesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.faxes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFaxesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.faxes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFaxesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFaxesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFaxesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.faxes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFaxesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFaxesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteFaxesIdMutationKey() {
  return ['faxes', '/faxes/:id', 'DELETE'] as const
}

export function getDeleteFaxesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.faxes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFaxesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.faxes)[':id']['$delete']>) {
      return parseResponse(client.faxes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteFaxesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.faxes)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.faxes)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFaxesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFaxesIdActionsRefreshMutationKey() {
  return ['faxes', '/faxes/:id/actions/refresh', 'POST'] as const
}

export function getPostFaxesIdActionsRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.faxes)[':id']['actions']['refresh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.faxes)[':id']['actions']['refresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFaxesIdActionsRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.faxes)[':id']['actions']['refresh']['$post']>,
    ) {
      return parseResponse(client.faxes[':id'].actions.refresh.$post(args, options))
    },
  })
}

export function usePostFaxesIdActionsRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.faxes)[':id']['actions']['refresh']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.faxes)[':id']['actions']['refresh']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFaxesIdActionsRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getFqdnConnectionsQueryKey(
  args: InferRequestType<typeof client.fqdn_connections.$get>,
) {
  return ['fqdn_connections', '/fqdn_connections', args] as const
}

export function getFqdnConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fqdn_connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFqdnConnectionsQueryKey>
  >({
    queryKey: getFqdnConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fqdn_connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFqdnConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fqdn_connections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFqdnConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFqdnConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFqdnConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fqdn_connections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFqdnConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFqdnConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFqdnConnectionsMutationKey() {
  return ['fqdn_connections', '/fqdn_connections', 'POST'] as const
}

export function getPostFqdnConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fqdn_connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFqdnConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fqdn_connections.$post>) {
      return parseResponse(client.fqdn_connections.$post(args, options))
    },
  })
}

export function usePostFqdnConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fqdn_connections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.fqdn_connections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFqdnConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getFqdnConnectionsIdQueryKey(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$get']>,
) {
  return ['fqdn_connections', '/fqdn_connections/:id', args] as const
}

export function getFqdnConnectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFqdnConnectionsIdQueryKey>
  >({
    queryKey: getFqdnConnectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fqdn_connections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFqdnConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFqdnConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFqdnConnectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFqdnConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFqdnConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFqdnConnectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteFqdnConnectionsIdMutationKey() {
  return ['fqdn_connections', '/fqdn_connections/:id', 'DELETE'] as const
}

export function getDeleteFqdnConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.fqdn_connections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFqdnConnectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.fqdn_connections)[':id']['$delete']>) {
      return parseResponse(client.fqdn_connections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteFqdnConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.fqdn_connections)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFqdnConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchFqdnConnectionsIdMutationKey() {
  return ['fqdn_connections', '/fqdn_connections/:id', 'PATCH'] as const
}

export function getPatchFqdnConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.fqdn_connections)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFqdnConnectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.fqdn_connections)[':id']['$patch']>) {
      return parseResponse(client.fqdn_connections[':id'].$patch(args, options))
    },
  })
}

export function usePatchFqdnConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fqdn_connections)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.fqdn_connections)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFqdnConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getFqdnsQueryKey(args: InferRequestType<typeof client.fqdns.$get>) {
  return ['fqdns', '/fqdns', args] as const
}

export function getFqdnsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fqdns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFqdnsQueryKey>
  >({
    queryKey: getFqdnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fqdns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFqdns<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fqdns.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFqdnsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFqdnsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFqdns<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fqdns.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFqdnsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFqdnsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFqdnsMutationKey() {
  return ['fqdns', '/fqdns', 'POST'] as const
}

export function getPostFqdnsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$post>>>>>,
    TError,
    InferRequestType<typeof client.fqdns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFqdnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fqdns.$post>) {
      return parseResponse(client.fqdns.$post(args, options))
    },
  })
}

export function usePostFqdns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fqdns.$post>>>>>,
        TError,
        InferRequestType<typeof client.fqdns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFqdnsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFqdnsIdQueryKey(args: InferRequestType<(typeof client.fqdns)[':id']['$get']>) {
  return ['fqdns', '/fqdns/:id', args] as const
}

export function getFqdnsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.fqdns)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFqdnsIdQueryKey>
  >({
    queryKey: getFqdnsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fqdns[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFqdnsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fqdns)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFqdnsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFqdnsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFqdnsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fqdns)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFqdnsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFqdnsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteFqdnsIdMutationKey() {
  return ['fqdns', '/fqdns/:id', 'DELETE'] as const
}

export function getDeleteFqdnsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.fqdns)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFqdnsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.fqdns)[':id']['$delete']>) {
      return parseResponse(client.fqdns[':id'].$delete(args, options))
    },
  })
}

export function useDeleteFqdnsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.fqdns)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFqdnsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchFqdnsIdMutationKey() {
  return ['fqdns', '/fqdns/:id', 'PATCH'] as const
}

export function getPatchFqdnsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.fqdns)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFqdnsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.fqdns)[':id']['$patch']>) {
      return parseResponse(client.fqdns[':id'].$patch(args, options))
    },
  })
}

export function usePatchFqdnsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.fqdns)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.fqdns)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFqdnsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInventoryCoverageQueryKey(
  args: InferRequestType<typeof client.inventory_coverage.$get>,
) {
  return ['inventory_coverage', '/inventory_coverage', args] as const
}

export function getInventoryCoverageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_coverage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inventory_coverage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_coverage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInventoryCoverageQueryKey>
  >({
    queryKey: getInventoryCoverageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inventory_coverage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInventoryCoverage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_coverage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inventory_coverage.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.inventory_coverage.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInventoryCoverageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInventoryCoverageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInventoryCoverage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_coverage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inventory_coverage.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.inventory_coverage.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInventoryCoverageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInventoryCoverageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIpConnectionsQueryKey(
  args: InferRequestType<typeof client.ip_connections.$get>,
) {
  return ['ip_connections', '/ip_connections', args] as const
}

export function getIpConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ip_connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpConnectionsQueryKey>
  >({
    queryKey: getIpConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ip_connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIpConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ip_connections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIpConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ip_connections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostIpConnectionsMutationKey() {
  return ['ip_connections', '/ip_connections', 'POST'] as const
}

export function getPostIpConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ip_connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ip_connections.$post>) {
      return parseResponse(client.ip_connections.$post(args, options))
    },
  })
}

export function usePostIpConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_connections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ip_connections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getIpConnectionsIdQueryKey(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$get']>,
) {
  return ['ip_connections', '/ip_connections/:id', args] as const
}

export function getIpConnectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpConnectionsIdQueryKey>
  >({
    queryKey: getIpConnectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ip_connections[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIpConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpConnectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIpConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpConnectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteIpConnectionsIdMutationKey() {
  return ['ip_connections', '/ip_connections/:id', 'DELETE'] as const
}

export function getDeleteIpConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ip_connections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpConnectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ip_connections)[':id']['$delete']>) {
      return parseResponse(client.ip_connections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteIpConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ip_connections)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ip_connections)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchIpConnectionsIdMutationKey() {
  return ['ip_connections', '/ip_connections/:id', 'PATCH'] as const
}

export function getPatchIpConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ip_connections)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ip_connections)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpConnectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ip_connections)[':id']['$patch']>) {
      return parseResponse(client.ip_connections[':id'].$patch(args, options))
    },
  })
}

export function usePatchIpConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ip_connections)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ip_connections)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function useIps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ips.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ips.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$post>>>>>,
        TError,
        InferRequestType<typeof client.ips.$post>,
        TOnMutateResult
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

export function getIpsIdQueryKey(args: InferRequestType<(typeof client.ips)[':id']['$get']>) {
  return ['ips', '/ips/:id', args] as const
}

export function getIpsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.ips)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpsIdQueryKey>
  >({
    queryKey: getIpsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ips[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIpsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIpsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteIpsIdMutationKey() {
  return ['ips', '/ips/:id', 'DELETE'] as const
}

export function getDeleteIpsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.ips)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)[':id']['$delete']>) {
      return parseResponse(client.ips[':id'].$delete(args, options))
    },
  })
}

export function useDeleteIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpsIdMutationKey() {
  return ['ips', '/ips/:id', 'PATCH'] as const
}

export function getPatchIpsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.ips)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)[':id']['$patch']>) {
      return parseResponse(client.ips[':id'].$patch(args, options))
    },
  })
}

export function usePatchIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLedgerBillingGroupReportsMutationKey() {
  return ['ledger_billing_group_reports', '/ledger_billing_group_reports', 'POST'] as const
}

export function getPostLedgerBillingGroupReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ledger_billing_group_reports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ledger_billing_group_reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLedgerBillingGroupReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ledger_billing_group_reports.$post>) {
      return parseResponse(client.ledger_billing_group_reports.$post(args, options))
    },
  })
}

export function usePostLedgerBillingGroupReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ledger_billing_group_reports.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ledger_billing_group_reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLedgerBillingGroupReportsMutationOptions<TError, TOnMutateResult>(
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

export function getLedgerBillingGroupReportsIdQueryKey(
  args: InferRequestType<(typeof client.ledger_billing_group_reports)[':id']['$get']>,
) {
  return ['ledger_billing_group_reports', '/ledger_billing_group_reports/:id', args] as const
}

export function getLedgerBillingGroupReportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ledger_billing_group_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ledger_billing_group_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledger_billing_group_reports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLedgerBillingGroupReportsIdQueryKey>
  >({
    queryKey: getLedgerBillingGroupReportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ledger_billing_group_reports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLedgerBillingGroupReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ledger_billing_group_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ledger_billing_group_reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ledger_billing_group_reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLedgerBillingGroupReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getLedgerBillingGroupReportsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLedgerBillingGroupReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ledger_billing_group_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ledger_billing_group_reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ledger_billing_group_reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLedgerBillingGroupReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getLedgerBillingGroupReportsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getManagedAccountsQueryKey(
  args: InferRequestType<typeof client.managed_accounts.$get>,
) {
  return ['managed_accounts', '/managed_accounts', args] as const
}

export function getManagedAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.managed_accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagedAccountsQueryKey>
  >({
    queryKey: getManagedAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.managed_accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useManagedAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.managed_accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getManagedAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getManagedAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManagedAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.managed_accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getManagedAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getManagedAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostManagedAccountsMutationKey() {
  return ['managed_accounts', '/managed_accounts', 'POST'] as const
}

export function getPostManagedAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.managed_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.managed_accounts.$post>) {
      return parseResponse(client.managed_accounts.$post(args, options))
    },
  })
}

export function usePostManagedAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.managed_accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.managed_accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getManagedAccountsIdQueryKey(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['$get']>,
) {
  return ['managed_accounts', '/managed_accounts/:id', args] as const
}

export function getManagedAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.managed_accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.managed_accounts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedAccountsIdQueryKey>
  >({
    queryKey: getManagedAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.managed_accounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useManagedAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.managed_accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed_accounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getManagedAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManagedAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.managed_accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed_accounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getManagedAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostManagedAccountsIdActionsDisableMutationKey() {
  return ['managed_accounts', '/managed_accounts/:id/actions/disable', 'POST'] as const
}

export function getPostManagedAccountsIdActionsDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.managed_accounts)[':id']['actions']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedAccountsIdActionsDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.managed_accounts)[':id']['actions']['disable']['$post']
      >,
    ) {
      return parseResponse(client.managed_accounts[':id'].actions.disable.$post(args, options))
    },
  })
}

export function usePostManagedAccountsIdActionsDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.managed_accounts)[':id']['actions']['disable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedAccountsIdActionsDisableMutationOptions<
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

export function getPostManagedAccountsIdActionsEnableMutationKey() {
  return ['managed_accounts', '/managed_accounts/:id/actions/enable', 'POST'] as const
}

export function getPostManagedAccountsIdActionsEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed_accounts)[':id']['actions']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed_accounts)[':id']['actions']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedAccountsIdActionsEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed_accounts)[':id']['actions']['enable']['$post']>,
    ) {
      return parseResponse(client.managed_accounts[':id'].actions.enable.$post(args, options))
    },
  })
}

export function usePostManagedAccountsIdActionsEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.managed_accounts)[':id']['actions']['enable']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.managed_accounts)[':id']['actions']['enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedAccountsIdActionsEnableMutationOptions<
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

export function getMediaQueryKey() {
  return ['media', '/media'] as const
}

export function getMediaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMediaQueryKey>
  >({
    queryKey: getMediaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.media.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMedia<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMediaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMedia<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMediaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMediaMutationKey() {
  return ['media', '/media', 'POST'] as const
}

export function getPostMediaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
    TError,
    InferRequestType<typeof client.media.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.media.$post>) {
      return parseResponse(client.media.$post(args, options))
    },
  })
}

export function usePostMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
        TError,
        InferRequestType<typeof client.media.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMediaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMediaMediaNameQueryKey(
  args: InferRequestType<(typeof client.media)[':media_name']['$get']>,
) {
  return ['media', '/media/:media_name', args] as const
}

export function getMediaMediaNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media)[':media_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaMediaNameQueryKey>
  >({
    queryKey: getMediaMediaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media[':media_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMediaMediaName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media)[':media_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaMediaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMediaMediaNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMediaMediaName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media)[':media_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaMediaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMediaMediaNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutMediaMediaNameMutationKey() {
  return ['media', '/media/:media_name', 'PUT'] as const
}

export function getPutMediaMediaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.media)[':media_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMediaMediaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.media)[':media_name']['$put']>) {
      return parseResponse(client.media[':media_name'].$put(args, options))
    },
  })
}

export function usePutMediaMediaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.media)[':media_name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMediaMediaNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMediaMediaNameMutationKey() {
  return ['media', '/media/:media_name', 'DELETE'] as const
}

export function getDeleteMediaMediaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.media)[':media_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMediaMediaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.media)[':media_name']['$delete']>) {
      return parseResponse(client.media[':media_name'].$delete(args, options))
    },
  })
}

export function useDeleteMediaMediaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.media)[':media_name']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.media)[':media_name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMediaMediaNameMutationOptions<TError, TOnMutateResult>(
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

export function getMediaMediaNameDownloadQueryKey(
  args: InferRequestType<(typeof client.media)[':media_name']['download']['$get']>,
) {
  return ['media', '/media/:media_name/download', args] as const
}

export function getMediaMediaNameDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.media)[':media_name']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media)[':media_name']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.media)[':media_name']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaMediaNameDownloadQueryKey>
  >({
    queryKey: getMediaMediaNameDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media[':media_name'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMediaMediaNameDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.media)[':media_name']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media)[':media_name']['download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.media)[':media_name']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaMediaNameDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMediaMediaNameDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMediaMediaNameDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.media)[':media_name']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media)[':media_name']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.media)[':media_name']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaMediaNameDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMediaMediaNameDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessageDetailRecordsQueryKey(
  args: InferRequestType<typeof client.message_detail_records.$get>,
) {
  return ['message_detail_records', '/message_detail_records', args] as const
}

export function getMessageDetailRecordsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_detail_records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.message_detail_records.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.message_detail_records.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessageDetailRecordsQueryKey>
  >({
    queryKey: getMessageDetailRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.message_detail_records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessageDetailRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_detail_records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.message_detail_records.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.message_detail_records.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessageDetailRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMessageDetailRecordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMessageDetailRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_detail_records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.message_detail_records.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.message_detail_records.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessageDetailRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMessageDetailRecordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMessageDetailRecordsIdMessageBodyQueryKey(
  args: InferRequestType<(typeof client.message_detail_records)[':id']['message_body']['$get']>,
) {
  return ['message_detail_records', '/message_detail_records/:id/message_body', args] as const
}

export function getMessageDetailRecordsIdMessageBodyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.message_detail_records)[':id']['message_body']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.message_detail_records)[':id']['message_body']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.message_detail_records)[':id']['message_body']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessageDetailRecordsIdMessageBodyQueryKey>
  >({
    queryKey: getMessageDetailRecordsIdMessageBodyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.message_detail_records[':id'].message_body.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessageDetailRecordsIdMessageBody<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.message_detail_records)[':id']['message_body']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.message_detail_records)[':id']['message_body']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.message_detail_records)[':id']['message_body']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessageDetailRecordsIdMessageBodyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessageDetailRecordsIdMessageBodyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessageDetailRecordsIdMessageBody<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.message_detail_records)[':id']['message_body']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.message_detail_records)[':id']['message_body']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.message_detail_records)[':id']['message_body']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessageDetailRecordsIdMessageBodyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessageDetailRecordsIdMessageBodyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMessagesMutationKey() {
  return ['messages', '/messages', 'POST'] as const
}

export function getPostMessagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>>,
    TError,
    InferRequestType<typeof client.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.$post>) {
      return parseResponse(client.messages.$post(args, options))
    },
  })
}

export function usePostMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.messages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMessagesLongCodeMutationKey() {
  return ['messages', '/messages/long_code', 'POST'] as const
}

export function getPostMessagesLongCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.long_code.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.long_code.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesLongCodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.long_code.$post>) {
      return parseResponse(client.messages.long_code.$post(args, options))
    },
  })
}

export function usePostMessagesLongCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messages.long_code.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messages.long_code.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagesLongCodeMutationOptions<TError, TOnMutateResult>(
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

export function getPostMessagesNumberPoolMutationKey() {
  return ['messages', '/messages/number_pool', 'POST'] as const
}

export function getPostMessagesNumberPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messages.number_pool.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messages.number_pool.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesNumberPoolMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.number_pool.$post>) {
      return parseResponse(client.messages.number_pool.$post(args, options))
    },
  })
}

export function usePostMessagesNumberPool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messages.number_pool.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messages.number_pool.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagesNumberPoolMutationOptions<TError, TOnMutateResult>(
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

export function getPostMessagesShortCodeMutationKey() {
  return ['messages', '/messages/short_code', 'POST'] as const
}

export function getPostMessagesShortCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.short_code.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.short_code.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesShortCodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.short_code.$post>) {
      return parseResponse(client.messages.short_code.$post(args, options))
    },
  })
}

export function usePostMessagesShortCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messages.short_code.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messages.short_code.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagesShortCodeMutationOptions<TError, TOnMutateResult>(
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

export function getMessagesIdQueryKey(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
) {
  return ['messages', '/messages/:id', args] as const
}

export function getMessagesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.messages)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesIdQueryKey>
  >({
    queryKey: getMessagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMessagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMessagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMessagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMessagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMessagingHostedNumberOrdersQueryKey(
  args: InferRequestType<typeof client.messaging_hosted_number_orders.$get>,
) {
  return ['messaging_hosted_number_orders', '/messaging_hosted_number_orders', args] as const
}

export function getMessagingHostedNumberOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging_hosted_number_orders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingHostedNumberOrdersQueryKey>
  >({
    queryKey: getMessagingHostedNumberOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging_hosted_number_orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessagingHostedNumberOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging_hosted_number_orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingHostedNumberOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingHostedNumberOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingHostedNumberOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging_hosted_number_orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingHostedNumberOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingHostedNumberOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMessagingHostedNumberOrdersMutationKey() {
  return ['messaging_hosted_number_orders', '/messaging_hosted_number_orders', 'POST'] as const
}

export function getPostMessagingHostedNumberOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.messaging_hosted_number_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingHostedNumberOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging_hosted_number_orders.$post>) {
      return parseResponse(client.messaging_hosted_number_orders.$post(args, options))
    },
  })
}

export function usePostMessagingHostedNumberOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.messaging_hosted_number_orders.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.messaging_hosted_number_orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingHostedNumberOrdersMutationOptions<
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

export function getMessagingHostedNumberOrdersIdQueryKey(
  args: InferRequestType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>,
) {
  return ['messaging_hosted_number_orders', '/messaging_hosted_number_orders/:id', args] as const
}

export function getMessagingHostedNumberOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingHostedNumberOrdersIdQueryKey>
  >({
    queryKey: getMessagingHostedNumberOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging_hosted_number_orders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessagingHostedNumberOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingHostedNumberOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingHostedNumberOrdersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingHostedNumberOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingHostedNumberOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingHostedNumberOrdersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMessagingHostedNumberOrdersIdActionsFileUploadMutationKey() {
  return [
    'messaging_hosted_number_orders',
    '/messaging_hosted_number_orders/:id/actions/file_upload',
    'POST',
  ] as const
}

export function getPostMessagingHostedNumberOrdersIdActionsFileUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.messaging_hosted_number_orders)[':id']['actions']['file_upload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingHostedNumberOrdersIdActionsFileUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.messaging_hosted_number_orders)[':id']['actions']['file_upload']['$post']
      >,
    ) {
      return parseResponse(
        client.messaging_hosted_number_orders[':id'].actions.file_upload.$post(args, options),
      )
    },
  })
}

export function usePostMessagingHostedNumberOrdersIdActionsFileUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.messaging_hosted_number_orders)[':id']['actions']['file_upload']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingHostedNumberOrdersIdActionsFileUploadMutationOptions<
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

export function getDeleteMessagingHostedNumbersIdMutationKey() {
  return ['messaging_hosted_numbers', '/messaging_hosted_numbers/:id', 'DELETE'] as const
}

export function getDeleteMessagingHostedNumbersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging_hosted_numbers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging_hosted_numbers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessagingHostedNumbersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging_hosted_numbers)[':id']['$delete']>,
    ) {
      return parseResponse(client.messaging_hosted_numbers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMessagingHostedNumbersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messaging_hosted_numbers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.messaging_hosted_numbers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMessagingHostedNumbersIdMutationOptions<
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

export function getMessagingProfileMetricsQueryKey(
  args: InferRequestType<typeof client.messaging_profile_metrics.$get>,
) {
  return ['messaging_profile_metrics', '/messaging_profile_metrics', args] as const
}

export function getMessagingProfileMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profile_metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging_profile_metrics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profile_metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingProfileMetricsQueryKey>
  >({
    queryKey: getMessagingProfileMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging_profile_metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessagingProfileMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profile_metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging_profile_metrics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profile_metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfileMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingProfileMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingProfileMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profile_metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging_profile_metrics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profile_metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfileMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingProfileMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessagingProfilesQueryKey(
  args: InferRequestType<typeof client.messaging_profiles.$get>,
) {
  return ['messaging_profiles', '/messaging_profiles', args] as const
}

export function getMessagingProfilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.messaging_profiles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingProfilesQueryKey>
  >({
    queryKey: getMessagingProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging_profiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMessagingProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging_profiles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMessagingProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMessagingProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging_profiles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMessagingProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMessagingProfilesMutationKey() {
  return ['messaging_profiles', '/messaging_profiles', 'POST'] as const
}

export function getPostMessagingProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messaging_profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging_profiles.$post>) {
      return parseResponse(client.messaging_profiles.$post(args, options))
    },
  })
}

export function usePostMessagingProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging_profiles.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messaging_profiles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getMessagingProfilesIdQueryKey(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$get']>,
) {
  return ['messaging_profiles', '/messaging_profiles/:id', args] as const
}

export function getMessagingProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingProfilesIdQueryKey>
  >({
    queryKey: getMessagingProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging_profiles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessagingProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMessagingProfilesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMessagingProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMessagingProfilesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteMessagingProfilesIdMutationKey() {
  return ['messaging_profiles', '/messaging_profiles/:id', 'DELETE'] as const
}

export function getDeleteMessagingProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging_profiles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessagingProfilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messaging_profiles)[':id']['$delete']>) {
      return parseResponse(client.messaging_profiles[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMessagingProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.messaging_profiles)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMessagingProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingProfilesIdMutationKey() {
  return ['messaging_profiles', '/messaging_profiles/:id', 'PATCH'] as const
}

export function getPatchMessagingProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging_profiles)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingProfilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messaging_profiles)[':id']['$patch']>) {
      return parseResponse(client.messaging_profiles[':id'].$patch(args, options))
    },
  })
}

export function usePatchMessagingProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.messaging_profiles)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getMessagingProfilesIdMetricsQueryKey(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>,
) {
  return ['messaging_profiles', '/messaging_profiles/:id/metrics', args] as const
}

export function getMessagingProfilesIdMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingProfilesIdMetricsQueryKey>
  >({
    queryKey: getMessagingProfilesIdMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging_profiles[':id'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessagingProfilesIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfilesIdMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingProfilesIdMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingProfilesIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfilesIdMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingProfilesIdMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessagingProfilesIdPhoneNumbersQueryKey(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>,
) {
  return ['messaging_profiles', '/messaging_profiles/:id/phone_numbers', args] as const
}

export function getMessagingProfilesIdPhoneNumbersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingProfilesIdPhoneNumbersQueryKey>
  >({
    queryKey: getMessagingProfilesIdPhoneNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging_profiles[':id'].phone_numbers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessagingProfilesIdPhoneNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfilesIdPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingProfilesIdPhoneNumbersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingProfilesIdPhoneNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfilesIdPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingProfilesIdPhoneNumbersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessagingProfilesIdShortCodesQueryKey(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>,
) {
  return ['messaging_profiles', '/messaging_profiles/:id/short_codes', args] as const
}

export function getMessagingProfilesIdShortCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingProfilesIdShortCodesQueryKey>
  >({
    queryKey: getMessagingProfilesIdShortCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging_profiles[':id'].short_codes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessagingProfilesIdShortCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfilesIdShortCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingProfilesIdShortCodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingProfilesIdShortCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProfilesIdShortCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingProfilesIdShortCodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessagingUrlDomainsQueryKey(
  args: InferRequestType<typeof client.messaging_url_domains.$get>,
) {
  return ['messaging_url_domains', '/messaging_url_domains', args] as const
}

export function getMessagingUrlDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_url_domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging_url_domains.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging_url_domains.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingUrlDomainsQueryKey>
  >({
    queryKey: getMessagingUrlDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging_url_domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMessagingUrlDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_url_domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging_url_domains.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging_url_domains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingUrlDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMessagingUrlDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMessagingUrlDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging_url_domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging_url_domains.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging_url_domains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingUrlDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMessagingUrlDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMobileOperatorNetworksQueryKey(
  args: InferRequestType<typeof client.mobile_operator_networks.$get>,
) {
  return ['mobile_operator_networks', '/mobile_operator_networks', args] as const
}

export function getMobileOperatorNetworksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mobile_operator_networks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mobile_operator_networks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mobile_operator_networks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMobileOperatorNetworksQueryKey>
  >({
    queryKey: getMobileOperatorNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mobile_operator_networks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMobileOperatorNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mobile_operator_networks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mobile_operator_networks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mobile_operator_networks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMobileOperatorNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMobileOperatorNetworksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMobileOperatorNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mobile_operator_networks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mobile_operator_networks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mobile_operator_networks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMobileOperatorNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMobileOperatorNetworksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNotificationChannelsQueryKey(
  args: InferRequestType<typeof client.notification_channels.$get>,
) {
  return ['notification_channels', '/notification_channels', args] as const
}

export function getNotificationChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_channels.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationChannelsQueryKey>
  >({
    queryKey: getNotificationChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notification_channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNotificationChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_channels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_channels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNotificationChannelsMutationKey() {
  return ['notification_channels', '/notification_channels', 'POST'] as const
}

export function getPostNotificationChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notification_channels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notification_channels.$post>) {
      return parseResponse(client.notification_channels.$post(args, options))
    },
  })
}

export function usePostNotificationChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notification_channels.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notification_channels.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationChannelsMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationChannelsIdQueryKey(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$get']>,
) {
  return ['notification_channels', '/notification_channels/:id', args] as const
}

export function getNotificationChannelsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_channels)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_channels)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationChannelsIdQueryKey>
  >({
    queryKey: getNotificationChannelsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notification_channels[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationChannelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_channels)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_channels)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationChannelsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNotificationChannelsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationChannelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_channels)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_channels)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationChannelsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNotificationChannelsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteNotificationChannelsIdMutationKey() {
  return ['notification_channels', '/notification_channels/:id', 'DELETE'] as const
}

export function getDeleteNotificationChannelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_channels)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notification_channels)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationChannelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notification_channels)[':id']['$delete']>,
    ) {
      return parseResponse(client.notification_channels[':id'].$delete(args, options))
    },
  })
}

export function useDeleteNotificationChannelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_channels)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notification_channels)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotificationChannelsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchNotificationChannelsIdMutationKey() {
  return ['notification_channels', '/notification_channels/:id', 'PATCH'] as const
}

export function getPatchNotificationChannelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_channels)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notification_channels)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNotificationChannelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notification_channels)[':id']['$patch']>,
    ) {
      return parseResponse(client.notification_channels[':id'].$patch(args, options))
    },
  })
}

export function usePatchNotificationChannelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_channels)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notification_channels)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNotificationChannelsIdMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationEventConditionsQueryKey(
  args: InferRequestType<typeof client.notification_event_conditions.$get>,
) {
  return ['notification_event_conditions', '/notification_event_conditions', args] as const
}

export function getNotificationEventConditionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notification_event_conditions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_event_conditions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_event_conditions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationEventConditionsQueryKey>
  >({
    queryKey: getNotificationEventConditionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notification_event_conditions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationEventConditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notification_event_conditions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_event_conditions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.notification_event_conditions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationEventConditionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNotificationEventConditionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationEventConditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notification_event_conditions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_event_conditions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.notification_event_conditions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationEventConditionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNotificationEventConditionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNotificationEventsQueryKey(
  args: InferRequestType<typeof client.notification_events.$get>,
) {
  return ['notification_events', '/notification_events', args] as const
}

export function getNotificationEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.notification_events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationEventsQueryKey>
  >({
    queryKey: getNotificationEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notification_events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNotificationEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notification_events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notification_events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNotificationProfilesQueryKey(
  args: InferRequestType<typeof client.notification_profiles.$get>,
) {
  return ['notification_profiles', '/notification_profiles', args] as const
}

export function getNotificationProfilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationProfilesQueryKey>
  >({
    queryKey: getNotificationProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notification_profiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNotificationProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_profiles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_profiles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNotificationProfilesMutationKey() {
  return ['notification_profiles', '/notification_profiles', 'POST'] as const
}

export function getPostNotificationProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notification_profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notification_profiles.$post>) {
      return parseResponse(client.notification_profiles.$post(args, options))
    },
  })
}

export function usePostNotificationProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notification_profiles.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notification_profiles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationProfilesIdQueryKey(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$get']>,
) {
  return ['notification_profiles', '/notification_profiles/:id', args] as const
}

export function getNotificationProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationProfilesIdQueryKey>
  >({
    queryKey: getNotificationProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notification_profiles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationProfilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNotificationProfilesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationProfilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNotificationProfilesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteNotificationProfilesIdMutationKey() {
  return ['notification_profiles', '/notification_profiles/:id', 'DELETE'] as const
}

export function getDeleteNotificationProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notification_profiles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notification_profiles)[':id']['$delete']>,
    ) {
      return parseResponse(client.notification_profiles[':id'].$delete(args, options))
    },
  })
}

export function useDeleteNotificationProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notification_profiles)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotificationProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchNotificationProfilesIdMutationKey() {
  return ['notification_profiles', '/notification_profiles/:id', 'PATCH'] as const
}

export function getPatchNotificationProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notification_profiles)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNotificationProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notification_profiles)[':id']['$patch']>,
    ) {
      return parseResponse(client.notification_profiles[':id'].$patch(args, options))
    },
  })
}

export function usePatchNotificationProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_profiles)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notification_profiles)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNotificationProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationSettingsQueryKey(
  args: InferRequestType<typeof client.notification_settings.$get>,
) {
  return ['notification_settings', '/notification_settings', args] as const
}

export function getNotificationSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_settings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsQueryKey>
  >({
    queryKey: getNotificationSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notification_settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNotificationSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_settings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_settings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNotificationSettingsMutationKey() {
  return ['notification_settings', '/notification_settings', 'POST'] as const
}

export function getPostNotificationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notification_settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notification_settings.$post>) {
      return parseResponse(client.notification_settings.$post(args, options))
    },
  })
}

export function usePostNotificationSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notification_settings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notification_settings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationSettingsIdQueryKey(
  args: InferRequestType<(typeof client.notification_settings)[':id']['$get']>,
) {
  return ['notification_settings', '/notification_settings/:id', args] as const
}

export function getNotificationSettingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_settings)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_settings)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsIdQueryKey>
  >({
    queryKey: getNotificationSettingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notification_settings[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_settings)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_settings)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_settings)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationSettingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNotificationSettingsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_settings)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_settings)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_settings)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationSettingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNotificationSettingsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteNotificationSettingsIdMutationKey() {
  return ['notification_settings', '/notification_settings/:id', 'DELETE'] as const
}

export function getDeleteNotificationSettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_settings)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notification_settings)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationSettingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notification_settings)[':id']['$delete']>,
    ) {
      return parseResponse(client.notification_settings[':id'].$delete(args, options))
    },
  })
}

export function useDeleteNotificationSettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_settings)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notification_settings)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotificationSettingsIdMutationOptions<TError, TOnMutateResult>(
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

export function getNumberBlockOrdersQueryKey(
  args: InferRequestType<typeof client.number_block_orders.$get>,
) {
  return ['number_block_orders', '/number_block_orders', args] as const
}

export function getNumberBlockOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.number_block_orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumberBlockOrdersQueryKey>
  >({
    queryKey: getNumberBlockOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.number_block_orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNumberBlockOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.number_block_orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberBlockOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNumberBlockOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNumberBlockOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.number_block_orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberBlockOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNumberBlockOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNumberBlockOrdersMutationKey() {
  return ['number_block_orders', '/number_block_orders', 'POST'] as const
}

export function getPostNumberBlockOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.number_block_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNumberBlockOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.number_block_orders.$post>) {
      return parseResponse(client.number_block_orders.$post(args, options))
    },
  })
}

export function usePostNumberBlockOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.number_block_orders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.number_block_orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNumberBlockOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getNumberBlockOrdersNumberBlockOrderIdQueryKey(
  args: InferRequestType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>,
) {
  return ['number_block_orders', '/number_block_orders/:number_block_order_id', args] as const
}

export function getNumberBlockOrdersNumberBlockOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumberBlockOrdersNumberBlockOrderIdQueryKey>
  >({
    queryKey: getNumberBlockOrdersNumberBlockOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.number_block_orders[':number_block_order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNumberBlockOrdersNumberBlockOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberBlockOrdersNumberBlockOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNumberBlockOrdersNumberBlockOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNumberBlockOrdersNumberBlockOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberBlockOrdersNumberBlockOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNumberBlockOrdersNumberBlockOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNumberLookupPhoneNumberQueryKey(
  args: InferRequestType<(typeof client.number_lookup)[':phone_number']['$get']>,
) {
  return ['number_lookup', '/number_lookup/:phone_number', args] as const
}

export function getNumberLookupPhoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_lookup)[':phone_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_lookup)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.number_lookup)[':phone_number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumberLookupPhoneNumberQueryKey>
  >({
    queryKey: getNumberLookupPhoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.number_lookup[':phone_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNumberLookupPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_lookup)[':phone_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_lookup)[':phone_number']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.number_lookup)[':phone_number']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberLookupPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNumberLookupPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNumberLookupPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_lookup)[':phone_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_lookup)[':phone_number']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.number_lookup)[':phone_number']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberLookupPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNumberLookupPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNumberOrderDocumentsQueryKey(
  args: InferRequestType<typeof client.number_order_documents.$get>,
) {
  return ['number_order_documents', '/number_order_documents', args] as const
}

export function getNumberOrderDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.number_order_documents.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumberOrderDocumentsQueryKey>
  >({
    queryKey: getNumberOrderDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.number_order_documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNumberOrderDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.number_order_documents.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberOrderDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNumberOrderDocumentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNumberOrderDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.number_order_documents.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberOrderDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNumberOrderDocumentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNumberOrderDocumentsMutationKey() {
  return ['number_order_documents', '/number_order_documents', 'POST'] as const
}

export function getPostNumberOrderDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.number_order_documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNumberOrderDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.number_order_documents.$post>) {
      return parseResponse(client.number_order_documents.$post(args, options))
    },
  })
}

export function usePostNumberOrderDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.number_order_documents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.number_order_documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNumberOrderDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getNumberOrderDocumentsNumberOrderDocumentIdQueryKey(
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

export function getNumberOrderDocumentsNumberOrderDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.number_order_documents)[':number_order_document_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.number_order_documents)[':number_order_document_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.number_order_documents)[':number_order_document_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumberOrderDocumentsNumberOrderDocumentIdQueryKey>
  >({
    queryKey: getNumberOrderDocumentsNumberOrderDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.number_order_documents[':number_order_document_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNumberOrderDocumentsNumberOrderDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.number_order_documents)[':number_order_document_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.number_order_documents)[':number_order_document_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getNumberOrderDocumentsNumberOrderDocumentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNumberOrderDocumentsNumberOrderDocumentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNumberOrderDocumentsNumberOrderDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.number_order_documents)[':number_order_document_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.number_order_documents)[':number_order_document_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getNumberOrderDocumentsNumberOrderDocumentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNumberOrderDocumentsNumberOrderDocumentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchNumberOrderDocumentsNumberOrderDocumentIdMutationKey() {
  return [
    'number_order_documents',
    '/number_order_documents/:number_order_document_id',
    'PATCH',
  ] as const
}

export function getPatchNumberOrderDocumentsNumberOrderDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.number_order_documents)[':number_order_document_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNumberOrderDocumentsNumberOrderDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.number_order_documents)[':number_order_document_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.number_order_documents[':number_order_document_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchNumberOrderDocumentsNumberOrderDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.number_order_documents)[':number_order_document_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNumberOrderDocumentsNumberOrderDocumentIdMutationOptions<
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

export function getNumberOrderPhoneNumbersQueryKey() {
  return ['number_order_phone_numbers', '/number_order_phone_numbers'] as const
}

export function getNumberOrderPhoneNumbersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.number_order_phone_numbers.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.number_order_phone_numbers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumberOrderPhoneNumbersQueryKey>
  >({
    queryKey: getNumberOrderPhoneNumbersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.number_order_phone_numbers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNumberOrderPhoneNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.number_order_phone_numbers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.number_order_phone_numbers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberOrderPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNumberOrderPhoneNumbersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNumberOrderPhoneNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.number_order_phone_numbers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.number_order_phone_numbers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberOrderPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNumberOrderPhoneNumbersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdQueryKey(
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

export function getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdQueryKey>
  >({
    queryKey: getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.number_order_phone_numbers[':number_order_phone_number_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNumberOrderPhoneNumbersNumberOrderPhoneNumberId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNumberOrderPhoneNumbersNumberOrderPhoneNumberId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdMutationKey() {
  return [
    'number_order_phone_numbers',
    '/number_order_phone_numbers/:number_order_phone_number_id',
    'PATCH',
  ] as const
}

export function getPatchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.number_order_phone_numbers[':number_order_phone_number_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchNumberOrderPhoneNumbersNumberOrderPhoneNumberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdMutationOptions<
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

export function getNumberOrdersQueryKey(args: InferRequestType<typeof client.number_orders.$get>) {
  return ['number_orders', '/number_orders', args] as const
}

export function getNumberOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.number_orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumberOrdersQueryKey>
  >({
    queryKey: getNumberOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.number_orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNumberOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.number_orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumberOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNumberOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNumberOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.number_orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumberOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNumberOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNumberOrdersMutationKey() {
  return ['number_orders', '/number_orders', 'POST'] as const
}

export function getPostNumberOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.number_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNumberOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.number_orders.$post>) {
      return parseResponse(client.number_orders.$post(args, options))
    },
  })
}

export function usePostNumberOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.number_orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNumberOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getNumberOrdersNumberOrderIdQueryKey(
  args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$get']>,
) {
  return ['number_orders', '/number_orders/:number_order_id', args] as const
}

export function getNumberOrdersNumberOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumberOrdersNumberOrderIdQueryKey>
  >({
    queryKey: getNumberOrdersNumberOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.number_orders[':number_order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNumberOrdersNumberOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberOrdersNumberOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNumberOrdersNumberOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNumberOrdersNumberOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberOrdersNumberOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNumberOrdersNumberOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchNumberOrdersNumberOrderIdMutationKey() {
  return ['number_orders', '/number_orders/:number_order_id', 'PATCH'] as const
}

export function getPatchNumberOrdersNumberOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.number_orders)[':number_order_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNumberOrdersNumberOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$patch']>,
    ) {
      return parseResponse(client.number_orders[':number_order_id'].$patch(args, options))
    },
  })
}

export function usePatchNumberOrdersNumberOrderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.number_orders)[':number_order_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.number_orders)[':number_order_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNumberOrdersNumberOrderIdMutationOptions<
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

export function getNumberReservationsQueryKey(
  args: InferRequestType<typeof client.number_reservations.$get>,
) {
  return ['number_reservations', '/number_reservations', args] as const
}

export function getNumberReservationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.number_reservations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumberReservationsQueryKey>
  >({
    queryKey: getNumberReservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.number_reservations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNumberReservations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.number_reservations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberReservationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNumberReservationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNumberReservations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.number_reservations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberReservationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNumberReservationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNumberReservationsMutationKey() {
  return ['number_reservations', '/number_reservations', 'POST'] as const
}

export function getPostNumberReservationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.number_reservations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNumberReservationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.number_reservations.$post>) {
      return parseResponse(client.number_reservations.$post(args, options))
    },
  })
}

export function usePostNumberReservations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.number_reservations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.number_reservations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNumberReservationsMutationOptions<TError, TOnMutateResult>(
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

export function getNumberReservationsNumberReservationIdQueryKey(
  args: InferRequestType<(typeof client.number_reservations)[':number_reservation_id']['$get']>,
) {
  return ['number_reservations', '/number_reservations/:number_reservation_id', args] as const
}

export function getNumberReservationsNumberReservationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_reservations)[':number_reservation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_reservations)[':number_reservation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.number_reservations)[':number_reservation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumberReservationsNumberReservationIdQueryKey>
  >({
    queryKey: getNumberReservationsNumberReservationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.number_reservations[':number_reservation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNumberReservationsNumberReservationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_reservations)[':number_reservation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_reservations)[':number_reservation_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.number_reservations)[':number_reservation_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberReservationsNumberReservationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNumberReservationsNumberReservationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNumberReservationsNumberReservationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.number_reservations)[':number_reservation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.number_reservations)[':number_reservation_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.number_reservations)[':number_reservation_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumberReservationsNumberReservationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNumberReservationsNumberReservationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostNumberReservationsNumberReservationIdActionsExtendMutationKey() {
  return [
    'number_reservations',
    '/number_reservations/:number_reservation_id/actions/extend',
    'POST',
  ] as const
}

export function getPostNumberReservationsNumberReservationIdActionsExtendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.number_reservations)[':number_reservation_id']['actions']['extend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNumberReservationsNumberReservationIdActionsExtendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.number_reservations)[':number_reservation_id']['actions']['extend']['$post']
      >,
    ) {
      return parseResponse(
        client.number_reservations[':number_reservation_id'].actions.extend.$post(args, options),
      )
    },
  })
}

export function usePostNumberReservationsNumberReservationIdActionsExtend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.number_reservations)[':number_reservation_id']['actions']['extend']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNumberReservationsNumberReservationIdActionsExtendMutationOptions<
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

export function getOtaUpdatesQueryKey(args: InferRequestType<typeof client.ota_updates.$get>) {
  return ['ota_updates', '/ota_updates', args] as const
}

export function getOtaUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ota_updates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ota_updates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ota_updates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOtaUpdatesQueryKey>
  >({
    queryKey: getOtaUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ota_updates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOtaUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ota_updates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ota_updates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ota_updates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOtaUpdatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOtaUpdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOtaUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ota_updates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ota_updates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ota_updates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOtaUpdatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOtaUpdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOtaUpdatesIdQueryKey(
  args: InferRequestType<(typeof client.ota_updates)[':id']['$get']>,
) {
  return ['ota_updates', '/ota_updates/:id', args] as const
}

export function getOtaUpdatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ota_updates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ota_updates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ota_updates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOtaUpdatesIdQueryKey>
  >({
    queryKey: getOtaUpdatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ota_updates[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOtaUpdatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ota_updates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ota_updates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ota_updates)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOtaUpdatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOtaUpdatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOtaUpdatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ota_updates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ota_updates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ota_updates)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOtaUpdatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOtaUpdatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOutboundVoiceProfilesQueryKey(
  args: InferRequestType<typeof client.outbound_voice_profiles.$get>,
) {
  return ['outbound_voice_profiles', '/outbound_voice_profiles', args] as const
}

export function getOutboundVoiceProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.outbound_voice_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOutboundVoiceProfilesQueryKey>
  >({
    queryKey: getOutboundVoiceProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.outbound_voice_profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOutboundVoiceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.outbound_voice_profiles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOutboundVoiceProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOutboundVoiceProfilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOutboundVoiceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.outbound_voice_profiles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOutboundVoiceProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOutboundVoiceProfilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOutboundVoiceProfilesMutationKey() {
  return ['outbound_voice_profiles', '/outbound_voice_profiles', 'POST'] as const
}

export function getPostOutboundVoiceProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.outbound_voice_profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOutboundVoiceProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.outbound_voice_profiles.$post>) {
      return parseResponse(client.outbound_voice_profiles.$post(args, options))
    },
  })
}

export function usePostOutboundVoiceProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.outbound_voice_profiles.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.outbound_voice_profiles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOutboundVoiceProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getOutboundVoiceProfilesIdQueryKey(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$get']>,
) {
  return ['outbound_voice_profiles', '/outbound_voice_profiles/:id', args] as const
}

export function getOutboundVoiceProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOutboundVoiceProfilesIdQueryKey>
  >({
    queryKey: getOutboundVoiceProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.outbound_voice_profiles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOutboundVoiceProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOutboundVoiceProfilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOutboundVoiceProfilesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOutboundVoiceProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOutboundVoiceProfilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOutboundVoiceProfilesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOutboundVoiceProfilesIdMutationKey() {
  return ['outbound_voice_profiles', '/outbound_voice_profiles/:id', 'DELETE'] as const
}

export function getDeleteOutboundVoiceProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOutboundVoiceProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$delete']>,
    ) {
      return parseResponse(client.outbound_voice_profiles[':id'].$delete(args, options))
    },
  })
}

export function useDeleteOutboundVoiceProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOutboundVoiceProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchOutboundVoiceProfilesIdMutationKey() {
  return ['outbound_voice_profiles', '/outbound_voice_profiles/:id', 'PATCH'] as const
}

export function getPatchOutboundVoiceProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOutboundVoiceProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$patch']>,
    ) {
      return parseResponse(client.outbound_voice_profiles[':id'].$patch(args, options))
    },
  })
}

export function usePatchOutboundVoiceProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outbound_voice_profiles)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOutboundVoiceProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPhoneNumberBlocksJobsQueryKey(
  args: InferRequestType<typeof client.phone_number_blocks.jobs.$get>,
) {
  return ['phone_number_blocks', '/phone_number_blocks/jobs', args] as const
}

export function getPhoneNumberBlocksJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_number_blocks.jobs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_number_blocks.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone_number_blocks.jobs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumberBlocksJobsQueryKey>
  >({
    queryKey: getPhoneNumberBlocksJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_number_blocks.jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumberBlocksJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_number_blocks.jobs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_number_blocks.jobs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.phone_number_blocks.jobs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumberBlocksJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPhoneNumberBlocksJobsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumberBlocksJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_number_blocks.jobs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_number_blocks.jobs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.phone_number_blocks.jobs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumberBlocksJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPhoneNumberBlocksJobsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPhoneNumberBlocksJobsDeletePhoneNumberBlockMutationKey() {
  return [
    'phone_number_blocks',
    '/phone_number_blocks/jobs/delete_phone_number_block',
    'POST',
  ] as const
}

export function getPostPhoneNumberBlocksJobsDeletePhoneNumberBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.phone_number_blocks.jobs.delete_phone_number_block.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumberBlocksJobsDeletePhoneNumberBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.phone_number_blocks.jobs.delete_phone_number_block.$post
      >,
    ) {
      return parseResponse(
        client.phone_number_blocks.jobs.delete_phone_number_block.$post(args, options),
      )
    },
  })
}

export function usePostPhoneNumberBlocksJobsDeletePhoneNumberBlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<typeof client.phone_number_blocks.jobs.delete_phone_number_block.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneNumberBlocksJobsDeletePhoneNumberBlockMutationOptions<
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

export function getPhoneNumberBlocksJobsIdQueryKey(
  args: InferRequestType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>,
) {
  return ['phone_number_blocks', '/phone_number_blocks/jobs/:id', args] as const
}

export function getPhoneNumberBlocksJobsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumberBlocksJobsIdQueryKey>
  >({
    queryKey: getPhoneNumberBlocksJobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_number_blocks.jobs[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumberBlocksJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumberBlocksJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPhoneNumberBlocksJobsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumberBlocksJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumberBlocksJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPhoneNumberBlocksJobsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPhoneNumbersQueryKey(args: InferRequestType<typeof client.phone_numbers.$get>) {
  return ['phone_numbers', '/phone_numbers', args] as const
}

export function getPhoneNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone_numbers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersQueryKey>
  >({
    queryKey: getPhoneNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePhoneNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPhoneNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePhoneNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPhoneNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPhoneNumbersCsvDownloadsQueryKey(
  args: InferRequestType<typeof client.phone_numbers.csv_downloads.$get>,
) {
  return ['phone_numbers', '/phone_numbers/csv_downloads', args] as const
}

export function getPhoneNumbersCsvDownloadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.csv_downloads.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersCsvDownloadsQueryKey>
  >({
    queryKey: getPhoneNumbersCsvDownloadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers.csv_downloads.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumbersCsvDownloads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.csv_downloads.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersCsvDownloadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPhoneNumbersCsvDownloadsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumbersCsvDownloads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.csv_downloads.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersCsvDownloadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPhoneNumbersCsvDownloadsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPhoneNumbersCsvDownloadsMutationKey() {
  return ['phone_numbers', '/phone_numbers/csv_downloads', 'POST'] as const
}

export function getPostPhoneNumbersCsvDownloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersCsvDownloadsMutationKey(),
    async mutationFn() {
      return parseResponse(client.phone_numbers.csv_downloads.$post(undefined, options))
    },
  })
}

export function usePostPhoneNumbersCsvDownloads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.phone_numbers.csv_downloads.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneNumbersCsvDownloadsMutationOptions<TError, TOnMutateResult>(
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

export function getPhoneNumbersCsvDownloadsIdQueryKey(
  args: InferRequestType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/csv_downloads/:id', args] as const
}

export function getPhoneNumbersCsvDownloadsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersCsvDownloadsIdQueryKey>
  >({
    queryKey: getPhoneNumbersCsvDownloadsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers.csv_downloads[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumbersCsvDownloadsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersCsvDownloadsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPhoneNumbersCsvDownloadsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumbersCsvDownloadsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersCsvDownloadsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPhoneNumbersCsvDownloadsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPhoneNumbersInboundChannelsQueryKey() {
  return ['phone_numbers', '/phone_numbers/inbound_channels'] as const
}

export function getPhoneNumbersInboundChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersInboundChannelsQueryKey>
  >({
    queryKey: getPhoneNumbersInboundChannelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers.inbound_channels.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumbersInboundChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersInboundChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPhoneNumbersInboundChannelsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumbersInboundChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersInboundChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPhoneNumbersInboundChannelsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchPhoneNumbersInboundChannelsMutationKey() {
  return ['phone_numbers', '/phone_numbers/inbound_channels', 'PATCH'] as const
}

export function getPatchPhoneNumbersInboundChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.phone_numbers.inbound_channels.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneNumbersInboundChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone_numbers.inbound_channels.$patch>) {
      return parseResponse(client.phone_numbers.inbound_channels.$patch(args, options))
    },
  })
}

export function usePatchPhoneNumbersInboundChannels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.phone_numbers.inbound_channels.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.phone_numbers.inbound_channels.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneNumbersInboundChannelsMutationOptions<
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

export function getPhoneNumbersJobsQueryKey(
  args: InferRequestType<typeof client.phone_numbers.jobs.$get>,
) {
  return ['phone_numbers', '/phone_numbers/jobs', args] as const
}

export function getPhoneNumbersJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone_numbers.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.jobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersJobsQueryKey>
  >({
    queryKey: getPhoneNumbersJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePhoneNumbersJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.jobs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.jobs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPhoneNumbersJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePhoneNumbersJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.jobs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.jobs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPhoneNumbersJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPhoneNumbersJobsDeletePhoneNumbersMutationKey() {
  return ['phone_numbers', '/phone_numbers/jobs/delete_phone_numbers', 'POST'] as const
}

export function getPostPhoneNumbersJobsDeletePhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.phone_numbers.jobs.delete_phone_numbers.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.phone_numbers.jobs.delete_phone_numbers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersJobsDeletePhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.phone_numbers.jobs.delete_phone_numbers.$post>,
    ) {
      return parseResponse(client.phone_numbers.jobs.delete_phone_numbers.$post(args, options))
    },
  })
}

export function usePostPhoneNumbersJobsDeletePhoneNumbers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.phone_numbers.jobs.delete_phone_numbers.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.phone_numbers.jobs.delete_phone_numbers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneNumbersJobsDeletePhoneNumbersMutationOptions<
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

export function getPostPhoneNumbersJobsUpdateEmergencySettingsMutationKey() {
  return ['phone_numbers', '/phone_numbers/jobs/update_emergency_settings', 'POST'] as const
}

export function getPostPhoneNumbersJobsUpdateEmergencySettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.phone_numbers.jobs.update_emergency_settings.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.phone_numbers.jobs.update_emergency_settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersJobsUpdateEmergencySettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.phone_numbers.jobs.update_emergency_settings.$post>,
    ) {
      return parseResponse(client.phone_numbers.jobs.update_emergency_settings.$post(args, options))
    },
  })
}

export function usePostPhoneNumbersJobsUpdateEmergencySettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.phone_numbers.jobs.update_emergency_settings.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.phone_numbers.jobs.update_emergency_settings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneNumbersJobsUpdateEmergencySettingsMutationOptions<
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

export function getPostPhoneNumbersJobsUpdatePhoneNumbersMutationKey() {
  return ['phone_numbers', '/phone_numbers/jobs/update_phone_numbers', 'POST'] as const
}

export function getPostPhoneNumbersJobsUpdatePhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.phone_numbers.jobs.update_phone_numbers.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.phone_numbers.jobs.update_phone_numbers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersJobsUpdatePhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.phone_numbers.jobs.update_phone_numbers.$post>,
    ) {
      return parseResponse(client.phone_numbers.jobs.update_phone_numbers.$post(args, options))
    },
  })
}

export function usePostPhoneNumbersJobsUpdatePhoneNumbers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.phone_numbers.jobs.update_phone_numbers.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.phone_numbers.jobs.update_phone_numbers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneNumbersJobsUpdatePhoneNumbersMutationOptions<
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

export function getPhoneNumbersJobsIdQueryKey(
  args: InferRequestType<(typeof client.phone_numbers.jobs)[':id']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/jobs/:id', args] as const
}

export function getPhoneNumbersJobsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers.jobs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers.jobs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersJobsIdQueryKey>
  >({
    queryKey: getPhoneNumbersJobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers.jobs[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumbersJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers.jobs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers.jobs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers.jobs)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPhoneNumbersJobsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePhoneNumbersJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers.jobs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers.jobs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers.jobs)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPhoneNumbersJobsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPhoneNumbersMessagingQueryKey(
  args: InferRequestType<typeof client.phone_numbers.messaging.$get>,
) {
  return ['phone_numbers', '/phone_numbers/messaging', args] as const
}

export function getPhoneNumbersMessagingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.messaging.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.messaging.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.messaging.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersMessagingQueryKey>
  >({
    queryKey: getPhoneNumbersMessagingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers.messaging.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumbersMessaging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.messaging.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.messaging.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.messaging.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersMessagingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPhoneNumbersMessagingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumbersMessaging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.messaging.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.messaging.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.messaging.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersMessagingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPhoneNumbersMessagingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPhoneNumbersVoiceQueryKey(
  args: InferRequestType<typeof client.phone_numbers.voice.$get>,
) {
  return ['phone_numbers', '/phone_numbers/voice', args] as const
}

export function getPhoneNumbersVoiceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.voice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone_numbers.voice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.voice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersVoiceQueryKey>
  >({
    queryKey: getPhoneNumbersVoiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers.voice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePhoneNumbersVoice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.voice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.voice.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.voice.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersVoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPhoneNumbersVoiceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePhoneNumbersVoice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.voice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone_numbers.voice.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.voice.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersVoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPhoneNumbersVoiceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPhoneNumbersIdQueryKey(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/:id', args] as const
}

export function getPhoneNumbersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersIdQueryKey>
  >({
    queryKey: getPhoneNumbersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePhoneNumbersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPhoneNumbersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePhoneNumbersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPhoneNumbersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeletePhoneNumbersIdMutationKey() {
  return ['phone_numbers', '/phone_numbers/:id', 'DELETE'] as const
}

export function getDeletePhoneNumbersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.phone_numbers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneNumbersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.phone_numbers)[':id']['$delete']>) {
      return parseResponse(client.phone_numbers[':id'].$delete(args, options))
    },
  })
}

export function useDeletePhoneNumbersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.phone_numbers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneNumbersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPhoneNumbersIdMutationKey() {
  return ['phone_numbers', '/phone_numbers/:id', 'PATCH'] as const
}

export function getPatchPhoneNumbersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.phone_numbers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneNumbersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.phone_numbers)[':id']['$patch']>) {
      return parseResponse(client.phone_numbers[':id'].$patch(args, options))
    },
  })
}

export function usePatchPhoneNumbersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.phone_numbers)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneNumbersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostPhoneNumbersIdActionsEnableEmergencyMutationKey() {
  return ['phone_numbers', '/phone_numbers/:id/actions/enable_emergency', 'POST'] as const
}

export function getPostPhoneNumbersIdActionsEnableEmergencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone_numbers)[':id']['actions']['enable_emergency']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersIdActionsEnableEmergencyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone_numbers)[':id']['actions']['enable_emergency']['$post']
      >,
    ) {
      return parseResponse(
        client.phone_numbers[':id'].actions.enable_emergency.$post(args, options),
      )
    },
  })
}

export function usePostPhoneNumbersIdActionsEnableEmergency<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.phone_numbers)[':id']['actions']['enable_emergency']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.phone_numbers)[':id']['actions']['enable_emergency']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneNumbersIdActionsEnableEmergencyMutationOptions<
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

export function getPhoneNumbersIdMessagingQueryKey(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/:id/messaging', args] as const
}

export function getPhoneNumbersIdMessagingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersIdMessagingQueryKey>
  >({
    queryKey: getPhoneNumbersIdMessagingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers[':id'].messaging.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumbersIdMessaging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersIdMessagingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPhoneNumbersIdMessagingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumbersIdMessaging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersIdMessagingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPhoneNumbersIdMessagingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchPhoneNumbersIdMessagingMutationKey() {
  return ['phone_numbers', '/phone_numbers/:id/messaging', 'PATCH'] as const
}

export function getPatchPhoneNumbersIdMessagingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneNumbersIdMessagingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$patch']>,
    ) {
      return parseResponse(client.phone_numbers[':id'].messaging.$patch(args, options))
    },
  })
}

export function usePatchPhoneNumbersIdMessaging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers)[':id']['messaging']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneNumbersIdMessagingMutationOptions<TError, TOnMutateResult>(
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

export function getPhoneNumbersIdVoiceQueryKey(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/:id/voice', args] as const
}

export function getPhoneNumbersIdVoiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersIdVoiceQueryKey>
  >({
    queryKey: getPhoneNumbersIdVoiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers[':id'].voice.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumbersIdVoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersIdVoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPhoneNumbersIdVoiceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePhoneNumbersIdVoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersIdVoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPhoneNumbersIdVoiceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchPhoneNumbersIdVoiceMutationKey() {
  return ['phone_numbers', '/phone_numbers/:id/voice', 'PATCH'] as const
}

export function getPatchPhoneNumbersIdVoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneNumbersIdVoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$patch']>,
    ) {
      return parseResponse(client.phone_numbers[':id'].voice.$patch(args, options))
    },
  })
}

export function usePatchPhoneNumbersIdVoice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.phone_numbers)[':id']['voice']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneNumbersIdVoiceMutationOptions<TError, TOnMutateResult>(
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

export function getPostPortabilityChecksMutationKey() {
  return ['portability_checks', '/portability_checks', 'POST'] as const
}

export function getPostPortabilityChecksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portability_checks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.portability_checks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortabilityChecksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portability_checks.$post>) {
      return parseResponse(client.portability_checks.$post(args, options))
    },
  })
}

export function usePostPortabilityChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.portability_checks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.portability_checks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortabilityChecksMutationOptions<TError, TOnMutateResult>(
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

export function getPortingOrdersQueryKey(
  args: InferRequestType<typeof client.porting_orders.$get>,
) {
  return ['porting_orders', '/porting_orders', args] as const
}

export function getPortingOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.porting_orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPortingOrdersQueryKey>
  >({
    queryKey: getPortingOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.porting_orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePortingOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.porting_orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPortingOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePortingOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.porting_orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPortingOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPortingOrdersMutationKey() {
  return ['porting_orders', '/porting_orders', 'POST'] as const
}

export function getPostPortingOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.porting_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortingOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.porting_orders.$post>) {
      return parseResponse(client.porting_orders.$post(args, options))
    },
  })
}

export function usePostPortingOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.porting_orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortingOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getPortingOrdersExceptionTypesQueryKey() {
  return ['porting_orders', '/porting_orders/exception_types'] as const
}

export function getPortingOrdersExceptionTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.exception_types.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.exception_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortingOrdersExceptionTypesQueryKey>
  >({
    queryKey: getPortingOrdersExceptionTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.porting_orders.exception_types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePortingOrdersExceptionTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.exception_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.porting_orders.exception_types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersExceptionTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPortingOrdersExceptionTypesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePortingOrdersExceptionTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.porting_orders.exception_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.porting_orders.exception_types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersExceptionTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPortingOrdersExceptionTypesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPortingOrdersIdQueryKey(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$get']>,
) {
  return ['porting_orders', '/porting_orders/:id', args] as const
}

export function getPortingOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortingOrdersIdQueryKey>
  >({
    queryKey: getPortingOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.porting_orders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePortingOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPortingOrdersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePortingOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPortingOrdersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeletePortingOrdersIdMutationKey() {
  return ['porting_orders', '/porting_orders/:id', 'DELETE'] as const
}

export function getDeletePortingOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.porting_orders)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePortingOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.porting_orders)[':id']['$delete']>) {
      return parseResponse(client.porting_orders[':id'].$delete(args, options))
    },
  })
}

export function useDeletePortingOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.porting_orders)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.porting_orders)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePortingOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPortingOrdersIdMutationKey() {
  return ['porting_orders', '/porting_orders/:id', 'PATCH'] as const
}

export function getPatchPortingOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.porting_orders)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.porting_orders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPortingOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.porting_orders)[':id']['$patch']>) {
      return parseResponse(client.porting_orders[':id'].$patch(args, options))
    },
  })
}

export function usePatchPortingOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.porting_orders)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.porting_orders)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPortingOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostPortingOrdersIdActionsActivateMutationKey() {
  return ['porting_orders', '/porting_orders/:id/actions/activate', 'POST'] as const
}

export function getPostPortingOrdersIdActionsActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.porting_orders)[':id']['actions']['activate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.porting_orders)[':id']['actions']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortingOrdersIdActionsActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.porting_orders)[':id']['actions']['activate']['$post']>,
    ) {
      return parseResponse(client.porting_orders[':id'].actions.activate.$post(args, options))
    },
  })
}

export function usePostPortingOrdersIdActionsActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.porting_orders)[':id']['actions']['activate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.porting_orders)[':id']['actions']['activate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortingOrdersIdActionsActivateMutationOptions<
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

export function getPostPortingOrdersIdActionsCancelMutationKey() {
  return ['porting_orders', '/porting_orders/:id/actions/cancel', 'POST'] as const
}

export function getPostPortingOrdersIdActionsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.porting_orders)[':id']['actions']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.porting_orders)[':id']['actions']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortingOrdersIdActionsCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.porting_orders)[':id']['actions']['cancel']['$post']>,
    ) {
      return parseResponse(client.porting_orders[':id'].actions.cancel.$post(args, options))
    },
  })
}

export function usePostPortingOrdersIdActionsCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.porting_orders)[':id']['actions']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.porting_orders)[':id']['actions']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortingOrdersIdActionsCancelMutationOptions<
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

export function getPostPortingOrdersIdActionsConfirmMutationKey() {
  return ['porting_orders', '/porting_orders/:id/actions/confirm', 'POST'] as const
}

export function getPostPortingOrdersIdActionsConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.porting_orders)[':id']['actions']['confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.porting_orders)[':id']['actions']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortingOrdersIdActionsConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.porting_orders)[':id']['actions']['confirm']['$post']>,
    ) {
      return parseResponse(client.porting_orders[':id'].actions.confirm.$post(args, options))
    },
  })
}

export function usePostPortingOrdersIdActionsConfirm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.porting_orders)[':id']['actions']['confirm']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.porting_orders)[':id']['actions']['confirm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortingOrdersIdActionsConfirmMutationOptions<
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

export function getPortingOrdersIdActivationJobsQueryKey(
  args: InferRequestType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>,
) {
  return ['porting_orders', '/porting_orders/:id/activation_jobs', args] as const
}

export function getPortingOrdersIdActivationJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortingOrdersIdActivationJobsQueryKey>
  >({
    queryKey: getPortingOrdersIdActivationJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.porting_orders[':id'].activation_jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePortingOrdersIdActivationJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersIdActivationJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPortingOrdersIdActivationJobsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePortingOrdersIdActivationJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersIdActivationJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPortingOrdersIdActivationJobsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPortingOrdersIdActivationJobsActivationJobIdQueryKey(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
  >,
) {
  return ['porting_orders', '/porting_orders/:id/activation_jobs/:activationJobId', args] as const
}

export function getPortingOrdersIdActivationJobsActivationJobIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPortingOrdersIdActivationJobsActivationJobIdQueryKey>
  >({
    queryKey: getPortingOrdersIdActivationJobsActivationJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.porting_orders[':id'].activation_jobs[':activationJobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePortingOrdersIdActivationJobsActivationJobId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPortingOrdersIdActivationJobsActivationJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPortingOrdersIdActivationJobsActivationJobIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePortingOrdersIdActivationJobsActivationJobId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPortingOrdersIdActivationJobsActivationJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPortingOrdersIdActivationJobsActivationJobIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPortingOrdersIdCommentsQueryKey(
  args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$get']>,
) {
  return ['porting_orders', '/porting_orders/:id/comments', args] as const
}

export function getPortingOrdersIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortingOrdersIdCommentsQueryKey>
  >({
    queryKey: getPortingOrdersIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.porting_orders[':id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePortingOrdersIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPortingOrdersIdCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePortingOrdersIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPortingOrdersIdCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPortingOrdersIdCommentsMutationKey() {
  return ['porting_orders', '/porting_orders/:id/comments', 'POST'] as const
}

export function getPostPortingOrdersIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.porting_orders)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortingOrdersIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$post']>,
    ) {
      return parseResponse(client.porting_orders[':id'].comments.$post(args, options))
    },
  })
}

export function usePostPortingOrdersIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.porting_orders)[':id']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.porting_orders)[':id']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortingOrdersIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPortingOrdersIdLoaTemplateQueryKey(
  args: InferRequestType<(typeof client.porting_orders)[':id']['loa_template']['$get']>,
) {
  return ['porting_orders', '/porting_orders/:id/loa_template', args] as const
}

export function getPortingOrdersIdLoaTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.porting_orders)[':id']['loa_template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['loa_template']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.porting_orders)[':id']['loa_template']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortingOrdersIdLoaTemplateQueryKey>
  >({
    queryKey: getPortingOrdersIdLoaTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.porting_orders[':id'].loa_template.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePortingOrdersIdLoaTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.porting_orders)[':id']['loa_template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['loa_template']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.porting_orders)[':id']['loa_template']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersIdLoaTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPortingOrdersIdLoaTemplateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePortingOrdersIdLoaTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.porting_orders)[':id']['loa_template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.porting_orders)[':id']['loa_template']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.porting_orders)[':id']['loa_template']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingOrdersIdLoaTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPortingOrdersIdLoaTemplateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPortingPhoneNumbersQueryKey(
  args: InferRequestType<typeof client.porting_phone_numbers.$get>,
) {
  return ['porting_phone_numbers', '/porting_phone_numbers', args] as const
}

export function getPortingPhoneNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_phone_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.porting_phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.porting_phone_numbers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortingPhoneNumbersQueryKey>
  >({
    queryKey: getPortingPhoneNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.porting_phone_numbers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePortingPhoneNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_phone_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.porting_phone_numbers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.porting_phone_numbers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPortingPhoneNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePortingPhoneNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting_phone_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.porting_phone_numbers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.porting_phone_numbers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortingPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPortingPhoneNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPortoutsQueryKey(args: InferRequestType<typeof client.portouts.$get>) {
  return ['portouts', '/portouts', args] as const
}

export function getPortoutsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portouts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.portouts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portouts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPortoutsQueryKey>
  >({
    queryKey: getPortoutsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.portouts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePortouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portouts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.portouts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portouts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPortoutsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPortoutsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePortouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portouts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.portouts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portouts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPortoutsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPortoutsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPortoutsIdQueryKey(
  args: InferRequestType<(typeof client.portouts)[':id']['$get']>,
) {
  return ['portouts', '/portouts/:id', args] as const
}

export function getPortoutsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.portouts)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPortoutsIdQueryKey>
  >({
    queryKey: getPortoutsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.portouts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePortoutsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.portouts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortoutsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPortoutsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePortoutsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.portouts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortoutsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPortoutsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPortoutsIdCommentsQueryKey(
  args: InferRequestType<(typeof client.portouts)[':id']['comments']['$get']>,
) {
  return ['portouts', '/portouts/:id/comments', args] as const
}

export function getPortoutsIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.portouts)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortoutsIdCommentsQueryKey>
  >({
    queryKey: getPortoutsIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.portouts[':id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePortoutsIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.portouts)[':id']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortoutsIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPortoutsIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePortoutsIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.portouts)[':id']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortoutsIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPortoutsIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPortoutsIdCommentsMutationKey() {
  return ['portouts', '/portouts/:id/comments', 'POST'] as const
}

export function getPostPortoutsIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portouts)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortoutsIdCommentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.portouts)[':id']['comments']['$post']>) {
      return parseResponse(client.portouts[':id'].comments.$post(args, options))
    },
  })
}

export function usePostPortoutsIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.portouts)[':id']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.portouts)[':id']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortoutsIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPortoutsIdStatusMutationKey() {
  return ['portouts', '/portouts/:id/:status', 'PATCH'] as const
}

export function getPatchPortoutsIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portouts)[':id'][':status']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portouts)[':id'][':status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPortoutsIdStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.portouts)[':id'][':status']['$patch']>) {
      return parseResponse(client.portouts[':id'][':status'].$patch(args, options))
    },
  })
}

export function usePatchPortoutsIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.portouts)[':id'][':status']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.portouts)[':id'][':status']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPortoutsIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPrivateWirelessGatewaysQueryKey(
  args: InferRequestType<typeof client.private_wireless_gateways.$get>,
) {
  return ['private_wireless_gateways', '/private_wireless_gateways', args] as const
}

export function getPrivateWirelessGatewaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.private_wireless_gateways.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrivateWirelessGatewaysQueryKey>
  >({
    queryKey: getPrivateWirelessGatewaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.private_wireless_gateways.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePrivateWirelessGateways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.private_wireless_gateways.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrivateWirelessGatewaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPrivateWirelessGatewaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePrivateWirelessGateways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.private_wireless_gateways.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrivateWirelessGatewaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPrivateWirelessGatewaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPrivateWirelessGatewaysMutationKey() {
  return ['private_wireless_gateways', '/private_wireless_gateways', 'POST'] as const
}

export function getPostPrivateWirelessGatewaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.private_wireless_gateways.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPrivateWirelessGatewaysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.private_wireless_gateways.$post>) {
      return parseResponse(client.private_wireless_gateways.$post(args, options))
    },
  })
}

export function usePostPrivateWirelessGateways<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.private_wireless_gateways.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.private_wireless_gateways.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPrivateWirelessGatewaysMutationOptions<TError, TOnMutateResult>(
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

export function getPrivateWirelessGatewaysIdQueryKey(
  args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$get']>,
) {
  return ['private_wireless_gateways', '/private_wireless_gateways/:id', args] as const
}

export function getPrivateWirelessGatewaysIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrivateWirelessGatewaysIdQueryKey>
  >({
    queryKey: getPrivateWirelessGatewaysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.private_wireless_gateways[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePrivateWirelessGatewaysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrivateWirelessGatewaysIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPrivateWirelessGatewaysIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePrivateWirelessGatewaysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrivateWirelessGatewaysIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPrivateWirelessGatewaysIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeletePrivateWirelessGatewaysIdMutationKey() {
  return ['private_wireless_gateways', '/private_wireless_gateways/:id', 'DELETE'] as const
}

export function getDeletePrivateWirelessGatewaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.private_wireless_gateways)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePrivateWirelessGatewaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$delete']>,
    ) {
      return parseResponse(client.private_wireless_gateways[':id'].$delete(args, options))
    },
  })
}

export function useDeletePrivateWirelessGatewaysId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.private_wireless_gateways)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.private_wireless_gateways)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePrivateWirelessGatewaysIdMutationOptions<
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

export function getQueuesQueueNameQueryKey(
  args: InferRequestType<(typeof client.queues)[':queue_name']['$get']>,
) {
  return ['queues', '/queues/:queue_name', args] as const
}

export function getQueuesQueueNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queue_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queue_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queue_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesQueueNameQueryKey>
  >({
    queryKey: getQueuesQueueNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queues[':queue_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQueuesQueueName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queue_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queue_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queue_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueuesQueueNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQueuesQueueName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queue_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queue_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queue_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueuesQueueNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQueuesQueueNameCallsQueryKey(
  args: InferRequestType<(typeof client.queues)[':queue_name']['calls']['$get']>,
) {
  return ['queues', '/queues/:queue_name/calls', args] as const
}

export function getQueuesQueueNameCallsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queue_name']['calls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queue_name']['calls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':queue_name']['calls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesQueueNameCallsQueryKey>
  >({
    queryKey: getQueuesQueueNameCallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queues[':queue_name'].calls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueuesQueueNameCalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queue_name']['calls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queue_name']['calls']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queue_name']['calls']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameCallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueuesQueueNameCallsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQueuesQueueNameCalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queue_name']['calls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queue_name']['calls']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queue_name']['calls']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameCallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueuesQueueNameCallsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQueuesQueueNameCallsCallControlIdQueryKey(
  args: InferRequestType<
    (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']
  >,
) {
  return ['queues', '/queues/:queue_name/calls/:call_control_id', args] as const
}

export function getQueuesQueueNameCallsCallControlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesQueueNameCallsCallControlIdQueryKey>
  >({
    queryKey: getQueuesQueueNameCallsCallControlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queues[':queue_name'].calls[':call_control_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueuesQueueNameCallsCallControlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameCallsCallControlIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getQueuesQueueNameCallsCallControlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQueuesQueueNameCallsCallControlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameCallsCallControlIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getQueuesQueueNameCallsCallControlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecordingsQueryKey(args: InferRequestType<typeof client.recordings.$get>) {
  return ['recordings', '/recordings', args] as const
}

export function getRecordingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recordings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRecordingsQueryKey>
  >({
    queryKey: getRecordingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recordings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecordings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recordings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecordingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecordingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecordings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recordings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecordingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecordingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecordingsIdQueryKey(
  args: InferRequestType<(typeof client.recordings)[':id']['$get']>,
) {
  return ['recordings', '/recordings/:id', args] as const
}

export function getRecordingsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recordings)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recordings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recordings)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordingsIdQueryKey>
  >({
    queryKey: getRecordingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recordings[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecordingsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recordings)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recordings)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.recordings)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecordingsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecordingsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recordings)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recordings)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.recordings)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecordingsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReportsBatchMdrReportsQueryKey(
  args: InferRequestType<typeof client.reports.batch_mdr_reports.$get>,
) {
  return ['reports', '/reports/batch_mdr_reports', args] as const
}

export function getReportsBatchMdrReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.batch_mdr_reports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsBatchMdrReportsQueryKey>
  >({
    queryKey: getReportsBatchMdrReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.batch_mdr_reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportsBatchMdrReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.batch_mdr_reports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsBatchMdrReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getReportsBatchMdrReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportsBatchMdrReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.batch_mdr_reports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsBatchMdrReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getReportsBatchMdrReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostReportsBatchMdrReportsMutationKey() {
  return ['reports', '/reports/batch_mdr_reports', 'POST'] as const
}

export function getPostReportsBatchMdrReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.reports.batch_mdr_reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsBatchMdrReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.batch_mdr_reports.$post>) {
      return parseResponse(client.reports.batch_mdr_reports.$post(args, options))
    },
  })
}

export function usePostReportsBatchMdrReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reports.batch_mdr_reports.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reports.batch_mdr_reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportsBatchMdrReportsMutationOptions<TError, TOnMutateResult>(
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

export function getReportsBatchMdrReportsIdQueryKey(
  args: InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>,
) {
  return ['reports', '/reports/batch_mdr_reports/:id', args] as const
}

export function getReportsBatchMdrReportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsBatchMdrReportsIdQueryKey>
  >({
    queryKey: getReportsBatchMdrReportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.batch_mdr_reports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportsBatchMdrReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsBatchMdrReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getReportsBatchMdrReportsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportsBatchMdrReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsBatchMdrReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getReportsBatchMdrReportsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteReportsBatchMdrReportsIdMutationKey() {
  return ['reports', '/reports/batch_mdr_reports/:id', 'DELETE'] as const
}

export function getDeleteReportsBatchMdrReportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportsBatchMdrReportsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$delete']>,
    ) {
      return parseResponse(client.reports.batch_mdr_reports[':id'].$delete(args, options))
    },
  })
}

export function useDeleteReportsBatchMdrReportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports.batch_mdr_reports)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteReportsBatchMdrReportsIdMutationOptions<
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

export function getReportsCdrUsageReportsSyncQueryKey(
  args: InferRequestType<typeof client.reports.cdr_usage_reports.sync.$get>,
) {
  return ['reports', '/reports/cdr_usage_reports/sync', args] as const
}

export function getReportsCdrUsageReportsSyncQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.cdr_usage_reports.sync.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.cdr_usage_reports.sync.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reports.cdr_usage_reports.sync.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsCdrUsageReportsSyncQueryKey>
  >({
    queryKey: getReportsCdrUsageReportsSyncQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.cdr_usage_reports.sync.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportsCdrUsageReportsSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.cdr_usage_reports.sync.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.cdr_usage_reports.sync.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.reports.cdr_usage_reports.sync.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsCdrUsageReportsSyncQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getReportsCdrUsageReportsSyncQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportsCdrUsageReportsSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.cdr_usage_reports.sync.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.cdr_usage_reports.sync.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.reports.cdr_usage_reports.sync.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsCdrUsageReportsSyncQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getReportsCdrUsageReportsSyncQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getReportsMdrUsageReportsQueryKey(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.$get>,
) {
  return ['reports', '/reports/mdr_usage_reports', args] as const
}

export function getReportsMdrUsageReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsMdrUsageReportsQueryKey>
  >({
    queryKey: getReportsMdrUsageReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.mdr_usage_reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportsMdrUsageReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsMdrUsageReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getReportsMdrUsageReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportsMdrUsageReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsMdrUsageReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getReportsMdrUsageReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostReportsMdrUsageReportsMutationKey() {
  return ['reports', '/reports/mdr_usage_reports', 'POST'] as const
}

export function getPostReportsMdrUsageReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.reports.mdr_usage_reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsMdrUsageReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.mdr_usage_reports.$post>) {
      return parseResponse(client.reports.mdr_usage_reports.$post(args, options))
    },
  })
}

export function usePostReportsMdrUsageReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reports.mdr_usage_reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportsMdrUsageReportsMutationOptions<TError, TOnMutateResult>(
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

export function getReportsMdrUsageReportsSyncQueryKey(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.sync.$get>,
) {
  return ['reports', '/reports/mdr_usage_reports/sync', args] as const
}

export function getReportsMdrUsageReportsSyncQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.sync.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.sync.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.sync.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsMdrUsageReportsSyncQueryKey>
  >({
    queryKey: getReportsMdrUsageReportsSyncQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.mdr_usage_reports.sync.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportsMdrUsageReportsSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.sync.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.sync.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.reports.mdr_usage_reports.sync.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsMdrUsageReportsSyncQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getReportsMdrUsageReportsSyncQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportsMdrUsageReportsSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdr_usage_reports.sync.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.sync.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.reports.mdr_usage_reports.sync.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsMdrUsageReportsSyncQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getReportsMdrUsageReportsSyncQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getReportsMdrUsageReportsIdQueryKey(
  args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>,
) {
  return ['reports', '/reports/mdr_usage_reports/:id', args] as const
}

export function getReportsMdrUsageReportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsMdrUsageReportsIdQueryKey>
  >({
    queryKey: getReportsMdrUsageReportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.mdr_usage_reports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportsMdrUsageReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsMdrUsageReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getReportsMdrUsageReportsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportsMdrUsageReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsMdrUsageReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getReportsMdrUsageReportsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteReportsMdrUsageReportsIdMutationKey() {
  return ['reports', '/reports/mdr_usage_reports/:id', 'DELETE'] as const
}

export function getDeleteReportsMdrUsageReportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportsMdrUsageReportsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$delete']>,
    ) {
      return parseResponse(client.reports.mdr_usage_reports[':id'].$delete(args, options))
    },
  })
}

export function useDeleteReportsMdrUsageReportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports.mdr_usage_reports)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteReportsMdrUsageReportsIdMutationOptions<
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

export function getReportsMdrsQueryKey(args: InferRequestType<typeof client.reports.mdrs.$get>) {
  return ['reports', '/reports/mdrs', args] as const
}

export function getReportsMdrsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdrs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reports.mdrs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdrs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsMdrsQueryKey>
  >({
    queryKey: getReportsMdrsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.mdrs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReportsMdrs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdrs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.mdrs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdrs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportsMdrsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportsMdrsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportsMdrs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdrs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.mdrs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.mdrs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportsMdrsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportsMdrsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReportsWdrsQueryKey(args: InferRequestType<typeof client.reports.wdrs.$get>) {
  return ['reports', '/reports/wdrs', args] as const
}

export function getReportsWdrsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.wdrs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reports.wdrs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.wdrs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsWdrsQueryKey>
  >({
    queryKey: getReportsWdrsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.wdrs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReportsWdrs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.wdrs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.wdrs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.wdrs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportsWdrsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportsWdrsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportsWdrs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.wdrs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.wdrs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.wdrs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportsWdrsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportsWdrsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRequirementTypesQueryKey(
  args: InferRequestType<typeof client.requirement_types.$get>,
) {
  return ['requirement_types', '/requirement_types', args] as const
}

export function getRequirementTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirement_types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.requirement_types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirement_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRequirementTypesQueryKey>
  >({
    queryKey: getRequirementTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.requirement_types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRequirementTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirement_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.requirement_types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.requirement_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequirementTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRequirementTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRequirementTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirement_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.requirement_types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.requirement_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequirementTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRequirementTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRequirementTypesIdQueryKey(
  args: InferRequestType<(typeof client.requirement_types)[':id']['$get']>,
) {
  return ['requirement_types', '/requirement_types/:id', args] as const
}

export function getRequirementTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.requirement_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.requirement_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.requirement_types)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequirementTypesIdQueryKey>
  >({
    queryKey: getRequirementTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.requirement_types[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRequirementTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.requirement_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.requirement_types)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.requirement_types)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequirementTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRequirementTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRequirementTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.requirement_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.requirement_types)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.requirement_types)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequirementTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRequirementTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRequirementsQueryKey(args: InferRequestType<typeof client.requirements.$get>) {
  return ['requirements', '/requirements', args] as const
}

export function getRequirementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.requirements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirements.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRequirementsQueryKey>
  >({
    queryKey: getRequirementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.requirements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRequirements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.requirements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRequirementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRequirementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRequirements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.requirements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requirements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRequirementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRequirementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRequirementsIdQueryKey(
  args: InferRequestType<(typeof client.requirements)[':id']['$get']>,
) {
  return ['requirements', '/requirements/:id', args] as const
}

export function getRequirementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.requirements)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.requirements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.requirements)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequirementsIdQueryKey>
  >({
    queryKey: getRequirementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.requirements[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRequirementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.requirements)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.requirements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.requirements)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequirementsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRequirementsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRequirementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.requirements)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.requirements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.requirements)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequirementsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRequirementsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRoomParticipantsQueryKey(
  args: InferRequestType<typeof client.room_participants.$get>,
) {
  return ['room_participants', '/room_participants', args] as const
}

export function getRoomParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_participants.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.room_participants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_participants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoomParticipantsQueryKey>
  >({
    queryKey: getRoomParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.room_participants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRoomParticipants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_participants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.room_participants.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.room_participants.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomParticipantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRoomParticipantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRoomParticipants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_participants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.room_participants.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.room_participants.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomParticipantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRoomParticipantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRoomParticipantsRoomParticipantIdQueryKey(
  args: InferRequestType<(typeof client.room_participants)[':room_participant_id']['$get']>,
) {
  return ['room_participants', '/room_participants/:room_participant_id', args] as const
}

export function getRoomParticipantsRoomParticipantIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.room_participants)[':room_participant_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.room_participants)[':room_participant_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.room_participants)[':room_participant_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomParticipantsRoomParticipantIdQueryKey>
  >({
    queryKey: getRoomParticipantsRoomParticipantIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.room_participants[':room_participant_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRoomParticipantsRoomParticipantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.room_participants)[':room_participant_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.room_participants)[':room_participant_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.room_participants)[':room_participant_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomParticipantsRoomParticipantIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRoomParticipantsRoomParticipantIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRoomParticipantsRoomParticipantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.room_participants)[':room_participant_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.room_participants)[':room_participant_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.room_participants)[':room_participant_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomParticipantsRoomParticipantIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRoomParticipantsRoomParticipantIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRoomSessionsQueryKey(args: InferRequestType<typeof client.room_sessions.$get>) {
  return ['room_sessions', '/room_sessions', args] as const
}

export function getRoomSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_sessions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.room_sessions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoomSessionsQueryKey>
  >({
    queryKey: getRoomSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.room_sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRoomSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.room_sessions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRoomSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRoomSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRoomSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.room_sessions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.room_sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRoomSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRoomSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRoomSessionsRoomSessionIdQueryKey(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['$get']>,
) {
  return ['room_sessions', '/room_sessions/:room_session_id', args] as const
}

export function getRoomSessionsRoomSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.room_sessions)[':room_session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.room_sessions)[':room_session_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomSessionsRoomSessionIdQueryKey>
  >({
    queryKey: getRoomSessionsRoomSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.room_sessions[':room_session_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRoomSessionsRoomSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.room_sessions)[':room_session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.room_sessions)[':room_session_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomSessionsRoomSessionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRoomSessionsRoomSessionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRoomSessionsRoomSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.room_sessions)[':room_session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.room_sessions)[':room_session_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomSessionsRoomSessionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRoomSessionsRoomSessionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRoomSessionsRoomSessionIdParticipantsQueryKey(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>,
) {
  return ['room_sessions', '/room_sessions/:room_session_id/participants', args] as const
}

export function getRoomSessionsRoomSessionIdParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomSessionsRoomSessionIdParticipantsQueryKey>
  >({
    queryKey: getRoomSessionsRoomSessionIdParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.room_sessions[':room_session_id'].participants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRoomSessionsRoomSessionIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.room_sessions)[':room_session_id']['participants']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomSessionsRoomSessionIdParticipantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRoomSessionsRoomSessionIdParticipantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRoomSessionsRoomSessionIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.room_sessions)[':room_session_id']['participants']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomSessionsRoomSessionIdParticipantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRoomSessionsRoomSessionIdParticipantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRoomsQueryKey(args: InferRequestType<typeof client.rooms.$get>) {
  return ['rooms', '/rooms', args] as const
}

export function getRoomsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rooms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoomsQueryKey>
  >({
    queryKey: getRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRooms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rooms.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRoomsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRoomsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRooms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rooms.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRoomsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRoomsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRoomsMutationKey() {
  return ['rooms', '/rooms', 'POST'] as const
}

export function getPostRoomsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$post>>>>>,
    TError,
    InferRequestType<typeof client.rooms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoomsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rooms.$post>) {
      return parseResponse(client.rooms.$post(args, options))
    },
  })
}

export function usePostRooms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$post>>>>>,
        TError,
        InferRequestType<typeof client.rooms.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRoomsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoomsRoomIdQueryKey(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$get']>,
) {
  return ['rooms', '/rooms/:room_id', args] as const
}

export function getRoomsRoomIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsRoomIdQueryKey>
  >({
    queryKey: getRoomsRoomIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms[':room_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRoomsRoomId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomsRoomIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRoomsRoomIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRoomsRoomId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomsRoomIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRoomsRoomIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteRoomsRoomIdMutationKey() {
  return ['rooms', '/rooms/:room_id', 'DELETE'] as const
}

export function getDeleteRoomsRoomIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':room_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.rooms)[':room_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRoomsRoomIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rooms)[':room_id']['$delete']>) {
      return parseResponse(client.rooms[':room_id'].$delete(args, options))
    },
  })
}

export function useDeleteRoomsRoomId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rooms)[':room_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.rooms)[':room_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRoomsRoomIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostRoomsRoomIdActionsGenerateJoinClientTokenMutationKey() {
  return ['rooms', '/rooms/:room_id/actions/generate_join_client_token', 'POST'] as const
}

export function getPostRoomsRoomIdActionsGenerateJoinClientTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.rooms)[':room_id']['actions']['generate_join_client_token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRoomsRoomIdActionsGenerateJoinClientTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rooms)[':room_id']['actions']['generate_join_client_token']['$post']
      >,
    ) {
      return parseResponse(
        client.rooms[':room_id'].actions.generate_join_client_token.$post(args, options),
      )
    },
  })
}

export function usePostRoomsRoomIdActionsGenerateJoinClientToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.rooms)[':room_id']['actions']['generate_join_client_token']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRoomsRoomIdActionsGenerateJoinClientTokenMutationOptions<
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

export function getPostRoomsRoomIdActionsRefreshClientTokenMutationKey() {
  return ['rooms', '/rooms/:room_id/actions/refresh_client_token', 'POST'] as const
}

export function getPostRoomsRoomIdActionsRefreshClientTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.rooms)[':room_id']['actions']['refresh_client_token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoomsRoomIdActionsRefreshClientTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rooms)[':room_id']['actions']['refresh_client_token']['$post']
      >,
    ) {
      return parseResponse(
        client.rooms[':room_id'].actions.refresh_client_token.$post(args, options),
      )
    },
  })
}

export function usePostRoomsRoomIdActionsRefreshClientToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.rooms)[':room_id']['actions']['refresh_client_token']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRoomsRoomIdActionsRefreshClientTokenMutationOptions<
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

export function getRoomsRoomIdSessionsQueryKey(
  args: InferRequestType<(typeof client.rooms)[':room_id']['sessions']['$get']>,
) {
  return ['rooms', '/rooms/:room_id/sessions', args] as const
}

export function getRoomsRoomIdSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms)[':room_id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rooms)[':room_id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rooms)[':room_id']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsRoomIdSessionsQueryKey>
  >({
    queryKey: getRoomsRoomIdSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms[':room_id'].sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRoomsRoomIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms)[':room_id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rooms)[':room_id']['sessions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rooms)[':room_id']['sessions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomsRoomIdSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRoomsRoomIdSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRoomsRoomIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms)[':room_id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rooms)[':room_id']['sessions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rooms)[':room_id']['sessions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoomsRoomIdSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRoomsRoomIdSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShortCodesQueryKey(args: InferRequestType<typeof client.short_codes.$get>) {
  return ['short_codes', '/short_codes', args] as const
}

export function getShortCodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.short_codes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.short_codes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.short_codes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShortCodesQueryKey>
  >({
    queryKey: getShortCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.short_codes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShortCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.short_codes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.short_codes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.short_codes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShortCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShortCodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShortCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.short_codes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.short_codes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.short_codes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShortCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShortCodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShortCodesIdQueryKey(
  args: InferRequestType<(typeof client.short_codes)[':id']['$get']>,
) {
  return ['short_codes', '/short_codes/:id', args] as const
}

export function getShortCodesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.short_codes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShortCodesIdQueryKey>
  >({
    queryKey: getShortCodesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.short_codes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShortCodesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.short_codes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShortCodesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShortCodesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShortCodesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.short_codes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShortCodesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShortCodesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchShortCodesIdMutationKey() {
  return ['short_codes', '/short_codes/:id', 'PATCH'] as const
}

export function getPatchShortCodesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.short_codes)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchShortCodesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.short_codes)[':id']['$patch']>) {
      return parseResponse(client.short_codes[':id'].$patch(args, options))
    },
  })
}

export function usePatchShortCodesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.short_codes)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.short_codes)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchShortCodesIdMutationOptions<TError, TOnMutateResult>(
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

export function getSimCardGroupActionsQueryKey(
  args: InferRequestType<typeof client.sim_card_group_actions.$get>,
) {
  return ['sim_card_group_actions', '/sim_card_group_actions', args] as const
}

export function getSimCardGroupActionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_group_actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim_card_group_actions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_group_actions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimCardGroupActionsQueryKey>
  >({
    queryKey: getSimCardGroupActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim_card_group_actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimCardGroupActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_group_actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim_card_group_actions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_group_actions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardGroupActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimCardGroupActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimCardGroupActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_group_actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim_card_group_actions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_group_actions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardGroupActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimCardGroupActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSimCardGroupActionsIdQueryKey(
  args: InferRequestType<(typeof client.sim_card_group_actions)[':id']['$get']>,
) {
  return ['sim_card_group_actions', '/sim_card_group_actions/:id', args] as const
}

export function getSimCardGroupActionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sim_card_group_actions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_card_group_actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_card_group_actions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimCardGroupActionsIdQueryKey>
  >({
    queryKey: getSimCardGroupActionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim_card_group_actions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimCardGroupActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sim_card_group_actions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_card_group_actions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_card_group_actions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardGroupActionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSimCardGroupActionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSimCardGroupActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sim_card_group_actions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_card_group_actions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_card_group_actions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardGroupActionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSimCardGroupActionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSimCardGroupsQueryKey(
  args: InferRequestType<typeof client.sim_card_groups.$get>,
) {
  return ['sim_card_groups', '/sim_card_groups', args] as const
}

export function getSimCardGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sim_card_groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSimCardGroupsQueryKey>
  >({
    queryKey: getSimCardGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim_card_groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSimCardGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim_card_groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimCardGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimCardGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim_card_groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimCardGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSimCardGroupsMutationKey() {
  return ['sim_card_groups', '/sim_card_groups', 'POST'] as const
}

export function getPostSimCardGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sim_card_groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimCardGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sim_card_groups.$post>) {
      return parseResponse(client.sim_card_groups.$post(args, options))
    },
  })
}

export function usePostSimCardGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_groups.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sim_card_groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimCardGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getSimCardGroupsIdQueryKey(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$get']>,
) {
  return ['sim_card_groups', '/sim_card_groups/:id', args] as const
}

export function getSimCardGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimCardGroupsIdQueryKey>
  >({
    queryKey: getSimCardGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim_card_groups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimCardGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimCardGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimCardGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimCardGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSimCardGroupsIdMutationKey() {
  return ['sim_card_groups', '/sim_card_groups/:id', 'DELETE'] as const
}

export function getDeleteSimCardGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sim_card_groups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSimCardGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sim_card_groups)[':id']['$delete']>) {
      return parseResponse(client.sim_card_groups[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSimCardGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sim_card_groups)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSimCardGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSimCardGroupsIdMutationKey() {
  return ['sim_card_groups', '/sim_card_groups/:id', 'PATCH'] as const
}

export function getPatchSimCardGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sim_card_groups)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSimCardGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sim_card_groups)[':id']['$patch']>) {
      return parseResponse(client.sim_card_groups[':id'].$patch(args, options))
    },
  })
}

export function usePatchSimCardGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_card_groups)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sim_card_groups)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSimCardGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSimCardGroupsIdActionsRemovePrivateWirelessGatewayMutationKey() {
  return [
    'sim_card_groups',
    '/sim_card_groups/:id/actions/remove_private_wireless_gateway',
    'POST',
  ] as const
}

export function getPostSimCardGroupsIdActionsRemovePrivateWirelessGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sim_card_groups)[':id']['actions']['remove_private_wireless_gateway']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimCardGroupsIdActionsRemovePrivateWirelessGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sim_card_groups)[':id']['actions']['remove_private_wireless_gateway']['$post']
      >,
    ) {
      return parseResponse(
        client.sim_card_groups[':id'].actions.remove_private_wireless_gateway.$post(args, options),
      )
    },
  })
}

export function usePostSimCardGroupsIdActionsRemovePrivateWirelessGateway<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.sim_card_groups)[':id']['actions']['remove_private_wireless_gateway']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimCardGroupsIdActionsRemovePrivateWirelessGatewayMutationOptions<
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

export function getPostSimCardGroupsIdActionsSetPrivateWirelessGatewayMutationKey() {
  return [
    'sim_card_groups',
    '/sim_card_groups/:id/actions/set_private_wireless_gateway',
    'POST',
  ] as const
}

export function getPostSimCardGroupsIdActionsSetPrivateWirelessGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sim_card_groups)[':id']['actions']['set_private_wireless_gateway']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimCardGroupsIdActionsSetPrivateWirelessGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sim_card_groups)[':id']['actions']['set_private_wireless_gateway']['$post']
      >,
    ) {
      return parseResponse(
        client.sim_card_groups[':id'].actions.set_private_wireless_gateway.$post(args, options),
      )
    },
  })
}

export function usePostSimCardGroupsIdActionsSetPrivateWirelessGateway<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.sim_card_groups)[':id']['actions']['set_private_wireless_gateway']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimCardGroupsIdActionsSetPrivateWirelessGatewayMutationOptions<
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

export function getPostSimCardOrderPreviewMutationKey() {
  return ['sim_card_order_preview', '/sim_card_order_preview', 'POST'] as const
}

export function getPostSimCardOrderPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_order_preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sim_card_order_preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimCardOrderPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sim_card_order_preview.$post>) {
      return parseResponse(client.sim_card_order_preview.$post(args, options))
    },
  })
}

export function usePostSimCardOrderPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_order_preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sim_card_order_preview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimCardOrderPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getSimCardOrdersQueryKey(
  args: InferRequestType<typeof client.sim_card_orders.$get>,
) {
  return ['sim_card_orders', '/sim_card_orders', args] as const
}

export function getSimCardOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sim_card_orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSimCardOrdersQueryKey>
  >({
    queryKey: getSimCardOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim_card_orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSimCardOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim_card_orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimCardOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimCardOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim_card_orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimCardOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSimCardOrdersMutationKey() {
  return ['sim_card_orders', '/sim_card_orders', 'POST'] as const
}

export function getPostSimCardOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sim_card_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimCardOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sim_card_orders.$post>) {
      return parseResponse(client.sim_card_orders.$post(args, options))
    },
  })
}

export function usePostSimCardOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_card_orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sim_card_orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimCardOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getSimCardOrdersIdQueryKey(
  args: InferRequestType<(typeof client.sim_card_orders)[':id']['$get']>,
) {
  return ['sim_card_orders', '/sim_card_orders/:id', args] as const
}

export function getSimCardOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_card_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimCardOrdersIdQueryKey>
  >({
    queryKey: getSimCardOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim_card_orders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimCardOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_card_orders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_card_orders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimCardOrdersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimCardOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sim_card_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_card_orders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_card_orders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimCardOrdersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSimCardsQueryKey(args: InferRequestType<typeof client.sim_cards.$get>) {
  return ['sim_cards', '/sim_cards', args] as const
}

export function getSimCardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_cards.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sim_cards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimCardsQueryKey>
  >({
    queryKey: getSimCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim_cards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSimCards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_cards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim_cards.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_cards.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimCards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_cards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim_cards.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim_cards.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSimCardsActionsValidateRegistrationCodesMutationKey() {
  return ['sim_cards', '/sim_cards/actions/validate_registration_codes', 'POST'] as const
}

export function getPostSimCardsActionsValidateRegistrationCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sim_cards.actions.validate_registration_codes.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sim_cards.actions.validate_registration_codes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimCardsActionsValidateRegistrationCodesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sim_cards.actions.validate_registration_codes.$post>,
    ) {
      return parseResponse(
        client.sim_cards.actions.validate_registration_codes.$post(args, options),
      )
    },
  })
}

export function usePostSimCardsActionsValidateRegistrationCodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sim_cards.actions.validate_registration_codes.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sim_cards.actions.validate_registration_codes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimCardsActionsValidateRegistrationCodesMutationOptions<
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

export function getSimCardsIdQueryKey(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$get']>,
) {
  return ['sim_cards', '/sim_cards/:id', args] as const
}

export function getSimCardsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimCardsIdQueryKey>
  >({
    queryKey: getSimCardsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim_cards[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSimCardsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimCardsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimCardsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimCardsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSimCardsIdMutationKey() {
  return ['sim_cards', '/sim_cards/:id', 'DELETE'] as const
}

export function getDeleteSimCardsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sim_cards)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSimCardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sim_cards)[':id']['$delete']>) {
      return parseResponse(client.sim_cards[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSimCardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sim_cards)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSimCardsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSimCardsIdMutationKey() {
  return ['sim_cards', '/sim_cards/:id', 'PATCH'] as const
}

export function getPatchSimCardsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sim_cards)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSimCardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sim_cards)[':id']['$patch']>) {
      return parseResponse(client.sim_cards[':id'].$patch(args, options))
    },
  })
}

export function usePatchSimCardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sim_cards)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sim_cards)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSimCardsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSimCardsIdActionsDisableMutationKey() {
  return ['sim_cards', '/sim_cards/:id/actions/disable', 'POST'] as const
}

export function getPostSimCardsIdActionsDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_cards)[':id']['actions']['disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sim_cards)[':id']['actions']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSimCardsIdActionsDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['disable']['$post']>,
    ) {
      return parseResponse(client.sim_cards[':id'].actions.disable.$post(args, options))
    },
  })
}

export function usePostSimCardsIdActionsDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_cards)[':id']['actions']['disable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sim_cards)[':id']['actions']['disable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimCardsIdActionsDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPostSimCardsIdActionsEnableMutationKey() {
  return ['sim_cards', '/sim_cards/:id/actions/enable', 'POST'] as const
}

export function getPostSimCardsIdActionsEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_cards)[':id']['actions']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sim_cards)[':id']['actions']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSimCardsIdActionsEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['enable']['$post']>,
    ) {
      return parseResponse(client.sim_cards[':id'].actions.enable.$post(args, options))
    },
  })
}

export function usePostSimCardsIdActionsEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_cards)[':id']['actions']['enable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sim_cards)[':id']['actions']['enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimCardsIdActionsEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPostSimCardsIdActionsSetStandbyMutationKey() {
  return ['sim_cards', '/sim_cards/:id/actions/set_standby', 'POST'] as const
}

export function getPostSimCardsIdActionsSetStandbyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_cards)[':id']['actions']['set_standby']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sim_cards)[':id']['actions']['set_standby']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSimCardsIdActionsSetStandbyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['set_standby']['$post']>,
    ) {
      return parseResponse(client.sim_cards[':id'].actions.set_standby.$post(args, options))
    },
  })
}

export function usePostSimCardsIdActionsSetStandby<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sim_cards)[':id']['actions']['set_standby']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sim_cards)[':id']['actions']['set_standby']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimCardsIdActionsSetStandbyMutationOptions<
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

export function getSimCardsSimCardIdNetworkPreferencesQueryKey(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>,
) {
  return ['sim_cards', '/sim_cards/:sim_card_id/network_preferences', args] as const
}

export function getSimCardsSimCardIdNetworkPreferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimCardsSimCardIdNetworkPreferencesQueryKey>
  >({
    queryKey: getSimCardsSimCardIdNetworkPreferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim_cards[':sim_card_id'].network_preferences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimCardsSimCardIdNetworkPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardsSimCardIdNetworkPreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSimCardsSimCardIdNetworkPreferencesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSimCardsSimCardIdNetworkPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardsSimCardIdNetworkPreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSimCardsSimCardIdNetworkPreferencesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSimCardsSimCardIdNetworkPreferencesMutationKey() {
  return ['sim_cards', '/sim_cards/:sim_card_id/network_preferences', 'PUT'] as const
}

export function getPutSimCardsSimCardIdNetworkPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSimCardsSimCardIdNetworkPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sim_cards)[':sim_card_id']['network_preferences']['$put']
      >,
    ) {
      return parseResponse(client.sim_cards[':sim_card_id'].network_preferences.$put(args, options))
    },
  })
}

export function usePutSimCardsSimCardIdNetworkPreferences<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSimCardsSimCardIdNetworkPreferencesMutationOptions<
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

export function getDeleteSimCardsSimCardIdNetworkPreferencesMutationKey() {
  return ['sim_cards', '/sim_cards/:sim_card_id/network_preferences', 'DELETE'] as const
}

export function getDeleteSimCardsSimCardIdNetworkPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSimCardsSimCardIdNetworkPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sim_cards)[':sim_card_id']['network_preferences']['$delete']
      >,
    ) {
      return parseResponse(
        client.sim_cards[':sim_card_id'].network_preferences.$delete(args, options),
      )
    },
  })
}

export function useDeleteSimCardsSimCardIdNetworkPreferences<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sim_cards)[':sim_card_id']['network_preferences']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sim_cards)[':sim_card_id']['network_preferences']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSimCardsSimCardIdNetworkPreferencesMutationOptions<
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

export function getSimCardsSimCardIdPublicIpQueryKey(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>,
) {
  return ['sim_cards', '/sim_cards/:sim_card_id/public_ip', args] as const
}

export function getSimCardsSimCardIdPublicIpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimCardsSimCardIdPublicIpQueryKey>
  >({
    queryKey: getSimCardsSimCardIdPublicIpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim_cards[':sim_card_id'].public_ip.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimCardsSimCardIdPublicIp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardsSimCardIdPublicIpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSimCardsSimCardIdPublicIpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSimCardsSimCardIdPublicIp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimCardsSimCardIdPublicIpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSimCardsSimCardIdPublicIpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSimCardsSimCardIdPublicIpMutationKey() {
  return ['sim_cards', '/sim_cards/:sim_card_id/public_ip', 'POST'] as const
}

export function getPostSimCardsSimCardIdPublicIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSimCardsSimCardIdPublicIpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$post']>,
    ) {
      return parseResponse(client.sim_cards[':sim_card_id'].public_ip.$post(args, options))
    },
  })
}

export function usePostSimCardsSimCardIdPublicIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimCardsSimCardIdPublicIpMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSimCardsSimCardIdPublicIpMutationKey() {
  return ['sim_cards', '/sim_cards/:sim_card_id/public_ip', 'DELETE'] as const
}

export function getDeleteSimCardsSimCardIdPublicIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSimCardsSimCardIdPublicIpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$delete']>,
    ) {
      return parseResponse(client.sim_cards[':sim_card_id'].public_ip.$delete(args, options))
    },
  })
}

export function useDeleteSimCardsSimCardIdPublicIp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSimCardsSimCardIdPublicIpMutationOptions<
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

export function getSimCardsSimCardIdWirelessConnectivityLogsQueryKey(
  args: InferRequestType<
    (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
  >,
) {
  return ['sim_cards', '/sim_cards/:sim_card_id/wireless_connectivity_logs', args] as const
}

export function getSimCardsSimCardIdWirelessConnectivityLogsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSimCardsSimCardIdWirelessConnectivityLogsQueryKey>
  >({
    queryKey: getSimCardsSimCardIdWirelessConnectivityLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim_cards[':sim_card_id'].wireless_connectivity_logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimCardsSimCardIdWirelessConnectivityLogs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSimCardsSimCardIdWirelessConnectivityLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSimCardsSimCardIdWirelessConnectivityLogsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSimCardsSimCardIdWirelessConnectivityLogs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSimCardsSimCardIdWirelessConnectivityLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSimCardsSimCardIdWirelessConnectivityLogsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSubNumberOrdersQueryKey(
  args: InferRequestType<typeof client.sub_number_orders.$get>,
) {
  return ['sub_number_orders', '/sub_number_orders', args] as const
}

export function getSubNumberOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_number_orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sub_number_orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_number_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubNumberOrdersQueryKey>
  >({
    queryKey: getSubNumberOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sub_number_orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSubNumberOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_number_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sub_number_orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sub_number_orders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubNumberOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubNumberOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubNumberOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_number_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sub_number_orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sub_number_orders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubNumberOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubNumberOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSubNumberOrdersSubNumberOrderIdQueryKey(
  args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>,
) {
  return ['sub_number_orders', '/sub_number_orders/:sub_number_order_id', args] as const
}

export function getSubNumberOrdersSubNumberOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubNumberOrdersSubNumberOrderIdQueryKey>
  >({
    queryKey: getSubNumberOrdersSubNumberOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sub_number_orders[':sub_number_order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubNumberOrdersSubNumberOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubNumberOrdersSubNumberOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSubNumberOrdersSubNumberOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubNumberOrdersSubNumberOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubNumberOrdersSubNumberOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSubNumberOrdersSubNumberOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSubNumberOrdersSubNumberOrderIdMutationKey() {
  return ['sub_number_orders', '/sub_number_orders/:sub_number_order_id', 'PATCH'] as const
}

export function getPatchSubNumberOrdersSubNumberOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubNumberOrdersSubNumberOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$patch']>,
    ) {
      return parseResponse(client.sub_number_orders[':sub_number_order_id'].$patch(args, options))
    },
  })
}

export function usePatchSubNumberOrdersSubNumberOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sub_number_orders)[':sub_number_order_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSubNumberOrdersSubNumberOrderIdMutationOptions<
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

export function getTelephonyCredentialsQueryKey(
  args: InferRequestType<typeof client.telephony_credentials.$get>,
) {
  return ['telephony_credentials', '/telephony_credentials', args] as const
}

export function getTelephonyCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.telephony_credentials.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelephonyCredentialsQueryKey>
  >({
    queryKey: getTelephonyCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.telephony_credentials.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTelephonyCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.telephony_credentials.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelephonyCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTelephonyCredentialsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTelephonyCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.telephony_credentials.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelephonyCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTelephonyCredentialsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTelephonyCredentialsMutationKey() {
  return ['telephony_credentials', '/telephony_credentials', 'POST'] as const
}

export function getPostTelephonyCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.telephony_credentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTelephonyCredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.telephony_credentials.$post>) {
      return parseResponse(client.telephony_credentials.$post(args, options))
    },
  })
}

export function usePostTelephonyCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.telephony_credentials.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTelephonyCredentialsMutationOptions<TError, TOnMutateResult>(
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

export function getTelephonyCredentialsTagsQueryKey(
  args: InferRequestType<typeof client.telephony_credentials.tags.$get>,
) {
  return ['telephony_credentials', '/telephony_credentials/tags', args] as const
}

export function getTelephonyCredentialsTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.tags.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.telephony_credentials.tags.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.tags.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelephonyCredentialsTagsQueryKey>
  >({
    queryKey: getTelephonyCredentialsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.telephony_credentials.tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTelephonyCredentialsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.tags.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.telephony_credentials.tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.tags.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelephonyCredentialsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTelephonyCredentialsTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTelephonyCredentialsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.tags.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.telephony_credentials.tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.telephony_credentials.tags.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelephonyCredentialsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTelephonyCredentialsTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTelephonyCredentialsIdQueryKey(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$get']>,
) {
  return ['telephony_credentials', '/telephony_credentials/:id', args] as const
}

export function getTelephonyCredentialsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelephonyCredentialsIdQueryKey>
  >({
    queryKey: getTelephonyCredentialsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.telephony_credentials[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTelephonyCredentialsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelephonyCredentialsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTelephonyCredentialsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTelephonyCredentialsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelephonyCredentialsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTelephonyCredentialsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteTelephonyCredentialsIdMutationKey() {
  return ['telephony_credentials', '/telephony_credentials/:id', 'DELETE'] as const
}

export function getDeleteTelephonyCredentialsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.telephony_credentials)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTelephonyCredentialsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.telephony_credentials)[':id']['$delete']>,
    ) {
      return parseResponse(client.telephony_credentials[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTelephonyCredentialsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.telephony_credentials)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTelephonyCredentialsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTelephonyCredentialsIdMutationKey() {
  return ['telephony_credentials', '/telephony_credentials/:id', 'PATCH'] as const
}

export function getPatchTelephonyCredentialsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.telephony_credentials)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTelephonyCredentialsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.telephony_credentials)[':id']['$patch']>,
    ) {
      return parseResponse(client.telephony_credentials[':id'].$patch(args, options))
    },
  })
}

export function usePatchTelephonyCredentialsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.telephony_credentials)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTelephonyCredentialsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostTelephonyCredentialsIdActionsActionMutationKey() {
  return ['telephony_credentials', '/telephony_credentials/:id/actions/:action', 'POST'] as const
}

export function getPostTelephonyCredentialsIdActionsActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.telephony_credentials)[':id']['actions'][':action']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTelephonyCredentialsIdActionsActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.telephony_credentials)[':id']['actions'][':action']['$post']
      >,
    ) {
      return parseResponse(
        client.telephony_credentials[':id'].actions[':action'].$post(args, options),
      )
    },
  })
}

export function usePostTelephonyCredentialsIdActionsAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.telephony_credentials)[':id']['actions'][':action']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.telephony_credentials)[':id']['actions'][':action']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTelephonyCredentialsIdActionsActionMutationOptions<
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

export function getPostTelephonyCredentialsIdTokenMutationKey() {
  return ['telephony_credentials', '/telephony_credentials/:id/token', 'POST'] as const
}

export function getPostTelephonyCredentialsIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.telephony_credentials)[':id']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTelephonyCredentialsIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.telephony_credentials)[':id']['token']['$post']>,
    ) {
      return parseResponse(client.telephony_credentials[':id'].token.$post(args, options))
    },
  })
}

export function usePostTelephonyCredentialsIdToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telephony_credentials)[':id']['token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.telephony_credentials)[':id']['token']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTelephonyCredentialsIdTokenMutationOptions<
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

export function getTexmlApplicationsQueryKey(
  args: InferRequestType<typeof client.texml_applications.$get>,
) {
  return ['texml_applications', '/texml_applications', args] as const
}

export function getTexmlApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.texml_applications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTexmlApplicationsQueryKey>
  >({
    queryKey: getTexmlApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.texml_applications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTexmlApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.texml_applications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTexmlApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTexmlApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTexmlApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.texml_applications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTexmlApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTexmlApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTexmlApplicationsMutationKey() {
  return ['texml_applications', '/texml_applications', 'POST'] as const
}

export function getPostTexmlApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.texml_applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTexmlApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.texml_applications.$post>) {
      return parseResponse(client.texml_applications.$post(args, options))
    },
  })
}

export function usePostTexmlApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.texml_applications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.texml_applications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTexmlApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getTexmlApplicationsIdQueryKey(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$get']>,
) {
  return ['texml_applications', '/texml_applications/:id', args] as const
}

export function getTexmlApplicationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.texml_applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.texml_applications)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTexmlApplicationsIdQueryKey>
  >({
    queryKey: getTexmlApplicationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.texml_applications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTexmlApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.texml_applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.texml_applications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTexmlApplicationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTexmlApplicationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTexmlApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.texml_applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.texml_applications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTexmlApplicationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTexmlApplicationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTexmlApplicationsIdMutationKey() {
  return ['texml_applications', '/texml_applications/:id', 'DELETE'] as const
}

export function getDeleteTexmlApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.texml_applications)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.texml_applications)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTexmlApplicationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.texml_applications)[':id']['$delete']>) {
      return parseResponse(client.texml_applications[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTexmlApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.texml_applications)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.texml_applications)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTexmlApplicationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTexmlApplicationsIdMutationKey() {
  return ['texml_applications', '/texml_applications/:id', 'PATCH'] as const
}

export function getPatchTexmlApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.texml_applications)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.texml_applications)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTexmlApplicationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.texml_applications)[':id']['$patch']>) {
      return parseResponse(client.texml_applications[':id'].$patch(args, options))
    },
  })
}

export function usePatchTexmlApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.texml_applications)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.texml_applications)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTexmlApplicationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getVerificationsByPhoneNumberPhoneNumberQueryKey(
  args: InferRequestType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>,
) {
  return ['verifications', '/verifications/by_phone_number/:phone_number', args] as const
}

export function getVerificationsByPhoneNumberPhoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVerificationsByPhoneNumberPhoneNumberQueryKey>
  >({
    queryKey: getVerificationsByPhoneNumberPhoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.verifications.by_phone_number[':phone_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVerificationsByPhoneNumberPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVerificationsByPhoneNumberPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVerificationsByPhoneNumberPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVerificationsByPhoneNumberPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVerificationsByPhoneNumberPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVerificationsByPhoneNumberPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostVerificationsByPhoneNumberPhoneNumberActionsVerifyMutationKey() {
  return [
    'verifications',
    '/verifications/by_phone_number/:phone_number/actions/verify',
    'POST',
  ] as const
}

export function getPostVerificationsByPhoneNumberPhoneNumberActionsVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.verifications.by_phone_number)[':phone_number']['actions']['verify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVerificationsByPhoneNumberPhoneNumberActionsVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.verifications.by_phone_number)[':phone_number']['actions']['verify']['$post']
      >,
    ) {
      return parseResponse(
        client.verifications.by_phone_number[':phone_number'].actions.verify.$post(args, options),
      )
    },
  })
}

export function usePostVerificationsByPhoneNumberPhoneNumberActionsVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.verifications.by_phone_number)[':phone_number']['actions']['verify']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVerificationsByPhoneNumberPhoneNumberActionsVerifyMutationOptions<
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

export function getPostVerificationsCallMutationKey() {
  return ['verifications', '/verifications/call', 'POST'] as const
}

export function getPostVerificationsCallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.call.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.verifications.call.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerificationsCallMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verifications.call.$post>) {
      return parseResponse(client.verifications.call.$post(args, options))
    },
  })
}

export function usePostVerificationsCall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.verifications.call.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.verifications.call.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVerificationsCallMutationOptions<TError, TOnMutateResult>(
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

export function getPostVerificationsFlashcallMutationKey() {
  return ['verifications', '/verifications/flashcall', 'POST'] as const
}

export function getPostVerificationsFlashcallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.verifications.flashcall.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.verifications.flashcall.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerificationsFlashcallMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verifications.flashcall.$post>) {
      return parseResponse(client.verifications.flashcall.$post(args, options))
    },
  })
}

export function usePostVerificationsFlashcall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.verifications.flashcall.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.verifications.flashcall.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVerificationsFlashcallMutationOptions<TError, TOnMutateResult>(
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

export function getPostVerificationsPsd2MutationKey() {
  return ['verifications', '/verifications/psd2', 'POST'] as const
}

export function getPostVerificationsPsd2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.psd2.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.verifications.psd2.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerificationsPsd2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verifications.psd2.$post>) {
      return parseResponse(client.verifications.psd2.$post(args, options))
    },
  })
}

export function usePostVerificationsPsd2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.verifications.psd2.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.verifications.psd2.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVerificationsPsd2MutationOptions<TError, TOnMutateResult>(
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

export function getPostVerificationsSmsMutationKey() {
  return ['verifications', '/verifications/sms', 'POST'] as const
}

export function getPostVerificationsSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.sms.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.verifications.sms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerificationsSmsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verifications.sms.$post>) {
      return parseResponse(client.verifications.sms.$post(args, options))
    },
  })
}

export function usePostVerificationsSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.verifications.sms.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.verifications.sms.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVerificationsSmsMutationOptions<TError, TOnMutateResult>(
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

export function getPostVerificationsWhatsappMutationKey() {
  return ['verifications', '/verifications/whatsapp', 'POST'] as const
}

export function getPostVerificationsWhatsappMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.verifications.whatsapp.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.verifications.whatsapp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerificationsWhatsappMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verifications.whatsapp.$post>) {
      return parseResponse(client.verifications.whatsapp.$post(args, options))
    },
  })
}

export function usePostVerificationsWhatsapp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.verifications.whatsapp.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.verifications.whatsapp.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVerificationsWhatsappMutationOptions<TError, TOnMutateResult>(
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

export function getVerificationsVerificationIdQueryKey(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
) {
  return ['verifications', '/verifications/:verification_id', args] as const
}

export function getVerificationsVerificationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVerificationsVerificationIdQueryKey>
  >({
    queryKey: getVerificationsVerificationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.verifications[':verification_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVerificationsVerificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVerificationsVerificationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVerificationsVerificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVerificationsVerificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVerificationsVerificationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVerificationsVerificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVerifyProfilesQueryKey(
  args: InferRequestType<typeof client.verify_profiles.$get>,
) {
  return ['verify_profiles', '/verify_profiles', args] as const
}

export function getVerifyProfilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.verify_profiles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVerifyProfilesQueryKey>
  >({
    queryKey: getVerifyProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.verify_profiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVerifyProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.verify_profiles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVerifyProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVerifyProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVerifyProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.verify_profiles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVerifyProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVerifyProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVerifyProfilesMutationKey() {
  return ['verify_profiles', '/verify_profiles', 'POST'] as const
}

export function getPostVerifyProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.verify_profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerifyProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verify_profiles.$post>) {
      return parseResponse(client.verify_profiles.$post(args, options))
    },
  })
}

export function usePostVerifyProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify_profiles.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.verify_profiles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVerifyProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getVerifyProfilesVerifyProfileIdQueryKey(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>,
) {
  return ['verify_profiles', '/verify_profiles/:verify_profile_id', args] as const
}

export function getVerifyProfilesVerifyProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVerifyProfilesVerifyProfileIdQueryKey>
  >({
    queryKey: getVerifyProfilesVerifyProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.verify_profiles[':verify_profile_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVerifyProfilesVerifyProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVerifyProfilesVerifyProfileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVerifyProfilesVerifyProfileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVerifyProfilesVerifyProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVerifyProfilesVerifyProfileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVerifyProfilesVerifyProfileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteVerifyProfilesVerifyProfileIdMutationKey() {
  return ['verify_profiles', '/verify_profiles/:verify_profile_id', 'DELETE'] as const
}

export function getDeleteVerifyProfilesVerifyProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVerifyProfilesVerifyProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$delete']>,
    ) {
      return parseResponse(client.verify_profiles[':verify_profile_id'].$delete(args, options))
    },
  })
}

export function useDeleteVerifyProfilesVerifyProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVerifyProfilesVerifyProfileIdMutationOptions<
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

export function getPatchVerifyProfilesVerifyProfileIdMutationKey() {
  return ['verify_profiles', '/verify_profiles/:verify_profile_id', 'PATCH'] as const
}

export function getPatchVerifyProfilesVerifyProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVerifyProfilesVerifyProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$patch']>,
    ) {
      return parseResponse(client.verify_profiles[':verify_profile_id'].$patch(args, options))
    },
  })
}

export function usePatchVerifyProfilesVerifyProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.verify_profiles)[':verify_profile_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVerifyProfilesVerifyProfileIdMutationOptions<
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

export function getWebhookDeliveriesQueryKey(
  args: InferRequestType<typeof client.webhook_deliveries.$get>,
) {
  return ['webhook_deliveries', '/webhook_deliveries', args] as const
}

export function getWebhookDeliveriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_deliveries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhook_deliveries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_deliveries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookDeliveriesQueryKey>
  >({
    queryKey: getWebhookDeliveriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook_deliveries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhookDeliveries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_deliveries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhook_deliveries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webhook_deliveries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookDeliveriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhookDeliveriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhookDeliveries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_deliveries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhook_deliveries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webhook_deliveries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookDeliveriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhookDeliveriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWebhookDeliveriesIdQueryKey(
  args: InferRequestType<(typeof client.webhook_deliveries)[':id']['$get']>,
) {
  return ['webhook_deliveries', '/webhook_deliveries/:id', args] as const
}

export function getWebhookDeliveriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhook_deliveries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhook_deliveries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhook_deliveries)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookDeliveriesIdQueryKey>
  >({
    queryKey: getWebhookDeliveriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook_deliveries[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebhookDeliveriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhook_deliveries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhook_deliveries)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook_deliveries)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookDeliveriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhookDeliveriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhookDeliveriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhook_deliveries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhook_deliveries)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook_deliveries)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookDeliveriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhookDeliveriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWhatsappContactsMutationKey() {
  return ['whatsapp_contacts', '/whatsapp_contacts', 'POST'] as const
}

export function getPostWhatsappContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_contacts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.whatsapp_contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhatsappContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whatsapp_contacts.$post>) {
      return parseResponse(client.whatsapp_contacts.$post(args, options))
    },
  })
}

export function usePostWhatsappContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_contacts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.whatsapp_contacts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWhatsappContactsMutationOptions<TError, TOnMutateResult>(
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

export function getWhatsappDetailRecordReportsQueryKey(
  args: InferRequestType<typeof client.whatsapp_detail_record_reports.$get>,
) {
  return ['whatsapp_detail_record_reports', '/whatsapp_detail_record_reports', args] as const
}

export function getWhatsappDetailRecordReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.whatsapp_detail_record_reports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappDetailRecordReportsQueryKey>
  >({
    queryKey: getWhatsappDetailRecordReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whatsapp_detail_record_reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWhatsappDetailRecordReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.whatsapp_detail_record_reports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappDetailRecordReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWhatsappDetailRecordReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWhatsappDetailRecordReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.whatsapp_detail_record_reports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappDetailRecordReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWhatsappDetailRecordReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWhatsappDetailRecordReportsMutationKey() {
  return ['whatsapp_detail_record_reports', '/whatsapp_detail_record_reports', 'POST'] as const
}

export function getPostWhatsappDetailRecordReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.whatsapp_detail_record_reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhatsappDetailRecordReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whatsapp_detail_record_reports.$post>) {
      return parseResponse(client.whatsapp_detail_record_reports.$post(args, options))
    },
  })
}

export function usePostWhatsappDetailRecordReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.whatsapp_detail_record_reports.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.whatsapp_detail_record_reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWhatsappDetailRecordReportsMutationOptions<
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

export function getWhatsappDetailRecordReportsIdQueryKey(
  args: InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>,
) {
  return ['whatsapp_detail_record_reports', '/whatsapp_detail_record_reports/:id', args] as const
}

export function getWhatsappDetailRecordReportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappDetailRecordReportsIdQueryKey>
  >({
    queryKey: getWhatsappDetailRecordReportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whatsapp_detail_record_reports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWhatsappDetailRecordReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappDetailRecordReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWhatsappDetailRecordReportsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWhatsappDetailRecordReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappDetailRecordReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWhatsappDetailRecordReportsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteWhatsappDetailRecordReportsIdMutationKey() {
  return [
    'whatsapp_detail_record_reports',
    '/whatsapp_detail_record_reports/:id',
    'DELETE',
  ] as const
}

export function getDeleteWhatsappDetailRecordReportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWhatsappDetailRecordReportsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$delete']>,
    ) {
      return parseResponse(client.whatsapp_detail_record_reports[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWhatsappDetailRecordReportsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.whatsapp_detail_record_reports)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWhatsappDetailRecordReportsIdMutationOptions<
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

export function getPostWhatsappMediaMutationKey() {
  return ['whatsapp_media', '/whatsapp_media', 'POST'] as const
}

export function getPostWhatsappMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_media.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.whatsapp_media.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhatsappMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whatsapp_media.$post>) {
      return parseResponse(client.whatsapp_media.$post(args, options))
    },
  })
}

export function usePostWhatsappMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_media.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.whatsapp_media.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWhatsappMediaMutationOptions<TError, TOnMutateResult>(
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

export function getWhatsappMediaWhatsappUserIdMediaIdQueryKey(
  args: InferRequestType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>,
) {
  return ['whatsapp_media', '/whatsapp_media/:whatsapp_user_id/:media_id', args] as const
}

export function getWhatsappMediaWhatsappUserIdMediaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappMediaWhatsappUserIdMediaIdQueryKey>
  >({
    queryKey: getWhatsappMediaWhatsappUserIdMediaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whatsapp_media[':whatsapp_user_id'][':media_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWhatsappMediaWhatsappUserIdMediaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappMediaWhatsappUserIdMediaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWhatsappMediaWhatsappUserIdMediaIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWhatsappMediaWhatsappUserIdMediaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappMediaWhatsappUserIdMediaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWhatsappMediaWhatsappUserIdMediaIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteWhatsappMediaWhatsappUserIdMediaIdMutationKey() {
  return ['whatsapp_media', '/whatsapp_media/:whatsapp_user_id/:media_id', 'DELETE'] as const
}

export function getDeleteWhatsappMediaWhatsappUserIdMediaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWhatsappMediaWhatsappUserIdMediaIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.whatsapp_media[':whatsapp_user_id'][':media_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWhatsappMediaWhatsappUserIdMediaId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWhatsappMediaWhatsappUserIdMediaIdMutationOptions<
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

export function getPostWhatsappMessagesMutationKey() {
  return ['whatsapp_messages', '/whatsapp_messages', 'POST'] as const
}

export function getPostWhatsappMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_messages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.whatsapp_messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhatsappMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whatsapp_messages.$post>) {
      return parseResponse(client.whatsapp_messages.$post(args, options))
    },
  })
}

export function usePostWhatsappMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_messages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.whatsapp_messages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWhatsappMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getPatchWhatsappMessagesMessageIdMutationKey() {
  return ['whatsapp_messages', '/whatsapp_messages/:message_id', 'PATCH'] as const
}

export function getPatchWhatsappMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_messages)[':message_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.whatsapp_messages)[':message_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWhatsappMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whatsapp_messages)[':message_id']['$patch']>,
    ) {
      return parseResponse(client.whatsapp_messages[':message_id'].$patch(args, options))
    },
  })
}

export function usePatchWhatsappMessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whatsapp_messages)[':message_id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.whatsapp_messages)[':message_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWhatsappMessagesMessageIdMutationOptions<
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

export function getWhatsappUsageAggregationsQueryKey(
  args: InferRequestType<typeof client.whatsapp_usage_aggregations.$get>,
) {
  return ['whatsapp_usage_aggregations', '/whatsapp_usage_aggregations', args] as const
}

export function getWhatsappUsageAggregationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_usage_aggregations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.whatsapp_usage_aggregations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_usage_aggregations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappUsageAggregationsQueryKey>
  >({
    queryKey: getWhatsappUsageAggregationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whatsapp_usage_aggregations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWhatsappUsageAggregations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_usage_aggregations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.whatsapp_usage_aggregations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.whatsapp_usage_aggregations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappUsageAggregationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWhatsappUsageAggregationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWhatsappUsageAggregations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp_usage_aggregations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.whatsapp_usage_aggregations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.whatsapp_usage_aggregations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappUsageAggregationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWhatsappUsageAggregationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWhatsappUsersWhatsappUserIdQueryKey(
  args: InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>,
) {
  return ['whatsapp_users', '/whatsapp_users/:whatsapp_user_id', args] as const
}

export function getWhatsappUsersWhatsappUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappUsersWhatsappUserIdQueryKey>
  >({
    queryKey: getWhatsappUsersWhatsappUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whatsapp_users[':whatsapp_user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWhatsappUsersWhatsappUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappUsersWhatsappUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWhatsappUsersWhatsappUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWhatsappUsersWhatsappUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappUsersWhatsappUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWhatsappUsersWhatsappUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchWhatsappUsersWhatsappUserIdMutationKey() {
  return ['whatsapp_users', '/whatsapp_users/:whatsapp_user_id', 'PATCH'] as const
}

export function getPatchWhatsappUsersWhatsappUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWhatsappUsersWhatsappUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$patch']>,
    ) {
      return parseResponse(client.whatsapp_users[':whatsapp_user_id'].$patch(args, options))
    },
  })
}

export function usePatchWhatsappUsersWhatsappUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWhatsappUsersWhatsappUserIdMutationOptions<
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

export function getWirelessDetailRecordsReportsQueryKey(
  args: InferRequestType<typeof client.wireless.detail_records_reports.$get>,
) {
  return ['wireless', '/wireless/detail_records_reports', args] as const
}

export function getWirelessDetailRecordsReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wireless.detail_records_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wireless.detail_records_reports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wireless.detail_records_reports.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDetailRecordsReportsQueryKey>
  >({
    queryKey: getWirelessDetailRecordsReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wireless.detail_records_reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWirelessDetailRecordsReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wireless.detail_records_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wireless.detail_records_reports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wireless.detail_records_reports.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessDetailRecordsReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWirelessDetailRecordsReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWirelessDetailRecordsReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wireless.detail_records_reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wireless.detail_records_reports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wireless.detail_records_reports.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessDetailRecordsReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWirelessDetailRecordsReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWirelessDetailRecordsReportsMutationKey() {
  return ['wireless', '/wireless/detail_records_reports', 'POST'] as const
}

export function getPostWirelessDetailRecordsReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wireless.detail_records_reports.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.wireless.detail_records_reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWirelessDetailRecordsReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wireless.detail_records_reports.$post>) {
      return parseResponse(client.wireless.detail_records_reports.$post(args, options))
    },
  })
}

export function usePostWirelessDetailRecordsReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wireless.detail_records_reports.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.wireless.detail_records_reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWirelessDetailRecordsReportsMutationOptions<
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

export function getWirelessDetailRecordsReportsIdQueryKey(
  args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$get']>,
) {
  return ['wireless', '/wireless/detail_records_reports/:id', args] as const
}

export function getWirelessDetailRecordsReportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWirelessDetailRecordsReportsIdQueryKey>
  >({
    queryKey: getWirelessDetailRecordsReportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wireless.detail_records_reports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWirelessDetailRecordsReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessDetailRecordsReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWirelessDetailRecordsReportsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWirelessDetailRecordsReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWirelessDetailRecordsReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWirelessDetailRecordsReportsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteWirelessDetailRecordsReportsIdMutationKey() {
  return ['wireless', '/wireless/detail_records_reports/:id', 'DELETE'] as const
}

export function getDeleteWirelessDetailRecordsReportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWirelessDetailRecordsReportsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$delete']>,
    ) {
      return parseResponse(client.wireless.detail_records_reports[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWirelessDetailRecordsReportsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.wireless.detail_records_reports)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWirelessDetailRecordsReportsIdMutationOptions<
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
