import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const spacesHandler = app
  .openapi(getSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdAccountingYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdAccountingYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdCollectiveDecisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdCollectiveDecisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdCompanyEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdCompanyEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdCompanyEntitiesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdCompanyEntitiesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdCompanyEntitiesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdCompanyEntitiesPersonIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdCompanyEntitiesPersonIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdDocumentsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdFoldersFolderIdPersonsMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdFoldersFolderIdPersonsMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdGroupsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesIdGroupsGroupIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdGroupsGroupIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesIdGroupsGroupIdPersonsMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdGroupsGroupIdPersonsMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdLegalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdLegalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdPersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdPersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdPersonsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdPersonsMemberIdPlayerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesIdPersonsPersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdPersonsPersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdPersonsPersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdPersonsPersonIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdPersonsPersonIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesIdPersonsPersonIdDetailsDesignationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdPersonsPersonIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdPersonsPersonIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdPersonsPersonIdPortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdPersonsPersonIdPortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdProfessionalVehiclesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdProfessionalVehiclesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdSettingsNf203LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdSettingsNf203LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesIdStatusCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdTaxContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdTaxContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesIdTriggersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdTriggersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdCommonFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdCommonFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdCompanyEntitiesIdFollowUpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdCustomersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdDocumentsDocumentIdExtendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdDocumentsDocumentIdExtendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdDocumentsDocumentIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdDocumentsDocumentIdMailingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdDocumentsDocumentIdMailingpriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdDocumentsDocumentIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdDocumentsDocumentIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdDocumentsIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdDocumentsIdAccountingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdDocumentsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdEmployeesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdEmployersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdEmployersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdExtendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdExtendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdAccountingYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdAccountingYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdAccountingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdAccountingsJournalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdBankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdBankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdBankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdBankStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdBankStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdCollectiveDecisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdCommonFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdCommonFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdCommonFoldersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdContractingPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdContractingPartnerSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdContractualDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdContractualDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdContractualRelationshipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdCoporateTaxDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdDeliveriesJournalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdEmployeeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdEmployeeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdEmployeeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdExpenseProofsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdExpenseProofsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdExpenseReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdExpenseReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdInsuranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdInsuranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdInsuranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdLegalEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdLoanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdLoanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdLoanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdOtherTaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdOtherTaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdPasswordsPasswordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdPayrollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdPayrollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdPayslipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdPayslipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdProfessionalVehicleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdProfessionalVehicleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdRequiredDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSpacesSpaceIdFoldersIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdSocialContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdSocialContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdSocialDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdSocialDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdSocialRegimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdSocialRegimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdSocialRegimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdSumInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdTaxContractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdFoldersIdTaxContractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdVatDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdVatDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdFoldersIdDocumentClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdFoldersIdDocumentClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdFoldersIdDocumentClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdBanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdLegalEntitiesIdBanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdBanksAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdLegalEntitiesIdCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdCustomersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdInsurancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdLegalEntitiesIdInsurancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdInsurancesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdLoansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdLegalEntitiesIdLoansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdLoansAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdLegalEntitiesIdProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdProvidersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdSocialRegimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdLegalEntitiesIdSocialRegimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLoansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdLoansAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdPersonsIdCallForDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdPersonsIdCallForDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdPersonsIdEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdPersonsIdEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdPersonsIdEmployeesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdPersonsIdExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdPersonsIdFollowUpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdPersonsIdGuestInSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdPersonsIdGuestInSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdPersonsIdGuestInSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesSpaceIdPersonsIdInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdPersonsIdInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdPersonsIdInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdPersonsIdInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdPersonsIdInvitationInvitationIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdPersonsMemberIdFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpacesSpaceIdPersonsMemberIdFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdProvidersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdSocialRegimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdSocialRegimesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdSpacesInvoicingsRoute, (c) => {
    throw new Error('Not implemented')
  })
