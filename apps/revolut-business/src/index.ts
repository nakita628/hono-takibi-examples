import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingCategoriesAccountingCategoryIdRoute,
  deleteCardsCardIdRoute,
  deleteCounterpartyCounterpartyIdRoute,
  deleteDepartmentsDepartmentIdRoute,
  deleteLabelGroupsGroupIdLabelsLabelIdRoute,
  deleteLabelGroupsGroupIdRoute,
  deletePaymentDraftsPaymentDraftIdPaymentsPaymentIdRoute,
  deletePaymentDraftsPaymentDraftIdRoute,
  deleteTaxRatesTaxRateIdRoute,
  deleteTeamMembersTeamMemberIdDepartmentRoute,
  deleteTeamMembersTeamMemberIdManagerRoute,
  deleteTeamMembersTeamMemberIdRoute,
  deleteWebhookRoute,
  deleteWebhooksWebhookIdRoute,
  getAccountingCategoriesAccountingCategoryIdRoute,
  getAccountingCategoriesRoute,
  getAccountsAccountIdBankDetailsRoute,
  getAccountsAccountIdRoute,
  getAccountsRoute,
  getCardInvitationsCardInvitationIdRoute,
  getCardInvitationsRoute,
  getCardsCardIdRoute,
  getCardsCardIdSensitiveDetailsRoute,
  getCardsRoute,
  getCounterpartiesCountriesRoute,
  getCounterpartiesFieldsRoute,
  getCounterpartiesRoute,
  getCounterpartyCounterpartyIdRoute,
  getDepartmentsDepartmentIdRoute,
  getDepartmentsRoute,
  getExchangeReasonsRoute,
  getExpensesExpenseIdReceiptsReceiptIdContentRoute,
  getExpensesExpenseIdRoute,
  getExpensesRoute,
  getLabelGroupsGroupIdLabelsRoute,
  getLabelGroupsGroupIdRoute,
  getLabelGroupsRoute,
  getPaymentDraftsPaymentDraftIdRoute,
  getPaymentDraftsRoute,
  getPayoutLinksPayoutLinkIdRoute,
  getPayoutLinksRoute,
  getRateRoute,
  getRolesRoute,
  getTaxRatesRoute,
  getTaxRatesTaxRateIdRoute,
  getTeamMembersRoute,
  getTeamMembersTeamMemberIdRoute,
  getTransactionIdRoute,
  getTransactionsRoute,
  getTransferReasonsRoute,
  getWebhookRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdFailedEventsRoute,
  getWebhooksWebhookIdRoute,
  patchAccountingCategoriesAccountingCategoryIdRoute,
  patchCardInvitationsCardInvitationIdRoute,
  patchCardsCardIdRoute,
  patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRoute,
  patchDepartmentsDepartmentIdRoute,
  patchLabelGroupsGroupIdLabelsLabelIdRoute,
  patchLabelGroupsGroupIdRoute,
  patchPaymentDraftsPaymentDraftIdPaymentsPaymentIdRoute,
  patchPaymentDraftsPaymentDraftIdRoute,
  patchTaxRatesTaxRateIdRoute,
  patchWebhooksWebhookIdRoute,
  postAccountingCategoriesRoute,
  postAccountNameValidationRoute,
  postCardInvitationsCardInvitationIdCancelRoute,
  postCardInvitationsRoute,
  postCardsCardIdFreezeRoute,
  postCardsCardIdLockRoute,
  postCardsCardIdUnfreezeRoute,
  postCardsCardIdUnlockRoute,
  postCardsRoute,
  postCounterpartyRoute,
  postDepartmentsRoute,
  postExchangeRoute,
  postLabelGroupsGroupIdLabelsRoute,
  postLabelGroupsRoute,
  postPayFieldsRoute,
  postPayIndicativeQuoteRoute,
  postPaymentDraftsPaymentDraftIdPaymentsRoute,
  postPaymentDraftsRoute,
  postPayoutLinksPayoutLinkIdCancelRoute,
  postPayoutLinksRoute,
  postPayRoute,
  postSandboxTopupRoute,
  postSandboxTransactionsIdActionRoute,
  postTaxRatesRoute,
  postTeamMembersRoute,
  postTeamMembersTeamMemberIdSuspendRoute,
  postTeamMembersTeamMemberIdUnsuspendRoute,
  postTransferRoute,
  postWebhookRoute,
  postWebhooksRoute,
  postWebhooksWebhookIdRotateSigningSecretRoute,
  putCardsCardIdContactsRoute,
  putCardsCardIdReferencesRoute,
  putTeamMembersTeamMemberIdDepartmentRoute,
  putTeamMembersTeamMemberIdManagerRoute,
  putTeamMembersTeamMemberIdRoleRoute,
} from './routes'
import {
  deleteAccountingCategoriesAccountingCategoryIdRouteHandler,
  deleteCardsCardIdRouteHandler,
  deleteCounterpartyCounterpartyIdRouteHandler,
  deleteDepartmentsDepartmentIdRouteHandler,
  deleteLabelGroupsGroupIdLabelsLabelIdRouteHandler,
  deleteLabelGroupsGroupIdRouteHandler,
  deletePaymentDraftsPaymentDraftIdPaymentsPaymentIdRouteHandler,
  deletePaymentDraftsPaymentDraftIdRouteHandler,
  deleteTaxRatesTaxRateIdRouteHandler,
  deleteTeamMembersTeamMemberIdDepartmentRouteHandler,
  deleteTeamMembersTeamMemberIdManagerRouteHandler,
  deleteTeamMembersTeamMemberIdRouteHandler,
  deleteWebhookRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  getAccountingCategoriesAccountingCategoryIdRouteHandler,
  getAccountingCategoriesRouteHandler,
  getAccountsAccountIdBankDetailsRouteHandler,
  getAccountsAccountIdRouteHandler,
  getAccountsRouteHandler,
  getCardInvitationsCardInvitationIdRouteHandler,
  getCardInvitationsRouteHandler,
  getCardsCardIdRouteHandler,
  getCardsCardIdSensitiveDetailsRouteHandler,
  getCardsRouteHandler,
  getCounterpartiesCountriesRouteHandler,
  getCounterpartiesFieldsRouteHandler,
  getCounterpartiesRouteHandler,
  getCounterpartyCounterpartyIdRouteHandler,
  getDepartmentsDepartmentIdRouteHandler,
  getDepartmentsRouteHandler,
  getExchangeReasonsRouteHandler,
  getExpensesExpenseIdReceiptsReceiptIdContentRouteHandler,
  getExpensesExpenseIdRouteHandler,
  getExpensesRouteHandler,
  getLabelGroupsGroupIdLabelsRouteHandler,
  getLabelGroupsGroupIdRouteHandler,
  getLabelGroupsRouteHandler,
  getPaymentDraftsPaymentDraftIdRouteHandler,
  getPaymentDraftsRouteHandler,
  getPayoutLinksPayoutLinkIdRouteHandler,
  getPayoutLinksRouteHandler,
  getRateRouteHandler,
  getRolesRouteHandler,
  getTaxRatesRouteHandler,
  getTaxRatesTaxRateIdRouteHandler,
  getTeamMembersRouteHandler,
  getTeamMembersTeamMemberIdRouteHandler,
  getTransactionIdRouteHandler,
  getTransactionsRouteHandler,
  getTransferReasonsRouteHandler,
  getWebhookRouteHandler,
  getWebhooksRouteHandler,
  getWebhooksWebhookIdFailedEventsRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  patchAccountingCategoriesAccountingCategoryIdRouteHandler,
  patchCardInvitationsCardInvitationIdRouteHandler,
  patchCardsCardIdRouteHandler,
  patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRouteHandler,
  patchDepartmentsDepartmentIdRouteHandler,
  patchLabelGroupsGroupIdLabelsLabelIdRouteHandler,
  patchLabelGroupsGroupIdRouteHandler,
  patchPaymentDraftsPaymentDraftIdPaymentsPaymentIdRouteHandler,
  patchPaymentDraftsPaymentDraftIdRouteHandler,
  patchTaxRatesTaxRateIdRouteHandler,
  patchWebhooksWebhookIdRouteHandler,
  postAccountingCategoriesRouteHandler,
  postAccountNameValidationRouteHandler,
  postCardInvitationsCardInvitationIdCancelRouteHandler,
  postCardInvitationsRouteHandler,
  postCardsCardIdFreezeRouteHandler,
  postCardsCardIdLockRouteHandler,
  postCardsCardIdUnfreezeRouteHandler,
  postCardsCardIdUnlockRouteHandler,
  postCardsRouteHandler,
  postCounterpartyRouteHandler,
  postDepartmentsRouteHandler,
  postExchangeRouteHandler,
  postLabelGroupsGroupIdLabelsRouteHandler,
  postLabelGroupsRouteHandler,
  postPayFieldsRouteHandler,
  postPayIndicativeQuoteRouteHandler,
  postPaymentDraftsPaymentDraftIdPaymentsRouteHandler,
  postPaymentDraftsRouteHandler,
  postPayoutLinksPayoutLinkIdCancelRouteHandler,
  postPayoutLinksRouteHandler,
  postPayRouteHandler,
  postSandboxTopupRouteHandler,
  postSandboxTransactionsIdActionRouteHandler,
  postTaxRatesRouteHandler,
  postTeamMembersRouteHandler,
  postTeamMembersTeamMemberIdSuspendRouteHandler,
  postTeamMembersTeamMemberIdUnsuspendRouteHandler,
  postTransferRouteHandler,
  postWebhookRouteHandler,
  postWebhooksRouteHandler,
  postWebhooksWebhookIdRotateSigningSecretRouteHandler,
  putCardsCardIdContactsRouteHandler,
  putCardsCardIdReferencesRouteHandler,
  putTeamMembersTeamMemberIdDepartmentRouteHandler,
  putTeamMembersTeamMemberIdManagerRouteHandler,
  putTeamMembersTeamMemberIdRoleRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAccountingCategoriesRoute, postAccountingCategoriesRouteHandler)
  .openapi(getAccountingCategoriesRoute, getAccountingCategoriesRouteHandler)
  .openapi(
    getAccountingCategoriesAccountingCategoryIdRoute,
    getAccountingCategoriesAccountingCategoryIdRouteHandler,
  )
  .openapi(
    patchAccountingCategoriesAccountingCategoryIdRoute,
    patchAccountingCategoriesAccountingCategoryIdRouteHandler,
  )
  .openapi(
    deleteAccountingCategoriesAccountingCategoryIdRoute,
    deleteAccountingCategoriesAccountingCategoryIdRouteHandler,
  )
  .openapi(postAccountNameValidationRoute, postAccountNameValidationRouteHandler)
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(getAccountsAccountIdRoute, getAccountsAccountIdRouteHandler)
  .openapi(getAccountsAccountIdBankDetailsRoute, getAccountsAccountIdBankDetailsRouteHandler)
  .openapi(postCardInvitationsRoute, postCardInvitationsRouteHandler)
  .openapi(getCardInvitationsRoute, getCardInvitationsRouteHandler)
  .openapi(getCardInvitationsCardInvitationIdRoute, getCardInvitationsCardInvitationIdRouteHandler)
  .openapi(
    patchCardInvitationsCardInvitationIdRoute,
    patchCardInvitationsCardInvitationIdRouteHandler,
  )
  .openapi(
    postCardInvitationsCardInvitationIdCancelRoute,
    postCardInvitationsCardInvitationIdCancelRouteHandler,
  )
  .openapi(getCardsRoute, getCardsRouteHandler)
  .openapi(postCardsRoute, postCardsRouteHandler)
  .openapi(getCardsCardIdRoute, getCardsCardIdRouteHandler)
  .openapi(patchCardsCardIdRoute, patchCardsCardIdRouteHandler)
  .openapi(deleteCardsCardIdRoute, deleteCardsCardIdRouteHandler)
  .openapi(putCardsCardIdContactsRoute, putCardsCardIdContactsRouteHandler)
  .openapi(putCardsCardIdReferencesRoute, putCardsCardIdReferencesRouteHandler)
  .openapi(postCardsCardIdFreezeRoute, postCardsCardIdFreezeRouteHandler)
  .openapi(postCardsCardIdUnfreezeRoute, postCardsCardIdUnfreezeRouteHandler)
  .openapi(postCardsCardIdLockRoute, postCardsCardIdLockRouteHandler)
  .openapi(postCardsCardIdUnlockRoute, postCardsCardIdUnlockRouteHandler)
  .openapi(getCardsCardIdSensitiveDetailsRoute, getCardsCardIdSensitiveDetailsRouteHandler)
  .openapi(getCounterpartiesRoute, getCounterpartiesRouteHandler)
  .openapi(postCounterpartyRoute, postCounterpartyRouteHandler)
  .openapi(getCounterpartiesCountriesRoute, getCounterpartiesCountriesRouteHandler)
  .openapi(getCounterpartiesFieldsRoute, getCounterpartiesFieldsRouteHandler)
  .openapi(getCounterpartyCounterpartyIdRoute, getCounterpartyCounterpartyIdRouteHandler)
  .openapi(deleteCounterpartyCounterpartyIdRoute, deleteCounterpartyCounterpartyIdRouteHandler)
  .openapi(
    patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRoute,
    patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRouteHandler,
  )
  .openapi(getRateRoute, getRateRouteHandler)
  .openapi(postExchangeRoute, postExchangeRouteHandler)
  .openapi(getExchangeReasonsRoute, getExchangeReasonsRouteHandler)
  .openapi(getExpensesRoute, getExpensesRouteHandler)
  .openapi(getExpensesExpenseIdRoute, getExpensesExpenseIdRouteHandler)
  .openapi(
    getExpensesExpenseIdReceiptsReceiptIdContentRoute,
    getExpensesExpenseIdReceiptsReceiptIdContentRouteHandler,
  )
  .openapi(postLabelGroupsRoute, postLabelGroupsRouteHandler)
  .openapi(getLabelGroupsRoute, getLabelGroupsRouteHandler)
  .openapi(getLabelGroupsGroupIdRoute, getLabelGroupsGroupIdRouteHandler)
  .openapi(patchLabelGroupsGroupIdRoute, patchLabelGroupsGroupIdRouteHandler)
  .openapi(deleteLabelGroupsGroupIdRoute, deleteLabelGroupsGroupIdRouteHandler)
  .openapi(postLabelGroupsGroupIdLabelsRoute, postLabelGroupsGroupIdLabelsRouteHandler)
  .openapi(getLabelGroupsGroupIdLabelsRoute, getLabelGroupsGroupIdLabelsRouteHandler)
  .openapi(
    patchLabelGroupsGroupIdLabelsLabelIdRoute,
    patchLabelGroupsGroupIdLabelsLabelIdRouteHandler,
  )
  .openapi(
    deleteLabelGroupsGroupIdLabelsLabelIdRoute,
    deleteLabelGroupsGroupIdLabelsLabelIdRouteHandler,
  )
  .openapi(getPaymentDraftsRoute, getPaymentDraftsRouteHandler)
  .openapi(postPaymentDraftsRoute, postPaymentDraftsRouteHandler)
  .openapi(getPaymentDraftsPaymentDraftIdRoute, getPaymentDraftsPaymentDraftIdRouteHandler)
  .openapi(deletePaymentDraftsPaymentDraftIdRoute, deletePaymentDraftsPaymentDraftIdRouteHandler)
  .openapi(patchPaymentDraftsPaymentDraftIdRoute, patchPaymentDraftsPaymentDraftIdRouteHandler)
  .openapi(
    postPaymentDraftsPaymentDraftIdPaymentsRoute,
    postPaymentDraftsPaymentDraftIdPaymentsRouteHandler,
  )
  .openapi(
    patchPaymentDraftsPaymentDraftIdPaymentsPaymentIdRoute,
    patchPaymentDraftsPaymentDraftIdPaymentsPaymentIdRouteHandler,
  )
  .openapi(
    deletePaymentDraftsPaymentDraftIdPaymentsPaymentIdRoute,
    deletePaymentDraftsPaymentDraftIdPaymentsPaymentIdRouteHandler,
  )
  .openapi(postPayoutLinksRoute, postPayoutLinksRouteHandler)
  .openapi(getPayoutLinksRoute, getPayoutLinksRouteHandler)
  .openapi(getPayoutLinksPayoutLinkIdRoute, getPayoutLinksPayoutLinkIdRouteHandler)
  .openapi(postPayoutLinksPayoutLinkIdCancelRoute, postPayoutLinksPayoutLinkIdCancelRouteHandler)
  .openapi(postSandboxTransactionsIdActionRoute, postSandboxTransactionsIdActionRouteHandler)
  .openapi(postSandboxTopupRoute, postSandboxTopupRouteHandler)
  .openapi(postTaxRatesRoute, postTaxRatesRouteHandler)
  .openapi(getTaxRatesRoute, getTaxRatesRouteHandler)
  .openapi(getTaxRatesTaxRateIdRoute, getTaxRatesTaxRateIdRouteHandler)
  .openapi(patchTaxRatesTaxRateIdRoute, patchTaxRatesTaxRateIdRouteHandler)
  .openapi(deleteTaxRatesTaxRateIdRoute, deleteTaxRatesTaxRateIdRouteHandler)
  .openapi(getTeamMembersRoute, getTeamMembersRouteHandler)
  .openapi(postTeamMembersRoute, postTeamMembersRouteHandler)
  .openapi(getTeamMembersTeamMemberIdRoute, getTeamMembersTeamMemberIdRouteHandler)
  .openapi(deleteTeamMembersTeamMemberIdRoute, deleteTeamMembersTeamMemberIdRouteHandler)
  .openapi(
    putTeamMembersTeamMemberIdDepartmentRoute,
    putTeamMembersTeamMemberIdDepartmentRouteHandler,
  )
  .openapi(
    deleteTeamMembersTeamMemberIdDepartmentRoute,
    deleteTeamMembersTeamMemberIdDepartmentRouteHandler,
  )
  .openapi(putTeamMembersTeamMemberIdManagerRoute, putTeamMembersTeamMemberIdManagerRouteHandler)
  .openapi(
    deleteTeamMembersTeamMemberIdManagerRoute,
    deleteTeamMembersTeamMemberIdManagerRouteHandler,
  )
  .openapi(putTeamMembersTeamMemberIdRoleRoute, putTeamMembersTeamMemberIdRoleRouteHandler)
  .openapi(postTeamMembersTeamMemberIdSuspendRoute, postTeamMembersTeamMemberIdSuspendRouteHandler)
  .openapi(
    postTeamMembersTeamMemberIdUnsuspendRoute,
    postTeamMembersTeamMemberIdUnsuspendRouteHandler,
  )
  .openapi(getRolesRoute, getRolesRouteHandler)
  .openapi(postDepartmentsRoute, postDepartmentsRouteHandler)
  .openapi(getDepartmentsRoute, getDepartmentsRouteHandler)
  .openapi(getDepartmentsDepartmentIdRoute, getDepartmentsDepartmentIdRouteHandler)
  .openapi(patchDepartmentsDepartmentIdRoute, patchDepartmentsDepartmentIdRouteHandler)
  .openapi(deleteDepartmentsDepartmentIdRoute, deleteDepartmentsDepartmentIdRouteHandler)
  .openapi(getTransactionsRoute, getTransactionsRouteHandler)
  .openapi(getTransactionIdRoute, getTransactionIdRouteHandler)
  .openapi(postPayRoute, postPayRouteHandler)
  .openapi(postPayIndicativeQuoteRoute, postPayIndicativeQuoteRouteHandler)
  .openapi(postPayFieldsRoute, postPayFieldsRouteHandler)
  .openapi(postTransferRoute, postTransferRouteHandler)
  .openapi(getTransferReasonsRoute, getTransferReasonsRouteHandler)
  .openapi(getWebhookRoute, getWebhookRouteHandler)
  .openapi(postWebhookRoute, postWebhookRouteHandler)
  .openapi(deleteWebhookRoute, deleteWebhookRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(getWebhooksWebhookIdRoute, getWebhooksWebhookIdRouteHandler)
  .openapi(patchWebhooksWebhookIdRoute, patchWebhooksWebhookIdRouteHandler)
  .openapi(deleteWebhooksWebhookIdRoute, deleteWebhooksWebhookIdRouteHandler)
  .openapi(
    postWebhooksWebhookIdRotateSigningSecretRoute,
    postWebhooksWebhookIdRotateSigningSecretRouteHandler,
  )
  .openapi(getWebhooksWebhookIdFailedEventsRoute, getWebhooksWebhookIdFailedEventsRouteHandler)

export default app
