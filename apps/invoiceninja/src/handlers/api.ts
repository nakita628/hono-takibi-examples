import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV1BankIntegrationsIdRoute,
  deleteApiV1BankTransactionRulesIdRoute,
  deleteApiV1BankTransactionsIdRoute,
  deleteApiV1ClientGatewayTokensIdRoute,
  deleteApiV1ClientsIdRoute,
  deleteApiV1CompaniesIdRoute,
  deleteApiV1CompanyGatewaysIdRoute,
  deleteApiV1CreditsIdRoute,
  deleteApiV1DesignsIdRoute,
  deleteApiV1ExpenseCategoriesIdRoute,
  deleteApiV1ExpensesIdRoute,
  deleteApiV1GroupSettingsIdRoute,
  deleteApiV1InvoicesIdRoute,
  deleteApiV1LocationsIdRoute,
  deleteApiV1PaymentsIdRoute,
  deleteApiV1PaymentTermsIdRoute,
  deleteApiV1ProductsIdRoute,
  deleteApiV1ProjectsIdRoute,
  deleteApiV1PurchaseOrderIdRoute,
  deleteApiV1QuotesIdRoute,
  deleteApiV1RecurringExpensesIdRoute,
  deleteApiV1RecurringInvoicesIdRoute,
  deleteApiV1RecurringQuotesIdRoute,
  deleteApiV1SettingsPasskeysPasskeyRoute,
  deleteApiV1SubscriptionsIdRoute,
  deleteApiV1TagsIdRoute,
  deleteApiV1TaskSchedulersIdRoute,
  deleteApiV1TasksIdRoute,
  deleteApiV1TaskStatusesIdRoute,
  deleteApiV1TaxRatesIdRoute,
  deleteApiV1TokensIdRoute,
  deleteApiV1UsersIdRoute,
  deleteApiV1UsersUserDetachFromCompanyRoute,
  deleteApiV1VendorsIdRoute,
  deleteApiV1WebhooksIdRoute,
  getApiV1ActivitiesDownloadEntityActivityIdRoute,
  getApiV1ActivitiesRoute,
  getApiV1BankIntegrationsCreateRoute,
  getApiV1BankIntegrationsIdEditRoute,
  getApiV1BankIntegrationsIdRoute,
  getApiV1BankIntegrationsRoute,
  getApiV1BankTransactionRulesCreateRoute,
  getApiV1BankTransactionRulesIdEditRoute,
  getApiV1BankTransactionRulesIdRoute,
  getApiV1BankTransactionRulesRoute,
  getApiV1BankTransactionsCreateRoute,
  getApiV1BankTransactionsIdEditRoute,
  getApiV1BankTransactionsIdRoute,
  getApiV1BankTransactionsRoute,
  getApiV1ClaimLicenseRoute,
  getApiV1ClientGatewayTokensCreateRoute,
  getApiV1ClientGatewayTokensIdEditRoute,
  getApiV1ClientGatewayTokensIdRoute,
  getApiV1ClientGatewayTokensRoute,
  getApiV1ClientsCreateRoute,
  getApiV1ClientsIdEditRoute,
  getApiV1ClientsIdRoute,
  getApiV1ClientsRoute,
  getApiV1CompaniesCreateRoute,
  getApiV1CompaniesIdEditRoute,
  getApiV1CompaniesIdRoute,
  getApiV1CompaniesRoute,
  getApiV1CompanyGatewaysCreateRoute,
  getApiV1CompanyGatewaysIdEditRoute,
  getApiV1CompanyGatewaysIdRoute,
  getApiV1CompanyGatewaysRoute,
  getApiV1CompanyLedgerRoute,
  getApiV1CreditInvitationKeyDownloadRoute,
  getApiV1CreditsCreateRoute,
  getApiV1CreditsIdEditRoute,
  getApiV1CreditsIdRoute,
  getApiV1CreditsRoute,
  getApiV1DesignsCreateRoute,
  getApiV1DesignsIdEditRoute,
  getApiV1DesignsIdRoute,
  getApiV1DesignsRoute,
  getApiV1DocumentsRoute,
  getApiV1ExpenseCategoriesCreateRoute,
  getApiV1ExpenseCategoriesIdEditRoute,
  getApiV1ExpenseCategoriesIdRoute,
  getApiV1ExpenseCategoriesRoute,
  getApiV1ExpensesCreateRoute,
  getApiV1ExpensesIdEditRoute,
  getApiV1ExpensesIdRoute,
  getApiV1ExpensesRoute,
  getApiV1GroupSettingsCreateRoute,
  getApiV1GroupSettingsIdEditRoute,
  getApiV1GroupSettingsIdRoute,
  getApiV1GroupSettingsRoute,
  getApiV1HealthCheckRoute,
  getApiV1InvoiceInvitationKeyDownloadRoute,
  getApiV1InvoicesCreateRoute,
  getApiV1InvoicesIdActionRoute,
  getApiV1InvoicesIdDeliveryNoteRoute,
  getApiV1InvoicesIdEditRoute,
  getApiV1InvoicesIdRoute,
  getApiV1InvoicesRoute,
  getApiV1LastErrorRoute,
  getApiV1LocationsCreateRoute,
  getApiV1LocationsIdRoute,
  getApiV1LocationsRoute,
  getApiV1PaymentsCreateRoute,
  getApiV1PaymentsIdActionRoute,
  getApiV1PaymentsIdEditRoute,
  getApiV1PaymentsIdRoute,
  getApiV1PaymentsRoute,
  getApiV1PaymentTermsCreateRoute,
  getApiV1PaymentTermsIdEditRoute,
  getApiV1PaymentTermsIdRoute,
  getApiV1PaymentTermsRoute,
  getApiV1PingRoute,
  getApiV1ProductsCreateRoute,
  getApiV1ProductsIdEditRoute,
  getApiV1ProductsIdRoute,
  getApiV1ProductsRoute,
  getApiV1ProjectsCreateRoute,
  getApiV1ProjectsIdEditRoute,
  getApiV1ProjectsIdRoute,
  getApiV1ProjectsRoute,
  getApiV1PurchaseOrderInvitationKeyDownloadRoute,
  getApiV1PurchaseOrdersCreateRoute,
  getApiV1PurchaseOrdersIdActionRoute,
  getApiV1PurchaseOrdersIdEditRoute,
  getApiV1PurchaseOrdersIdRoute,
  getApiV1PurchaseOrdersRoute,
  getApiV1QuoteInvitationKeyDownloadRoute,
  getApiV1QuotesCreateRoute,
  getApiV1QuotesIdActionRoute,
  getApiV1QuotesIdEditRoute,
  getApiV1QuotesIdRoute,
  getApiV1QuotesRoute,
  getApiV1RecurringExpensesCreateRoute,
  getApiV1RecurringExpensesIdEditRoute,
  getApiV1RecurringExpensesIdRoute,
  getApiV1RecurringExpensesRoute,
  getApiV1RecurringInvoiceInvitationKeyDownloadRoute,
  getApiV1RecurringInvoicesCreateRoute,
  getApiV1RecurringInvoicesIdActionRoute,
  getApiV1RecurringInvoicesIdEditRoute,
  getApiV1RecurringInvoicesIdRoute,
  getApiV1RecurringInvoicesRoute,
  getApiV1RecurringQuotesCreateRoute,
  getApiV1RecurringQuotesIdActionRoute,
  getApiV1RecurringQuotesIdEditRoute,
  getApiV1RecurringQuotesIdRoute,
  getApiV1RecurringQuotesRoute,
  getApiV1SchedulerRoute,
  getApiV1SettingsPasskeysRoute,
  getApiV1StaticsRoute,
  getApiV1SubscriptionsCreateRoute,
  getApiV1SubscriptionsIdEditRoute,
  getApiV1SubscriptionsIdRoute,
  getApiV1SubscriptionsRoute,
  getApiV1SystemLogsIdRoute,
  getApiV1SystemLogsRoute,
  getApiV1TagsCreateRoute,
  getApiV1TagsIdEditRoute,
  getApiV1TagsIdRoute,
  getApiV1TagsRoute,
  getApiV1TaskSchedulersCreateRoute,
  getApiV1TaskSchedulersIdRoute,
  getApiV1TaskSchedulersRoute,
  getApiV1TasksCreateRoute,
  getApiV1TasksIdEditRoute,
  getApiV1TasksIdRoute,
  getApiV1TasksRoute,
  getApiV1TaskStatusesCreateRoute,
  getApiV1TaskStatusesIdEditRoute,
  getApiV1TaskStatusesIdRoute,
  getApiV1TaskStatusesRoute,
  getApiV1TaxRatesCreateRoute,
  getApiV1TaxRatesIdEditRoute,
  getApiV1TaxRatesIdRoute,
  getApiV1TaxRatesRoute,
  getApiV1TokensCreateRoute,
  getApiV1TokensIdEditRoute,
  getApiV1TokensIdRoute,
  getApiV1TokensRoute,
  getApiV1UsersCreateRoute,
  getApiV1UsersIdEditRoute,
  getApiV1UsersIdRoute,
  getApiV1UsersRoute,
  getApiV1VendorsCreateRoute,
  getApiV1VendorsIdEditRoute,
  getApiV1VendorsIdRoute,
  getApiV1VendorsRoute,
  getApiV1WebcronRoute,
  getApiV1WebhooksCreateRoute,
  getApiV1WebhooksIdEditRoute,
  getApiV1WebhooksIdRoute,
  getApiV1WebhooksRoute,
  postApiV1ActivitiesEntityRoute,
  postApiV1ActivitiesNotesRoute,
  postApiV1AppleConfirmPurchaseRoute,
  postApiV1AppleProcessWebhookRoute,
  postApiV1BankIntegrationsBulkRoute,
  postApiV1BankIntegrationsGetTransactionsAccountIdRoute,
  postApiV1BankIntegrationsRefreshAccountsRoute,
  postApiV1BankIntegrationsRemoveAccountAccountIdRoute,
  postApiV1BankIntegrationsRoute,
  postApiV1BankTransactionRulesBulkRoute,
  postApiV1BankTransactionRulesRoute,
  postApiV1BankTransactionsBulkRoute,
  postApiV1BankTransactionsMatchRoute,
  postApiV1BankTransactionsRoute,
  postApiV1ChartsCalculatedFieldsRoute,
  postApiV1ChartsChartSummaryV2Route,
  postApiV1ChartsTotalsRoute,
  postApiV1ChartsTotalsV2Route,
  postApiV1ClientGatewayTokensRoute,
  postApiV1ClientsBulkRoute,
  postApiV1ClientsClientUpdateTaxDataRoute,
  postApiV1ClientsIdMergeableClientHashedIdMergeRoute,
  postApiV1ClientsIdPurgeRoute,
  postApiV1ClientsIdUploadRoute,
  postApiV1ClientsRoute,
  postApiV1ClientStatementRoute,
  postApiV1CompaniesCompanyDefaultRoute,
  postApiV1CompaniesCurrentRoute,
  postApiV1CompaniesIdUploadRoute,
  postApiV1CompaniesRoute,
  postApiV1CompanyGatewaysBulkRoute,
  postApiV1CompanyGatewaysRoute,
  postApiV1CompanyUsersRoute,
  postApiV1ConnectedAccountRoute,
  postApiV1CreditsBulkRoute,
  postApiV1CreditsIdUploadRoute,
  postApiV1CreditsRoute,
  postApiV1DesignsBulkRoute,
  postApiV1DesignsRoute,
  postApiV1EmailsRoute,
  postApiV1ExpenseCategoriesBulkRoute,
  postApiV1ExpenseCategoriesRoute,
  postApiV1ExpensesBulkRoute,
  postApiV1ExpensesIdUploadRoute,
  postApiV1ExpensesRoute,
  postApiV1ExportRoute,
  postApiV1ExportsPreviewHashRoute,
  postApiV1GroupSettingsBulkRoute,
  postApiV1GroupSettingsIdUploadRoute,
  postApiV1GroupSettingsRoute,
  postApiV1ImportJsonRoute,
  postApiV1ImportRoute,
  postApiV1InvoicesBulkRoute,
  postApiV1InvoicesIdUploadRoute,
  postApiV1InvoicesRoute,
  postApiV1LocationsBulkRoute,
  postApiV1LocationsRoute,
  postApiV1LoginRoute,
  postApiV1LogoutRoute,
  postApiV1MigrationPurgeCompanyRoute,
  postApiV1MigrationPurgeSaveSettingsCompanyRoute,
  postApiV1MigrationStartRoute,
  postApiV1OneTimeTokenRoute,
  postApiV1PasskeysLoginOptionsRoute,
  postApiV1PaymentsBulkRoute,
  postApiV1PaymentsIdUploadRoute,
  postApiV1PaymentsRefundRoute,
  postApiV1PaymentsRoute,
  postApiV1PaymentTermsBulkRoute,
  postApiV1PaymentTermsRoute,
  postApiV1PostmarkWebhookRoute,
  postApiV1PreimportRoute,
  postApiV1PreviewPurchaseOrderRoute,
  postApiV1PreviewRoute,
  postApiV1ProductsBulkRoute,
  postApiV1ProductsIdUploadRoute,
  postApiV1ProductsRoute,
  postApiV1ProjectsBulkRoute,
  postApiV1ProjectsIdUploadRoute,
  postApiV1ProjectsRoute,
  postApiV1PurchaseOrdersBulkRoute,
  postApiV1PurchaseOrdersIdUploadRoute,
  postApiV1PurchaseOrdersRoute,
  postApiV1QuotesBulkRoute,
  postApiV1QuotesIdUploadRoute,
  postApiV1QuotesRoute,
  postApiV1ReactivateEmailBounceIdRoute,
  postApiV1RecurringExpensesBulkRoute,
  postApiV1RecurringExpensesIdUploadRoute,
  postApiV1RecurringExpensesRoute,
  postApiV1RecurringInvoicesBulkRoute,
  postApiV1RecurringInvoicesIdUploadRoute,
  postApiV1RecurringInvoicesRoute,
  postApiV1RecurringQuotesBulkRoute,
  postApiV1RecurringQuotesRoute,
  postApiV1RefreshRoute,
  postApiV1ReportsActivitiesRoute,
  postApiV1ReportsArDetailReportRoute,
  postApiV1ReportsArSummaryReportRoute,
  postApiV1ReportsClientBalanceReportRoute,
  postApiV1ReportsClientContactsRoute,
  postApiV1ReportsClientSalesReportRoute,
  postApiV1ReportsClientsRoute,
  postApiV1ReportsContactsRoute,
  postApiV1ReportsCreditsRoute,
  postApiV1ReportsDocumentsRoute,
  postApiV1ReportsExpensesRoute,
  postApiV1ReportsInvoiceItemsRoute,
  postApiV1ReportsInvoicesRoute,
  postApiV1ReportsPaymentsRoute,
  postApiV1ReportsPreviewHashRoute,
  postApiV1ReportsProductSalesRoute,
  postApiV1ReportsProductsRoute,
  postApiV1ReportsProfitlossRoute,
  postApiV1ReportsProjectsRoute,
  postApiV1ReportsQuoteItemsRoute,
  postApiV1ReportsQuotesRoute,
  postApiV1ReportsRecurringInvoicesRoute,
  postApiV1ReportsTasksRoute,
  postApiV1ReportsTaxPeriodReportRoute,
  postApiV1ReportsTaxSummaryReportRoute,
  postApiV1ReportsUserSalesReportRoute,
  postApiV1SearchRoute,
  postApiV1SelfUpdateCheckVersionRoute,
  postApiV1SelfUpdateRoute,
  postApiV1SettingsPasskeysOptionsRoute,
  postApiV1SettingsPasskeysRoute,
  postApiV1SubscriptionsBulkRoute,
  postApiV1SubscriptionsRoute,
  postApiV1SupportMessagesSendRoute,
  postApiV1TagsBulkRoute,
  postApiV1TagsRoute,
  postApiV1TasksBulkRoute,
  postApiV1TaskSchedulersBulkRoute,
  postApiV1TaskSchedulersRoute,
  postApiV1TasksIdUploadRoute,
  postApiV1TasksRoute,
  postApiV1TasksSortRoute,
  postApiV1TaskStatusesBulkRoute,
  postApiV1TaskStatusesRoute,
  postApiV1TaxRatesBulkRoute,
  postApiV1TemplatesPreviewHashRoute,
  postApiV1TemplatesRoute,
  postApiV1TokensBulkRoute,
  postApiV1TokensRoute,
  postApiV1UsersBulkRoute,
  postApiV1UsersRoute,
  postApiV1UsersUserInviteRoute,
  postApiV1UsersUserReconfirmRoute,
  postApiV1VendorsBulkRoute,
  postApiV1VendorsIdUploadRoute,
  postApiV1VendorsRoute,
  postApiV1WebhooksBulkRoute,
  postApiV1WebhooksRoute,
  postApiV1YodleeRefreshRoute,
  putApiV1BankIntegrationsIdRoute,
  putApiV1BankTransactionRulesIdRoute,
  putApiV1BankTransactionsIdRoute,
  putApiV1ClientGatewayTokensIdRoute,
  putApiV1ClientsIdRoute,
  putApiV1CompaniesIdRoute,
  putApiV1CompanyGatewaysIdRoute,
  putApiV1CreditsIdRoute,
  putApiV1DesignsIdRoute,
  putApiV1ExpenseCategoriesIdRoute,
  putApiV1ExpensesIdRoute,
  putApiV1GroupSettingsIdRoute,
  putApiV1InvoicesIdRoute,
  putApiV1LocationsIdRoute,
  putApiV1PaymentsIdRoute,
  putApiV1PaymentTermsIdRoute,
  putApiV1ProductsIdRoute,
  putApiV1ProjectsIdRoute,
  putApiV1PurchaseOrderIdRoute,
  putApiV1QuotesIdRoute,
  putApiV1RecurringExpensesIdRoute,
  putApiV1RecurringInvoicesIdRoute,
  putApiV1RecurringQuotesIdRoute,
  putApiV1SubscriptionsIdRoute,
  putApiV1TagsIdRoute,
  putApiV1TaskSchedulersIdRoute,
  putApiV1TasksIdRoute,
  putApiV1TaskStatusesIdRoute,
  putApiV1TaxRatesIdRoute,
  putApiV1TokensIdRoute,
  putApiV1UsersIdRoute,
  putApiV1VendorsIdRoute,
  putApiV1WebhooksIdRoute,
} from '../routes'

