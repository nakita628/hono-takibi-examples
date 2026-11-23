import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAddressesKey() {
  return ['addresses'] as const
}

export function getAlertsKey() {
  return ['alerts'] as const
}

export function getAttachedItemsKey() {
  return ['attached_items'] as const
}

export function getBatchKey() {
  return ['batch'] as const
}

export function getBusinessEntitiesKey() {
  return ['business_entities'] as const
}

export function getBusinessRulesKey() {
  return ['business_rules'] as const
}

export function getBusinessRulesetsKey() {
  return ['business_rulesets'] as const
}

export function getCardsKey() {
  return ['cards'] as const
}

export function getCollectionsPaymentPromisesKey() {
  return ['collections_payment_promises'] as const
}

export function getCommentsKey() {
  return ['comments'] as const
}

export function getConfigurationsKey() {
  return ['configurations'] as const
}

export function getCouponCodesKey() {
  return ['coupon_codes'] as const
}

export function getCouponSetsKey() {
  return ['coupon_sets'] as const
}

export function getCouponsKey() {
  return ['coupons'] as const
}

export function getCreditNotesKey() {
  return ['credit_notes'] as const
}

export function getCreditUnitsKey() {
  return ['credit_units'] as const
}

export function getCsvTaxRulesKey() {
  return ['csv_tax_rules'] as const
}

export function getCurrenciesKey() {
  return ['currencies'] as const
}

export function getCustomFieldConfigsKey() {
  return ['custom_field_configs'] as const
}

export function getCustomersKey() {
  return ['customers'] as const
}

export function getDifferentialPricesKey() {
  return ['differential_prices'] as const
}

export function getDisputesKey() {
  return ['disputes'] as const
}

export function getEinvoicesKey() {
  return ['einvoices'] as const
}

export function getEntitlementsKey() {
  return ['entitlements'] as const
}

export function getEstimatesKey() {
  return ['estimates'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getFeaturesKey() {
  return ['features'] as const
}

export function getFullExportsKey() {
  return ['full_exports'] as const
}

export function getGatewayRequestLogsKey() {
  return ['gateway_request_logs'] as const
}

export function getGatewayWebhookLogsKey() {
  return ['gateway_webhook_logs'] as const
}

export function getGiftsKey() {
  return ['gifts'] as const
}

export function getGrantBlocksKey() {
  return ['grant_blocks'] as const
}

export function getHostedPagesKey() {
  return ['hosted_pages'] as const
}

export function getInAppSubscriptionsKey() {
  return ['in_app_subscriptions'] as const
}

export function getInvoicesKey() {
  return ['invoices'] as const
}

export function getItemFamiliesKey() {
  return ['item_families'] as const
}

export function getItemPricesKey() {
  return ['item_prices'] as const
}

export function getItemsKey() {
  return ['items'] as const
}

export function getLedgerAccountBalancesKey() {
  return ['ledger_account_balances'] as const
}

export function getLedgerOperationsKey() {
  return ['ledger_operations'] as const
}

export function getMeteredFeaturesKey() {
  return ['metered_features'] as const
}

export function getMetersKey() {
  return ['meters'] as const
}

export function getNonSubscriptionsKey() {
  return ['non_subscriptions'] as const
}

export function getOfferEventsKey() {
  return ['offer_events'] as const
}

export function getOfferFulfillmentsKey() {
  return ['offer_fulfillments'] as const
}

export function getOmnichannelOneTimeOrdersKey() {
  return ['omnichannel_one_time_orders'] as const
}

export function getOmnichannelSubscriptionItemsKey() {
  return ['omnichannel_subscription_items'] as const
}

export function getOmnichannelSubscriptionsKey() {
  return ['omnichannel_subscriptions'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getOrganizationDetailsKey() {
  return ['organization_details'] as const
}

export function getPaymentIntentsKey() {
  return ['payment_intents'] as const
}

export function getPaymentScheduleSchemesKey() {
  return ['payment_schedule_schemes'] as const
}

export function getPaymentSchedulesKey() {
  return ['payment_schedules'] as const
}

export function getPaymentSourcesKey() {
  return ['payment_sources'] as const
}

export function getPaymentVouchersKey() {
  return ['payment_vouchers'] as const
}

export function getPc2MigrationItemFamiliesKey() {
  return ['pc2_migration_item_families'] as const
}

export function getPc2MigrationItemPricesKey() {
  return ['pc2_migration_item_prices'] as const
}

export function getPc2MigrationItemsKey() {
  return ['pc2_migration_items'] as const
}

export function getPc2MigrationsKey() {
  return ['pc2_migrations'] as const
}

export function getPersonalizedOffersKey() {
  return ['personalized_offers'] as const
}

export function getPortalSessionsKey() {
  return ['portal_sessions'] as const
}

export function getPriceRampsKey() {
  return ['price_ramps'] as const
}

export function getPriceVariantsKey() {
  return ['price_variants'] as const
}

export function getPricingPageSessionsKey() {
  return ['pricing_page_sessions'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getPromotionalCreditsKey() {
  return ['promotional_credits'] as const
}

export function getPromotionalGrantsKey() {
  return ['promotional_grants'] as const
}

export function getPurchasesKey() {
  return ['purchases'] as const
}

export function getQuotesKey() {
  return ['quotes'] as const
}

export function getRampsKey() {
  return ['ramps'] as const
}

export function getRecordedPurchasesKey() {
  return ['recorded_purchases'] as const
}

export function getResourceMigrationsKey() {
  return ['resource_migrations'] as const
}

export function getRetrySegmentsKey() {
  return ['retry_segments'] as const
}

export function getRulesKey() {
  return ['rules'] as const
}

export function getSiteMigrationDetailsKey() {
  return ['site_migration_details'] as const
}

export function getSitePcMetaRecordsKey() {
  return ['site_pc_meta_records'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getTimeMachinesKey() {
  return ['time_machines'] as const
}

export function getTokensKey() {
  return ['tokens'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
}

export function getUnbilledChargesKey() {
  return ['unbilled_charges'] as const
}

export function getUsageEventsKey() {
  return ['usage_events'] as const
}

export function getUsageFilesKey() {
  return ['usage_files'] as const
}

export function getUsagesKey() {
  return ['usages'] as const
}

export function getVariantsKey() {
  return ['variants'] as const
}

export function getVaultedPaymentMethodsKey() {
  return ['vaulted_payment_methods'] as const
}

export function getVirtualBankAccountsKey() {
  return ['virtual_bank_accounts'] as const
}

export function getWebhookEndpointsKey() {
  return ['webhook_endpoints'] as const
}

export function getPostSubscriptionsSubscriptionIdRemoveAdvanceInvoiceScheduleKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/remove_advance_invoice_schedule',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdRemoveAdvanceInvoiceSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['remove_advance_invoice_schedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['remove_advance_invoice_schedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdRemoveAdvanceInvoiceScheduleKey()
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
            (typeof client.subscriptions)[':subscription-id']['remove_advance_invoice_schedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].remove_advance_invoice_schedule.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdUpdateForItemsKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/update_for_items', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdUpdateForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['update_for_items']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['update_for_items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdUpdateForItemsKey()
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
            (typeof client.subscriptions)[':subscription-id']['update_for_items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].update_for_items.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdRemoveCouponsKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/remove_coupons', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdRemoveCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':subscription-id']['remove_coupons']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['remove_coupons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdRemoveCouponsKey()
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
            (typeof client.subscriptions)[':subscription-id']['remove_coupons']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].remove_coupons.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdResumeKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/resume', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['resume']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdResumeKey()
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
            (typeof client.subscriptions)[':subscription-id']['resume']['$post']
          >
        },
      ) => parseResponse(client.subscriptions[':subscription-id'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdCancelForItemsKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/cancel_for_items', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdCancelForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['cancel_for_items']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['cancel_for_items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdCancelForItemsKey()
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
            (typeof client.subscriptions)[':subscription-id']['cancel_for_items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].cancel_for_items.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdRegenerateInvoiceKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/regenerate_invoice', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdRegenerateInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['regenerate_invoice']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['regenerate_invoice']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdRegenerateInvoiceKey()
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
            (typeof client.subscriptions)[':subscription-id']['regenerate_invoice']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].regenerate_invoice.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function useGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdMoveKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/move', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['move']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.subscriptions)[':subscription-id']['move']['$post']>
        },
      ) => parseResponse(client.subscriptions[':subscription-id'].move.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdImportForItemsKey() {
  return ['customers', '/customers/:customer-id/import_for_items', 'POST'] as const
}

export function usePostCustomersCustomerIdImportForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customer-id']['import_for_items']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['import_for_items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdImportForItemsKey()
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
            (typeof client.customers)[':customer-id']['import_for_items']['$post']
          >
        },
      ) =>
        parseResponse(client.customers[':customer-id'].import_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdRetrieveAdvanceInvoiceScheduleKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['retrieve_advance_invoice_schedule']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/retrieve_advance_invoice_schedule',
    keyArgs,
  ] as const
}

export function useGetSubscriptionsSubscriptionIdRetrieveAdvanceInvoiceSchedule<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['retrieve_advance_invoice_schedule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['retrieve_advance_invoice_schedule']['$get']
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
        ? getGetSubscriptionsSubscriptionIdRetrieveAdvanceInvoiceScheduleKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['retrieve_advance_invoice_schedule']['$get']
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
          client.subscriptions[':subscription-id'].retrieve_advance_invoice_schedule.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdRetrieveAdvanceInvoiceSchedule<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['retrieve_advance_invoice_schedule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['retrieve_advance_invoice_schedule']['$get']
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
        ? getGetSubscriptionsSubscriptionIdRetrieveAdvanceInvoiceScheduleKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['retrieve_advance_invoice_schedule']['$get']
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
          client.subscriptions[':subscription-id'].retrieve_advance_invoice_schedule.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdRemoveScheduledCancellationKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/remove_scheduled_cancellation',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdRemoveScheduledCancellation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['remove_scheduled_cancellation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['remove_scheduled_cancellation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdRemoveScheduledCancellationKey()
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
            (typeof client.subscriptions)[':subscription-id']['remove_scheduled_cancellation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].remove_scheduled_cancellation.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdRetrieveWithScheduledChangesKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['retrieve_with_scheduled_changes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/retrieve_with_scheduled_changes',
    keyArgs,
  ] as const
}

export function useGetSubscriptionsSubscriptionIdRetrieveWithScheduledChanges<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['retrieve_with_scheduled_changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['retrieve_with_scheduled_changes']['$get']
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
        ? getGetSubscriptionsSubscriptionIdRetrieveWithScheduledChangesKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['retrieve_with_scheduled_changes']['$get']
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
          client.subscriptions[':subscription-id'].retrieve_with_scheduled_changes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdRetrieveWithScheduledChanges<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['retrieve_with_scheduled_changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['retrieve_with_scheduled_changes']['$get']
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
        ? getGetSubscriptionsSubscriptionIdRetrieveWithScheduledChangesKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['retrieve_with_scheduled_changes']['$get']
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
          client.subscriptions[':subscription-id'].retrieve_with_scheduled_changes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdReactivateKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/reactivate', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdReactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':subscription-id']['reactivate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['reactivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdReactivateKey()
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
            (typeof client.subscriptions)[':subscription-id']['reactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].reactivate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdChargeFutureRenewalsKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/charge_future_renewals',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdChargeFutureRenewals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['charge_future_renewals']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['charge_future_renewals']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdChargeFutureRenewalsKey()
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
            (typeof client.subscriptions)[':subscription-id']['charge_future_renewals']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].charge_future_renewals.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdAddChargeAtTermEndKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/add_charge_at_term_end',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdAddChargeAtTermEnd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['add_charge_at_term_end']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['add_charge_at_term_end']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdAddChargeAtTermEndKey()
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
            (typeof client.subscriptions)[':subscription-id']['add_charge_at_term_end']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].add_charge_at_term_end.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdRemoveScheduledChangesKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/remove_scheduled_changes',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdRemoveScheduledChanges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['remove_scheduled_changes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['remove_scheduled_changes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdRemoveScheduledChangesKey()
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
            (typeof client.subscriptions)[':subscription-id']['remove_scheduled_changes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].remove_scheduled_changes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdChangeTermEndKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/change_term_end', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdChangeTermEnd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['change_term_end']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['change_term_end']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdChangeTermEndKey()
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
            (typeof client.subscriptions)[':subscription-id']['change_term_end']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].change_term_end.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdDeleteKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/delete', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdDeleteKey()
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
            (typeof client.subscriptions)[':subscription-id']['delete']['$post']
          >
        },
      ) => parseResponse(client.subscriptions[':subscription-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdSubscriptionForItemsKey() {
  return ['customers', '/customers/:customer-id/subscription_for_items', 'POST'] as const
}

export function usePostCustomersCustomerIdSubscriptionForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customer-id']['subscription_for_items']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['subscription_for_items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdSubscriptionForItemsKey()
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
            (typeof client.customers)[':customer-id']['subscription_for_items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].subscription_for_items.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdImportUnbilledChargesKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/import_unbilled_charges',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdImportUnbilledCharges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['import_unbilled_charges']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['import_unbilled_charges']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdImportUnbilledChargesKey()
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
            (typeof client.subscriptions)[':subscription-id']['import_unbilled_charges']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].import_unbilled_charges.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdRemoveScheduledResumptionKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/remove_scheduled_resumption',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdRemoveScheduledResumption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['remove_scheduled_resumption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['remove_scheduled_resumption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdRemoveScheduledResumptionKey()
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
            (typeof client.subscriptions)[':subscription-id']['remove_scheduled_resumption']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].remove_scheduled_resumption.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription-id', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':subscription-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':subscription-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdImportContractTermKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/import_contract_term', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdImportContractTerm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['import_contract_term']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['import_contract_term']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdImportContractTermKey()
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
            (typeof client.subscriptions)[':subscription-id']['import_contract_term']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].import_contract_term.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdOverrideBillingProfileKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/override_billing_profile',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdOverrideBillingProfile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['override_billing_profile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['override_billing_profile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdOverrideBillingProfileKey()
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
            (typeof client.subscriptions)[':subscription-id']['override_billing_profile']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].override_billing_profile.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdRemoveScheduledPauseKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/remove_scheduled_pause',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdRemoveScheduledPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['remove_scheduled_pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['remove_scheduled_pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdRemoveScheduledPauseKey()
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
            (typeof client.subscriptions)[':subscription-id']['remove_scheduled_pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].remove_scheduled_pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdEditAdvanceInvoiceScheduleKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/edit_advance_invoice_schedule',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdEditAdvanceInvoiceSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['edit_advance_invoice_schedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['edit_advance_invoice_schedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdEditAdvanceInvoiceScheduleKey()
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
            (typeof client.subscriptions)[':subscription-id']['edit_advance_invoice_schedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].edit_advance_invoice_schedule.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdDiscountsKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['discounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription-id/discounts', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionIdDiscounts<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['discounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['discounts']['$get']>
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
        ? getGetSubscriptionsSubscriptionIdDiscountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['discounts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':subscription-id'].discounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdDiscounts<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['discounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['discounts']['$get']>
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
        ? getGetSubscriptionsSubscriptionIdDiscountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['discounts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':subscription-id'].discounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdContractTermsKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['contract_terms']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription-id/contract_terms', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionIdContractTerms<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['contract_terms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['contract_terms']['$get']
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
        ? getGetSubscriptionsSubscriptionIdContractTermsKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['contract_terms']['$get']
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
          client.subscriptions[':subscription-id'].contract_terms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdContractTerms<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['contract_terms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['contract_terms']['$get']
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
        ? getGetSubscriptionsSubscriptionIdContractTermsKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['contract_terms']['$get']
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
          client.subscriptions[':subscription-id'].contract_terms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdPauseKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/pause', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['pause']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.subscriptions)[':subscription-id']['pause']['$post']>
        },
      ) => parseResponse(client.subscriptions[':subscription-id'].pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdScheduledChangesKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['scheduled_changes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription-id/scheduled_changes', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionIdScheduledChanges<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['scheduled_changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['scheduled_changes']['$get']
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
        ? getGetSubscriptionsSubscriptionIdScheduledChangesKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['scheduled_changes']['$get']
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
          client.subscriptions[':subscription-id'].scheduled_changes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdScheduledChanges<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['scheduled_changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['scheduled_changes']['$get']
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
        ? getGetSubscriptionsSubscriptionIdScheduledChangesKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['scheduled_changes']['$get']
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
          client.subscriptions[':subscription-id'].scheduled_changes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdUpdateScheduledChangesKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/update_scheduled_changes',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdUpdateScheduledChanges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['update_scheduled_changes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['update_scheduled_changes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdUpdateScheduledChangesKey()
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
            (typeof client.subscriptions)[':subscription-id']['update_scheduled_changes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].update_scheduled_changes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdRelationshipsKey() {
  return ['customers', '/customers/:customer-id/relationships', 'POST'] as const
}

export function usePostCustomersCustomerIdRelationships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer-id']['relationships']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['relationships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdRelationshipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.customers)[':customer-id']['relationships']['$post']>
        },
      ) => parseResponse(client.customers[':customer-id'].relationships.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdDeleteRelationshipKey() {
  return ['customers', '/customers/:customer-id/delete_relationship', 'POST'] as const
}

export function usePostCustomersCustomerIdDeleteRelationship<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customer-id']['delete_relationship']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['delete_relationship']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdDeleteRelationshipKey()
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
            (typeof client.customers)[':customer-id']['delete_relationship']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].delete_relationship.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdDeleteContactKey() {
  return ['customers', '/customers/:customer-id/delete_contact', 'POST'] as const
}

export function usePostCustomersCustomerIdDeleteContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer-id']['delete_contact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['delete_contact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdDeleteContactKey()
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
            (typeof client.customers)[':customer-id']['delete_contact']['$post']
          >
        },
      ) => parseResponse(client.customers[':customer-id'].delete_contact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdAssignPaymentRoleKey() {
  return ['customers', '/customers/:customer-id/assign_payment_role', 'POST'] as const
}

export function usePostCustomersCustomerIdAssignPaymentRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customer-id']['assign_payment_role']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['assign_payment_role']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdAssignPaymentRoleKey()
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
            (typeof client.customers)[':customer-id']['assign_payment_role']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].assign_payment_role.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersMoveKey() {
  return ['customers', '/customers/move', 'POST'] as const
}

export function usePostCustomersMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.move.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.customers.move.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.customers.move.$post> }) =>
        parseResponse(client.customers.move.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdUpdatePaymentMethodKey() {
  return ['customers', '/customers/:customer-id/update_payment_method', 'POST'] as const
}

export function usePostCustomersCustomerIdUpdatePaymentMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customer-id']['update_payment_method']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['update_payment_method']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdUpdatePaymentMethodKey()
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
            (typeof client.customers)[':customer-id']['update_payment_method']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].update_payment_method.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersKey(args: InferRequestType<typeof client.customers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers', keyArgs] as const
}

export function useGetCustomers<TError = unknown>(
  args: InferRequestType<typeof client.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomers<TError = unknown>(
  args: InferRequestType<typeof client.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersKey() {
  return ['customers', '/customers', 'POST'] as const
}

export function usePostCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.customers.$post> }) =>
        parseResponse(client.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdContactsKey(
  args: InferRequestType<(typeof client.customers)[':customer-id']['contacts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:customer-id/contacts', keyArgs] as const
}

export function useGetCustomersCustomerIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['contacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomersCustomerIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer-id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['contacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomersCustomerIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer-id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersCustomerIdClearPersonalDataKey() {
  return ['customers', '/customers/:customer-id/clear_personal_data', 'POST'] as const
}

export function usePostCustomersCustomerIdClearPersonalData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customer-id']['clear_personal_data']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['clear_personal_data']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdClearPersonalDataKey()
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
            (typeof client.customers)[':customer-id']['clear_personal_data']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].clear_personal_data.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdRecordExcessPaymentKey() {
  return ['customers', '/customers/:customer-id/record_excess_payment', 'POST'] as const
}

export function usePostCustomersCustomerIdRecordExcessPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customer-id']['record_excess_payment']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['record_excess_payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdRecordExcessPaymentKey()
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
            (typeof client.customers)[':customer-id']['record_excess_payment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].record_excess_payment.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdSendPaymentRequestKey() {
  return ['customers', '/customers/:customer-id/send_payment_request', 'POST'] as const
}

export function usePostCustomersCustomerIdSendPaymentRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customer-id']['send_payment_request']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['send_payment_request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdSendPaymentRequestKey()
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
            (typeof client.customers)[':customer-id']['send_payment_request']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].send_payment_request.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdUpdateHierarchySettingsKey() {
  return ['customers', '/customers/:customer-id/update_hierarchy_settings', 'POST'] as const
}

export function usePostCustomersCustomerIdUpdateHierarchySettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':customer-id']['update_hierarchy_settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':customer-id']['update_hierarchy_settings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdUpdateHierarchySettingsKey()
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
            (typeof client.customers)[':customer-id']['update_hierarchy_settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].update_hierarchy_settings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdUpdateBillingInfoKey() {
  return ['customers', '/customers/:customer-id/update_billing_info', 'POST'] as const
}

export function usePostCustomersCustomerIdUpdateBillingInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customer-id']['update_billing_info']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['update_billing_info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdUpdateBillingInfoKey()
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
            (typeof client.customers)[':customer-id']['update_billing_info']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].update_billing_info.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdDeleteKey() {
  return ['customers', '/customers/:customer-id/delete', 'POST'] as const
}

export function usePostCustomersCustomerIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.customers)[':customer-id']['delete']['$post']> },
      ) => parseResponse(client.customers[':customer-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdHierarchyKey(
  args: InferRequestType<(typeof client.customers)[':customer-id']['hierarchy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:customer-id/hierarchy', keyArgs] as const
}

export function useGetCustomersCustomerIdHierarchy<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['hierarchy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['hierarchy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomersCustomerIdHierarchyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['hierarchy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer-id'].hierarchy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdHierarchy<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['hierarchy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['hierarchy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomersCustomerIdHierarchyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['hierarchy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer-id'].hierarchy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersCustomerIdKey(
  args: InferRequestType<(typeof client.customers)[':customer-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:customer-id', keyArgs] as const
}

export function useGetCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':customer-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':customer-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersCustomerIdKey() {
  return ['customers', '/customers/:customer-id', 'POST'] as const
}

export function usePostCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customers)[':customer-id']['$post']> },
      ) => parseResponse(client.customers[':customer-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdHierarchyDetailKey(
  args: InferRequestType<(typeof client.customers)[':customer-id']['hierarchy_detail']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:customer-id/hierarchy_detail', keyArgs] as const
}

export function useGetCustomersCustomerIdHierarchyDetail<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['hierarchy_detail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['hierarchy_detail']['$get']>
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
        ? getGetCustomersCustomerIdHierarchyDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['hierarchy_detail']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer-id'].hierarchy_detail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdHierarchyDetail<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['hierarchy_detail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['hierarchy_detail']['$get']>
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
        ? getGetCustomersCustomerIdHierarchyDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['hierarchy_detail']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer-id'].hierarchy_detail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersCustomerIdChangeBillingDateKey() {
  return ['customers', '/customers/:customer-id/change_billing_date', 'POST'] as const
}

export function usePostCustomersCustomerIdChangeBillingDate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customer-id']['change_billing_date']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['change_billing_date']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdChangeBillingDateKey()
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
            (typeof client.customers)[':customer-id']['change_billing_date']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].change_billing_date.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdAddContactKey() {
  return ['customers', '/customers/:customer-id/add_contact', 'POST'] as const
}

export function usePostCustomersCustomerIdAddContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer-id']['add_contact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['add_contact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdAddContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.customers)[':customer-id']['add_contact']['$post']>
        },
      ) => parseResponse(client.customers[':customer-id'].add_contact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersMergeKey() {
  return ['customers', '/customers/merge', 'POST'] as const
}

export function usePostCustomersMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.merge.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.customers.merge.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.customers.merge.$post> }) =>
        parseResponse(client.customers.merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdCollectPaymentKey() {
  return ['customers', '/customers/:customer-id/collect_payment', 'POST'] as const
}

export function usePostCustomersCustomerIdCollectPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer-id']['collect_payment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['collect_payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdCollectPaymentKey()
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
            (typeof client.customers)[':customer-id']['collect_payment']['$post']
          >
        },
      ) =>
        parseResponse(client.customers[':customer-id'].collect_payment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdUpdateContactKey() {
  return ['customers', '/customers/:customer-id/update_contact', 'POST'] as const
}

export function usePostCustomersCustomerIdUpdateContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer-id']['update_contact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['update_contact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdUpdateContactKey()
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
            (typeof client.customers)[':customer-id']['update_contact']['$post']
          >
        },
      ) => parseResponse(client.customers[':customer-id'].update_contact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTokensCreateUsingTempTokenKey() {
  return ['tokens', '/tokens/create_using_temp_token', 'POST'] as const
}

export function usePostTokensCreateUsingTempToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.tokens.create_using_temp_token.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tokens.create_using_temp_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTokensCreateUsingTempTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tokens.create_using_temp_token.$post> },
      ) => parseResponse(client.tokens.create_using_temp_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTokensCreateForCardKey() {
  return ['tokens', '/tokens/create_for_card', 'POST'] as const
}

export function usePostTokensCreateForCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tokens.create_for_card.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tokens.create_for_card.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTokensCreateForCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tokens.create_for_card.$post> },
      ) => parseResponse(client.tokens.create_for_card.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTokensCbTokenIdKey(
  args: InferRequestType<(typeof client.tokens)[':cb-token-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tokens', '/tokens/:cb-token-id', keyArgs] as const
}

export function useGetTokensCbTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':cb-token-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':cb-token-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensCbTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':cb-token-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':cb-token-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensCbTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':cb-token-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':cb-token-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensCbTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':cb-token-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':cb-token-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentSourcesCreateUsingPermanentTokenKey() {
  return ['payment_sources', '/payment_sources/create_using_permanent_token', 'POST'] as const
}

export function usePostPaymentSourcesCreateUsingPermanentToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_sources.create_using_permanent_token.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_sources.create_using_permanent_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCreateUsingPermanentTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.payment_sources.create_using_permanent_token.$post>
        },
      ) =>
        parseResponse(
          client.payment_sources.create_using_permanent_token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentSourcesCustPaymentSourceIdDeleteKey() {
  return ['payment_sources', '/payment_sources/:cust-payment-source-id/delete', 'POST'] as const
}

export function usePostPaymentSourcesCustPaymentSourceIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payment_sources)[':cust-payment-source-id']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payment_sources)[':cust-payment-source-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCustPaymentSourceIdDeleteKey()
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
            (typeof client.payment_sources)[':cust-payment-source-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_sources[':cust-payment-source-id'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentSourcesCreateCardKey() {
  return ['payment_sources', '/payment_sources/create_card', 'POST'] as const
}

export function usePostPaymentSourcesCreateCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payment_sources.create_card.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_sources.create_card.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCreateCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_sources.create_card.$post> },
      ) => parseResponse(client.payment_sources.create_card.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentSourcesCustPaymentSourceIdGatewayPaymentMethodTokensKey(
  args: InferRequestType<
    (typeof client.payment_sources)[':cust-payment-source-id']['gateway_payment_method_tokens']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'payment_sources',
    '/payment_sources/:cust-payment-source-id/gateway_payment_method_tokens',
    keyArgs,
  ] as const
}

export function useGetPaymentSourcesCustPaymentSourceIdGatewayPaymentMethodTokens<TError = unknown>(
  args: InferRequestType<
    (typeof client.payment_sources)[':cust-payment-source-id']['gateway_payment_method_tokens']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.payment_sources)[':cust-payment-source-id']['gateway_payment_method_tokens']['$get']
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
        ? getGetPaymentSourcesCustPaymentSourceIdGatewayPaymentMethodTokensKey(args)
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
                (typeof client.payment_sources)[':cust-payment-source-id']['gateway_payment_method_tokens']['$get']
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
          client.payment_sources[':cust-payment-source-id'].gateway_payment_method_tokens.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentSourcesCustPaymentSourceIdGatewayPaymentMethodTokens<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.payment_sources)[':cust-payment-source-id']['gateway_payment_method_tokens']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.payment_sources)[':cust-payment-source-id']['gateway_payment_method_tokens']['$get']
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
        ? getGetPaymentSourcesCustPaymentSourceIdGatewayPaymentMethodTokensKey(args)
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
                (typeof client.payment_sources)[':cust-payment-source-id']['gateway_payment_method_tokens']['$get']
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
          client.payment_sources[':cust-payment-source-id'].gateway_payment_method_tokens.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentSourcesCustPaymentSourceIdVerifyBankAccountKey() {
  return [
    'payment_sources',
    '/payment_sources/:cust-payment-source-id/verify_bank_account',
    'POST',
  ] as const
}

export function usePostPaymentSourcesCustPaymentSourceIdVerifyBankAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payment_sources)[':cust-payment-source-id']['verify_bank_account']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.payment_sources)[':cust-payment-source-id']['verify_bank_account']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCustPaymentSourceIdVerifyBankAccountKey()
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
            (typeof client.payment_sources)[':cust-payment-source-id']['verify_bank_account']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_sources[':cust-payment-source-id'].verify_bank_account.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentSourcesKey(
  args: InferRequestType<typeof client.payment_sources.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment_sources', '/payment_sources', keyArgs] as const
}

export function useGetPaymentSources<TError = unknown>(
  args: InferRequestType<typeof client.payment_sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_sources.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_sources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentSources<TError = unknown>(
  args: InferRequestType<typeof client.payment_sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_sources.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_sources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentSourcesCustPaymentSourceIdExportPaymentSourceKey() {
  return [
    'payment_sources',
    '/payment_sources/:cust-payment-source-id/export_payment_source',
    'POST',
  ] as const
}

export function usePostPaymentSourcesCustPaymentSourceIdExportPaymentSource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payment_sources)[':cust-payment-source-id']['export_payment_source']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.payment_sources)[':cust-payment-source-id']['export_payment_source']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCustPaymentSourceIdExportPaymentSourceKey()
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
            (typeof client.payment_sources)[':cust-payment-source-id']['export_payment_source']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_sources[':cust-payment-source-id'].export_payment_source.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentSourcesCreateUsingPaymentIntentKey() {
  return ['payment_sources', '/payment_sources/create_using_payment_intent', 'POST'] as const
}

export function usePostPaymentSourcesCreateUsingPaymentIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_sources.create_using_payment_intent.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_sources.create_using_payment_intent.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCreateUsingPaymentIntentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.payment_sources.create_using_payment_intent.$post>
        },
      ) =>
        parseResponse(client.payment_sources.create_using_payment_intent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentSourcesCustPaymentSourceIdKey(
  args: InferRequestType<(typeof client.payment_sources)[':cust-payment-source-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment_sources', '/payment_sources/:cust-payment-source-id', keyArgs] as const
}

export function useGetPaymentSourcesCustPaymentSourceId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_sources)[':cust-payment-source-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_sources)[':cust-payment-source-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentSourcesCustPaymentSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_sources)[':cust-payment-source-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payment_sources[':cust-payment-source-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentSourcesCustPaymentSourceId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_sources)[':cust-payment-source-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_sources)[':cust-payment-source-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentSourcesCustPaymentSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_sources)[':cust-payment-source-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payment_sources[':cust-payment-source-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentSourcesCreateVoucherPaymentSourceKey() {
  return ['payment_sources', '/payment_sources/create_voucher_payment_source', 'POST'] as const
}

export function usePostPaymentSourcesCreateVoucherPaymentSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_sources.create_voucher_payment_source.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_sources.create_voucher_payment_source.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCreateVoucherPaymentSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.payment_sources.create_voucher_payment_source.$post>
        },
      ) =>
        parseResponse(
          client.payment_sources.create_voucher_payment_source.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentSourcesCreateUsingTempTokenKey() {
  return ['payment_sources', '/payment_sources/create_using_temp_token', 'POST'] as const
}

export function usePostPaymentSourcesCreateUsingTempToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_sources.create_using_temp_token.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_sources.create_using_temp_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCreateUsingTempTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.payment_sources.create_using_temp_token.$post> },
      ) => parseResponse(client.payment_sources.create_using_temp_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentSourcesCustPaymentSourceIdUpdateCardKey() {
  return [
    'payment_sources',
    '/payment_sources/:cust-payment-source-id/update_card',
    'POST',
  ] as const
}

export function usePostPaymentSourcesCustPaymentSourceIdUpdateCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payment_sources)[':cust-payment-source-id']['update_card']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.payment_sources)[':cust-payment-source-id']['update_card']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCustPaymentSourceIdUpdateCardKey()
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
            (typeof client.payment_sources)[':cust-payment-source-id']['update_card']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_sources[':cust-payment-source-id'].update_card.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentSourcesCustPaymentSourceIdSwitchGatewayAccountKey() {
  return [
    'payment_sources',
    '/payment_sources/:cust-payment-source-id/switch_gateway_account',
    'POST',
  ] as const
}

