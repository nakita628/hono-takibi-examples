import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApi1PartnersRouteHandler: RouteHandler<typeof getApi1PartnersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1PartnersRouteHandler: RouteHandler<typeof postApi1PartnersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi1PartnersIdRouteHandler: RouteHandler<typeof getApi1PartnersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApi1PartnersIdRouteHandler: RouteHandler<typeof putApi1PartnersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApi1PartnersIdRouteHandler: RouteHandler<
  typeof deleteApi1PartnersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1PartnersCodeCodeRouteHandler: RouteHandler<
  typeof putApi1PartnersCodeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1PartnersUpsertByCodeRouteHandler: RouteHandler<
  typeof putApi1PartnersUpsertByCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1FormsSelectablesRouteHandler: RouteHandler<
  typeof getApi1FormsSelectablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1AccountItemsIdRouteHandler: RouteHandler<
  typeof getApi1AccountItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1AccountItemsIdRouteHandler: RouteHandler<
  typeof putApi1AccountItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1AccountItemsIdRouteHandler: RouteHandler<
  typeof deleteApi1AccountItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1AccountItemsRouteHandler: RouteHandler<
  typeof getApi1AccountItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1AccountItemsRouteHandler: RouteHandler<
  typeof postApi1AccountItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1AccountItemsCodeUpsertRouteHandler: RouteHandler<
  typeof putApi1AccountItemsCodeUpsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1TagsRouteHandler: RouteHandler<typeof getApi1TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1TagsRouteHandler: RouteHandler<typeof postApi1TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1TagsIdRouteHandler: RouteHandler<typeof getApi1TagsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1TagsIdRouteHandler: RouteHandler<typeof putApi1TagsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1TagsIdRouteHandler: RouteHandler<typeof deleteApi1TagsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi1SectionsRouteHandler: RouteHandler<typeof getApi1SectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1SectionsRouteHandler: RouteHandler<typeof postApi1SectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi1SectionsIdRouteHandler: RouteHandler<typeof getApi1SectionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApi1SectionsIdRouteHandler: RouteHandler<typeof putApi1SectionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApi1SectionsIdRouteHandler: RouteHandler<
  typeof deleteApi1SectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1SectionsCodeUpsertRouteHandler: RouteHandler<
  typeof putApi1SectionsCodeUpsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1InvoicesRouteHandler: RouteHandler<typeof getApi1InvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1InvoicesIdRouteHandler: RouteHandler<typeof getApi1InvoicesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi1QuotationsRouteHandler: RouteHandler<typeof getApi1QuotationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi1QuotationsIdRouteHandler: RouteHandler<
  typeof getApi1QuotationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1DealsRouteHandler: RouteHandler<typeof getApi1DealsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1DealsRouteHandler: RouteHandler<typeof postApi1DealsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1DealsIdRouteHandler: RouteHandler<typeof getApi1DealsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1DealsIdRouteHandler: RouteHandler<typeof putApi1DealsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1DealsIdRouteHandler: RouteHandler<typeof deleteApi1DealsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApi1DealsIdRenewsRouteHandler: RouteHandler<
  typeof postApi1DealsIdRenewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1DealsIdRenewsRenewIdRouteHandler: RouteHandler<
  typeof putApi1DealsIdRenewsRenewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1DealsIdRenewsRenewIdRouteHandler: RouteHandler<
  typeof deleteApi1DealsIdRenewsRenewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1DealsIdPaymentsRouteHandler: RouteHandler<
  typeof postApi1DealsIdPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1DealsIdPaymentsPaymentIdRouteHandler: RouteHandler<
  typeof putApi1DealsIdPaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1DealsIdPaymentsPaymentIdRouteHandler: RouteHandler<
  typeof deleteApi1DealsIdPaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ManualJournalsRouteHandler: RouteHandler<
  typeof getApi1ManualJournalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1ManualJournalsRouteHandler: RouteHandler<
  typeof postApi1ManualJournalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ManualJournalsIdRouteHandler: RouteHandler<
  typeof getApi1ManualJournalsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1ManualJournalsIdRouteHandler: RouteHandler<
  typeof putApi1ManualJournalsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1ManualJournalsIdRouteHandler: RouteHandler<
  typeof deleteApi1ManualJournalsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1UsersRouteHandler: RouteHandler<typeof getApi1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1UsersMeRouteHandler: RouteHandler<typeof getApi1UsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1UsersMeRouteHandler: RouteHandler<typeof putApi1UsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1UsersCapabilitiesRouteHandler: RouteHandler<
  typeof getApi1UsersCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1CompaniesRouteHandler: RouteHandler<typeof getApi1CompaniesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi1CompaniesIdRouteHandler: RouteHandler<typeof getApi1CompaniesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi1ItemsRouteHandler: RouteHandler<typeof getApi1ItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1ItemsRouteHandler: RouteHandler<typeof postApi1ItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ItemsIdRouteHandler: RouteHandler<typeof getApi1ItemsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1ItemsIdRouteHandler: RouteHandler<typeof putApi1ItemsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1ItemsIdRouteHandler: RouteHandler<typeof deleteApi1ItemsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApi1ItemsCodeUpsertRouteHandler: RouteHandler<
  typeof putApi1ItemsCodeUpsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1TaxesCodesRouteHandler: RouteHandler<typeof getApi1TaxesCodesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi1TaxesCodesCodeRouteHandler: RouteHandler<
  typeof getApi1TaxesCodesCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1TaxesCompaniesCompanyIdRouteHandler: RouteHandler<
  typeof getApi1TaxesCompaniesCompanyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1WalletablesRouteHandler: RouteHandler<typeof getApi1WalletablesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApi1WalletablesRouteHandler: RouteHandler<
  typeof postApi1WalletablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1WalletablesTypeIdRouteHandler: RouteHandler<
  typeof getApi1WalletablesTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1WalletablesTypeIdRouteHandler: RouteHandler<
  typeof putApi1WalletablesTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1WalletablesTypeIdRouteHandler: RouteHandler<
  typeof deleteApi1WalletablesTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1BanksRouteHandler: RouteHandler<typeof getApi1BanksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1BanksIdRouteHandler: RouteHandler<typeof getApi1BanksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1TransfersRouteHandler: RouteHandler<typeof getApi1TransfersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApi1TransfersRouteHandler: RouteHandler<typeof postApi1TransfersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi1TransfersIdRouteHandler: RouteHandler<typeof getApi1TransfersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApi1TransfersIdRouteHandler: RouteHandler<typeof putApi1TransfersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApi1TransfersIdRouteHandler: RouteHandler<
  typeof deleteApi1TransfersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1WalletTxnsRouteHandler: RouteHandler<typeof getApi1WalletTxnsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApi1WalletTxnsRouteHandler: RouteHandler<typeof postApi1WalletTxnsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi1WalletTxnsIdRouteHandler: RouteHandler<
  typeof getApi1WalletTxnsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1WalletTxnsIdRouteHandler: RouteHandler<
  typeof deleteApi1WalletTxnsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1WalletTxnsIdReconcileRouteHandler: RouteHandler<
  typeof postApi1WalletTxnsIdReconcileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1WalletTxnsIdCreateDealRouteHandler: RouteHandler<
  typeof postApi1WalletTxnsIdCreateDealRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1WalletTxnsIdCreateTransferRouteHandler: RouteHandler<
  typeof postApi1WalletTxnsIdCreateTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1WalletTxnsIdCreatePrivateDealRouteHandler: RouteHandler<
  typeof postApi1WalletTxnsIdCreatePrivateDealRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1WalletTxnsIdIgnoreRouteHandler: RouteHandler<
  typeof postApi1WalletTxnsIdIgnoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1WalletTxnsIdResetRouteHandler: RouteHandler<
  typeof postApi1WalletTxnsIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1JournalsRouteHandler: RouteHandler<typeof getApi1JournalsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1JournalsReportsIdStatusRouteHandler: RouteHandler<
  typeof getApi1JournalsReportsIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1JournalsReportsIdDownloadRouteHandler: RouteHandler<
  typeof getApi1JournalsReportsIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1JournalsSearchRouteHandler: RouteHandler<
  typeof postApi1JournalsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialBsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialBsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialBsTwoYearsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialBsTwoYearsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialBsThreeYearsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialBsThreeYearsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialPlRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialPlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialPlTwoYearsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialPlTwoYearsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialPlThreeYearsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialPlThreeYearsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialPlSectionsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialPlSectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialPlSegment1TagsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialPlSegment1TagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialPlSegment2TagsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialPlSegment2TagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialPlSegment3TagsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialPlSegment3TagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialCrRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialCrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialCrTwoYearsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialCrTwoYearsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialCrThreeYearsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialCrThreeYearsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialCrSectionsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialCrSectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialCrSegment1TagsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialCrSegment1TagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialCrSegment2TagsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialCrSegment2TagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsTrialCrSegment3TagsRouteHandler: RouteHandler<
  typeof getApi1ReportsTrialCrSegment3TagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReportsGeneralLedgersRouteHandler: RouteHandler<
  typeof getApi1ReportsGeneralLedgersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReceiptsRouteHandler: RouteHandler<typeof getApi1ReceiptsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1ReceiptsRouteHandler: RouteHandler<typeof postApi1ReceiptsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi1ReceiptsIdRouteHandler: RouteHandler<typeof getApi1ReceiptsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApi1ReceiptsIdRouteHandler: RouteHandler<typeof putApi1ReceiptsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApi1ReceiptsIdRouteHandler: RouteHandler<
  typeof deleteApi1ReceiptsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ReceiptsIdDownloadRouteHandler: RouteHandler<
  typeof getApi1ReceiptsIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ExpenseApplicationsRouteHandler: RouteHandler<
  typeof getApi1ExpenseApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1ExpenseApplicationsRouteHandler: RouteHandler<
  typeof postApi1ExpenseApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ExpenseApplicationsIdRouteHandler: RouteHandler<
  typeof getApi1ExpenseApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1ExpenseApplicationsIdRouteHandler: RouteHandler<
  typeof putApi1ExpenseApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1ExpenseApplicationsIdRouteHandler: RouteHandler<
  typeof deleteApi1ExpenseApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1ExpenseApplicationsIdActionsRouteHandler: RouteHandler<
  typeof postApi1ExpenseApplicationsIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1ExpenseApplicationsIdParentApprovableRequestsRouteHandler: RouteHandler<
  typeof putApi1ExpenseApplicationsIdParentApprovableRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ExpenseApplicationsCurrenciesRouteHandler: RouteHandler<
  typeof getApi1ExpenseApplicationsCurrenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1ExpenseApplicationsCurrenciesRouteHandler: RouteHandler<
  typeof postApi1ExpenseApplicationsCurrenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ExpenseApplicationsCurrenciesIdRouteHandler: RouteHandler<
  typeof getApi1ExpenseApplicationsCurrenciesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1ExpenseApplicationsCurrenciesIdRouteHandler: RouteHandler<
  typeof putApi1ExpenseApplicationsCurrenciesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1ExpenseApplicationsCurrenciesIdRouteHandler: RouteHandler<
  typeof deleteApi1ExpenseApplicationsCurrenciesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ExpenseApplicationsFormRouteHandler: RouteHandler<
  typeof getApi1ExpenseApplicationsFormRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1ExpenseApplicationsFormRouteHandler: RouteHandler<
  typeof putApi1ExpenseApplicationsFormRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1ExpenseApplicationsAmountCalculationsRouteHandler: RouteHandler<
  typeof postApi1ExpenseApplicationsAmountCalculationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ExpenseApplicationLineTemplatesRouteHandler: RouteHandler<
  typeof getApi1ExpenseApplicationLineTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1ExpenseApplicationLineTemplatesRouteHandler: RouteHandler<
  typeof postApi1ExpenseApplicationLineTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ExpenseApplicationLineTemplatesIdRouteHandler: RouteHandler<
  typeof getApi1ExpenseApplicationLineTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1ExpenseApplicationLineTemplatesIdRouteHandler: RouteHandler<
  typeof putApi1ExpenseApplicationLineTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1ExpenseApplicationLineTemplatesIdRouteHandler: RouteHandler<
  typeof deleteApi1ExpenseApplicationLineTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1PaymentRequestsRouteHandler: RouteHandler<
  typeof getApi1PaymentRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1PaymentRequestsRouteHandler: RouteHandler<
  typeof postApi1PaymentRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1PaymentRequestsIdRouteHandler: RouteHandler<
  typeof getApi1PaymentRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1PaymentRequestsIdRouteHandler: RouteHandler<
  typeof putApi1PaymentRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1PaymentRequestsIdRouteHandler: RouteHandler<
  typeof deleteApi1PaymentRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1PaymentRequestsIdActionsRouteHandler: RouteHandler<
  typeof postApi1PaymentRequestsIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ApprovalRequestsRouteHandler: RouteHandler<
  typeof getApi1ApprovalRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1ApprovalRequestsRouteHandler: RouteHandler<
  typeof postApi1ApprovalRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ApprovalRequestsIdRouteHandler: RouteHandler<
  typeof getApi1ApprovalRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1ApprovalRequestsIdRouteHandler: RouteHandler<
  typeof putApi1ApprovalRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1ApprovalRequestsIdRouteHandler: RouteHandler<
  typeof deleteApi1ApprovalRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1ApprovalRequestsIdActionsRouteHandler: RouteHandler<
  typeof postApi1ApprovalRequestsIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ApprovalRequestsFormsRouteHandler: RouteHandler<
  typeof getApi1ApprovalRequestsFormsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ApprovalRequestsFormsIdRouteHandler: RouteHandler<
  typeof getApi1ApprovalRequestsFormsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1PurchaseRequestsRouteHandler: RouteHandler<
  typeof getApi1PurchaseRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1PurchaseRequestsRouteHandler: RouteHandler<
  typeof postApi1PurchaseRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1PurchaseRequestsIdRouteHandler: RouteHandler<
  typeof getApi1PurchaseRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1PurchaseRequestsIdRouteHandler: RouteHandler<
  typeof putApi1PurchaseRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1PurchaseRequestsIdRouteHandler: RouteHandler<
  typeof deleteApi1PurchaseRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1PurchaseRequestsFormsRouteHandler: RouteHandler<
  typeof getApi1PurchaseRequestsFormsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1PurchaseRequestsFormsIdRouteHandler: RouteHandler<
  typeof getApi1PurchaseRequestsFormsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1PurchaseRequestsIdActionsRouteHandler: RouteHandler<
  typeof postApi1PurchaseRequestsIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetRouteHandler: RouteHandler<
  typeof getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ApprovalFlowRoutesRouteHandler: RouteHandler<
  typeof getApi1ApprovalFlowRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1ApprovalFlowRoutesIdRouteHandler: RouteHandler<
  typeof getApi1ApprovalFlowRoutesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1SegmentsSegmentIdTagsRouteHandler: RouteHandler<
  typeof getApi1SegmentsSegmentIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1SegmentsSegmentIdTagsRouteHandler: RouteHandler<
  typeof postApi1SegmentsSegmentIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1SegmentsSegmentIdTagsIdRouteHandler: RouteHandler<
  typeof putApi1SegmentsSegmentIdTagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1SegmentsSegmentIdTagsIdRouteHandler: RouteHandler<
  typeof deleteApi1SegmentsSegmentIdTagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1SegmentsSegmentIdTagsCodeUpsertRouteHandler: RouteHandler<
  typeof putApi1SegmentsSegmentIdTagsCodeUpsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1FixedAssetsRouteHandler: RouteHandler<typeof getApi1FixedAssetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApi1AccountGroupsRouteHandler: RouteHandler<
  typeof postApi1AccountGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1UserMatchersRouteHandler: RouteHandler<
  typeof getApi1UserMatchersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1UserMatchersRouteHandler: RouteHandler<
  typeof postApi1UserMatchersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApi1UserMatchersIdRouteHandler: RouteHandler<
  typeof getApi1UserMatchersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApi1UserMatchersIdRouteHandler: RouteHandler<
  typeof putApi1UserMatchersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApi1UserMatchersIdRouteHandler: RouteHandler<
  typeof deleteApi1UserMatchersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApi1UserMatchersApplyRouteHandler: RouteHandler<
  typeof postApi1UserMatchersApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
