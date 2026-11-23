import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationRoute,
  deleteSpacesIdGroupsGroupIdFoldersFolderIdRoute,
  deleteSpacesIdGroupsGroupIdPersonsMemberIdRoute,
  deleteSpacesIdPersonsPersonIdDetailsDesignationRoute,
  deleteSpacesIdPersonsPersonIdRoute,
  deleteSpacesIdRoute,
  deleteSpacesIdStatusCodeRoute,
  deleteSpacesIdTriggersNameRoute,
  deleteSpacesSpaceIdCommonFoldersIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRoute,
  deleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRoute,
  deleteSpacesSpaceIdFoldersIdAccountingYearRoute,
  deleteSpacesSpaceIdFoldersIdBankRoute,
  deleteSpacesSpaceIdFoldersIdCustomerRoute,
  deleteSpacesSpaceIdFoldersIdDocumentClassRoute,
  deleteSpacesSpaceIdFoldersIdEmployeeRoute,
  deleteSpacesSpaceIdFoldersIdInsuranceRoute,
  deleteSpacesSpaceIdFoldersIdLoanRoute,
  deleteSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute,
  deleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRoute,
  deleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdRoute,
  deleteSpacesSpaceIdFoldersIdProfessionalVehicleRoute,
  deleteSpacesSpaceIdFoldersIdProviderRoute,
  deleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdRoute,
  deleteSpacesSpaceIdFoldersIdSocialRegimesRoute,
  deleteSpacesSpaceIdFoldersIdTaxContractRoute,
  deleteSpacesSpaceIdPersonsIdGuestInSpaceRoute,
  deleteSpacesSpaceIdPersonsIdInvitationRoute,
  getSpacesAllRoute,
  getSpacesIdAccountingYearRoute,
  getSpacesIdCollectiveDecisionRoute,
  getSpacesIdCompanyEntitiesAllRoute,
  getSpacesIdCompanyEntitiesCompanyIdRoute,
  getSpacesIdCompanyEntitiesPersonIdDetailsRoute,
  getSpacesIdCompanyEntitiesRoute,
  getSpacesIdFoldersFolderIdPersonsMemberIdRoute,
  getSpacesIdGroupsAllRoute,
  getSpacesIdGroupsGroupIdRoute,
  getSpacesIdGroupsRoute,
  getSpacesIdLegalRoute,
  getSpacesIdLogoRoute,
  getSpacesIdPersonsAllRoute,
  getSpacesIdPersonsPersonIdDetailsRoute,
  getSpacesIdPersonsPersonIdFoldersRoute,
  getSpacesIdPersonsPersonIdGroupsRoute,
  getSpacesIdPersonsPersonIdPortfoliosRoute,
  getSpacesIdPersonsPersonIdRoute,
  getSpacesIdPersonsRoute,
  getSpacesIdProfessionalVehiclesRoute,
  getSpacesIdRoute,
  getSpacesIdSettingsNf203LogsRoute,
  getSpacesIdStatusRoute,
  getSpacesIdTaxContractsRoute,
  getSpacesIdTriggersRoute,
  getSpacesRoute,
  getSpacesSpaceIdCompanyEntitiesIdFollowUpsRoute,
  getSpacesSpaceIdCustomersAllRoute,
  getSpacesSpaceIdCustomersRoute,
  getSpacesSpaceIdDocumentsDocumentIdExtendRoute,
  getSpacesSpaceIdDocumentsDocumentIdFoldersRoute,
  getSpacesSpaceIdDocumentsDocumentIdMailingpriceRoute,
  getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentRoute,
  getSpacesSpaceIdDocumentsDocumentIdVersionsRoute,
  getSpacesSpaceIdDocumentsIdAccessRoute,
  getSpacesSpaceIdDocumentsIdAccountingRoute,
  getSpacesSpaceIdDocumentsIdDownloadRoute,
  getSpacesSpaceIdDocumentsRoute,
  getSpacesSpaceIdEmployeesAllRoute,
  getSpacesSpaceIdEmployeesRoute,
  getSpacesSpaceIdEmployersAllRoute,
  getSpacesSpaceIdEmployersRoute,
  getSpacesSpaceIdExtendRoute,
  getSpacesSpaceIdFoldersAllRoute,
  getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdRoute,
  getSpacesSpaceIdFoldersIdAccountingsJournalRoute,
  getSpacesSpaceIdFoldersIdAccountingsRoute,
  getSpacesSpaceIdFoldersIdBankRoute,
  getSpacesSpaceIdFoldersIdBankStatementsRoute,
  getSpacesSpaceIdFoldersIdCommonFoldersAllRoute,
  getSpacesSpaceIdFoldersIdCommonFoldersRoute,
  getSpacesSpaceIdFoldersIdContractingPartnerRoute,
  getSpacesSpaceIdFoldersIdContractingPartnerSpaceRoute,
  getSpacesSpaceIdFoldersIdContractualDocumentsRoute,
  getSpacesSpaceIdFoldersIdContractualRelationshipRoute,
  getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsRoute,
  getSpacesSpaceIdFoldersIdCustomerRoute,
  getSpacesSpaceIdFoldersIdDeliveriesJournalRoute,
  getSpacesSpaceIdFoldersIdDocumentClassRoute,
  getSpacesSpaceIdFoldersIdDocumentsRoute,
  getSpacesSpaceIdFoldersIdEmployeeRoute,
  getSpacesSpaceIdFoldersIdExpenseProofsRoute,
  getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsRoute,
  getSpacesSpaceIdFoldersIdExpenseReportsRoute,
  getSpacesSpaceIdFoldersIdInsuranceRoute,
  getSpacesSpaceIdFoldersIdInvoicesRoute,
  getSpacesSpaceIdFoldersIdLegalEntityRoute,
  getSpacesSpaceIdFoldersIdLoanRoute,
  getSpacesSpaceIdFoldersIdMessagesMessageIdRoute,
  getSpacesSpaceIdFoldersIdMessagesRoute,
  getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsRoute,
  getSpacesSpaceIdFoldersIdOtherTaxesRoute,
  getSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute,
  getSpacesSpaceIdFoldersIdPasswordsRoute,
  getSpacesSpaceIdFoldersIdPayrollsRoute,
  getSpacesSpaceIdFoldersIdPayslipsRoute,
  getSpacesSpaceIdFoldersIdProviderRoute,
  getSpacesSpaceIdFoldersIdRequiredDocumentsRoute,
  getSpacesSpaceIdFoldersIdRoute,
  getSpacesSpaceIdFoldersIdSectionsRoute,
  getSpacesSpaceIdFoldersIdSocialContractsRoute,
  getSpacesSpaceIdFoldersIdSocialDeclarationsRoute,
  getSpacesSpaceIdFoldersIdSocialRegimesRoute,
  getSpacesSpaceIdFoldersIdSumInvoicesRoute,
  getSpacesSpaceIdFoldersIdVatDeclarationsRoute,
  getSpacesSpaceIdFoldersRoute,
  getSpacesSpaceIdLegalEntitiesIdBanksAllRoute,
  getSpacesSpaceIdLegalEntitiesIdBanksRoute,
  getSpacesSpaceIdLegalEntitiesIdContractsRoute,
  getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllRoute,
  getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsRoute,
  getSpacesSpaceIdLegalEntitiesIdCustomersAllRoute,
  getSpacesSpaceIdLegalEntitiesIdCustomersRoute,
  getSpacesSpaceIdLegalEntitiesIdInsurancesAllRoute,
  getSpacesSpaceIdLegalEntitiesIdInsurancesRoute,
  getSpacesSpaceIdLegalEntitiesIdLoansAllRoute,
  getSpacesSpaceIdLegalEntitiesIdLoansRoute,
  getSpacesSpaceIdLegalEntitiesIdProvidersAllRoute,
  getSpacesSpaceIdLegalEntitiesIdProvidersRoute,
  getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllRoute,
  getSpacesSpaceIdLegalEntitiesIdSocialRegimesRoute,
  getSpacesSpaceIdLoansAllRoute,
  getSpacesSpaceIdLoansRoute,
  getSpacesSpaceIdPersonsIdEmployeesAllRoute,
  getSpacesSpaceIdPersonsIdEmployeesRoute,
  getSpacesSpaceIdPersonsIdExchangeRoute,
  getSpacesSpaceIdPersonsIdFollowUpsRoute,
  getSpacesSpaceIdPersonsIdInvitationRoute,
  getSpacesSpaceIdPersonsMemberIdFoldersIdRoute,
  getSpacesSpaceIdProvidersAllRoute,
  getSpacesSpaceIdProvidersRoute,
  getSpacesSpaceIdSearchRoute,
  getSpacesSpaceIdSocialRegimesAllRoute,
  getSpacesSpaceIdSocialRegimesRoute,
  getSpacesSpaceIdSpacesInvoicingsRoute,
  patchSpacesIdCompanyEntitiesCompanyIdRoute,
  patchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessRoute,
  patchSpacesIdFoldersFolderIdPersonsMemberIdRoute,
  patchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessRoute,
  patchSpacesIdGroupsGroupIdFoldersFolderIdRoute,
  patchSpacesIdGroupsGroupIdPersonsMemberIdRoute,
  patchSpacesIdGroupsGroupIdRoute,
  patchSpacesIdLegalRoute,
  patchSpacesIdPersonsMemberIdPlayerRoute,
  patchSpacesIdPersonsPersonIdRoute,
  patchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRoute,
  patchSpacesIdRoute,
  patchSpacesSpaceIdCommonFoldersIdRoute,
  patchSpacesSpaceIdDocumentsDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRoute,
  patchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRoute,
  patchSpacesSpaceIdFoldersIdAccountingYearRoute,
  patchSpacesSpaceIdFoldersIdBankRoute,
  patchSpacesSpaceIdFoldersIdCollectiveDecisionRoute,
  patchSpacesSpaceIdFoldersIdCustomerRoute,
  patchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachRoute,
  patchSpacesSpaceIdFoldersIdEmployeeRoute,
  patchSpacesSpaceIdFoldersIdInsuranceRoute,
  patchSpacesSpaceIdFoldersIdLoanRoute,
  patchSpacesSpaceIdFoldersIdMessagesMessageIdRoute,
  patchSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute,
  patchSpacesSpaceIdFoldersIdProfessionalVehicleRoute,
  patchSpacesSpaceIdFoldersIdProviderRoute,
  patchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRoute,
  patchSpacesSpaceIdFoldersIdRoute,
  patchSpacesSpaceIdFoldersIdSocialRegimesRoute,
  patchSpacesSpaceIdFoldersIdTaxContractRoute,
  patchSpacesSpaceIdPersonsIdCallForDocumentRoute,
  patchSpacesSpaceIdPersonsIdGuestInSpaceRoute,
  patchSpacesSpaceIdPersonsIdInvitationRoute,
  patchSpacesSpaceIdPersonsMemberIdFoldersIdRoute,
  postSpacesIdAccountingYearRoute,
  postSpacesIdCollectiveDecisionRoute,
  postSpacesIdCompanyEntitiesPersonIdDetailsRoute,
  postSpacesIdCompanyEntitiesRoute,
  postSpacesIdDocumentsDownloadRoute,
  postSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceRoute,
  postSpacesIdGroupsRoute,
  postSpacesIdPersonsPersonIdDetailsRoute,
  postSpacesIdPersonsPersonIdPortfoliosRoute,
  postSpacesIdPersonsRoute,
  postSpacesIdProfessionalVehiclesRoute,
  postSpacesIdSettingsNf203LogsRoute,
  postSpacesIdStatusRoute,
  postSpacesIdTaxContractsRoute,
  postSpacesIdTriggersNameRoute,
  postSpacesRoute,
  postSpacesSpaceIdDocumentsDocumentIdExtendRoute,
  postSpacesSpaceIdDocumentsDocumentIdMailingRoute,
  postSpacesSpaceIdDocumentsDocumentIdVersionsRoute,
  postSpacesSpaceIdExtendRoute,
  postSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshRoute,
  postSpacesSpaceIdFoldersIdBankStatementsRoute,
  postSpacesSpaceIdFoldersIdCommonFoldersRoute,
  postSpacesSpaceIdFoldersIdContractualDocumentsRoute,
  postSpacesSpaceIdFoldersIdCoporateTaxDeclarationsRoute,
  postSpacesSpaceIdFoldersIdDocumentClassRoute,
  postSpacesSpaceIdFoldersIdDocumentsRoute,
  postSpacesSpaceIdFoldersIdExpenseProofsRoute,
  postSpacesSpaceIdFoldersIdExpenseReportsRoute,
  postSpacesSpaceIdFoldersIdInvoicesRoute,
  postSpacesSpaceIdFoldersIdMessagesRoute,
  postSpacesSpaceIdFoldersIdOtherTaxesRoute,
  postSpacesSpaceIdFoldersIdPasswordsRoute,
  postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRoute,
  postSpacesSpaceIdFoldersIdPayrollsRoute,
  postSpacesSpaceIdFoldersIdPayslipsRoute,
  postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRoute,
  postSpacesSpaceIdFoldersIdSocialContractsRoute,
  postSpacesSpaceIdFoldersIdSocialDeclarationsRoute,
  postSpacesSpaceIdFoldersIdVatDeclarationsRoute,
  postSpacesSpaceIdLegalEntitiesIdBanksRoute,
  postSpacesSpaceIdLegalEntitiesIdCustomersRoute,
  postSpacesSpaceIdLegalEntitiesIdInsurancesRoute,
  postSpacesSpaceIdLegalEntitiesIdLoansRoute,
  postSpacesSpaceIdLegalEntitiesIdProvidersRoute,
  postSpacesSpaceIdLegalEntitiesIdSocialRegimesRoute,
  postSpacesSpaceIdPersonsIdCallForDocumentRoute,
  postSpacesSpaceIdPersonsIdEmployeesRoute,
  postSpacesSpaceIdPersonsIdGuestInSpaceRoute,
  postSpacesSpaceIdPersonsIdInvitationInvitationIdSendRoute,
  postSpacesSpaceIdPersonsIdInvitationRoute,
} from '../routes'

