import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1AccountsAccountBankAccountsIdRoute,
  deleteV1AccountsAccountExternalAccountsIdRoute,
  deleteV1AccountsAccountPeoplePersonRoute,
  deleteV1AccountsAccountPersonsPersonRoute,
  deleteV1AccountsAccountRoute,
  deleteV1ApplePayDomainsDomainRoute,
  deleteV1CouponsCouponRoute,
  deleteV1CustomersCustomerBankAccountsIdRoute,
  deleteV1CustomersCustomerCardsIdRoute,
  deleteV1CustomersCustomerDiscountRoute,
  deleteV1CustomersCustomerRoute,
  deleteV1CustomersCustomerSourcesIdRoute,
  deleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountRoute,
  deleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdRoute,
  deleteV1CustomersCustomerTaxIdsIdRoute,
  deleteV1EphemeralKeysKeyRoute,
  deleteV1InvoiceitemsInvoiceitemRoute,
  deleteV1InvoicesInvoiceRoute,
  deleteV1PlansPlanRoute,
  deleteV1ProductsIdRoute,
  deleteV1RadarValueListItemsItemRoute,
  deleteV1RadarValueListsValueListRoute,
  deleteV1SubscriptionItemsItemRoute,
  deleteV1SubscriptionsSubscriptionExposedIdDiscountRoute,
  deleteV1SubscriptionsSubscriptionExposedIdRoute,
  deleteV1TerminalConfigurationsConfigurationRoute,
  deleteV1TerminalLocationsLocationRoute,
  deleteV1TerminalReadersReaderRoute,
  deleteV1TestHelpersTestClocksTestClockRoute,
  deleteV1WebhookEndpointsWebhookEndpointRoute,
  getV1AccountRoute,
  getV1AccountsAccountBankAccountsIdRoute,
  getV1AccountsAccountCapabilitiesCapabilityRoute,
  getV1AccountsAccountCapabilitiesRoute,
  getV1AccountsAccountExternalAccountsIdRoute,
  getV1AccountsAccountExternalAccountsRoute,
  getV1AccountsAccountPeoplePersonRoute,
  getV1AccountsAccountPeopleRoute,
  getV1AccountsAccountPersonsPersonRoute,
  getV1AccountsAccountPersonsRoute,
  getV1AccountsAccountRoute,
  getV1AccountsRoute,
  getV1ApplePayDomainsDomainRoute,
  getV1ApplePayDomainsRoute,
  getV1ApplicationFeesFeeRefundsIdRoute,
  getV1ApplicationFeesIdRefundsRoute,
  getV1ApplicationFeesIdRoute,
  getV1ApplicationFeesRoute,
  getV1AppsSecretsFindRoute,
  getV1AppsSecretsRoute,
  getV1BalanceHistoryIdRoute,
  getV1BalanceHistoryRoute,
  getV1BalanceRoute,
  getV1BalanceTransactionsIdRoute,
  getV1BalanceTransactionsRoute,
  getV1BillingPortalConfigurationsConfigurationRoute,
  getV1BillingPortalConfigurationsRoute,
  getV1ChargesChargeDisputeRoute,
  getV1ChargesChargeRefundsRefundRoute,
  getV1ChargesChargeRefundsRoute,
  getV1ChargesChargeRoute,
  getV1ChargesRoute,
  getV1ChargesSearchRoute,
  getV1CheckoutSessionsRoute,
  getV1CheckoutSessionsSessionLineItemsRoute,
  getV1CheckoutSessionsSessionRoute,
  getV1CountrySpecsCountryRoute,
  getV1CountrySpecsRoute,
  getV1CouponsCouponRoute,
  getV1CouponsRoute,
  getV1CreditNotesCreditNoteLinesRoute,
  getV1CreditNotesIdRoute,
  getV1CreditNotesPreviewLinesRoute,
  getV1CreditNotesPreviewRoute,
  getV1CreditNotesRoute,
  getV1CustomersCustomerBalanceTransactionsRoute,
  getV1CustomersCustomerBalanceTransactionsTransactionRoute,
  getV1CustomersCustomerBankAccountsIdRoute,
  getV1CustomersCustomerBankAccountsRoute,
  getV1CustomersCustomerCardsIdRoute,
  getV1CustomersCustomerCardsRoute,
  getV1CustomersCustomerCashBalanceRoute,
  getV1CustomersCustomerCashBalanceTransactionsRoute,
  getV1CustomersCustomerCashBalanceTransactionsTransactionRoute,
  getV1CustomersCustomerDiscountRoute,
  getV1CustomersCustomerPaymentMethodsPaymentMethodRoute,
  getV1CustomersCustomerPaymentMethodsRoute,
  getV1CustomersCustomerRoute,
  getV1CustomersCustomerSourcesIdRoute,
  getV1CustomersCustomerSourcesRoute,
  getV1CustomersCustomerSubscriptionsRoute,
  getV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountRoute,
  getV1CustomersCustomerSubscriptionsSubscriptionExposedIdRoute,
  getV1CustomersCustomerTaxIdsIdRoute,
  getV1CustomersCustomerTaxIdsRoute,
  getV1CustomersRoute,
  getV1CustomersSearchRoute,
  getV1DisputesDisputeRoute,
  getV1DisputesRoute,
  getV1EventsIdRoute,
  getV1EventsRoute,
  getV1ExchangeRatesRateIdRoute,
  getV1ExchangeRatesRoute,
  getV1FileLinksLinkRoute,
  getV1FileLinksRoute,
  getV1FilesFileRoute,
  getV1FilesRoute,
  getV1FinancialConnectionsAccountsAccountOwnersRoute,
  getV1FinancialConnectionsAccountsAccountRoute,
  getV1FinancialConnectionsAccountsRoute,
  getV1FinancialConnectionsSessionsSessionRoute,
  getV1IdentityVerificationReportsReportRoute,
  getV1IdentityVerificationReportsRoute,
  getV1IdentityVerificationSessionsRoute,
  getV1IdentityVerificationSessionsSessionRoute,
  getV1InvoiceitemsInvoiceitemRoute,
  getV1InvoiceitemsRoute,
  getV1InvoicesInvoiceLinesRoute,
  getV1InvoicesInvoiceRoute,
  getV1InvoicesRoute,
  getV1InvoicesSearchRoute,
  getV1InvoicesUpcomingLinesRoute,
  getV1InvoicesUpcomingRoute,
  getV1IssuingAuthorizationsAuthorizationRoute,
  getV1IssuingAuthorizationsRoute,
  getV1IssuingCardholdersCardholderRoute,
  getV1IssuingCardholdersRoute,
  getV1IssuingCardsCardRoute,
  getV1IssuingCardsRoute,
  getV1IssuingDisputesDisputeRoute,
  getV1IssuingDisputesRoute,
  getV1IssuingSettlementsRoute,
  getV1IssuingSettlementsSettlementRoute,
  getV1IssuingTransactionsRoute,
  getV1IssuingTransactionsTransactionRoute,
  getV1LinkAccountSessionsSessionRoute,
  getV1LinkedAccountsAccountOwnersRoute,
  getV1LinkedAccountsAccountRoute,
  getV1LinkedAccountsRoute,
  getV1MandatesMandateRoute,
  getV1PaymentIntentsIntentRoute,
  getV1PaymentIntentsRoute,
  getV1PaymentIntentsSearchRoute,
  getV1PaymentLinksPaymentLinkLineItemsRoute,
  getV1PaymentLinksPaymentLinkRoute,
  getV1PaymentLinksRoute,
  getV1PaymentMethodsPaymentMethodRoute,
  getV1PaymentMethodsRoute,
  getV1PayoutsPayoutRoute,
  getV1PayoutsRoute,
  getV1PlansPlanRoute,
  getV1PlansRoute,
  getV1PricesPriceRoute,
  getV1PricesRoute,
  getV1PricesSearchRoute,
  getV1ProductsIdRoute,
  getV1ProductsRoute,
  getV1ProductsSearchRoute,
  getV1PromotionCodesPromotionCodeRoute,
  getV1PromotionCodesRoute,
  getV1QuotesQuoteComputedUpfrontLineItemsRoute,
  getV1QuotesQuoteLineItemsRoute,
  getV1QuotesQuotePdfRoute,
  getV1QuotesQuoteRoute,
  getV1QuotesRoute,
  getV1RadarEarlyFraudWarningsEarlyFraudWarningRoute,
  getV1RadarEarlyFraudWarningsRoute,
  getV1RadarValueListItemsItemRoute,
  getV1RadarValueListItemsRoute,
  getV1RadarValueListsRoute,
  getV1RadarValueListsValueListRoute,
  getV1RefundsRefundRoute,
  getV1RefundsRoute,
  getV1ReportingReportRunsReportRunRoute,
  getV1ReportingReportRunsRoute,
  getV1ReportingReportTypesReportTypeRoute,
  getV1ReportingReportTypesRoute,
  getV1ReviewsReviewRoute,
  getV1ReviewsRoute,
  getV1SetupAttemptsRoute,
  getV1SetupIntentsIntentRoute,
  getV1SetupIntentsRoute,
  getV1ShippingRatesRoute,
  getV1ShippingRatesShippingRateTokenRoute,
  getV1SigmaScheduledQueryRunsRoute,
  getV1SigmaScheduledQueryRunsScheduledQueryRunRoute,
  getV1SourcesSourceMandateNotificationsMandateNotificationRoute,
  getV1SourcesSourceRoute,
  getV1SourcesSourceSourceTransactionsRoute,
  getV1SourcesSourceSourceTransactionsSourceTransactionRoute,
  getV1SubscriptionItemsItemRoute,
  getV1SubscriptionItemsRoute,
  getV1SubscriptionItemsSubscriptionItemUsageRecordSummariesRoute,
  getV1SubscriptionSchedulesRoute,
  getV1SubscriptionSchedulesScheduleRoute,
  getV1SubscriptionsRoute,
  getV1SubscriptionsSearchRoute,
  getV1SubscriptionsSubscriptionExposedIdRoute,
  getV1TaxCodesIdRoute,
  getV1TaxCodesRoute,
  getV1TaxRatesRoute,
  getV1TaxRatesTaxRateRoute,
  getV1TerminalConfigurationsConfigurationRoute,
  getV1TerminalConfigurationsRoute,
  getV1TerminalLocationsLocationRoute,
  getV1TerminalLocationsRoute,
  getV1TerminalReadersReaderRoute,
  getV1TerminalReadersRoute,
  getV1TestHelpersTestClocksRoute,
  getV1TestHelpersTestClocksTestClockRoute,
  getV1TokensTokenRoute,
  getV1TopupsRoute,
  getV1TopupsTopupRoute,
  getV1TransfersIdReversalsRoute,
  getV1TransfersRoute,
  getV1TransfersTransferReversalsIdRoute,
  getV1TransfersTransferRoute,
  getV1TreasuryCreditReversalsCreditReversalRoute,
  getV1TreasuryCreditReversalsRoute,
  getV1TreasuryDebitReversalsDebitReversalRoute,
  getV1TreasuryDebitReversalsRoute,
  getV1TreasuryFinancialAccountsFinancialAccountFeaturesRoute,
  getV1TreasuryFinancialAccountsFinancialAccountRoute,
  getV1TreasuryFinancialAccountsRoute,
  getV1TreasuryInboundTransfersIdRoute,
  getV1TreasuryInboundTransfersRoute,
  getV1TreasuryOutboundPaymentsIdRoute,
  getV1TreasuryOutboundPaymentsRoute,
  getV1TreasuryOutboundTransfersOutboundTransferRoute,
  getV1TreasuryOutboundTransfersRoute,
  getV1TreasuryReceivedCreditsIdRoute,
  getV1TreasuryReceivedCreditsRoute,
  getV1TreasuryReceivedDebitsIdRoute,
  getV1TreasuryReceivedDebitsRoute,
  getV1TreasuryTransactionEntriesIdRoute,
  getV1TreasuryTransactionEntriesRoute,
  getV1TreasuryTransactionsIdRoute,
  getV1TreasuryTransactionsRoute,
  getV1WebhookEndpointsRoute,
  getV1WebhookEndpointsWebhookEndpointRoute,
  postV1AccountLinksRoute,
  postV1AccountsAccountBankAccountsIdRoute,
  postV1AccountsAccountBankAccountsRoute,
  postV1AccountsAccountCapabilitiesCapabilityRoute,
  postV1AccountsAccountExternalAccountsIdRoute,
  postV1AccountsAccountExternalAccountsRoute,
  postV1AccountsAccountLoginLinksRoute,
  postV1AccountsAccountPeoplePersonRoute,
  postV1AccountsAccountPeopleRoute,
  postV1AccountsAccountPersonsPersonRoute,
  postV1AccountsAccountPersonsRoute,
  postV1AccountsAccountRejectRoute,
  postV1AccountsAccountRoute,
  postV1AccountsRoute,
  postV1ApplePayDomainsRoute,
  postV1ApplicationFeesFeeRefundsIdRoute,
  postV1ApplicationFeesIdRefundRoute,
  postV1ApplicationFeesIdRefundsRoute,
  postV1AppsSecretsDeleteRoute,
  postV1AppsSecretsRoute,
  postV1BillingPortalConfigurationsConfigurationRoute,
  postV1BillingPortalConfigurationsRoute,
  postV1BillingPortalSessionsRoute,
  postV1ChargesChargeCaptureRoute,
  postV1ChargesChargeDisputeCloseRoute,
  postV1ChargesChargeDisputeRoute,
  postV1ChargesChargeRefundRoute,
  postV1ChargesChargeRefundsRefundRoute,
  postV1ChargesChargeRefundsRoute,
  postV1ChargesChargeRoute,
  postV1ChargesRoute,
  postV1CheckoutSessionsRoute,
  postV1CheckoutSessionsSessionExpireRoute,
  postV1CouponsCouponRoute,
  postV1CouponsRoute,
  postV1CreditNotesIdRoute,
  postV1CreditNotesIdVoidRoute,
  postV1CreditNotesRoute,
  postV1CustomersCustomerBalanceTransactionsRoute,
  postV1CustomersCustomerBalanceTransactionsTransactionRoute,
  postV1CustomersCustomerBankAccountsIdRoute,
  postV1CustomersCustomerBankAccountsIdVerifyRoute,
  postV1CustomersCustomerBankAccountsRoute,
  postV1CustomersCustomerCardsIdRoute,
  postV1CustomersCustomerCardsRoute,
  postV1CustomersCustomerCashBalanceRoute,
  postV1CustomersCustomerFundingInstructionsRoute,
  postV1CustomersCustomerRoute,
  postV1CustomersCustomerSourcesIdRoute,
  postV1CustomersCustomerSourcesIdVerifyRoute,
  postV1CustomersCustomerSourcesRoute,
  postV1CustomersCustomerSubscriptionsRoute,
  postV1CustomersCustomerSubscriptionsSubscriptionExposedIdRoute,
  postV1CustomersCustomerTaxIdsRoute,
  postV1CustomersRoute,
  postV1DisputesDisputeCloseRoute,
  postV1DisputesDisputeRoute,
  postV1EphemeralKeysRoute,
  postV1FileLinksLinkRoute,
  postV1FileLinksRoute,
  postV1FilesRoute,
  postV1FinancialConnectionsAccountsAccountDisconnectRoute,
  postV1FinancialConnectionsAccountsAccountRefreshRoute,
  postV1FinancialConnectionsSessionsRoute,
  postV1IdentityVerificationSessionsRoute,
  postV1IdentityVerificationSessionsSessionCancelRoute,
  postV1IdentityVerificationSessionsSessionRedactRoute,
  postV1IdentityVerificationSessionsSessionRoute,
  postV1InvoiceitemsInvoiceitemRoute,
  postV1InvoiceitemsRoute,
  postV1InvoicesInvoiceFinalizeRoute,
  postV1InvoicesInvoiceMarkUncollectibleRoute,
  postV1InvoicesInvoicePayRoute,
  postV1InvoicesInvoiceRoute,
  postV1InvoicesInvoiceSendRoute,
  postV1InvoicesInvoiceVoidRoute,
  postV1InvoicesRoute,
  postV1IssuingAuthorizationsAuthorizationApproveRoute,
  postV1IssuingAuthorizationsAuthorizationDeclineRoute,
  postV1IssuingAuthorizationsAuthorizationRoute,
  postV1IssuingCardholdersCardholderRoute,
  postV1IssuingCardholdersRoute,
  postV1IssuingCardsCardRoute,
  postV1IssuingCardsRoute,
  postV1IssuingDisputesDisputeRoute,
  postV1IssuingDisputesDisputeSubmitRoute,
  postV1IssuingDisputesRoute,
  postV1IssuingSettlementsSettlementRoute,
  postV1IssuingTransactionsTransactionRoute,
  postV1LinkAccountSessionsRoute,
  postV1LinkedAccountsAccountDisconnectRoute,
  postV1LinkedAccountsAccountRefreshRoute,
  postV1PaymentIntentsIntentApplyCustomerBalanceRoute,
  postV1PaymentIntentsIntentCancelRoute,
  postV1PaymentIntentsIntentCaptureRoute,
  postV1PaymentIntentsIntentConfirmRoute,
  postV1PaymentIntentsIntentIncrementAuthorizationRoute,
  postV1PaymentIntentsIntentRoute,
  postV1PaymentIntentsIntentVerifyMicrodepositsRoute,
  postV1PaymentIntentsRoute,
  postV1PaymentLinksPaymentLinkRoute,
  postV1PaymentLinksRoute,
  postV1PaymentMethodsPaymentMethodAttachRoute,
  postV1PaymentMethodsPaymentMethodDetachRoute,
  postV1PaymentMethodsPaymentMethodRoute,
  postV1PaymentMethodsRoute,
  postV1PayoutsPayoutCancelRoute,
  postV1PayoutsPayoutReverseRoute,
  postV1PayoutsPayoutRoute,
  postV1PayoutsRoute,
  postV1PlansPlanRoute,
  postV1PlansRoute,
  postV1PricesPriceRoute,
  postV1PricesRoute,
  postV1ProductsIdRoute,
  postV1ProductsRoute,
  postV1PromotionCodesPromotionCodeRoute,
  postV1PromotionCodesRoute,
  postV1QuotesQuoteAcceptRoute,
  postV1QuotesQuoteCancelRoute,
  postV1QuotesQuoteFinalizeRoute,
  postV1QuotesQuoteRoute,
  postV1QuotesRoute,
  postV1RadarValueListItemsRoute,
  postV1RadarValueListsRoute,
  postV1RadarValueListsValueListRoute,
  postV1RefundsRefundCancelRoute,
  postV1RefundsRefundRoute,
  postV1RefundsRoute,
  postV1ReportingReportRunsRoute,
  postV1ReviewsReviewApproveRoute,
  postV1SetupIntentsIntentCancelRoute,
  postV1SetupIntentsIntentConfirmRoute,
  postV1SetupIntentsIntentRoute,
  postV1SetupIntentsIntentVerifyMicrodepositsRoute,
  postV1SetupIntentsRoute,
  postV1ShippingRatesRoute,
  postV1ShippingRatesShippingRateTokenRoute,
  postV1SourcesRoute,
  postV1SourcesSourceRoute,
  postV1SourcesSourceVerifyRoute,
  postV1SubscriptionItemsItemRoute,
  postV1SubscriptionItemsRoute,
  postV1SubscriptionItemsSubscriptionItemUsageRecordsRoute,
  postV1SubscriptionSchedulesRoute,
  postV1SubscriptionSchedulesScheduleCancelRoute,
  postV1SubscriptionSchedulesScheduleReleaseRoute,
  postV1SubscriptionSchedulesScheduleRoute,
  postV1SubscriptionsRoute,
  postV1SubscriptionsSubscriptionExposedIdRoute,
  postV1SubscriptionsSubscriptionResumeRoute,
  postV1TaxRatesRoute,
  postV1TaxRatesTaxRateRoute,
  postV1TerminalConfigurationsConfigurationRoute,
  postV1TerminalConfigurationsRoute,
  postV1TerminalConnectionTokensRoute,
  postV1TerminalLocationsLocationRoute,
  postV1TerminalLocationsRoute,
  postV1TerminalReadersReaderCancelActionRoute,
  postV1TerminalReadersReaderProcessPaymentIntentRoute,
  postV1TerminalReadersReaderProcessSetupIntentRoute,
  postV1TerminalReadersReaderRefundPaymentRoute,
  postV1TerminalReadersReaderRoute,
  postV1TerminalReadersReaderSetReaderDisplayRoute,
  postV1TerminalReadersRoute,
  postV1TestHelpersCustomersCustomerFundCashBalanceRoute,
  postV1TestHelpersIssuingCardsCardShippingDeliverRoute,
  postV1TestHelpersIssuingCardsCardShippingFailRoute,
  postV1TestHelpersIssuingCardsCardShippingReturnRoute,
  postV1TestHelpersIssuingCardsCardShippingShipRoute,
  postV1TestHelpersRefundsRefundExpireRoute,
  postV1TestHelpersTerminalReadersReaderPresentPaymentMethodRoute,
  postV1TestHelpersTestClocksRoute,
  postV1TestHelpersTestClocksTestClockAdvanceRoute,
  postV1TestHelpersTreasuryInboundTransfersIdFailRoute,
  postV1TestHelpersTreasuryInboundTransfersIdReturnRoute,
  postV1TestHelpersTreasuryInboundTransfersIdSucceedRoute,
  postV1TestHelpersTreasuryOutboundPaymentsIdFailRoute,
  postV1TestHelpersTreasuryOutboundPaymentsIdPostRoute,
  postV1TestHelpersTreasuryOutboundPaymentsIdReturnRoute,
  postV1TestHelpersTreasuryOutboundTransfersOutboundTransferFailRoute,
  postV1TestHelpersTreasuryOutboundTransfersOutboundTransferPostRoute,
  postV1TestHelpersTreasuryOutboundTransfersOutboundTransferReturnRoute,
  postV1TestHelpersTreasuryReceivedCreditsRoute,
  postV1TestHelpersTreasuryReceivedDebitsRoute,
  postV1TokensRoute,
  postV1TopupsRoute,
  postV1TopupsTopupCancelRoute,
  postV1TopupsTopupRoute,
  postV1TransfersIdReversalsRoute,
  postV1TransfersRoute,
  postV1TransfersTransferReversalsIdRoute,
  postV1TransfersTransferRoute,
  postV1TreasuryCreditReversalsRoute,
  postV1TreasuryDebitReversalsRoute,
  postV1TreasuryFinancialAccountsFinancialAccountFeaturesRoute,
  postV1TreasuryFinancialAccountsFinancialAccountRoute,
  postV1TreasuryFinancialAccountsRoute,
  postV1TreasuryInboundTransfersInboundTransferCancelRoute,
  postV1TreasuryInboundTransfersRoute,
  postV1TreasuryOutboundPaymentsIdCancelRoute,
  postV1TreasuryOutboundPaymentsRoute,
  postV1TreasuryOutboundTransfersOutboundTransferCancelRoute,
  postV1TreasuryOutboundTransfersRoute,
  postV1WebhookEndpointsRoute,
  postV1WebhookEndpointsWebhookEndpointRoute,
} from '../routes'

