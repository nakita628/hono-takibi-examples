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
  getMeRoute,
  getPingRoute,
  getRefreshRoute,
  getServicesViesSirenRoute,
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
  postChangepasswordRoute,
  postLoginRoute,
  postLogoutRoute,
  postMeRoute,
  postRegisterRoute,
  postSendpasswordRoute,
  postServicesCollectorRoute,
  putAppsAppIdAttachmentsRoute,
} from './routes'
import {
  deleteAppsAccessInviteAccessTokenRouteHandler,
  deleteAppsAppIdAccessInviteIdRouteHandler,
  deleteAppsAppIdAccessUserIdRouteHandler,
  deleteAppsAppIdAccountcategoriesIdRouteHandler,
  deleteAppsAppIdAccountsIdRouteHandler,
  deleteAppsAppIdApikeysIdRouteHandler,
  deleteAppsAppIdAttachmentsIdRouteHandler,
  deleteAppsAppIdBankdetailsIdRouteHandler,
  deleteAppsAppIdBanksIndexRouteHandler,
  deleteAppsAppIdCashflowsourcesIdRouteHandler,
  deleteAppsAppIdEstablishmentsIdRouteHandler,
  deleteAppsAppIdExportsIdRouteHandler,
  deleteAppsAppIdInvoicesBatchRouteHandler,
  deleteAppsAppIdInvoicesIdAttachRouteHandler,
  deleteAppsAppIdInvoicesIdRouteHandler,
  deleteAppsAppIdInvoicesIdTagRouteHandler,
  deleteAppsAppIdLogsAutoreconcileIndexRouteHandler,
  deleteAppsAppIdOrganizationsIdRouteHandler,
  deleteAppsAppIdPaymentsIdRouteHandler,
  deleteAppsAppIdPersonsIdRouteHandler,
  deleteAppsAppIdProductcategoryIdRouteHandler,
  deleteAppsAppIdProductsIdAttachRouteHandler,
  deleteAppsAppIdProductsIdRouteHandler,
  deleteAppsAppIdProductstocksIdRouteHandler,
  deleteAppsAppIdPurchasesBatchRouteHandler,
  deleteAppsAppIdPurchasesIdAttachRouteHandler,
  deleteAppsAppIdPurchasesIdRouteHandler,
  deleteAppsAppIdPurchasesIdTagRouteHandler,
  deleteAppsAppIdQuotesBatchRouteHandler,
  deleteAppsAppIdQuotesIdAttachRouteHandler,
  deleteAppsAppIdQuotesIdRouteHandler,
  deleteAppsAppIdQuotesIdTagRouteHandler,
  deleteAppsAppIdReconcileRouteHandler,
  deleteAppsAppIdRecurringinvoicesBatchRouteHandler,
  deleteAppsAppIdRecurringinvoicesIdRouteHandler,
  deleteAppsAppIdRelationshipsIdAttachRouteHandler,
  deleteAppsAppIdRulesIdRouteHandler,
  deleteAppsAppIdSalesdocumentmodelsIdRouteHandler,
  deleteAppsAppIdSepamandatesIdRouteHandler,
  deleteAppsAppIdSubscriptionPlanRouteHandler,
  deleteAppsAppIdSubscriptionSourceRouteHandler,
  deleteAppsAppIdTransactionsIdAttachRouteHandler,
  deleteAppsAppIdTransactionsIdRouteHandler,
  getAppsAccessInviteAccessTokenRouteHandler,
  getAppsAppIdAccessInviteRouteHandler,
  getAppsAppIdAccessProfilesRouteHandler,
  getAppsAppIdAccessRouteHandler,
  getAppsAppIdAccessUserIdRouteHandler,
  getAppsAppIdAccountcategoriesIdRouteHandler,
  getAppsAppIdAccountcategoriesIndexRouteHandler,
  getAppsAppIdAccountingEntriesIndexRouteHandler,
  getAppsAppIdAccountsIdRouteHandler,
  getAppsAppIdAccountsIndexRouteHandler,
  getAppsAppIdApikeysRouteHandler,
  getAppsAppIdApipartnersRouteHandler,
  getAppsAppIdAttachmentsDownloadRouteHandler,
  getAppsAppIdAttachmentsIdPdfRouteHandler,
  getAppsAppIdAttachmentsIdRouteHandler,
  getAppsAppIdAttachmentsRouteHandler,
  getAppsAppIdAttachmentsSapDownloadRouteHandler,
  getAppsAppIdBankdetailsIdRouteHandler,
  getAppsAppIdBankdetailsRouteHandler,
  getAppsAppIdBanksConnectRouteHandler,
  getAppsAppIdBanksIdFunnelEditRouteHandler,
  getAppsAppIdBanksIdFunnelSyncRouteHandler,
  getAppsAppIdBanksIdFunnelValidateRouteHandler,
  getAppsAppIdBanksIndexRouteHandler,
  getAppsAppIdCashflowsourcesIdRouteHandler,
  getAppsAppIdCashflowsourcesIndexRouteHandler,
  getAppsAppIdEstablishmentsIdRouteHandler,
  getAppsAppIdExportsAcdComptaRouteHandler,
  getAppsAppIdExportsDownloadRouteHandler,
  getAppsAppIdExportsIdRouteHandler,
  getAppsAppIdExportsMonthsRouteHandler,
  getAppsAppIdExportsRouteHandler,
  getAppsAppIdInvoicesDownloadRouteHandler,
  getAppsAppIdInvoicesIdPdfRouteHandler,
  getAppsAppIdInvoicesIdPreviewJpgRouteHandler,
  getAppsAppIdInvoicesIdRouteHandler,
  getAppsAppIdInvoicesNextnumberRouteHandler,
  getAppsAppIdInvoicesRouteHandler,
  getAppsAppIdInvoicesStatisticsRouteHandler,
  getAppsAppIdLogsAutoreconcileIndexRouteHandler,
  getAppsAppIdOrganizationRouteHandler,
  getAppsAppIdOrganizationsIdRestoreRouteHandler,
  getAppsAppIdOrganizationsIdRouteHandler,
  getAppsAppIdOrganizationsRouteHandler,
  getAppsAppIdPaymentsIdRouteHandler,
  getAppsAppIdPaymentsRecipeBookRouteHandler,
  getAppsAppIdPaymentsRouteHandler,
  getAppsAppIdPersonsIdRestoreRouteHandler,
  getAppsAppIdPersonsIdRouteHandler,
  getAppsAppIdPersonsRouteHandler,
  getAppsAppIdPingRouteHandler,
  getAppsAppIdProductcategoryIdRouteHandler,
  getAppsAppIdProductcategoryRouteHandler,
  getAppsAppIdProductsIdRouteHandler,
  getAppsAppIdProductsRouteHandler,
  getAppsAppIdProductstocksIdRouteHandler,
  getAppsAppIdProductstocksRouteHandler,
  getAppsAppIdPurchasesDownloadRouteHandler,
  getAppsAppIdPurchasesIdOriginalRouteHandler,
  getAppsAppIdPurchasesIdPreviewJpgRouteHandler,
  getAppsAppIdPurchasesIdRouteHandler,
  getAppsAppIdPurchasesIdThumbnailJpgRouteHandler,
  getAppsAppIdPurchasesRouteHandler,
  getAppsAppIdPurchasesStatisticsRouteHandler,
  getAppsAppIdQuotesDownloadRouteHandler,
  getAppsAppIdQuotesIdPdfRouteHandler,
  getAppsAppIdQuotesIdPreviewJpgRouteHandler,
  getAppsAppIdQuotesIdRouteHandler,
  getAppsAppIdQuotesIdYousignPreviewJpgRouteHandler,
  getAppsAppIdQuotesNextnumberRouteHandler,
  getAppsAppIdQuotesRouteHandler,
  getAppsAppIdQuotesStatisticsRouteHandler,
  getAppsAppIdRecurringinvoicesIdPlanRouteHandler,
  getAppsAppIdRecurringinvoicesIdRouteHandler,
  getAppsAppIdRecurringinvoicesPeriodsRouteHandler,
  getAppsAppIdRecurringinvoicesRouteHandler,
  getAppsAppIdRelationshipsIdRouteHandler,
  getAppsAppIdRelationshipsRouteHandler,
  getAppsAppIdRouteHandler,
  getAppsAppIdRulesIdRouteHandler,
  getAppsAppIdRulesIndexRouteHandler,
  getAppsAppIdSalesdocumentmodelsIdRouteHandler,
  getAppsAppIdSalesdocumentmodelsRouteHandler,
  getAppsAppIdSepamandatesCredittransferRouteHandler,
  getAppsAppIdSepamandatesDirectdebitRouteHandler,
  getAppsAppIdSepamandatesIdRouteHandler,
  getAppsAppIdSepamandatesIndexRouteHandler,
  getAppsAppIdServicesStripeWebhookRouteHandler,
  getAppsAppIdSettingsRouteHandler,
  getAppsAppIdStatisticsChartsTypeRouteHandler,
  getAppsAppIdStatisticsTimetablePurchasesRouteHandler,
  getAppsAppIdStatisticsTimetableSalesRouteHandler,
  getAppsAppIdStatisticsVatRouteHandler,
  getAppsAppIdSubscriptionCheckoutAddSourceRouteHandler,
  getAppsAppIdSubscriptionPlanRouteHandler,
  getAppsAppIdSubscriptionPlansRouteHandler,
  getAppsAppIdSubscriptionPlansStripePlanCheckoutRouteHandler,
  getAppsAppIdSubscriptionPlansStripePlanRouteHandler,
  getAppsAppIdTagsRouteHandler,
  getAppsAppIdTemplatesDefaultRouteHandler,
  getAppsAppIdTemplatesIdRouteHandler,
  getAppsAppIdTemplatesRouteHandler,
  getAppsAppIdTransactionsIdRouteHandler,
  getAppsAppIdTransactionsIndexRouteHandler,
  getAppsAppIdUrssafPaymentRouteHandler,
  getAppsAppIdUrssafPreviewRouteHandler,
  getAppsRouteHandler,
  getMeRouteHandler,
  getPingRouteHandler,
  getRefreshRouteHandler,
  getServicesViesSirenRouteHandler,
  postAppsAccessInviteAccessTokenRegisterRouteHandler,
  postAppsAppIdAccessInviteRouteHandler,
  postAppsAppIdAccessUserIdRouteHandler,
  postAppsAppIdAccountcategoriesIdRouteHandler,
  postAppsAppIdAccountcategoriesIndexRouteHandler,
  postAppsAppIdAccountsBatchRouteHandler,
  postAppsAppIdAccountsIdRouteHandler,
  postAppsAppIdAccountsIndexRouteHandler,
  postAppsAppIdApikeysRouteHandler,
  postAppsAppIdAttachmentsRouteHandler,
  postAppsAppIdBankdetailsIdRouteHandler,
  postAppsAppIdBankdetailsRouteHandler,
  postAppsAppIdBanksIdSelectAccountsRouteHandler,
  postAppsAppIdBanksSynchronizeRouteHandler,
  postAppsAppIdCashflowsourcesIdRouteHandler,
  postAppsAppIdCashflowsourcesIndexRouteHandler,
  postAppsAppIdContactsMergeRouteHandler,
  postAppsAppIdEmailBatchRouteHandler,
  postAppsAppIdEmailDocumentRouteHandler,
  postAppsAppIdEstablishmentsIdRouteHandler,
  postAppsAppIdExportsAcdComptaRouteHandler,
  postAppsAppIdExportsRouteHandler,
  postAppsAppIdInvoicesBatchRouteHandler,
  postAppsAppIdInvoicesFreshRouteHandler,
  postAppsAppIdInvoicesIdAttachRouteHandler,
  postAppsAppIdInvoicesIdAvoidRouteHandler,
  postAppsAppIdInvoicesIdDuplicateRouteHandler,
  postAppsAppIdInvoicesIdFinalizeRouteHandler,
  postAppsAppIdInvoicesIdRouteHandler,
  postAppsAppIdInvoicesIdTagRouteHandler,
  postAppsAppIdInvoicesIdUpdatestatusRouteHandler,
  postAppsAppIdInvoicesRouteHandler,
  postAppsAppIdLogsAutoreconcileIndexRouteHandler,
  postAppsAppIdOrganizationRouteHandler,
  postAppsAppIdOrganizationsBatchRouteHandler,
  postAppsAppIdOrganizationsIdRouteHandler,
  postAppsAppIdOrganizationsRouteHandler,
  postAppsAppIdPersonsBatchRouteHandler,
  postAppsAppIdPersonsIdRouteHandler,
  postAppsAppIdPersonsRouteHandler,
  postAppsAppIdProductcategoryIdRouteHandler,
  postAppsAppIdProductcategoryRouteHandler,
  postAppsAppIdProductsBatchRouteHandler,
  postAppsAppIdProductsIdAttachRouteHandler,
  postAppsAppIdProductsIdRouteHandler,
  postAppsAppIdProductsRouteHandler,
  postAppsAppIdProductstocksIdDestructRouteHandler,
  postAppsAppIdProductstocksIdRentalBackRouteHandler,
  postAppsAppIdProductstocksIdRentalExitRouteHandler,
  postAppsAppIdProductstocksIdRouteHandler,
  postAppsAppIdProductstocksRouteHandler,
  postAppsAppIdPurchasesBatchRouteHandler,
  postAppsAppIdPurchasesIdAttachRouteHandler,
  postAppsAppIdPurchasesIdRouteHandler,
  postAppsAppIdPurchasesIdTagRouteHandler,
  postAppsAppIdPurchasesIdUpdatestatusRouteHandler,
  postAppsAppIdPurchasesRouteHandler,
  postAppsAppIdQuotesBatchRouteHandler,
  postAppsAppIdQuotesFreshRouteHandler,
  postAppsAppIdQuotesIdAttachRouteHandler,
  postAppsAppIdQuotesIdDownpaymentRouteHandler,
  postAppsAppIdQuotesIdDuplicateRouteHandler,
  postAppsAppIdQuotesIdFinalizeRouteHandler,
  postAppsAppIdQuotesIdInvoiceRouteHandler,
  postAppsAppIdQuotesIdRouteHandler,
  postAppsAppIdQuotesIdSituationInvoiceRouteHandler,
  postAppsAppIdQuotesIdTagRouteHandler,
  postAppsAppIdQuotesIdUpdatestatusRouteHandler,
  postAppsAppIdQuotesInvoiceRouteHandler,
  postAppsAppIdQuotesRouteHandler,
  postAppsAppIdReconcileBatchRouteHandler,
  postAppsAppIdReconcileRouteHandler,
  postAppsAppIdRecurringinvoicesBatchRouteHandler,
  postAppsAppIdRecurringinvoicesIdRouteHandler,
  postAppsAppIdRecurringinvoicesRouteHandler,
  postAppsAppIdRelationshipsIdAttachRouteHandler,
  postAppsAppIdRelationshipsIdRouteHandler,
  postAppsAppIdResetRouteHandler,
  postAppsAppIdRulesExecuteOnRouteHandler,
  postAppsAppIdRulesIdRouteHandler,
  postAppsAppIdRulesIndexRouteHandler,
  postAppsAppIdSalesdocumentmodelsIdRouteHandler,
  postAppsAppIdSalesdocumentmodelsRouteHandler,
  postAppsAppIdSepamandatesCredittransferRouteHandler,
  postAppsAppIdSepamandatesDirectdebitRouteHandler,
  postAppsAppIdSepamandatesIdRouteHandler,
  postAppsAppIdSepamandatesIndexRouteHandler,
  postAppsAppIdServicesStripeWebhookRouteHandler,
  postAppsAppIdServicesYousignWebhookRouteHandler,
  postAppsAppIdSettingsRouteHandler,
  postAppsAppIdSignatureRouteHandler,
  postAppsAppIdSubscriptionAnchordateRouteHandler,
  postAppsAppIdSubscriptionCouponRouteHandler,
  postAppsAppIdSubscriptionExtendTrialRouteHandler,
  postAppsAppIdSubscriptionExtraStripePlanRouteHandler,
  postAppsAppIdSubscriptionPayAllRouteHandler,
  postAppsAppIdSubscriptionPlansStripePlanRouteHandler,
  postAppsAppIdSubscriptionSourceDefaultRouteHandler,
  postAppsAppIdSubscriptionSourceRouteHandler,
  postAppsAppIdTemplatesBatchRouteHandler,
  postAppsAppIdTemplatesIdRouteHandler,
  postAppsAppIdTemplatesRouteHandler,
  postAppsAppIdTransactionsBatchRouteHandler,
  postAppsAppIdTransactionsIdAttachRouteHandler,
  postAppsAppIdTransactionsIdRouteHandler,
  postAppsAppIdTransactionsIndexRouteHandler,
  postAppsAppIdUrssafAuthRouteHandler,
  postAppsAppIdUrssafPaymentRouteHandler,
  postAppsAppIdUrssafRegisterCustomerRouteHandler,
  postAppsRouteHandler,
  postChangepasswordRouteHandler,
  postLoginRouteHandler,
  postLogoutRouteHandler,
  postMeRouteHandler,
  postRegisterRouteHandler,
  postSendpasswordRouteHandler,
  postServicesCollectorRouteHandler,
  putAppsAppIdAttachmentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAppsRoute, getAppsRouteHandler)
  .openapi(postAppsRoute, postAppsRouteHandler)
  .openapi(deleteAppsAccessInviteAccessTokenRoute, deleteAppsAccessInviteAccessTokenRouteHandler)
  .openapi(getAppsAccessInviteAccessTokenRoute, getAppsAccessInviteAccessTokenRouteHandler)
  .openapi(
    postAppsAccessInviteAccessTokenRegisterRoute,
    postAppsAccessInviteAccessTokenRegisterRouteHandler,
  )
  .openapi(getAppsAppIdRoute, getAppsAppIdRouteHandler)
  .openapi(getAppsAppIdAccessRoute, getAppsAppIdAccessRouteHandler)
  .openapi(getAppsAppIdAccessInviteRoute, getAppsAppIdAccessInviteRouteHandler)
  .openapi(postAppsAppIdAccessInviteRoute, postAppsAppIdAccessInviteRouteHandler)
  .openapi(deleteAppsAppIdAccessInviteIdRoute, deleteAppsAppIdAccessInviteIdRouteHandler)
  .openapi(getAppsAppIdAccessProfilesRoute, getAppsAppIdAccessProfilesRouteHandler)
  .openapi(deleteAppsAppIdAccessUserIdRoute, deleteAppsAppIdAccessUserIdRouteHandler)
  .openapi(getAppsAppIdAccessUserIdRoute, getAppsAppIdAccessUserIdRouteHandler)
  .openapi(postAppsAppIdAccessUserIdRoute, postAppsAppIdAccessUserIdRouteHandler)
  .openapi(getAppsAppIdAccountcategoriesIndexRoute, getAppsAppIdAccountcategoriesIndexRouteHandler)
  .openapi(
    postAppsAppIdAccountcategoriesIndexRoute,
    postAppsAppIdAccountcategoriesIndexRouteHandler,
  )
  .openapi(deleteAppsAppIdAccountcategoriesIdRoute, deleteAppsAppIdAccountcategoriesIdRouteHandler)
  .openapi(getAppsAppIdAccountcategoriesIdRoute, getAppsAppIdAccountcategoriesIdRouteHandler)
  .openapi(postAppsAppIdAccountcategoriesIdRoute, postAppsAppIdAccountcategoriesIdRouteHandler)
  .openapi(getAppsAppIdAccountingEntriesIndexRoute, getAppsAppIdAccountingEntriesIndexRouteHandler)
  .openapi(getAppsAppIdAccountsIndexRoute, getAppsAppIdAccountsIndexRouteHandler)
  .openapi(postAppsAppIdAccountsIndexRoute, postAppsAppIdAccountsIndexRouteHandler)
  .openapi(postAppsAppIdAccountsBatchRoute, postAppsAppIdAccountsBatchRouteHandler)
  .openapi(deleteAppsAppIdAccountsIdRoute, deleteAppsAppIdAccountsIdRouteHandler)
  .openapi(getAppsAppIdAccountsIdRoute, getAppsAppIdAccountsIdRouteHandler)
  .openapi(postAppsAppIdAccountsIdRoute, postAppsAppIdAccountsIdRouteHandler)
  .openapi(getAppsAppIdApikeysRoute, getAppsAppIdApikeysRouteHandler)
  .openapi(postAppsAppIdApikeysRoute, postAppsAppIdApikeysRouteHandler)
  .openapi(deleteAppsAppIdApikeysIdRoute, deleteAppsAppIdApikeysIdRouteHandler)
  .openapi(getAppsAppIdApipartnersRoute, getAppsAppIdApipartnersRouteHandler)
  .openapi(getAppsAppIdAttachmentsRoute, getAppsAppIdAttachmentsRouteHandler)
  .openapi(postAppsAppIdAttachmentsRoute, postAppsAppIdAttachmentsRouteHandler)
  .openapi(putAppsAppIdAttachmentsRoute, putAppsAppIdAttachmentsRouteHandler)
  .openapi(getAppsAppIdAttachmentsDownloadRoute, getAppsAppIdAttachmentsDownloadRouteHandler)
  .openapi(getAppsAppIdAttachmentsSapDownloadRoute, getAppsAppIdAttachmentsSapDownloadRouteHandler)
  .openapi(deleteAppsAppIdAttachmentsIdRoute, deleteAppsAppIdAttachmentsIdRouteHandler)
  .openapi(getAppsAppIdAttachmentsIdRoute, getAppsAppIdAttachmentsIdRouteHandler)
  .openapi(getAppsAppIdAttachmentsIdPdfRoute, getAppsAppIdAttachmentsIdPdfRouteHandler)
  .openapi(getAppsAppIdBankdetailsRoute, getAppsAppIdBankdetailsRouteHandler)
  .openapi(postAppsAppIdBankdetailsRoute, postAppsAppIdBankdetailsRouteHandler)
  .openapi(deleteAppsAppIdBankdetailsIdRoute, deleteAppsAppIdBankdetailsIdRouteHandler)
  .openapi(getAppsAppIdBankdetailsIdRoute, getAppsAppIdBankdetailsIdRouteHandler)
  .openapi(postAppsAppIdBankdetailsIdRoute, postAppsAppIdBankdetailsIdRouteHandler)
  .openapi(deleteAppsAppIdBanksIndexRoute, deleteAppsAppIdBanksIndexRouteHandler)
  .openapi(getAppsAppIdBanksIndexRoute, getAppsAppIdBanksIndexRouteHandler)
  .openapi(getAppsAppIdBanksConnectRoute, getAppsAppIdBanksConnectRouteHandler)
  .openapi(postAppsAppIdBanksSynchronizeRoute, postAppsAppIdBanksSynchronizeRouteHandler)
  .openapi(getAppsAppIdBanksIdFunnelEditRoute, getAppsAppIdBanksIdFunnelEditRouteHandler)
  .openapi(getAppsAppIdBanksIdFunnelSyncRoute, getAppsAppIdBanksIdFunnelSyncRouteHandler)
  .openapi(getAppsAppIdBanksIdFunnelValidateRoute, getAppsAppIdBanksIdFunnelValidateRouteHandler)
  .openapi(postAppsAppIdBanksIdSelectAccountsRoute, postAppsAppIdBanksIdSelectAccountsRouteHandler)
  .openapi(getAppsAppIdCashflowsourcesIndexRoute, getAppsAppIdCashflowsourcesIndexRouteHandler)
  .openapi(postAppsAppIdCashflowsourcesIndexRoute, postAppsAppIdCashflowsourcesIndexRouteHandler)
  .openapi(deleteAppsAppIdCashflowsourcesIdRoute, deleteAppsAppIdCashflowsourcesIdRouteHandler)
  .openapi(getAppsAppIdCashflowsourcesIdRoute, getAppsAppIdCashflowsourcesIdRouteHandler)
  .openapi(postAppsAppIdCashflowsourcesIdRoute, postAppsAppIdCashflowsourcesIdRouteHandler)
  .openapi(postAppsAppIdContactsMergeRoute, postAppsAppIdContactsMergeRouteHandler)
  .openapi(postAppsAppIdEmailBatchRoute, postAppsAppIdEmailBatchRouteHandler)
  .openapi(postAppsAppIdEmailDocumentRoute, postAppsAppIdEmailDocumentRouteHandler)
  .openapi(deleteAppsAppIdEstablishmentsIdRoute, deleteAppsAppIdEstablishmentsIdRouteHandler)
  .openapi(getAppsAppIdEstablishmentsIdRoute, getAppsAppIdEstablishmentsIdRouteHandler)
  .openapi(postAppsAppIdEstablishmentsIdRoute, postAppsAppIdEstablishmentsIdRouteHandler)
  .openapi(getAppsAppIdExportsRoute, getAppsAppIdExportsRouteHandler)
  .openapi(postAppsAppIdExportsRoute, postAppsAppIdExportsRouteHandler)
  .openapi(getAppsAppIdExportsAcdComptaRoute, getAppsAppIdExportsAcdComptaRouteHandler)
  .openapi(postAppsAppIdExportsAcdComptaRoute, postAppsAppIdExportsAcdComptaRouteHandler)
  .openapi(getAppsAppIdExportsDownloadRoute, getAppsAppIdExportsDownloadRouteHandler)
  .openapi(getAppsAppIdExportsMonthsRoute, getAppsAppIdExportsMonthsRouteHandler)
  .openapi(deleteAppsAppIdExportsIdRoute, deleteAppsAppIdExportsIdRouteHandler)
  .openapi(getAppsAppIdExportsIdRoute, getAppsAppIdExportsIdRouteHandler)
  .openapi(getAppsAppIdInvoicesRoute, getAppsAppIdInvoicesRouteHandler)
  .openapi(postAppsAppIdInvoicesRoute, postAppsAppIdInvoicesRouteHandler)
  .openapi(deleteAppsAppIdInvoicesBatchRoute, deleteAppsAppIdInvoicesBatchRouteHandler)
  .openapi(postAppsAppIdInvoicesBatchRoute, postAppsAppIdInvoicesBatchRouteHandler)
  .openapi(getAppsAppIdInvoicesDownloadRoute, getAppsAppIdInvoicesDownloadRouteHandler)
  .openapi(postAppsAppIdInvoicesFreshRoute, postAppsAppIdInvoicesFreshRouteHandler)
  .openapi(getAppsAppIdInvoicesNextnumberRoute, getAppsAppIdInvoicesNextnumberRouteHandler)
  .openapi(getAppsAppIdInvoicesStatisticsRoute, getAppsAppIdInvoicesStatisticsRouteHandler)
  .openapi(deleteAppsAppIdInvoicesIdRoute, deleteAppsAppIdInvoicesIdRouteHandler)
  .openapi(getAppsAppIdInvoicesIdRoute, getAppsAppIdInvoicesIdRouteHandler)
  .openapi(postAppsAppIdInvoicesIdRoute, postAppsAppIdInvoicesIdRouteHandler)
  .openapi(deleteAppsAppIdInvoicesIdAttachRoute, deleteAppsAppIdInvoicesIdAttachRouteHandler)
  .openapi(postAppsAppIdInvoicesIdAttachRoute, postAppsAppIdInvoicesIdAttachRouteHandler)
  .openapi(postAppsAppIdInvoicesIdAvoidRoute, postAppsAppIdInvoicesIdAvoidRouteHandler)
  .openapi(postAppsAppIdInvoicesIdDuplicateRoute, postAppsAppIdInvoicesIdDuplicateRouteHandler)
  .openapi(postAppsAppIdInvoicesIdFinalizeRoute, postAppsAppIdInvoicesIdFinalizeRouteHandler)
  .openapi(getAppsAppIdInvoicesIdPdfRoute, getAppsAppIdInvoicesIdPdfRouteHandler)
  .openapi(getAppsAppIdInvoicesIdPreviewJpgRoute, getAppsAppIdInvoicesIdPreviewJpgRouteHandler)
  .openapi(deleteAppsAppIdInvoicesIdTagRoute, deleteAppsAppIdInvoicesIdTagRouteHandler)
  .openapi(postAppsAppIdInvoicesIdTagRoute, postAppsAppIdInvoicesIdTagRouteHandler)
  .openapi(
    postAppsAppIdInvoicesIdUpdatestatusRoute,
    postAppsAppIdInvoicesIdUpdatestatusRouteHandler,
  )
  .openapi(
    deleteAppsAppIdLogsAutoreconcileIndexRoute,
    deleteAppsAppIdLogsAutoreconcileIndexRouteHandler,
  )
  .openapi(getAppsAppIdLogsAutoreconcileIndexRoute, getAppsAppIdLogsAutoreconcileIndexRouteHandler)
  .openapi(
    postAppsAppIdLogsAutoreconcileIndexRoute,
    postAppsAppIdLogsAutoreconcileIndexRouteHandler,
  )
  .openapi(getAppsAppIdOrganizationRoute, getAppsAppIdOrganizationRouteHandler)
  .openapi(postAppsAppIdOrganizationRoute, postAppsAppIdOrganizationRouteHandler)
  .openapi(getAppsAppIdOrganizationsRoute, getAppsAppIdOrganizationsRouteHandler)
  .openapi(postAppsAppIdOrganizationsRoute, postAppsAppIdOrganizationsRouteHandler)
  .openapi(postAppsAppIdOrganizationsBatchRoute, postAppsAppIdOrganizationsBatchRouteHandler)
  .openapi(deleteAppsAppIdOrganizationsIdRoute, deleteAppsAppIdOrganizationsIdRouteHandler)
  .openapi(getAppsAppIdOrganizationsIdRoute, getAppsAppIdOrganizationsIdRouteHandler)
  .openapi(postAppsAppIdOrganizationsIdRoute, postAppsAppIdOrganizationsIdRouteHandler)
  .openapi(getAppsAppIdOrganizationsIdRestoreRoute, getAppsAppIdOrganizationsIdRestoreRouteHandler)
  .openapi(getAppsAppIdPaymentsRoute, getAppsAppIdPaymentsRouteHandler)
  .openapi(getAppsAppIdPaymentsRecipeBookRoute, getAppsAppIdPaymentsRecipeBookRouteHandler)
  .openapi(deleteAppsAppIdPaymentsIdRoute, deleteAppsAppIdPaymentsIdRouteHandler)
  .openapi(getAppsAppIdPaymentsIdRoute, getAppsAppIdPaymentsIdRouteHandler)
  .openapi(getAppsAppIdPersonsRoute, getAppsAppIdPersonsRouteHandler)
  .openapi(postAppsAppIdPersonsRoute, postAppsAppIdPersonsRouteHandler)
  .openapi(postAppsAppIdPersonsBatchRoute, postAppsAppIdPersonsBatchRouteHandler)
  .openapi(deleteAppsAppIdPersonsIdRoute, deleteAppsAppIdPersonsIdRouteHandler)
  .openapi(getAppsAppIdPersonsIdRoute, getAppsAppIdPersonsIdRouteHandler)
  .openapi(postAppsAppIdPersonsIdRoute, postAppsAppIdPersonsIdRouteHandler)
  .openapi(getAppsAppIdPersonsIdRestoreRoute, getAppsAppIdPersonsIdRestoreRouteHandler)
  .openapi(getAppsAppIdPingRoute, getAppsAppIdPingRouteHandler)
  .openapi(getAppsAppIdProductcategoryRoute, getAppsAppIdProductcategoryRouteHandler)
  .openapi(postAppsAppIdProductcategoryRoute, postAppsAppIdProductcategoryRouteHandler)
  .openapi(deleteAppsAppIdProductcategoryIdRoute, deleteAppsAppIdProductcategoryIdRouteHandler)
  .openapi(getAppsAppIdProductcategoryIdRoute, getAppsAppIdProductcategoryIdRouteHandler)
  .openapi(postAppsAppIdProductcategoryIdRoute, postAppsAppIdProductcategoryIdRouteHandler)
  .openapi(getAppsAppIdProductsRoute, getAppsAppIdProductsRouteHandler)
  .openapi(postAppsAppIdProductsRoute, postAppsAppIdProductsRouteHandler)
  .openapi(postAppsAppIdProductsBatchRoute, postAppsAppIdProductsBatchRouteHandler)
  .openapi(deleteAppsAppIdProductsIdRoute, deleteAppsAppIdProductsIdRouteHandler)
  .openapi(getAppsAppIdProductsIdRoute, getAppsAppIdProductsIdRouteHandler)
  .openapi(postAppsAppIdProductsIdRoute, postAppsAppIdProductsIdRouteHandler)
  .openapi(deleteAppsAppIdProductsIdAttachRoute, deleteAppsAppIdProductsIdAttachRouteHandler)
  .openapi(postAppsAppIdProductsIdAttachRoute, postAppsAppIdProductsIdAttachRouteHandler)
  .openapi(getAppsAppIdProductstocksRoute, getAppsAppIdProductstocksRouteHandler)
  .openapi(postAppsAppIdProductstocksRoute, postAppsAppIdProductstocksRouteHandler)
  .openapi(deleteAppsAppIdProductstocksIdRoute, deleteAppsAppIdProductstocksIdRouteHandler)
  .openapi(getAppsAppIdProductstocksIdRoute, getAppsAppIdProductstocksIdRouteHandler)
  .openapi(postAppsAppIdProductstocksIdRoute, postAppsAppIdProductstocksIdRouteHandler)
  .openapi(
    postAppsAppIdProductstocksIdDestructRoute,
    postAppsAppIdProductstocksIdDestructRouteHandler,
  )
  .openapi(
    postAppsAppIdProductstocksIdRentalBackRoute,
    postAppsAppIdProductstocksIdRentalBackRouteHandler,
  )
  .openapi(
    postAppsAppIdProductstocksIdRentalExitRoute,
    postAppsAppIdProductstocksIdRentalExitRouteHandler,
  )
  .openapi(getAppsAppIdPurchasesRoute, getAppsAppIdPurchasesRouteHandler)
  .openapi(postAppsAppIdPurchasesRoute, postAppsAppIdPurchasesRouteHandler)
  .openapi(deleteAppsAppIdPurchasesBatchRoute, deleteAppsAppIdPurchasesBatchRouteHandler)
  .openapi(postAppsAppIdPurchasesBatchRoute, postAppsAppIdPurchasesBatchRouteHandler)
  .openapi(getAppsAppIdPurchasesDownloadRoute, getAppsAppIdPurchasesDownloadRouteHandler)
  .openapi(getAppsAppIdPurchasesStatisticsRoute, getAppsAppIdPurchasesStatisticsRouteHandler)
  .openapi(deleteAppsAppIdPurchasesIdRoute, deleteAppsAppIdPurchasesIdRouteHandler)
  .openapi(getAppsAppIdPurchasesIdRoute, getAppsAppIdPurchasesIdRouteHandler)
  .openapi(postAppsAppIdPurchasesIdRoute, postAppsAppIdPurchasesIdRouteHandler)
  .openapi(deleteAppsAppIdPurchasesIdAttachRoute, deleteAppsAppIdPurchasesIdAttachRouteHandler)
  .openapi(postAppsAppIdPurchasesIdAttachRoute, postAppsAppIdPurchasesIdAttachRouteHandler)
  .openapi(getAppsAppIdPurchasesIdOriginalRoute, getAppsAppIdPurchasesIdOriginalRouteHandler)
  .openapi(getAppsAppIdPurchasesIdPreviewJpgRoute, getAppsAppIdPurchasesIdPreviewJpgRouteHandler)
  .openapi(deleteAppsAppIdPurchasesIdTagRoute, deleteAppsAppIdPurchasesIdTagRouteHandler)
  .openapi(postAppsAppIdPurchasesIdTagRoute, postAppsAppIdPurchasesIdTagRouteHandler)
  .openapi(
    getAppsAppIdPurchasesIdThumbnailJpgRoute,
    getAppsAppIdPurchasesIdThumbnailJpgRouteHandler,
  )
  .openapi(
    postAppsAppIdPurchasesIdUpdatestatusRoute,
    postAppsAppIdPurchasesIdUpdatestatusRouteHandler,
  )
  .openapi(getAppsAppIdQuotesRoute, getAppsAppIdQuotesRouteHandler)
  .openapi(postAppsAppIdQuotesRoute, postAppsAppIdQuotesRouteHandler)
  .openapi(deleteAppsAppIdQuotesBatchRoute, deleteAppsAppIdQuotesBatchRouteHandler)
  .openapi(postAppsAppIdQuotesBatchRoute, postAppsAppIdQuotesBatchRouteHandler)
  .openapi(getAppsAppIdQuotesDownloadRoute, getAppsAppIdQuotesDownloadRouteHandler)
  .openapi(postAppsAppIdQuotesFreshRoute, postAppsAppIdQuotesFreshRouteHandler)
  .openapi(postAppsAppIdQuotesInvoiceRoute, postAppsAppIdQuotesInvoiceRouteHandler)
  .openapi(getAppsAppIdQuotesNextnumberRoute, getAppsAppIdQuotesNextnumberRouteHandler)
  .openapi(getAppsAppIdQuotesStatisticsRoute, getAppsAppIdQuotesStatisticsRouteHandler)
  .openapi(deleteAppsAppIdQuotesIdRoute, deleteAppsAppIdQuotesIdRouteHandler)
  .openapi(getAppsAppIdQuotesIdRoute, getAppsAppIdQuotesIdRouteHandler)
  .openapi(postAppsAppIdQuotesIdRoute, postAppsAppIdQuotesIdRouteHandler)
  .openapi(deleteAppsAppIdQuotesIdAttachRoute, deleteAppsAppIdQuotesIdAttachRouteHandler)
  .openapi(postAppsAppIdQuotesIdAttachRoute, postAppsAppIdQuotesIdAttachRouteHandler)
  .openapi(postAppsAppIdQuotesIdDownpaymentRoute, postAppsAppIdQuotesIdDownpaymentRouteHandler)
  .openapi(postAppsAppIdQuotesIdDuplicateRoute, postAppsAppIdQuotesIdDuplicateRouteHandler)
  .openapi(postAppsAppIdQuotesIdFinalizeRoute, postAppsAppIdQuotesIdFinalizeRouteHandler)
  .openapi(postAppsAppIdQuotesIdInvoiceRoute, postAppsAppIdQuotesIdInvoiceRouteHandler)
  .openapi(getAppsAppIdQuotesIdPdfRoute, getAppsAppIdQuotesIdPdfRouteHandler)
  .openapi(getAppsAppIdQuotesIdPreviewJpgRoute, getAppsAppIdQuotesIdPreviewJpgRouteHandler)
  .openapi(
    postAppsAppIdQuotesIdSituationInvoiceRoute,
    postAppsAppIdQuotesIdSituationInvoiceRouteHandler,
  )
  .openapi(deleteAppsAppIdQuotesIdTagRoute, deleteAppsAppIdQuotesIdTagRouteHandler)
  .openapi(postAppsAppIdQuotesIdTagRoute, postAppsAppIdQuotesIdTagRouteHandler)
  .openapi(postAppsAppIdQuotesIdUpdatestatusRoute, postAppsAppIdQuotesIdUpdatestatusRouteHandler)
  .openapi(
    getAppsAppIdQuotesIdYousignPreviewJpgRoute,
    getAppsAppIdQuotesIdYousignPreviewJpgRouteHandler,
  )
  .openapi(deleteAppsAppIdReconcileRoute, deleteAppsAppIdReconcileRouteHandler)
  .openapi(postAppsAppIdReconcileRoute, postAppsAppIdReconcileRouteHandler)
  .openapi(postAppsAppIdReconcileBatchRoute, postAppsAppIdReconcileBatchRouteHandler)
  .openapi(getAppsAppIdRecurringinvoicesRoute, getAppsAppIdRecurringinvoicesRouteHandler)
  .openapi(postAppsAppIdRecurringinvoicesRoute, postAppsAppIdRecurringinvoicesRouteHandler)
  .openapi(
    deleteAppsAppIdRecurringinvoicesBatchRoute,
    deleteAppsAppIdRecurringinvoicesBatchRouteHandler,
  )
  .openapi(
    postAppsAppIdRecurringinvoicesBatchRoute,
    postAppsAppIdRecurringinvoicesBatchRouteHandler,
  )
  .openapi(
    getAppsAppIdRecurringinvoicesPeriodsRoute,
    getAppsAppIdRecurringinvoicesPeriodsRouteHandler,
  )
  .openapi(deleteAppsAppIdRecurringinvoicesIdRoute, deleteAppsAppIdRecurringinvoicesIdRouteHandler)
  .openapi(getAppsAppIdRecurringinvoicesIdRoute, getAppsAppIdRecurringinvoicesIdRouteHandler)
  .openapi(postAppsAppIdRecurringinvoicesIdRoute, postAppsAppIdRecurringinvoicesIdRouteHandler)
  .openapi(
    getAppsAppIdRecurringinvoicesIdPlanRoute,
    getAppsAppIdRecurringinvoicesIdPlanRouteHandler,
  )
  .openapi(getAppsAppIdRelationshipsRoute, getAppsAppIdRelationshipsRouteHandler)
  .openapi(getAppsAppIdRelationshipsIdRoute, getAppsAppIdRelationshipsIdRouteHandler)
  .openapi(postAppsAppIdRelationshipsIdRoute, postAppsAppIdRelationshipsIdRouteHandler)
  .openapi(
    deleteAppsAppIdRelationshipsIdAttachRoute,
    deleteAppsAppIdRelationshipsIdAttachRouteHandler,
  )
  .openapi(postAppsAppIdRelationshipsIdAttachRoute, postAppsAppIdRelationshipsIdAttachRouteHandler)
  .openapi(postAppsAppIdResetRoute, postAppsAppIdResetRouteHandler)
  .openapi(getAppsAppIdRulesIndexRoute, getAppsAppIdRulesIndexRouteHandler)
  .openapi(postAppsAppIdRulesIndexRoute, postAppsAppIdRulesIndexRouteHandler)
  .openapi(postAppsAppIdRulesExecuteOnRoute, postAppsAppIdRulesExecuteOnRouteHandler)
  .openapi(deleteAppsAppIdRulesIdRoute, deleteAppsAppIdRulesIdRouteHandler)
  .openapi(getAppsAppIdRulesIdRoute, getAppsAppIdRulesIdRouteHandler)
  .openapi(postAppsAppIdRulesIdRoute, postAppsAppIdRulesIdRouteHandler)
  .openapi(getAppsAppIdSalesdocumentmodelsRoute, getAppsAppIdSalesdocumentmodelsRouteHandler)
  .openapi(postAppsAppIdSalesdocumentmodelsRoute, postAppsAppIdSalesdocumentmodelsRouteHandler)
  .openapi(
    deleteAppsAppIdSalesdocumentmodelsIdRoute,
    deleteAppsAppIdSalesdocumentmodelsIdRouteHandler,
  )
  .openapi(getAppsAppIdSalesdocumentmodelsIdRoute, getAppsAppIdSalesdocumentmodelsIdRouteHandler)
  .openapi(postAppsAppIdSalesdocumentmodelsIdRoute, postAppsAppIdSalesdocumentmodelsIdRouteHandler)
  .openapi(getAppsAppIdSepamandatesIndexRoute, getAppsAppIdSepamandatesIndexRouteHandler)
  .openapi(postAppsAppIdSepamandatesIndexRoute, postAppsAppIdSepamandatesIndexRouteHandler)
  .openapi(
    getAppsAppIdSepamandatesCredittransferRoute,
    getAppsAppIdSepamandatesCredittransferRouteHandler,
  )
  .openapi(
    postAppsAppIdSepamandatesCredittransferRoute,
    postAppsAppIdSepamandatesCredittransferRouteHandler,
  )
  .openapi(
    getAppsAppIdSepamandatesDirectdebitRoute,
    getAppsAppIdSepamandatesDirectdebitRouteHandler,
  )
  .openapi(
    postAppsAppIdSepamandatesDirectdebitRoute,
    postAppsAppIdSepamandatesDirectdebitRouteHandler,
  )
  .openapi(deleteAppsAppIdSepamandatesIdRoute, deleteAppsAppIdSepamandatesIdRouteHandler)
  .openapi(getAppsAppIdSepamandatesIdRoute, getAppsAppIdSepamandatesIdRouteHandler)
  .openapi(postAppsAppIdSepamandatesIdRoute, postAppsAppIdSepamandatesIdRouteHandler)
  .openapi(getAppsAppIdServicesStripeWebhookRoute, getAppsAppIdServicesStripeWebhookRouteHandler)
  .openapi(postAppsAppIdServicesStripeWebhookRoute, postAppsAppIdServicesStripeWebhookRouteHandler)
  .openapi(
    postAppsAppIdServicesYousignWebhookRoute,
    postAppsAppIdServicesYousignWebhookRouteHandler,
  )
  .openapi(getAppsAppIdSettingsRoute, getAppsAppIdSettingsRouteHandler)
  .openapi(postAppsAppIdSettingsRoute, postAppsAppIdSettingsRouteHandler)
  .openapi(postAppsAppIdSignatureRoute, postAppsAppIdSignatureRouteHandler)
  .openapi(getAppsAppIdStatisticsChartsTypeRoute, getAppsAppIdStatisticsChartsTypeRouteHandler)
  .openapi(
    getAppsAppIdStatisticsTimetablePurchasesRoute,
    getAppsAppIdStatisticsTimetablePurchasesRouteHandler,
  )
  .openapi(
    getAppsAppIdStatisticsTimetableSalesRoute,
    getAppsAppIdStatisticsTimetableSalesRouteHandler,
  )
  .openapi(getAppsAppIdStatisticsVatRoute, getAppsAppIdStatisticsVatRouteHandler)
  .openapi(
    postAppsAppIdSubscriptionAnchordateRoute,
    postAppsAppIdSubscriptionAnchordateRouteHandler,
  )
  .openapi(
    getAppsAppIdSubscriptionCheckoutAddSourceRoute,
    getAppsAppIdSubscriptionCheckoutAddSourceRouteHandler,
  )
  .openapi(postAppsAppIdSubscriptionCouponRoute, postAppsAppIdSubscriptionCouponRouteHandler)
  .openapi(
    postAppsAppIdSubscriptionExtendTrialRoute,
    postAppsAppIdSubscriptionExtendTrialRouteHandler,
  )
  .openapi(
    postAppsAppIdSubscriptionExtraStripePlanRoute,
    postAppsAppIdSubscriptionExtraStripePlanRouteHandler,
  )
  .openapi(postAppsAppIdSubscriptionPayAllRoute, postAppsAppIdSubscriptionPayAllRouteHandler)
  .openapi(deleteAppsAppIdSubscriptionPlanRoute, deleteAppsAppIdSubscriptionPlanRouteHandler)
  .openapi(getAppsAppIdSubscriptionPlanRoute, getAppsAppIdSubscriptionPlanRouteHandler)
  .openapi(getAppsAppIdSubscriptionPlansRoute, getAppsAppIdSubscriptionPlansRouteHandler)
  .openapi(
    getAppsAppIdSubscriptionPlansStripePlanRoute,
    getAppsAppIdSubscriptionPlansStripePlanRouteHandler,
  )
  .openapi(
    postAppsAppIdSubscriptionPlansStripePlanRoute,
    postAppsAppIdSubscriptionPlansStripePlanRouteHandler,
  )
  .openapi(
    getAppsAppIdSubscriptionPlansStripePlanCheckoutRoute,
    getAppsAppIdSubscriptionPlansStripePlanCheckoutRouteHandler,
  )
  .openapi(deleteAppsAppIdSubscriptionSourceRoute, deleteAppsAppIdSubscriptionSourceRouteHandler)
  .openapi(postAppsAppIdSubscriptionSourceRoute, postAppsAppIdSubscriptionSourceRouteHandler)
  .openapi(
    postAppsAppIdSubscriptionSourceDefaultRoute,
    postAppsAppIdSubscriptionSourceDefaultRouteHandler,
  )
  .openapi(getAppsAppIdTagsRoute, getAppsAppIdTagsRouteHandler)
  .openapi(getAppsAppIdTemplatesRoute, getAppsAppIdTemplatesRouteHandler)
  .openapi(postAppsAppIdTemplatesRoute, postAppsAppIdTemplatesRouteHandler)
  .openapi(postAppsAppIdTemplatesBatchRoute, postAppsAppIdTemplatesBatchRouteHandler)
  .openapi(getAppsAppIdTemplatesDefaultRoute, getAppsAppIdTemplatesDefaultRouteHandler)
  .openapi(getAppsAppIdTemplatesIdRoute, getAppsAppIdTemplatesIdRouteHandler)
  .openapi(postAppsAppIdTemplatesIdRoute, postAppsAppIdTemplatesIdRouteHandler)
  .openapi(getAppsAppIdTransactionsIndexRoute, getAppsAppIdTransactionsIndexRouteHandler)
  .openapi(postAppsAppIdTransactionsIndexRoute, postAppsAppIdTransactionsIndexRouteHandler)
  .openapi(postAppsAppIdTransactionsBatchRoute, postAppsAppIdTransactionsBatchRouteHandler)
  .openapi(deleteAppsAppIdTransactionsIdRoute, deleteAppsAppIdTransactionsIdRouteHandler)
  .openapi(getAppsAppIdTransactionsIdRoute, getAppsAppIdTransactionsIdRouteHandler)
  .openapi(postAppsAppIdTransactionsIdRoute, postAppsAppIdTransactionsIdRouteHandler)
  .openapi(
    deleteAppsAppIdTransactionsIdAttachRoute,
    deleteAppsAppIdTransactionsIdAttachRouteHandler,
  )
  .openapi(postAppsAppIdTransactionsIdAttachRoute, postAppsAppIdTransactionsIdAttachRouteHandler)
  .openapi(postAppsAppIdUrssafAuthRoute, postAppsAppIdUrssafAuthRouteHandler)
  .openapi(getAppsAppIdUrssafPaymentRoute, getAppsAppIdUrssafPaymentRouteHandler)
  .openapi(postAppsAppIdUrssafPaymentRoute, postAppsAppIdUrssafPaymentRouteHandler)
  .openapi(getAppsAppIdUrssafPreviewRoute, getAppsAppIdUrssafPreviewRouteHandler)
  .openapi(
    postAppsAppIdUrssafRegisterCustomerRoute,
    postAppsAppIdUrssafRegisterCustomerRouteHandler,
  )
  .openapi(postChangepasswordRoute, postChangepasswordRouteHandler)
  .openapi(postLoginRoute, postLoginRouteHandler)
  .openapi(postLogoutRoute, postLogoutRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(postMeRoute, postMeRouteHandler)
  .openapi(getPingRoute, getPingRouteHandler)
  .openapi(getRefreshRoute, getRefreshRouteHandler)
  .openapi(postRegisterRoute, postRegisterRouteHandler)
  .openapi(postSendpasswordRoute, postSendpasswordRouteHandler)
  .openapi(postServicesCollectorRoute, postServicesCollectorRouteHandler)
  .openapi(getServicesViesSirenRoute, getServicesViesSirenRouteHandler)

export default app
