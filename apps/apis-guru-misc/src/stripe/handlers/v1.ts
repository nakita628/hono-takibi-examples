import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountBankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountBankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountBankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountCapabilitiesCapabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountCapabilitiesCapabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountExternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountExternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountExternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountExternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountExternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountLoginLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountPeoplePersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountPeoplePersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountPeoplePersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountPersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountPersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountPersonsPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountPersonsPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountPersonsPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApplePayDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApplePayDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApplePayDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApplePayDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApplicationFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApplicationFeesFeeRefundsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApplicationFeesFeeRefundsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApplicationFeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApplicationFeesIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApplicationFeesIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApplicationFeesIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsSecretsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsSecretsFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BalanceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BalanceHistoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BalanceTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BalanceTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingPortalConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPortalConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingPortalConfigurationsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPortalConfigurationsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPortalSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargesChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChargesChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChargesChargeCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargesChargeDisputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChargesChargeDisputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChargesChargeDisputeCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChargesChargeRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargesChargeRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChargesChargeRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargesChargeRefundsRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChargesChargeRefundsRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CheckoutSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CheckoutSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CheckoutSessionsSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CheckoutSessionsSessionExpireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CheckoutSessionsSessionLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CountrySpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CountrySpecsCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CouponsCouponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CouponsCouponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CouponsCouponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditNotesPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditNotesPreviewLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditNotesCreditNoteLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditNotesIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomersCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerBalanceTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerBalanceTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerBalanceTransactionsTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerBalanceTransactionsTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomersCustomerBankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerBankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerBankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerBankAccountsIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomersCustomerCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerCashBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerCashBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerCashBalanceTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerCashBalanceTransactionsTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomersCustomerDiscountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerDiscountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerFundingInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerPaymentMethodsPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomersCustomerSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerSourcesIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerSubscriptionsSubscriptionExposedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerSubscriptionsSubscriptionExposedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerTaxIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerTaxIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomersCustomerTaxIdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerTaxIdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DisputesDisputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DisputesDisputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DisputesDisputeCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EphemeralKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EphemeralKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExchangeRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExchangeRatesRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FileLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FileLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FileLinksLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FileLinksLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialConnectionsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialConnectionsAccountsAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FinancialConnectionsAccountsAccountDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialConnectionsAccountsAccountOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FinancialConnectionsAccountsAccountRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FinancialConnectionsSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialConnectionsSessionsSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IdentityVerificationReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IdentityVerificationReportsReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IdentityVerificationSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IdentityVerificationSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IdentityVerificationSessionsSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IdentityVerificationSessionsSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IdentityVerificationSessionsSessionCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IdentityVerificationSessionsSessionRedactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoiceitemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoiceitemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InvoiceitemsInvoiceitemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoiceitemsInvoiceitemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoiceitemsInvoiceitemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesUpcomingLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InvoicesInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesInvoiceLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceMarkUncollectibleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoicePayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingAuthorizationsAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingAuthorizationsAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingAuthorizationsAuthorizationApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingAuthorizationsAuthorizationDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingCardholdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingCardholdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingCardholdersCardholderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingCardholdersCardholderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingCardsCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingCardsCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingDisputesDisputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingDisputesDisputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingDisputesDisputeSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingSettlementsSettlementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingSettlementsSettlementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IssuingTransactionsTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IssuingTransactionsTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LinkAccountSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LinkAccountSessionsSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LinkedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LinkedAccountsAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LinkedAccountsAccountDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LinkedAccountsAccountOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LinkedAccountsAccountRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MandatesMandateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentIntentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentIntentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentIntentsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentIntentsIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentIntentsIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentIntentsIntentApplyCustomerBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentIntentsIntentCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentIntentsIntentCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentIntentsIntentConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentIntentsIntentIncrementAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentIntentsIntentVerifyMicrodepositsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentLinksPaymentLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentLinksPaymentLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentLinksPaymentLinkLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentMethodsPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PayoutsPayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayoutsPayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayoutsPayoutCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayoutsPayoutReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PlansPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PlansPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PlansPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PricesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PricesPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PricesPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromotionCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PromotionCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromotionCodesPromotionCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PromotionCodesPromotionCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuotesQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesQuoteAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesQuoteCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuotesQuoteComputedUpfrontLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesQuoteFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuotesQuoteLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuotesQuotePdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RadarEarlyFraudWarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RadarEarlyFraudWarningsEarlyFraudWarningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RadarValueListItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RadarValueListItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RadarValueListItemsItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RadarValueListItemsItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RadarValueListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RadarValueListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RadarValueListsValueListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RadarValueListsValueListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RadarValueListsValueListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RefundsRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RefundsRefundCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportingReportRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReportingReportRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportingReportRunsReportRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportingReportTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportingReportTypesReportTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReviewsReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReviewsReviewApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SetupAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SetupIntentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SetupIntentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SetupIntentsIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SetupIntentsIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SetupIntentsIntentCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SetupIntentsIntentConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SetupIntentsIntentVerifyMicrodepositsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShippingRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShippingRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShippingRatesShippingRateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShippingRatesShippingRateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SigmaScheduledQueryRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SigmaScheduledQueryRunsScheduledQueryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesSourceMandateNotificationsMandateNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesSourceSourceTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesSourceSourceTransactionsSourceTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesSourceVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SubscriptionItemsItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionItemsItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionItemsItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionItemsSubscriptionItemUsageRecordSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionItemsSubscriptionItemUsageRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionSchedulesScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionSchedulesScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionSchedulesScheduleCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionSchedulesScheduleReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SubscriptionsSubscriptionExposedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubscriptionExposedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsSubscriptionExposedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SubscriptionsSubscriptionExposedIdDiscountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsSubscriptionResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxCodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxRatesTaxRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TaxRatesTaxRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TerminalConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TerminalConfigurationsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TerminalConfigurationsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalConfigurationsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalConnectionTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TerminalLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TerminalLocationsLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TerminalLocationsLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalLocationsLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TerminalReadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalReadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TerminalReadersReaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TerminalReadersReaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalReadersReaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalReadersReaderCancelActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalReadersReaderProcessPaymentIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalReadersReaderProcessSetupIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalReadersReaderRefundPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminalReadersReaderSetReaderDisplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersCustomersCustomerFundCashBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersIssuingCardsCardShippingDeliverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersIssuingCardsCardShippingFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersIssuingCardsCardShippingReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersIssuingCardsCardShippingShipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersRefundsRefundExpireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTerminalReadersReaderPresentPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TestHelpersTestClocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTestClocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TestHelpersTestClocksTestClockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TestHelpersTestClocksTestClockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTestClocksTestClockAdvanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTreasuryInboundTransfersIdFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTreasuryInboundTransfersIdReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTreasuryInboundTransfersIdSucceedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTreasuryOutboundPaymentsIdFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTreasuryOutboundPaymentsIdPostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTreasuryOutboundPaymentsIdReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTreasuryOutboundTransfersOutboundTransferFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTreasuryOutboundTransfersOutboundTransferPostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTreasuryOutboundTransfersOutboundTransferReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTreasuryReceivedCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestHelpersTreasuryReceivedDebitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TopupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TopupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TopupsTopupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TopupsTopupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TopupsTopupCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersIdReversalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransfersIdReversalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransfersTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersTransferReversalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransfersTransferReversalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryCreditReversalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TreasuryCreditReversalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryCreditReversalsCreditReversalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryDebitReversalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TreasuryDebitReversalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryDebitReversalsDebitReversalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryFinancialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TreasuryFinancialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryFinancialAccountsFinancialAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TreasuryFinancialAccountsFinancialAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryFinancialAccountsFinancialAccountFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TreasuryFinancialAccountsFinancialAccountFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryInboundTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TreasuryInboundTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryInboundTransfersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TreasuryInboundTransfersInboundTransferCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryOutboundPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TreasuryOutboundPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryOutboundPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TreasuryOutboundPaymentsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryOutboundTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TreasuryOutboundTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryOutboundTransfersOutboundTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TreasuryOutboundTransfersOutboundTransferCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryReceivedCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryReceivedCreditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryReceivedDebitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryReceivedDebitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryTransactionEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryTransactionEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TreasuryTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhookEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhookEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WebhookEndpointsWebhookEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhookEndpointsWebhookEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhookEndpointsWebhookEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
