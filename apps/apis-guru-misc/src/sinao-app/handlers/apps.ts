import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getAppsRouteHandler: RouteHandler<typeof getAppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsRouteHandler: RouteHandler<typeof postAppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAccessInviteAccessTokenRouteHandler: RouteHandler<
  typeof deleteAppsAccessInviteAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAccessInviteAccessTokenRouteHandler: RouteHandler<
  typeof getAppsAccessInviteAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAccessInviteAccessTokenRegisterRouteHandler: RouteHandler<
  typeof postAppsAccessInviteAccessTokenRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdRouteHandler: RouteHandler<typeof getAppsAppIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAccessRouteHandler: RouteHandler<typeof getAppsAppIdAccessRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAccessInviteRouteHandler: RouteHandler<
  typeof getAppsAppIdAccessInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdAccessInviteRouteHandler: RouteHandler<
  typeof postAppsAppIdAccessInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdAccessInviteIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdAccessInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAccessProfilesRouteHandler: RouteHandler<
  typeof getAppsAppIdAccessProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdAccessUserIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdAccessUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAccessUserIdRouteHandler: RouteHandler<
  typeof getAppsAppIdAccessUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdAccessUserIdRouteHandler: RouteHandler<
  typeof postAppsAppIdAccessUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAccountcategoriesIndexRouteHandler: RouteHandler<
  typeof getAppsAppIdAccountcategoriesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdAccountcategoriesIndexRouteHandler: RouteHandler<
  typeof postAppsAppIdAccountcategoriesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdAccountcategoriesIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdAccountcategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAccountcategoriesIdRouteHandler: RouteHandler<
  typeof getAppsAppIdAccountcategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdAccountcategoriesIdRouteHandler: RouteHandler<
  typeof postAppsAppIdAccountcategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAccountingEntriesIndexRouteHandler: RouteHandler<
  typeof getAppsAppIdAccountingEntriesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAccountsIndexRouteHandler: RouteHandler<
  typeof getAppsAppIdAccountsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdAccountsIndexRouteHandler: RouteHandler<
  typeof postAppsAppIdAccountsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdAccountsBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdAccountsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdAccountsIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAccountsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdAccountsIdRouteHandler: RouteHandler<
  typeof postAppsAppIdAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdApikeysRouteHandler: RouteHandler<
  typeof getAppsAppIdApikeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdApikeysRouteHandler: RouteHandler<
  typeof postAppsAppIdApikeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdApikeysIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdApikeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdApipartnersRouteHandler: RouteHandler<
  typeof getAppsAppIdApipartnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAttachmentsRouteHandler: RouteHandler<
  typeof getAppsAppIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdAttachmentsRouteHandler: RouteHandler<
  typeof postAppsAppIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppsAppIdAttachmentsRouteHandler: RouteHandler<
  typeof putAppsAppIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAttachmentsDownloadRouteHandler: RouteHandler<
  typeof getAppsAppIdAttachmentsDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAttachmentsSapDownloadRouteHandler: RouteHandler<
  typeof getAppsAppIdAttachmentsSapDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdAttachmentsIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdAttachmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAttachmentsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdAttachmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdAttachmentsIdPdfRouteHandler: RouteHandler<
  typeof getAppsAppIdAttachmentsIdPdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdBankdetailsRouteHandler: RouteHandler<
  typeof getAppsAppIdBankdetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdBankdetailsRouteHandler: RouteHandler<
  typeof postAppsAppIdBankdetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdBankdetailsIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdBankdetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdBankdetailsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdBankdetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdBankdetailsIdRouteHandler: RouteHandler<
  typeof postAppsAppIdBankdetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdBanksIndexRouteHandler: RouteHandler<
  typeof deleteAppsAppIdBanksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdBanksIndexRouteHandler: RouteHandler<
  typeof getAppsAppIdBanksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdBanksConnectRouteHandler: RouteHandler<
  typeof getAppsAppIdBanksConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdBanksSynchronizeRouteHandler: RouteHandler<
  typeof postAppsAppIdBanksSynchronizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdBanksIdFunnelEditRouteHandler: RouteHandler<
  typeof getAppsAppIdBanksIdFunnelEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdBanksIdFunnelSyncRouteHandler: RouteHandler<
  typeof getAppsAppIdBanksIdFunnelSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdBanksIdFunnelValidateRouteHandler: RouteHandler<
  typeof getAppsAppIdBanksIdFunnelValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdBanksIdSelectAccountsRouteHandler: RouteHandler<
  typeof postAppsAppIdBanksIdSelectAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdCashflowsourcesIndexRouteHandler: RouteHandler<
  typeof getAppsAppIdCashflowsourcesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdCashflowsourcesIndexRouteHandler: RouteHandler<
  typeof postAppsAppIdCashflowsourcesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdCashflowsourcesIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdCashflowsourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdCashflowsourcesIdRouteHandler: RouteHandler<
  typeof getAppsAppIdCashflowsourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdCashflowsourcesIdRouteHandler: RouteHandler<
  typeof postAppsAppIdCashflowsourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdContactsMergeRouteHandler: RouteHandler<
  typeof postAppsAppIdContactsMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdEmailBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdEmailBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdEmailDocumentRouteHandler: RouteHandler<
  typeof postAppsAppIdEmailDocumentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdEstablishmentsIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdEstablishmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdEstablishmentsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdEstablishmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdEstablishmentsIdRouteHandler: RouteHandler<
  typeof postAppsAppIdEstablishmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdExportsRouteHandler: RouteHandler<
  typeof getAppsAppIdExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdExportsRouteHandler: RouteHandler<
  typeof postAppsAppIdExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdExportsAcdComptaRouteHandler: RouteHandler<
  typeof getAppsAppIdExportsAcdComptaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdExportsAcdComptaRouteHandler: RouteHandler<
  typeof postAppsAppIdExportsAcdComptaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdExportsDownloadRouteHandler: RouteHandler<
  typeof getAppsAppIdExportsDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdExportsMonthsRouteHandler: RouteHandler<
  typeof getAppsAppIdExportsMonthsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdExportsIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdExportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdExportsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdExportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdInvoicesRouteHandler: RouteHandler<
  typeof getAppsAppIdInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdInvoicesRouteHandler: RouteHandler<
  typeof postAppsAppIdInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdInvoicesBatchRouteHandler: RouteHandler<
  typeof deleteAppsAppIdInvoicesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdInvoicesBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdInvoicesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdInvoicesDownloadRouteHandler: RouteHandler<
  typeof getAppsAppIdInvoicesDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdInvoicesFreshRouteHandler: RouteHandler<
  typeof postAppsAppIdInvoicesFreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdInvoicesNextnumberRouteHandler: RouteHandler<
  typeof getAppsAppIdInvoicesNextnumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdInvoicesStatisticsRouteHandler: RouteHandler<
  typeof getAppsAppIdInvoicesStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdInvoicesIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdInvoicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdInvoicesIdRouteHandler: RouteHandler<
  typeof getAppsAppIdInvoicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdInvoicesIdRouteHandler: RouteHandler<
  typeof postAppsAppIdInvoicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdInvoicesIdAttachRouteHandler: RouteHandler<
  typeof deleteAppsAppIdInvoicesIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdInvoicesIdAttachRouteHandler: RouteHandler<
  typeof postAppsAppIdInvoicesIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdInvoicesIdAvoidRouteHandler: RouteHandler<
  typeof postAppsAppIdInvoicesIdAvoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdInvoicesIdDuplicateRouteHandler: RouteHandler<
  typeof postAppsAppIdInvoicesIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdInvoicesIdFinalizeRouteHandler: RouteHandler<
  typeof postAppsAppIdInvoicesIdFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdInvoicesIdPdfRouteHandler: RouteHandler<
  typeof getAppsAppIdInvoicesIdPdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdInvoicesIdPreviewJpgRouteHandler: RouteHandler<
  typeof getAppsAppIdInvoicesIdPreviewJpgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdInvoicesIdTagRouteHandler: RouteHandler<
  typeof deleteAppsAppIdInvoicesIdTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdInvoicesIdTagRouteHandler: RouteHandler<
  typeof postAppsAppIdInvoicesIdTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdInvoicesIdUpdatestatusRouteHandler: RouteHandler<
  typeof postAppsAppIdInvoicesIdUpdatestatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdLogsAutoreconcileIndexRouteHandler: RouteHandler<
  typeof deleteAppsAppIdLogsAutoreconcileIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdLogsAutoreconcileIndexRouteHandler: RouteHandler<
  typeof getAppsAppIdLogsAutoreconcileIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdLogsAutoreconcileIndexRouteHandler: RouteHandler<
  typeof postAppsAppIdLogsAutoreconcileIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdOrganizationRouteHandler: RouteHandler<
  typeof getAppsAppIdOrganizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdOrganizationRouteHandler: RouteHandler<
  typeof postAppsAppIdOrganizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdOrganizationsRouteHandler: RouteHandler<
  typeof getAppsAppIdOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdOrganizationsRouteHandler: RouteHandler<
  typeof postAppsAppIdOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdOrganizationsBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdOrganizationsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdOrganizationsIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdOrganizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdOrganizationsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdOrganizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdOrganizationsIdRouteHandler: RouteHandler<
  typeof postAppsAppIdOrganizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdOrganizationsIdRestoreRouteHandler: RouteHandler<
  typeof getAppsAppIdOrganizationsIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPaymentsRouteHandler: RouteHandler<
  typeof getAppsAppIdPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPaymentsRecipeBookRouteHandler: RouteHandler<
  typeof getAppsAppIdPaymentsRecipeBookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdPaymentsIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdPaymentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPaymentsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdPaymentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPersonsRouteHandler: RouteHandler<
  typeof getAppsAppIdPersonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdPersonsRouteHandler: RouteHandler<
  typeof postAppsAppIdPersonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdPersonsBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdPersonsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdPersonsIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdPersonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPersonsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdPersonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdPersonsIdRouteHandler: RouteHandler<
  typeof postAppsAppIdPersonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPersonsIdRestoreRouteHandler: RouteHandler<
  typeof getAppsAppIdPersonsIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPingRouteHandler: RouteHandler<typeof getAppsAppIdPingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdProductcategoryRouteHandler: RouteHandler<
  typeof getAppsAppIdProductcategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdProductcategoryRouteHandler: RouteHandler<
  typeof postAppsAppIdProductcategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdProductcategoryIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdProductcategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdProductcategoryIdRouteHandler: RouteHandler<
  typeof getAppsAppIdProductcategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdProductcategoryIdRouteHandler: RouteHandler<
  typeof postAppsAppIdProductcategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdProductsRouteHandler: RouteHandler<
  typeof getAppsAppIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdProductsRouteHandler: RouteHandler<
  typeof postAppsAppIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdProductsBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdProductsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdProductsIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdProductsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdProductsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdProductsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdProductsIdRouteHandler: RouteHandler<
  typeof postAppsAppIdProductsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdProductsIdAttachRouteHandler: RouteHandler<
  typeof deleteAppsAppIdProductsIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdProductsIdAttachRouteHandler: RouteHandler<
  typeof postAppsAppIdProductsIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdProductstocksRouteHandler: RouteHandler<
  typeof getAppsAppIdProductstocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdProductstocksRouteHandler: RouteHandler<
  typeof postAppsAppIdProductstocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdProductstocksIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdProductstocksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdProductstocksIdRouteHandler: RouteHandler<
  typeof getAppsAppIdProductstocksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdProductstocksIdRouteHandler: RouteHandler<
  typeof postAppsAppIdProductstocksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdProductstocksIdDestructRouteHandler: RouteHandler<
  typeof postAppsAppIdProductstocksIdDestructRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdProductstocksIdRentalBackRouteHandler: RouteHandler<
  typeof postAppsAppIdProductstocksIdRentalBackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdProductstocksIdRentalExitRouteHandler: RouteHandler<
  typeof postAppsAppIdProductstocksIdRentalExitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPurchasesRouteHandler: RouteHandler<
  typeof getAppsAppIdPurchasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdPurchasesRouteHandler: RouteHandler<
  typeof postAppsAppIdPurchasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdPurchasesBatchRouteHandler: RouteHandler<
  typeof deleteAppsAppIdPurchasesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdPurchasesBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdPurchasesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPurchasesDownloadRouteHandler: RouteHandler<
  typeof getAppsAppIdPurchasesDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPurchasesStatisticsRouteHandler: RouteHandler<
  typeof getAppsAppIdPurchasesStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdPurchasesIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdPurchasesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPurchasesIdRouteHandler: RouteHandler<
  typeof getAppsAppIdPurchasesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdPurchasesIdRouteHandler: RouteHandler<
  typeof postAppsAppIdPurchasesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdPurchasesIdAttachRouteHandler: RouteHandler<
  typeof deleteAppsAppIdPurchasesIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdPurchasesIdAttachRouteHandler: RouteHandler<
  typeof postAppsAppIdPurchasesIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPurchasesIdOriginalRouteHandler: RouteHandler<
  typeof getAppsAppIdPurchasesIdOriginalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPurchasesIdPreviewJpgRouteHandler: RouteHandler<
  typeof getAppsAppIdPurchasesIdPreviewJpgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdPurchasesIdTagRouteHandler: RouteHandler<
  typeof deleteAppsAppIdPurchasesIdTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdPurchasesIdTagRouteHandler: RouteHandler<
  typeof postAppsAppIdPurchasesIdTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdPurchasesIdThumbnailJpgRouteHandler: RouteHandler<
  typeof getAppsAppIdPurchasesIdThumbnailJpgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdPurchasesIdUpdatestatusRouteHandler: RouteHandler<
  typeof postAppsAppIdPurchasesIdUpdatestatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdQuotesRouteHandler: RouteHandler<typeof getAppsAppIdQuotesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdQuotesBatchRouteHandler: RouteHandler<
  typeof deleteAppsAppIdQuotesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdQuotesDownloadRouteHandler: RouteHandler<
  typeof getAppsAppIdQuotesDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesFreshRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesFreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesInvoiceRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdQuotesNextnumberRouteHandler: RouteHandler<
  typeof getAppsAppIdQuotesNextnumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdQuotesStatisticsRouteHandler: RouteHandler<
  typeof getAppsAppIdQuotesStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdQuotesIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdQuotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdQuotesIdRouteHandler: RouteHandler<
  typeof getAppsAppIdQuotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesIdRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdQuotesIdAttachRouteHandler: RouteHandler<
  typeof deleteAppsAppIdQuotesIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesIdAttachRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesIdDownpaymentRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesIdDownpaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesIdDuplicateRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesIdFinalizeRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesIdFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesIdInvoiceRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesIdInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdQuotesIdPdfRouteHandler: RouteHandler<
  typeof getAppsAppIdQuotesIdPdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdQuotesIdPreviewJpgRouteHandler: RouteHandler<
  typeof getAppsAppIdQuotesIdPreviewJpgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesIdSituationInvoiceRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesIdSituationInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdQuotesIdTagRouteHandler: RouteHandler<
  typeof deleteAppsAppIdQuotesIdTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesIdTagRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesIdTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdQuotesIdUpdatestatusRouteHandler: RouteHandler<
  typeof postAppsAppIdQuotesIdUpdatestatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdQuotesIdYousignPreviewJpgRouteHandler: RouteHandler<
  typeof getAppsAppIdQuotesIdYousignPreviewJpgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdReconcileRouteHandler: RouteHandler<
  typeof deleteAppsAppIdReconcileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdReconcileRouteHandler: RouteHandler<
  typeof postAppsAppIdReconcileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdReconcileBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdReconcileBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdRecurringinvoicesRouteHandler: RouteHandler<
  typeof getAppsAppIdRecurringinvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdRecurringinvoicesRouteHandler: RouteHandler<
  typeof postAppsAppIdRecurringinvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdRecurringinvoicesBatchRouteHandler: RouteHandler<
  typeof deleteAppsAppIdRecurringinvoicesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdRecurringinvoicesBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdRecurringinvoicesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdRecurringinvoicesPeriodsRouteHandler: RouteHandler<
  typeof getAppsAppIdRecurringinvoicesPeriodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdRecurringinvoicesIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdRecurringinvoicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdRecurringinvoicesIdRouteHandler: RouteHandler<
  typeof getAppsAppIdRecurringinvoicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdRecurringinvoicesIdRouteHandler: RouteHandler<
  typeof postAppsAppIdRecurringinvoicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdRecurringinvoicesIdPlanRouteHandler: RouteHandler<
  typeof getAppsAppIdRecurringinvoicesIdPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdRelationshipsRouteHandler: RouteHandler<
  typeof getAppsAppIdRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdRelationshipsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdRelationshipsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdRelationshipsIdRouteHandler: RouteHandler<
  typeof postAppsAppIdRelationshipsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdRelationshipsIdAttachRouteHandler: RouteHandler<
  typeof deleteAppsAppIdRelationshipsIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdRelationshipsIdAttachRouteHandler: RouteHandler<
  typeof postAppsAppIdRelationshipsIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdResetRouteHandler: RouteHandler<typeof postAppsAppIdResetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdRulesIndexRouteHandler: RouteHandler<
  typeof getAppsAppIdRulesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdRulesIndexRouteHandler: RouteHandler<
  typeof postAppsAppIdRulesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdRulesExecuteOnRouteHandler: RouteHandler<
  typeof postAppsAppIdRulesExecuteOnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdRulesIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdRulesIdRouteHandler: RouteHandler<
  typeof getAppsAppIdRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdRulesIdRouteHandler: RouteHandler<
  typeof postAppsAppIdRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSalesdocumentmodelsRouteHandler: RouteHandler<
  typeof getAppsAppIdSalesdocumentmodelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSalesdocumentmodelsRouteHandler: RouteHandler<
  typeof postAppsAppIdSalesdocumentmodelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdSalesdocumentmodelsIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdSalesdocumentmodelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSalesdocumentmodelsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdSalesdocumentmodelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSalesdocumentmodelsIdRouteHandler: RouteHandler<
  typeof postAppsAppIdSalesdocumentmodelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSepamandatesIndexRouteHandler: RouteHandler<
  typeof getAppsAppIdSepamandatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSepamandatesIndexRouteHandler: RouteHandler<
  typeof postAppsAppIdSepamandatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSepamandatesCredittransferRouteHandler: RouteHandler<
  typeof getAppsAppIdSepamandatesCredittransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSepamandatesCredittransferRouteHandler: RouteHandler<
  typeof postAppsAppIdSepamandatesCredittransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSepamandatesDirectdebitRouteHandler: RouteHandler<
  typeof getAppsAppIdSepamandatesDirectdebitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSepamandatesDirectdebitRouteHandler: RouteHandler<
  typeof postAppsAppIdSepamandatesDirectdebitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdSepamandatesIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdSepamandatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSepamandatesIdRouteHandler: RouteHandler<
  typeof getAppsAppIdSepamandatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSepamandatesIdRouteHandler: RouteHandler<
  typeof postAppsAppIdSepamandatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdServicesStripeWebhookRouteHandler: RouteHandler<
  typeof getAppsAppIdServicesStripeWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdServicesStripeWebhookRouteHandler: RouteHandler<
  typeof postAppsAppIdServicesStripeWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdServicesYousignWebhookRouteHandler: RouteHandler<
  typeof postAppsAppIdServicesYousignWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSettingsRouteHandler: RouteHandler<
  typeof getAppsAppIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSettingsRouteHandler: RouteHandler<
  typeof postAppsAppIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSignatureRouteHandler: RouteHandler<
  typeof postAppsAppIdSignatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdStatisticsChartsTypeRouteHandler: RouteHandler<
  typeof getAppsAppIdStatisticsChartsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdStatisticsTimetablePurchasesRouteHandler: RouteHandler<
  typeof getAppsAppIdStatisticsTimetablePurchasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdStatisticsTimetableSalesRouteHandler: RouteHandler<
  typeof getAppsAppIdStatisticsTimetableSalesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdStatisticsVatRouteHandler: RouteHandler<
  typeof getAppsAppIdStatisticsVatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSubscriptionAnchordateRouteHandler: RouteHandler<
  typeof postAppsAppIdSubscriptionAnchordateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSubscriptionCheckoutAddSourceRouteHandler: RouteHandler<
  typeof getAppsAppIdSubscriptionCheckoutAddSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSubscriptionCouponRouteHandler: RouteHandler<
  typeof postAppsAppIdSubscriptionCouponRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSubscriptionExtendTrialRouteHandler: RouteHandler<
  typeof postAppsAppIdSubscriptionExtendTrialRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSubscriptionExtraStripePlanRouteHandler: RouteHandler<
  typeof postAppsAppIdSubscriptionExtraStripePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSubscriptionPayAllRouteHandler: RouteHandler<
  typeof postAppsAppIdSubscriptionPayAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdSubscriptionPlanRouteHandler: RouteHandler<
  typeof deleteAppsAppIdSubscriptionPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSubscriptionPlanRouteHandler: RouteHandler<
  typeof getAppsAppIdSubscriptionPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSubscriptionPlansRouteHandler: RouteHandler<
  typeof getAppsAppIdSubscriptionPlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSubscriptionPlansStripePlanRouteHandler: RouteHandler<
  typeof getAppsAppIdSubscriptionPlansStripePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSubscriptionPlansStripePlanRouteHandler: RouteHandler<
  typeof postAppsAppIdSubscriptionPlansStripePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdSubscriptionPlansStripePlanCheckoutRouteHandler: RouteHandler<
  typeof getAppsAppIdSubscriptionPlansStripePlanCheckoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdSubscriptionSourceRouteHandler: RouteHandler<
  typeof deleteAppsAppIdSubscriptionSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSubscriptionSourceRouteHandler: RouteHandler<
  typeof postAppsAppIdSubscriptionSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdSubscriptionSourceDefaultRouteHandler: RouteHandler<
  typeof postAppsAppIdSubscriptionSourceDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdTagsRouteHandler: RouteHandler<typeof getAppsAppIdTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdTemplatesRouteHandler: RouteHandler<
  typeof getAppsAppIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdTemplatesRouteHandler: RouteHandler<
  typeof postAppsAppIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdTemplatesBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdTemplatesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdTemplatesDefaultRouteHandler: RouteHandler<
  typeof getAppsAppIdTemplatesDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdTemplatesIdRouteHandler: RouteHandler<
  typeof getAppsAppIdTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdTemplatesIdRouteHandler: RouteHandler<
  typeof postAppsAppIdTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdTransactionsIndexRouteHandler: RouteHandler<
  typeof getAppsAppIdTransactionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdTransactionsIndexRouteHandler: RouteHandler<
  typeof postAppsAppIdTransactionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdTransactionsBatchRouteHandler: RouteHandler<
  typeof postAppsAppIdTransactionsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdTransactionsIdRouteHandler: RouteHandler<
  typeof deleteAppsAppIdTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdTransactionsIdRouteHandler: RouteHandler<
  typeof getAppsAppIdTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdTransactionsIdRouteHandler: RouteHandler<
  typeof postAppsAppIdTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppsAppIdTransactionsIdAttachRouteHandler: RouteHandler<
  typeof deleteAppsAppIdTransactionsIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdTransactionsIdAttachRouteHandler: RouteHandler<
  typeof postAppsAppIdTransactionsIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdUrssafAuthRouteHandler: RouteHandler<
  typeof postAppsAppIdUrssafAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdUrssafPaymentRouteHandler: RouteHandler<
  typeof getAppsAppIdUrssafPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdUrssafPaymentRouteHandler: RouteHandler<
  typeof postAppsAppIdUrssafPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdUrssafPreviewRouteHandler: RouteHandler<
  typeof getAppsAppIdUrssafPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppsAppIdUrssafRegisterCustomerRouteHandler: RouteHandler<
  typeof postAppsAppIdUrssafRegisterCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