export function usePostPaymentSourcesCustPaymentSourceIdSwitchGatewayAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payment_sources)[':cust-payment-source-id']['switch_gateway_account']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.payment_sources)[':cust-payment-source-id']['switch_gateway_account']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCustPaymentSourceIdSwitchGatewayAccountKey()
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
            (typeof client.payment_sources)[':cust-payment-source-id']['switch_gateway_account']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_sources[':cust-payment-source-id'].switch_gateway_account.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentSourcesCreateUsingTokenKey() {
  return ['payment_sources', '/payment_sources/create_using_token', 'POST'] as const
}

export function usePostPaymentSourcesCreateUsingToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_sources.create_using_token.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_sources.create_using_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCreateUsingTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_sources.create_using_token.$post> },
      ) => parseResponse(client.payment_sources.create_using_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentSourcesCustPaymentSourceIdDeleteLocalKey() {
  return [
    'payment_sources',
    '/payment_sources/:cust-payment-source-id/delete_local',
    'POST',
  ] as const
}

export function usePostPaymentSourcesCustPaymentSourceIdDeleteLocal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payment_sources)[':cust-payment-source-id']['delete_local']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.payment_sources)[':cust-payment-source-id']['delete_local']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCustPaymentSourceIdDeleteLocalKey()
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
            (typeof client.payment_sources)[':cust-payment-source-id']['delete_local']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_sources[':cust-payment-source-id'].delete_local.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentSourcesCreateBankAccountKey() {
  return ['payment_sources', '/payment_sources/create_bank_account', 'POST'] as const
}

export function usePostPaymentSourcesCreateBankAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_sources.create_bank_account.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_sources.create_bank_account.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCreateBankAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_sources.create_bank_account.$post> },
      ) => parseResponse(client.payment_sources.create_bank_account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentSourcesCustPaymentSourceIdUpdateBankAccountKey() {
  return [
    'payment_sources',
    '/payment_sources/:cust-payment-source-id/update_bank_account',
    'POST',
  ] as const
}

export function usePostPaymentSourcesCustPaymentSourceIdUpdateBankAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payment_sources)[':cust-payment-source-id']['update_bank_account']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.payment_sources)[':cust-payment-source-id']['update_bank_account']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentSourcesCustPaymentSourceIdUpdateBankAccountKey()
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
            (typeof client.payment_sources)[':cust-payment-source-id']['update_bank_account']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_sources[':cust-payment-source-id'].update_bank_account.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVaultedPaymentMethodsVaultedPaymentMethodIdKey(
  args: InferRequestType<
    (typeof client.vaulted_payment_methods)[':vaulted-payment-method-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'vaulted_payment_methods',
    '/vaulted_payment_methods/:vaulted-payment-method-id',
    keyArgs,
  ] as const
}

export function useGetVaultedPaymentMethodsVaultedPaymentMethodId<TError = unknown>(
  args: InferRequestType<
    (typeof client.vaulted_payment_methods)[':vaulted-payment-method-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vaulted_payment_methods)[':vaulted-payment-method-id']['$get']
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
        ? getGetVaultedPaymentMethodsVaultedPaymentMethodIdKey(args)
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
                (typeof client.vaulted_payment_methods)[':vaulted-payment-method-id']['$get']
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
          client.vaulted_payment_methods[':vaulted-payment-method-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultedPaymentMethodsVaultedPaymentMethodId<TError = unknown>(
  args: InferRequestType<
    (typeof client.vaulted_payment_methods)[':vaulted-payment-method-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vaulted_payment_methods)[':vaulted-payment-method-id']['$get']
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
        ? getGetVaultedPaymentMethodsVaultedPaymentMethodIdKey(args)
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
                (typeof client.vaulted_payment_methods)[':vaulted-payment-method-id']['$get']
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
          client.vaulted_payment_methods[':vaulted-payment-method-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVirtualBankAccountsVirtualBankAccountIdDeleteLocalKey() {
  return [
    'virtual_bank_accounts',
    '/virtual_bank_accounts/:virtual-bank-account-id/delete_local',
    'POST',
  ] as const
}

export function usePostVirtualBankAccountsVirtualBankAccountIdDeleteLocal<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['delete_local']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['delete_local']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualBankAccountsVirtualBankAccountIdDeleteLocalKey()
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
            (typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['delete_local']['$post']
          >
        },
      ) =>
        parseResponse(
          client.virtual_bank_accounts[':virtual-bank-account-id'].delete_local.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVirtualBankAccountsVirtualBankAccountIdDeleteKey() {
  return [
    'virtual_bank_accounts',
    '/virtual_bank_accounts/:virtual-bank-account-id/delete',
    'POST',
  ] as const
}

export function usePostVirtualBankAccountsVirtualBankAccountIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualBankAccountsVirtualBankAccountIdDeleteKey()
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
            (typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.virtual_bank_accounts[':virtual-bank-account-id'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualBankAccountsKey(
  args: InferRequestType<typeof client.virtual_bank_accounts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['virtual_bank_accounts', '/virtual_bank_accounts', keyArgs] as const
}

export function useGetVirtualBankAccounts<TError = unknown>(
  args: InferRequestType<typeof client.virtual_bank_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.virtual_bank_accounts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualBankAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.virtual_bank_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.virtual_bank_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualBankAccounts<TError = unknown>(
  args: InferRequestType<typeof client.virtual_bank_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.virtual_bank_accounts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualBankAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.virtual_bank_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.virtual_bank_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVirtualBankAccountsKey() {
  return ['virtual_bank_accounts', '/virtual_bank_accounts', 'POST'] as const
}

export function usePostVirtualBankAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.virtual_bank_accounts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.virtual_bank_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualBankAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.virtual_bank_accounts.$post> },
      ) => parseResponse(client.virtual_bank_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualBankAccountsVirtualBankAccountIdKey(
  args: InferRequestType<(typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'virtual_bank_accounts',
    '/virtual_bank_accounts/:virtual-bank-account-id',
    keyArgs,
  ] as const
}

export function useGetVirtualBankAccountsVirtualBankAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['$get']>
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
        ? getGetVirtualBankAccountsVirtualBankAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtual_bank_accounts[':virtual-bank-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualBankAccountsVirtualBankAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['$get']>
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
        ? getGetVirtualBankAccountsVirtualBankAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtual_bank_accounts[':virtual-bank-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVirtualBankAccountsCreateUsingPermanentTokenKey() {
  return [
    'virtual_bank_accounts',
    '/virtual_bank_accounts/create_using_permanent_token',
    'POST',
  ] as const
}

export function usePostVirtualBankAccountsCreateUsingPermanentToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.virtual_bank_accounts.create_using_permanent_token.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.virtual_bank_accounts.create_using_permanent_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualBankAccountsCreateUsingPermanentTokenKey()
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
            typeof client.virtual_bank_accounts.create_using_permanent_token.$post
          >
        },
      ) =>
        parseResponse(
          client.virtual_bank_accounts.create_using_permanent_token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdCopyCardKey() {
  return ['customers', '/customers/:customer-id/copy_card', 'POST'] as const
}

export function usePostCustomersCustomerIdCopyCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer-id']['copy_card']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['copy_card']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdCopyCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.customers)[':customer-id']['copy_card']['$post']>
        },
      ) => parseResponse(client.customers[':customer-id'].copy_card.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsCustomerIdKey(
  args: InferRequestType<(typeof client.cards)[':customer-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['cards', '/cards/:customer-id', keyArgs] as const
}

export function useGetCardsCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':customer-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':customer-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':customer-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':customer-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':customer-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':customer-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':customer-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':customer-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersCustomerIdSwitchGatewayKey() {
  return ['customers', '/customers/:customer-id/switch_gateway', 'POST'] as const
}

export function usePostCustomersCustomerIdSwitchGateway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer-id']['switch_gateway']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['switch_gateway']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdSwitchGatewayKey()
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
            (typeof client.customers)[':customer-id']['switch_gateway']['$post']
          >
        },
      ) => parseResponse(client.customers[':customer-id'].switch_gateway.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdDeleteCardKey() {
  return ['customers', '/customers/:customer-id/delete_card', 'POST'] as const
}

export function usePostCustomersCustomerIdDeleteCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer-id']['delete_card']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['delete_card']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdDeleteCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.customers)[':customer-id']['delete_card']['$post']>
        },
      ) => parseResponse(client.customers[':customer-id'].delete_card.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdCreditCardKey() {
  return ['customers', '/customers/:customer-id/credit_card', 'POST'] as const
}

export function usePostCustomersCustomerIdCreditCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer-id']['credit_card']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer-id']['credit_card']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdCreditCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.customers)[':customer-id']['credit_card']['$post']>
        },
      ) => parseResponse(client.customers[':customer-id'].credit_card.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPromotionalCreditsAccountCreditIdKey(
  args: InferRequestType<(typeof client.promotional_credits)[':account-credit-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['promotional_credits', '/promotional_credits/:account-credit-id', keyArgs] as const
}

export function useGetPromotionalCreditsAccountCreditId<TError = unknown>(
  args: InferRequestType<(typeof client.promotional_credits)[':account-credit-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.promotional_credits)[':account-credit-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPromotionalCreditsAccountCreditIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.promotional_credits)[':account-credit-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.promotional_credits[':account-credit-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPromotionalCreditsAccountCreditId<TError = unknown>(
  args: InferRequestType<(typeof client.promotional_credits)[':account-credit-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.promotional_credits)[':account-credit-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPromotionalCreditsAccountCreditIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.promotional_credits)[':account-credit-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.promotional_credits[':account-credit-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPromotionalCreditsKey(
  args: InferRequestType<typeof client.promotional_credits.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['promotional_credits', '/promotional_credits', keyArgs] as const
}

export function useGetPromotionalCredits<TError = unknown>(
  args: InferRequestType<typeof client.promotional_credits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.promotional_credits.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPromotionalCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.promotional_credits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.promotional_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPromotionalCredits<TError = unknown>(
  args: InferRequestType<typeof client.promotional_credits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.promotional_credits.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPromotionalCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.promotional_credits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.promotional_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPromotionalCreditsDeductKey() {
  return ['promotional_credits', '/promotional_credits/deduct', 'POST'] as const
}

export function usePostPromotionalCreditsDeduct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.promotional_credits.deduct.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.promotional_credits.deduct.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPromotionalCreditsDeductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.promotional_credits.deduct.$post> },
      ) => parseResponse(client.promotional_credits.deduct.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPromotionalCreditsSetKey() {
  return ['promotional_credits', '/promotional_credits/set', 'POST'] as const
}

export function usePostPromotionalCreditsSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.promotional_credits.set.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.promotional_credits.set.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPromotionalCreditsSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.promotional_credits.set.$post> },
      ) => parseResponse(client.promotional_credits.set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPromotionalCreditsAddKey() {
  return ['promotional_credits', '/promotional_credits/add', 'POST'] as const
}

export function usePostPromotionalCreditsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.promotional_credits.add.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.promotional_credits.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPromotionalCreditsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.promotional_credits.add.$post> },
      ) => parseResponse(client.promotional_credits.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdEmailLogsKey(
  args: InferRequestType<(typeof client.customers)[':customer-id']['email_logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:customer-id/email_logs', keyArgs] as const
}

export function useGetCustomersCustomerIdEmailLogs<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['email_logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['email_logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomersCustomerIdEmailLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['email_logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer-id'].email_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdEmailLogs<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['email_logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['email_logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomersCustomerIdEmailLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer-id']['email_logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer-id'].email_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGatewayRequestLogsGatewayRequestLogLogIdKey(
  args: InferRequestType<
    (typeof client.gateway_request_logs)[':gateway-request-log-log-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'gateway_request_logs',
    '/gateway_request_logs/:gateway-request-log-log-id',
    keyArgs,
  ] as const
}

export function useGetGatewayRequestLogsGatewayRequestLogLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gateway_request_logs)[':gateway-request-log-log-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gateway_request_logs)[':gateway-request-log-log-id']['$get']
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
        ? getGetGatewayRequestLogsGatewayRequestLogLogIdKey(args)
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
                (typeof client.gateway_request_logs)[':gateway-request-log-log-id']['$get']
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
          client.gateway_request_logs[':gateway-request-log-log-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGatewayRequestLogsGatewayRequestLogLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gateway_request_logs)[':gateway-request-log-log-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gateway_request_logs)[':gateway-request-log-log-id']['$get']
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
        ? getGetGatewayRequestLogsGatewayRequestLogLogIdKey(args)
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
                (typeof client.gateway_request_logs)[':gateway-request-log-log-id']['$get']
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
          client.gateway_request_logs[':gateway-request-log-log-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGatewayRequestLogsKey(
  args: InferRequestType<typeof client.gateway_request_logs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gateway_request_logs', '/gateway_request_logs', keyArgs] as const
}

export function useGetGatewayRequestLogs<TError = unknown>(
  args: InferRequestType<typeof client.gateway_request_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gateway_request_logs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGatewayRequestLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gateway_request_logs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gateway_request_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGatewayRequestLogs<TError = unknown>(
  args: InferRequestType<typeof client.gateway_request_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gateway_request_logs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGatewayRequestLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gateway_request_logs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gateway_request_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGatewayWebhookLogsGatewayWebhookLogWebhookIdKey(
  args: InferRequestType<
    (typeof client.gateway_webhook_logs)[':gateway-webhook-log-webhook-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'gateway_webhook_logs',
    '/gateway_webhook_logs/:gateway-webhook-log-webhook-id',
    keyArgs,
  ] as const
}

export function useGetGatewayWebhookLogsGatewayWebhookLogWebhookId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gateway_webhook_logs)[':gateway-webhook-log-webhook-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gateway_webhook_logs)[':gateway-webhook-log-webhook-id']['$get']
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
        ? getGetGatewayWebhookLogsGatewayWebhookLogWebhookIdKey(args)
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
                (typeof client.gateway_webhook_logs)[':gateway-webhook-log-webhook-id']['$get']
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
          client.gateway_webhook_logs[':gateway-webhook-log-webhook-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGatewayWebhookLogsGatewayWebhookLogWebhookId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gateway_webhook_logs)[':gateway-webhook-log-webhook-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gateway_webhook_logs)[':gateway-webhook-log-webhook-id']['$get']
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
        ? getGetGatewayWebhookLogsGatewayWebhookLogWebhookIdKey(args)
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
                (typeof client.gateway_webhook_logs)[':gateway-webhook-log-webhook-id']['$get']
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
          client.gateway_webhook_logs[':gateway-webhook-log-webhook-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGatewayWebhookLogsKey(
  args: InferRequestType<typeof client.gateway_webhook_logs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gateway_webhook_logs', '/gateway_webhook_logs', keyArgs] as const
}

export function useGetGatewayWebhookLogs<TError = unknown>(
  args: InferRequestType<typeof client.gateway_webhook_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gateway_webhook_logs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGatewayWebhookLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gateway_webhook_logs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gateway_webhook_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGatewayWebhookLogs<TError = unknown>(
  args: InferRequestType<typeof client.gateway_webhook_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gateway_webhook_logs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGatewayWebhookLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gateway_webhook_logs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gateway_webhook_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdDeleteLineItemsKey() {
  return ['invoices', '/invoices/:invoice-id/delete_line_items', 'POST'] as const
}

export function usePostInvoicesInvoiceIdDeleteLineItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['delete_line_items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['delete_line_items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdDeleteLineItemsKey()
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
            (typeof client.invoices)[':invoice-id']['delete_line_items']['$post']
          >
        },
      ) =>
        parseResponse(client.invoices[':invoice-id'].delete_line_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdRemoveCreditNoteKey() {
  return ['invoices', '/invoices/:invoice-id/remove_credit_note', 'POST'] as const
}

export function usePostInvoicesInvoiceIdRemoveCreditNote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.invoices)[':invoice-id']['remove_credit_note']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['remove_credit_note']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdRemoveCreditNoteKey()
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
            (typeof client.invoices)[':invoice-id']['remove_credit_note']['$post']
          >
        },
      ) =>
        parseResponse(client.invoices[':invoice-id'].remove_credit_note.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdRemovePaymentKey() {
  return ['invoices', '/invoices/:invoice-id/remove_payment', 'POST'] as const
}

export function usePostInvoicesInvoiceIdRemovePayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['remove_payment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['remove_payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdRemovePaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['remove_payment']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].remove_payment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdStopDunningKey() {
  return ['invoices', '/invoices/:invoice-id/stop_dunning', 'POST'] as const
}

export function usePostInvoicesInvoiceIdStopDunning<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['stop_dunning']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['stop_dunning']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdStopDunningKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['stop_dunning']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].stop_dunning.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdApplyPaymentsKey() {
  return ['invoices', '/invoices/:invoice-id/apply_payments', 'POST'] as const
}

export function usePostInvoicesInvoiceIdApplyPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['apply_payments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['apply_payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdApplyPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['apply_payments']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].apply_payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdApplyPaymentScheduleSchemeKey() {
  return ['invoices', '/invoices/:invoice-id/apply_payment_schedule_scheme', 'POST'] as const
}

export function usePostInvoicesInvoiceIdApplyPaymentScheduleScheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.invoices)[':invoice-id']['apply_payment_schedule_scheme']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.invoices)[':invoice-id']['apply_payment_schedule_scheme']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdApplyPaymentScheduleSchemeKey()
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
            (typeof client.invoices)[':invoice-id']['apply_payment_schedule_scheme']['$post']
          >
        },
      ) =>
        parseResponse(
          client.invoices[':invoice-id'].apply_payment_schedule_scheme.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdVoidKey() {
  return ['invoices', '/invoices/:invoice-id/void', 'POST'] as const
}

export function usePostInvoicesInvoiceIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['void']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invoices)[':invoice-id']['void']['$post']> },
      ) => parseResponse(client.invoices[':invoice-id'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdAddChargeKey() {
  return ['invoices', '/invoices/:invoice-id/add_charge', 'POST'] as const
}

export function usePostInvoicesInvoiceIdAddCharge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['add_charge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['add_charge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdAddChargeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['add_charge']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].add_charge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdSendEinvoiceKey() {
  return ['invoices', '/invoices/:invoice-id/send_einvoice', 'POST'] as const
}

export function usePostInvoicesInvoiceIdSendEinvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['send_einvoice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['send_einvoice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdSendEinvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['send_einvoice']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].send_einvoice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIdPaymentSchedulesKey(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payment_schedules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:invoice-id/payment_schedules', keyArgs] as const
}

export function useGetInvoicesInvoiceIdPaymentSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payment_schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invoices)[':invoice-id']['payment_schedules']['$get']>
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
        ? getGetInvoicesInvoiceIdPaymentSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invoices)[':invoice-id']['payment_schedules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices[':invoice-id'].payment_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceIdPaymentSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payment_schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invoices)[':invoice-id']['payment_schedules']['$get']>
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
        ? getGetInvoicesInvoiceIdPaymentSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invoices)[':invoice-id']['payment_schedules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices[':invoice-id'].payment_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdWriteOffKey() {
  return ['invoices', '/invoices/:invoice-id/write_off', 'POST'] as const
}

export function usePostInvoicesInvoiceIdWriteOff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['write_off']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['write_off']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdWriteOffKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invoices)[':invoice-id']['write_off']['$post']> },
      ) => parseResponse(client.invoices[':invoice-id'].write_off.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdAddChargeItemKey() {
  return ['invoices', '/invoices/:invoice-id/add_charge_item', 'POST'] as const
}

export function usePostInvoicesInvoiceIdAddChargeItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['add_charge_item']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['add_charge_item']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdAddChargeItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['add_charge_item']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].add_charge_item.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdPauseDunningKey() {
  return ['invoices', '/invoices/:invoice-id/pause_dunning', 'POST'] as const
}

export function usePostInvoicesInvoiceIdPauseDunning<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['pause_dunning']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['pause_dunning']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdPauseDunningKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['pause_dunning']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].pause_dunning.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesKey(args: InferRequestType<typeof client.invoices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices', keyArgs] as const
}

export function useGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostInvoicesInvoiceIdVoidBeforeCaptureKey() {
  return ['invoices', '/invoices/:invoice-id/void_before_capture', 'POST'] as const
}

export function usePostInvoicesInvoiceIdVoidBeforeCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.invoices)[':invoice-id']['void_before_capture']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['void_before_capture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdVoidBeforeCaptureKey()
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
            (typeof client.invoices)[':invoice-id']['void_before_capture']['$post']
          >
        },
      ) =>
        parseResponse(client.invoices[':invoice-id'].void_before_capture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdCloseKey() {
  return ['invoices', '/invoices/:invoice-id/close', 'POST'] as const
}

export function usePostInvoicesInvoiceIdClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['close']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invoices)[':invoice-id']['close']['$post']> },
      ) => parseResponse(client.invoices[':invoice-id'].close.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdApplyCreditsKey() {
  return ['invoices', '/invoices/:invoice-id/apply_credits', 'POST'] as const
}

export function usePostInvoicesInvoiceIdApplyCredits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['apply_credits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['apply_credits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdApplyCreditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['apply_credits']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].apply_credits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdSendEmailKey() {
  return ['invoices', '/invoices/:invoice-id/send_email', 'POST'] as const
}

export function usePostInvoicesInvoiceIdSendEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['send_email']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['send_email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdSendEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['send_email']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].send_email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIdKey(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:invoice-id', keyArgs] as const
}

export function useGetInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':invoice-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':invoice-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvoicesCreateForChargeItemsAndChargesKey() {
  return ['invoices', '/invoices/create_for_charge_items_and_charges', 'POST'] as const
}

export function usePostInvoicesCreateForChargeItemsAndCharges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.invoices.create_for_charge_items_and_charges.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.invoices.create_for_charge_items_and_charges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesCreateForChargeItemsAndChargesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.invoices.create_for_charge_items_and_charges.$post>
        },
      ) =>
        parseResponse(
          client.invoices.create_for_charge_items_and_charges.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdUpdateDetailsKey() {
  return ['invoices', '/invoices/:invoice-id/update_details', 'POST'] as const
}

export function usePostInvoicesInvoiceIdUpdateDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['update_details']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['update_details']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdUpdateDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['update_details']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].update_details.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdRecordPaymentKey() {
  return ['invoices', '/invoices/:invoice-id/record_payment', 'POST'] as const
}

export function usePostInvoicesInvoiceIdRecordPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['record_payment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['record_payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdRecordPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['record_payment']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].record_payment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdDeleteKey() {
  return ['invoices', '/invoices/:invoice-id/delete', 'POST'] as const
}

export function usePostInvoicesInvoiceIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invoices)[':invoice-id']['delete']['$post']> },
      ) => parseResponse(client.invoices[':invoice-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesImportInvoiceKey() {
  return ['invoices', '/invoices/import_invoice', 'POST'] as const
}

export function usePostInvoicesImportInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.invoices.import_invoice.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.invoices.import_invoice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesImportInvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.invoices.import_invoice.$post> },
      ) => parseResponse(client.invoices.import_invoice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdResumeDunningKey() {
  return ['invoices', '/invoices/:invoice-id/resume_dunning', 'POST'] as const
}

export function usePostInvoicesInvoiceIdResumeDunning<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['resume_dunning']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['resume_dunning']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdResumeDunningKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['resume_dunning']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].resume_dunning.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdRecordTaxWithheldKey() {
  return ['invoices', '/invoices/:invoice-id/record_tax_withheld', 'POST'] as const
}