export const getSpacesRouteHandler: RouteHandler<typeof getSpacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesRouteHandler: RouteHandler<typeof postSpacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesAllRouteHandler: RouteHandler<typeof getSpacesAllRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesIdRouteHandler: RouteHandler<typeof deleteSpacesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdRouteHandler: RouteHandler<typeof getSpacesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdRouteHandler: RouteHandler<typeof patchSpacesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdAccountingYearRouteHandler: RouteHandler<
  typeof getSpacesIdAccountingYearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdAccountingYearRouteHandler: RouteHandler<
  typeof postSpacesIdAccountingYearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdCollectiveDecisionRouteHandler: RouteHandler<
  typeof getSpacesIdCollectiveDecisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdCollectiveDecisionRouteHandler: RouteHandler<
  typeof postSpacesIdCollectiveDecisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdCompanyEntitiesRouteHandler: RouteHandler<
  typeof getSpacesIdCompanyEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdCompanyEntitiesRouteHandler: RouteHandler<
  typeof postSpacesIdCompanyEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdCompanyEntitiesAllRouteHandler: RouteHandler<
  typeof getSpacesIdCompanyEntitiesAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdCompanyEntitiesCompanyIdRouteHandler: RouteHandler<
  typeof getSpacesIdCompanyEntitiesCompanyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdCompanyEntitiesCompanyIdRouteHandler: RouteHandler<
  typeof patchSpacesIdCompanyEntitiesCompanyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdCompanyEntitiesPersonIdDetailsRouteHandler: RouteHandler<
  typeof getSpacesIdCompanyEntitiesPersonIdDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdCompanyEntitiesPersonIdDetailsRouteHandler: RouteHandler<
  typeof postSpacesIdCompanyEntitiesPersonIdDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationRouteHandler: RouteHandler<
  typeof deleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdDocumentsDownloadRouteHandler: RouteHandler<
  typeof postSpacesIdDocumentsDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdFoldersFolderIdPersonsMemberIdRouteHandler: RouteHandler<
  typeof getSpacesIdFoldersFolderIdPersonsMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdFoldersFolderIdPersonsMemberIdRouteHandler: RouteHandler<
  typeof patchSpacesIdFoldersFolderIdPersonsMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessRouteHandler: RouteHandler<
  typeof patchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessRouteHandler: RouteHandler<
  typeof patchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceRouteHandler: RouteHandler<
  typeof postSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdGroupsRouteHandler: RouteHandler<typeof getSpacesIdGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSpacesIdGroupsRouteHandler: RouteHandler<typeof postSpacesIdGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSpacesIdGroupsAllRouteHandler: RouteHandler<
  typeof getSpacesIdGroupsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof getSpacesIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof patchSpacesIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesIdGroupsGroupIdFoldersFolderIdRouteHandler: RouteHandler<
  typeof deleteSpacesIdGroupsGroupIdFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdGroupsGroupIdFoldersFolderIdRouteHandler: RouteHandler<
  typeof patchSpacesIdGroupsGroupIdFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesIdGroupsGroupIdPersonsMemberIdRouteHandler: RouteHandler<
  typeof deleteSpacesIdGroupsGroupIdPersonsMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdGroupsGroupIdPersonsMemberIdRouteHandler: RouteHandler<
  typeof patchSpacesIdGroupsGroupIdPersonsMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdLegalRouteHandler: RouteHandler<typeof getSpacesIdLegalRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdLegalRouteHandler: RouteHandler<typeof patchSpacesIdLegalRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSpacesIdLogoRouteHandler: RouteHandler<typeof getSpacesIdLogoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdPersonsRouteHandler: RouteHandler<typeof getSpacesIdPersonsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSpacesIdPersonsRouteHandler: RouteHandler<
  typeof postSpacesIdPersonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdPersonsAllRouteHandler: RouteHandler<
  typeof getSpacesIdPersonsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdPersonsMemberIdPlayerRouteHandler: RouteHandler<
  typeof patchSpacesIdPersonsMemberIdPlayerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesIdPersonsPersonIdRouteHandler: RouteHandler<
  typeof deleteSpacesIdPersonsPersonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdPersonsPersonIdRouteHandler: RouteHandler<
  typeof getSpacesIdPersonsPersonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdPersonsPersonIdRouteHandler: RouteHandler<
  typeof patchSpacesIdPersonsPersonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdPersonsPersonIdDetailsRouteHandler: RouteHandler<
  typeof getSpacesIdPersonsPersonIdDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdPersonsPersonIdDetailsRouteHandler: RouteHandler<
  typeof postSpacesIdPersonsPersonIdDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesIdPersonsPersonIdDetailsDesignationRouteHandler: RouteHandler<
  typeof deleteSpacesIdPersonsPersonIdDetailsDesignationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdPersonsPersonIdFoldersRouteHandler: RouteHandler<
  typeof getSpacesIdPersonsPersonIdFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdPersonsPersonIdGroupsRouteHandler: RouteHandler<
  typeof getSpacesIdPersonsPersonIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdPersonsPersonIdPortfoliosRouteHandler: RouteHandler<
  typeof getSpacesIdPersonsPersonIdPortfoliosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdPersonsPersonIdPortfoliosRouteHandler: RouteHandler<
  typeof postSpacesIdPersonsPersonIdPortfoliosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRouteHandler: RouteHandler<
  typeof patchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdProfessionalVehiclesRouteHandler: RouteHandler<
  typeof getSpacesIdProfessionalVehiclesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdProfessionalVehiclesRouteHandler: RouteHandler<
  typeof postSpacesIdProfessionalVehiclesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdSettingsNf203LogsRouteHandler: RouteHandler<
  typeof getSpacesIdSettingsNf203LogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdSettingsNf203LogsRouteHandler: RouteHandler<
  typeof postSpacesIdSettingsNf203LogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdStatusRouteHandler: RouteHandler<typeof getSpacesIdStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSpacesIdStatusRouteHandler: RouteHandler<typeof postSpacesIdStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSpacesIdStatusCodeRouteHandler: RouteHandler<
  typeof deleteSpacesIdStatusCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdTaxContractsRouteHandler: RouteHandler<
  typeof getSpacesIdTaxContractsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdTaxContractsRouteHandler: RouteHandler<
  typeof postSpacesIdTaxContractsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesIdTriggersRouteHandler: RouteHandler<
  typeof getSpacesIdTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesIdTriggersNameRouteHandler: RouteHandler<
  typeof deleteSpacesIdTriggersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesIdTriggersNameRouteHandler: RouteHandler<
  typeof postSpacesIdTriggersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdCommonFoldersIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdCommonFoldersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdCommonFoldersIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdCommonFoldersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdCompanyEntitiesIdFollowUpsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdCompanyEntitiesIdFollowUpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdCustomersRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdCustomersAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdCustomersAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdDocumentsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdDocumentsDocumentIdExtendRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdDocumentsDocumentIdExtendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdDocumentsDocumentIdExtendRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdDocumentsDocumentIdExtendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdDocumentsDocumentIdFoldersRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdDocumentsDocumentIdFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdDocumentsDocumentIdMailingRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdDocumentsDocumentIdMailingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdDocumentsDocumentIdMailingpriceRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdDocumentsDocumentIdMailingpriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdDocumentsDocumentIdVersionsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdDocumentsDocumentIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdDocumentsDocumentIdVersionsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdDocumentsDocumentIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdDocumentsIdAccessRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdDocumentsIdAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdDocumentsIdAccountingRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdDocumentsIdAccountingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdDocumentsIdDownloadRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdDocumentsIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdEmployeesRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdEmployeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdEmployeesAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdEmployeesAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdEmployersRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdEmployersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdEmployersAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdEmployersAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdExtendRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdExtendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdExtendRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdExtendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdAccountingYearRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdAccountingYearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdAccountingYearRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdAccountingYearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdAccountingsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdAccountingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdAccountingsJournalRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdAccountingsJournalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdBankRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdBankRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdBankRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdBankRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdBankRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdBankRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdBankStatementsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdBankStatementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdBankStatementsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdBankStatementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdCollectiveDecisionRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdCollectiveDecisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdCommonFoldersRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdCommonFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdCommonFoldersRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdCommonFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdCommonFoldersAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdCommonFoldersAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdContractingPartnerRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdContractingPartnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdContractingPartnerSpaceRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdContractingPartnerSpaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdContractualDocumentsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdContractualDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdContractualDocumentsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdContractualDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdContractualRelationshipRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdContractualRelationshipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdCoporateTaxDeclarationsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdCoporateTaxDeclarationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdCustomerRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdCustomerRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdCustomerRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdDeliveriesJournalRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdDeliveriesJournalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdDocumentsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdDocumentsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdEmployeeRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdEmployeeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdEmployeeRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdEmployeeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdEmployeeRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdEmployeeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdExpenseProofsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdExpenseProofsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdExpenseProofsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdExpenseProofsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdExpenseReportsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdExpenseReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdExpenseReportsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdExpenseReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdInsuranceRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdInsuranceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdInsuranceRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdInsuranceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdInsuranceRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdInsuranceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdInvoicesRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdInvoicesRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdLegalEntityRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdLegalEntityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdLoanRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdLoanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdLoanRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdLoanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdLoanRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdLoanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdMessagesRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdMessagesRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdMessagesMessageIdRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdMessagesMessageIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdOtherTaxesRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdOtherTaxesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdOtherTaxesRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdOtherTaxesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdPasswordsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdPasswordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdPasswordsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdPasswordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdPasswordsPasswordIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdPasswordsPasswordIdRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdPasswordsPasswordIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdPayrollsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdPayrollsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdPayrollsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdPayrollsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdPayslipsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdPayslipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdPayslipsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdPayslipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdProfessionalVehicleRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdProfessionalVehicleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdProfessionalVehicleRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdProfessionalVehicleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdProviderRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdProviderRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdProviderRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdRequiredDocumentsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdRequiredDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdSectionsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdSectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdSocialContractsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdSocialContractsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdSocialContractsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdSocialContractsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdSocialDeclarationsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdSocialDeclarationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdSocialDeclarationsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdSocialDeclarationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdSocialRegimesRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdSocialRegimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdSocialRegimesRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdSocialRegimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdSocialRegimesRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdSocialRegimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdSumInvoicesRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdSumInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdTaxContractRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdTaxContractRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdFoldersIdTaxContractRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdFoldersIdTaxContractRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdVatDeclarationsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdVatDeclarationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdVatDeclarationsRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdVatDeclarationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdFoldersIdDocumentClassRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdFoldersIdDocumentClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdFoldersIdDocumentClassRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdFoldersIdDocumentClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdFoldersIdDocumentClassRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdFoldersIdDocumentClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdBanksRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdBanksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdLegalEntitiesIdBanksRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdLegalEntitiesIdBanksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdBanksAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdBanksAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdContractsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdContractsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdCustomersRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdLegalEntitiesIdCustomersRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdLegalEntitiesIdCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdCustomersAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdCustomersAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdInsurancesRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdInsurancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdLegalEntitiesIdInsurancesRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdLegalEntitiesIdInsurancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdInsurancesAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdInsurancesAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdLoansRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdLoansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdLegalEntitiesIdLoansRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdLegalEntitiesIdLoansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdLoansAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdLoansAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdProvidersRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdLegalEntitiesIdProvidersRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdLegalEntitiesIdProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdProvidersAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdProvidersAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdSocialRegimesRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdSocialRegimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdLegalEntitiesIdSocialRegimesRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdLegalEntitiesIdSocialRegimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLoansRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLoansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdLoansAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdLoansAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdPersonsIdCallForDocumentRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdPersonsIdCallForDocumentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdPersonsIdCallForDocumentRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdPersonsIdCallForDocumentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdPersonsIdEmployeesRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdPersonsIdEmployeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdPersonsIdEmployeesRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdPersonsIdEmployeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdPersonsIdEmployeesAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdPersonsIdEmployeesAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdPersonsIdExchangeRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdPersonsIdExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdPersonsIdFollowUpsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdPersonsIdFollowUpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdPersonsIdGuestInSpaceRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdPersonsIdGuestInSpaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdPersonsIdGuestInSpaceRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdPersonsIdGuestInSpaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdPersonsIdGuestInSpaceRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdPersonsIdGuestInSpaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpacesSpaceIdPersonsIdInvitationRouteHandler: RouteHandler<
  typeof deleteSpacesSpaceIdPersonsIdInvitationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdPersonsIdInvitationRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdPersonsIdInvitationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdPersonsIdInvitationRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdPersonsIdInvitationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdPersonsIdInvitationRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdPersonsIdInvitationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacesSpaceIdPersonsIdInvitationInvitationIdSendRouteHandler: RouteHandler<
  typeof postSpacesSpaceIdPersonsIdInvitationInvitationIdSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdPersonsMemberIdFoldersIdRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdPersonsMemberIdFoldersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpacesSpaceIdPersonsMemberIdFoldersIdRouteHandler: RouteHandler<
  typeof patchSpacesSpaceIdPersonsMemberIdFoldersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdProvidersRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdProvidersAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdProvidersAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdSearchRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdSocialRegimesRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdSocialRegimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdSocialRegimesAllRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdSocialRegimesAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacesSpaceIdSpacesInvoicingsRouteHandler: RouteHandler<
  typeof getSpacesSpaceIdSpacesInvoicingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
