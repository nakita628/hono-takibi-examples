import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1AccountItemsIdRoute,
  deleteApi1ApprovalRequestsIdRoute,
  deleteApi1DealsIdPaymentsPaymentIdRoute,
  deleteApi1DealsIdRenewsRenewIdRoute,
  deleteApi1DealsIdRoute,
  deleteApi1ExpenseApplicationLineTemplatesIdRoute,
  deleteApi1ExpenseApplicationsCurrenciesIdRoute,
  deleteApi1ExpenseApplicationsIdRoute,
  deleteApi1ItemsIdRoute,
  deleteApi1ManualJournalsIdRoute,
  deleteApi1PartnersIdRoute,
  deleteApi1PaymentRequestsIdRoute,
  deleteApi1PurchaseRequestsIdRoute,
  deleteApi1ReceiptsIdRoute,
  deleteApi1SectionsIdRoute,
  deleteApi1SegmentsSegmentIdTagsIdRoute,
  deleteApi1TagsIdRoute,
  deleteApi1TransfersIdRoute,
  deleteApi1UserMatchersIdRoute,
  deleteApi1WalletablesTypeIdRoute,
  deleteApi1WalletTxnsIdRoute,
  getApi1AccountItemsIdRoute,
  getApi1AccountItemsRoute,
  getApi1ApprovalFlowRoutesIdRoute,
  getApi1ApprovalFlowRoutesRoute,
  getApi1ApprovalRequestsFormsIdRoute,
  getApi1ApprovalRequestsFormsRoute,
  getApi1ApprovalRequestsIdRoute,
  getApi1ApprovalRequestsRoute,
  getApi1BanksIdRoute,
  getApi1BanksRoute,
  getApi1CompaniesIdRoute,
  getApi1CompaniesRoute,
  getApi1DealsIdRoute,
  getApi1DealsRoute,
  getApi1ExpenseApplicationLineTemplatesIdRoute,
  getApi1ExpenseApplicationLineTemplatesRoute,
  getApi1ExpenseApplicationsCurrenciesIdRoute,
  getApi1ExpenseApplicationsCurrenciesRoute,
  getApi1ExpenseApplicationsFormRoute,
  getApi1ExpenseApplicationsIdRoute,
  getApi1ExpenseApplicationsRoute,
  getApi1FixedAssetsRoute,
  getApi1FormsSelectablesRoute,
  getApi1InvoicesIdRoute,
  getApi1InvoicesRoute,
  getApi1ItemsIdRoute,
  getApi1ItemsRoute,
  getApi1JournalsReportsIdDownloadRoute,
  getApi1JournalsReportsIdStatusRoute,
  getApi1JournalsRoute,
  getApi1ManualJournalsIdRoute,
  getApi1ManualJournalsRoute,
  getApi1PartnersIdRoute,
  getApi1PartnersRoute,
  getApi1PaymentRequestsIdRoute,
  getApi1PaymentRequestsRoute,
  getApi1PurchaseRequestsFormsIdRoute,
  getApi1PurchaseRequestsFormsRoute,
  getApi1PurchaseRequestsIdRoute,
  getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetRoute,
  getApi1PurchaseRequestsRoute,
  getApi1QuotationsIdRoute,
  getApi1QuotationsRoute,
  getApi1ReceiptsIdDownloadRoute,
  getApi1ReceiptsIdRoute,
  getApi1ReceiptsRoute,
  getApi1ReportsGeneralLedgersRoute,
  getApi1ReportsTrialBsRoute,
  getApi1ReportsTrialBsThreeYearsRoute,
  getApi1ReportsTrialBsTwoYearsRoute,
  getApi1ReportsTrialCrRoute,
  getApi1ReportsTrialCrSectionsRoute,
  getApi1ReportsTrialCrSegment1TagsRoute,
  getApi1ReportsTrialCrSegment2TagsRoute,
  getApi1ReportsTrialCrSegment3TagsRoute,
  getApi1ReportsTrialCrThreeYearsRoute,
  getApi1ReportsTrialCrTwoYearsRoute,
  getApi1ReportsTrialPlRoute,
  getApi1ReportsTrialPlSectionsRoute,
  getApi1ReportsTrialPlSegment1TagsRoute,
  getApi1ReportsTrialPlSegment2TagsRoute,
  getApi1ReportsTrialPlSegment3TagsRoute,
  getApi1ReportsTrialPlThreeYearsRoute,
  getApi1ReportsTrialPlTwoYearsRoute,
  getApi1SectionsIdRoute,
  getApi1SectionsRoute,
  getApi1SegmentsSegmentIdTagsRoute,
  getApi1TagsIdRoute,
  getApi1TagsRoute,
  getApi1TaxesCodesCodeRoute,
  getApi1TaxesCodesRoute,
  getApi1TaxesCompaniesCompanyIdRoute,
  getApi1TransfersIdRoute,
  getApi1TransfersRoute,
  getApi1UserMatchersIdRoute,
  getApi1UserMatchersRoute,
  getApi1UsersCapabilitiesRoute,
  getApi1UsersMeRoute,
  getApi1UsersRoute,
  getApi1WalletablesRoute,
  getApi1WalletablesTypeIdRoute,
  getApi1WalletTxnsIdRoute,
  getApi1WalletTxnsRoute,
  postApi1AccountGroupsRoute,
  postApi1AccountItemsRoute,
  postApi1ApprovalRequestsIdActionsRoute,
  postApi1ApprovalRequestsRoute,
  postApi1DealsIdPaymentsRoute,
  postApi1DealsIdRenewsRoute,
  postApi1DealsRoute,
  postApi1ExpenseApplicationLineTemplatesRoute,
  postApi1ExpenseApplicationsAmountCalculationsRoute,
  postApi1ExpenseApplicationsCurrenciesRoute,
  postApi1ExpenseApplicationsIdActionsRoute,
  postApi1ExpenseApplicationsRoute,
  postApi1ItemsRoute,
  postApi1JournalsSearchRoute,
  postApi1ManualJournalsRoute,
  postApi1PartnersRoute,
  postApi1PaymentRequestsIdActionsRoute,
  postApi1PaymentRequestsRoute,
  postApi1PurchaseRequestsIdActionsRoute,
  postApi1PurchaseRequestsRoute,
  postApi1ReceiptsRoute,
  postApi1SectionsRoute,
  postApi1SegmentsSegmentIdTagsRoute,
  postApi1TagsRoute,
  postApi1TransfersRoute,
  postApi1UserMatchersApplyRoute,
  postApi1UserMatchersRoute,
  postApi1WalletablesRoute,
  postApi1WalletTxnsIdCreateDealRoute,
  postApi1WalletTxnsIdCreatePrivateDealRoute,
  postApi1WalletTxnsIdCreateTransferRoute,
  postApi1WalletTxnsIdIgnoreRoute,
  postApi1WalletTxnsIdReconcileRoute,
  postApi1WalletTxnsIdResetRoute,
  postApi1WalletTxnsRoute,
  putApi1AccountItemsCodeUpsertRoute,
  putApi1AccountItemsIdRoute,
  putApi1ApprovalRequestsIdRoute,
  putApi1DealsIdPaymentsPaymentIdRoute,
  putApi1DealsIdRenewsRenewIdRoute,
  putApi1DealsIdRoute,
  putApi1ExpenseApplicationLineTemplatesIdRoute,
  putApi1ExpenseApplicationsCurrenciesIdRoute,
  putApi1ExpenseApplicationsFormRoute,
  putApi1ExpenseApplicationsIdParentApprovableRequestsRoute,
  putApi1ExpenseApplicationsIdRoute,
  putApi1ItemsCodeUpsertRoute,
  putApi1ItemsIdRoute,
  putApi1ManualJournalsIdRoute,
  putApi1PartnersCodeCodeRoute,
  putApi1PartnersIdRoute,
  putApi1PartnersUpsertByCodeRoute,
  putApi1PaymentRequestsIdRoute,
  putApi1PurchaseRequestsIdRoute,
  putApi1ReceiptsIdRoute,
  putApi1SectionsCodeUpsertRoute,
  putApi1SectionsIdRoute,
  putApi1SegmentsSegmentIdTagsCodeUpsertRoute,
  putApi1SegmentsSegmentIdTagsIdRoute,
  putApi1TagsIdRoute,
  putApi1TransfersIdRoute,
  putApi1UserMatchersIdRoute,
  putApi1UsersMeRoute,
  putApi1WalletablesTypeIdRoute,
} from './routes'
import {
  deleteApi1AccountItemsIdRouteHandler,
  deleteApi1ApprovalRequestsIdRouteHandler,
  deleteApi1DealsIdPaymentsPaymentIdRouteHandler,
  deleteApi1DealsIdRenewsRenewIdRouteHandler,
  deleteApi1DealsIdRouteHandler,
  deleteApi1ExpenseApplicationLineTemplatesIdRouteHandler,
  deleteApi1ExpenseApplicationsCurrenciesIdRouteHandler,
  deleteApi1ExpenseApplicationsIdRouteHandler,
  deleteApi1ItemsIdRouteHandler,
  deleteApi1ManualJournalsIdRouteHandler,
  deleteApi1PartnersIdRouteHandler,
  deleteApi1PaymentRequestsIdRouteHandler,
  deleteApi1PurchaseRequestsIdRouteHandler,
  deleteApi1ReceiptsIdRouteHandler,
  deleteApi1SectionsIdRouteHandler,
  deleteApi1SegmentsSegmentIdTagsIdRouteHandler,
  deleteApi1TagsIdRouteHandler,
  deleteApi1TransfersIdRouteHandler,
  deleteApi1UserMatchersIdRouteHandler,
  deleteApi1WalletablesTypeIdRouteHandler,
  deleteApi1WalletTxnsIdRouteHandler,
  getApi1AccountItemsIdRouteHandler,
  getApi1AccountItemsRouteHandler,
  getApi1ApprovalFlowRoutesIdRouteHandler,
  getApi1ApprovalFlowRoutesRouteHandler,
  getApi1ApprovalRequestsFormsIdRouteHandler,
  getApi1ApprovalRequestsFormsRouteHandler,
  getApi1ApprovalRequestsIdRouteHandler,
  getApi1ApprovalRequestsRouteHandler,
  getApi1BanksIdRouteHandler,
  getApi1BanksRouteHandler,
  getApi1CompaniesIdRouteHandler,
  getApi1CompaniesRouteHandler,
  getApi1DealsIdRouteHandler,
  getApi1DealsRouteHandler,
  getApi1ExpenseApplicationLineTemplatesIdRouteHandler,
  getApi1ExpenseApplicationLineTemplatesRouteHandler,
  getApi1ExpenseApplicationsCurrenciesIdRouteHandler,
  getApi1ExpenseApplicationsCurrenciesRouteHandler,
  getApi1ExpenseApplicationsFormRouteHandler,
  getApi1ExpenseApplicationsIdRouteHandler,
  getApi1ExpenseApplicationsRouteHandler,
  getApi1FixedAssetsRouteHandler,
  getApi1FormsSelectablesRouteHandler,
  getApi1InvoicesIdRouteHandler,
  getApi1InvoicesRouteHandler,
  getApi1ItemsIdRouteHandler,
  getApi1ItemsRouteHandler,
  getApi1JournalsReportsIdDownloadRouteHandler,
  getApi1JournalsReportsIdStatusRouteHandler,
  getApi1JournalsRouteHandler,
  getApi1ManualJournalsIdRouteHandler,
  getApi1ManualJournalsRouteHandler,
  getApi1PartnersIdRouteHandler,
  getApi1PartnersRouteHandler,
  getApi1PaymentRequestsIdRouteHandler,
  getApi1PaymentRequestsRouteHandler,
  getApi1PurchaseRequestsFormsIdRouteHandler,
  getApi1PurchaseRequestsFormsRouteHandler,
  getApi1PurchaseRequestsIdRouteHandler,
  getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetRouteHandler,
  getApi1PurchaseRequestsRouteHandler,
  getApi1QuotationsIdRouteHandler,
  getApi1QuotationsRouteHandler,
  getApi1ReceiptsIdDownloadRouteHandler,
  getApi1ReceiptsIdRouteHandler,
  getApi1ReceiptsRouteHandler,
  getApi1ReportsGeneralLedgersRouteHandler,
  getApi1ReportsTrialBsRouteHandler,
  getApi1ReportsTrialBsThreeYearsRouteHandler,
  getApi1ReportsTrialBsTwoYearsRouteHandler,
  getApi1ReportsTrialCrRouteHandler,
  getApi1ReportsTrialCrSectionsRouteHandler,
  getApi1ReportsTrialCrSegment1TagsRouteHandler,
  getApi1ReportsTrialCrSegment2TagsRouteHandler,
  getApi1ReportsTrialCrSegment3TagsRouteHandler,
  getApi1ReportsTrialCrThreeYearsRouteHandler,
  getApi1ReportsTrialCrTwoYearsRouteHandler,
  getApi1ReportsTrialPlRouteHandler,
  getApi1ReportsTrialPlSectionsRouteHandler,
  getApi1ReportsTrialPlSegment1TagsRouteHandler,
  getApi1ReportsTrialPlSegment2TagsRouteHandler,
  getApi1ReportsTrialPlSegment3TagsRouteHandler,
  getApi1ReportsTrialPlThreeYearsRouteHandler,
  getApi1ReportsTrialPlTwoYearsRouteHandler,
  getApi1SectionsIdRouteHandler,
  getApi1SectionsRouteHandler,
  getApi1SegmentsSegmentIdTagsRouteHandler,
  getApi1TagsIdRouteHandler,
  getApi1TagsRouteHandler,
  getApi1TaxesCodesCodeRouteHandler,
  getApi1TaxesCodesRouteHandler,
  getApi1TaxesCompaniesCompanyIdRouteHandler,
  getApi1TransfersIdRouteHandler,
  getApi1TransfersRouteHandler,
  getApi1UserMatchersIdRouteHandler,
  getApi1UserMatchersRouteHandler,
  getApi1UsersCapabilitiesRouteHandler,
  getApi1UsersMeRouteHandler,
  getApi1UsersRouteHandler,
  getApi1WalletablesRouteHandler,
  getApi1WalletablesTypeIdRouteHandler,
  getApi1WalletTxnsIdRouteHandler,
  getApi1WalletTxnsRouteHandler,
  postApi1AccountGroupsRouteHandler,
  postApi1AccountItemsRouteHandler,
  postApi1ApprovalRequestsIdActionsRouteHandler,
  postApi1ApprovalRequestsRouteHandler,
  postApi1DealsIdPaymentsRouteHandler,
  postApi1DealsIdRenewsRouteHandler,
  postApi1DealsRouteHandler,
  postApi1ExpenseApplicationLineTemplatesRouteHandler,
  postApi1ExpenseApplicationsAmountCalculationsRouteHandler,
  postApi1ExpenseApplicationsCurrenciesRouteHandler,
  postApi1ExpenseApplicationsIdActionsRouteHandler,
  postApi1ExpenseApplicationsRouteHandler,
  postApi1ItemsRouteHandler,
  postApi1JournalsSearchRouteHandler,
  postApi1ManualJournalsRouteHandler,
  postApi1PartnersRouteHandler,
  postApi1PaymentRequestsIdActionsRouteHandler,
  postApi1PaymentRequestsRouteHandler,
  postApi1PurchaseRequestsIdActionsRouteHandler,
  postApi1PurchaseRequestsRouteHandler,
  postApi1ReceiptsRouteHandler,
  postApi1SectionsRouteHandler,
  postApi1SegmentsSegmentIdTagsRouteHandler,
  postApi1TagsRouteHandler,
  postApi1TransfersRouteHandler,
  postApi1UserMatchersApplyRouteHandler,
  postApi1UserMatchersRouteHandler,
  postApi1WalletablesRouteHandler,
  postApi1WalletTxnsIdCreateDealRouteHandler,
  postApi1WalletTxnsIdCreatePrivateDealRouteHandler,
  postApi1WalletTxnsIdCreateTransferRouteHandler,
  postApi1WalletTxnsIdIgnoreRouteHandler,
  postApi1WalletTxnsIdReconcileRouteHandler,
  postApi1WalletTxnsIdResetRouteHandler,
  postApi1WalletTxnsRouteHandler,
  putApi1AccountItemsCodeUpsertRouteHandler,
  putApi1AccountItemsIdRouteHandler,
  putApi1ApprovalRequestsIdRouteHandler,
  putApi1DealsIdPaymentsPaymentIdRouteHandler,
  putApi1DealsIdRenewsRenewIdRouteHandler,
  putApi1DealsIdRouteHandler,
  putApi1ExpenseApplicationLineTemplatesIdRouteHandler,
  putApi1ExpenseApplicationsCurrenciesIdRouteHandler,
  putApi1ExpenseApplicationsFormRouteHandler,
  putApi1ExpenseApplicationsIdParentApprovableRequestsRouteHandler,
  putApi1ExpenseApplicationsIdRouteHandler,
  putApi1ItemsCodeUpsertRouteHandler,
  putApi1ItemsIdRouteHandler,
  putApi1ManualJournalsIdRouteHandler,
  putApi1PartnersCodeCodeRouteHandler,
  putApi1PartnersIdRouteHandler,
  putApi1PartnersUpsertByCodeRouteHandler,
  putApi1PaymentRequestsIdRouteHandler,
  putApi1PurchaseRequestsIdRouteHandler,
  putApi1ReceiptsIdRouteHandler,
  putApi1SectionsCodeUpsertRouteHandler,
  putApi1SectionsIdRouteHandler,
  putApi1SegmentsSegmentIdTagsCodeUpsertRouteHandler,
  putApi1SegmentsSegmentIdTagsIdRouteHandler,
  putApi1TagsIdRouteHandler,
  putApi1TransfersIdRouteHandler,
  putApi1UserMatchersIdRouteHandler,
  putApi1UsersMeRouteHandler,
  putApi1WalletablesTypeIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApi1PartnersRoute, getApi1PartnersRouteHandler)
  .openapi(postApi1PartnersRoute, postApi1PartnersRouteHandler)
  .openapi(getApi1PartnersIdRoute, getApi1PartnersIdRouteHandler)
  .openapi(putApi1PartnersIdRoute, putApi1PartnersIdRouteHandler)
  .openapi(deleteApi1PartnersIdRoute, deleteApi1PartnersIdRouteHandler)
  .openapi(putApi1PartnersCodeCodeRoute, putApi1PartnersCodeCodeRouteHandler)
  .openapi(putApi1PartnersUpsertByCodeRoute, putApi1PartnersUpsertByCodeRouteHandler)
  .openapi(getApi1FormsSelectablesRoute, getApi1FormsSelectablesRouteHandler)
  .openapi(getApi1AccountItemsIdRoute, getApi1AccountItemsIdRouteHandler)
  .openapi(putApi1AccountItemsIdRoute, putApi1AccountItemsIdRouteHandler)
  .openapi(deleteApi1AccountItemsIdRoute, deleteApi1AccountItemsIdRouteHandler)
  .openapi(getApi1AccountItemsRoute, getApi1AccountItemsRouteHandler)
  .openapi(postApi1AccountItemsRoute, postApi1AccountItemsRouteHandler)
  .openapi(putApi1AccountItemsCodeUpsertRoute, putApi1AccountItemsCodeUpsertRouteHandler)
  .openapi(getApi1TagsRoute, getApi1TagsRouteHandler)
  .openapi(postApi1TagsRoute, postApi1TagsRouteHandler)
  .openapi(getApi1TagsIdRoute, getApi1TagsIdRouteHandler)
  .openapi(putApi1TagsIdRoute, putApi1TagsIdRouteHandler)
  .openapi(deleteApi1TagsIdRoute, deleteApi1TagsIdRouteHandler)
  .openapi(getApi1SectionsRoute, getApi1SectionsRouteHandler)
  .openapi(postApi1SectionsRoute, postApi1SectionsRouteHandler)
  .openapi(getApi1SectionsIdRoute, getApi1SectionsIdRouteHandler)
  .openapi(putApi1SectionsIdRoute, putApi1SectionsIdRouteHandler)
  .openapi(deleteApi1SectionsIdRoute, deleteApi1SectionsIdRouteHandler)
  .openapi(putApi1SectionsCodeUpsertRoute, putApi1SectionsCodeUpsertRouteHandler)
  .openapi(getApi1InvoicesRoute, getApi1InvoicesRouteHandler)
  .openapi(getApi1InvoicesIdRoute, getApi1InvoicesIdRouteHandler)
  .openapi(getApi1QuotationsRoute, getApi1QuotationsRouteHandler)
  .openapi(getApi1QuotationsIdRoute, getApi1QuotationsIdRouteHandler)
  .openapi(getApi1DealsRoute, getApi1DealsRouteHandler)
  .openapi(postApi1DealsRoute, postApi1DealsRouteHandler)
  .openapi(getApi1DealsIdRoute, getApi1DealsIdRouteHandler)
  .openapi(putApi1DealsIdRoute, putApi1DealsIdRouteHandler)
  .openapi(deleteApi1DealsIdRoute, deleteApi1DealsIdRouteHandler)
  .openapi(postApi1DealsIdRenewsRoute, postApi1DealsIdRenewsRouteHandler)
  .openapi(putApi1DealsIdRenewsRenewIdRoute, putApi1DealsIdRenewsRenewIdRouteHandler)
  .openapi(deleteApi1DealsIdRenewsRenewIdRoute, deleteApi1DealsIdRenewsRenewIdRouteHandler)
  .openapi(postApi1DealsIdPaymentsRoute, postApi1DealsIdPaymentsRouteHandler)
  .openapi(putApi1DealsIdPaymentsPaymentIdRoute, putApi1DealsIdPaymentsPaymentIdRouteHandler)
  .openapi(deleteApi1DealsIdPaymentsPaymentIdRoute, deleteApi1DealsIdPaymentsPaymentIdRouteHandler)
  .openapi(getApi1ManualJournalsRoute, getApi1ManualJournalsRouteHandler)
  .openapi(postApi1ManualJournalsRoute, postApi1ManualJournalsRouteHandler)
  .openapi(getApi1ManualJournalsIdRoute, getApi1ManualJournalsIdRouteHandler)
  .openapi(putApi1ManualJournalsIdRoute, putApi1ManualJournalsIdRouteHandler)
  .openapi(deleteApi1ManualJournalsIdRoute, deleteApi1ManualJournalsIdRouteHandler)
  .openapi(getApi1UsersRoute, getApi1UsersRouteHandler)
  .openapi(getApi1UsersMeRoute, getApi1UsersMeRouteHandler)
  .openapi(putApi1UsersMeRoute, putApi1UsersMeRouteHandler)
  .openapi(getApi1UsersCapabilitiesRoute, getApi1UsersCapabilitiesRouteHandler)
  .openapi(getApi1CompaniesRoute, getApi1CompaniesRouteHandler)
  .openapi(getApi1CompaniesIdRoute, getApi1CompaniesIdRouteHandler)
  .openapi(getApi1ItemsRoute, getApi1ItemsRouteHandler)
  .openapi(postApi1ItemsRoute, postApi1ItemsRouteHandler)
  .openapi(getApi1ItemsIdRoute, getApi1ItemsIdRouteHandler)
  .openapi(putApi1ItemsIdRoute, putApi1ItemsIdRouteHandler)
  .openapi(deleteApi1ItemsIdRoute, deleteApi1ItemsIdRouteHandler)
  .openapi(putApi1ItemsCodeUpsertRoute, putApi1ItemsCodeUpsertRouteHandler)
  .openapi(getApi1TaxesCodesRoute, getApi1TaxesCodesRouteHandler)
  .openapi(getApi1TaxesCodesCodeRoute, getApi1TaxesCodesCodeRouteHandler)
  .openapi(getApi1TaxesCompaniesCompanyIdRoute, getApi1TaxesCompaniesCompanyIdRouteHandler)
  .openapi(getApi1WalletablesRoute, getApi1WalletablesRouteHandler)
  .openapi(postApi1WalletablesRoute, postApi1WalletablesRouteHandler)
  .openapi(getApi1WalletablesTypeIdRoute, getApi1WalletablesTypeIdRouteHandler)
  .openapi(putApi1WalletablesTypeIdRoute, putApi1WalletablesTypeIdRouteHandler)
  .openapi(deleteApi1WalletablesTypeIdRoute, deleteApi1WalletablesTypeIdRouteHandler)
  .openapi(getApi1BanksRoute, getApi1BanksRouteHandler)
  .openapi(getApi1BanksIdRoute, getApi1BanksIdRouteHandler)
  .openapi(getApi1TransfersRoute, getApi1TransfersRouteHandler)
  .openapi(postApi1TransfersRoute, postApi1TransfersRouteHandler)
  .openapi(getApi1TransfersIdRoute, getApi1TransfersIdRouteHandler)
  .openapi(putApi1TransfersIdRoute, putApi1TransfersIdRouteHandler)
  .openapi(deleteApi1TransfersIdRoute, deleteApi1TransfersIdRouteHandler)
  .openapi(getApi1WalletTxnsRoute, getApi1WalletTxnsRouteHandler)
  .openapi(postApi1WalletTxnsRoute, postApi1WalletTxnsRouteHandler)
  .openapi(getApi1WalletTxnsIdRoute, getApi1WalletTxnsIdRouteHandler)
  .openapi(deleteApi1WalletTxnsIdRoute, deleteApi1WalletTxnsIdRouteHandler)
  .openapi(postApi1WalletTxnsIdReconcileRoute, postApi1WalletTxnsIdReconcileRouteHandler)
  .openapi(postApi1WalletTxnsIdCreateDealRoute, postApi1WalletTxnsIdCreateDealRouteHandler)
  .openapi(postApi1WalletTxnsIdCreateTransferRoute, postApi1WalletTxnsIdCreateTransferRouteHandler)
  .openapi(
    postApi1WalletTxnsIdCreatePrivateDealRoute,
    postApi1WalletTxnsIdCreatePrivateDealRouteHandler,
  )
  .openapi(postApi1WalletTxnsIdIgnoreRoute, postApi1WalletTxnsIdIgnoreRouteHandler)
  .openapi(postApi1WalletTxnsIdResetRoute, postApi1WalletTxnsIdResetRouteHandler)
  .openapi(getApi1JournalsRoute, getApi1JournalsRouteHandler)
  .openapi(getApi1JournalsReportsIdStatusRoute, getApi1JournalsReportsIdStatusRouteHandler)
  .openapi(getApi1JournalsReportsIdDownloadRoute, getApi1JournalsReportsIdDownloadRouteHandler)
  .openapi(postApi1JournalsSearchRoute, postApi1JournalsSearchRouteHandler)
  .openapi(getApi1ReportsTrialBsRoute, getApi1ReportsTrialBsRouteHandler)
  .openapi(getApi1ReportsTrialBsTwoYearsRoute, getApi1ReportsTrialBsTwoYearsRouteHandler)
  .openapi(getApi1ReportsTrialBsThreeYearsRoute, getApi1ReportsTrialBsThreeYearsRouteHandler)
  .openapi(getApi1ReportsTrialPlRoute, getApi1ReportsTrialPlRouteHandler)
  .openapi(getApi1ReportsTrialPlTwoYearsRoute, getApi1ReportsTrialPlTwoYearsRouteHandler)
  .openapi(getApi1ReportsTrialPlThreeYearsRoute, getApi1ReportsTrialPlThreeYearsRouteHandler)
  .openapi(getApi1ReportsTrialPlSectionsRoute, getApi1ReportsTrialPlSectionsRouteHandler)
  .openapi(getApi1ReportsTrialPlSegment1TagsRoute, getApi1ReportsTrialPlSegment1TagsRouteHandler)
  .openapi(getApi1ReportsTrialPlSegment2TagsRoute, getApi1ReportsTrialPlSegment2TagsRouteHandler)
  .openapi(getApi1ReportsTrialPlSegment3TagsRoute, getApi1ReportsTrialPlSegment3TagsRouteHandler)
  .openapi(getApi1ReportsTrialCrRoute, getApi1ReportsTrialCrRouteHandler)
  .openapi(getApi1ReportsTrialCrTwoYearsRoute, getApi1ReportsTrialCrTwoYearsRouteHandler)
  .openapi(getApi1ReportsTrialCrThreeYearsRoute, getApi1ReportsTrialCrThreeYearsRouteHandler)
  .openapi(getApi1ReportsTrialCrSectionsRoute, getApi1ReportsTrialCrSectionsRouteHandler)
  .openapi(getApi1ReportsTrialCrSegment1TagsRoute, getApi1ReportsTrialCrSegment1TagsRouteHandler)
  .openapi(getApi1ReportsTrialCrSegment2TagsRoute, getApi1ReportsTrialCrSegment2TagsRouteHandler)
  .openapi(getApi1ReportsTrialCrSegment3TagsRoute, getApi1ReportsTrialCrSegment3TagsRouteHandler)
  .openapi(getApi1ReportsGeneralLedgersRoute, getApi1ReportsGeneralLedgersRouteHandler)
  .openapi(getApi1ReceiptsRoute, getApi1ReceiptsRouteHandler)
  .openapi(postApi1ReceiptsRoute, postApi1ReceiptsRouteHandler)
  .openapi(getApi1ReceiptsIdRoute, getApi1ReceiptsIdRouteHandler)
  .openapi(putApi1ReceiptsIdRoute, putApi1ReceiptsIdRouteHandler)
  .openapi(deleteApi1ReceiptsIdRoute, deleteApi1ReceiptsIdRouteHandler)
  .openapi(getApi1ReceiptsIdDownloadRoute, getApi1ReceiptsIdDownloadRouteHandler)
  .openapi(getApi1ExpenseApplicationsRoute, getApi1ExpenseApplicationsRouteHandler)
  .openapi(postApi1ExpenseApplicationsRoute, postApi1ExpenseApplicationsRouteHandler)
  .openapi(getApi1ExpenseApplicationsIdRoute, getApi1ExpenseApplicationsIdRouteHandler)
  .openapi(putApi1ExpenseApplicationsIdRoute, putApi1ExpenseApplicationsIdRouteHandler)
  .openapi(deleteApi1ExpenseApplicationsIdRoute, deleteApi1ExpenseApplicationsIdRouteHandler)
  .openapi(
    postApi1ExpenseApplicationsIdActionsRoute,
    postApi1ExpenseApplicationsIdActionsRouteHandler,
  )
  .openapi(
    putApi1ExpenseApplicationsIdParentApprovableRequestsRoute,
    putApi1ExpenseApplicationsIdParentApprovableRequestsRouteHandler,
  )
  .openapi(
    getApi1ExpenseApplicationsCurrenciesRoute,
    getApi1ExpenseApplicationsCurrenciesRouteHandler,
  )
  .openapi(
    postApi1ExpenseApplicationsCurrenciesRoute,
    postApi1ExpenseApplicationsCurrenciesRouteHandler,
  )
  .openapi(
    getApi1ExpenseApplicationsCurrenciesIdRoute,
    getApi1ExpenseApplicationsCurrenciesIdRouteHandler,
  )
  .openapi(
    putApi1ExpenseApplicationsCurrenciesIdRoute,
    putApi1ExpenseApplicationsCurrenciesIdRouteHandler,
  )
  .openapi(
    deleteApi1ExpenseApplicationsCurrenciesIdRoute,
    deleteApi1ExpenseApplicationsCurrenciesIdRouteHandler,
  )
  .openapi(getApi1ExpenseApplicationsFormRoute, getApi1ExpenseApplicationsFormRouteHandler)
  .openapi(putApi1ExpenseApplicationsFormRoute, putApi1ExpenseApplicationsFormRouteHandler)
  .openapi(
    postApi1ExpenseApplicationsAmountCalculationsRoute,
    postApi1ExpenseApplicationsAmountCalculationsRouteHandler,
  )
  .openapi(
    getApi1ExpenseApplicationLineTemplatesRoute,
    getApi1ExpenseApplicationLineTemplatesRouteHandler,
  )
  .openapi(
    postApi1ExpenseApplicationLineTemplatesRoute,
    postApi1ExpenseApplicationLineTemplatesRouteHandler,
  )
  .openapi(
    getApi1ExpenseApplicationLineTemplatesIdRoute,
    getApi1ExpenseApplicationLineTemplatesIdRouteHandler,
  )
  .openapi(
    putApi1ExpenseApplicationLineTemplatesIdRoute,
    putApi1ExpenseApplicationLineTemplatesIdRouteHandler,
  )
  .openapi(
    deleteApi1ExpenseApplicationLineTemplatesIdRoute,
    deleteApi1ExpenseApplicationLineTemplatesIdRouteHandler,
  )
  .openapi(getApi1PaymentRequestsRoute, getApi1PaymentRequestsRouteHandler)
  .openapi(postApi1PaymentRequestsRoute, postApi1PaymentRequestsRouteHandler)
  .openapi(getApi1PaymentRequestsIdRoute, getApi1PaymentRequestsIdRouteHandler)
  .openapi(putApi1PaymentRequestsIdRoute, putApi1PaymentRequestsIdRouteHandler)
  .openapi(deleteApi1PaymentRequestsIdRoute, deleteApi1PaymentRequestsIdRouteHandler)
  .openapi(postApi1PaymentRequestsIdActionsRoute, postApi1PaymentRequestsIdActionsRouteHandler)
  .openapi(getApi1ApprovalRequestsRoute, getApi1ApprovalRequestsRouteHandler)
  .openapi(postApi1ApprovalRequestsRoute, postApi1ApprovalRequestsRouteHandler)
  .openapi(getApi1ApprovalRequestsIdRoute, getApi1ApprovalRequestsIdRouteHandler)
  .openapi(putApi1ApprovalRequestsIdRoute, putApi1ApprovalRequestsIdRouteHandler)
  .openapi(deleteApi1ApprovalRequestsIdRoute, deleteApi1ApprovalRequestsIdRouteHandler)
  .openapi(postApi1ApprovalRequestsIdActionsRoute, postApi1ApprovalRequestsIdActionsRouteHandler)
  .openapi(getApi1ApprovalRequestsFormsRoute, getApi1ApprovalRequestsFormsRouteHandler)
  .openapi(getApi1ApprovalRequestsFormsIdRoute, getApi1ApprovalRequestsFormsIdRouteHandler)
  .openapi(getApi1PurchaseRequestsRoute, getApi1PurchaseRequestsRouteHandler)
  .openapi(postApi1PurchaseRequestsRoute, postApi1PurchaseRequestsRouteHandler)
  .openapi(getApi1PurchaseRequestsIdRoute, getApi1PurchaseRequestsIdRouteHandler)
  .openapi(putApi1PurchaseRequestsIdRoute, putApi1PurchaseRequestsIdRouteHandler)
  .openapi(deleteApi1PurchaseRequestsIdRoute, deleteApi1PurchaseRequestsIdRouteHandler)
  .openapi(getApi1PurchaseRequestsFormsRoute, getApi1PurchaseRequestsFormsRouteHandler)
  .openapi(getApi1PurchaseRequestsFormsIdRoute, getApi1PurchaseRequestsFormsIdRouteHandler)
  .openapi(postApi1PurchaseRequestsIdActionsRoute, postApi1PurchaseRequestsIdActionsRouteHandler)
  .openapi(
    getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetRoute,
    getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetRouteHandler,
  )
  .openapi(getApi1ApprovalFlowRoutesRoute, getApi1ApprovalFlowRoutesRouteHandler)
  .openapi(getApi1ApprovalFlowRoutesIdRoute, getApi1ApprovalFlowRoutesIdRouteHandler)
  .openapi(getApi1SegmentsSegmentIdTagsRoute, getApi1SegmentsSegmentIdTagsRouteHandler)
  .openapi(postApi1SegmentsSegmentIdTagsRoute, postApi1SegmentsSegmentIdTagsRouteHandler)
  .openapi(putApi1SegmentsSegmentIdTagsIdRoute, putApi1SegmentsSegmentIdTagsIdRouteHandler)
  .openapi(deleteApi1SegmentsSegmentIdTagsIdRoute, deleteApi1SegmentsSegmentIdTagsIdRouteHandler)
  .openapi(
    putApi1SegmentsSegmentIdTagsCodeUpsertRoute,
    putApi1SegmentsSegmentIdTagsCodeUpsertRouteHandler,
  )
  .openapi(getApi1FixedAssetsRoute, getApi1FixedAssetsRouteHandler)
  .openapi(postApi1AccountGroupsRoute, postApi1AccountGroupsRouteHandler)
  .openapi(getApi1UserMatchersRoute, getApi1UserMatchersRouteHandler)
  .openapi(postApi1UserMatchersRoute, postApi1UserMatchersRouteHandler)
  .openapi(getApi1UserMatchersIdRoute, getApi1UserMatchersIdRouteHandler)
  .openapi(putApi1UserMatchersIdRoute, putApi1UserMatchersIdRouteHandler)
  .openapi(deleteApi1UserMatchersIdRoute, deleteApi1UserMatchersIdRouteHandler)
  .openapi(postApi1UserMatchersApplyRoute, postApi1UserMatchersApplyRouteHandler)

export default app
