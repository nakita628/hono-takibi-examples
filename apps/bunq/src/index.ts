import { OpenAPIHono } from '@hono/zod-openapi'
import {
  additionalTransactionInformationCategoryHandler,
  additionalTransactionInformationCategoryUserDefinedHandler,
  attachmentHandler,
  attachmentPublicHandler,
  avatarHandler,
  billingContractSubscriptionHandler,
  bunqmeFundraiserProfileHandler,
  bunqmeFundraiserResultHandler,
  bunqmeTabHandler,
  bunqmeTabResultResponseHandler,
  callbackUrlHandler,
  cardBatchHandler,
  cardBatchReplaceHandler,
  cardCreditHandler,
  cardDebitHandler,
  cardHandler,
  cardNameHandler,
  certificatePinnedHandler,
  challengeRequestHandler,
  companyHandler,
  confirmationOfFundsHandler,
  contentHandler,
  credentialPasswordIpHandler,
  currencyCloudBeneficiaryHandler,
  currencyCloudBeneficiaryRequirementHandler,
  currencyCloudPaymentQuoteHandler,
  currencyConversionHandler,
  currencyConversionQuoteHandler,
  customerStatementHandler,
  definitionHandler,
  deviceHandler,
  deviceServerHandler,
  draftPaymentHandler,
  eventHandler,
  exportAnnualOverviewHandler,
  exportRibHandler,
  exportStatementCardCsvHandler,
  exportStatementCardHandler,
  exportStatementCardPdfHandler,
  featureAnnouncementHandler,
  generatedCvc2Handler,
  healthCheckHandler,
  idealMerchantTransactionHandler,
  insightPreferenceDateHandler,
  insightsHandler,
  insightsSearchHandler,
  installationHandler,
  instanceHandler,
  invoiceExportHandler,
  invoiceHandler,
  ipHandler,
  legalNameHandler,
  limitHandler,
  mastercardActionHandler,
  monetaryAccountBankHandler,
  monetaryAccountCardHandler,
  monetaryAccountExternalHandler,
  monetaryAccountExternalSavingsHandler,
  monetaryAccountHandler,
  monetaryAccountJointHandler,
  monetaryAccountSavingsHandler,
  nameHandler,
  noteAttachmentHandler,
  noteTextHandler,
  notificationFilterEmailHandler,
  notificationFilterFailureHandler,
  notificationFilterPushHandler,
  notificationFilterUrlHandler,
  oauthClientHandler,
  paymentAutoAllocateHandler,
  paymentBatchHandler,
  paymentHandler,
  paymentServiceProviderCredentialHandler,
  paymentServiceProviderDraftPaymentHandler,
  paymentServiceProviderIssuerTransactionHandler,
  pdfContentHandler,
  replaceHandler,
  requestInquiryBatchHandler,
  requestInquiryHandler,
  requestResponseHandler,
  sandboxUserCompanyHandler,
  sandboxUserPersonHandler,
  scheduleHandler,
  scheduleInstanceHandler,
  schedulePaymentBatchHandler,
  schedulePaymentHandler,
  serverErrorHandler,
  serverPublicKeyHandler,
  sessionHandler,
  sessionServerHandler,
  shareInviteMonetaryAccountInquiryHandler,
  shareInviteMonetaryAccountResponseHandler,
  sofortMerchantTransactionHandler,
  statementHandler,
  switchServicePaymentHandler,
  tokenQrRequestIdealHandler,
  tokenQrRequestSofortHandler,
  transferwiseCurrencyHandler,
  transferwiseQuoteHandler,
  transferwiseQuoteTemporaryHandler,
  transferwiseRecipientHandler,
  transferwiseRecipientRequirementHandler,
  transferwiseTransferHandler,
  transferwiseTransferRequirementHandler,
  transferwiseUserHandler,
  treeProgressHandler,
  userCompanyHandler,
  userHandler,
  userPaymentServiceProviderHandler,
  userPersonHandler,
  whitelistSddHandler,
  whitelistSddOneOffHandler,
  whitelistSddRecurringHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', additionalTransactionInformationCategoryHandler)
  .route('/', additionalTransactionInformationCategoryUserDefinedHandler)
  .route('/', attachmentHandler)
  .route('/', attachmentPublicHandler)
  .route('/', avatarHandler)
  .route('/', billingContractSubscriptionHandler)
  .route('/', bunqmeFundraiserProfileHandler)
  .route('/', bunqmeFundraiserResultHandler)
  .route('/', bunqmeTabHandler)
  .route('/', bunqmeTabResultResponseHandler)
  .route('/', callbackUrlHandler)
  .route('/', cardHandler)
  .route('/', cardBatchHandler)
  .route('/', cardBatchReplaceHandler)
  .route('/', cardCreditHandler)
  .route('/', cardDebitHandler)
  .route('/', cardNameHandler)
  .route('/', certificatePinnedHandler)
  .route('/', challengeRequestHandler)
  .route('/', companyHandler)
  .route('/', confirmationOfFundsHandler)
  .route('/', contentHandler)
  .route('/', credentialPasswordIpHandler)
  .route('/', currencyCloudBeneficiaryHandler)
  .route('/', currencyCloudBeneficiaryRequirementHandler)
  .route('/', currencyCloudPaymentQuoteHandler)
  .route('/', currencyConversionHandler)
  .route('/', currencyConversionQuoteHandler)
  .route('/', customerStatementHandler)
  .route('/', definitionHandler)
  .route('/', deviceHandler)
  .route('/', deviceServerHandler)
  .route('/', draftPaymentHandler)
  .route('/', eventHandler)
  .route('/', exportAnnualOverviewHandler)
  .route('/', exportRibHandler)
  .route('/', exportStatementCardHandler)
  .route('/', exportStatementCardCsvHandler)
  .route('/', exportStatementCardPdfHandler)
  .route('/', featureAnnouncementHandler)
  .route('/', generatedCvc2Handler)
  .route('/', healthCheckHandler)
  .route('/', idealMerchantTransactionHandler)
  .route('/', insightPreferenceDateHandler)
  .route('/', insightsHandler)
  .route('/', insightsSearchHandler)
  .route('/', installationHandler)
  .route('/', instanceHandler)
  .route('/', invoiceHandler)
  .route('/', invoiceExportHandler)
  .route('/', ipHandler)
  .route('/', legalNameHandler)
  .route('/', limitHandler)
  .route('/', mastercardActionHandler)
  .route('/', monetaryAccountHandler)
  .route('/', monetaryAccountBankHandler)
  .route('/', monetaryAccountCardHandler)
  .route('/', monetaryAccountExternalHandler)
  .route('/', monetaryAccountExternalSavingsHandler)
  .route('/', monetaryAccountJointHandler)
  .route('/', monetaryAccountSavingsHandler)
  .route('/', nameHandler)
  .route('/', noteAttachmentHandler)
  .route('/', noteTextHandler)
  .route('/', notificationFilterEmailHandler)
  .route('/', notificationFilterFailureHandler)
  .route('/', notificationFilterPushHandler)
  .route('/', notificationFilterUrlHandler)
  .route('/', oauthClientHandler)
  .route('/', paymentHandler)
  .route('/', paymentAutoAllocateHandler)
  .route('/', paymentBatchHandler)
  .route('/', paymentServiceProviderCredentialHandler)
  .route('/', paymentServiceProviderDraftPaymentHandler)
  .route('/', paymentServiceProviderIssuerTransactionHandler)
  .route('/', pdfContentHandler)
  .route('/', replaceHandler)
  .route('/', requestInquiryHandler)
  .route('/', requestInquiryBatchHandler)
  .route('/', requestResponseHandler)
  .route('/', sandboxUserCompanyHandler)
  .route('/', sandboxUserPersonHandler)
  .route('/', scheduleHandler)
  .route('/', scheduleInstanceHandler)
  .route('/', schedulePaymentHandler)
  .route('/', schedulePaymentBatchHandler)
  .route('/', serverErrorHandler)
  .route('/', serverPublicKeyHandler)
  .route('/', sessionHandler)
  .route('/', sessionServerHandler)
  .route('/', shareInviteMonetaryAccountInquiryHandler)
  .route('/', shareInviteMonetaryAccountResponseHandler)
  .route('/', sofortMerchantTransactionHandler)
  .route('/', statementHandler)
  .route('/', switchServicePaymentHandler)
  .route('/', tokenQrRequestIdealHandler)
  .route('/', tokenQrRequestSofortHandler)
  .route('/', transferwiseCurrencyHandler)
  .route('/', transferwiseQuoteHandler)
  .route('/', transferwiseQuoteTemporaryHandler)
  .route('/', transferwiseRecipientHandler)
  .route('/', transferwiseRecipientRequirementHandler)
  .route('/', transferwiseTransferHandler)
  .route('/', transferwiseTransferRequirementHandler)
  .route('/', transferwiseUserHandler)
  .route('/', treeProgressHandler)
  .route('/', userHandler)
  .route('/', userCompanyHandler)
  .route('/', userPaymentServiceProviderHandler)
  .route('/', userPersonHandler)
  .route('/', whitelistSddHandler)
  .route('/', whitelistSddOneOffHandler)
  .route('/', whitelistSddRecurringHandler)

export default app
