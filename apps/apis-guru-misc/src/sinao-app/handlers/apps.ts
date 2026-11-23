import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAccessInviteAccessTokenRoute,
  deleteAppsAppIdAccessInviteIdRoute,
  deleteAppsAppIdAccessUserIdRoute,
  deleteAppsAppIdAccountcategoriesIdRoute,
  deleteAppsAppIdAccountsIdRoute,
  deleteAppsAppIdApikeysIdRoute,
  deleteAppsAppIdAttachmentsIdRoute,
  deleteAppsAppIdBankdetailsIdRoute,
  deleteAppsAppIdBanksIndexRoute,
  deleteAppsAppIdCashflowsourcesIdRoute,
  deleteAppsAppIdEstablishmentsIdRoute,
  deleteAppsAppIdExportsIdRoute,
  deleteAppsAppIdInvoicesBatchRoute,
  deleteAppsAppIdInvoicesIdAttachRoute,
  deleteAppsAppIdInvoicesIdRoute,
  deleteAppsAppIdInvoicesIdTagRoute,
  deleteAppsAppIdLogsAutoreconcileIndexRoute,
  deleteAppsAppIdOrganizationsIdRoute,
  deleteAppsAppIdPaymentsIdRoute,
  deleteAppsAppIdPersonsIdRoute,
  deleteAppsAppIdProductcategoryIdRoute,
  deleteAppsAppIdProductsIdAttachRoute,
  deleteAppsAppIdProductsIdRoute,
  deleteAppsAppIdProductstocksIdRoute,
  deleteAppsAppIdPurchasesBatchRoute,
  deleteAppsAppIdPurchasesIdAttachRoute,
  deleteAppsAppIdPurchasesIdRoute,
  deleteAppsAppIdPurchasesIdTagRoute,
  deleteAppsAppIdQuotesBatchRoute,
  deleteAppsAppIdQuotesIdAttachRoute,
  deleteAppsAppIdQuotesIdRoute,
  deleteAppsAppIdQuotesIdTagRoute,
  deleteAppsAppIdReconcileRoute,
  deleteAppsAppIdRecurringinvoicesBatchRoute,
  deleteAppsAppIdRecurringinvoicesIdRoute,
  deleteAppsAppIdRelationshipsIdAttachRoute,
  deleteAppsAppIdRulesIdRoute,
  deleteAppsAppIdSalesdocumentmodelsIdRoute,
  deleteAppsAppIdSepamandatesIdRoute,
  deleteAppsAppIdSubscriptionPlanRoute,
  deleteAppsAppIdSubscriptionSourceRoute,
  deleteAppsAppIdTransactionsIdAttachRoute,
  deleteAppsAppIdTransactionsIdRoute,
  getAppsAccessInviteAccessTokenRoute,
  getAppsAppIdAccessInviteRoute,
  getAppsAppIdAccessProfilesRoute,
  getAppsAppIdAccessRoute,
  getAppsAppIdAccessUserIdRoute,
  getAppsAppIdAccountcategoriesIdRoute,
  getAppsAppIdAccountcategoriesIndexRoute,
  getAppsAppIdAccountingEntriesIndexRoute,
  getAppsAppIdAccountsIdRoute,
  getAppsAppIdAccountsIndexRoute,
  getAppsAppIdApikeysRoute,
  getAppsAppIdApipartnersRoute,
  getAppsAppIdAttachmentsDownloadRoute,
  getAppsAppIdAttachmentsIdPdfRoute,
  getAppsAppIdAttachmentsIdRoute,
  getAppsAppIdAttachmentsRoute,
  getAppsAppIdAttachmentsSapDownloadRoute,
  getAppsAppIdBankdetailsIdRoute,
  getAppsAppIdBankdetailsRoute,
  getAppsAppIdBanksConnectRoute,
  getAppsAppIdBanksIdFunnelEditRoute,
  getAppsAppIdBanksIdFunnelSyncRoute,
  getAppsAppIdBanksIdFunnelValidateRoute,
  getAppsAppIdBanksIndexRoute,
  getAppsAppIdCashflowsourcesIdRoute,
  getAppsAppIdCashflowsourcesIndexRoute,
  getAppsAppIdEstablishmentsIdRoute,
  getAppsAppIdExportsAcdComptaRoute,
  getAppsAppIdExportsDownloadRoute,
  getAppsAppIdExportsIdRoute,
  getAppsAppIdExportsMonthsRoute,
  getAppsAppIdExportsRoute,
  getAppsAppIdInvoicesDownloadRoute,
  getAppsAppIdInvoicesIdPdfRoute,
  getAppsAppIdInvoicesIdPreviewJpgRoute,
  getAppsAppIdInvoicesIdRoute,
  getAppsAppIdInvoicesNextnumberRoute,
  getAppsAppIdInvoicesRoute,
  getAppsAppIdInvoicesStatisticsRoute,
  getAppsAppIdLogsAutoreconcileIndexRoute,
  getAppsAppIdOrganizationRoute,
  getAppsAppIdOrganizationsIdRestoreRoute,
  getAppsAppIdOrganizationsIdRoute,
  getAppsAppIdOrganizationsRoute,
  getAppsAppIdPaymentsIdRoute,
  getAppsAppIdPaymentsRecipeBookRoute,
  getAppsAppIdPaymentsRoute,
  getAppsAppIdPersonsIdRestoreRoute,
  getAppsAppIdPersonsIdRoute,
  getAppsAppIdPersonsRoute,
  getAppsAppIdPingRoute,
  getAppsAppIdProductcategoryIdRoute,
  getAppsAppIdProductcategoryRoute,
  getAppsAppIdProductsIdRoute,
  getAppsAppIdProductsRoute,
  getAppsAppIdProductstocksIdRoute,
  getAppsAppIdProductstocksRoute,
  getAppsAppIdPurchasesDownloadRoute,
  getAppsAppIdPurchasesIdOriginalRoute,
  getAppsAppIdPurchasesIdPreviewJpgRoute,
  getAppsAppIdPurchasesIdRoute,
  getAppsAppIdPurchasesIdThumbnailJpgRoute,
  getAppsAppIdPurchasesRoute,
  getAppsAppIdPurchasesStatisticsRoute,
  getAppsAppIdQuotesDownloadRoute,
  getAppsAppIdQuotesIdPdfRoute,
  getAppsAppIdQuotesIdPreviewJpgRoute,
  getAppsAppIdQuotesIdRoute,
  getAppsAppIdQuotesIdYousignPreviewJpgRoute,
  getAppsAppIdQuotesNextnumberRoute,
  getAppsAppIdQuotesRoute,
  getAppsAppIdQuotesStatisticsRoute,
  getAppsAppIdRecurringinvoicesIdPlanRoute,
  getAppsAppIdRecurringinvoicesIdRoute,
  getAppsAppIdRecurringinvoicesPeriodsRoute,
  getAppsAppIdRecurringinvoicesRoute,
  getAppsAppIdRelationshipsIdRoute,
  getAppsAppIdRelationshipsRoute,
  getAppsAppIdRoute,
  getAppsAppIdRulesIdRoute,
  getAppsAppIdRulesIndexRoute,
  getAppsAppIdSalesdocumentmodelsIdRoute,
  getAppsAppIdSalesdocumentmodelsRoute,
  getAppsAppIdSepamandatesCredittransferRoute,
  getAppsAppIdSepamandatesDirectdebitRoute,
  getAppsAppIdSepamandatesIdRoute,
  getAppsAppIdSepamandatesIndexRoute,
  getAppsAppIdServicesStripeWebhookRoute,
  getAppsAppIdSettingsRoute,
  getAppsAppIdStatisticsChartsTypeRoute,
  getAppsAppIdStatisticsTimetablePurchasesRoute,
  getAppsAppIdStatisticsTimetableSalesRoute,
  getAppsAppIdStatisticsVatRoute,
  getAppsAppIdSubscriptionCheckoutAddSourceRoute,
  getAppsAppIdSubscriptionPlanRoute,
  getAppsAppIdSubscriptionPlansRoute,
  getAppsAppIdSubscriptionPlansStripePlanCheckoutRoute,
  getAppsAppIdSubscriptionPlansStripePlanRoute,
  getAppsAppIdTagsRoute,
  getAppsAppIdTemplatesDefaultRoute,
  getAppsAppIdTemplatesIdRoute,
  getAppsAppIdTemplatesRoute,
  getAppsAppIdTransactionsIdRoute,
  getAppsAppIdTransactionsIndexRoute,
  getAppsAppIdUrssafPaymentRoute,
  getAppsAppIdUrssafPreviewRoute,
  getAppsRoute,
  postAppsAccessInviteAccessTokenRegisterRoute,
  postAppsAppIdAccessInviteRoute,
  postAppsAppIdAccessUserIdRoute,
  postAppsAppIdAccountcategoriesIdRoute,
  postAppsAppIdAccountcategoriesIndexRoute,
  postAppsAppIdAccountsBatchRoute,
  postAppsAppIdAccountsIdRoute,
  postAppsAppIdAccountsIndexRoute,
  postAppsAppIdApikeysRoute,
  postAppsAppIdAttachmentsRoute,
  postAppsAppIdBankdetailsIdRoute,
  postAppsAppIdBankdetailsRoute,
  postAppsAppIdBanksIdSelectAccountsRoute,
  postAppsAppIdBanksSynchronizeRoute,
  postAppsAppIdCashflowsourcesIdRoute,
  postAppsAppIdCashflowsourcesIndexRoute,
  postAppsAppIdContactsMergeRoute,
  postAppsAppIdEmailBatchRoute,
  postAppsAppIdEmailDocumentRoute,
  postAppsAppIdEstablishmentsIdRoute,
  postAppsAppIdExportsAcdComptaRoute,
  postAppsAppIdExportsRoute,
  postAppsAppIdInvoicesBatchRoute,
  postAppsAppIdInvoicesFreshRoute,
  postAppsAppIdInvoicesIdAttachRoute,
  postAppsAppIdInvoicesIdAvoidRoute,
  postAppsAppIdInvoicesIdDuplicateRoute,
  postAppsAppIdInvoicesIdFinalizeRoute,
  postAppsAppIdInvoicesIdRoute,
  postAppsAppIdInvoicesIdTagRoute,
  postAppsAppIdInvoicesIdUpdatestatusRoute,
  postAppsAppIdInvoicesRoute,
  postAppsAppIdLogsAutoreconcileIndexRoute,
  postAppsAppIdOrganizationRoute,
  postAppsAppIdOrganizationsBatchRoute,
  postAppsAppIdOrganizationsIdRoute,
  postAppsAppIdOrganizationsRoute,
  postAppsAppIdPersonsBatchRoute,
  postAppsAppIdPersonsIdRoute,
  postAppsAppIdPersonsRoute,
  postAppsAppIdProductcategoryIdRoute,
  postAppsAppIdProductcategoryRoute,
  postAppsAppIdProductsBatchRoute,
  postAppsAppIdProductsIdAttachRoute,
  postAppsAppIdProductsIdRoute,
  postAppsAppIdProductsRoute,
  postAppsAppIdProductstocksIdDestructRoute,
  postAppsAppIdProductstocksIdRentalBackRoute,
  postAppsAppIdProductstocksIdRentalExitRoute,
  postAppsAppIdProductstocksIdRoute,
  postAppsAppIdProductstocksRoute,
  postAppsAppIdPurchasesBatchRoute,
  postAppsAppIdPurchasesIdAttachRoute,
  postAppsAppIdPurchasesIdRoute,
  postAppsAppIdPurchasesIdTagRoute,
  postAppsAppIdPurchasesIdUpdatestatusRoute,
  postAppsAppIdPurchasesRoute,
  postAppsAppIdQuotesBatchRoute,
  postAppsAppIdQuotesFreshRoute,
  postAppsAppIdQuotesIdAttachRoute,
  postAppsAppIdQuotesIdDownpaymentRoute,
  postAppsAppIdQuotesIdDuplicateRoute,
  postAppsAppIdQuotesIdFinalizeRoute,
  postAppsAppIdQuotesIdInvoiceRoute,
  postAppsAppIdQuotesIdRoute,
  postAppsAppIdQuotesIdSituationInvoiceRoute,
  postAppsAppIdQuotesIdTagRoute,
  postAppsAppIdQuotesIdUpdatestatusRoute,
  postAppsAppIdQuotesInvoiceRoute,
  postAppsAppIdQuotesRoute,
  postAppsAppIdReconcileBatchRoute,
  postAppsAppIdReconcileRoute,
  postAppsAppIdRecurringinvoicesBatchRoute,
  postAppsAppIdRecurringinvoicesIdRoute,
  postAppsAppIdRecurringinvoicesRoute,
  postAppsAppIdRelationshipsIdAttachRoute,
  postAppsAppIdRelationshipsIdRoute,
  postAppsAppIdResetRoute,
  postAppsAppIdRulesExecuteOnRoute,
  postAppsAppIdRulesIdRoute,
  postAppsAppIdRulesIndexRoute,
  postAppsAppIdSalesdocumentmodelsIdRoute,
  postAppsAppIdSalesdocumentmodelsRoute,
  postAppsAppIdSepamandatesCredittransferRoute,
  postAppsAppIdSepamandatesDirectdebitRoute,
  postAppsAppIdSepamandatesIdRoute,
  postAppsAppIdSepamandatesIndexRoute,
  postAppsAppIdServicesStripeWebhookRoute,
  postAppsAppIdServicesYousignWebhookRoute,
  postAppsAppIdSettingsRoute,
  postAppsAppIdSignatureRoute,
  postAppsAppIdSubscriptionAnchordateRoute,
  postAppsAppIdSubscriptionCouponRoute,
  postAppsAppIdSubscriptionExtendTrialRoute,
  postAppsAppIdSubscriptionExtraStripePlanRoute,
  postAppsAppIdSubscriptionPayAllRoute,
  postAppsAppIdSubscriptionPlansStripePlanRoute,
  postAppsAppIdSubscriptionSourceDefaultRoute,
  postAppsAppIdSubscriptionSourceRoute,
  postAppsAppIdTemplatesBatchRoute,
  postAppsAppIdTemplatesIdRoute,
  postAppsAppIdTemplatesRoute,
  postAppsAppIdTransactionsBatchRoute,
  postAppsAppIdTransactionsIdAttachRoute,
  postAppsAppIdTransactionsIdRoute,
  postAppsAppIdTransactionsIndexRoute,
  postAppsAppIdUrssafAuthRoute,
  postAppsAppIdUrssafPaymentRoute,
  postAppsAppIdUrssafRegisterCustomerRoute,
  postAppsRoute,
  putAppsAppIdAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAccessInviteAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAccessInviteAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAccessInviteAccessTokenRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccessInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccessInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdAccessInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccessProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdAccessUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccessUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccessUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccountcategoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccountcategoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdAccountcategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccountcategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccountcategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccountingEntriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccountsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdApikeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdApipartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppsAppIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAttachmentsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAttachmentsSapDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAttachmentsIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBankdetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBankdetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdBankdetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBankdetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBankdetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdBanksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBanksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBanksConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBanksSynchronizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBanksIdFunnelEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBanksIdFunnelSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBanksIdFunnelValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBanksIdSelectAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdCashflowsourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdCashflowsourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdCashflowsourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdCashflowsourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdCashflowsourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdContactsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdEmailBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdEmailDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdEstablishmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdEstablishmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdEstablishmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdExportsAcdComptaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdExportsAcdComptaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdExportsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdExportsMonthsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdInvoicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesFreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesNextnumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdInvoicesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdAvoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesIdPreviewJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdInvoicesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdUpdatestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdLogsAutoreconcileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdLogsAutoreconcileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdLogsAutoreconcileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdOrganizationsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdOrganizationsIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPaymentsRecipeBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPersonsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPersonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPersonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPersonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPersonsIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdProductcategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductcategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdProductcategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdProductcategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductcategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdProductsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdProductstocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductstocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdProductstocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdProductstocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductstocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductstocksIdDestructRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductstocksIdRentalBackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductstocksIdRentalExitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPurchasesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPurchasesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesIdOriginalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesIdPreviewJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPurchasesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesIdThumbnailJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesIdUpdatestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdQuotesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesFreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesNextnumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdQuotesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdDownpaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesIdPreviewJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdSituationInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdQuotesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdUpdatestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesIdYousignPreviewJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdReconcileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdReconcileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdReconcileBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRecurringinvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRecurringinvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRecurringinvoicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRecurringinvoicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRecurringinvoicesPeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRecurringinvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRecurringinvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRecurringinvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRecurringinvoicesIdPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRelationshipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRelationshipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRelationshipsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRelationshipsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRulesExecuteOnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSalesdocumentmodelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSalesdocumentmodelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdSalesdocumentmodelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSalesdocumentmodelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSalesdocumentmodelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSepamandatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSepamandatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSepamandatesCredittransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSepamandatesCredittransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSepamandatesDirectdebitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSepamandatesDirectdebitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdSepamandatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSepamandatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSepamandatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdServicesStripeWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdServicesStripeWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdServicesYousignWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdStatisticsChartsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdStatisticsTimetablePurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdStatisticsTimetableSalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdStatisticsVatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionAnchordateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSubscriptionCheckoutAddSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionCouponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionExtendTrialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionExtraStripePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionPayAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdSubscriptionPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSubscriptionPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSubscriptionPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSubscriptionPlansStripePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionPlansStripePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSubscriptionPlansStripePlanCheckoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdSubscriptionSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionSourceDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTemplatesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdTemplatesDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdTransactionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTransactionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTransactionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdTransactionsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTransactionsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdUrssafAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdUrssafPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdUrssafPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdUrssafPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdUrssafRegisterCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
