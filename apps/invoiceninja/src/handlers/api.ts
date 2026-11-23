import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiV1LoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ActivitiesDownloadEntityActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ActivitiesEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ActivitiesNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PasskeysLoginOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SettingsPasskeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsPasskeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsPasskeysOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SettingsPasskeysPasskeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1YodleeRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BankIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BankIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankIntegrationsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankIntegrationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankIntegrationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankIntegrationsRefreshAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankIntegrationsRemoveAccountAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankIntegrationsGetTransactionsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BankTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BankTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankTransactionsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankTransactionsMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BankTransactionRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BankTransactionRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionRulesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionRulesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankTransactionRulesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartsTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartsTotalsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartsChartSummaryV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartsCalculatedFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientGatewayTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientGatewayTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientGatewayTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ClientGatewayTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ClientGatewayTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientGatewayTokensIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientGatewayTokensCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompaniesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompaniesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompaniesIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompaniesCompanyDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompaniesCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyGatewaysCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CompanyGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CompanyGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyGatewaysIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyGatewaysBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyLedgerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ConnectedAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DesignsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DesignsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DesignsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpenseCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExpenseCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpenseCategoriesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpenseCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ExpenseCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ExpenseCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpenseCategoriesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExpenseCategoriesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExpensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpensesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpensesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExpensesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExpensesIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupSettingsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1GroupSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1GroupSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupSettingsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupSettingsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupSettingsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PreimportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppleConfirmPurchaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppleProcessWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClaimLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MigrationPurgeCompanyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MigrationPurgeSaveSettingsCompanyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MigrationStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OneTimeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentTermsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentTermsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PaymentTermsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PaymentTermsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentTermsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentTermsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LastErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PostmarkWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PreviewPurchaseOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringExpensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringExpensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RecurringExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RecurringExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringExpensesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringExpensesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringExpensesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringExpensesIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringQuotesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RecurringQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RecurringQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringQuotesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringQuotesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringQuotesIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsExpensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsInvoiceItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsProductSalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsProfitlossRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsQuoteItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsRecurringInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsClientContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsArDetailReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsArSummaryReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsClientBalanceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsClientSalesReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsTaxSummaryReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsTaxPeriodReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsUserSalesReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsPreviewHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExportsPreviewHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SelfUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SelfUpdateCheckVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StaticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SchedulerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SupportMessagesSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskSchedulersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TaskSchedulersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskSchedulersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskSchedulersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TaskSchedulersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TaskSchedulersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TaskSchedulersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TaskStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskStatusesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskStatusesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TaskStatusesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaxRatesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaxRatesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TaxRatesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TemplatesPreviewHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TokensIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TokensCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TokensBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersUserDetachFromCompanyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserReconfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WebcronRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WebhooksIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WebhooksCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WebhooksBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CreditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CreditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CreditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CreditsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CreditsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CreditsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CreditInvitationKeyDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CreditsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LocationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RecurringInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RecurringInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringInvoicesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringInvoicesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringInvoicesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringInvoicesIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringInvoiceInvitationKeyDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringInvoicesIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TasksIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TasksCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TasksBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TasksIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TasksSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuotesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuotesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QuotesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuotesIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuoteInvitationKeyDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QuotesIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1InvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1InvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoicesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoicesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InvoicesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoicesIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoiceInvitationKeyDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoicesIdDeliveryNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InvoicesIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProjectsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProjectsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProjectsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProjectsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VendorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VendorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VendorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VendorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VendorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VendorsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VendorsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VendorsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VendorsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentsRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentsIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsIdPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsIdMergeableClientHashedIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReactivateEmailBounceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsClientUpdateTaxDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PurchaseOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PurchaseOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PurchaseOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PurchaseOrdersIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PurchaseOrdersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PurchaseOrdersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PurchaseOrdersIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PurchaseOrdersIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PurchaseOrderInvitationKeyDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