export const getV1AccountRouteHandler: RouteHandler<typeof getV1AccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountLinksRouteHandler: RouteHandler<typeof postV1AccountLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AccountsRouteHandler: RouteHandler<typeof getV1AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsRouteHandler: RouteHandler<typeof postV1AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountsAccountRouteHandler: RouteHandler<
  typeof deleteV1AccountsAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountRouteHandler: RouteHandler<
  typeof getV1AccountsAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountRouteHandler: RouteHandler<
  typeof postV1AccountsAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountBankAccountsRouteHandler: RouteHandler<
  typeof postV1AccountsAccountBankAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountsAccountBankAccountsIdRouteHandler: RouteHandler<
  typeof deleteV1AccountsAccountBankAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountBankAccountsIdRouteHandler: RouteHandler<
  typeof getV1AccountsAccountBankAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountBankAccountsIdRouteHandler: RouteHandler<
  typeof postV1AccountsAccountBankAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountCapabilitiesRouteHandler: RouteHandler<
  typeof getV1AccountsAccountCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountCapabilitiesCapabilityRouteHandler: RouteHandler<
  typeof getV1AccountsAccountCapabilitiesCapabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountCapabilitiesCapabilityRouteHandler: RouteHandler<
  typeof postV1AccountsAccountCapabilitiesCapabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountExternalAccountsRouteHandler: RouteHandler<
  typeof getV1AccountsAccountExternalAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountExternalAccountsRouteHandler: RouteHandler<
  typeof postV1AccountsAccountExternalAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountsAccountExternalAccountsIdRouteHandler: RouteHandler<
  typeof deleteV1AccountsAccountExternalAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountExternalAccountsIdRouteHandler: RouteHandler<
  typeof getV1AccountsAccountExternalAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountExternalAccountsIdRouteHandler: RouteHandler<
  typeof postV1AccountsAccountExternalAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountLoginLinksRouteHandler: RouteHandler<
  typeof postV1AccountsAccountLoginLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountPeopleRouteHandler: RouteHandler<
  typeof getV1AccountsAccountPeopleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountPeopleRouteHandler: RouteHandler<
  typeof postV1AccountsAccountPeopleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountsAccountPeoplePersonRouteHandler: RouteHandler<
  typeof deleteV1AccountsAccountPeoplePersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountPeoplePersonRouteHandler: RouteHandler<
  typeof getV1AccountsAccountPeoplePersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountPeoplePersonRouteHandler: RouteHandler<
  typeof postV1AccountsAccountPeoplePersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountPersonsRouteHandler: RouteHandler<
  typeof getV1AccountsAccountPersonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountPersonsRouteHandler: RouteHandler<
  typeof postV1AccountsAccountPersonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountsAccountPersonsPersonRouteHandler: RouteHandler<
  typeof deleteV1AccountsAccountPersonsPersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountPersonsPersonRouteHandler: RouteHandler<
  typeof getV1AccountsAccountPersonsPersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountPersonsPersonRouteHandler: RouteHandler<
  typeof postV1AccountsAccountPersonsPersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountRejectRouteHandler: RouteHandler<
  typeof postV1AccountsAccountRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApplePayDomainsRouteHandler: RouteHandler<
  typeof getV1ApplePayDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApplePayDomainsRouteHandler: RouteHandler<
  typeof postV1ApplePayDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ApplePayDomainsDomainRouteHandler: RouteHandler<
  typeof deleteV1ApplePayDomainsDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApplePayDomainsDomainRouteHandler: RouteHandler<
  typeof getV1ApplePayDomainsDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApplicationFeesRouteHandler: RouteHandler<
  typeof getV1ApplicationFeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApplicationFeesFeeRefundsIdRouteHandler: RouteHandler<
  typeof getV1ApplicationFeesFeeRefundsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApplicationFeesFeeRefundsIdRouteHandler: RouteHandler<
  typeof postV1ApplicationFeesFeeRefundsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApplicationFeesIdRouteHandler: RouteHandler<
  typeof getV1ApplicationFeesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApplicationFeesIdRefundRouteHandler: RouteHandler<
  typeof postV1ApplicationFeesIdRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApplicationFeesIdRefundsRouteHandler: RouteHandler<
  typeof getV1ApplicationFeesIdRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApplicationFeesIdRefundsRouteHandler: RouteHandler<
  typeof postV1ApplicationFeesIdRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsSecretsRouteHandler: RouteHandler<typeof getV1AppsSecretsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AppsSecretsRouteHandler: RouteHandler<typeof postV1AppsSecretsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AppsSecretsDeleteRouteHandler: RouteHandler<
  typeof postV1AppsSecretsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsSecretsFindRouteHandler: RouteHandler<
  typeof getV1AppsSecretsFindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BalanceRouteHandler: RouteHandler<typeof getV1BalanceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BalanceHistoryRouteHandler: RouteHandler<
  typeof getV1BalanceHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BalanceHistoryIdRouteHandler: RouteHandler<
  typeof getV1BalanceHistoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BalanceTransactionsRouteHandler: RouteHandler<
  typeof getV1BalanceTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BalanceTransactionsIdRouteHandler: RouteHandler<
  typeof getV1BalanceTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BillingPortalConfigurationsRouteHandler: RouteHandler<
  typeof getV1BillingPortalConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingPortalConfigurationsRouteHandler: RouteHandler<
  typeof postV1BillingPortalConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BillingPortalConfigurationsConfigurationRouteHandler: RouteHandler<
  typeof getV1BillingPortalConfigurationsConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingPortalConfigurationsConfigurationRouteHandler: RouteHandler<
  typeof postV1BillingPortalConfigurationsConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingPortalSessionsRouteHandler: RouteHandler<
  typeof postV1BillingPortalSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChargesRouteHandler: RouteHandler<typeof getV1ChargesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChargesRouteHandler: RouteHandler<typeof postV1ChargesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChargesSearchRouteHandler: RouteHandler<typeof getV1ChargesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ChargesChargeRouteHandler: RouteHandler<typeof getV1ChargesChargeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ChargesChargeRouteHandler: RouteHandler<
  typeof postV1ChargesChargeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChargesChargeCaptureRouteHandler: RouteHandler<
  typeof postV1ChargesChargeCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChargesChargeDisputeRouteHandler: RouteHandler<
  typeof getV1ChargesChargeDisputeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChargesChargeDisputeRouteHandler: RouteHandler<
  typeof postV1ChargesChargeDisputeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChargesChargeDisputeCloseRouteHandler: RouteHandler<
  typeof postV1ChargesChargeDisputeCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChargesChargeRefundRouteHandler: RouteHandler<
  typeof postV1ChargesChargeRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChargesChargeRefundsRouteHandler: RouteHandler<
  typeof getV1ChargesChargeRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChargesChargeRefundsRouteHandler: RouteHandler<
  typeof postV1ChargesChargeRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChargesChargeRefundsRefundRouteHandler: RouteHandler<
  typeof getV1ChargesChargeRefundsRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChargesChargeRefundsRefundRouteHandler: RouteHandler<
  typeof postV1ChargesChargeRefundsRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CheckoutSessionsRouteHandler: RouteHandler<
  typeof getV1CheckoutSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CheckoutSessionsRouteHandler: RouteHandler<
  typeof postV1CheckoutSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CheckoutSessionsSessionRouteHandler: RouteHandler<
  typeof getV1CheckoutSessionsSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CheckoutSessionsSessionExpireRouteHandler: RouteHandler<
  typeof postV1CheckoutSessionsSessionExpireRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CheckoutSessionsSessionLineItemsRouteHandler: RouteHandler<
  typeof getV1CheckoutSessionsSessionLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CountrySpecsRouteHandler: RouteHandler<typeof getV1CountrySpecsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1CountrySpecsCountryRouteHandler: RouteHandler<
  typeof getV1CountrySpecsCountryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CouponsRouteHandler: RouteHandler<typeof getV1CouponsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CouponsRouteHandler: RouteHandler<typeof postV1CouponsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CouponsCouponRouteHandler: RouteHandler<
  typeof deleteV1CouponsCouponRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CouponsCouponRouteHandler: RouteHandler<typeof getV1CouponsCouponRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CouponsCouponRouteHandler: RouteHandler<
  typeof postV1CouponsCouponRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditNotesRouteHandler: RouteHandler<typeof getV1CreditNotesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CreditNotesRouteHandler: RouteHandler<typeof postV1CreditNotesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1CreditNotesPreviewRouteHandler: RouteHandler<
  typeof getV1CreditNotesPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditNotesPreviewLinesRouteHandler: RouteHandler<
  typeof getV1CreditNotesPreviewLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditNotesCreditNoteLinesRouteHandler: RouteHandler<
  typeof getV1CreditNotesCreditNoteLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditNotesIdRouteHandler: RouteHandler<typeof getV1CreditNotesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CreditNotesIdRouteHandler: RouteHandler<
  typeof postV1CreditNotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CreditNotesIdVoidRouteHandler: RouteHandler<
  typeof postV1CreditNotesIdVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersRouteHandler: RouteHandler<typeof getV1CustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersRouteHandler: RouteHandler<typeof postV1CustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersSearchRouteHandler: RouteHandler<
  typeof getV1CustomersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomersCustomerRouteHandler: RouteHandler<
  typeof deleteV1CustomersCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerBalanceTransactionsRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerBalanceTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerBalanceTransactionsRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerBalanceTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerBalanceTransactionsTransactionRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerBalanceTransactionsTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerBalanceTransactionsTransactionRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerBalanceTransactionsTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerBankAccountsRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerBankAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerBankAccountsRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerBankAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomersCustomerBankAccountsIdRouteHandler: RouteHandler<
  typeof deleteV1CustomersCustomerBankAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerBankAccountsIdRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerBankAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerBankAccountsIdRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerBankAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerBankAccountsIdVerifyRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerBankAccountsIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerCardsRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerCardsRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomersCustomerCardsIdRouteHandler: RouteHandler<
  typeof deleteV1CustomersCustomerCardsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerCardsIdRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerCardsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerCardsIdRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerCardsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerCashBalanceRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerCashBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerCashBalanceRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerCashBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerCashBalanceTransactionsRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerCashBalanceTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerCashBalanceTransactionsTransactionRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerCashBalanceTransactionsTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomersCustomerDiscountRouteHandler: RouteHandler<
  typeof deleteV1CustomersCustomerDiscountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerDiscountRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerDiscountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerFundingInstructionsRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerFundingInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerPaymentMethodsRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerPaymentMethodsPaymentMethodRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerPaymentMethodsPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerSourcesRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerSourcesRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomersCustomerSourcesIdRouteHandler: RouteHandler<
  typeof deleteV1CustomersCustomerSourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerSourcesIdRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerSourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerSourcesIdRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerSourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerSourcesIdVerifyRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerSourcesIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerSubscriptionsRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerSubscriptionsRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdRouteHandler: RouteHandler<
  typeof deleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerSubscriptionsSubscriptionExposedIdRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerSubscriptionsSubscriptionExposedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerSubscriptionsSubscriptionExposedIdRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerSubscriptionsSubscriptionExposedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountRouteHandler: RouteHandler<
  typeof deleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerTaxIdsRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerTaxIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerTaxIdsRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerTaxIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomersCustomerTaxIdsIdRouteHandler: RouteHandler<
  typeof deleteV1CustomersCustomerTaxIdsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerTaxIdsIdRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerTaxIdsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DisputesRouteHandler: RouteHandler<typeof getV1DisputesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DisputesDisputeRouteHandler: RouteHandler<
  typeof getV1DisputesDisputeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DisputesDisputeRouteHandler: RouteHandler<
  typeof postV1DisputesDisputeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DisputesDisputeCloseRouteHandler: RouteHandler<
  typeof postV1DisputesDisputeCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EphemeralKeysRouteHandler: RouteHandler<
  typeof postV1EphemeralKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1EphemeralKeysKeyRouteHandler: RouteHandler<
  typeof deleteV1EphemeralKeysKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventsRouteHandler: RouteHandler<typeof getV1EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventsIdRouteHandler: RouteHandler<typeof getV1EventsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExchangeRatesRouteHandler: RouteHandler<typeof getV1ExchangeRatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ExchangeRatesRateIdRouteHandler: RouteHandler<
  typeof getV1ExchangeRatesRateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FileLinksRouteHandler: RouteHandler<typeof getV1FileLinksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FileLinksRouteHandler: RouteHandler<typeof postV1FileLinksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FileLinksLinkRouteHandler: RouteHandler<typeof getV1FileLinksLinkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1FileLinksLinkRouteHandler: RouteHandler<
  typeof postV1FileLinksLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FilesRouteHandler: RouteHandler<typeof getV1FilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FilesRouteHandler: RouteHandler<typeof postV1FilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FilesFileRouteHandler: RouteHandler<typeof getV1FilesFileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialConnectionsAccountsRouteHandler: RouteHandler<
  typeof getV1FinancialConnectionsAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialConnectionsAccountsAccountRouteHandler: RouteHandler<
  typeof getV1FinancialConnectionsAccountsAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FinancialConnectionsAccountsAccountDisconnectRouteHandler: RouteHandler<
  typeof postV1FinancialConnectionsAccountsAccountDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialConnectionsAccountsAccountOwnersRouteHandler: RouteHandler<
  typeof getV1FinancialConnectionsAccountsAccountOwnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FinancialConnectionsAccountsAccountRefreshRouteHandler: RouteHandler<
  typeof postV1FinancialConnectionsAccountsAccountRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FinancialConnectionsSessionsRouteHandler: RouteHandler<
  typeof postV1FinancialConnectionsSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialConnectionsSessionsSessionRouteHandler: RouteHandler<
  typeof getV1FinancialConnectionsSessionsSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IdentityVerificationReportsRouteHandler: RouteHandler<
  typeof getV1IdentityVerificationReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IdentityVerificationReportsReportRouteHandler: RouteHandler<
  typeof getV1IdentityVerificationReportsReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IdentityVerificationSessionsRouteHandler: RouteHandler<
  typeof getV1IdentityVerificationSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IdentityVerificationSessionsRouteHandler: RouteHandler<
  typeof postV1IdentityVerificationSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IdentityVerificationSessionsSessionRouteHandler: RouteHandler<
  typeof getV1IdentityVerificationSessionsSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IdentityVerificationSessionsSessionRouteHandler: RouteHandler<
  typeof postV1IdentityVerificationSessionsSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IdentityVerificationSessionsSessionCancelRouteHandler: RouteHandler<
  typeof postV1IdentityVerificationSessionsSessionCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IdentityVerificationSessionsSessionRedactRouteHandler: RouteHandler<
  typeof postV1IdentityVerificationSessionsSessionRedactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoiceitemsRouteHandler: RouteHandler<typeof getV1InvoiceitemsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1InvoiceitemsRouteHandler: RouteHandler<typeof postV1InvoiceitemsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1InvoiceitemsInvoiceitemRouteHandler: RouteHandler<
  typeof deleteV1InvoiceitemsInvoiceitemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoiceitemsInvoiceitemRouteHandler: RouteHandler<
  typeof getV1InvoiceitemsInvoiceitemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoiceitemsInvoiceitemRouteHandler: RouteHandler<
  typeof postV1InvoiceitemsInvoiceitemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesRouteHandler: RouteHandler<typeof getV1InvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesRouteHandler: RouteHandler<typeof postV1InvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesSearchRouteHandler: RouteHandler<
  typeof getV1InvoicesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesUpcomingRouteHandler: RouteHandler<
  typeof getV1InvoicesUpcomingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesUpcomingLinesRouteHandler: RouteHandler<
  typeof getV1InvoicesUpcomingLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1InvoicesInvoiceRouteHandler: RouteHandler<
  typeof deleteV1InvoicesInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesInvoiceRouteHandler: RouteHandler<
  typeof getV1InvoicesInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesInvoiceRouteHandler: RouteHandler<
  typeof postV1InvoicesInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesInvoiceFinalizeRouteHandler: RouteHandler<
  typeof postV1InvoicesInvoiceFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesInvoiceLinesRouteHandler: RouteHandler<
  typeof getV1InvoicesInvoiceLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesInvoiceMarkUncollectibleRouteHandler: RouteHandler<
  typeof postV1InvoicesInvoiceMarkUncollectibleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesInvoicePayRouteHandler: RouteHandler<
  typeof postV1InvoicesInvoicePayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesInvoiceSendRouteHandler: RouteHandler<
  typeof postV1InvoicesInvoiceSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesInvoiceVoidRouteHandler: RouteHandler<
  typeof postV1InvoicesInvoiceVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IssuingAuthorizationsRouteHandler: RouteHandler<
  typeof getV1IssuingAuthorizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IssuingAuthorizationsAuthorizationRouteHandler: RouteHandler<
  typeof getV1IssuingAuthorizationsAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IssuingAuthorizationsAuthorizationRouteHandler: RouteHandler<
  typeof postV1IssuingAuthorizationsAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IssuingAuthorizationsAuthorizationApproveRouteHandler: RouteHandler<
  typeof postV1IssuingAuthorizationsAuthorizationApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IssuingAuthorizationsAuthorizationDeclineRouteHandler: RouteHandler<
  typeof postV1IssuingAuthorizationsAuthorizationDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IssuingCardholdersRouteHandler: RouteHandler<
  typeof getV1IssuingCardholdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IssuingCardholdersRouteHandler: RouteHandler<
  typeof postV1IssuingCardholdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IssuingCardholdersCardholderRouteHandler: RouteHandler<
  typeof getV1IssuingCardholdersCardholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IssuingCardholdersCardholderRouteHandler: RouteHandler<
  typeof postV1IssuingCardholdersCardholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IssuingCardsRouteHandler: RouteHandler<typeof getV1IssuingCardsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1IssuingCardsRouteHandler: RouteHandler<typeof postV1IssuingCardsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1IssuingCardsCardRouteHandler: RouteHandler<
  typeof getV1IssuingCardsCardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IssuingCardsCardRouteHandler: RouteHandler<
  typeof postV1IssuingCardsCardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IssuingDisputesRouteHandler: RouteHandler<
  typeof getV1IssuingDisputesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IssuingDisputesRouteHandler: RouteHandler<
  typeof postV1IssuingDisputesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IssuingDisputesDisputeRouteHandler: RouteHandler<
  typeof getV1IssuingDisputesDisputeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IssuingDisputesDisputeRouteHandler: RouteHandler<
  typeof postV1IssuingDisputesDisputeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IssuingDisputesDisputeSubmitRouteHandler: RouteHandler<
  typeof postV1IssuingDisputesDisputeSubmitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IssuingSettlementsRouteHandler: RouteHandler<
  typeof getV1IssuingSettlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IssuingSettlementsSettlementRouteHandler: RouteHandler<
  typeof getV1IssuingSettlementsSettlementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IssuingSettlementsSettlementRouteHandler: RouteHandler<
  typeof postV1IssuingSettlementsSettlementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IssuingTransactionsRouteHandler: RouteHandler<
  typeof getV1IssuingTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IssuingTransactionsTransactionRouteHandler: RouteHandler<
  typeof getV1IssuingTransactionsTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IssuingTransactionsTransactionRouteHandler: RouteHandler<
  typeof postV1IssuingTransactionsTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1LinkAccountSessionsRouteHandler: RouteHandler<
  typeof postV1LinkAccountSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LinkAccountSessionsSessionRouteHandler: RouteHandler<
  typeof getV1LinkAccountSessionsSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LinkedAccountsRouteHandler: RouteHandler<
  typeof getV1LinkedAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LinkedAccountsAccountRouteHandler: RouteHandler<
  typeof getV1LinkedAccountsAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1LinkedAccountsAccountDisconnectRouteHandler: RouteHandler<
  typeof postV1LinkedAccountsAccountDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LinkedAccountsAccountOwnersRouteHandler: RouteHandler<
  typeof getV1LinkedAccountsAccountOwnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1LinkedAccountsAccountRefreshRouteHandler: RouteHandler<
  typeof postV1LinkedAccountsAccountRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MandatesMandateRouteHandler: RouteHandler<
  typeof getV1MandatesMandateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentIntentsRouteHandler: RouteHandler<
  typeof getV1PaymentIntentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentIntentsRouteHandler: RouteHandler<
  typeof postV1PaymentIntentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentIntentsSearchRouteHandler: RouteHandler<
  typeof getV1PaymentIntentsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentIntentsIntentRouteHandler: RouteHandler<
  typeof getV1PaymentIntentsIntentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentIntentsIntentRouteHandler: RouteHandler<
  typeof postV1PaymentIntentsIntentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentIntentsIntentApplyCustomerBalanceRouteHandler: RouteHandler<
  typeof postV1PaymentIntentsIntentApplyCustomerBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentIntentsIntentCancelRouteHandler: RouteHandler<
  typeof postV1PaymentIntentsIntentCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentIntentsIntentCaptureRouteHandler: RouteHandler<
  typeof postV1PaymentIntentsIntentCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentIntentsIntentConfirmRouteHandler: RouteHandler<
  typeof postV1PaymentIntentsIntentConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentIntentsIntentIncrementAuthorizationRouteHandler: RouteHandler<
  typeof postV1PaymentIntentsIntentIncrementAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentIntentsIntentVerifyMicrodepositsRouteHandler: RouteHandler<
  typeof postV1PaymentIntentsIntentVerifyMicrodepositsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentLinksRouteHandler: RouteHandler<typeof getV1PaymentLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1PaymentLinksRouteHandler: RouteHandler<typeof postV1PaymentLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1PaymentLinksPaymentLinkRouteHandler: RouteHandler<
  typeof getV1PaymentLinksPaymentLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentLinksPaymentLinkRouteHandler: RouteHandler<
  typeof postV1PaymentLinksPaymentLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentLinksPaymentLinkLineItemsRouteHandler: RouteHandler<
  typeof getV1PaymentLinksPaymentLinkLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentMethodsRouteHandler: RouteHandler<
  typeof getV1PaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentMethodsPaymentMethodRouteHandler: RouteHandler<
  typeof getV1PaymentMethodsPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsPaymentMethodRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsPaymentMethodAttachRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsPaymentMethodAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentMethodsPaymentMethodDetachRouteHandler: RouteHandler<
  typeof postV1PaymentMethodsPaymentMethodDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PayoutsRouteHandler: RouteHandler<typeof getV1PayoutsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PayoutsRouteHandler: RouteHandler<typeof postV1PayoutsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PayoutsPayoutRouteHandler: RouteHandler<typeof getV1PayoutsPayoutRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1PayoutsPayoutRouteHandler: RouteHandler<
  typeof postV1PayoutsPayoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PayoutsPayoutCancelRouteHandler: RouteHandler<
  typeof postV1PayoutsPayoutCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PayoutsPayoutReverseRouteHandler: RouteHandler<
  typeof postV1PayoutsPayoutReverseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PlansRouteHandler: RouteHandler<typeof getV1PlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PlansRouteHandler: RouteHandler<typeof postV1PlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PlansPlanRouteHandler: RouteHandler<typeof deleteV1PlansPlanRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1PlansPlanRouteHandler: RouteHandler<typeof getV1PlansPlanRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PlansPlanRouteHandler: RouteHandler<typeof postV1PlansPlanRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PricesRouteHandler: RouteHandler<typeof getV1PricesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PricesRouteHandler: RouteHandler<typeof postV1PricesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PricesSearchRouteHandler: RouteHandler<typeof getV1PricesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1PricesPriceRouteHandler: RouteHandler<typeof getV1PricesPriceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1PricesPriceRouteHandler: RouteHandler<typeof postV1PricesPriceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ProductsRouteHandler: RouteHandler<typeof getV1ProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsRouteHandler: RouteHandler<typeof postV1ProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsSearchRouteHandler: RouteHandler<
  typeof getV1ProductsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsIdRouteHandler: RouteHandler<typeof deleteV1ProductsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ProductsIdRouteHandler: RouteHandler<typeof getV1ProductsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsIdRouteHandler: RouteHandler<typeof postV1ProductsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1PromotionCodesRouteHandler: RouteHandler<
  typeof getV1PromotionCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PromotionCodesRouteHandler: RouteHandler<
  typeof postV1PromotionCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PromotionCodesPromotionCodeRouteHandler: RouteHandler<
  typeof getV1PromotionCodesPromotionCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PromotionCodesPromotionCodeRouteHandler: RouteHandler<
  typeof postV1PromotionCodesPromotionCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1QuotesRouteHandler: RouteHandler<typeof getV1QuotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1QuotesRouteHandler: RouteHandler<typeof postV1QuotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1QuotesQuoteRouteHandler: RouteHandler<typeof getV1QuotesQuoteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1QuotesQuoteRouteHandler: RouteHandler<typeof postV1QuotesQuoteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1QuotesQuoteAcceptRouteHandler: RouteHandler<
  typeof postV1QuotesQuoteAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1QuotesQuoteCancelRouteHandler: RouteHandler<
  typeof postV1QuotesQuoteCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1QuotesQuoteComputedUpfrontLineItemsRouteHandler: RouteHandler<
  typeof getV1QuotesQuoteComputedUpfrontLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1QuotesQuoteFinalizeRouteHandler: RouteHandler<
  typeof postV1QuotesQuoteFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1QuotesQuoteLineItemsRouteHandler: RouteHandler<
  typeof getV1QuotesQuoteLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1QuotesQuotePdfRouteHandler: RouteHandler<
  typeof getV1QuotesQuotePdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RadarEarlyFraudWarningsRouteHandler: RouteHandler<
  typeof getV1RadarEarlyFraudWarningsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RadarEarlyFraudWarningsEarlyFraudWarningRouteHandler: RouteHandler<
  typeof getV1RadarEarlyFraudWarningsEarlyFraudWarningRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RadarValueListItemsRouteHandler: RouteHandler<
  typeof getV1RadarValueListItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RadarValueListItemsRouteHandler: RouteHandler<
  typeof postV1RadarValueListItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1RadarValueListItemsItemRouteHandler: RouteHandler<
  typeof deleteV1RadarValueListItemsItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RadarValueListItemsItemRouteHandler: RouteHandler<
  typeof getV1RadarValueListItemsItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RadarValueListsRouteHandler: RouteHandler<
  typeof getV1RadarValueListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RadarValueListsRouteHandler: RouteHandler<
  typeof postV1RadarValueListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1RadarValueListsValueListRouteHandler: RouteHandler<
  typeof deleteV1RadarValueListsValueListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RadarValueListsValueListRouteHandler: RouteHandler<
  typeof getV1RadarValueListsValueListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RadarValueListsValueListRouteHandler: RouteHandler<
  typeof postV1RadarValueListsValueListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RefundsRouteHandler: RouteHandler<typeof getV1RefundsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RefundsRouteHandler: RouteHandler<typeof postV1RefundsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RefundsRefundRouteHandler: RouteHandler<typeof getV1RefundsRefundRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1RefundsRefundRouteHandler: RouteHandler<
  typeof postV1RefundsRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RefundsRefundCancelRouteHandler: RouteHandler<
  typeof postV1RefundsRefundCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportingReportRunsRouteHandler: RouteHandler<
  typeof getV1ReportingReportRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReportingReportRunsRouteHandler: RouteHandler<
  typeof postV1ReportingReportRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportingReportRunsReportRunRouteHandler: RouteHandler<
  typeof getV1ReportingReportRunsReportRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportingReportTypesRouteHandler: RouteHandler<
  typeof getV1ReportingReportTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportingReportTypesReportTypeRouteHandler: RouteHandler<
  typeof getV1ReportingReportTypesReportTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReviewsRouteHandler: RouteHandler<typeof getV1ReviewsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReviewsReviewRouteHandler: RouteHandler<typeof getV1ReviewsReviewRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ReviewsReviewApproveRouteHandler: RouteHandler<
  typeof postV1ReviewsReviewApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SetupAttemptsRouteHandler: RouteHandler<typeof getV1SetupAttemptsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1SetupIntentsRouteHandler: RouteHandler<typeof getV1SetupIntentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SetupIntentsRouteHandler: RouteHandler<typeof postV1SetupIntentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1SetupIntentsIntentRouteHandler: RouteHandler<
  typeof getV1SetupIntentsIntentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SetupIntentsIntentRouteHandler: RouteHandler<
  typeof postV1SetupIntentsIntentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SetupIntentsIntentCancelRouteHandler: RouteHandler<
  typeof postV1SetupIntentsIntentCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SetupIntentsIntentConfirmRouteHandler: RouteHandler<
  typeof postV1SetupIntentsIntentConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SetupIntentsIntentVerifyMicrodepositsRouteHandler: RouteHandler<
  typeof postV1SetupIntentsIntentVerifyMicrodepositsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ShippingRatesRouteHandler: RouteHandler<typeof getV1ShippingRatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ShippingRatesRouteHandler: RouteHandler<
  typeof postV1ShippingRatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ShippingRatesShippingRateTokenRouteHandler: RouteHandler<
  typeof getV1ShippingRatesShippingRateTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ShippingRatesShippingRateTokenRouteHandler: RouteHandler<
  typeof postV1ShippingRatesShippingRateTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SigmaScheduledQueryRunsRouteHandler: RouteHandler<
  typeof getV1SigmaScheduledQueryRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SigmaScheduledQueryRunsScheduledQueryRunRouteHandler: RouteHandler<
  typeof getV1SigmaScheduledQueryRunsScheduledQueryRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesRouteHandler: RouteHandler<typeof postV1SourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesSourceRouteHandler: RouteHandler<typeof getV1SourcesSourceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SourcesSourceRouteHandler: RouteHandler<
  typeof postV1SourcesSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesSourceMandateNotificationsMandateNotificationRouteHandler: RouteHandler<
  typeof getV1SourcesSourceMandateNotificationsMandateNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesSourceSourceTransactionsRouteHandler: RouteHandler<
  typeof getV1SourcesSourceSourceTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesSourceSourceTransactionsSourceTransactionRouteHandler: RouteHandler<
  typeof getV1SourcesSourceSourceTransactionsSourceTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesSourceVerifyRouteHandler: RouteHandler<
  typeof postV1SourcesSourceVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionItemsRouteHandler: RouteHandler<
  typeof getV1SubscriptionItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionItemsRouteHandler: RouteHandler<
  typeof postV1SubscriptionItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SubscriptionItemsItemRouteHandler: RouteHandler<
  typeof deleteV1SubscriptionItemsItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionItemsItemRouteHandler: RouteHandler<
  typeof getV1SubscriptionItemsItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionItemsItemRouteHandler: RouteHandler<
  typeof postV1SubscriptionItemsItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionItemsSubscriptionItemUsageRecordSummariesRouteHandler: RouteHandler<
  typeof getV1SubscriptionItemsSubscriptionItemUsageRecordSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionItemsSubscriptionItemUsageRecordsRouteHandler: RouteHandler<
  typeof postV1SubscriptionItemsSubscriptionItemUsageRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionSchedulesRouteHandler: RouteHandler<
  typeof getV1SubscriptionSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionSchedulesRouteHandler: RouteHandler<
  typeof postV1SubscriptionSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionSchedulesScheduleRouteHandler: RouteHandler<
  typeof getV1SubscriptionSchedulesScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionSchedulesScheduleRouteHandler: RouteHandler<
  typeof postV1SubscriptionSchedulesScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionSchedulesScheduleCancelRouteHandler: RouteHandler<
  typeof postV1SubscriptionSchedulesScheduleCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionSchedulesScheduleReleaseRouteHandler: RouteHandler<
  typeof postV1SubscriptionSchedulesScheduleReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionsRouteHandler: RouteHandler<typeof getV1SubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionsRouteHandler: RouteHandler<
  typeof postV1SubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionsSearchRouteHandler: RouteHandler<
  typeof getV1SubscriptionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SubscriptionsSubscriptionExposedIdRouteHandler: RouteHandler<
  typeof deleteV1SubscriptionsSubscriptionExposedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SubscriptionsSubscriptionExposedIdRouteHandler: RouteHandler<
  typeof getV1SubscriptionsSubscriptionExposedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionsSubscriptionExposedIdRouteHandler: RouteHandler<
  typeof postV1SubscriptionsSubscriptionExposedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SubscriptionsSubscriptionExposedIdDiscountRouteHandler: RouteHandler<
  typeof deleteV1SubscriptionsSubscriptionExposedIdDiscountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SubscriptionsSubscriptionResumeRouteHandler: RouteHandler<
  typeof postV1SubscriptionsSubscriptionResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxCodesRouteHandler: RouteHandler<typeof getV1TaxCodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxCodesIdRouteHandler: RouteHandler<typeof getV1TaxCodesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxRatesRouteHandler: RouteHandler<typeof getV1TaxRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TaxRatesRouteHandler: RouteHandler<typeof postV1TaxRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxRatesTaxRateRouteHandler: RouteHandler<
  typeof getV1TaxRatesTaxRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TaxRatesTaxRateRouteHandler: RouteHandler<
  typeof postV1TaxRatesTaxRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TerminalConfigurationsRouteHandler: RouteHandler<
  typeof getV1TerminalConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalConfigurationsRouteHandler: RouteHandler<
  typeof postV1TerminalConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TerminalConfigurationsConfigurationRouteHandler: RouteHandler<
  typeof deleteV1TerminalConfigurationsConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TerminalConfigurationsConfigurationRouteHandler: RouteHandler<
  typeof getV1TerminalConfigurationsConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalConfigurationsConfigurationRouteHandler: RouteHandler<
  typeof postV1TerminalConfigurationsConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalConnectionTokensRouteHandler: RouteHandler<
  typeof postV1TerminalConnectionTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TerminalLocationsRouteHandler: RouteHandler<
  typeof getV1TerminalLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalLocationsRouteHandler: RouteHandler<
  typeof postV1TerminalLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TerminalLocationsLocationRouteHandler: RouteHandler<
  typeof deleteV1TerminalLocationsLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TerminalLocationsLocationRouteHandler: RouteHandler<
  typeof getV1TerminalLocationsLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalLocationsLocationRouteHandler: RouteHandler<
  typeof postV1TerminalLocationsLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TerminalReadersRouteHandler: RouteHandler<
  typeof getV1TerminalReadersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalReadersRouteHandler: RouteHandler<
  typeof postV1TerminalReadersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TerminalReadersReaderRouteHandler: RouteHandler<
  typeof deleteV1TerminalReadersReaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TerminalReadersReaderRouteHandler: RouteHandler<
  typeof getV1TerminalReadersReaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalReadersReaderRouteHandler: RouteHandler<
  typeof postV1TerminalReadersReaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalReadersReaderCancelActionRouteHandler: RouteHandler<
  typeof postV1TerminalReadersReaderCancelActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalReadersReaderProcessPaymentIntentRouteHandler: RouteHandler<
  typeof postV1TerminalReadersReaderProcessPaymentIntentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalReadersReaderProcessSetupIntentRouteHandler: RouteHandler<
  typeof postV1TerminalReadersReaderProcessSetupIntentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalReadersReaderRefundPaymentRouteHandler: RouteHandler<
  typeof postV1TerminalReadersReaderRefundPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TerminalReadersReaderSetReaderDisplayRouteHandler: RouteHandler<
  typeof postV1TerminalReadersReaderSetReaderDisplayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersCustomersCustomerFundCashBalanceRouteHandler: RouteHandler<
  typeof postV1TestHelpersCustomersCustomerFundCashBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersIssuingCardsCardShippingDeliverRouteHandler: RouteHandler<
  typeof postV1TestHelpersIssuingCardsCardShippingDeliverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersIssuingCardsCardShippingFailRouteHandler: RouteHandler<
  typeof postV1TestHelpersIssuingCardsCardShippingFailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersIssuingCardsCardShippingReturnRouteHandler: RouteHandler<
  typeof postV1TestHelpersIssuingCardsCardShippingReturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersIssuingCardsCardShippingShipRouteHandler: RouteHandler<
  typeof postV1TestHelpersIssuingCardsCardShippingShipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersRefundsRefundExpireRouteHandler: RouteHandler<
  typeof postV1TestHelpersRefundsRefundExpireRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTerminalReadersReaderPresentPaymentMethodRouteHandler: RouteHandler<
  typeof postV1TestHelpersTerminalReadersReaderPresentPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TestHelpersTestClocksRouteHandler: RouteHandler<
  typeof getV1TestHelpersTestClocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTestClocksRouteHandler: RouteHandler<
  typeof postV1TestHelpersTestClocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TestHelpersTestClocksTestClockRouteHandler: RouteHandler<
  typeof deleteV1TestHelpersTestClocksTestClockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TestHelpersTestClocksTestClockRouteHandler: RouteHandler<
  typeof getV1TestHelpersTestClocksTestClockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTestClocksTestClockAdvanceRouteHandler: RouteHandler<
  typeof postV1TestHelpersTestClocksTestClockAdvanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTreasuryInboundTransfersIdFailRouteHandler: RouteHandler<
  typeof postV1TestHelpersTreasuryInboundTransfersIdFailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTreasuryInboundTransfersIdReturnRouteHandler: RouteHandler<
  typeof postV1TestHelpersTreasuryInboundTransfersIdReturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTreasuryInboundTransfersIdSucceedRouteHandler: RouteHandler<
  typeof postV1TestHelpersTreasuryInboundTransfersIdSucceedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTreasuryOutboundPaymentsIdFailRouteHandler: RouteHandler<
  typeof postV1TestHelpersTreasuryOutboundPaymentsIdFailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTreasuryOutboundPaymentsIdPostRouteHandler: RouteHandler<
  typeof postV1TestHelpersTreasuryOutboundPaymentsIdPostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTreasuryOutboundPaymentsIdReturnRouteHandler: RouteHandler<
  typeof postV1TestHelpersTreasuryOutboundPaymentsIdReturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTreasuryOutboundTransfersOutboundTransferFailRouteHandler: RouteHandler<
  typeof postV1TestHelpersTreasuryOutboundTransfersOutboundTransferFailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTreasuryOutboundTransfersOutboundTransferPostRouteHandler: RouteHandler<
  typeof postV1TestHelpersTreasuryOutboundTransfersOutboundTransferPostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTreasuryOutboundTransfersOutboundTransferReturnRouteHandler: RouteHandler<
  typeof postV1TestHelpersTreasuryOutboundTransfersOutboundTransferReturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTreasuryReceivedCreditsRouteHandler: RouteHandler<
  typeof postV1TestHelpersTreasuryReceivedCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestHelpersTreasuryReceivedDebitsRouteHandler: RouteHandler<
  typeof postV1TestHelpersTreasuryReceivedDebitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TokensRouteHandler: RouteHandler<typeof postV1TokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TokensTokenRouteHandler: RouteHandler<typeof getV1TokensTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1TopupsRouteHandler: RouteHandler<typeof getV1TopupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TopupsRouteHandler: RouteHandler<typeof postV1TopupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TopupsTopupRouteHandler: RouteHandler<typeof getV1TopupsTopupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1TopupsTopupRouteHandler: RouteHandler<typeof postV1TopupsTopupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1TopupsTopupCancelRouteHandler: RouteHandler<
  typeof postV1TopupsTopupCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransfersRouteHandler: RouteHandler<typeof getV1TransfersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TransfersRouteHandler: RouteHandler<typeof postV1TransfersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransfersIdReversalsRouteHandler: RouteHandler<
  typeof getV1TransfersIdReversalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TransfersIdReversalsRouteHandler: RouteHandler<
  typeof postV1TransfersIdReversalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransfersTransferRouteHandler: RouteHandler<
  typeof getV1TransfersTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TransfersTransferRouteHandler: RouteHandler<
  typeof postV1TransfersTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransfersTransferReversalsIdRouteHandler: RouteHandler<
  typeof getV1TransfersTransferReversalsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TransfersTransferReversalsIdRouteHandler: RouteHandler<
  typeof postV1TransfersTransferReversalsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryCreditReversalsRouteHandler: RouteHandler<
  typeof getV1TreasuryCreditReversalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TreasuryCreditReversalsRouteHandler: RouteHandler<
  typeof postV1TreasuryCreditReversalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryCreditReversalsCreditReversalRouteHandler: RouteHandler<
  typeof getV1TreasuryCreditReversalsCreditReversalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryDebitReversalsRouteHandler: RouteHandler<
  typeof getV1TreasuryDebitReversalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TreasuryDebitReversalsRouteHandler: RouteHandler<
  typeof postV1TreasuryDebitReversalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryDebitReversalsDebitReversalRouteHandler: RouteHandler<
  typeof getV1TreasuryDebitReversalsDebitReversalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryFinancialAccountsRouteHandler: RouteHandler<
  typeof getV1TreasuryFinancialAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TreasuryFinancialAccountsRouteHandler: RouteHandler<
  typeof postV1TreasuryFinancialAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryFinancialAccountsFinancialAccountRouteHandler: RouteHandler<
  typeof getV1TreasuryFinancialAccountsFinancialAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TreasuryFinancialAccountsFinancialAccountRouteHandler: RouteHandler<
  typeof postV1TreasuryFinancialAccountsFinancialAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryFinancialAccountsFinancialAccountFeaturesRouteHandler: RouteHandler<
  typeof getV1TreasuryFinancialAccountsFinancialAccountFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TreasuryFinancialAccountsFinancialAccountFeaturesRouteHandler: RouteHandler<
  typeof postV1TreasuryFinancialAccountsFinancialAccountFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryInboundTransfersRouteHandler: RouteHandler<
  typeof getV1TreasuryInboundTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TreasuryInboundTransfersRouteHandler: RouteHandler<
  typeof postV1TreasuryInboundTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryInboundTransfersIdRouteHandler: RouteHandler<
  typeof getV1TreasuryInboundTransfersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TreasuryInboundTransfersInboundTransferCancelRouteHandler: RouteHandler<
  typeof postV1TreasuryInboundTransfersInboundTransferCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryOutboundPaymentsRouteHandler: RouteHandler<
  typeof getV1TreasuryOutboundPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TreasuryOutboundPaymentsRouteHandler: RouteHandler<
  typeof postV1TreasuryOutboundPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryOutboundPaymentsIdRouteHandler: RouteHandler<
  typeof getV1TreasuryOutboundPaymentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TreasuryOutboundPaymentsIdCancelRouteHandler: RouteHandler<
  typeof postV1TreasuryOutboundPaymentsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryOutboundTransfersRouteHandler: RouteHandler<
  typeof getV1TreasuryOutboundTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TreasuryOutboundTransfersRouteHandler: RouteHandler<
  typeof postV1TreasuryOutboundTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryOutboundTransfersOutboundTransferRouteHandler: RouteHandler<
  typeof getV1TreasuryOutboundTransfersOutboundTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TreasuryOutboundTransfersOutboundTransferCancelRouteHandler: RouteHandler<
  typeof postV1TreasuryOutboundTransfersOutboundTransferCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryReceivedCreditsRouteHandler: RouteHandler<
  typeof getV1TreasuryReceivedCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryReceivedCreditsIdRouteHandler: RouteHandler<
  typeof getV1TreasuryReceivedCreditsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryReceivedDebitsRouteHandler: RouteHandler<
  typeof getV1TreasuryReceivedDebitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryReceivedDebitsIdRouteHandler: RouteHandler<
  typeof getV1TreasuryReceivedDebitsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryTransactionEntriesRouteHandler: RouteHandler<
  typeof getV1TreasuryTransactionEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryTransactionEntriesIdRouteHandler: RouteHandler<
  typeof getV1TreasuryTransactionEntriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryTransactionsRouteHandler: RouteHandler<
  typeof getV1TreasuryTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TreasuryTransactionsIdRouteHandler: RouteHandler<
  typeof getV1TreasuryTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebhookEndpointsRouteHandler: RouteHandler<
  typeof getV1WebhookEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebhookEndpointsRouteHandler: RouteHandler<
  typeof postV1WebhookEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WebhookEndpointsWebhookEndpointRouteHandler: RouteHandler<
  typeof deleteV1WebhookEndpointsWebhookEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebhookEndpointsWebhookEndpointRouteHandler: RouteHandler<
  typeof getV1WebhookEndpointsWebhookEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebhookEndpointsWebhookEndpointRouteHandler: RouteHandler<
  typeof postV1WebhookEndpointsWebhookEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
