import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  idealMerchantTransactionHandler,
  insightPreferenceDateHandler,
  insightsHandler,
  insightsSearchHandler,
  installationHandler,
  instanceHandler,
  invoiceHandler,
  ipHandler,
  legalNameHandler,
  limitHandler,
  mastercardActionHandler,
  monetaryAccountBankHandler,
  monetaryAccountExternalHandler,
  monetaryAccountHandler,
  monetaryAccountJointHandler,
  monetaryAccountSavingsHandler,
  nameHandler,
  noteAttachmentHandler,
  noteTextHandler,
  notificationFilterEmailHandler,
  notificationFilterPushHandler,
  notificationFilterUrlHandler,
  oauthClientHandler,
  paymentAutoAllocateHandler,
  paymentBatchHandler,
  paymentHandler,
  paymentServiceProviderCredentialHandler,
  paymentServiceProviderDraftPaymentHandler,
  pdfContentHandler,
  registrySettlementHandler,
  replaceHandler,
  requestInquiryBatchHandler,
  requestInquiryHandler,
  requestResponseHandler,
  rewardHandler,
  rewardRecipientHandler,
  rewardSenderHandler,
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
  translinkTransactionHandler,
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
  .route('/', attachmentPublicHandler)
  .route('/', contentHandler)
  .route('/', avatarHandler)
  .route('/', deviceHandler)
  .route('/', deviceServerHandler)
  .route('/', installationHandler)
  .route('/', serverPublicKeyHandler)
  .route('/', paymentServiceProviderCredentialHandler)
  .route('/', sandboxUserCompanyHandler)
  .route('/', sandboxUserPersonHandler)
  .route('/', serverErrorHandler)
  .route('/', sessionServerHandler)
  .route('/', sessionHandler)
  .route('/', userHandler)
  .route('/', userCompanyHandler)
  .route('/', nameHandler)
  .route('/', userPaymentServiceProviderHandler)
  .route('/', userPersonHandler)
  .route('/', attachmentHandler)
  .route('/', billingContractSubscriptionHandler)
  .route('/', bunqmeFundraiserProfileHandler)
  .route('/', cardHandler)
  .route('/', cardBatchHandler)
  .route('/', cardBatchReplaceHandler)
  .route('/', cardCreditHandler)
  .route('/', cardDebitHandler)
  .route('/', cardNameHandler)
  .route('/', exportStatementCardHandler)
  .route('/', exportStatementCardCsvHandler)
  .route('/', exportStatementCardPdfHandler)
  .route('/', generatedCvc2Handler)
  .route('/', replaceHandler)
  .route('/', certificatePinnedHandler)
  .route('/', challengeRequestHandler)
  .route('/', companyHandler)
  .route('/', confirmationOfFundsHandler)
  .route('/', credentialPasswordIpHandler)
  .route('/', ipHandler)
  .route('/', currencyCloudBeneficiaryHandler)
  .route('/', currencyCloudBeneficiaryRequirementHandler)
  .route('/', eventHandler)
  .route('/', exportAnnualOverviewHandler)
  .route('/', featureAnnouncementHandler)
  .route('/', insightPreferenceDateHandler)
  .route('/', insightsHandler)
  .route('/', insightsSearchHandler)
  .route('/', invoiceHandler)
  .route('/', pdfContentHandler)
  .route('/', legalNameHandler)
  .route('/', limitHandler)
  .route('/', monetaryAccountHandler)
  .route('/', monetaryAccountBankHandler)
  .route('/', monetaryAccountExternalHandler)
  .route('/', monetaryAccountJointHandler)
  .route('/', monetaryAccountSavingsHandler)
  .route('/', noteAttachmentHandler)
  .route('/', noteTextHandler)
  .route('/', bunqmeFundraiserResultHandler)
  .route('/', bunqmeTabHandler)
  .route('/', bunqmeTabResultResponseHandler)
  .route('/', currencyCloudPaymentQuoteHandler)
  .route('/', currencyConversionHandler)
  .route('/', currencyConversionQuoteHandler)
  .route('/', customerStatementHandler)
  .route('/', draftPaymentHandler)
  .route('/', statementHandler)
  .route('/', exportRibHandler)
  .route('/', idealMerchantTransactionHandler)
  .route('/', mastercardActionHandler)
  .route('/', paymentHandler)
  .route('/', notificationFilterUrlHandler)
  .route('/', paymentAutoAllocateHandler)
  .route('/', definitionHandler)
  .route('/', instanceHandler)
  .route('/', paymentBatchHandler)
  .route('/', requestInquiryHandler)
  .route('/', requestInquiryBatchHandler)
  .route('/', requestResponseHandler)
  .route('/', scheduleHandler)
  .route('/', schedulePaymentHandler)
  .route('/', schedulePaymentBatchHandler)
  .route('/', scheduleInstanceHandler)
  .route('/', shareInviteMonetaryAccountInquiryHandler)
  .route('/', sofortMerchantTransactionHandler)
  .route('/', switchServicePaymentHandler)
  .route('/', translinkTransactionHandler)
  .route('/', whitelistSddHandler)
  .route('/', notificationFilterEmailHandler)
  .route('/', notificationFilterPushHandler)
  .route('/', oauthClientHandler)
  .route('/', callbackUrlHandler)
  .route('/', paymentServiceProviderDraftPaymentHandler)
  .route('/', registrySettlementHandler)
  .route('/', rewardHandler)
  .route('/', rewardRecipientHandler)
  .route('/', rewardSenderHandler)
  .route('/', shareInviteMonetaryAccountResponseHandler)
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
  .route('/', whitelistSddOneOffHandler)
  .route('/', whitelistSddRecurringHandler)

export default app
