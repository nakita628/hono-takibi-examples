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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApi1PartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1PartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1PartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1PartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1PartnersCodeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1PartnersUpsertByCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1FormsSelectablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1AccountItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1AccountItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1AccountItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1AccountItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1AccountItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1AccountItemsCodeUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1SectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1SectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1SectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1SectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1SectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1SectionsCodeUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1InvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1QuotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1QuotationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1DealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1DealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1DealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1DealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1DealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1DealsIdRenewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1DealsIdRenewsRenewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1DealsIdRenewsRenewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1DealsIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1DealsIdPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1DealsIdPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ManualJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ManualJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ManualJournalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ManualJournalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ManualJournalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1UsersCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1CompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ItemsCodeUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1TaxesCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1TaxesCodesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1TaxesCompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1WalletablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1WalletablesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1WalletablesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1WalletablesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1BanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1BanksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1TransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1TransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1TransfersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1TransfersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1TransfersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1WalletTxnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1WalletTxnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1WalletTxnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdReconcileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdCreateDealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdCreateTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdCreatePrivateDealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdIgnoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1JournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1JournalsReportsIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1JournalsReportsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1JournalsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialBsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialBsTwoYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialBsThreeYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlTwoYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlThreeYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlSegment1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlSegment2TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlSegment3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrTwoYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrThreeYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrSegment1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrSegment2TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrSegment3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsGeneralLedgersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReceiptsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ExpenseApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ExpenseApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ExpenseApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ExpenseApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ExpenseApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ExpenseApplicationsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ExpenseApplicationsIdParentApprovableRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ExpenseApplicationsCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ExpenseApplicationsCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ExpenseApplicationsCurrenciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ExpenseApplicationsCurrenciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ExpenseApplicationsCurrenciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ExpenseApplicationsFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ExpenseApplicationsFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ExpenseApplicationsAmountCalculationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ExpenseApplicationLineTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ExpenseApplicationLineTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ExpenseApplicationLineTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ExpenseApplicationLineTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ExpenseApplicationLineTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PaymentRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1PaymentRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PaymentRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1PaymentRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1PaymentRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1PaymentRequestsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ApprovalRequestsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ApprovalRequestsFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ApprovalRequestsFormsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PurchaseRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1PurchaseRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PurchaseRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1PurchaseRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1PurchaseRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PurchaseRequestsFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PurchaseRequestsFormsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1PurchaseRequestsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ApprovalFlowRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ApprovalFlowRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1SegmentsSegmentIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1SegmentsSegmentIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1SegmentsSegmentIdTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1SegmentsSegmentIdTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1SegmentsSegmentIdTagsCodeUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1FixedAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1AccountGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1UserMatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1UserMatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1UserMatchersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1UserMatchersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1UserMatchersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1UserMatchersApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