export const postApiV1LoginRouteHandler: RouteHandler<typeof postApiV1LoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ActivitiesRouteHandler: RouteHandler<typeof getApiV1ActivitiesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ActivitiesDownloadEntityActivityIdRouteHandler: RouteHandler<
  typeof getApiV1ActivitiesDownloadEntityActivityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ActivitiesEntityRouteHandler: RouteHandler<
  typeof postApiV1ActivitiesEntityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ActivitiesNotesRouteHandler: RouteHandler<
  typeof postApiV1ActivitiesNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PasskeysLoginOptionsRouteHandler: RouteHandler<
  typeof postApiV1PasskeysLoginOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SettingsPasskeysRouteHandler: RouteHandler<
  typeof getApiV1SettingsPasskeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SettingsPasskeysRouteHandler: RouteHandler<
  typeof postApiV1SettingsPasskeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SettingsPasskeysOptionsRouteHandler: RouteHandler<
  typeof postApiV1SettingsPasskeysOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SettingsPasskeysPasskeyRouteHandler: RouteHandler<
  typeof deleteApiV1SettingsPasskeysPasskeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RefreshRouteHandler: RouteHandler<typeof postApiV1RefreshRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1YodleeRefreshRouteHandler: RouteHandler<
  typeof postApiV1YodleeRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankIntegrationsRouteHandler: RouteHandler<
  typeof getApiV1BankIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BankIntegrationsRouteHandler: RouteHandler<
  typeof postApiV1BankIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankIntegrationsIdRouteHandler: RouteHandler<
  typeof getApiV1BankIntegrationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1BankIntegrationsIdRouteHandler: RouteHandler<
  typeof putApiV1BankIntegrationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1BankIntegrationsIdRouteHandler: RouteHandler<
  typeof deleteApiV1BankIntegrationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankIntegrationsIdEditRouteHandler: RouteHandler<
  typeof getApiV1BankIntegrationsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankIntegrationsCreateRouteHandler: RouteHandler<
  typeof getApiV1BankIntegrationsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BankIntegrationsBulkRouteHandler: RouteHandler<
  typeof postApiV1BankIntegrationsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BankIntegrationsRefreshAccountsRouteHandler: RouteHandler<
  typeof postApiV1BankIntegrationsRefreshAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BankIntegrationsRemoveAccountAccountIdRouteHandler: RouteHandler<
  typeof postApiV1BankIntegrationsRemoveAccountAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BankIntegrationsGetTransactionsAccountIdRouteHandler: RouteHandler<
  typeof postApiV1BankIntegrationsGetTransactionsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankTransactionsRouteHandler: RouteHandler<
  typeof getApiV1BankTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BankTransactionsRouteHandler: RouteHandler<
  typeof postApiV1BankTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankTransactionsIdRouteHandler: RouteHandler<
  typeof getApiV1BankTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1BankTransactionsIdRouteHandler: RouteHandler<
  typeof putApiV1BankTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1BankTransactionsIdRouteHandler: RouteHandler<
  typeof deleteApiV1BankTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankTransactionsIdEditRouteHandler: RouteHandler<
  typeof getApiV1BankTransactionsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankTransactionsCreateRouteHandler: RouteHandler<
  typeof getApiV1BankTransactionsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BankTransactionsBulkRouteHandler: RouteHandler<
  typeof postApiV1BankTransactionsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BankTransactionsMatchRouteHandler: RouteHandler<
  typeof postApiV1BankTransactionsMatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankTransactionRulesRouteHandler: RouteHandler<
  typeof getApiV1BankTransactionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BankTransactionRulesRouteHandler: RouteHandler<
  typeof postApiV1BankTransactionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankTransactionRulesIdRouteHandler: RouteHandler<
  typeof getApiV1BankTransactionRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1BankTransactionRulesIdRouteHandler: RouteHandler<
  typeof putApiV1BankTransactionRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1BankTransactionRulesIdRouteHandler: RouteHandler<
  typeof deleteApiV1BankTransactionRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankTransactionRulesIdEditRouteHandler: RouteHandler<
  typeof getApiV1BankTransactionRulesIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BankTransactionRulesCreateRouteHandler: RouteHandler<
  typeof getApiV1BankTransactionRulesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BankTransactionRulesBulkRouteHandler: RouteHandler<
  typeof postApiV1BankTransactionRulesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartsTotalsRouteHandler: RouteHandler<
  typeof postApiV1ChartsTotalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartsTotalsV2RouteHandler: RouteHandler<
  typeof postApiV1ChartsTotalsV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartsChartSummaryV2RouteHandler: RouteHandler<
  typeof postApiV1ChartsChartSummaryV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartsCalculatedFieldsRouteHandler: RouteHandler<
  typeof postApiV1ChartsCalculatedFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ClientGatewayTokensRouteHandler: RouteHandler<
  typeof getApiV1ClientGatewayTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ClientGatewayTokensRouteHandler: RouteHandler<
  typeof postApiV1ClientGatewayTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ClientGatewayTokensIdRouteHandler: RouteHandler<
  typeof getApiV1ClientGatewayTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ClientGatewayTokensIdRouteHandler: RouteHandler<
  typeof putApiV1ClientGatewayTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ClientGatewayTokensIdRouteHandler: RouteHandler<
  typeof deleteApiV1ClientGatewayTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ClientGatewayTokensIdEditRouteHandler: RouteHandler<
  typeof getApiV1ClientGatewayTokensIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ClientGatewayTokensCreateRouteHandler: RouteHandler<
  typeof getApiV1ClientGatewayTokensCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CompaniesRouteHandler: RouteHandler<typeof getApiV1CompaniesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1CompaniesRouteHandler: RouteHandler<typeof postApiV1CompaniesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1CompaniesCreateRouteHandler: RouteHandler<
  typeof getApiV1CompaniesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CompaniesIdRouteHandler: RouteHandler<
  typeof getApiV1CompaniesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1CompaniesIdRouteHandler: RouteHandler<
  typeof putApiV1CompaniesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1CompaniesIdRouteHandler: RouteHandler<
  typeof deleteApiV1CompaniesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CompaniesIdEditRouteHandler: RouteHandler<
  typeof getApiV1CompaniesIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CompaniesIdUploadRouteHandler: RouteHandler<
  typeof postApiV1CompaniesIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CompaniesCompanyDefaultRouteHandler: RouteHandler<
  typeof postApiV1CompaniesCompanyDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CompaniesCurrentRouteHandler: RouteHandler<
  typeof postApiV1CompaniesCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CompanyGatewaysRouteHandler: RouteHandler<
  typeof getApiV1CompanyGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CompanyGatewaysRouteHandler: RouteHandler<
  typeof postApiV1CompanyGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CompanyGatewaysCreateRouteHandler: RouteHandler<
  typeof getApiV1CompanyGatewaysCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CompanyGatewaysIdRouteHandler: RouteHandler<
  typeof getApiV1CompanyGatewaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1CompanyGatewaysIdRouteHandler: RouteHandler<
  typeof putApiV1CompanyGatewaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1CompanyGatewaysIdRouteHandler: RouteHandler<
  typeof deleteApiV1CompanyGatewaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CompanyGatewaysIdEditRouteHandler: RouteHandler<
  typeof getApiV1CompanyGatewaysIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CompanyGatewaysBulkRouteHandler: RouteHandler<
  typeof postApiV1CompanyGatewaysBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CompanyLedgerRouteHandler: RouteHandler<
  typeof getApiV1CompanyLedgerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CompanyUsersRouteHandler: RouteHandler<
  typeof postApiV1CompanyUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ConnectedAccountRouteHandler: RouteHandler<
  typeof postApiV1ConnectedAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DesignsRouteHandler: RouteHandler<typeof getApiV1DesignsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DesignsRouteHandler: RouteHandler<typeof postApiV1DesignsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1DesignsIdRouteHandler: RouteHandler<typeof getApiV1DesignsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1DesignsIdRouteHandler: RouteHandler<typeof putApiV1DesignsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1DesignsIdRouteHandler: RouteHandler<
  typeof deleteApiV1DesignsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DesignsIdEditRouteHandler: RouteHandler<
  typeof getApiV1DesignsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DesignsCreateRouteHandler: RouteHandler<
  typeof getApiV1DesignsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DesignsBulkRouteHandler: RouteHandler<
  typeof postApiV1DesignsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DocumentsRouteHandler: RouteHandler<typeof getApiV1DocumentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1EmailsRouteHandler: RouteHandler<typeof postApiV1EmailsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ExpenseCategoriesRouteHandler: RouteHandler<
  typeof getApiV1ExpenseCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ExpenseCategoriesRouteHandler: RouteHandler<
  typeof postApiV1ExpenseCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ExpenseCategoriesCreateRouteHandler: RouteHandler<
  typeof getApiV1ExpenseCategoriesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ExpenseCategoriesIdRouteHandler: RouteHandler<
  typeof getApiV1ExpenseCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ExpenseCategoriesIdRouteHandler: RouteHandler<
  typeof putApiV1ExpenseCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ExpenseCategoriesIdRouteHandler: RouteHandler<
  typeof deleteApiV1ExpenseCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ExpenseCategoriesIdEditRouteHandler: RouteHandler<
  typeof getApiV1ExpenseCategoriesIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ExpenseCategoriesBulkRouteHandler: RouteHandler<
  typeof postApiV1ExpenseCategoriesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ExpensesRouteHandler: RouteHandler<typeof getApiV1ExpensesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ExpensesRouteHandler: RouteHandler<typeof postApiV1ExpensesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ExpensesIdRouteHandler: RouteHandler<typeof getApiV1ExpensesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1ExpensesIdRouteHandler: RouteHandler<typeof putApiV1ExpensesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ExpensesIdRouteHandler: RouteHandler<
  typeof deleteApiV1ExpensesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ExpensesIdEditRouteHandler: RouteHandler<
  typeof getApiV1ExpensesIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ExpensesCreateRouteHandler: RouteHandler<
  typeof getApiV1ExpensesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ExpensesBulkRouteHandler: RouteHandler<
  typeof postApiV1ExpensesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ExpensesIdUploadRouteHandler: RouteHandler<
  typeof postApiV1ExpensesIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ExportRouteHandler: RouteHandler<typeof postApiV1ExportRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupSettingsRouteHandler: RouteHandler<
  typeof getApiV1GroupSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupSettingsRouteHandler: RouteHandler<
  typeof postApiV1GroupSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupSettingsCreateRouteHandler: RouteHandler<
  typeof getApiV1GroupSettingsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupSettingsIdRouteHandler: RouteHandler<
  typeof getApiV1GroupSettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1GroupSettingsIdRouteHandler: RouteHandler<
  typeof putApiV1GroupSettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1GroupSettingsIdRouteHandler: RouteHandler<
  typeof deleteApiV1GroupSettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupSettingsIdEditRouteHandler: RouteHandler<
  typeof getApiV1GroupSettingsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupSettingsBulkRouteHandler: RouteHandler<
  typeof postApiV1GroupSettingsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupSettingsIdUploadRouteHandler: RouteHandler<
  typeof postApiV1GroupSettingsIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PreimportRouteHandler: RouteHandler<typeof postApiV1PreimportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ImportRouteHandler: RouteHandler<typeof postApiV1ImportRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ImportJsonRouteHandler: RouteHandler<
  typeof postApiV1ImportJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AppleConfirmPurchaseRouteHandler: RouteHandler<
  typeof postApiV1AppleConfirmPurchaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AppleProcessWebhookRouteHandler: RouteHandler<
  typeof postApiV1AppleProcessWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ClaimLicenseRouteHandler: RouteHandler<
  typeof getApiV1ClaimLicenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LogoutRouteHandler: RouteHandler<typeof postApiV1LogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MigrationPurgeCompanyRouteHandler: RouteHandler<
  typeof postApiV1MigrationPurgeCompanyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MigrationPurgeSaveSettingsCompanyRouteHandler: RouteHandler<
  typeof postApiV1MigrationPurgeSaveSettingsCompanyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MigrationStartRouteHandler: RouteHandler<
  typeof postApiV1MigrationStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OneTimeTokenRouteHandler: RouteHandler<
  typeof postApiV1OneTimeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PaymentTermsRouteHandler: RouteHandler<
  typeof getApiV1PaymentTermsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PaymentTermsRouteHandler: RouteHandler<
  typeof postApiV1PaymentTermsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PaymentTermsCreateRouteHandler: RouteHandler<
  typeof getApiV1PaymentTermsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PaymentTermsIdRouteHandler: RouteHandler<
  typeof getApiV1PaymentTermsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1PaymentTermsIdRouteHandler: RouteHandler<
  typeof putApiV1PaymentTermsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1PaymentTermsIdRouteHandler: RouteHandler<
  typeof deleteApiV1PaymentTermsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PaymentTermsIdEditRouteHandler: RouteHandler<
  typeof getApiV1PaymentTermsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PaymentTermsBulkRouteHandler: RouteHandler<
  typeof postApiV1PaymentTermsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PingRouteHandler: RouteHandler<typeof getApiV1PingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1HealthCheckRouteHandler: RouteHandler<
  typeof getApiV1HealthCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LastErrorRouteHandler: RouteHandler<typeof getApiV1LastErrorRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1PostmarkWebhookRouteHandler: RouteHandler<
  typeof postApiV1PostmarkWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PreviewRouteHandler: RouteHandler<typeof postApiV1PreviewRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1PreviewPurchaseOrderRouteHandler: RouteHandler<
  typeof postApiV1PreviewPurchaseOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringExpensesRouteHandler: RouteHandler<
  typeof getApiV1RecurringExpensesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RecurringExpensesRouteHandler: RouteHandler<
  typeof postApiV1RecurringExpensesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringExpensesIdRouteHandler: RouteHandler<
  typeof getApiV1RecurringExpensesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1RecurringExpensesIdRouteHandler: RouteHandler<
  typeof putApiV1RecurringExpensesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1RecurringExpensesIdRouteHandler: RouteHandler<
  typeof deleteApiV1RecurringExpensesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringExpensesIdEditRouteHandler: RouteHandler<
  typeof getApiV1RecurringExpensesIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringExpensesCreateRouteHandler: RouteHandler<
  typeof getApiV1RecurringExpensesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RecurringExpensesBulkRouteHandler: RouteHandler<
  typeof postApiV1RecurringExpensesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RecurringExpensesIdUploadRouteHandler: RouteHandler<
  typeof postApiV1RecurringExpensesIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringQuotesRouteHandler: RouteHandler<
  typeof getApiV1RecurringQuotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RecurringQuotesRouteHandler: RouteHandler<
  typeof postApiV1RecurringQuotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringQuotesCreateRouteHandler: RouteHandler<
  typeof getApiV1RecurringQuotesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringQuotesIdRouteHandler: RouteHandler<
  typeof getApiV1RecurringQuotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1RecurringQuotesIdRouteHandler: RouteHandler<
  typeof putApiV1RecurringQuotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1RecurringQuotesIdRouteHandler: RouteHandler<
  typeof deleteApiV1RecurringQuotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringQuotesIdEditRouteHandler: RouteHandler<
  typeof getApiV1RecurringQuotesIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RecurringQuotesBulkRouteHandler: RouteHandler<
  typeof postApiV1RecurringQuotesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringQuotesIdActionRouteHandler: RouteHandler<
  typeof getApiV1RecurringQuotesIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsContactsRouteHandler: RouteHandler<
  typeof postApiV1ReportsContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsClientsRouteHandler: RouteHandler<
  typeof postApiV1ReportsClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsCreditsRouteHandler: RouteHandler<
  typeof postApiV1ReportsCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsDocumentsRouteHandler: RouteHandler<
  typeof postApiV1ReportsDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsExpensesRouteHandler: RouteHandler<
  typeof postApiV1ReportsExpensesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsInvoiceItemsRouteHandler: RouteHandler<
  typeof postApiV1ReportsInvoiceItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsInvoicesRouteHandler: RouteHandler<
  typeof postApiV1ReportsInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsPaymentsRouteHandler: RouteHandler<
  typeof postApiV1ReportsPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsProductsRouteHandler: RouteHandler<
  typeof postApiV1ReportsProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsProductSalesRouteHandler: RouteHandler<
  typeof postApiV1ReportsProductSalesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsProfitlossRouteHandler: RouteHandler<
  typeof postApiV1ReportsProfitlossRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsQuoteItemsRouteHandler: RouteHandler<
  typeof postApiV1ReportsQuoteItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsQuotesRouteHandler: RouteHandler<
  typeof postApiV1ReportsQuotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsRecurringInvoicesRouteHandler: RouteHandler<
  typeof postApiV1ReportsRecurringInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsTasksRouteHandler: RouteHandler<
  typeof postApiV1ReportsTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsActivitiesRouteHandler: RouteHandler<
  typeof postApiV1ReportsActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsClientContactsRouteHandler: RouteHandler<
  typeof postApiV1ReportsClientContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsArDetailReportRouteHandler: RouteHandler<
  typeof postApiV1ReportsArDetailReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsArSummaryReportRouteHandler: RouteHandler<
  typeof postApiV1ReportsArSummaryReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsClientBalanceReportRouteHandler: RouteHandler<
  typeof postApiV1ReportsClientBalanceReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsClientSalesReportRouteHandler: RouteHandler<
  typeof postApiV1ReportsClientSalesReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsTaxSummaryReportRouteHandler: RouteHandler<
  typeof postApiV1ReportsTaxSummaryReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsTaxPeriodReportRouteHandler: RouteHandler<
  typeof postApiV1ReportsTaxPeriodReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsUserSalesReportRouteHandler: RouteHandler<
  typeof postApiV1ReportsUserSalesReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsProjectsRouteHandler: RouteHandler<
  typeof postApiV1ReportsProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportsPreviewHashRouteHandler: RouteHandler<
  typeof postApiV1ReportsPreviewHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ExportsPreviewHashRouteHandler: RouteHandler<
  typeof postApiV1ExportsPreviewHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SelfUpdateRouteHandler: RouteHandler<
  typeof postApiV1SelfUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SelfUpdateCheckVersionRouteHandler: RouteHandler<
  typeof postApiV1SelfUpdateCheckVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1StaticsRouteHandler: RouteHandler<typeof getApiV1StaticsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubscriptionsRouteHandler: RouteHandler<
  typeof getApiV1SubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubscriptionsCreateRouteHandler: RouteHandler<
  typeof getApiV1SubscriptionsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubscriptionsIdRouteHandler: RouteHandler<
  typeof getApiV1SubscriptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SubscriptionsIdRouteHandler: RouteHandler<
  typeof putApiV1SubscriptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SubscriptionsIdRouteHandler: RouteHandler<
  typeof deleteApiV1SubscriptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubscriptionsIdEditRouteHandler: RouteHandler<
  typeof getApiV1SubscriptionsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsBulkRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SchedulerRouteHandler: RouteHandler<typeof getApiV1SchedulerRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1SupportMessagesSendRouteHandler: RouteHandler<
  typeof postApiV1SupportMessagesSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SystemLogsRouteHandler: RouteHandler<typeof getApiV1SystemLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1SystemLogsIdRouteHandler: RouteHandler<
  typeof getApiV1SystemLogsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TaskSchedulersRouteHandler: RouteHandler<
  typeof getApiV1TaskSchedulersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TaskSchedulersRouteHandler: RouteHandler<
  typeof postApiV1TaskSchedulersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TaskSchedulersCreateRouteHandler: RouteHandler<
  typeof getApiV1TaskSchedulersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TaskSchedulersIdRouteHandler: RouteHandler<
  typeof getApiV1TaskSchedulersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1TaskSchedulersIdRouteHandler: RouteHandler<
  typeof putApiV1TaskSchedulersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TaskSchedulersIdRouteHandler: RouteHandler<
  typeof deleteApiV1TaskSchedulersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TaskSchedulersBulkRouteHandler: RouteHandler<
  typeof postApiV1TaskSchedulersBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TaskStatusesRouteHandler: RouteHandler<
  typeof getApiV1TaskStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TaskStatusesRouteHandler: RouteHandler<
  typeof postApiV1TaskStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TaskStatusesCreateRouteHandler: RouteHandler<
  typeof getApiV1TaskStatusesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TaskStatusesIdRouteHandler: RouteHandler<
  typeof getApiV1TaskStatusesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1TaskStatusesIdRouteHandler: RouteHandler<
  typeof putApiV1TaskStatusesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TaskStatusesIdRouteHandler: RouteHandler<
  typeof deleteApiV1TaskStatusesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TaskStatusesIdEditRouteHandler: RouteHandler<
  typeof getApiV1TaskStatusesIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TaskStatusesBulkRouteHandler: RouteHandler<
  typeof postApiV1TaskStatusesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TaxRatesRouteHandler: RouteHandler<typeof getApiV1TaxRatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1TaxRatesCreateRouteHandler: RouteHandler<
  typeof getApiV1TaxRatesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TaxRatesIdRouteHandler: RouteHandler<typeof getApiV1TaxRatesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1TaxRatesIdRouteHandler: RouteHandler<typeof putApiV1TaxRatesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TaxRatesIdRouteHandler: RouteHandler<
  typeof deleteApiV1TaxRatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TaxRatesIdEditRouteHandler: RouteHandler<
  typeof getApiV1TaxRatesIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TaxRatesBulkRouteHandler: RouteHandler<
  typeof postApiV1TaxRatesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TemplatesRouteHandler: RouteHandler<typeof postApiV1TemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1TemplatesPreviewHashRouteHandler: RouteHandler<
  typeof postApiV1TemplatesPreviewHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SearchRouteHandler: RouteHandler<typeof postApiV1SearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TokensRouteHandler: RouteHandler<typeof getApiV1TokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensRouteHandler: RouteHandler<typeof postApiV1TokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TokensIdRouteHandler: RouteHandler<typeof getApiV1TokensIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1TokensIdRouteHandler: RouteHandler<typeof putApiV1TokensIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TokensIdRouteHandler: RouteHandler<
  typeof deleteApiV1TokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TokensIdEditRouteHandler: RouteHandler<
  typeof getApiV1TokensIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TokensCreateRouteHandler: RouteHandler<
  typeof getApiV1TokensCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensBulkRouteHandler: RouteHandler<
  typeof postApiV1TokensBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersRouteHandler: RouteHandler<typeof getApiV1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRouteHandler: RouteHandler<typeof postApiV1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersCreateRouteHandler: RouteHandler<
  typeof getApiV1UsersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersIdRouteHandler: RouteHandler<typeof getApiV1UsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1UsersIdRouteHandler: RouteHandler<typeof putApiV1UsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersIdRouteHandler: RouteHandler<typeof deleteApiV1UsersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersIdEditRouteHandler: RouteHandler<
  typeof getApiV1UsersIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersBulkRouteHandler: RouteHandler<typeof postApiV1UsersBulkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersUserDetachFromCompanyRouteHandler: RouteHandler<
  typeof deleteApiV1UsersUserDetachFromCompanyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersUserInviteRouteHandler: RouteHandler<
  typeof postApiV1UsersUserInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersUserReconfirmRouteHandler: RouteHandler<
  typeof postApiV1UsersUserReconfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WebcronRouteHandler: RouteHandler<typeof getApiV1WebcronRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WebhooksRouteHandler: RouteHandler<typeof getApiV1WebhooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1WebhooksRouteHandler: RouteHandler<typeof postApiV1WebhooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1WebhooksIdRouteHandler: RouteHandler<typeof getApiV1WebhooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1WebhooksIdRouteHandler: RouteHandler<typeof putApiV1WebhooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1WebhooksIdRouteHandler: RouteHandler<
  typeof deleteApiV1WebhooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WebhooksIdEditRouteHandler: RouteHandler<
  typeof getApiV1WebhooksIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WebhooksCreateRouteHandler: RouteHandler<
  typeof getApiV1WebhooksCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1WebhooksBulkRouteHandler: RouteHandler<
  typeof postApiV1WebhooksBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CreditsRouteHandler: RouteHandler<typeof getApiV1CreditsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CreditsRouteHandler: RouteHandler<typeof postApiV1CreditsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1CreditsIdRouteHandler: RouteHandler<typeof getApiV1CreditsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1CreditsIdRouteHandler: RouteHandler<typeof putApiV1CreditsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1CreditsIdRouteHandler: RouteHandler<
  typeof deleteApiV1CreditsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CreditsIdEditRouteHandler: RouteHandler<
  typeof getApiV1CreditsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CreditsCreateRouteHandler: RouteHandler<
  typeof getApiV1CreditsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CreditsBulkRouteHandler: RouteHandler<
  typeof postApiV1CreditsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CreditInvitationKeyDownloadRouteHandler: RouteHandler<
  typeof getApiV1CreditInvitationKeyDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CreditsIdUploadRouteHandler: RouteHandler<
  typeof postApiV1CreditsIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TagsRouteHandler: RouteHandler<typeof getApiV1TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TagsRouteHandler: RouteHandler<typeof postApiV1TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TagsCreateRouteHandler: RouteHandler<typeof getApiV1TagsCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1TagsIdRouteHandler: RouteHandler<typeof getApiV1TagsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1TagsIdRouteHandler: RouteHandler<typeof putApiV1TagsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TagsIdRouteHandler: RouteHandler<typeof deleteApiV1TagsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1TagsIdEditRouteHandler: RouteHandler<typeof getApiV1TagsIdEditRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1TagsBulkRouteHandler: RouteHandler<typeof postApiV1TagsBulkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1LocationsRouteHandler: RouteHandler<typeof getApiV1LocationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1LocationsRouteHandler: RouteHandler<typeof postApiV1LocationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1LocationsIdRouteHandler: RouteHandler<
  typeof getApiV1LocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1LocationsIdRouteHandler: RouteHandler<
  typeof putApiV1LocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LocationsIdRouteHandler: RouteHandler<
  typeof deleteApiV1LocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LocationsCreateRouteHandler: RouteHandler<
  typeof getApiV1LocationsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LocationsBulkRouteHandler: RouteHandler<
  typeof postApiV1LocationsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringInvoicesRouteHandler: RouteHandler<
  typeof getApiV1RecurringInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RecurringInvoicesRouteHandler: RouteHandler<
  typeof postApiV1RecurringInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringInvoicesIdRouteHandler: RouteHandler<
  typeof getApiV1RecurringInvoicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1RecurringInvoicesIdRouteHandler: RouteHandler<
  typeof putApiV1RecurringInvoicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1RecurringInvoicesIdRouteHandler: RouteHandler<
  typeof deleteApiV1RecurringInvoicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringInvoicesIdEditRouteHandler: RouteHandler<
  typeof getApiV1RecurringInvoicesIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringInvoicesCreateRouteHandler: RouteHandler<
  typeof getApiV1RecurringInvoicesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RecurringInvoicesBulkRouteHandler: RouteHandler<
  typeof postApiV1RecurringInvoicesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringInvoicesIdActionRouteHandler: RouteHandler<
  typeof getApiV1RecurringInvoicesIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecurringInvoiceInvitationKeyDownloadRouteHandler: RouteHandler<
  typeof getApiV1RecurringInvoiceInvitationKeyDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RecurringInvoicesIdUploadRouteHandler: RouteHandler<
  typeof postApiV1RecurringInvoicesIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TasksRouteHandler: RouteHandler<typeof getApiV1TasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TasksRouteHandler: RouteHandler<typeof postApiV1TasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TasksIdRouteHandler: RouteHandler<typeof getApiV1TasksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1TasksIdRouteHandler: RouteHandler<typeof putApiV1TasksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TasksIdRouteHandler: RouteHandler<typeof deleteApiV1TasksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1TasksIdEditRouteHandler: RouteHandler<
  typeof getApiV1TasksIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TasksCreateRouteHandler: RouteHandler<
  typeof getApiV1TasksCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TasksBulkRouteHandler: RouteHandler<typeof postApiV1TasksBulkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1TasksIdUploadRouteHandler: RouteHandler<
  typeof postApiV1TasksIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TasksSortRouteHandler: RouteHandler<typeof postApiV1TasksSortRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1QuotesRouteHandler: RouteHandler<typeof getApiV1QuotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1QuotesRouteHandler: RouteHandler<typeof postApiV1QuotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1QuotesIdRouteHandler: RouteHandler<typeof getApiV1QuotesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1QuotesIdRouteHandler: RouteHandler<typeof putApiV1QuotesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1QuotesIdRouteHandler: RouteHandler<
  typeof deleteApiV1QuotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1QuotesIdEditRouteHandler: RouteHandler<
  typeof getApiV1QuotesIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1QuotesCreateRouteHandler: RouteHandler<
  typeof getApiV1QuotesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1QuotesBulkRouteHandler: RouteHandler<
  typeof postApiV1QuotesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1QuotesIdActionRouteHandler: RouteHandler<
  typeof getApiV1QuotesIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1QuoteInvitationKeyDownloadRouteHandler: RouteHandler<
  typeof getApiV1QuoteInvitationKeyDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1QuotesIdUploadRouteHandler: RouteHandler<
  typeof postApiV1QuotesIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InvoicesRouteHandler: RouteHandler<typeof getApiV1InvoicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1InvoicesRouteHandler: RouteHandler<typeof postApiV1InvoicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1InvoicesIdRouteHandler: RouteHandler<typeof getApiV1InvoicesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1InvoicesIdRouteHandler: RouteHandler<typeof putApiV1InvoicesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1InvoicesIdRouteHandler: RouteHandler<
  typeof deleteApiV1InvoicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InvoicesIdEditRouteHandler: RouteHandler<
  typeof getApiV1InvoicesIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InvoicesCreateRouteHandler: RouteHandler<
  typeof getApiV1InvoicesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1InvoicesBulkRouteHandler: RouteHandler<
  typeof postApiV1InvoicesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InvoicesIdActionRouteHandler: RouteHandler<
  typeof getApiV1InvoicesIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InvoiceInvitationKeyDownloadRouteHandler: RouteHandler<
  typeof getApiV1InvoiceInvitationKeyDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InvoicesIdDeliveryNoteRouteHandler: RouteHandler<
  typeof getApiV1InvoicesIdDeliveryNoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1InvoicesIdUploadRouteHandler: RouteHandler<
  typeof postApiV1InvoicesIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ProjectsRouteHandler: RouteHandler<typeof getApiV1ProjectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ProjectsRouteHandler: RouteHandler<typeof postApiV1ProjectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ProjectsIdRouteHandler: RouteHandler<typeof getApiV1ProjectsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1ProjectsIdRouteHandler: RouteHandler<typeof putApiV1ProjectsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ProjectsIdRouteHandler: RouteHandler<
  typeof deleteApiV1ProjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ProjectsIdEditRouteHandler: RouteHandler<
  typeof getApiV1ProjectsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ProjectsCreateRouteHandler: RouteHandler<
  typeof getApiV1ProjectsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ProjectsBulkRouteHandler: RouteHandler<
  typeof postApiV1ProjectsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ProjectsIdUploadRouteHandler: RouteHandler<
  typeof postApiV1ProjectsIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VendorsRouteHandler: RouteHandler<typeof getApiV1VendorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VendorsRouteHandler: RouteHandler<typeof postApiV1VendorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1VendorsIdRouteHandler: RouteHandler<typeof getApiV1VendorsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1VendorsIdRouteHandler: RouteHandler<typeof putApiV1VendorsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VendorsIdRouteHandler: RouteHandler<
  typeof deleteApiV1VendorsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VendorsIdEditRouteHandler: RouteHandler<
  typeof getApiV1VendorsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VendorsCreateRouteHandler: RouteHandler<
  typeof getApiV1VendorsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VendorsBulkRouteHandler: RouteHandler<
  typeof postApiV1VendorsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VendorsIdUploadRouteHandler: RouteHandler<
  typeof postApiV1VendorsIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PaymentsRouteHandler: RouteHandler<typeof getApiV1PaymentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1PaymentsRouteHandler: RouteHandler<typeof postApiV1PaymentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1PaymentsIdRouteHandler: RouteHandler<typeof getApiV1PaymentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1PaymentsIdRouteHandler: RouteHandler<typeof putApiV1PaymentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1PaymentsIdRouteHandler: RouteHandler<
  typeof deleteApiV1PaymentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PaymentsIdEditRouteHandler: RouteHandler<
  typeof getApiV1PaymentsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PaymentsCreateRouteHandler: RouteHandler<
  typeof getApiV1PaymentsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PaymentsRefundRouteHandler: RouteHandler<
  typeof postApiV1PaymentsRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PaymentsBulkRouteHandler: RouteHandler<
  typeof postApiV1PaymentsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PaymentsIdActionRouteHandler: RouteHandler<
  typeof getApiV1PaymentsIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PaymentsIdUploadRouteHandler: RouteHandler<
  typeof postApiV1PaymentsIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ClientsRouteHandler: RouteHandler<typeof getApiV1ClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ClientsRouteHandler: RouteHandler<typeof postApiV1ClientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ClientsIdRouteHandler: RouteHandler<typeof getApiV1ClientsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1ClientsIdRouteHandler: RouteHandler<typeof putApiV1ClientsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ClientsIdRouteHandler: RouteHandler<
  typeof deleteApiV1ClientsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ClientsIdEditRouteHandler: RouteHandler<
  typeof getApiV1ClientsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ClientsCreateRouteHandler: RouteHandler<
  typeof getApiV1ClientsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ClientsBulkRouteHandler: RouteHandler<
  typeof postApiV1ClientsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ClientsIdUploadRouteHandler: RouteHandler<
  typeof postApiV1ClientsIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ClientsIdPurgeRouteHandler: RouteHandler<
  typeof postApiV1ClientsIdPurgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ClientsIdMergeableClientHashedIdMergeRouteHandler: RouteHandler<
  typeof postApiV1ClientsIdMergeableClientHashedIdMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ClientStatementRouteHandler: RouteHandler<
  typeof postApiV1ClientStatementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReactivateEmailBounceIdRouteHandler: RouteHandler<
  typeof postApiV1ReactivateEmailBounceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ClientsClientUpdateTaxDataRouteHandler: RouteHandler<
  typeof postApiV1ClientsClientUpdateTaxDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PurchaseOrdersRouteHandler: RouteHandler<
  typeof getApiV1PurchaseOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PurchaseOrdersRouteHandler: RouteHandler<
  typeof postApiV1PurchaseOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PurchaseOrdersIdRouteHandler: RouteHandler<
  typeof getApiV1PurchaseOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1PurchaseOrderIdRouteHandler: RouteHandler<
  typeof putApiV1PurchaseOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1PurchaseOrderIdRouteHandler: RouteHandler<
  typeof deleteApiV1PurchaseOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PurchaseOrdersIdEditRouteHandler: RouteHandler<
  typeof getApiV1PurchaseOrdersIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PurchaseOrdersCreateRouteHandler: RouteHandler<
  typeof getApiV1PurchaseOrdersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PurchaseOrdersBulkRouteHandler: RouteHandler<
  typeof postApiV1PurchaseOrdersBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PurchaseOrdersIdActionRouteHandler: RouteHandler<
  typeof getApiV1PurchaseOrdersIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PurchaseOrdersIdUploadRouteHandler: RouteHandler<
  typeof postApiV1PurchaseOrdersIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PurchaseOrderInvitationKeyDownloadRouteHandler: RouteHandler<
  typeof getApiV1PurchaseOrderInvitationKeyDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ProductsRouteHandler: RouteHandler<typeof getApiV1ProductsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ProductsRouteHandler: RouteHandler<typeof postApiV1ProductsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ProductsIdRouteHandler: RouteHandler<typeof getApiV1ProductsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1ProductsIdRouteHandler: RouteHandler<typeof putApiV1ProductsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ProductsIdRouteHandler: RouteHandler<
  typeof deleteApiV1ProductsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ProductsIdEditRouteHandler: RouteHandler<
  typeof getApiV1ProductsIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ProductsCreateRouteHandler: RouteHandler<
  typeof getApiV1ProductsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ProductsBulkRouteHandler: RouteHandler<
  typeof postApiV1ProductsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ProductsIdUploadRouteHandler: RouteHandler<
  typeof postApiV1ProductsIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