export function usePostInvoicesInvoiceIdRecordTaxWithheld<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.invoices)[':invoice-id']['record_tax_withheld']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['record_tax_withheld']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdRecordTaxWithheldKey()
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
            (typeof client.invoices)[':invoice-id']['record_tax_withheld']['$post']
          >
        },
      ) =>
        parseResponse(client.invoices[':invoice-id'].record_tax_withheld.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdResendEinvoiceKey() {
  return ['invoices', '/invoices/:invoice-id/resend_einvoice', 'POST'] as const
}

export function usePostInvoicesInvoiceIdResendEinvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['resend_einvoice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['resend_einvoice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdResendEinvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['resend_einvoice']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].resend_einvoice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdRemoveTaxWithheldKey() {
  return ['invoices', '/invoices/:invoice-id/remove_tax_withheld', 'POST'] as const
}

export function usePostInvoicesInvoiceIdRemoveTaxWithheld<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.invoices)[':invoice-id']['remove_tax_withheld']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['remove_tax_withheld']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdRemoveTaxWithheldKey()
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
            (typeof client.invoices)[':invoice-id']['remove_tax_withheld']['$post']
          >
        },
      ) =>
        parseResponse(client.invoices[':invoice-id'].remove_tax_withheld.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesPaymentReferenceNumbersKey(
  args: InferRequestType<typeof client.invoices.payment_reference_numbers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/payment_reference_numbers', keyArgs] as const
}

export function useGetInvoicesPaymentReferenceNumbers<TError = unknown>(
  args: InferRequestType<typeof client.invoices.payment_reference_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.invoices.payment_reference_numbers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvoicesPaymentReferenceNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.invoices.payment_reference_numbers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices.payment_reference_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesPaymentReferenceNumbers<TError = unknown>(
  args: InferRequestType<typeof client.invoices.payment_reference_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.invoices.payment_reference_numbers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvoicesPaymentReferenceNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.invoices.payment_reference_numbers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices.payment_reference_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdRemovePaymentScheduleSchemeKey() {
  return ['invoices', '/invoices/:invoice-id/remove_payment_schedule_scheme', 'POST'] as const
}

export function usePostInvoicesInvoiceIdRemovePaymentScheduleScheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.invoices)[':invoice-id']['remove_payment_schedule_scheme']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.invoices)[':invoice-id']['remove_payment_schedule_scheme']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdRemovePaymentScheduleSchemeKey()
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
            (typeof client.invoices)[':invoice-id']['remove_payment_schedule_scheme']['$post']
          >
        },
      ) =>
        parseResponse(
          client.invoices[':invoice-id'].remove_payment_schedule_scheme.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdCollectPaymentKey() {
  return ['invoices', '/invoices/:invoice-id/collect_payment', 'POST'] as const
}

export function usePostInvoicesInvoiceIdCollectPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['collect_payment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['collect_payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdCollectPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['collect_payment']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].collect_payment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdSyncUsagesKey() {
  return ['invoices', '/invoices/:invoice-id/sync_usages', 'POST'] as const
}

export function usePostInvoicesInvoiceIdSyncUsages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['sync_usages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['sync_usages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdSyncUsagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['sync_usages']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].sync_usages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdRefundKey() {
  return ['invoices', '/invoices/:invoice-id/refund', 'POST'] as const
}

export function usePostInvoicesInvoiceIdRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invoices)[':invoice-id']['refund']['$post']> },
      ) => parseResponse(client.invoices[':invoice-id'].refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdRecordRefundKey() {
  return ['invoices', '/invoices/:invoice-id/record_refund', 'POST'] as const
}

export function usePostInvoicesInvoiceIdRecordRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['record_refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['record_refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdRecordRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':invoice-id']['record_refund']['$post']>
        },
      ) => parseResponse(client.invoices[':invoice-id'].record_refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIdPdfKey() {
  return ['invoices', '/invoices/:invoice-id/pdf', 'POST'] as const
}

export function usePostInvoicesInvoiceIdPdf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['pdf']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':invoice-id']['pdf']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIdPdfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':invoice-id']['pdf']['$post']> },
      ) => parseResponse(client.invoices[':invoice-id'].pdf.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIdDownloadEinvoiceKey(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['download_einvoice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:invoice-id/download_einvoice', keyArgs] as const
}

export function useGetInvoicesInvoiceIdDownloadEinvoice<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['download_einvoice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invoices)[':invoice-id']['download_einvoice']['$get']>
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
        ? getGetInvoicesInvoiceIdDownloadEinvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invoices)[':invoice-id']['download_einvoice']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices[':invoice-id'].download_einvoice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceIdDownloadEinvoice<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['download_einvoice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invoices)[':invoice-id']['download_einvoice']['$get']>
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
        ? getGetInvoicesInvoiceIdDownloadEinvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invoices)[':invoice-id']['download_einvoice']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices[':invoice-id'].download_einvoice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentSchedulesKey(
  args: InferRequestType<typeof client.payment_schedules.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment_schedules', '/payment_schedules', keyArgs] as const
}

export function useGetPaymentSchedules<TError = unknown>(
  args: InferRequestType<typeof client.payment_schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentSchedules<TError = unknown>(
  args: InferRequestType<typeof client.payment_schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIdRecordRefundKey() {
  return ['credit_notes', '/credit_notes/:credit-note-id/record_refund', 'POST'] as const
}

export function usePostCreditNotesCreditNoteIdRecordRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.credit_notes)[':credit-note-id']['record_refund']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':credit-note-id']['record_refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIdRecordRefundKey()
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
            (typeof client.credit_notes)[':credit-note-id']['record_refund']['$post']
          >
        },
      ) =>
        parseResponse(
          client.credit_notes[':credit-note-id'].record_refund.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesImportCreditNoteKey() {
  return ['credit_notes', '/credit_notes/import_credit_note', 'POST'] as const
}

export function usePostCreditNotesImportCreditNote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit_notes.import_credit_note.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit_notes.import_credit_note.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesImportCreditNoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit_notes.import_credit_note.$post> },
      ) => parseResponse(client.credit_notes.import_credit_note.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIdDeleteKey() {
  return ['credit_notes', '/credit_notes/:credit-note-id/delete', 'POST'] as const
}

export function usePostCreditNotesCreditNoteIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':credit-note-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':credit-note-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['delete']['$post']>
        },
      ) => parseResponse(client.credit_notes[':credit-note-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIdPdfKey() {
  return ['credit_notes', '/credit_notes/:credit-note-id/pdf', 'POST'] as const
}

export function usePostCreditNotesCreditNoteIdPdf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':credit-note-id']['pdf']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':credit-note-id']['pdf']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIdPdfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['pdf']['$post']>
        },
      ) => parseResponse(client.credit_notes[':credit-note-id'].pdf.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIdSendEinvoiceKey() {
  return ['credit_notes', '/credit_notes/:credit-note-id/send_einvoice', 'POST'] as const
}

export function usePostCreditNotesCreditNoteIdSendEinvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.credit_notes)[':credit-note-id']['send_einvoice']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':credit-note-id']['send_einvoice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIdSendEinvoiceKey()
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
            (typeof client.credit_notes)[':credit-note-id']['send_einvoice']['$post']
          >
        },
      ) =>
        parseResponse(
          client.credit_notes[':credit-note-id'].send_einvoice.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIdVoidKey() {
  return ['credit_notes', '/credit_notes/:credit-note-id/void', 'POST'] as const
}

export function usePostCreditNotesCreditNoteIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':credit-note-id']['void']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':credit-note-id']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['void']['$post']>
        },
      ) => parseResponse(client.credit_notes[':credit-note-id'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIdRefundKey() {
  return ['credit_notes', '/credit_notes/:credit-note-id/refund', 'POST'] as const
}

export function usePostCreditNotesCreditNoteIdRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':credit-note-id']['refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':credit-note-id']['refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIdRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['refund']['$post']>
        },
      ) => parseResponse(client.credit_notes[':credit-note-id'].refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreditNotesKey(args: InferRequestType<typeof client.credit_notes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['credit_notes', '/credit_notes', keyArgs] as const
}

export function useGetCreditNotes<TError = unknown>(
  args: InferRequestType<typeof client.credit_notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreditNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credit_notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotes<TError = unknown>(
  args: InferRequestType<typeof client.credit_notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreditNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credit_notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreditNotesKey() {
  return ['credit_notes', '/credit_notes', 'POST'] as const
}

export function usePostCreditNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit_notes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.credit_notes.$post> }) =>
        parseResponse(client.credit_notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIdUpdateKey() {
  return ['credit_notes', '/credit_notes/:credit-note-id/update', 'POST'] as const
}

export function usePostCreditNotesCreditNoteIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':credit-note-id']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':credit-note-id']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['update']['$post']>
        },
      ) => parseResponse(client.credit_notes[':credit-note-id'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreditNotesCreditNoteIdDownloadEinvoiceKey(
  args: InferRequestType<
    (typeof client.credit_notes)[':credit-note-id']['download_einvoice']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['credit_notes', '/credit_notes/:credit-note-id/download_einvoice', keyArgs] as const
}

export function useGetCreditNotesCreditNoteIdDownloadEinvoice<TError = unknown>(
  args: InferRequestType<
    (typeof client.credit_notes)[':credit-note-id']['download_einvoice']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.credit_notes)[':credit-note-id']['download_einvoice']['$get']
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
        ? getGetCreditNotesCreditNoteIdDownloadEinvoiceKey(args)
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
                (typeof client.credit_notes)[':credit-note-id']['download_einvoice']['$get']
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
          client.credit_notes[':credit-note-id'].download_einvoice.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotesCreditNoteIdDownloadEinvoice<TError = unknown>(
  args: InferRequestType<
    (typeof client.credit_notes)[':credit-note-id']['download_einvoice']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.credit_notes)[':credit-note-id']['download_einvoice']['$get']
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
        ? getGetCreditNotesCreditNoteIdDownloadEinvoiceKey(args)
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
                (typeof client.credit_notes)[':credit-note-id']['download_einvoice']['$get']
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
          client.credit_notes[':credit-note-id'].download_einvoice.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIdResendEinvoiceKey() {
  return ['credit_notes', '/credit_notes/:credit-note-id/resend_einvoice', 'POST'] as const
}

export function usePostCreditNotesCreditNoteIdResendEinvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.credit_notes)[':credit-note-id']['resend_einvoice']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':credit-note-id']['resend_einvoice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIdResendEinvoiceKey()
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
            (typeof client.credit_notes)[':credit-note-id']['resend_einvoice']['$post']
          >
        },
      ) =>
        parseResponse(
          client.credit_notes[':credit-note-id'].resend_einvoice.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIdRemoveTaxWithheldRefundKey() {
  return [
    'credit_notes',
    '/credit_notes/:credit-note-id/remove_tax_withheld_refund',
    'POST',
  ] as const
}

export function usePostCreditNotesCreditNoteIdRemoveTaxWithheldRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.credit_notes)[':credit-note-id']['remove_tax_withheld_refund']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.credit_notes)[':credit-note-id']['remove_tax_withheld_refund']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIdRemoveTaxWithheldRefundKey()
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
            (typeof client.credit_notes)[':credit-note-id']['remove_tax_withheld_refund']['$post']
          >
        },
      ) =>
        parseResponse(
          client.credit_notes[':credit-note-id'].remove_tax_withheld_refund.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCreditNotesCreditNoteIdKey(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['credit_notes', '/credit_notes/:credit-note-id', keyArgs] as const
}

export function useGetCreditNotesCreditNoteId<TError = unknown>(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credit_notes)[':credit-note-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCreditNotesCreditNoteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credit_notes)[':credit-note-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credit_notes[':credit-note-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotesCreditNoteId<TError = unknown>(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credit_notes)[':credit-note-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCreditNotesCreditNoteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credit_notes)[':credit-note-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credit_notes[':credit-note-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIdSendEmailKey() {
  return ['credit_notes', '/credit_notes/:credit-note-id/send_email', 'POST'] as const
}

export function usePostCreditNotesCreditNoteIdSendEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.credit_notes)[':credit-note-id']['send_email']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':credit-note-id']['send_email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIdSendEmailKey()
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
            (typeof client.credit_notes)[':credit-note-id']['send_email']['$post']
          >
        },
      ) =>
        parseResponse(client.credit_notes[':credit-note-id'].send_email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnbilledChargesUnbilledChargeIdDeleteKey() {
  return ['unbilled_charges', '/unbilled_charges/:unbilled-charge-id/delete', 'POST'] as const
}

export function usePostUnbilledChargesUnbilledChargeIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.unbilled_charges)[':unbilled-charge-id']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.unbilled_charges)[':unbilled-charge-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnbilledChargesUnbilledChargeIdDeleteKey()
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
            (typeof client.unbilled_charges)[':unbilled-charge-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.unbilled_charges[':unbilled-charge-id'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUnbilledChargesInvoiceNowEstimateKey() {
  return ['unbilled_charges', '/unbilled_charges/invoice_now_estimate', 'POST'] as const
}

export function usePostUnbilledChargesInvoiceNowEstimate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unbilled_charges.invoice_now_estimate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unbilled_charges.invoice_now_estimate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnbilledChargesInvoiceNowEstimateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.unbilled_charges.invoice_now_estimate.$post> },
      ) => parseResponse(client.unbilled_charges.invoice_now_estimate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnbilledChargesInvoiceUnbilledChargesKey() {
  return ['unbilled_charges', '/unbilled_charges/invoice_unbilled_charges', 'POST'] as const
}

export function usePostUnbilledChargesInvoiceUnbilledCharges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unbilled_charges.invoice_unbilled_charges.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unbilled_charges.invoice_unbilled_charges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnbilledChargesInvoiceUnbilledChargesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.unbilled_charges.invoice_unbilled_charges.$post> },
      ) =>
        parseResponse(client.unbilled_charges.invoice_unbilled_charges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUnbilledChargesKey(
  args: InferRequestType<typeof client.unbilled_charges.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['unbilled_charges', '/unbilled_charges', keyArgs] as const
}

export function useGetUnbilledCharges<TError = unknown>(
  args: InferRequestType<typeof client.unbilled_charges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unbilled_charges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUnbilledChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unbilled_charges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unbilled_charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnbilledCharges<TError = unknown>(
  args: InferRequestType<typeof client.unbilled_charges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unbilled_charges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUnbilledChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unbilled_charges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unbilled_charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUnbilledChargesKey() {
  return ['unbilled_charges', '/unbilled_charges', 'POST'] as const
}

export function usePostUnbilledCharges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unbilled_charges.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.unbilled_charges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnbilledChargesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.unbilled_charges.$post> }) =>
        parseResponse(client.unbilled_charges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrdersKey(args: InferRequestType<typeof client.orders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['orders', '/orders', keyArgs] as const
}

export function useGetOrders<TError = unknown>(
  args: InferRequestType<typeof client.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.orders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOrders<TError = unknown>(
  args: InferRequestType<typeof client.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.orders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostOrdersKey() {
  return ['orders', '/orders', 'POST'] as const
}

export function usePostOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orders.$post> }) =>
        parseResponse(client.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersImportOrderKey() {
  return ['orders', '/orders/import_order', 'POST'] as const
}

export function usePostOrdersImportOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.import_order.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.orders.import_order.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersImportOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orders.import_order.$post> }) =>
        parseResponse(client.orders.import_order.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersOrderIdAssignOrderNumberKey() {
  return ['orders', '/orders/:order-id/assign_order_number', 'POST'] as const
}

export function usePostOrdersOrderIdAssignOrderNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':order-id']['assign_order_number']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':order-id']['assign_order_number']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdAssignOrderNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.orders)[':order-id']['assign_order_number']['$post']>
        },
      ) => parseResponse(client.orders[':order-id'].assign_order_number.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersOrderIdResendKey() {
  return ['orders', '/orders/:order-id/resend', 'POST'] as const
}

export function usePostOrdersOrderIdResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':order-id']['resend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':order-id']['resend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdResendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':order-id']['resend']['$post']> },
      ) => parseResponse(client.orders[':order-id'].resend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersOrderIdReopenKey() {
  return ['orders', '/orders/:order-id/reopen', 'POST'] as const
}

export function usePostOrdersOrderIdReopen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':order-id']['reopen']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':order-id']['reopen']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdReopenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':order-id']['reopen']['$post']> },
      ) => parseResponse(client.orders[':order-id'].reopen.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersOrderIdCancelKey() {
  return ['orders', '/orders/:order-id/cancel', 'POST'] as const
}

export function usePostOrdersOrderIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':order-id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':order-id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':order-id']['cancel']['$post']> },
      ) => parseResponse(client.orders[':order-id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrdersOrderIdKey(
  args: InferRequestType<(typeof client.orders)[':order-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orders', '/orders/:order-id', keyArgs] as const
}

export function useGetOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':order-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':order-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersOrderIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':order-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders[':order-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':order-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':order-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersOrderIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':order-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders[':order-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrdersOrderIdKey() {
  return ['orders', '/orders/:order-id', 'POST'] as const
}

export function usePostOrdersOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':order-id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':order-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':order-id']['$post']> },
      ) => parseResponse(client.orders[':order-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersOrderIdDeleteKey() {
  return ['orders', '/orders/:order-id/delete', 'POST'] as const
}

export function usePostOrdersOrderIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':order-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':order-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':order-id']['delete']['$post']> },
      ) => parseResponse(client.orders[':order-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersOrderIdCreateRefundableCreditNoteKey() {
  return ['orders', '/orders/:order-id/create_refundable_credit_note', 'POST'] as const
}

export function usePostOrdersOrderIdCreateRefundableCreditNote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders)[':order-id']['create_refundable_credit_note']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':order-id']['create_refundable_credit_note']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdCreateRefundableCreditNoteKey()
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
            (typeof client.orders)[':order-id']['create_refundable_credit_note']['$post']
          >
        },
      ) =>
        parseResponse(
          client.orders[':order-id'].create_refundable_credit_note.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGiftsCreateForItemsKey() {
  return ['gifts', '/gifts/create_for_items', 'POST'] as const
}

export function usePostGiftsCreateForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gifts.create_for_items.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.gifts.create_for_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGiftsCreateForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.gifts.create_for_items.$post> },
      ) => parseResponse(client.gifts.create_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGiftsGiftIdCancelKey() {
  return ['gifts', '/gifts/:gift-id/cancel', 'POST'] as const
}

export function usePostGiftsGiftIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gifts)[':gift-id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gifts)[':gift-id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGiftsGiftIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.gifts)[':gift-id']['cancel']['$post']> },
      ) => parseResponse(client.gifts[':gift-id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGiftsGiftIdUpdateGiftKey() {
  return ['gifts', '/gifts/:gift-id/update_gift', 'POST'] as const
}

export function usePostGiftsGiftIdUpdateGift<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gifts)[':gift-id']['update_gift']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gifts)[':gift-id']['update_gift']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGiftsGiftIdUpdateGiftKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.gifts)[':gift-id']['update_gift']['$post']> },
      ) => parseResponse(client.gifts[':gift-id'].update_gift.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGiftsKey(args: InferRequestType<typeof client.gifts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['gifts', '/gifts', keyArgs] as const
}

export function useGetGifts<TError = unknown>(
  args: InferRequestType<typeof client.gifts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGiftsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.gifts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGifts<TError = unknown>(
  args: InferRequestType<typeof client.gifts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGiftsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.gifts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetGiftsGiftIdKey(
  args: InferRequestType<(typeof client.gifts)[':gift-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gifts', '/gifts/:gift-id', keyArgs] as const
}

export function useGetGiftsGiftId<TError = unknown>(
  args: InferRequestType<(typeof client.gifts)[':gift-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gifts)[':gift-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGiftsGiftIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gifts)[':gift-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifts[':gift-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftsGiftId<TError = unknown>(
  args: InferRequestType<(typeof client.gifts)[':gift-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gifts)[':gift-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGiftsGiftIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gifts)[':gift-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifts[':gift-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGiftsGiftIdClaimKey() {
  return ['gifts', '/gifts/:gift-id/claim', 'POST'] as const
}

export function usePostGiftsGiftIdClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gifts)[':gift-id']['claim']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gifts)[':gift-id']['claim']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGiftsGiftIdClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.gifts)[':gift-id']['claim']['$post']> },
      ) => parseResponse(client.gifts[':gift-id'].claim.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionsKey(args: InferRequestType<typeof client.transactions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions', keyArgs] as const
}

export function useGetTransactions<TError = unknown>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactions<TError = unknown>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransactionsTransactionIdReconcileKey() {
  return ['transactions', '/transactions/:transaction-id/reconcile', 'POST'] as const
}

export function usePostTransactionsTransactionIdReconcile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transaction-id']['reconcile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':transaction-id']['reconcile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsTransactionIdReconcileKey()
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
            (typeof client.transactions)[':transaction-id']['reconcile']['$post']
          >
        },
      ) =>
        parseResponse(client.transactions[':transaction-id'].reconcile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionsTransactionIdKey(
  args: InferRequestType<(typeof client.transactions)[':transaction-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions/:transaction-id', keyArgs] as const
}

export function useGetTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':transaction-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transaction-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transaction-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions[':transaction-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':transaction-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transaction-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transaction-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions[':transaction-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransactionsTransactionIdRefundKey() {
  return ['transactions', '/transactions/:transaction-id/refund', 'POST'] as const
}

export function usePostTransactionsTransactionIdRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transaction-id']['refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':transaction-id']['refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsTransactionIdRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.transactions)[':transaction-id']['refund']['$post']>
        },
      ) => parseResponse(client.transactions[':transaction-id'].refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsTransactionIdRecordRefundKey() {
  return ['transactions', '/transactions/:transaction-id/record_refund', 'POST'] as const
}

export function usePostTransactionsTransactionIdRecordRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.transactions)[':transaction-id']['record_refund']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':transaction-id']['record_refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsTransactionIdRecordRefundKey()
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
            (typeof client.transactions)[':transaction-id']['record_refund']['$post']
          >
        },
      ) =>
        parseResponse(
          client.transactions[':transaction-id'].record_refund.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsTransactionIdVoidKey() {
  return ['transactions', '/transactions/:transaction-id/void', 'POST'] as const
}

export function usePostTransactionsTransactionIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transaction-id']['void']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':transaction-id']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsTransactionIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.transactions)[':transaction-id']['void']['$post']>
        },
      ) => parseResponse(client.transactions[':transaction-id'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsCreateAuthorizationKey() {
  return ['transactions', '/transactions/create_authorization', 'POST'] as const
}

export function usePostTransactionsCreateAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transactions.create_authorization.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactions.create_authorization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsCreateAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transactions.create_authorization.$post> },
      ) => parseResponse(client.transactions.create_authorization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIdPaymentsKey(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:invoice-id/payments', keyArgs] as const
}

export function useGetInvoicesInvoiceIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['payments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvoicesInvoiceIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':invoice-id'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['payments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvoicesInvoiceIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':invoice-id'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransactionsTransactionIdDeleteOfflineTransactionKey() {
  return [
    'transactions',
    '/transactions/:transaction-id/delete_offline_transaction',
    'POST',
  ] as const
}

export function usePostTransactionsTransactionIdDeleteOfflineTransaction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.transactions)[':transaction-id']['delete_offline_transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.transactions)[':transaction-id']['delete_offline_transaction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsTransactionIdDeleteOfflineTransactionKey()
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
            (typeof client.transactions)[':transaction-id']['delete_offline_transaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.transactions[':transaction-id'].delete_offline_transaction.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDisputesDisputeIdKey(
  args: InferRequestType<(typeof client.disputes)[':dispute-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/:dispute-id', keyArgs] as const
}

export function useGetDisputesDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.disputes)[':dispute-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':dispute-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDisputesDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':dispute-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes[':dispute-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.disputes)[':dispute-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':dispute-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDisputesDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':dispute-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes[':dispute-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDisputesKey(args: InferRequestType<typeof client.disputes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes', keyArgs] as const
}

export function useGetDisputes<TError = unknown>(
  args: InferRequestType<typeof client.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.disputes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDisputes<TError = unknown>(
  args: InferRequestType<typeof client.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.disputes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostHostedPagesCheckoutOneTimeForItemsKey() {
  return ['hosted_pages', '/hosted_pages/checkout_one_time_for_items', 'POST'] as const
}

export function usePostHostedPagesCheckoutOneTimeForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.hosted_pages.checkout_one_time_for_items.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.checkout_one_time_for_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesCheckoutOneTimeForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.hosted_pages.checkout_one_time_for_items.$post> },
      ) => parseResponse(client.hosted_pages.checkout_one_time_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostedPagesExtendSubscriptionKey() {
  return ['hosted_pages', '/hosted_pages/extend_subscription', 'POST'] as const
}

export function usePostHostedPagesExtendSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.hosted_pages.extend_subscription.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.extend_subscription.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesExtendSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.hosted_pages.extend_subscription.$post> },
      ) => parseResponse(client.hosted_pages.extend_subscription.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostedPagesEventsKey() {
  return ['hosted_pages', '/hosted_pages/events', 'POST'] as const
}

export function usePostHostedPagesEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted_pages.events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hosted_pages.events.$post> }) =>
        parseResponse(client.hosted_pages.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostedPagesCheckoutGiftForItemsKey() {
  return ['hosted_pages', '/hosted_pages/checkout_gift_for_items', 'POST'] as const
}

export function usePostHostedPagesCheckoutGiftForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.hosted_pages.checkout_gift_for_items.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.checkout_gift_for_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesCheckoutGiftForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.hosted_pages.checkout_gift_for_items.$post> },
      ) => parseResponse(client.hosted_pages.checkout_gift_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHostedPagesKey(args: InferRequestType<typeof client.hosted_pages.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hosted_pages', '/hosted_pages', keyArgs] as const
}

export function useGetHostedPages<TError = unknown>(
  args: InferRequestType<typeof client.hosted_pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted_pages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHostedPagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted_pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hosted_pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHostedPages<TError = unknown>(
  args: InferRequestType<typeof client.hosted_pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted_pages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHostedPagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted_pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hosted_pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHostedPagesViewVoucherKey() {
  return ['hosted_pages', '/hosted_pages/view_voucher', 'POST'] as const
}

export function usePostHostedPagesViewVoucher<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.hosted_pages.view_voucher.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.view_voucher.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesViewVoucherKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.hosted_pages.view_voucher.$post> },
      ) => parseResponse(client.hosted_pages.view_voucher.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostedPagesCollectNowKey() {
  return ['hosted_pages', '/hosted_pages/collect_now', 'POST'] as const
}

export function usePostHostedPagesCollectNow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.hosted_pages.collect_now.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.collect_now.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesCollectNowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.hosted_pages.collect_now.$post> },
      ) => parseResponse(client.hosted_pages.collect_now.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostedPagesAcceptQuoteKey() {
  return ['hosted_pages', '/hosted_pages/accept_quote', 'POST'] as const
}

export function usePostHostedPagesAcceptQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.hosted_pages.accept_quote.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.accept_quote.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesAcceptQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.hosted_pages.accept_quote.$post> },
      ) => parseResponse(client.hosted_pages.accept_quote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostedPagesCheckoutNewForItemsKey() {
  return ['hosted_pages', '/hosted_pages/checkout_new_for_items', 'POST'] as const
}

export function usePostHostedPagesCheckoutNewForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.hosted_pages.checkout_new_for_items.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.checkout_new_for_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesCheckoutNewForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.hosted_pages.checkout_new_for_items.$post> },
      ) => parseResponse(client.hosted_pages.checkout_new_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostedPagesClaimGiftKey() {
  return ['hosted_pages', '/hosted_pages/claim_gift', 'POST'] as const
}

export function usePostHostedPagesClaimGift<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.hosted_pages.claim_gift.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.claim_gift.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesClaimGiftKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.hosted_pages.claim_gift.$post> },
      ) => parseResponse(client.hosted_pages.claim_gift.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostedPagesCheckoutExistingForItemsKey() {
  return ['hosted_pages', '/hosted_pages/checkout_existing_for_items', 'POST'] as const
}

export function usePostHostedPagesCheckoutExistingForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.hosted_pages.checkout_existing_for_items.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.checkout_existing_for_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesCheckoutExistingForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.hosted_pages.checkout_existing_for_items.$post> },
      ) => parseResponse(client.hosted_pages.checkout_existing_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostedPagesPreCancelKey() {
  return ['hosted_pages', '/hosted_pages/pre_cancel', 'POST'] as const
}

export function usePostHostedPagesPreCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.hosted_pages.pre_cancel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.pre_cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesPreCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.hosted_pages.pre_cancel.$post> },
      ) => parseResponse(client.hosted_pages.pre_cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostedPagesHostedPageIdAcknowledgeKey() {
  return ['hosted_pages', '/hosted_pages/:hosted-page-id/acknowledge', 'POST'] as const
}

export function usePostHostedPagesHostedPageIdAcknowledge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.hosted_pages)[':hosted-page-id']['acknowledge']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hosted_pages)[':hosted-page-id']['acknowledge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesHostedPageIdAcknowledgeKey()
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
            (typeof client.hosted_pages)[':hosted-page-id']['acknowledge']['$post']
          >
        },
      ) =>
        parseResponse(client.hosted_pages[':hosted-page-id'].acknowledge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostedPagesRetrieveAgreementPdfKey() {
  return ['hosted_pages', '/hosted_pages/retrieve_agreement_pdf', 'POST'] as const
}

export function usePostHostedPagesRetrieveAgreementPdf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.hosted_pages.retrieve_agreement_pdf.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.retrieve_agreement_pdf.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesRetrieveAgreementPdfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.hosted_pages.retrieve_agreement_pdf.$post> },
      ) => parseResponse(client.hosted_pages.retrieve_agreement_pdf.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHostedPagesHostedPageIdKey(
  args: InferRequestType<(typeof client.hosted_pages)[':hosted-page-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hosted_pages', '/hosted_pages/:hosted-page-id', keyArgs] as const
}

export function useGetHostedPagesHostedPageId<TError = unknown>(
  args: InferRequestType<(typeof client.hosted_pages)[':hosted-page-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hosted_pages)[':hosted-page-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHostedPagesHostedPageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hosted_pages)[':hosted-page-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hosted_pages[':hosted-page-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHostedPagesHostedPageId<TError = unknown>(
  args: InferRequestType<(typeof client.hosted_pages)[':hosted-page-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hosted_pages)[':hosted-page-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHostedPagesHostedPageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hosted_pages)[':hosted-page-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hosted_pages[':hosted-page-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHostedPagesManagePaymentSourcesKey() {
  return ['hosted_pages', '/hosted_pages/manage_payment_sources', 'POST'] as const
}

export function usePostHostedPagesManagePaymentSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.hosted_pages.manage_payment_sources.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.hosted_pages.manage_payment_sources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostedPagesManagePaymentSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.hosted_pages.manage_payment_sources.$post> },
      ) => parseResponse(client.hosted_pages.manage_payment_sources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdRenewalEstimateKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['renewal_estimate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription-id/renewal_estimate', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionIdRenewalEstimate<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['renewal_estimate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['renewal_estimate']['$get']
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
        ? getGetSubscriptionsSubscriptionIdRenewalEstimateKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['renewal_estimate']['$get']
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
          client.subscriptions[':subscription-id'].renewal_estimate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdRenewalEstimate<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['renewal_estimate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['renewal_estimate']['$get']
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
        ? getGetSubscriptionsSubscriptionIdRenewalEstimateKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['renewal_estimate']['$get']
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
          client.subscriptions[':subscription-id'].renewal_estimate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEstimatesCreateSubscriptionForItemsKey() {
  return ['estimates', '/estimates/create_subscription_for_items', 'POST'] as const
}

export function usePostEstimatesCreateSubscriptionForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.estimates.create_subscription_for_items.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.estimates.create_subscription_for_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEstimatesCreateSubscriptionForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.estimates.create_subscription_for_items.$post> },
      ) => parseResponse(client.estimates.create_subscription_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEstimatesPaymentSchedulesKey() {
  return ['estimates', '/estimates/payment_schedules', 'POST'] as const
}

export function usePostEstimatesPaymentSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.estimates.payment_schedules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.estimates.payment_schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEstimatesPaymentSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.estimates.payment_schedules.$post> },
      ) => parseResponse(client.estimates.payment_schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdCancelSubscriptionForItemsEstimateKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/cancel_subscription_for_items_estimate',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdCancelSubscriptionForItemsEstimate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['cancel_subscription_for_items_estimate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['cancel_subscription_for_items_estimate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSubscriptionsSubscriptionIdCancelSubscriptionForItemsEstimateKey()
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
            (typeof client.subscriptions)[':subscription-id']['cancel_subscription_for_items_estimate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].cancel_subscription_for_items_estimate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdResumeSubscriptionEstimateKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/resume_subscription_estimate',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdResumeSubscriptionEstimate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['resume_subscription_estimate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['resume_subscription_estimate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdResumeSubscriptionEstimateKey()
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
            (typeof client.subscriptions)[':subscription-id']['resume_subscription_estimate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].resume_subscription_estimate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEstimatesCreateInvoiceForItemsKey() {
  return ['estimates', '/estimates/create_invoice_for_items', 'POST'] as const
}

export function usePostEstimatesCreateInvoiceForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.estimates.create_invoice_for_items.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.estimates.create_invoice_for_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEstimatesCreateInvoiceForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.estimates.create_invoice_for_items.$post> },
      ) => parseResponse(client.estimates.create_invoice_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEstimatesGiftSubscriptionForItemsKey() {
  return ['estimates', '/estimates/gift_subscription_for_items', 'POST'] as const
}

export function usePostEstimatesGiftSubscriptionForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.estimates.gift_subscription_for_items.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.estimates.gift_subscription_for_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEstimatesGiftSubscriptionForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.estimates.gift_subscription_for_items.$post> },
      ) => parseResponse(client.estimates.gift_subscription_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEstimatesUpdateSubscriptionForItemsKey() {
  return ['estimates', '/estimates/update_subscription_for_items', 'POST'] as const
}

export function usePostEstimatesUpdateSubscriptionForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.estimates.update_subscription_for_items.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.estimates.update_subscription_for_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEstimatesUpdateSubscriptionForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.estimates.update_subscription_for_items.$post> },
      ) => parseResponse(client.estimates.update_subscription_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdUpcomingInvoicesEstimateKey(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['upcoming_invoices_estimate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:customer-id/upcoming_invoices_estimate', keyArgs] as const
}

export function useGetCustomersCustomerIdUpcomingInvoicesEstimate<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['upcoming_invoices_estimate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':customer-id']['upcoming_invoices_estimate']['$get']
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
        ? getGetCustomersCustomerIdUpcomingInvoicesEstimateKey(args)
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
                (typeof client.customers)[':customer-id']['upcoming_invoices_estimate']['$get']
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
          client.customers[':customer-id'].upcoming_invoices_estimate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdUpcomingInvoicesEstimate<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['upcoming_invoices_estimate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':customer-id']['upcoming_invoices_estimate']['$get']
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
        ? getGetCustomersCustomerIdUpcomingInvoicesEstimateKey(args)
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
                (typeof client.customers)[':customer-id']['upcoming_invoices_estimate']['$get']
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
          client.customers[':customer-id'].upcoming_invoices_estimate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdRegenerateInvoiceEstimateKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/regenerate_invoice_estimate',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdRegenerateInvoiceEstimate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['regenerate_invoice_estimate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['regenerate_invoice_estimate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdRegenerateInvoiceEstimateKey()
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
            (typeof client.subscriptions)[':subscription-id']['regenerate_invoice_estimate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].regenerate_invoice_estimate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdCreateSubscriptionForItemsEstimateKey() {
  return [
    'customers',
    '/customers/:customer-id/create_subscription_for_items_estimate',
    'POST',
  ] as const
}

export function usePostCustomersCustomerIdCreateSubscriptionForItemsEstimate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':customer-id']['create_subscription_for_items_estimate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':customer-id']['create_subscription_for_items_estimate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdCreateSubscriptionForItemsEstimateKey()
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
            (typeof client.customers)[':customer-id']['create_subscription_for_items_estimate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].create_subscription_for_items_estimate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdChangeTermEndEstimateKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/change_term_end_estimate',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdChangeTermEndEstimate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['change_term_end_estimate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['change_term_end_estimate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdChangeTermEndEstimateKey()
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
            (typeof client.subscriptions)[':subscription-id']['change_term_end_estimate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].change_term_end_estimate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdPauseSubscriptionEstimateKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/pause_subscription_estimate',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdPauseSubscriptionEstimate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['pause_subscription_estimate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['pause_subscription_estimate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdPauseSubscriptionEstimateKey()
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
            (typeof client.subscriptions)[':subscription-id']['pause_subscription_estimate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].pause_subscription_estimate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdAdvanceInvoiceEstimateKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/advance_invoice_estimate',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdAdvanceInvoiceEstimate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['advance_invoice_estimate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['advance_invoice_estimate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdAdvanceInvoiceEstimateKey()
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
            (typeof client.subscriptions)[':subscription-id']['advance_invoice_estimate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].advance_invoice_estimate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersCustomerIdCreateSubscriptionQuoteForItemsKey() {
  return [
    'customers',
    '/customers/:customer-id/create_subscription_quote_for_items',
    'POST',
  ] as const
}

export function usePostCustomersCustomerIdCreateSubscriptionQuoteForItems<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':customer-id']['create_subscription_quote_for_items']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':customer-id']['create_subscription_quote_for_items']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdCreateSubscriptionQuoteForItemsKey()
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
            (typeof client.customers)[':customer-id']['create_subscription_quote_for_items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customer-id'].create_subscription_quote_for_items.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesQuoteIdKey(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['quotes', '/quotes/:quote-id', keyArgs] as const
}

export function useGetQuotesQuoteId<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quote-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotesQuoteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quote-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quote-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteId<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quote-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotesQuoteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quote-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quote-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuotesQuoteIdUpdateStatusKey() {
  return ['quotes', '/quotes/:quote-id/update_status', 'POST'] as const
}

export function usePostQuotesQuoteIdUpdateStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quote-id']['update_status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quote-id']['update_status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdUpdateStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.quotes)[':quote-id']['update_status']['$post']> },
      ) => parseResponse(client.quotes[':quote-id'].update_status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesQuoteIdExtendExpiryDateKey() {
  return ['quotes', '/quotes/:quote-id/extend_expiry_date', 'POST'] as const
}

export function usePostQuotesQuoteIdExtendExpiryDate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quote-id']['extend_expiry_date']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quote-id']['extend_expiry_date']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdExtendExpiryDateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.quotes)[':quote-id']['extend_expiry_date']['$post']>
        },
      ) => parseResponse(client.quotes[':quote-id'].extend_expiry_date.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesQuoteIdEditUpdateSubscriptionQuoteForItemsKey() {
  return ['quotes', '/quotes/:quote-id/edit_update_subscription_quote_for_items', 'POST'] as const
}

export function usePostQuotesQuoteIdEditUpdateSubscriptionQuoteForItems<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.quotes)[':quote-id']['edit_update_subscription_quote_for_items']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.quotes)[':quote-id']['edit_update_subscription_quote_for_items']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdEditUpdateSubscriptionQuoteForItemsKey()
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
            (typeof client.quotes)[':quote-id']['edit_update_subscription_quote_for_items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.quotes[':quote-id'].edit_update_subscription_quote_for_items.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesKey(args: InferRequestType<typeof client.quotes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['quotes', '/quotes', keyArgs] as const
}

export function useGetQuotes<TError = unknown>(
  args: InferRequestType<typeof client.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.quotes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQuotes<TError = unknown>(
  args: InferRequestType<typeof client.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.quotes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostQuotesQuoteIdConvertKey() {
  return ['quotes', '/quotes/:quote-id/convert', 'POST'] as const
}

export function usePostQuotesQuoteIdConvert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quote-id']['convert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quote-id']['convert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdConvertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quotes)[':quote-id']['convert']['$post']> },
      ) => parseResponse(client.quotes[':quote-id'].convert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesQuoteIdDeleteKey() {
  return ['quotes', '/quotes/:quote-id/delete', 'POST'] as const
}

export function usePostQuotesQuoteIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quote-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quote-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quotes)[':quote-id']['delete']['$post']> },
      ) => parseResponse(client.quotes[':quote-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesQuoteIdEditCreateSubscriptionQuoteForItemsKey() {
  return ['quotes', '/quotes/:quote-id/edit_create_subscription_quote_for_items', 'POST'] as const
}

export function usePostQuotesQuoteIdEditCreateSubscriptionQuoteForItems<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.quotes)[':quote-id']['edit_create_subscription_quote_for_items']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.quotes)[':quote-id']['edit_create_subscription_quote_for_items']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdEditCreateSubscriptionQuoteForItemsKey()
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
            (typeof client.quotes)[':quote-id']['edit_create_subscription_quote_for_items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.quotes[':quote-id'].edit_create_subscription_quote_for_items.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesUpdateSubscriptionQuoteForItemsKey() {
  return ['quotes', '/quotes/update_subscription_quote_for_items', 'POST'] as const
}

export function usePostQuotesUpdateSubscriptionQuoteForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.quotes.update_subscription_quote_for_items.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.quotes.update_subscription_quote_for_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesUpdateSubscriptionQuoteForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.quotes.update_subscription_quote_for_items.$post>
        },
      ) =>
        parseResponse(client.quotes.update_subscription_quote_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesQuoteIdQuoteLineGroupsKey(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['quote_line_groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['quotes', '/quotes/:quote-id/quote_line_groups', keyArgs] as const
}

export function useGetQuotesQuoteIdQuoteLineGroups<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['quote_line_groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quote-id']['quote_line_groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuotesQuoteIdQuoteLineGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quote-id']['quote_line_groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.quotes[':quote-id'].quote_line_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteIdQuoteLineGroups<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['quote_line_groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quote-id']['quote_line_groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuotesQuoteIdQuoteLineGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quote-id']['quote_line_groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.quotes[':quote-id'].quote_line_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuotesQuoteIdEditForChargeItemsAndChargesKey() {
  return ['quotes', '/quotes/:quote-id/edit_for_charge_items_and_charges', 'POST'] as const
}

export function usePostQuotesQuoteIdEditForChargeItemsAndCharges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.quotes)[':quote-id']['edit_for_charge_items_and_charges']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.quotes)[':quote-id']['edit_for_charge_items_and_charges']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdEditForChargeItemsAndChargesKey()
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
            (typeof client.quotes)[':quote-id']['edit_for_charge_items_and_charges']['$post']
          >
        },
      ) =>
        parseResponse(
          client.quotes[':quote-id'].edit_for_charge_items_and_charges.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesQuoteIdPdfKey() {
  return ['quotes', '/quotes/:quote-id/pdf', 'POST'] as const
}

export function usePostQuotesQuoteIdPdf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quote-id']['pdf']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quote-id']['pdf']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdPdfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quotes)[':quote-id']['pdf']['$post']> },
      ) => parseResponse(client.quotes[':quote-id'].pdf.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesCreateForChargeItemsAndChargesKey() {
  return ['quotes', '/quotes/create_for_charge_items_and_charges', 'POST'] as const
}

export function usePostQuotesCreateForChargeItemsAndCharges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.quotes.create_for_charge_items_and_charges.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.quotes.create_for_charge_items_and_charges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesCreateForChargeItemsAndChargesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.quotes.create_for_charge_items_and_charges.$post>
        },
      ) =>
        parseResponse(client.quotes.create_for_charge_items_and_charges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesQuoteIdQuoteEntitlementsKey(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['quote_entitlements']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['quotes', '/quotes/:quote-id/quote_entitlements', keyArgs] as const
}

export function useGetQuotesQuoteIdQuoteEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['quote_entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quote-id']['quote_entitlements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuotesQuoteIdQuoteEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quote-id']['quote_entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.quotes[':quote-id'].quote_entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteIdQuoteEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['quote_entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quote-id']['quote_entitlements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuotesQuoteIdQuoteEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quote-id']['quote_entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.quotes[':quote-id'].quote_entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCouponsKey(args: InferRequestType<typeof client.coupons.$get>) {
  const { header: _, ...keyArgs } = args
  return ['coupons', '/coupons', keyArgs] as const
}

export function useGetCoupons<TError = unknown>(
  args: InferRequestType<typeof client.coupons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCouponsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.coupons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCoupons<TError = unknown>(
  args: InferRequestType<typeof client.coupons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCouponsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.coupons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCouponsCouponIdUpdateForItemsKey() {
  return ['coupons', '/coupons/:coupon-id/update_for_items', 'POST'] as const
}

export function usePostCouponsCouponIdUpdateForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.coupons)[':coupon-id']['update_for_items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.coupons)[':coupon-id']['update_for_items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponsCouponIdUpdateForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.coupons)[':coupon-id']['update_for_items']['$post']>
        },
      ) => parseResponse(client.coupons[':coupon-id'].update_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCouponsCouponIdUnarchiveKey() {
  return ['coupons', '/coupons/:coupon-id/unarchive', 'POST'] as const
}

export function usePostCouponsCouponIdUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.coupons)[':coupon-id']['unarchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.coupons)[':coupon-id']['unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponsCouponIdUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.coupons)[':coupon-id']['unarchive']['$post']> },
      ) => parseResponse(client.coupons[':coupon-id'].unarchive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCouponsCouponIdDeleteKey() {
  return ['coupons', '/coupons/:coupon-id/delete', 'POST'] as const
}

export function usePostCouponsCouponIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.coupons)[':coupon-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.coupons)[':coupon-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponsCouponIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.coupons)[':coupon-id']['delete']['$post']> },
      ) => parseResponse(client.coupons[':coupon-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCouponsCopyKey() {
  return ['coupons', '/coupons/copy', 'POST'] as const
}

export function usePostCouponsCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.copy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.coupons.copy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponsCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.coupons.copy.$post> }) =>
        parseResponse(client.coupons.copy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCouponsCouponIdKey(
  args: InferRequestType<(typeof client.coupons)[':coupon-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['coupons', '/coupons/:coupon-id', keyArgs] as const
}

export function useGetCouponsCouponId<TError = unknown>(
  args: InferRequestType<(typeof client.coupons)[':coupon-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':coupon-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCouponsCouponIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':coupon-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupons[':coupon-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCouponsCouponId<TError = unknown>(
  args: InferRequestType<(typeof client.coupons)[':coupon-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':coupon-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCouponsCouponIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':coupon-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupons[':coupon-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCouponsCreateForItemsKey() {
  return ['coupons', '/coupons/create_for_items', 'POST'] as const
}

export function usePostCouponsCreateForItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.coupons.create_for_items.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.coupons.create_for_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponsCreateForItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.coupons.create_for_items.$post> },
      ) => parseResponse(client.coupons.create_for_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCouponSetsKey(args: InferRequestType<typeof client.coupon_sets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['coupon_sets', '/coupon_sets', keyArgs] as const
}

export function useGetCouponSets<TError = unknown>(
  args: InferRequestType<typeof client.coupon_sets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupon_sets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCouponSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupon_sets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupon_sets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCouponSets<TError = unknown>(
  args: InferRequestType<typeof client.coupon_sets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupon_sets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCouponSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupon_sets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupon_sets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCouponSetsKey() {
  return ['coupon_sets', '/coupon_sets', 'POST'] as const
}

export function usePostCouponSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupon_sets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.coupon_sets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.coupon_sets.$post> }) =>
        parseResponse(client.coupon_sets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCouponSetsCouponSetIdUpdateKey() {
  return ['coupon_sets', '/coupon_sets/:coupon-set-id/update', 'POST'] as const
}

export function usePostCouponSetsCouponSetIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.coupon_sets)[':coupon-set-id']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.coupon_sets)[':coupon-set-id']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponSetsCouponSetIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.coupon_sets)[':coupon-set-id']['update']['$post']>
        },
      ) => parseResponse(client.coupon_sets[':coupon-set-id'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCouponSetsCouponSetIdKey(
  args: InferRequestType<(typeof client.coupon_sets)[':coupon-set-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['coupon_sets', '/coupon_sets/:coupon-set-id', keyArgs] as const
}

export function useGetCouponSetsCouponSetId<TError = unknown>(
  args: InferRequestType<(typeof client.coupon_sets)[':coupon-set-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.coupon_sets)[':coupon-set-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCouponSetsCouponSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.coupon_sets)[':coupon-set-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupon_sets[':coupon-set-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCouponSetsCouponSetId<TError = unknown>(
  args: InferRequestType<(typeof client.coupon_sets)[':coupon-set-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.coupon_sets)[':coupon-set-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCouponSetsCouponSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.coupon_sets)[':coupon-set-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupon_sets[':coupon-set-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCouponSetsCouponSetIdAddCouponCodesKey() {
  return ['coupon_sets', '/coupon_sets/:coupon-set-id/add_coupon_codes', 'POST'] as const
}

export function usePostCouponSetsCouponSetIdAddCouponCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.coupon_sets)[':coupon-set-id']['add_coupon_codes']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.coupon_sets)[':coupon-set-id']['add_coupon_codes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponSetsCouponSetIdAddCouponCodesKey()
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
            (typeof client.coupon_sets)[':coupon-set-id']['add_coupon_codes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.coupon_sets[':coupon-set-id'].add_coupon_codes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCouponSetsCouponSetIdDeleteUnusedCouponCodesKey() {
  return ['coupon_sets', '/coupon_sets/:coupon-set-id/delete_unused_coupon_codes', 'POST'] as const
}

export function usePostCouponSetsCouponSetIdDeleteUnusedCouponCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.coupon_sets)[':coupon-set-id']['delete_unused_coupon_codes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.coupon_sets)[':coupon-set-id']['delete_unused_coupon_codes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponSetsCouponSetIdDeleteUnusedCouponCodesKey()
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
            (typeof client.coupon_sets)[':coupon-set-id']['delete_unused_coupon_codes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.coupon_sets[':coupon-set-id'].delete_unused_coupon_codes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCouponSetsCouponSetIdDeleteKey() {
  return ['coupon_sets', '/coupon_sets/:coupon-set-id/delete', 'POST'] as const
}

export function usePostCouponSetsCouponSetIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.coupon_sets)[':coupon-set-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.coupon_sets)[':coupon-set-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponSetsCouponSetIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.coupon_sets)[':coupon-set-id']['delete']['$post']>
        },
      ) => parseResponse(client.coupon_sets[':coupon-set-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCouponCodesKey(args: InferRequestType<typeof client.coupon_codes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['coupon_codes', '/coupon_codes', keyArgs] as const
}

export function useGetCouponCodes<TError = unknown>(
  args: InferRequestType<typeof client.coupon_codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupon_codes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCouponCodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupon_codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupon_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCouponCodes<TError = unknown>(
  args: InferRequestType<typeof client.coupon_codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupon_codes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCouponCodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupon_codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupon_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCouponCodesCouponCodeCodeKey(
  args: InferRequestType<(typeof client.coupon_codes)[':coupon-code-code']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['coupon_codes', '/coupon_codes/:coupon-code-code', keyArgs] as const
}

export function useGetCouponCodesCouponCodeCode<TError = unknown>(
  args: InferRequestType<(typeof client.coupon_codes)[':coupon-code-code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.coupon_codes)[':coupon-code-code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCouponCodesCouponCodeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.coupon_codes)[':coupon-code-code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupon_codes[':coupon-code-code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCouponCodesCouponCodeCode<TError = unknown>(
  args: InferRequestType<(typeof client.coupon_codes)[':coupon-code-code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.coupon_codes)[':coupon-code-code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCouponCodesCouponCodeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.coupon_codes)[':coupon-code-code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupon_codes[':coupon-code-code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCouponCodesCouponCodeCodeArchiveKey() {
  return ['coupon_codes', '/coupon_codes/:coupon-code-code/archive', 'POST'] as const
}

export function usePostCouponCodesCouponCodeCodeArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.coupon_codes)[':coupon-code-code']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.coupon_codes)[':coupon-code-code']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponCodesCouponCodeCodeArchiveKey()
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
            (typeof client.coupon_codes)[':coupon-code-code']['archive']['$post']
          >
        },
      ) =>
        parseResponse(client.coupon_codes[':coupon-code-code'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAddressesKey(args: InferRequestType<typeof client.addresses.$get>) {
  const { header: _, ...keyArgs } = args
  return ['addresses', '/addresses', keyArgs] as const
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

export function getPostUsagesPdfKey() {
  return ['usages', '/usages/pdf', 'POST'] as const
}

export function usePostUsagesPdf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usages.pdf.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.usages.pdf.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsagesPdfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.usages.pdf.$post> }) =>
        parseResponse(client.usages.pdf.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdUsagesKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['usages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription-id/usages', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionIdUsages<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['usages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['usages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriptionsSubscriptionIdUsagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['usages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':subscription-id'].usages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdUsages<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['usages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['usages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriptionsSubscriptionIdUsagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['usages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':subscription-id'].usages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdUsagesKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/usages', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdUsages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription-id']['usages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['usages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdUsagesKey()
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
            (typeof client.subscriptions)[':subscription-id']['usages']['$post']
          >
        },
      ) => parseResponse(client.subscriptions[':subscription-id'].usages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdDeleteUsageKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/delete_usage', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdDeleteUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':subscription-id']['delete_usage']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['delete_usage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdDeleteUsageKey()
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
            (typeof client.subscriptions)[':subscription-id']['delete_usage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].delete_usage.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsagesKey(args: InferRequestType<typeof client.usages.$get>) {
  const { header: _, ...keyArgs } = args
  return ['usages', '/usages', keyArgs] as const
}

export function useGetUsages<TError = unknown>(
  args: InferRequestType<typeof client.usages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usages.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.usages.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsages<TError = unknown>(
  args: InferRequestType<typeof client.usages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usages.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.usages.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEventsKey(args: InferRequestType<typeof client.events.$get>) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events', keyArgs] as const
}

export function useGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEventsEventIdKey(
  args: InferRequestType<(typeof client.events)[':event-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/:event-id', keyArgs] as const
}

export function useGetEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':event-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':event-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCommentsCommentIdDeleteKey() {
  return ['comments', '/comments/:comment-id/delete', 'POST'] as const
}

export function usePostCommentsCommentIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments)[':comment-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':comment-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsCommentIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.comments)[':comment-id']['delete']['$post']> },
      ) => parseResponse(client.comments[':comment-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCommentsCommentIdKey(
  args: InferRequestType<(typeof client.comments)[':comment-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/:comment-id', keyArgs] as const
}

export function useGetCommentsCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':comment-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':comment-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':comment-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':comment-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommentsKey(args: InferRequestType<typeof client.comments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments', keyArgs] as const
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

export function getPostPortalSessionsKey() {
  return ['portal_sessions', '/portal_sessions', 'POST'] as const
}

export function usePostPortalSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portal_sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.portal_sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortalSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.portal_sessions.$post> }) =>
        parseResponse(client.portal_sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortalSessionsPortalSessionIdActivateKey() {
  return ['portal_sessions', '/portal_sessions/:portal-session-id/activate', 'POST'] as const
}

export function usePostPortalSessionsPortalSessionIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portal_sessions)[':portal-session-id']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portal_sessions)[':portal-session-id']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortalSessionsPortalSessionIdActivateKey()
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
            (typeof client.portal_sessions)[':portal-session-id']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portal_sessions[':portal-session-id'].activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortalSessionsPortalSessionIdLogoutKey() {
  return ['portal_sessions', '/portal_sessions/:portal-session-id/logout', 'POST'] as const
}

export function usePostPortalSessionsPortalSessionIdLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portal_sessions)[':portal-session-id']['logout']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portal_sessions)[':portal-session-id']['logout']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortalSessionsPortalSessionIdLogoutKey()
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
            (typeof client.portal_sessions)[':portal-session-id']['logout']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portal_sessions[':portal-session-id'].logout.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPortalSessionsPortalSessionIdKey(
  args: InferRequestType<(typeof client.portal_sessions)[':portal-session-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['portal_sessions', '/portal_sessions/:portal-session-id', keyArgs] as const
}

export function useGetPortalSessionsPortalSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.portal_sessions)[':portal-session-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portal_sessions)[':portal-session-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortalSessionsPortalSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portal_sessions)[':portal-session-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.portal_sessions[':portal-session-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortalSessionsPortalSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.portal_sessions)[':portal-session-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portal_sessions)[':portal-session-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortalSessionsPortalSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portal_sessions)[':portal-session-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.portal_sessions[':portal-session-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSiteMigrationDetailsKey(
  args: InferRequestType<typeof client.site_migration_details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['site_migration_details', '/site_migration_details', keyArgs] as const
}

export function useGetSiteMigrationDetails<TError = unknown>(
  args: InferRequestType<typeof client.site_migration_details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.site_migration_details.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSiteMigrationDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.site_migration_details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site_migration_details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSiteMigrationDetails<TError = unknown>(
  args: InferRequestType<typeof client.site_migration_details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.site_migration_details.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSiteMigrationDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.site_migration_details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site_migration_details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourceMigrationsRetrieveLatestKey(
  args: InferRequestType<typeof client.resource_migrations.retrieve_latest.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['resource_migrations', '/resource_migrations/retrieve_latest', keyArgs] as const
}

export function useGetResourceMigrationsRetrieveLatest<TError = unknown>(
  args: InferRequestType<typeof client.resource_migrations.retrieve_latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resource_migrations.retrieve_latest.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourceMigrationsRetrieveLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resource_migrations.retrieve_latest.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resource_migrations.retrieve_latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourceMigrationsRetrieveLatest<TError = unknown>(
  args: InferRequestType<typeof client.resource_migrations.retrieve_latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resource_migrations.retrieve_latest.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourceMigrationsRetrieveLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resource_migrations.retrieve_latest.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resource_migrations.retrieve_latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimeMachinesTimeMachineNameKey(
  args: InferRequestType<(typeof client.time_machines)[':time-machine-name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['time_machines', '/time_machines/:time-machine-name', keyArgs] as const
}

export function useGetTimeMachinesTimeMachineName<TError = unknown>(
  args: InferRequestType<(typeof client.time_machines)[':time-machine-name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_machines)[':time-machine-name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTimeMachinesTimeMachineNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_machines)[':time-machine-name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.time_machines[':time-machine-name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimeMachinesTimeMachineName<TError = unknown>(
  args: InferRequestType<(typeof client.time_machines)[':time-machine-name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_machines)[':time-machine-name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTimeMachinesTimeMachineNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_machines)[':time-machine-name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.time_machines[':time-machine-name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTimeMachinesTimeMachineNameTravelForwardKey() {
  return ['time_machines', '/time_machines/:time-machine-name/travel_forward', 'POST'] as const
}

export function usePostTimeMachinesTimeMachineNameTravelForward<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.time_machines)[':time-machine-name']['travel_forward']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.time_machines)[':time-machine-name']['travel_forward']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimeMachinesTimeMachineNameTravelForwardKey()
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
            (typeof client.time_machines)[':time-machine-name']['travel_forward']['$post']
          >
        },
      ) =>
        parseResponse(
          client.time_machines[':time-machine-name'].travel_forward.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTimeMachinesTimeMachineNameStartAfreshKey() {
  return ['time_machines', '/time_machines/:time-machine-name/start_afresh', 'POST'] as const
}

export function usePostTimeMachinesTimeMachineNameStartAfresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.time_machines)[':time-machine-name']['start_afresh']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.time_machines)[':time-machine-name']['start_afresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimeMachinesTimeMachineNameStartAfreshKey()
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
            (typeof client.time_machines)[':time-machine-name']['start_afresh']['$post']
          >
        },
      ) =>
        parseResponse(
          client.time_machines[':time-machine-name'].start_afresh.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostExportsCustomersKey() {
  return ['exports', '/exports/customers', 'POST'] as const
}

export function usePostExportsCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.customers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.customers.$post> }) =>
        parseResponse(client.exports.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsAttachedItemsKey() {
  return ['exports', '/exports/attached_items', 'POST'] as const
}

export function usePostExportsAttachedItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.exports.attached_items.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.attached_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsAttachedItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.exports.attached_items.$post> },
      ) => parseResponse(client.exports.attached_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsTransactionsKey() {
  return ['exports', '/exports/transactions', 'POST'] as const
}

export function usePostExportsTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.exports.transactions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.transactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.exports.transactions.$post> },
      ) => parseResponse(client.exports.transactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsRampsKey() {
  return ['exports', '/exports/ramps', 'POST'] as const
}

export function usePostExportsRamps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.ramps.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.ramps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsRampsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.ramps.$post> }) =>
        parseResponse(client.exports.ramps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsDifferentialPricesKey() {
  return ['exports', '/exports/differential_prices', 'POST'] as const
}

export function usePostExportsDifferentialPrices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.exports.differential_prices.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.differential_prices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsDifferentialPricesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.exports.differential_prices.$post> },
      ) => parseResponse(client.exports.differential_prices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsItemFamiliesKey() {
  return ['exports', '/exports/item_families', 'POST'] as const
}

export function usePostExportsItemFamilies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.exports.item_families.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.item_families.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsItemFamiliesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.exports.item_families.$post> },
      ) => parseResponse(client.exports.item_families.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsInvoicesKey() {
  return ['exports', '/exports/invoices', 'POST'] as const
}

export function usePostExportsInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.invoices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.invoices.$post> }) =>
        parseResponse(client.exports.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExportsExportIdKey(
  args: InferRequestType<(typeof client.exports)[':export-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['exports', '/exports/:export-id', keyArgs] as const
}

export function useGetExportsExportId<TError = unknown>(
  args: InferRequestType<(typeof client.exports)[':export-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExportsExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exports[':export-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportsExportId<TError = unknown>(
  args: InferRequestType<(typeof client.exports)[':export-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExportsExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exports[':export-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExportsPriceVariantsKey() {
  return ['exports', '/exports/price_variants', 'POST'] as const
}

export function usePostExportsPriceVariants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.exports.price_variants.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.price_variants.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsPriceVariantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.exports.price_variants.$post> },
      ) => parseResponse(client.exports.price_variants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsItemsKey() {
  return ['exports', '/exports/items', 'POST'] as const
}

export function usePostExportsItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.items.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.items.$post> }) =>
        parseResponse(client.exports.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsDeferredRevenueKey() {
  return ['exports', '/exports/deferred_revenue', 'POST'] as const
}

export function usePostExportsDeferredRevenue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.exports.deferred_revenue.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.deferred_revenue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsDeferredRevenueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.exports.deferred_revenue.$post> },
      ) => parseResponse(client.exports.deferred_revenue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsRevenueRecognitionKey() {
  return ['exports', '/exports/revenue_recognition', 'POST'] as const
}

export function usePostExportsRevenueRecognition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.exports.revenue_recognition.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.revenue_recognition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsRevenueRecognitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.exports.revenue_recognition.$post> },
      ) => parseResponse(client.exports.revenue_recognition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsCreditNotesKey() {
  return ['exports', '/exports/credit_notes', 'POST'] as const
}

export function usePostExportsCreditNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.exports.credit_notes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.credit_notes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsCreditNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.exports.credit_notes.$post> },
      ) => parseResponse(client.exports.credit_notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsCouponsKey() {
  return ['exports', '/exports/coupons', 'POST'] as const
}

export function usePostExportsCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.coupons.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.coupons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsCouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.coupons.$post> }) =>
        parseResponse(client.exports.coupons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsOrdersKey() {
  return ['exports', '/exports/orders', 'POST'] as const
}

export function usePostExportsOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.orders.$post> }) =>
        parseResponse(client.exports.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsItemPricesKey() {
  return ['exports', '/exports/item_prices', 'POST'] as const
}

export function usePostExportsItemPrices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.item_prices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.item_prices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsItemPricesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.item_prices.$post> }) =>
        parseResponse(client.exports.item_prices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsSubscriptionsKey() {
  return ['exports', '/exports/subscriptions', 'POST'] as const
}

export function usePostExportsSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.exports.subscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.exports.subscriptions.$post> },
      ) => parseResponse(client.exports.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFullExportsStatusKey(
  args: InferRequestType<typeof client.full_exports.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['full_exports', '/full_exports/status', keyArgs] as const
}

export function useGetFullExportsStatus<TError = unknown>(
  args: InferRequestType<typeof client.full_exports.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.full_exports.status.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFullExportsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.full_exports.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.full_exports.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFullExportsStatus<TError = unknown>(
  args: InferRequestType<typeof client.full_exports.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.full_exports.status.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFullExportsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.full_exports.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.full_exports.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentIntentsPaymentIntentIdKey(
  args: InferRequestType<(typeof client.payment_intents)[':payment-intent-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment_intents', '/payment_intents/:payment-intent-id', keyArgs] as const
}

export function useGetPaymentIntentsPaymentIntentId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_intents)[':payment-intent-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_intents)[':payment-intent-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentIntentsPaymentIntentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_intents)[':payment-intent-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payment_intents[':payment-intent-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentIntentsPaymentIntentId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_intents)[':payment-intent-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_intents)[':payment-intent-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentIntentsPaymentIntentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_intents)[':payment-intent-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payment_intents[':payment-intent-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentIntentsPaymentIntentIdKey() {
  return ['payment_intents', '/payment_intents/:payment-intent-id', 'POST'] as const
}

export function usePostPaymentIntentsPaymentIntentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_intents)[':payment-intent-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payment_intents)[':payment-intent-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentIntentsPaymentIntentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.payment_intents)[':payment-intent-id']['$post']>
        },
      ) => parseResponse(client.payment_intents[':payment-intent-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentIntentsKey() {
  return ['payment_intents', '/payment_intents', 'POST'] as const
}

export function usePostPaymentIntents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_intents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_intents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentIntentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payment_intents.$post> }) =>
        parseResponse(client.payment_intents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomFieldConfigsRetrieveKey(
  args: InferRequestType<typeof client.custom_field_configs.retrieve.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom_field_configs', '/custom_field_configs/retrieve', keyArgs] as const
}

export function useGetCustomFieldConfigsRetrieve<TError = unknown>(
  args: InferRequestType<typeof client.custom_field_configs.retrieve.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.custom_field_configs.retrieve.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomFieldConfigsRetrieveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.custom_field_configs.retrieve.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_field_configs.retrieve.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomFieldConfigsRetrieve<TError = unknown>(
  args: InferRequestType<typeof client.custom_field_configs.retrieve.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.custom_field_configs.retrieve.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomFieldConfigsRetrieveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.custom_field_configs.retrieve.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_field_configs.retrieve.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomFieldConfigsKey(
  args: InferRequestType<typeof client.custom_field_configs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom_field_configs', '/custom_field_configs', keyArgs] as const
}

export function useGetCustomFieldConfigs<TError = unknown>(
  args: InferRequestType<typeof client.custom_field_configs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.custom_field_configs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomFieldConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.custom_field_configs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_field_configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomFieldConfigs<TError = unknown>(
  args: InferRequestType<typeof client.custom_field_configs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.custom_field_configs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomFieldConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.custom_field_configs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_field_configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemFamiliesItemFamilyIdDeleteKey() {
  return ['item_families', '/item_families/:item-family-id/delete', 'POST'] as const
}

export function usePostItemFamiliesItemFamilyIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.item_families)[':item-family-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.item_families)[':item-family-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemFamiliesItemFamilyIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.item_families)[':item-family-id']['delete']['$post']>
        },
      ) => parseResponse(client.item_families[':item-family-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemFamiliesKey(args: InferRequestType<typeof client.item_families.$get>) {
  const { header: _, ...keyArgs } = args
  return ['item_families', '/item_families', keyArgs] as const
}

export function useGetItemFamilies<TError = unknown>(
  args: InferRequestType<typeof client.item_families.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_families.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemFamiliesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_families.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_families.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemFamilies<TError = unknown>(
  args: InferRequestType<typeof client.item_families.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_families.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemFamiliesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_families.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_families.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemFamiliesKey() {
  return ['item_families', '/item_families', 'POST'] as const
}

export function usePostItemFamilies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_families.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.item_families.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemFamiliesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item_families.$post> }) =>
        parseResponse(client.item_families.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemFamiliesItemFamilyIdKey(
  args: InferRequestType<(typeof client.item_families)[':item-family-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['item_families', '/item_families/:item-family-id', keyArgs] as const
}

export function useGetItemFamiliesItemFamilyId<TError = unknown>(
  args: InferRequestType<(typeof client.item_families)[':item-family-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_families)[':item-family-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetItemFamiliesItemFamilyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_families)[':item-family-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_families[':item-family-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemFamiliesItemFamilyId<TError = unknown>(
  args: InferRequestType<(typeof client.item_families)[':item-family-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_families)[':item-family-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetItemFamiliesItemFamilyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_families)[':item-family-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_families[':item-family-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemFamiliesItemFamilyIdKey() {
  return ['item_families', '/item_families/:item-family-id', 'POST'] as const
}

export function usePostItemFamiliesItemFamilyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.item_families)[':item-family-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.item_families)[':item-family-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemFamiliesItemFamilyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.item_families)[':item-family-id']['$post']> },
      ) => parseResponse(client.item_families[':item-family-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsProductIdKey(
  args: InferRequestType<(typeof client.products)[':product-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products/:product-id', keyArgs] as const
}

export function useGetProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':product-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':product-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':product-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':product-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductsProductIdKey() {
  return ['products', '/products/:product-id', 'POST'] as const
}

export function usePostProductsProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product-id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.products)[':product-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.products)[':product-id']['$post']> },
      ) => parseResponse(client.products[':product-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductsProductIdDeleteKey() {
  return ['products', '/products/:product-id/delete', 'POST'] as const
}

export function usePostProductsProductIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.products)[':product-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.products)[':product-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsProductIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.products)[':product-id']['delete']['$post']> },
      ) => parseResponse(client.products[':product-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductsProductIdUpdateOptionsKey() {
  return ['products', '/products/:product-id/update_options', 'POST'] as const
}

export function usePostProductsProductIdUpdateOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.products)[':product-id']['update_options']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.products)[':product-id']['update_options']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsProductIdUpdateOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.products)[':product-id']['update_options']['$post']>
        },
      ) => parseResponse(client.products[':product-id'].update_options.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsKey(args: InferRequestType<typeof client.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products', keyArgs] as const
}

export function useGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostProductsKey() {
  return ['products', '/products', 'POST'] as const
}

export function usePostProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.products.$post> }) =>
        parseResponse(client.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsProductIdVariantsKey(
  args: InferRequestType<(typeof client.products)[':product-id']['variants']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products/:product-id/variants', keyArgs] as const
}

export function useGetProductsProductIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':product-id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products)[':product-id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsProductIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products)[':product-id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':product-id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsProductIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':product-id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products)[':product-id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsProductIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products)[':product-id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':product-id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductsProductIdVariantsKey() {
  return ['products', '/products/:product-id/variants', 'POST'] as const
}

export function usePostProductsProductIdVariants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.products)[':product-id']['variants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.products)[':product-id']['variants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsProductIdVariantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.products)[':product-id']['variants']['$post']> },
      ) => parseResponse(client.products[':product-id'].variants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVariantsProductVariantIdKey(
  args: InferRequestType<(typeof client.variants)[':product-variant-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['variants', '/variants/:product-variant-id', keyArgs] as const
}

export function useGetVariantsProductVariantId<TError = unknown>(
  args: InferRequestType<(typeof client.variants)[':product-variant-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variants)[':product-variant-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVariantsProductVariantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variants)[':product-variant-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variants[':product-variant-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVariantsProductVariantId<TError = unknown>(
  args: InferRequestType<(typeof client.variants)[':product-variant-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variants)[':product-variant-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVariantsProductVariantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variants)[':product-variant-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variants[':product-variant-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVariantsProductVariantIdKey() {
  return ['variants', '/variants/:product-variant-id', 'POST'] as const
}

export function usePostVariantsProductVariantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.variants)[':product-variant-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.variants)[':product-variant-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVariantsProductVariantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.variants)[':product-variant-id']['$post']> },
      ) => parseResponse(client.variants[':product-variant-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVariantsProductVariantIdDeleteKey() {
  return ['variants', '/variants/:product-variant-id/delete', 'POST'] as const
}

export function usePostVariantsProductVariantIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.variants)[':product-variant-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.variants)[':product-variant-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVariantsProductVariantIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.variants)[':product-variant-id']['delete']['$post']>
        },
      ) => parseResponse(client.variants[':product-variant-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsKey(args: InferRequestType<typeof client.items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['items', '/items', keyArgs] as const
}

export function useGetItems<TError = unknown>(
  args: InferRequestType<typeof client.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.items.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetItems<TError = unknown>(
  args: InferRequestType<typeof client.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.items.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostItemsKey() {
  return ['items', '/items', 'POST'] as const
}

export function usePostItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.items.$post> }) =>
        parseResponse(client.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemsItemIdDeleteKey() {
  return ['items', '/items/:item-id/delete', 'POST'] as const
}

export function usePostItemsItemIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.items)[':item-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.items)[':item-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.items)[':item-id']['delete']['$post']> },
      ) => parseResponse(client.items[':item-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIdKey(
  args: InferRequestType<(typeof client.items)[':item-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['items', '/items/:item-id', keyArgs] as const
}

export function useGetItemsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':item-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':item-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsItemIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':item-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':item-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':item-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':item-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsItemIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':item-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':item-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemsItemIdKey() {
  return ['items', '/items/:item-id', 'POST'] as const
}

export function usePostItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':item-id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.items)[':item-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.items)[':item-id']['$post']> },
      ) => parseResponse(client.items[':item-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPriceVariantsPriceVariantIdDeleteKey() {
  return ['price_variants', '/price_variants/:price-variant-id/delete', 'POST'] as const
}

export function usePostPriceVariantsPriceVariantIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.price_variants)[':price-variant-id']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.price_variants)[':price-variant-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPriceVariantsPriceVariantIdDeleteKey()
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
            (typeof client.price_variants)[':price-variant-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(client.price_variants[':price-variant-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPriceVariantsKey(args: InferRequestType<typeof client.price_variants.$get>) {
  const { header: _, ...keyArgs } = args
  return ['price_variants', '/price_variants', keyArgs] as const
}

export function useGetPriceVariants<TError = unknown>(
  args: InferRequestType<typeof client.price_variants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_variants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPriceVariantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_variants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.price_variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPriceVariants<TError = unknown>(
  args: InferRequestType<typeof client.price_variants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_variants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPriceVariantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_variants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.price_variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPriceVariantsKey() {
  return ['price_variants', '/price_variants', 'POST'] as const
}

export function usePostPriceVariants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_variants.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.price_variants.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPriceVariantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.price_variants.$post> }) =>
        parseResponse(client.price_variants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPriceVariantsPriceVariantIdKey(
  args: InferRequestType<(typeof client.price_variants)[':price-variant-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['price_variants', '/price_variants/:price-variant-id', keyArgs] as const
}

export function useGetPriceVariantsPriceVariantId<TError = unknown>(
  args: InferRequestType<(typeof client.price_variants)[':price-variant-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.price_variants)[':price-variant-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPriceVariantsPriceVariantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.price_variants)[':price-variant-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.price_variants[':price-variant-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPriceVariantsPriceVariantId<TError = unknown>(
  args: InferRequestType<(typeof client.price_variants)[':price-variant-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.price_variants)[':price-variant-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPriceVariantsPriceVariantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.price_variants)[':price-variant-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.price_variants[':price-variant-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPriceVariantsPriceVariantIdKey() {
  return ['price_variants', '/price_variants/:price-variant-id', 'POST'] as const
}

export function usePostPriceVariantsPriceVariantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.price_variants)[':price-variant-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.price_variants)[':price-variant-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPriceVariantsPriceVariantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.price_variants)[':price-variant-id']['$post']> },
      ) => parseResponse(client.price_variants[':price-variant-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemPricesItemPriceIdKey(
  args: InferRequestType<(typeof client.item_prices)[':item-price-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['item_prices', '/item_prices/:item-price-id', keyArgs] as const
}

export function useGetItemPricesItemPriceId<TError = unknown>(
  args: InferRequestType<(typeof client.item_prices)[':item-price-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_prices)[':item-price-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetItemPricesItemPriceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_prices)[':item-price-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_prices[':item-price-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemPricesItemPriceId<TError = unknown>(
  args: InferRequestType<(typeof client.item_prices)[':item-price-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_prices)[':item-price-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetItemPricesItemPriceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_prices)[':item-price-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_prices[':item-price-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemPricesItemPriceIdKey() {
  return ['item_prices', '/item_prices/:item-price-id', 'POST'] as const
}

export function usePostItemPricesItemPriceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.item_prices)[':item-price-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.item_prices)[':item-price-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemPricesItemPriceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.item_prices)[':item-price-id']['$post']> },
      ) => parseResponse(client.item_prices[':item-price-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemPricesItemPriceIdDeleteKey() {
  return ['item_prices', '/item_prices/:item-price-id/delete', 'POST'] as const
}

export function usePostItemPricesItemPriceIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.item_prices)[':item-price-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.item_prices)[':item-price-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemPricesItemPriceIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.item_prices)[':item-price-id']['delete']['$post']>
        },
      ) => parseResponse(client.item_prices[':item-price-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemPricesItemPriceIdApplicableItemPricesKey(
  args: InferRequestType<
    (typeof client.item_prices)[':item-price-id']['applicable_item_prices']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['item_prices', '/item_prices/:item-price-id/applicable_item_prices', keyArgs] as const
}

export function useGetItemPricesItemPriceIdApplicableItemPrices<TError = unknown>(
  args: InferRequestType<
    (typeof client.item_prices)[':item-price-id']['applicable_item_prices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.item_prices)[':item-price-id']['applicable_item_prices']['$get']
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
        ? getGetItemPricesItemPriceIdApplicableItemPricesKey(args)
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
                (typeof client.item_prices)[':item-price-id']['applicable_item_prices']['$get']
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
          client.item_prices[':item-price-id'].applicable_item_prices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemPricesItemPriceIdApplicableItemPrices<TError = unknown>(
  args: InferRequestType<
    (typeof client.item_prices)[':item-price-id']['applicable_item_prices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.item_prices)[':item-price-id']['applicable_item_prices']['$get']
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
        ? getGetItemPricesItemPriceIdApplicableItemPricesKey(args)
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
                (typeof client.item_prices)[':item-price-id']['applicable_item_prices']['$get']
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
          client.item_prices[':item-price-id'].applicable_item_prices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetItemPricesItemPriceIdApplicableItemsKey(
  args: InferRequestType<(typeof client.item_prices)[':item-price-id']['applicable_items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['item_prices', '/item_prices/:item-price-id/applicable_items', keyArgs] as const
}

export function useGetItemPricesItemPriceIdApplicableItems<TError = unknown>(
  args: InferRequestType<(typeof client.item_prices)[':item-price-id']['applicable_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.item_prices)[':item-price-id']['applicable_items']['$get']>
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
        ? getGetItemPricesItemPriceIdApplicableItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.item_prices)[':item-price-id']['applicable_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.item_prices[':item-price-id'].applicable_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemPricesItemPriceIdApplicableItems<TError = unknown>(
  args: InferRequestType<(typeof client.item_prices)[':item-price-id']['applicable_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.item_prices)[':item-price-id']['applicable_items']['$get']>
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
        ? getGetItemPricesItemPriceIdApplicableItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.item_prices)[':item-price-id']['applicable_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.item_prices[':item-price-id'].applicable_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetItemPricesKey(args: InferRequestType<typeof client.item_prices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['item_prices', '/item_prices', keyArgs] as const
}

export function useGetItemPrices<TError = unknown>(
  args: InferRequestType<typeof client.item_prices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_prices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemPricesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_prices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemPrices<TError = unknown>(
  args: InferRequestType<typeof client.item_prices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_prices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemPricesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_prices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemPricesKey() {
  return ['item_prices', '/item_prices', 'POST'] as const
}

export function usePostItemPrices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_prices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.item_prices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemPricesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item_prices.$post> }) =>
        parseResponse(client.item_prices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAttachedItemsAttachedItemIdKey(
  args: InferRequestType<(typeof client.attached_items)[':attached-item-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['attached_items', '/attached_items/:attached-item-id', keyArgs] as const
}

export function useGetAttachedItemsAttachedItemId<TError = unknown>(
  args: InferRequestType<(typeof client.attached_items)[':attached-item-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attached_items)[':attached-item-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttachedItemsAttachedItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attached_items)[':attached-item-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.attached_items[':attached-item-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttachedItemsAttachedItemId<TError = unknown>(
  args: InferRequestType<(typeof client.attached_items)[':attached-item-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attached_items)[':attached-item-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttachedItemsAttachedItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attached_items)[':attached-item-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.attached_items[':attached-item-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAttachedItemsAttachedItemIdKey() {
  return ['attached_items', '/attached_items/:attached-item-id', 'POST'] as const
}

export function usePostAttachedItemsAttachedItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attached_items)[':attached-item-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attached_items)[':attached-item-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachedItemsAttachedItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.attached_items)[':attached-item-id']['$post']> },
      ) => parseResponse(client.attached_items[':attached-item-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIdAttachedItemsKey(
  args: InferRequestType<(typeof client.items)[':item-id']['attached_items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['items', '/items/:item-id/attached_items', keyArgs] as const
}

export function useGetItemsItemIdAttachedItems<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':item-id']['attached_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':item-id']['attached_items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetItemsItemIdAttachedItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':item-id']['attached_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':item-id'].attached_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdAttachedItems<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':item-id']['attached_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':item-id']['attached_items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetItemsItemIdAttachedItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':item-id']['attached_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':item-id'].attached_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemsItemIdAttachedItemsKey() {
  return ['items', '/items/:item-id/attached_items', 'POST'] as const
}

export function usePostItemsItemIdAttachedItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.items)[':item-id']['attached_items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.items)[':item-id']['attached_items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdAttachedItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.items)[':item-id']['attached_items']['$post']> },
      ) => parseResponse(client.items[':item-id'].attached_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttachedItemsAttachedItemIdDeleteKey() {
  return ['attached_items', '/attached_items/:attached-item-id/delete', 'POST'] as const
}

export function usePostAttachedItemsAttachedItemIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.attached_items)[':attached-item-id']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attached_items)[':attached-item-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachedItemsAttachedItemIdDeleteKey()
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
            (typeof client.attached_items)[':attached-item-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(client.attached_items[':attached-item-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDifferentialPricesDifferentialPriceIdDeleteKey() {
  return [
    'differential_prices',
    '/differential_prices/:differential-price-id/delete',
    'POST',
  ] as const
}

export function usePostDifferentialPricesDifferentialPriceIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.differential_prices)[':differential-price-id']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.differential_prices)[':differential-price-id']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDifferentialPricesDifferentialPriceIdDeleteKey()
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
            (typeof client.differential_prices)[':differential-price-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.differential_prices[':differential-price-id'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostItemPricesItemPriceIdDifferentialPricesKey() {
  return ['item_prices', '/item_prices/:item-price-id/differential_prices', 'POST'] as const
}

export function usePostItemPricesItemPriceIdDifferentialPrices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.item_prices)[':item-price-id']['differential_prices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.item_prices)[':item-price-id']['differential_prices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemPricesItemPriceIdDifferentialPricesKey()
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
            (typeof client.item_prices)[':item-price-id']['differential_prices']['$post']
          >
        },
      ) =>
        parseResponse(
          client.item_prices[':item-price-id'].differential_prices.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDifferentialPricesKey(
  args: InferRequestType<typeof client.differential_prices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['differential_prices', '/differential_prices', keyArgs] as const
}

export function useGetDifferentialPrices<TError = unknown>(
  args: InferRequestType<typeof client.differential_prices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.differential_prices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDifferentialPricesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.differential_prices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.differential_prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDifferentialPrices<TError = unknown>(
  args: InferRequestType<typeof client.differential_prices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.differential_prices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDifferentialPricesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.differential_prices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.differential_prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDifferentialPricesDifferentialPriceIdKey(
  args: InferRequestType<(typeof client.differential_prices)[':differential-price-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['differential_prices', '/differential_prices/:differential-price-id', keyArgs] as const
}

export function useGetDifferentialPricesDifferentialPriceId<TError = unknown>(
  args: InferRequestType<(typeof client.differential_prices)[':differential-price-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.differential_prices)[':differential-price-id']['$get']>
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
        ? getGetDifferentialPricesDifferentialPriceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.differential_prices)[':differential-price-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.differential_prices[':differential-price-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDifferentialPricesDifferentialPriceId<TError = unknown>(
  args: InferRequestType<(typeof client.differential_prices)[':differential-price-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.differential_prices)[':differential-price-id']['$get']>
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
        ? getGetDifferentialPricesDifferentialPriceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.differential_prices)[':differential-price-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.differential_prices[':differential-price-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDifferentialPricesDifferentialPriceIdKey() {
  return ['differential_prices', '/differential_prices/:differential-price-id', 'POST'] as const
}

export function usePostDifferentialPricesDifferentialPriceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.differential_prices)[':differential-price-id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.differential_prices)[':differential-price-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDifferentialPricesDifferentialPriceIdKey()
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
            (typeof client.differential_prices)[':differential-price-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.differential_prices[':differential-price-id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPriceRampsKey(args: InferRequestType<typeof client.price_ramps.$get>) {
  const { header: _, ...keyArgs } = args
  return ['price_ramps', '/price_ramps', keyArgs] as const
}

export function useGetPriceRamps<TError = unknown>(
  args: InferRequestType<typeof client.price_ramps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_ramps.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPriceRampsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_ramps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.price_ramps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPriceRamps<TError = unknown>(
  args: InferRequestType<typeof client.price_ramps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_ramps.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPriceRampsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_ramps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.price_ramps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPriceRampsKey() {
  return ['price_ramps', '/price_ramps', 'POST'] as const
}

export function usePostPriceRamps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_ramps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.price_ramps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPriceRampsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.price_ramps.$post> }) =>
        parseResponse(client.price_ramps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPriceRampsPriceRampIdDeleteKey() {
  return ['price_ramps', '/price_ramps/:price-ramp-id/delete', 'POST'] as const
}

export function usePostPriceRampsPriceRampIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.price_ramps)[':price-ramp-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.price_ramps)[':price-ramp-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPriceRampsPriceRampIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.price_ramps)[':price-ramp-id']['delete']['$post']>
        },
      ) => parseResponse(client.price_ramps[':price-ramp-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPriceRampsPriceRampIdKey(
  args: InferRequestType<(typeof client.price_ramps)[':price-ramp-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['price_ramps', '/price_ramps/:price-ramp-id', keyArgs] as const
}

export function useGetPriceRampsPriceRampId<TError = unknown>(
  args: InferRequestType<(typeof client.price_ramps)[':price-ramp-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.price_ramps)[':price-ramp-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPriceRampsPriceRampIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.price_ramps)[':price-ramp-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.price_ramps[':price-ramp-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPriceRampsPriceRampId<TError = unknown>(
  args: InferRequestType<(typeof client.price_ramps)[':price-ramp-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.price_ramps)[':price-ramp-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPriceRampsPriceRampIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.price_ramps)[':price-ramp-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.price_ramps[':price-ramp-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPriceRampsPriceRampIdKey() {
  return ['price_ramps', '/price_ramps/:price-ramp-id', 'POST'] as const
}

export function usePostPriceRampsPriceRampId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.price_ramps)[':price-ramp-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.price_ramps)[':price-ramp-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPriceRampsPriceRampIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.price_ramps)[':price-ramp-id']['$post']> },
      ) => parseResponse(client.price_ramps[':price-ramp-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigurationsKey(args: InferRequestType<typeof client.configurations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['configurations', '/configurations', keyArgs] as const
}

export function useGetConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configurations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigurationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configurations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configurations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigurationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configurations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeaturesKey(args: InferRequestType<typeof client.features.$get>) {
  const { header: _, ...keyArgs } = args
  return ['features', '/features', keyArgs] as const
}

export function useGetFeatures<TError = unknown>(
  args: InferRequestType<typeof client.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.features.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFeatures<TError = unknown>(
  args: InferRequestType<typeof client.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.features.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFeaturesKey() {
  return ['features', '/features', 'POST'] as const
}

export function usePostFeatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.features.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.features.$post> }) =>
        parseResponse(client.features.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeaturesFeatureIdDeleteKey() {
  return ['features', '/features/:feature-id/delete', 'POST'] as const
}

export function usePostFeaturesFeatureIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.features)[':feature-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.features)[':feature-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeaturesFeatureIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.features)[':feature-id']['delete']['$post']> },
      ) => parseResponse(client.features[':feature-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFeaturesFeatureIdKey(
  args: InferRequestType<(typeof client.features)[':feature-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['features', '/features/:feature-id', keyArgs] as const
}

export function useGetFeaturesFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.features)[':feature-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':feature-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFeaturesFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':feature-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.features[':feature-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeaturesFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.features)[':feature-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':feature-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFeaturesFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':feature-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.features[':feature-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFeaturesFeatureIdKey() {
  return ['features', '/features/:feature-id', 'POST'] as const
}

export function usePostFeaturesFeatureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':feature-id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.features)[':feature-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeaturesFeatureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.features)[':feature-id']['$post']> },
      ) => parseResponse(client.features[':feature-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeaturesFeatureIdArchiveCommandKey() {
  return ['features', '/features/:feature-id/archive_command', 'POST'] as const
}

export function usePostFeaturesFeatureIdArchiveCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.features)[':feature-id']['archive_command']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.features)[':feature-id']['archive_command']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeaturesFeatureIdArchiveCommandKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.features)[':feature-id']['archive_command']['$post']>
        },
      ) => parseResponse(client.features[':feature-id'].archive_command.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeaturesFeatureIdActivateCommandKey() {
  return ['features', '/features/:feature-id/activate_command', 'POST'] as const
}

export function usePostFeaturesFeatureIdActivateCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.features)[':feature-id']['activate_command']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.features)[':feature-id']['activate_command']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeaturesFeatureIdActivateCommandKey()
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
            (typeof client.features)[':feature-id']['activate_command']['$post']
          >
        },
      ) => parseResponse(client.features[':feature-id'].activate_command.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeaturesFeatureIdReactivateCommandKey() {
  return ['features', '/features/:feature-id/reactivate_command', 'POST'] as const
}

export function usePostFeaturesFeatureIdReactivateCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.features)[':feature-id']['reactivate_command']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.features)[':feature-id']['reactivate_command']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeaturesFeatureIdReactivateCommandKey()
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
            (typeof client.features)[':feature-id']['reactivate_command']['$post']
          >
        },
      ) =>
        parseResponse(client.features[':feature-id'].reactivate_command.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreditUnitsKey(args: InferRequestType<typeof client.credit_units.$get>) {
  const { header: _, ...keyArgs } = args
  return ['credit_units', '/credit_units', keyArgs] as const
}

export function useGetCreditUnits<TError = unknown>(
  args: InferRequestType<typeof client.credit_units.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_units.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreditUnitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_units.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credit_units.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditUnits<TError = unknown>(
  args: InferRequestType<typeof client.credit_units.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_units.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreditUnitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_units.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credit_units.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreditUnitsKey() {
  return ['credit_units', '/credit_units', 'POST'] as const
}

export function usePostCreditUnits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_units.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit_units.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditUnitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.credit_units.$post> }) =>
        parseResponse(client.credit_units.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditUnitsCreditUnitIdArchiveCommandKey() {
  return ['credit_units', '/credit_units/:credit-unit-id/archive_command', 'POST'] as const
}

export function usePostCreditUnitsCreditUnitIdArchiveCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.credit_units)[':credit-unit-id']['archive_command']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_units)[':credit-unit-id']['archive_command']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditUnitsCreditUnitIdArchiveCommandKey()
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
            (typeof client.credit_units)[':credit-unit-id']['archive_command']['$post']
          >
        },
      ) =>
        parseResponse(
          client.credit_units[':credit-unit-id'].archive_command.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCreditUnitsCreditUnitIdKey() {
  return ['credit_units', '/credit_units/:credit-unit-id', 'POST'] as const
}

export function usePostCreditUnitsCreditUnitId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_units)[':credit-unit-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_units)[':credit-unit-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditUnitsCreditUnitIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.credit_units)[':credit-unit-id']['$post']> },
      ) => parseResponse(client.credit_units[':credit-unit-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditUnitsCreditUnitIdReactivateCommandKey() {
  return ['credit_units', '/credit_units/:credit-unit-id/reactivate_command', 'POST'] as const
}

export function usePostCreditUnitsCreditUnitIdReactivateCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.credit_units)[':credit-unit-id']['reactivate_command']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_units)[':credit-unit-id']['reactivate_command']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditUnitsCreditUnitIdReactivateCommandKey()
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
            (typeof client.credit_units)[':credit-unit-id']['reactivate_command']['$post']
          >
        },
      ) =>
        parseResponse(
          client.credit_units[':credit-unit-id'].reactivate_command.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdSubscriptionEntitlementsSetAvailabilityKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/subscription_entitlements/set_availability',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdSubscriptionEntitlementsSetAvailability<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['set_availability']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['set_availability']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSubscriptionsSubscriptionIdSubscriptionEntitlementsSetAvailabilityKey()
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
            (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['set_availability']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].subscription_entitlements.set_availability.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdSubscriptionEntitlementsKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/subscription_entitlements',
    keyArgs,
  ] as const
}

export function useGetSubscriptionsSubscriptionIdSubscriptionEntitlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['$get']
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
        ? getGetSubscriptionsSubscriptionIdSubscriptionEntitlementsKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['$get']
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
          client.subscriptions[':subscription-id'].subscription_entitlements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdSubscriptionEntitlements<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['$get']
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
        ? getGetSubscriptionsSubscriptionIdSubscriptionEntitlementsKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['$get']
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
          client.subscriptions[':subscription-id'].subscription_entitlements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersCustomerIdCustomerEntitlementsKey(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['customer_entitlements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:customer-id/customer_entitlements', keyArgs] as const
}

export function useGetCustomersCustomerIdCustomerEntitlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['customer_entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['customer_entitlements']['$get']>
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
        ? getGetCustomersCustomerIdCustomerEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['customer_entitlements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customers[':customer-id'].customer_entitlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdCustomerEntitlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['customer_entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['customer_entitlements']['$get']>
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
        ? getGetCustomersCustomerIdCustomerEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['customer_entitlements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customers[':customer-id'].customer_entitlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFeaturesFeatureIdItemEntitlementsKey(
  args: InferRequestType<(typeof client.features)[':feature-id']['item_entitlements']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['features', '/features/:feature-id/item_entitlements', keyArgs] as const
}

export function useGetFeaturesFeatureIdItemEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.features)[':feature-id']['item_entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.features)[':feature-id']['item_entitlements']['$get']>
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
        ? getGetFeaturesFeatureIdItemEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.features)[':feature-id']['item_entitlements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.features[':feature-id'].item_entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeaturesFeatureIdItemEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.features)[':feature-id']['item_entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.features)[':feature-id']['item_entitlements']['$get']>
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
        ? getGetFeaturesFeatureIdItemEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.features)[':feature-id']['item_entitlements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.features[':feature-id'].item_entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFeaturesFeatureIdItemEntitlementsKey() {
  return ['features', '/features/:feature-id/item_entitlements', 'POST'] as const
}

export function usePostFeaturesFeatureIdItemEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.features)[':feature-id']['item_entitlements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.features)[':feature-id']['item_entitlements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeaturesFeatureIdItemEntitlementsKey()
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
            (typeof client.features)[':feature-id']['item_entitlements']['$post']
          >
        },
      ) =>
        parseResponse(client.features[':feature-id'].item_entitlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIdItemEntitlementsKey(
  args: InferRequestType<(typeof client.items)[':item-id']['item_entitlements']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['items', '/items/:item-id/item_entitlements', keyArgs] as const
}

export function useGetItemsItemIdItemEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':item-id']['item_entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':item-id']['item_entitlements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetItemsItemIdItemEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':item-id']['item_entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.items[':item-id'].item_entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdItemEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':item-id']['item_entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':item-id']['item_entitlements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetItemsItemIdItemEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':item-id']['item_entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.items[':item-id'].item_entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemsItemIdItemEntitlementsKey() {
  return ['items', '/items/:item-id/item_entitlements', 'POST'] as const
}

export function usePostItemsItemIdItemEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.items)[':item-id']['item_entitlements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.items)[':item-id']['item_entitlements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdItemEntitlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.items)[':item-id']['item_entitlements']['$post']>
        },
      ) => parseResponse(client.items[':item-id'].item_entitlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEntitlementsKey(args: InferRequestType<typeof client.entitlements.$get>) {
  const { header: _, ...keyArgs } = args
  return ['entitlements', '/entitlements', keyArgs] as const
}

export function useGetEntitlements<TError = unknown>(
  args: InferRequestType<typeof client.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitlementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitlements<TError = unknown>(
  args: InferRequestType<typeof client.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitlementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEntitlementsKey() {
  return ['entitlements', '/entitlements', 'POST'] as const
}

export function usePostEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.entitlements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEntitlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.entitlements.$post> }) =>
        parseResponse(client.entitlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInAppSubscriptionsInAppSubscriptionAppIdRetrieveKey() {
  return [
    'in_app_subscriptions',
    '/in_app_subscriptions/:in-app-subscription-app-id/retrieve',
    'POST',
  ] as const
}

export function usePostInAppSubscriptionsInAppSubscriptionAppIdRetrieve<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['retrieve']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['retrieve']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInAppSubscriptionsInAppSubscriptionAppIdRetrieveKey()
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
            (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['retrieve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.in_app_subscriptions[':in-app-subscription-app-id'].retrieve.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInAppSubscriptionsInAppSubscriptionAppIdImportReceiptKey() {
  return [
    'in_app_subscriptions',
    '/in_app_subscriptions/:in-app-subscription-app-id/import_receipt',
    'POST',
  ] as const
}

export function usePostInAppSubscriptionsInAppSubscriptionAppIdImportReceipt<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['import_receipt']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['import_receipt']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInAppSubscriptionsInAppSubscriptionAppIdImportReceiptKey()
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
            (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['import_receipt']['$post']
          >
        },
      ) =>
        parseResponse(
          client.in_app_subscriptions[':in-app-subscription-app-id'].import_receipt.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInAppSubscriptionsInAppSubscriptionAppIdImportSubscriptionKey() {
  return [
    'in_app_subscriptions',
    '/in_app_subscriptions/:in-app-subscription-app-id/import_subscription',
    'POST',
  ] as const
}

export function usePostInAppSubscriptionsInAppSubscriptionAppIdImportSubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['import_subscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['import_subscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInAppSubscriptionsInAppSubscriptionAppIdImportSubscriptionKey()
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
            (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['import_subscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client.in_app_subscriptions[':in-app-subscription-app-id'].import_subscription.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInAppSubscriptionsInAppSubscriptionAppIdProcessPurchaseCommandKey() {
  return [
    'in_app_subscriptions',
    '/in_app_subscriptions/:in-app-subscription-app-id/process_purchase_command',
    'POST',
  ] as const
}

export function usePostInAppSubscriptionsInAppSubscriptionAppIdProcessPurchaseCommand<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['process_purchase_command']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['process_purchase_command']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostInAppSubscriptionsInAppSubscriptionAppIdProcessPurchaseCommandKey()
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
            (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['process_purchase_command']['$post']
          >
        },
      ) =>
        parseResponse(
          client.in_app_subscriptions[':in-app-subscription-app-id'].process_purchase_command.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNonSubscriptionsNonSubscriptionAppIdOneTimePurchaseKey() {
  return [
    'non_subscriptions',
    '/non_subscriptions/:non-subscription-app-id/one_time_purchase',
    'POST',
  ] as const
}

export function usePostNonSubscriptionsNonSubscriptionAppIdOneTimePurchase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.non_subscriptions)[':non-subscription-app-id']['one_time_purchase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.non_subscriptions)[':non-subscription-app-id']['one_time_purchase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNonSubscriptionsNonSubscriptionAppIdOneTimePurchaseKey()
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
            (typeof client.non_subscriptions)[':non-subscription-app-id']['one_time_purchase']['$post']
          >
        },
      ) =>
        parseResponse(
          client.non_subscriptions[':non-subscription-app-id'].one_time_purchase.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdEntitlementOverridesKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'subscriptions',
    '/subscriptions/:subscription-id/entitlement_overrides',
    keyArgs,
  ] as const
}

export function useGetSubscriptionsSubscriptionIdEntitlementOverrides<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$get']
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
        ? getGetSubscriptionsSubscriptionIdEntitlementOverridesKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$get']
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
          client.subscriptions[':subscription-id'].entitlement_overrides.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdEntitlementOverrides<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$get']
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
        ? getGetSubscriptionsSubscriptionIdEntitlementOverridesKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$get']
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
          client.subscriptions[':subscription-id'].entitlement_overrides.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdEntitlementOverridesKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/entitlement_overrides', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdEntitlementOverrides<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdEntitlementOverridesKey()
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
            (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].entitlement_overrides.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessEntitiesBusinessEntityIdKey(
  args: InferRequestType<(typeof client.business_entities)[':business-entity-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_entities', '/business_entities/:business-entity-id', keyArgs] as const
}

export function useGetBusinessEntitiesBusinessEntityId<TError = unknown>(
  args: InferRequestType<(typeof client.business_entities)[':business-entity-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_entities)[':business-entity-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessEntitiesBusinessEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_entities)[':business-entity-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_entities[':business-entity-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessEntitiesBusinessEntityId<TError = unknown>(
  args: InferRequestType<(typeof client.business_entities)[':business-entity-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_entities)[':business-entity-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessEntitiesBusinessEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_entities)[':business-entity-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_entities[':business-entity-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessEntitiesBusinessEntityIdKey() {
  return ['business_entities', '/business_entities/:business-entity-id', 'POST'] as const
}

export function usePostBusinessEntitiesBusinessEntityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.business_entities)[':business-entity-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_entities)[':business-entity-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessEntitiesBusinessEntityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.business_entities)[':business-entity-id']['$post']>
        },
      ) => parseResponse(client.business_entities[':business-entity-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessEntitiesKey(
  args: InferRequestType<typeof client.business_entities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_entities', '/business_entities', keyArgs] as const
}

export function useGetBusinessEntities<TError = unknown>(
  args: InferRequestType<typeof client.business_entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_entities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_entities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessEntities<TError = unknown>(
  args: InferRequestType<typeof client.business_entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_entities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_entities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessEntitiesKey() {
  return ['business_entities', '/business_entities', 'POST'] as const
}

export function usePostBusinessEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_entities.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.business_entities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.business_entities.$post> }) =>
        parseResponse(client.business_entities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessEntitiesTransfersKey(
  args: InferRequestType<typeof client.business_entities.transfers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_entities', '/business_entities/transfers', keyArgs] as const
}

export function useGetBusinessEntitiesTransfers<TError = unknown>(
  args: InferRequestType<typeof client.business_entities.transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_entities.transfers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessEntitiesTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_entities.transfers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_entities.transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessEntitiesTransfers<TError = unknown>(
  args: InferRequestType<typeof client.business_entities.transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_entities.transfers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessEntitiesTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.business_entities.transfers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_entities.transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessEntitiesTransfersKey() {
  return ['business_entities', '/business_entities/transfers', 'POST'] as const
}

export function usePostBusinessEntitiesTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.business_entities.transfers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.business_entities.transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessEntitiesTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.business_entities.transfers.$post> },
      ) => parseResponse(client.business_entities.transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPurchasesKey() {
  return ['purchases', '/purchases', 'POST'] as const
}

export function usePostPurchases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchases.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.purchases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPurchasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.purchases.$post> }) =>
        parseResponse(client.purchases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPurchasesEstimateKey() {
  return ['purchases', '/purchases/estimate', 'POST'] as const
}

export function usePostPurchasesEstimate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchases.estimate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.purchases.estimate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPurchasesEstimateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.purchases.estimate.$post> }) =>
        parseResponse(client.purchases.estimate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdPaymentVouchersKey(
  args: InferRequestType<(typeof client.customers)[':customer-id']['payment_vouchers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:customer-id/payment_vouchers', keyArgs] as const
}

export function useGetCustomersCustomerIdPaymentVouchers<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['payment_vouchers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['payment_vouchers']['$get']>
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
        ? getGetCustomersCustomerIdPaymentVouchersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['payment_vouchers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer-id'].payment_vouchers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdPaymentVouchers<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer-id']['payment_vouchers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['payment_vouchers']['$get']>
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
        ? getGetCustomersCustomerIdPaymentVouchersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer-id']['payment_vouchers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer-id'].payment_vouchers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIdPaymentVouchersKey(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payment_vouchers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:invoice-id/payment_vouchers', keyArgs] as const
}

export function useGetInvoicesInvoiceIdPaymentVouchers<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payment_vouchers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['payment_vouchers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvoicesInvoiceIdPaymentVouchersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['payment_vouchers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices[':invoice-id'].payment_vouchers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceIdPaymentVouchers<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payment_vouchers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['payment_vouchers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvoicesInvoiceIdPaymentVouchersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':invoice-id']['payment_vouchers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices[':invoice-id'].payment_vouchers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentVouchersPaymentVoucherIdKey(
  args: InferRequestType<(typeof client.payment_vouchers)[':payment-voucher-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment_vouchers', '/payment_vouchers/:payment-voucher-id', keyArgs] as const
}

export function useGetPaymentVouchersPaymentVoucherId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_vouchers)[':payment-voucher-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_vouchers)[':payment-voucher-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentVouchersPaymentVoucherIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_vouchers)[':payment-voucher-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payment_vouchers[':payment-voucher-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentVouchersPaymentVoucherId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_vouchers)[':payment-voucher-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_vouchers)[':payment-voucher-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentVouchersPaymentVoucherIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_vouchers)[':payment-voucher-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payment_vouchers[':payment-voucher-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentVouchersKey() {
  return ['payment_vouchers', '/payment_vouchers', 'POST'] as const
}

export function usePostPaymentVouchers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_vouchers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_vouchers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentVouchersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payment_vouchers.$post> }) =>
        parseResponse(client.payment_vouchers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCsvTaxRulesKey() {
  return ['csv_tax_rules', '/csv_tax_rules', 'POST'] as const
}

export function usePostCsvTaxRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.csv_tax_rules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.csv_tax_rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCsvTaxRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.csv_tax_rules.$post> }) =>
        parseResponse(client.csv_tax_rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationDetailsKey(
  args: InferRequestType<typeof client.organization_details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['organization_details', '/organization_details', keyArgs] as const
}

export function useGetOrganizationDetails<TError = unknown>(
  args: InferRequestType<typeof client.organization_details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_details.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationDetails<TError = unknown>(
  args: InferRequestType<typeof client.organization_details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_details.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationDetailsKey() {
  return ['organization_details', '/organization_details', 'POST'] as const
}

export function usePostOrganizationDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_details.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization_details.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization_details.$post> },
      ) => parseResponse(client.organization_details.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationDetailsOrganizationDetailIdKey(
  args: InferRequestType<(typeof client.organization_details)[':organization-detail-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organization_details', '/organization_details/:organization-detail-id', keyArgs] as const
}

export function useGetOrganizationDetailsOrganizationDetailId<TError = unknown>(
  args: InferRequestType<(typeof client.organization_details)[':organization-detail-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization_details)[':organization-detail-id']['$get']>
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
        ? getGetOrganizationDetailsOrganizationDetailIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization_details)[':organization-detail-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization_details[':organization-detail-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationDetailsOrganizationDetailId<TError = unknown>(
  args: InferRequestType<(typeof client.organization_details)[':organization-detail-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization_details)[':organization-detail-id']['$get']>
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
        ? getGetOrganizationDetailsOrganizationDetailIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization_details)[':organization-detail-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization_details[':organization-detail-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCurrenciesSiteCurrencyIdAddScheduleKey() {
  return ['currencies', '/currencies/:site-currency-id/add_schedule', 'POST'] as const
}

export function usePostCurrenciesSiteCurrencyIdAddSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.currencies)[':site-currency-id']['add_schedule']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.currencies)[':site-currency-id']['add_schedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCurrenciesSiteCurrencyIdAddScheduleKey()
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
            (typeof client.currencies)[':site-currency-id']['add_schedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.currencies[':site-currency-id'].add_schedule.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCurrenciesKey() {
  return ['currencies', '/currencies', 'POST'] as const
}

export function usePostCurrencies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.currencies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCurrenciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.currencies.$post> }) =>
        parseResponse(client.currencies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCurrenciesSiteCurrencyIdKey(
  args: InferRequestType<(typeof client.currencies)[':site-currency-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['currencies', '/currencies/:site-currency-id', keyArgs] as const
}

export function useGetCurrenciesSiteCurrencyId<TError = unknown>(
  args: InferRequestType<(typeof client.currencies)[':site-currency-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.currencies)[':site-currency-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCurrenciesSiteCurrencyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.currencies)[':site-currency-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currencies[':site-currency-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCurrenciesSiteCurrencyId<TError = unknown>(
  args: InferRequestType<(typeof client.currencies)[':site-currency-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.currencies)[':site-currency-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCurrenciesSiteCurrencyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.currencies)[':site-currency-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currencies[':site-currency-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCurrenciesSiteCurrencyIdKey() {
  return ['currencies', '/currencies/:site-currency-id', 'POST'] as const
}

export function usePostCurrenciesSiteCurrencyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.currencies)[':site-currency-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.currencies)[':site-currency-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCurrenciesSiteCurrencyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.currencies)[':site-currency-id']['$post']> },
      ) => parseResponse(client.currencies[':site-currency-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCurrenciesSiteCurrencyIdRemoveScheduleKey() {
  return ['currencies', '/currencies/:site-currency-id/remove_schedule', 'POST'] as const
}

export function usePostCurrenciesSiteCurrencyIdRemoveSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.currencies)[':site-currency-id']['remove_schedule']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.currencies)[':site-currency-id']['remove_schedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCurrenciesSiteCurrencyIdRemoveScheduleKey()
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
            (typeof client.currencies)[':site-currency-id']['remove_schedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.currencies[':site-currency-id'].remove_schedule.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCurrenciesListKey(
  args: InferRequestType<typeof client.currencies.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['currencies', '/currencies/list', keyArgs] as const
}

export function useGetCurrenciesList<TError = unknown>(
  args: InferRequestType<typeof client.currencies.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurrenciesListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currencies.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCurrenciesList<TError = unknown>(
  args: InferRequestType<typeof client.currencies.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurrenciesListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currencies.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRampsRampIdKey(
  args: InferRequestType<(typeof client.ramps)[':ramp-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ramps', '/ramps/:ramp-id', keyArgs] as const
}

export function useGetRampsRampId<TError = unknown>(
  args: InferRequestType<(typeof client.ramps)[':ramp-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ramps)[':ramp-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRampsRampIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ramps)[':ramp-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ramps[':ramp-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRampsRampId<TError = unknown>(
  args: InferRequestType<(typeof client.ramps)[':ramp-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ramps)[':ramp-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRampsRampIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ramps)[':ramp-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ramps[':ramp-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdCreateRampKey() {
  return ['subscriptions', '/subscriptions/:subscription-id/create_ramp', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdCreateRamp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':subscription-id']['create_ramp']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription-id']['create_ramp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdCreateRampKey()
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
            (typeof client.subscriptions)[':subscription-id']['create_ramp']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscription-id'].create_ramp.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRampsKey(args: InferRequestType<typeof client.ramps.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ramps', '/ramps', keyArgs] as const
}

export function useGetRamps<TError = unknown>(
  args: InferRequestType<typeof client.ramps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ramps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRampsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ramps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ramps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRamps<TError = unknown>(
  args: InferRequestType<typeof client.ramps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ramps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRampsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ramps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ramps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRampsRampIdUpdateKey() {
  return ['ramps', '/ramps/:ramp-id/update', 'POST'] as const
}

export function usePostRampsRampIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ramps)[':ramp-id']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ramps)[':ramp-id']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRampsRampIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ramps)[':ramp-id']['update']['$post']> },
      ) => parseResponse(client.ramps[':ramp-id'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRampsRampIdDeleteKey() {
  return ['ramps', '/ramps/:ramp-id/delete', 'POST'] as const
}

export function usePostRampsRampIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ramps)[':ramp-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ramps)[':ramp-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRampsRampIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ramps)[':ramp-id']['delete']['$post']> },
      ) => parseResponse(client.ramps[':ramp-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentScheduleSchemesPaymentScheduleSchemeIdKey(
  args: InferRequestType<
    (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'payment_schedule_schemes',
    '/payment_schedule_schemes/:payment-schedule-scheme-id',
    keyArgs,
  ] as const
}

export function useGetPaymentScheduleSchemesPaymentScheduleSchemeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['$get']
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
        ? getGetPaymentScheduleSchemesPaymentScheduleSchemeIdKey(args)
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
                (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['$get']
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
          client.payment_schedule_schemes[':payment-schedule-scheme-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentScheduleSchemesPaymentScheduleSchemeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['$get']
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
        ? getGetPaymentScheduleSchemesPaymentScheduleSchemeIdKey(args)
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
                (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['$get']
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
          client.payment_schedule_schemes[':payment-schedule-scheme-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentScheduleSchemesKey(
  args: InferRequestType<typeof client.payment_schedule_schemes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment_schedule_schemes', '/payment_schedule_schemes', keyArgs] as const
}

export function useGetPaymentScheduleSchemes<TError = unknown>(
  args: InferRequestType<typeof client.payment_schedule_schemes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_schedule_schemes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentScheduleSchemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_schedule_schemes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_schedule_schemes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentScheduleSchemes<TError = unknown>(
  args: InferRequestType<typeof client.payment_schedule_schemes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_schedule_schemes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentScheduleSchemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_schedule_schemes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_schedule_schemes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentScheduleSchemesKey() {
  return ['payment_schedule_schemes', '/payment_schedule_schemes', 'POST'] as const
}

export function usePostPaymentScheduleSchemes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payment_schedule_schemes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_schedule_schemes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentScheduleSchemesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_schedule_schemes.$post> },
      ) => parseResponse(client.payment_schedule_schemes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentScheduleSchemesPaymentScheduleSchemeIdDeleteKey() {
  return [
    'payment_schedule_schemes',
    '/payment_schedule_schemes/:payment-schedule-scheme-id/delete',
    'POST',
  ] as const
}

export function usePostPaymentScheduleSchemesPaymentScheduleSchemeIdDelete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentScheduleSchemesPaymentScheduleSchemeIdDeleteKey()
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
            (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_schedule_schemes[':payment-schedule-scheme-id'].delete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPc2MigrationsPc2MigrationIdContactSupportKey() {
  return ['pc2_migrations', '/pc2_migrations/:pc2-migration-id/contact_support', 'POST'] as const
}

export function usePostPc2MigrationsPc2MigrationIdContactSupport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.pc2_migrations)[':pc2-migration-id']['contact_support']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.pc2_migrations)[':pc2-migration-id']['contact_support']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPc2MigrationsPc2MigrationIdContactSupportKey()
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
            (typeof client.pc2_migrations)[':pc2-migration-id']['contact_support']['$post']
          >
        },
      ) =>
        parseResponse(
          client.pc2_migrations[':pc2-migration-id'].contact_support.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPc2MigrationsPc2MigrationIdKey(
  args: InferRequestType<(typeof client.pc2_migrations)[':pc2-migration-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pc2_migrations', '/pc2_migrations/:pc2-migration-id', keyArgs] as const
}

export function useGetPc2MigrationsPc2MigrationId<TError = unknown>(
  args: InferRequestType<(typeof client.pc2_migrations)[':pc2-migration-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pc2_migrations)[':pc2-migration-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPc2MigrationsPc2MigrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pc2_migrations)[':pc2-migration-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pc2_migrations[':pc2-migration-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPc2MigrationsPc2MigrationId<TError = unknown>(
  args: InferRequestType<(typeof client.pc2_migrations)[':pc2-migration-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pc2_migrations)[':pc2-migration-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPc2MigrationsPc2MigrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pc2_migrations)[':pc2-migration-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pc2_migrations[':pc2-migration-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPc2MigrationsKey() {
  return ['pc2_migrations', '/pc2_migrations', 'POST'] as const
}

export function usePostPc2Migrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migrations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pc2_migrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPc2MigrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pc2_migrations.$post> }) =>
        parseResponse(client.pc2_migrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPc2MigrationsPc2MigrationIdInitiateKey() {
  return ['pc2_migrations', '/pc2_migrations/:pc2-migration-id/initiate', 'POST'] as const
}

export function usePostPc2MigrationsPc2MigrationIdInitiate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.pc2_migrations)[':pc2-migration-id']['initiate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pc2_migrations)[':pc2-migration-id']['initiate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPc2MigrationsPc2MigrationIdInitiateKey()
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
            (typeof client.pc2_migrations)[':pc2-migration-id']['initiate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.pc2_migrations[':pc2-migration-id'].initiate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPc2MigrationItemFamiliesPc2MigrationItemFamilyIdDeleteKey() {
  return [
    'pc2_migration_item_families',
    '/pc2_migration_item_families/:pc2-migration-item-family-id/delete',
    'POST',
  ] as const
}

export function usePostPc2MigrationItemFamiliesPc2MigrationItemFamilyIdDelete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPc2MigrationItemFamiliesPc2MigrationItemFamilyIdDeleteKey()
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
            (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.pc2_migration_item_families[':pc2-migration-item-family-id'].delete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPc2MigrationItemFamiliesPc2MigrationItemFamilyIdKey(
  args: InferRequestType<
    (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'pc2_migration_item_families',
    '/pc2_migration_item_families/:pc2-migration-item-family-id',
    keyArgs,
  ] as const
}

export function useGetPc2MigrationItemFamiliesPc2MigrationItemFamilyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$get']
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
        ? getGetPc2MigrationItemFamiliesPc2MigrationItemFamilyIdKey(args)
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
                (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$get']
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
          client.pc2_migration_item_families[':pc2-migration-item-family-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPc2MigrationItemFamiliesPc2MigrationItemFamilyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$get']
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
        ? getGetPc2MigrationItemFamiliesPc2MigrationItemFamilyIdKey(args)
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
                (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$get']
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
          client.pc2_migration_item_families[':pc2-migration-item-family-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPc2MigrationItemFamiliesPc2MigrationItemFamilyIdKey() {
  return [
    'pc2_migration_item_families',
    '/pc2_migration_item_families/:pc2-migration-item-family-id',
    'POST',
  ] as const
}

export function usePostPc2MigrationItemFamiliesPc2MigrationItemFamilyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPc2MigrationItemFamiliesPc2MigrationItemFamilyIdKey()
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
            (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.pc2_migration_item_families[':pc2-migration-item-family-id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPc2MigrationItemFamiliesKey(
  args: InferRequestType<typeof client.pc2_migration_item_families.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['pc2_migration_item_families', '/pc2_migration_item_families', keyArgs] as const
}

export function useGetPc2MigrationItemFamilies<TError = unknown>(
  args: InferRequestType<typeof client.pc2_migration_item_families.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_item_families.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPc2MigrationItemFamiliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_item_families.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pc2_migration_item_families.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPc2MigrationItemFamilies<TError = unknown>(
  args: InferRequestType<typeof client.pc2_migration_item_families.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_item_families.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPc2MigrationItemFamiliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_item_families.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pc2_migration_item_families.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPc2MigrationItemFamiliesKey() {
  return ['pc2_migration_item_families', '/pc2_migration_item_families', 'POST'] as const
}

export function usePostPc2MigrationItemFamilies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_item_families.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.pc2_migration_item_families.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPc2MigrationItemFamiliesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.pc2_migration_item_families.$post> },
      ) => parseResponse(client.pc2_migration_item_families.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPc2MigrationItemsPc2MigrationItemIdKey(
  args: InferRequestType<(typeof client.pc2_migration_items)[':pc2-migration-item-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pc2_migration_items', '/pc2_migration_items/:pc2-migration-item-id', keyArgs] as const
}

export function useGetPc2MigrationItemsPc2MigrationItemId<TError = unknown>(
  args: InferRequestType<(typeof client.pc2_migration_items)[':pc2-migration-item-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pc2_migration_items)[':pc2-migration-item-id']['$get']>
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
        ? getGetPc2MigrationItemsPc2MigrationItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pc2_migration_items)[':pc2-migration-item-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pc2_migration_items[':pc2-migration-item-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPc2MigrationItemsPc2MigrationItemId<TError = unknown>(
  args: InferRequestType<(typeof client.pc2_migration_items)[':pc2-migration-item-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pc2_migration_items)[':pc2-migration-item-id']['$get']>
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
        ? getGetPc2MigrationItemsPc2MigrationItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pc2_migration_items)[':pc2-migration-item-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pc2_migration_items[':pc2-migration-item-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPc2MigrationItemsPc2MigrationItemIdKey() {
  return ['pc2_migration_items', '/pc2_migration_items/:pc2-migration-item-id', 'POST'] as const
}

export function usePostPc2MigrationItemsPc2MigrationItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.pc2_migration_items)[':pc2-migration-item-id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pc2_migration_items)[':pc2-migration-item-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPc2MigrationItemsPc2MigrationItemIdKey()
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
            (typeof client.pc2_migration_items)[':pc2-migration-item-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.pc2_migration_items[':pc2-migration-item-id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPc2MigrationItemsPc2MigrationItemIdDeleteKey() {
  return [
    'pc2_migration_items',
    '/pc2_migration_items/:pc2-migration-item-id/delete',
    'POST',
  ] as const
}

export function usePostPc2MigrationItemsPc2MigrationItemIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.pc2_migration_items)[':pc2-migration-item-id']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.pc2_migration_items)[':pc2-migration-item-id']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPc2MigrationItemsPc2MigrationItemIdDeleteKey()
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
            (typeof client.pc2_migration_items)[':pc2-migration-item-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.pc2_migration_items[':pc2-migration-item-id'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPc2MigrationItemsKey(
  args: InferRequestType<typeof client.pc2_migration_items.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['pc2_migration_items', '/pc2_migration_items', keyArgs] as const
}

export function useGetPc2MigrationItems<TError = unknown>(
  args: InferRequestType<typeof client.pc2_migration_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_items.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPc2MigrationItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pc2_migration_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPc2MigrationItems<TError = unknown>(
  args: InferRequestType<typeof client.pc2_migration_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_items.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPc2MigrationItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pc2_migration_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPc2MigrationItemsKey() {
  return ['pc2_migration_items', '/pc2_migration_items', 'POST'] as const
}

export function usePostPc2MigrationItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_items.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pc2_migration_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPc2MigrationItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pc2_migration_items.$post> }) =>
        parseResponse(client.pc2_migration_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPc2MigrationItemsApplicableItemsKey(
  args: InferRequestType<typeof client.pc2_migration_items.applicable_items.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['pc2_migration_items', '/pc2_migration_items/applicable_items', keyArgs] as const
}

export function useGetPc2MigrationItemsApplicableItems<TError = unknown>(
  args: InferRequestType<typeof client.pc2_migration_items.applicable_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pc2_migration_items.applicable_items.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPc2MigrationItemsApplicableItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pc2_migration_items.applicable_items.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pc2_migration_items.applicable_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPc2MigrationItemsApplicableItems<TError = unknown>(
  args: InferRequestType<typeof client.pc2_migration_items.applicable_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pc2_migration_items.applicable_items.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPc2MigrationItemsApplicableItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pc2_migration_items.applicable_items.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pc2_migration_items.applicable_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPc2MigrationItemPricesKey(
  args: InferRequestType<typeof client.pc2_migration_item_prices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['pc2_migration_item_prices', '/pc2_migration_item_prices', keyArgs] as const
}

export function useGetPc2MigrationItemPrices<TError = unknown>(
  args: InferRequestType<typeof client.pc2_migration_item_prices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_item_prices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPc2MigrationItemPricesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_item_prices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pc2_migration_item_prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPc2MigrationItemPrices<TError = unknown>(
  args: InferRequestType<typeof client.pc2_migration_item_prices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_item_prices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPc2MigrationItemPricesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pc2_migration_item_prices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pc2_migration_item_prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPc2MigrationItemPricesPc2MigrationItemPriceIdDeleteKey() {
  return [
    'pc2_migration_item_prices',
    '/pc2_migration_item_prices/:pc2-migration-item-price-id/delete',
    'POST',
  ] as const
}

export function usePostPc2MigrationItemPricesPc2MigrationItemPriceIdDelete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPc2MigrationItemPricesPc2MigrationItemPriceIdDeleteKey()
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
            (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.pc2_migration_item_prices[':pc2-migration-item-price-id'].delete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPc2MigrationItemPricesPc2MigrationItemPriceIdKey(
  args: InferRequestType<
    (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'pc2_migration_item_prices',
    '/pc2_migration_item_prices/:pc2-migration-item-price-id',
    keyArgs,
  ] as const
}

export function useGetPc2MigrationItemPricesPc2MigrationItemPriceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$get']
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
        ? getGetPc2MigrationItemPricesPc2MigrationItemPriceIdKey(args)
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
                (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$get']
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
          client.pc2_migration_item_prices[':pc2-migration-item-price-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPc2MigrationItemPricesPc2MigrationItemPriceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$get']
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
        ? getGetPc2MigrationItemPricesPc2MigrationItemPriceIdKey(args)
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
                (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$get']
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
          client.pc2_migration_item_prices[':pc2-migration-item-price-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPc2MigrationItemPricesPc2MigrationItemPriceIdKey() {
  return [
    'pc2_migration_item_prices',
    '/pc2_migration_item_prices/:pc2-migration-item-price-id',
    'POST',
  ] as const
}

export function usePostPc2MigrationItemPricesPc2MigrationItemPriceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPc2MigrationItemPricesPc2MigrationItemPriceIdKey()
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
            (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.pc2_migration_item_prices[':pc2-migration-item-price-id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPricingPageSessionsCreateForExistingSubscriptionKey() {
  return [
    'pricing_page_sessions',
    '/pricing_page_sessions/create_for_existing_subscription',
    'POST',
  ] as const
}

export function usePostPricingPageSessionsCreateForExistingSubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.pricing_page_sessions.create_for_existing_subscription.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.pricing_page_sessions.create_for_existing_subscription.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPricingPageSessionsCreateForExistingSubscriptionKey()
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
            typeof client.pricing_page_sessions.create_for_existing_subscription.$post
          >
        },
      ) =>
        parseResponse(
          client.pricing_page_sessions.create_for_existing_subscription.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPricingPageSessionsCreateForNewSubscriptionKey() {
  return [
    'pricing_page_sessions',
    '/pricing_page_sessions/create_for_new_subscription',
    'POST',
  ] as const
}

export function usePostPricingPageSessionsCreateForNewSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pricing_page_sessions.create_for_new_subscription.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.pricing_page_sessions.create_for_new_subscription.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPricingPageSessionsCreateForNewSubscriptionKey()
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
            typeof client.pricing_page_sessions.create_for_new_subscription.$post
          >
        },
      ) =>
        parseResponse(
          client.pricing_page_sessions.create_for_new_subscription.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitePcMetaRecordsKey(
  args: InferRequestType<typeof client.site_pc_meta_records.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['site_pc_meta_records', '/site_pc_meta_records', keyArgs] as const
}

export function useGetSitePcMetaRecords<TError = unknown>(
  args: InferRequestType<typeof client.site_pc_meta_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.site_pc_meta_records.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSitePcMetaRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.site_pc_meta_records.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site_pc_meta_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitePcMetaRecords<TError = unknown>(
  args: InferRequestType<typeof client.site_pc_meta_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.site_pc_meta_records.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSitePcMetaRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.site_pc_meta_records.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site_pc_meta_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOmnichannelSubscriptionsOmnichannelSubscriptionIdMoveKey() {
  return [
    'omnichannel_subscriptions',
    '/omnichannel_subscriptions/:omnichannel-subscription-id/move',
    'POST',
  ] as const
}

export function usePostOmnichannelSubscriptionsOmnichannelSubscriptionIdMove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['move']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['move']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOmnichannelSubscriptionsOmnichannelSubscriptionIdMoveKey()
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
            (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['move']['$post']
          >
        },
      ) =>
        parseResponse(
          client.omnichannel_subscriptions[':omnichannel-subscription-id'].move.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOmnichannelSubscriptionsOmnichannelSubscriptionIdKey(
  args: InferRequestType<
    (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'omnichannel_subscriptions',
    '/omnichannel_subscriptions/:omnichannel-subscription-id',
    keyArgs,
  ] as const
}

export function useGetOmnichannelSubscriptionsOmnichannelSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['$get']
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
        ? getGetOmnichannelSubscriptionsOmnichannelSubscriptionIdKey(args)
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
                (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['$get']
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
          client.omnichannel_subscriptions[':omnichannel-subscription-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOmnichannelSubscriptionsOmnichannelSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['$get']
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
        ? getGetOmnichannelSubscriptionsOmnichannelSubscriptionIdKey(args)
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
                (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['$get']
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
          client.omnichannel_subscriptions[':omnichannel-subscription-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOmnichannelSubscriptionsOmnichannelSubscriptionIdOmnichannelTransactionsKey(
  args: InferRequestType<
    (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['omnichannel_transactions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'omnichannel_subscriptions',
    '/omnichannel_subscriptions/:omnichannel-subscription-id/omnichannel_transactions',
    keyArgs,
  ] as const
}

export function useGetOmnichannelSubscriptionsOmnichannelSubscriptionIdOmnichannelTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['omnichannel_transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['omnichannel_transactions']['$get']
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
        ? getGetOmnichannelSubscriptionsOmnichannelSubscriptionIdOmnichannelTransactionsKey(args)
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
                (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['omnichannel_transactions']['$get']
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
          client.omnichannel_subscriptions[
            ':omnichannel-subscription-id'
          ].omnichannel_transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOmnichannelSubscriptionsOmnichannelSubscriptionIdOmnichannelTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['omnichannel_transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['omnichannel_transactions']['$get']
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
        ? getGetOmnichannelSubscriptionsOmnichannelSubscriptionIdOmnichannelTransactionsKey(args)
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
                (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['omnichannel_transactions']['$get']
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
          client.omnichannel_subscriptions[
            ':omnichannel-subscription-id'
          ].omnichannel_transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOmnichannelSubscriptionsKey(
  args: InferRequestType<typeof client.omnichannel_subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['omnichannel_subscriptions', '/omnichannel_subscriptions', keyArgs] as const
}

export function useGetOmnichannelSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.omnichannel_subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.omnichannel_subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOmnichannelSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.omnichannel_subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.omnichannel_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOmnichannelSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.omnichannel_subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.omnichannel_subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOmnichannelSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.omnichannel_subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.omnichannel_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOmnichannelSubscriptionItemsOmnichannelSubscriptionItemIdScheduledChangesKey(
  args: InferRequestType<
    (typeof client.omnichannel_subscription_items)[':omnichannel-subscription-item-id']['scheduled_changes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'omnichannel_subscription_items',
    '/omnichannel_subscription_items/:omnichannel-subscription-item-id/scheduled_changes',
    keyArgs,
  ] as const
}

export function useGetOmnichannelSubscriptionItemsOmnichannelSubscriptionItemIdScheduledChanges<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.omnichannel_subscription_items)[':omnichannel-subscription-item-id']['scheduled_changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.omnichannel_subscription_items)[':omnichannel-subscription-item-id']['scheduled_changes']['$get']
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
        ? getGetOmnichannelSubscriptionItemsOmnichannelSubscriptionItemIdScheduledChangesKey(args)
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
                (typeof client.omnichannel_subscription_items)[':omnichannel-subscription-item-id']['scheduled_changes']['$get']
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
          client.omnichannel_subscription_items[
            ':omnichannel-subscription-item-id'
          ].scheduled_changes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOmnichannelSubscriptionItemsOmnichannelSubscriptionItemIdScheduledChanges<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.omnichannel_subscription_items)[':omnichannel-subscription-item-id']['scheduled_changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.omnichannel_subscription_items)[':omnichannel-subscription-item-id']['scheduled_changes']['$get']
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
        ? getGetOmnichannelSubscriptionItemsOmnichannelSubscriptionItemIdScheduledChangesKey(args)
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
                (typeof client.omnichannel_subscription_items)[':omnichannel-subscription-item-id']['scheduled_changes']['$get']
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
          client.omnichannel_subscription_items[
            ':omnichannel-subscription-item-id'
          ].scheduled_changes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRecordedPurchasesRecordedPurchaseIdKey(
  args: InferRequestType<(typeof client.recorded_purchases)[':recorded-purchase-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['recorded_purchases', '/recorded_purchases/:recorded-purchase-id', keyArgs] as const
}

export function useGetRecordedPurchasesRecordedPurchaseId<TError = unknown>(
  args: InferRequestType<(typeof client.recorded_purchases)[':recorded-purchase-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recorded_purchases)[':recorded-purchase-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRecordedPurchasesRecordedPurchaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recorded_purchases)[':recorded-purchase-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recorded_purchases[':recorded-purchase-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordedPurchasesRecordedPurchaseId<TError = unknown>(
  args: InferRequestType<(typeof client.recorded_purchases)[':recorded-purchase-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recorded_purchases)[':recorded-purchase-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRecordedPurchasesRecordedPurchaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recorded_purchases)[':recorded-purchase-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recorded_purchases[':recorded-purchase-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecordedPurchasesKey() {
  return ['recorded_purchases', '/recorded_purchases', 'POST'] as const
}

export function usePostRecordedPurchases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recorded_purchases.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.recorded_purchases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecordedPurchasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recorded_purchases.$post> }) =>
        parseResponse(client.recorded_purchases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOmnichannelOneTimeOrdersKey(
  args: InferRequestType<typeof client.omnichannel_one_time_orders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['omnichannel_one_time_orders', '/omnichannel_one_time_orders', keyArgs] as const
}

export function useGetOmnichannelOneTimeOrders<TError = unknown>(
  args: InferRequestType<typeof client.omnichannel_one_time_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.omnichannel_one_time_orders.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOmnichannelOneTimeOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.omnichannel_one_time_orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.omnichannel_one_time_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOmnichannelOneTimeOrders<TError = unknown>(
  args: InferRequestType<typeof client.omnichannel_one_time_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.omnichannel_one_time_orders.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOmnichannelOneTimeOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.omnichannel_one_time_orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.omnichannel_one_time_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOmnichannelOneTimeOrdersOmnichannelOneTimeOrderIdKey(
  args: InferRequestType<
    (typeof client.omnichannel_one_time_orders)[':omnichannel-one-time-order-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'omnichannel_one_time_orders',
    '/omnichannel_one_time_orders/:omnichannel-one-time-order-id',
    keyArgs,
  ] as const
}

export function useGetOmnichannelOneTimeOrdersOmnichannelOneTimeOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.omnichannel_one_time_orders)[':omnichannel-one-time-order-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.omnichannel_one_time_orders)[':omnichannel-one-time-order-id']['$get']
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
        ? getGetOmnichannelOneTimeOrdersOmnichannelOneTimeOrderIdKey(args)
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
                (typeof client.omnichannel_one_time_orders)[':omnichannel-one-time-order-id']['$get']
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
          client.omnichannel_one_time_orders[':omnichannel-one-time-order-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOmnichannelOneTimeOrdersOmnichannelOneTimeOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.omnichannel_one_time_orders)[':omnichannel-one-time-order-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.omnichannel_one_time_orders)[':omnichannel-one-time-order-id']['$get']
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
        ? getGetOmnichannelOneTimeOrdersOmnichannelOneTimeOrderIdKey(args)
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
                (typeof client.omnichannel_one_time_orders)[':omnichannel-one-time-order-id']['$get']
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
          client.omnichannel_one_time_orders[':omnichannel-one-time-order-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRulesRuleIdKey(
  args: InferRequestType<(typeof client.rules)[':rule-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules/:rule-id', keyArgs] as const
}

export function useGetRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.rules)[':rule-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':rule-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesRuleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':rule-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules[':rule-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.rules)[':rule-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':rule-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesRuleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':rule-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules[':rule-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRetrySegmentsRetrySegmentIdKey(
  args: InferRequestType<(typeof client.retry_segments)[':retry-segment-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['retry_segments', '/retry_segments/:retry-segment-id', keyArgs] as const
}

export function useGetRetrySegmentsRetrySegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.retry_segments)[':retry-segment-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retry_segments)[':retry-segment-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetrySegmentsRetrySegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retry_segments)[':retry-segment-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.retry_segments[':retry-segment-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetrySegmentsRetrySegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.retry_segments)[':retry-segment-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retry_segments)[':retry-segment-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetrySegmentsRetrySegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retry_segments)[':retry-segment-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.retry_segments[':retry-segment-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetersKey(args: InferRequestType<typeof client.meters.$get>) {
  const { header: _, ...keyArgs } = args
  return ['meters', '/meters', keyArgs] as const
}

export function useGetMeters<TError = unknown>(
  args: InferRequestType<typeof client.meters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.meters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMeters<TError = unknown>(
  args: InferRequestType<typeof client.meters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.meters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsageEventsKey() {
  return ['usage_events', '/usage_events', 'POST'] as const
}

export function usePostUsageEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage_events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.usage_events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsageEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.usage_events.$post> }) =>
        parseResponse(client.usage_events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBatchUsageEventsKey() {
  return ['batch', '/batch/usage_events', 'POST'] as const
}

export function usePostBatchUsageEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.usage_events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.batch.usage_events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchUsageEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.batch.usage_events.$post> }) =>
        parseResponse(client.batch.usage_events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMeteredFeaturesMeteredFeatureIdReactivateCommandKey() {
  return [
    'metered_features',
    '/metered_features/:metered-feature-id/reactivate_command',
    'POST',
  ] as const
}

export function usePostMeteredFeaturesMeteredFeatureIdReactivateCommand<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metered_features)[':metered-feature-id']['reactivate_command']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metered_features)[':metered-feature-id']['reactivate_command']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeteredFeaturesMeteredFeatureIdReactivateCommandKey()
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
            (typeof client.metered_features)[':metered-feature-id']['reactivate_command']['$post']
          >
        },
      ) =>
        parseResponse(
          client.metered_features[':metered-feature-id'].reactivate_command.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMeteredFeaturesMeteredFeatureIdDeleteKey() {
  return ['metered_features', '/metered_features/:metered-feature-id/delete', 'POST'] as const
}

export function usePostMeteredFeaturesMeteredFeatureIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.metered_features)[':metered-feature-id']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metered_features)[':metered-feature-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeteredFeaturesMeteredFeatureIdDeleteKey()
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
            (typeof client.metered_features)[':metered-feature-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.metered_features[':metered-feature-id'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMeteredFeaturesKey() {
  return ['metered_features', '/metered_features', 'POST'] as const
}

export function usePostMeteredFeatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metered_features.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metered_features.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeteredFeaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metered_features.$post> }) =>
        parseResponse(client.metered_features.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMeteredFeaturesMeteredFeatureIdArchiveCommandKey() {
  return [
    'metered_features',
    '/metered_features/:metered-feature-id/archive_command',
    'POST',
  ] as const
}

export function usePostMeteredFeaturesMeteredFeatureIdArchiveCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metered_features)[':metered-feature-id']['archive_command']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metered_features)[':metered-feature-id']['archive_command']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeteredFeaturesMeteredFeatureIdArchiveCommandKey()
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
            (typeof client.metered_features)[':metered-feature-id']['archive_command']['$post']
          >
        },
      ) =>
        parseResponse(
          client.metered_features[':metered-feature-id'].archive_command.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsageFilesUsageFileIdProcessingStatusKey(
  args: InferRequestType<
    (typeof client.usage_files)[':usage-file-id']['processing_status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['usage_files', '/usage_files/:usage-file-id/processing_status', keyArgs] as const
}

export function useGetUsageFilesUsageFileIdProcessingStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.usage_files)[':usage-file-id']['processing_status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.usage_files)[':usage-file-id']['processing_status']['$get']>
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
        ? getGetUsageFilesUsageFileIdProcessingStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.usage_files)[':usage-file-id']['processing_status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.usage_files[':usage-file-id'].processing_status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsageFilesUsageFileIdProcessingStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.usage_files)[':usage-file-id']['processing_status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.usage_files)[':usage-file-id']['processing_status']['$get']>
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
        ? getGetUsageFilesUsageFileIdProcessingStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.usage_files)[':usage-file-id']['processing_status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.usage_files[':usage-file-id'].processing_status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsageFilesUploadUrlKey() {
  return ['usage_files', '/usage_files/upload_url', 'POST'] as const
}

export function usePostUsageFilesUploadUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.usage_files.upload_url.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.usage_files.upload_url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsageFilesUploadUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.usage_files.upload_url.$post> },
      ) => parseResponse(client.usage_files.upload_url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEinvoicesKey(args: InferRequestType<typeof client.einvoices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['einvoices', '/einvoices', keyArgs] as const
}

export function useGetEinvoices<TError = unknown>(
  args: InferRequestType<typeof client.einvoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.einvoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEinvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.einvoices.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.einvoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEinvoices<TError = unknown>(
  args: InferRequestType<typeof client.einvoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.einvoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEinvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.einvoices.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.einvoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEinvoicesEinvoiceIdKey(
  args: InferRequestType<(typeof client.einvoices)[':einvoice-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['einvoices', '/einvoices/:einvoice-id', keyArgs] as const
}

export function useGetEinvoicesEinvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.einvoices)[':einvoice-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.einvoices)[':einvoice-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEinvoicesEinvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.einvoices)[':einvoice-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.einvoices[':einvoice-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEinvoicesEinvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.einvoices)[':einvoice-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.einvoices)[':einvoice-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEinvoicesEinvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.einvoices)[':einvoice-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.einvoices[':einvoice-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPersonalizedOffersKey() {
  return ['personalized_offers', '/personalized_offers', 'POST'] as const
}

export function usePostPersonalizedOffers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personalized_offers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.personalized_offers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPersonalizedOffersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.personalized_offers.$post> }) =>
        parseResponse(client.personalized_offers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOfferFulfillmentsKey() {
  return ['offer_fulfillments', '/offer_fulfillments', 'POST'] as const
}

export function usePostOfferFulfillments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offer_fulfillments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.offer_fulfillments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferFulfillmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.offer_fulfillments.$post> }) =>
        parseResponse(client.offer_fulfillments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOfferFulfillmentsOfferFulfillmentIdKey(
  args: InferRequestType<(typeof client.offer_fulfillments)[':offer-fulfillment-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['offer_fulfillments', '/offer_fulfillments/:offer-fulfillment-id', keyArgs] as const
}

export function useGetOfferFulfillmentsOfferFulfillmentId<TError = unknown>(
  args: InferRequestType<(typeof client.offer_fulfillments)[':offer-fulfillment-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offer_fulfillments)[':offer-fulfillment-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferFulfillmentsOfferFulfillmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offer_fulfillments)[':offer-fulfillment-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.offer_fulfillments[':offer-fulfillment-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferFulfillmentsOfferFulfillmentId<TError = unknown>(
  args: InferRequestType<(typeof client.offer_fulfillments)[':offer-fulfillment-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offer_fulfillments)[':offer-fulfillment-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferFulfillmentsOfferFulfillmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offer_fulfillments)[':offer-fulfillment-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.offer_fulfillments[':offer-fulfillment-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOfferFulfillmentsOfferFulfillmentIdKey() {
  return ['offer_fulfillments', '/offer_fulfillments/:offer-fulfillment-id', 'POST'] as const
}

export function usePostOfferFulfillmentsOfferFulfillmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offer_fulfillments)[':offer-fulfillment-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.offer_fulfillments)[':offer-fulfillment-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferFulfillmentsOfferFulfillmentIdKey()
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
            (typeof client.offer_fulfillments)[':offer-fulfillment-id']['$post']
          >
        },
      ) =>
        parseResponse(client.offer_fulfillments[':offer-fulfillment-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOfferEventsKey() {
  return ['offer_events', '/offer_events', 'POST'] as const
}

export function usePostOfferEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offer_events.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.offer_events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.offer_events.$post> }) =>
        parseResponse(client.offer_events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookEndpointsWebhookEndpointIdDeleteKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:webhook-endpoint-id/delete', 'POST'] as const
}

export function usePostWebhookEndpointsWebhookEndpointIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookEndpointsWebhookEndpointIdDeleteKey()
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
            (typeof client.webhook_endpoints)[':webhook-endpoint-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhook_endpoints[':webhook-endpoint-id'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookEndpointsWebhookEndpointIdKey(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhook_endpoints', '/webhook_endpoints/:webhook-endpoint-id', keyArgs] as const
}

export function useGetWebhookEndpointsWebhookEndpointId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsWebhookEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhook_endpoints[':webhook-endpoint-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookEndpointsWebhookEndpointId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsWebhookEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhook_endpoints[':webhook-endpoint-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhookEndpointsWebhookEndpointIdKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:webhook-endpoint-id', 'POST'] as const
}

export function usePostWebhookEndpointsWebhookEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookEndpointsWebhookEndpointIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$post']>
        },
      ) =>
        parseResponse(client.webhook_endpoints[':webhook-endpoint-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookEndpointsKey(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhook_endpoints', '/webhook_endpoints', keyArgs] as const
}

export function useGetWebhookEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhookEndpointsKey() {
  return ['webhook_endpoints', '/webhook_endpoints', 'POST'] as const
}

export function usePostWebhookEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhook_endpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhook_endpoints.$post> }) =>
        parseResponse(client.webhook_endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessRulesApplyRulesKey() {
  return ['business_rules', '/business_rules/apply_rules', 'POST'] as const
}

export function usePostBusinessRulesApplyRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.business_rules.apply_rules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.business_rules.apply_rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesApplyRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.business_rules.apply_rules.$post> },
      ) => parseResponse(client.business_rules.apply_rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessRulesBusinessRuleIdDeleteDraftKey() {
  return ['business_rules', '/business_rules/:business-rule-id/delete_draft', 'POST'] as const
}

export function usePostBusinessRulesBusinessRuleIdDeleteDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.business_rules)[':business-rule-id']['delete_draft']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_rules)[':business-rule-id']['delete_draft']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesBusinessRuleIdDeleteDraftKey()
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
            (typeof client.business_rules)[':business-rule-id']['delete_draft']['$post']
          >
        },
      ) =>
        parseResponse(
          client.business_rules[':business-rule-id'].delete_draft.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessRulesBusinessRuleIdReleaseKey() {
  return ['business_rules', '/business_rules/:business-rule-id/release', 'POST'] as const
}

export function usePostBusinessRulesBusinessRuleIdRelease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.business_rules)[':business-rule-id']['release']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_rules)[':business-rule-id']['release']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesBusinessRuleIdReleaseKey()
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
            (typeof client.business_rules)[':business-rule-id']['release']['$post']
          >
        },
      ) =>
        parseResponse(client.business_rules[':business-rule-id'].release.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessRulesBusinessRuleIdActivateKey() {
  return ['business_rules', '/business_rules/:business-rule-id/activate', 'POST'] as const
}

export function usePostBusinessRulesBusinessRuleIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.business_rules)[':business-rule-id']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_rules)[':business-rule-id']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesBusinessRuleIdActivateKey()
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
            (typeof client.business_rules)[':business-rule-id']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.business_rules[':business-rule-id'].activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessRulesBusinessRuleIdDraftKey(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['draft']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_rules', '/business_rules/:business-rule-id/draft', keyArgs] as const
}

export function useGetBusinessRulesBusinessRuleIdDraft<TError = unknown>(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['draft']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.business_rules)[':business-rule-id']['draft']['$get']>
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
        ? getGetBusinessRulesBusinessRuleIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.business_rules)[':business-rule-id']['draft']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_rules[':business-rule-id'].draft.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessRulesBusinessRuleIdDraft<TError = unknown>(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['draft']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.business_rules)[':business-rule-id']['draft']['$get']>
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
        ? getGetBusinessRulesBusinessRuleIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.business_rules)[':business-rule-id']['draft']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_rules[':business-rule-id'].draft.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessRulesBusinessRuleIdDraftKey() {
  return ['business_rules', '/business_rules/:business-rule-id/draft', 'POST'] as const
}

export function usePostBusinessRulesBusinessRuleIdDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.business_rules)[':business-rule-id']['draft']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_rules)[':business-rule-id']['draft']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesBusinessRuleIdDraftKey()
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
            (typeof client.business_rules)[':business-rule-id']['draft']['$post']
          >
        },
      ) =>
        parseResponse(client.business_rules[':business-rule-id'].draft.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessRulesBusinessRuleIdDeleteKey() {
  return ['business_rules', '/business_rules/:business-rule-id/delete', 'POST'] as const
}

export function usePostBusinessRulesBusinessRuleIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.business_rules)[':business-rule-id']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_rules)[':business-rule-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesBusinessRuleIdDeleteKey()
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
            (typeof client.business_rules)[':business-rule-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(client.business_rules[':business-rule-id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessRulesBusinessRuleIdDeactivateKey() {
  return ['business_rules', '/business_rules/:business-rule-id/deactivate', 'POST'] as const
}

export function usePostBusinessRulesBusinessRuleIdDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.business_rules)[':business-rule-id']['deactivate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_rules)[':business-rule-id']['deactivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesBusinessRuleIdDeactivateKey()
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
            (typeof client.business_rules)[':business-rule-id']['deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.business_rules[':business-rule-id'].deactivate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessRulesBusinessRuleIdKey(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_rules', '/business_rules/:business-rule-id', keyArgs] as const
}

export function useGetBusinessRulesBusinessRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_rules)[':business-rule-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessRulesBusinessRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_rules)[':business-rule-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_rules[':business-rule-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessRulesBusinessRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_rules)[':business-rule-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessRulesBusinessRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_rules)[':business-rule-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_rules[':business-rule-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessRulesKey(args: InferRequestType<typeof client.business_rules.$get>) {
  const { header: _, ...keyArgs } = args
  return ['business_rules', '/business_rules', keyArgs] as const
}

export function useGetBusinessRules<TError = unknown>(
  args: InferRequestType<typeof client.business_rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBusinessRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessRules<TError = unknown>(
  args: InferRequestType<typeof client.business_rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBusinessRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessRulesKey() {
  return ['business_rules', '/business_rules', 'POST'] as const
}

export function usePostBusinessRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_rules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.business_rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.business_rules.$post> }) =>
        parseResponse(client.business_rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessRulesetsBusinessRulesetIdKey(
  args: InferRequestType<(typeof client.business_rulesets)[':business-ruleset-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_rulesets', '/business_rulesets/:business-ruleset-id', keyArgs] as const
}

export function useGetBusinessRulesetsBusinessRulesetId<TError = unknown>(
  args: InferRequestType<(typeof client.business_rulesets)[':business-ruleset-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_rulesets)[':business-ruleset-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessRulesetsBusinessRulesetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_rulesets)[':business-ruleset-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_rulesets[':business-ruleset-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessRulesetsBusinessRulesetId<TError = unknown>(
  args: InferRequestType<(typeof client.business_rulesets)[':business-ruleset-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_rulesets)[':business-ruleset-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessRulesetsBusinessRulesetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.business_rulesets)[':business-ruleset-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.business_rulesets[':business-ruleset-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessRulesetsBusinessRulesetIdKey() {
  return ['business_rulesets', '/business_rulesets/:business-ruleset-id', 'POST'] as const
}

export function usePostBusinessRulesetsBusinessRulesetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.business_rulesets)[':business-ruleset-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_rulesets)[':business-ruleset-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesetsBusinessRulesetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.business_rulesets)[':business-ruleset-id']['$post']>
        },
      ) =>
        parseResponse(client.business_rulesets[':business-ruleset-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessRulesetsBusinessRulesetIdRemoveRulesKey() {
  return [
    'business_rulesets',
    '/business_rulesets/:business-ruleset-id/remove_rules',
    'POST',
  ] as const
}

export function usePostBusinessRulesetsBusinessRulesetIdRemoveRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.business_rulesets)[':business-ruleset-id']['remove_rules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.business_rulesets)[':business-ruleset-id']['remove_rules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesetsBusinessRulesetIdRemoveRulesKey()
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
            (typeof client.business_rulesets)[':business-ruleset-id']['remove_rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.business_rulesets[':business-ruleset-id'].remove_rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessRulesetsBusinessRulesetIdDeleteKey() {
  return ['business_rulesets', '/business_rulesets/:business-ruleset-id/delete', 'POST'] as const
}

export function usePostBusinessRulesetsBusinessRulesetIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.business_rulesets)[':business-ruleset-id']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_rulesets)[':business-ruleset-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesetsBusinessRulesetIdDeleteKey()
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
            (typeof client.business_rulesets)[':business-ruleset-id']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.business_rulesets[':business-ruleset-id'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessRulesetsBusinessRulesetIdDeactivateKey() {
  return [
    'business_rulesets',
    '/business_rulesets/:business-ruleset-id/deactivate',
    'POST',
  ] as const
}

export function usePostBusinessRulesetsBusinessRulesetIdDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.business_rulesets)[':business-ruleset-id']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.business_rulesets)[':business-ruleset-id']['deactivate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesetsBusinessRulesetIdDeactivateKey()
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
            (typeof client.business_rulesets)[':business-ruleset-id']['deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.business_rulesets[':business-ruleset-id'].deactivate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessRulesetsBusinessRulesetIdRulesKey(
  args: InferRequestType<
    (typeof client.business_rulesets)[':business-ruleset-id']['rules']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['business_rulesets', '/business_rulesets/:business-ruleset-id/rules', keyArgs] as const
}

export function useGetBusinessRulesetsBusinessRulesetIdRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.business_rulesets)[':business-ruleset-id']['rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.business_rulesets)[':business-ruleset-id']['rules']['$get']>
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
        ? getGetBusinessRulesetsBusinessRulesetIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.business_rulesets)[':business-ruleset-id']['rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.business_rulesets[':business-ruleset-id'].rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessRulesetsBusinessRulesetIdRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.business_rulesets)[':business-ruleset-id']['rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.business_rulesets)[':business-ruleset-id']['rules']['$get']>
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
        ? getGetBusinessRulesetsBusinessRulesetIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.business_rulesets)[':business-ruleset-id']['rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.business_rulesets[':business-ruleset-id'].rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessRulesetsKey(
  args: InferRequestType<typeof client.business_rulesets.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['business_rulesets', '/business_rulesets', keyArgs] as const
}

export function useGetBusinessRulesets<TError = unknown>(
  args: InferRequestType<typeof client.business_rulesets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_rulesets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessRulesetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_rulesets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_rulesets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessRulesets<TError = unknown>(
  args: InferRequestType<typeof client.business_rulesets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_rulesets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessRulesetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_rulesets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.business_rulesets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessRulesetsKey() {
  return ['business_rulesets', '/business_rulesets', 'POST'] as const
}

export function usePostBusinessRulesets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.business_rulesets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.business_rulesets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.business_rulesets.$post> }) =>
        parseResponse(client.business_rulesets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessRulesetsBusinessRulesetIdActivateKey() {
  return ['business_rulesets', '/business_rulesets/:business-ruleset-id/activate', 'POST'] as const
}

export function usePostBusinessRulesetsBusinessRulesetIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.business_rulesets)[':business-ruleset-id']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.business_rulesets)[':business-ruleset-id']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesetsBusinessRulesetIdActivateKey()
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
            (typeof client.business_rulesets)[':business-ruleset-id']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.business_rulesets[':business-ruleset-id'].activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessRulesetsBusinessRulesetIdAddRulesKey() {
  return ['business_rulesets', '/business_rulesets/:business-ruleset-id/add_rules', 'POST'] as const
}

export function usePostBusinessRulesetsBusinessRulesetIdAddRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.business_rulesets)[':business-ruleset-id']['add_rules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.business_rulesets)[':business-ruleset-id']['add_rules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessRulesetsBusinessRulesetIdAddRulesKey()
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
            (typeof client.business_rulesets)[':business-ruleset-id']['add_rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.business_rulesets[':business-ruleset-id'].add_rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdUsageSummaryKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['usage_summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription-id/usage_summary', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionIdUsageSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['usage_summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['usage_summary']['$get']>
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
        ? getGetSubscriptionsSubscriptionIdUsageSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['usage_summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.subscriptions[':subscription-id'].usage_summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdUsageSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['usage_summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['usage_summary']['$get']>
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
        ? getGetSubscriptionsSubscriptionIdUsageSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['usage_summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.subscriptions[':subscription-id'].usage_summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdUsageChargesKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['usage_charges']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription-id/usage_charges', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionIdUsageCharges<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['usage_charges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['usage_charges']['$get']>
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
        ? getGetSubscriptionsSubscriptionIdUsageChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['usage_charges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.subscriptions[':subscription-id'].usage_charges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdUsageCharges<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['usage_charges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['usage_charges']['$get']>
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
        ? getGetSubscriptionsSubscriptionIdUsageChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscription-id']['usage_charges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.subscriptions[':subscription-id'].usage_charges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdApplicableAlertsKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['applicable_alerts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription-id/applicable_alerts', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionIdApplicableAlerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['applicable_alerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['applicable_alerts']['$get']
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
        ? getGetSubscriptionsSubscriptionIdApplicableAlertsKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['applicable_alerts']['$get']
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
          client.subscriptions[':subscription-id'].applicable_alerts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdApplicableAlerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['applicable_alerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['applicable_alerts']['$get']
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
        ? getGetSubscriptionsSubscriptionIdApplicableAlertsKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['applicable_alerts']['$get']
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
          client.subscriptions[':subscription-id'].applicable_alerts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAlertsAlertIdKey(
  args: InferRequestType<(typeof client.alerts)[':alert-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alerts', '/alerts/:alert-id', keyArgs] as const
}

export function useGetAlertsAlertId<TError = unknown>(
  args: InferRequestType<(typeof client.alerts)[':alert-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert-id']['$get']>>>
        >
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts[':alert-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertsAlertId<TError = unknown>(
  args: InferRequestType<(typeof client.alerts)[':alert-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert-id']['$get']>>>
        >
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts[':alert-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAlertsAlertIdKey() {
  return ['alerts', '/alerts/:alert-id', 'POST'] as const
}

export function usePostAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alert-id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.alerts)[':alert-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlertsAlertIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.alerts)[':alert-id']['$post']> },
      ) => parseResponse(client.alerts[':alert-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAlertsAlertIdDeleteKey() {
  return ['alerts', '/alerts/:alert-id/delete', 'POST'] as const
}

export function usePostAlertsAlertIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.alerts)[':alert-id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.alerts)[':alert-id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlertsAlertIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.alerts)[':alert-id']['delete']['$post']> },
      ) => parseResponse(client.alerts[':alert-id'].delete.$post(arg, clientOptions)),
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

export function getGetSubscriptionsSubscriptionIdAlertStatusesKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['alert_statuses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription-id/alert_statuses', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionIdAlertStatuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['alert_statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['alert_statuses']['$get']
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
        ? getGetSubscriptionsSubscriptionIdAlertStatusesKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['alert_statuses']['$get']
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
          client.subscriptions[':subscription-id'].alert_statuses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdAlertStatuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['alert_statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':subscription-id']['alert_statuses']['$get']
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
        ? getGetSubscriptionsSubscriptionIdAlertStatusesKey(args)
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
                (typeof client.subscriptions)[':subscription-id']['alert_statuses']['$get']
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
          client.subscriptions[':subscription-id'].alert_statuses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAlertsAlertIdAlertStatusesKey(
  args: InferRequestType<(typeof client.alerts)[':alert-id']['alert_statuses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alerts', '/alerts/:alert-id/alert_statuses', keyArgs] as const
}

export function useGetAlertsAlertIdAlertStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.alerts)[':alert-id']['alert_statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts)[':alert-id']['alert_statuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlertsAlertIdAlertStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts)[':alert-id']['alert_statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.alerts[':alert-id'].alert_statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertsAlertIdAlertStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.alerts)[':alert-id']['alert_statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts)[':alert-id']['alert_statuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlertsAlertIdAlertStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts)[':alert-id']['alert_statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.alerts[':alert-id'].alert_statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsPaymentPromisesKey(
  args: InferRequestType<typeof client.collections_payment_promises.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['collections_payment_promises', '/collections_payment_promises', keyArgs] as const
}

export function useGetCollectionsPaymentPromises<TError = unknown>(
  args: InferRequestType<typeof client.collections_payment_promises.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.collections_payment_promises.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsPaymentPromisesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.collections_payment_promises.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections_payment_promises.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsPaymentPromises<TError = unknown>(
  args: InferRequestType<typeof client.collections_payment_promises.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.collections_payment_promises.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsPaymentPromisesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.collections_payment_promises.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections_payment_promises.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsPaymentPromisesKey() {
  return ['collections_payment_promises', '/collections_payment_promises', 'POST'] as const
}

export function usePostCollectionsPaymentPromises<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.collections_payment_promises.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.collections_payment_promises.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsPaymentPromisesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.collections_payment_promises.$post> },
      ) => parseResponse(client.collections_payment_promises.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsPaymentPromisesCollectionsPaymentPromiseIdCancelKey() {
  return [
    'collections_payment_promises',
    '/collections_payment_promises/:collections-payment-promise-id/cancel',
    'POST',
  ] as const
}

export function usePostCollectionsPaymentPromisesCollectionsPaymentPromiseIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections_payment_promises)[':collections-payment-promise-id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections_payment_promises)[':collections-payment-promise-id']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCollectionsPaymentPromisesCollectionsPaymentPromiseIdCancelKey()
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
            (typeof client.collections_payment_promises)[':collections-payment-promise-id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections_payment_promises[':collections-payment-promise-id'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsPaymentPromisesCollectionsPaymentPromiseIdKey(
  args: InferRequestType<
    (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'collections_payment_promises',
    '/collections_payment_promises/:collections-payment-promise-id',
    keyArgs,
  ] as const
}

export function useGetCollectionsPaymentPromisesCollectionsPaymentPromiseId<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$get']
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
        ? getGetCollectionsPaymentPromisesCollectionsPaymentPromiseIdKey(args)
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
                (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$get']
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
          client.collections_payment_promises[':collections-payment-promise-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsPaymentPromisesCollectionsPaymentPromiseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$get']
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
        ? getGetCollectionsPaymentPromisesCollectionsPaymentPromiseIdKey(args)
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
                (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$get']
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
          client.collections_payment_promises[':collections-payment-promise-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsPaymentPromisesCollectionsPaymentPromiseIdKey() {
  return [
    'collections_payment_promises',
    '/collections_payment_promises/:collections-payment-promise-id',
    'POST',
  ] as const
}

export function usePostCollectionsPaymentPromisesCollectionsPaymentPromiseId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsPaymentPromisesCollectionsPaymentPromiseIdKey()
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
            (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections_payment_promises[':collections-payment-promise-id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLedgerAccountBalancesUpdateOverdraftLimitKey() {
  return [
    'ledger_account_balances',
    '/ledger_account_balances/update_overdraft_limit',
    'POST',
  ] as const
}

export function usePostLedgerAccountBalancesUpdateOverdraftLimit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ledger_account_balances.update_overdraft_limit.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ledger_account_balances.update_overdraft_limit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgerAccountBalancesUpdateOverdraftLimitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.ledger_account_balances.update_overdraft_limit.$post>
        },
      ) =>
        parseResponse(
          client.ledger_account_balances.update_overdraft_limit.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLedgerAccountBalancesKey(
  args: InferRequestType<typeof client.ledger_account_balances.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ledger_account_balances', '/ledger_account_balances', keyArgs] as const
}

export function useGetLedgerAccountBalances<TError = unknown>(
  args: InferRequestType<typeof client.ledger_account_balances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ledger_account_balances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLedgerAccountBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ledger_account_balances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ledger_account_balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLedgerAccountBalances<TError = unknown>(
  args: InferRequestType<typeof client.ledger_account_balances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ledger_account_balances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLedgerAccountBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ledger_account_balances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ledger_account_balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLedgerOperationsReleaseAuthorizationKey() {
  return ['ledger_operations', '/ledger_operations/release_authorization', 'POST'] as const
}

export function usePostLedgerOperationsReleaseAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ledger_operations.release_authorization.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ledger_operations.release_authorization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgerOperationsReleaseAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.ledger_operations.release_authorization.$post> },
      ) => parseResponse(client.ledger_operations.release_authorization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLedgerOperationsCaptureKey() {
  return ['ledger_operations', '/ledger_operations/capture', 'POST'] as const
}

export function usePostLedgerOperationsCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ledger_operations.capture.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ledger_operations.capture.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgerOperationsCaptureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ledger_operations.capture.$post> },
      ) => parseResponse(client.ledger_operations.capture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLedgerOperationsAllocateKey() {
  return ['ledger_operations', '/ledger_operations/allocate', 'POST'] as const
}

export function usePostLedgerOperationsAllocate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ledger_operations.allocate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ledger_operations.allocate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgerOperationsAllocateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ledger_operations.allocate.$post> },
      ) => parseResponse(client.ledger_operations.allocate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLedgerOperationsAuthorizeKey() {
  return ['ledger_operations', '/ledger_operations/authorize', 'POST'] as const
}

export function usePostLedgerOperationsAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ledger_operations.authorize.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ledger_operations.authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgerOperationsAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ledger_operations.authorize.$post> },
      ) => parseResponse(client.ledger_operations.authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLedgerOperationsKey(
  args: InferRequestType<typeof client.ledger_operations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ledger_operations', '/ledger_operations', keyArgs] as const
}

export function useGetLedgerOperations<TError = unknown>(
  args: InferRequestType<typeof client.ledger_operations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledger_operations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLedgerOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledger_operations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ledger_operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLedgerOperations<TError = unknown>(
  args: InferRequestType<typeof client.ledger_operations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledger_operations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLedgerOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledger_operations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ledger_operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLedgerOperationsCaptureAuthorizationKey() {
  return ['ledger_operations', '/ledger_operations/capture_authorization', 'POST'] as const
}

export function usePostLedgerOperationsCaptureAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ledger_operations.capture_authorization.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ledger_operations.capture_authorization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgerOperationsCaptureAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.ledger_operations.capture_authorization.$post> },
      ) => parseResponse(client.ledger_operations.capture_authorization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLedgerOperationsLedgerOperationIdKey(
  args: InferRequestType<(typeof client.ledger_operations)[':ledger-operation-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ledger_operations', '/ledger_operations/:ledger-operation-id', keyArgs] as const
}

export function useGetLedgerOperationsLedgerOperationId<TError = unknown>(
  args: InferRequestType<(typeof client.ledger_operations)[':ledger-operation-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledger_operations)[':ledger-operation-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLedgerOperationsLedgerOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledger_operations)[':ledger-operation-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ledger_operations[':ledger-operation-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLedgerOperationsLedgerOperationId<TError = unknown>(
  args: InferRequestType<(typeof client.ledger_operations)[':ledger-operation-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledger_operations)[':ledger-operation-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLedgerOperationsLedgerOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledger_operations)[':ledger-operation-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ledger_operations[':ledger-operation-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGrantBlocksKey(args: InferRequestType<typeof client.grant_blocks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['grant_blocks', '/grant_blocks', keyArgs] as const
}

export function useGetGrantBlocks<TError = unknown>(
  args: InferRequestType<typeof client.grant_blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grant_blocks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantBlocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grant_blocks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grant_blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrantBlocks<TError = unknown>(
  args: InferRequestType<typeof client.grant_blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grant_blocks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantBlocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grant_blocks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grant_blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPromotionalGrantsKey() {
  return ['promotional_grants', '/promotional_grants', 'POST'] as const
}

export function usePostPromotionalGrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotional_grants.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.promotional_grants.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPromotionalGrantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.promotional_grants.$post> }) =>
        parseResponse(client.promotional_grants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
