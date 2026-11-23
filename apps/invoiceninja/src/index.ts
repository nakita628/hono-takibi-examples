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
} from './routes'
import {
  deleteApiV1BankIntegrationsIdRouteHandler,
  deleteApiV1BankTransactionRulesIdRouteHandler,
  deleteApiV1BankTransactionsIdRouteHandler,
  deleteApiV1ClientGatewayTokensIdRouteHandler,
  deleteApiV1ClientsIdRouteHandler,
  deleteApiV1CompaniesIdRouteHandler,
  deleteApiV1CompanyGatewaysIdRouteHandler,
  deleteApiV1CreditsIdRouteHandler,
  deleteApiV1DesignsIdRouteHandler,
  deleteApiV1ExpenseCategoriesIdRouteHandler,
  deleteApiV1ExpensesIdRouteHandler,
  deleteApiV1GroupSettingsIdRouteHandler,
  deleteApiV1InvoicesIdRouteHandler,
  deleteApiV1LocationsIdRouteHandler,
  deleteApiV1PaymentsIdRouteHandler,
  deleteApiV1PaymentTermsIdRouteHandler,
  deleteApiV1ProductsIdRouteHandler,
  deleteApiV1ProjectsIdRouteHandler,
  deleteApiV1PurchaseOrderIdRouteHandler,
  deleteApiV1QuotesIdRouteHandler,
  deleteApiV1RecurringExpensesIdRouteHandler,
  deleteApiV1RecurringInvoicesIdRouteHandler,
  deleteApiV1RecurringQuotesIdRouteHandler,
  deleteApiV1SettingsPasskeysPasskeyRouteHandler,
  deleteApiV1SubscriptionsIdRouteHandler,
  deleteApiV1TagsIdRouteHandler,
  deleteApiV1TaskSchedulersIdRouteHandler,
  deleteApiV1TasksIdRouteHandler,
  deleteApiV1TaskStatusesIdRouteHandler,
  deleteApiV1TaxRatesIdRouteHandler,
  deleteApiV1TokensIdRouteHandler,
  deleteApiV1UsersIdRouteHandler,
  deleteApiV1UsersUserDetachFromCompanyRouteHandler,
  deleteApiV1VendorsIdRouteHandler,
  deleteApiV1WebhooksIdRouteHandler,
  getApiV1ActivitiesDownloadEntityActivityIdRouteHandler,
  getApiV1ActivitiesRouteHandler,
  getApiV1BankIntegrationsCreateRouteHandler,
  getApiV1BankIntegrationsIdEditRouteHandler,
  getApiV1BankIntegrationsIdRouteHandler,
  getApiV1BankIntegrationsRouteHandler,
  getApiV1BankTransactionRulesCreateRouteHandler,
  getApiV1BankTransactionRulesIdEditRouteHandler,
  getApiV1BankTransactionRulesIdRouteHandler,
  getApiV1BankTransactionRulesRouteHandler,
  getApiV1BankTransactionsCreateRouteHandler,
  getApiV1BankTransactionsIdEditRouteHandler,
  getApiV1BankTransactionsIdRouteHandler,
  getApiV1BankTransactionsRouteHandler,
  getApiV1ClaimLicenseRouteHandler,
  getApiV1ClientGatewayTokensCreateRouteHandler,
  getApiV1ClientGatewayTokensIdEditRouteHandler,
  getApiV1ClientGatewayTokensIdRouteHandler,
  getApiV1ClientGatewayTokensRouteHandler,
  getApiV1ClientsCreateRouteHandler,
  getApiV1ClientsIdEditRouteHandler,
  getApiV1ClientsIdRouteHandler,
  getApiV1ClientsRouteHandler,
  getApiV1CompaniesCreateRouteHandler,
  getApiV1CompaniesIdEditRouteHandler,
  getApiV1CompaniesIdRouteHandler,
  getApiV1CompaniesRouteHandler,
  getApiV1CompanyGatewaysCreateRouteHandler,
  getApiV1CompanyGatewaysIdEditRouteHandler,
  getApiV1CompanyGatewaysIdRouteHandler,
  getApiV1CompanyGatewaysRouteHandler,
  getApiV1CompanyLedgerRouteHandler,
  getApiV1CreditInvitationKeyDownloadRouteHandler,
  getApiV1CreditsCreateRouteHandler,
  getApiV1CreditsIdEditRouteHandler,
  getApiV1CreditsIdRouteHandler,
  getApiV1CreditsRouteHandler,
  getApiV1DesignsCreateRouteHandler,
  getApiV1DesignsIdEditRouteHandler,
  getApiV1DesignsIdRouteHandler,
  getApiV1DesignsRouteHandler,
  getApiV1DocumentsRouteHandler,
  getApiV1ExpenseCategoriesCreateRouteHandler,
  getApiV1ExpenseCategoriesIdEditRouteHandler,
  getApiV1ExpenseCategoriesIdRouteHandler,
  getApiV1ExpenseCategoriesRouteHandler,
  getApiV1ExpensesCreateRouteHandler,
  getApiV1ExpensesIdEditRouteHandler,
  getApiV1ExpensesIdRouteHandler,
  getApiV1ExpensesRouteHandler,
  getApiV1GroupSettingsCreateRouteHandler,
  getApiV1GroupSettingsIdEditRouteHandler,
  getApiV1GroupSettingsIdRouteHandler,
  getApiV1GroupSettingsRouteHandler,
  getApiV1HealthCheckRouteHandler,
  getApiV1InvoiceInvitationKeyDownloadRouteHandler,
  getApiV1InvoicesCreateRouteHandler,
  getApiV1InvoicesIdActionRouteHandler,
  getApiV1InvoicesIdDeliveryNoteRouteHandler,
  getApiV1InvoicesIdEditRouteHandler,
  getApiV1InvoicesIdRouteHandler,
  getApiV1InvoicesRouteHandler,
  getApiV1LastErrorRouteHandler,
  getApiV1LocationsCreateRouteHandler,
  getApiV1LocationsIdRouteHandler,
  getApiV1LocationsRouteHandler,
  getApiV1PaymentsCreateRouteHandler,
  getApiV1PaymentsIdActionRouteHandler,
  getApiV1PaymentsIdEditRouteHandler,
  getApiV1PaymentsIdRouteHandler,
  getApiV1PaymentsRouteHandler,
  getApiV1PaymentTermsCreateRouteHandler,
  getApiV1PaymentTermsIdEditRouteHandler,
  getApiV1PaymentTermsIdRouteHandler,
  getApiV1PaymentTermsRouteHandler,
  getApiV1PingRouteHandler,
  getApiV1ProductsCreateRouteHandler,
  getApiV1ProductsIdEditRouteHandler,
  getApiV1ProductsIdRouteHandler,
  getApiV1ProductsRouteHandler,
  getApiV1ProjectsCreateRouteHandler,
  getApiV1ProjectsIdEditRouteHandler,
  getApiV1ProjectsIdRouteHandler,
  getApiV1ProjectsRouteHandler,
  getApiV1PurchaseOrderInvitationKeyDownloadRouteHandler,
  getApiV1PurchaseOrdersCreateRouteHandler,
  getApiV1PurchaseOrdersIdActionRouteHandler,
  getApiV1PurchaseOrdersIdEditRouteHandler,
  getApiV1PurchaseOrdersIdRouteHandler,
  getApiV1PurchaseOrdersRouteHandler,
  getApiV1QuoteInvitationKeyDownloadRouteHandler,
  getApiV1QuotesCreateRouteHandler,
  getApiV1QuotesIdActionRouteHandler,
  getApiV1QuotesIdEditRouteHandler,
  getApiV1QuotesIdRouteHandler,
  getApiV1QuotesRouteHandler,
  getApiV1RecurringExpensesCreateRouteHandler,
  getApiV1RecurringExpensesIdEditRouteHandler,
  getApiV1RecurringExpensesIdRouteHandler,
  getApiV1RecurringExpensesRouteHandler,
  getApiV1RecurringInvoiceInvitationKeyDownloadRouteHandler,
  getApiV1RecurringInvoicesCreateRouteHandler,
  getApiV1RecurringInvoicesIdActionRouteHandler,
  getApiV1RecurringInvoicesIdEditRouteHandler,
  getApiV1RecurringInvoicesIdRouteHandler,
  getApiV1RecurringInvoicesRouteHandler,
  getApiV1RecurringQuotesCreateRouteHandler,
  getApiV1RecurringQuotesIdActionRouteHandler,
  getApiV1RecurringQuotesIdEditRouteHandler,
  getApiV1RecurringQuotesIdRouteHandler,
  getApiV1RecurringQuotesRouteHandler,
  getApiV1SchedulerRouteHandler,
  getApiV1SettingsPasskeysRouteHandler,
  getApiV1StaticsRouteHandler,
  getApiV1SubscriptionsCreateRouteHandler,
  getApiV1SubscriptionsIdEditRouteHandler,
  getApiV1SubscriptionsIdRouteHandler,
  getApiV1SubscriptionsRouteHandler,
  getApiV1SystemLogsIdRouteHandler,
  getApiV1SystemLogsRouteHandler,
  getApiV1TagsCreateRouteHandler,
  getApiV1TagsIdEditRouteHandler,
  getApiV1TagsIdRouteHandler,
  getApiV1TagsRouteHandler,
  getApiV1TaskSchedulersCreateRouteHandler,
  getApiV1TaskSchedulersIdRouteHandler,
  getApiV1TaskSchedulersRouteHandler,
  getApiV1TasksCreateRouteHandler,
  getApiV1TasksIdEditRouteHandler,
  getApiV1TasksIdRouteHandler,
  getApiV1TasksRouteHandler,
  getApiV1TaskStatusesCreateRouteHandler,
  getApiV1TaskStatusesIdEditRouteHandler,
  getApiV1TaskStatusesIdRouteHandler,
  getApiV1TaskStatusesRouteHandler,
  getApiV1TaxRatesCreateRouteHandler,
  getApiV1TaxRatesIdEditRouteHandler,
  getApiV1TaxRatesIdRouteHandler,
  getApiV1TaxRatesRouteHandler,
  getApiV1TokensCreateRouteHandler,
  getApiV1TokensIdEditRouteHandler,
  getApiV1TokensIdRouteHandler,
  getApiV1TokensRouteHandler,
  getApiV1UsersCreateRouteHandler,
  getApiV1UsersIdEditRouteHandler,
  getApiV1UsersIdRouteHandler,
  getApiV1UsersRouteHandler,
  getApiV1VendorsCreateRouteHandler,
  getApiV1VendorsIdEditRouteHandler,
  getApiV1VendorsIdRouteHandler,
  getApiV1VendorsRouteHandler,
  getApiV1WebcronRouteHandler,
  getApiV1WebhooksCreateRouteHandler,
  getApiV1WebhooksIdEditRouteHandler,
  getApiV1WebhooksIdRouteHandler,
  getApiV1WebhooksRouteHandler,
  postApiV1ActivitiesEntityRouteHandler,
  postApiV1ActivitiesNotesRouteHandler,
  postApiV1AppleConfirmPurchaseRouteHandler,
  postApiV1AppleProcessWebhookRouteHandler,
  postApiV1BankIntegrationsBulkRouteHandler,
  postApiV1BankIntegrationsGetTransactionsAccountIdRouteHandler,
  postApiV1BankIntegrationsRefreshAccountsRouteHandler,
  postApiV1BankIntegrationsRemoveAccountAccountIdRouteHandler,
  postApiV1BankIntegrationsRouteHandler,
  postApiV1BankTransactionRulesBulkRouteHandler,
  postApiV1BankTransactionRulesRouteHandler,
  postApiV1BankTransactionsBulkRouteHandler,
  postApiV1BankTransactionsMatchRouteHandler,
  postApiV1BankTransactionsRouteHandler,
  postApiV1ChartsCalculatedFieldsRouteHandler,
  postApiV1ChartsChartSummaryV2RouteHandler,
  postApiV1ChartsTotalsRouteHandler,
  postApiV1ChartsTotalsV2RouteHandler,
  postApiV1ClientGatewayTokensRouteHandler,
  postApiV1ClientsBulkRouteHandler,
  postApiV1ClientsClientUpdateTaxDataRouteHandler,
  postApiV1ClientsIdMergeableClientHashedIdMergeRouteHandler,
  postApiV1ClientsIdPurgeRouteHandler,
  postApiV1ClientsIdUploadRouteHandler,
  postApiV1ClientsRouteHandler,
  postApiV1ClientStatementRouteHandler,
  postApiV1CompaniesCompanyDefaultRouteHandler,
  postApiV1CompaniesCurrentRouteHandler,
  postApiV1CompaniesIdUploadRouteHandler,
  postApiV1CompaniesRouteHandler,
  postApiV1CompanyGatewaysBulkRouteHandler,
  postApiV1CompanyGatewaysRouteHandler,
  postApiV1CompanyUsersRouteHandler,
  postApiV1ConnectedAccountRouteHandler,
  postApiV1CreditsBulkRouteHandler,
  postApiV1CreditsIdUploadRouteHandler,
  postApiV1CreditsRouteHandler,
  postApiV1DesignsBulkRouteHandler,
  postApiV1DesignsRouteHandler,
  postApiV1EmailsRouteHandler,
  postApiV1ExpenseCategoriesBulkRouteHandler,
  postApiV1ExpenseCategoriesRouteHandler,
  postApiV1ExpensesBulkRouteHandler,
  postApiV1ExpensesIdUploadRouteHandler,
  postApiV1ExpensesRouteHandler,
  postApiV1ExportRouteHandler,
  postApiV1ExportsPreviewHashRouteHandler,
  postApiV1GroupSettingsBulkRouteHandler,
  postApiV1GroupSettingsIdUploadRouteHandler,
  postApiV1GroupSettingsRouteHandler,
  postApiV1ImportJsonRouteHandler,
  postApiV1ImportRouteHandler,
  postApiV1InvoicesBulkRouteHandler,
  postApiV1InvoicesIdUploadRouteHandler,
  postApiV1InvoicesRouteHandler,
  postApiV1LocationsBulkRouteHandler,
  postApiV1LocationsRouteHandler,
  postApiV1LoginRouteHandler,
  postApiV1LogoutRouteHandler,
  postApiV1MigrationPurgeCompanyRouteHandler,
  postApiV1MigrationPurgeSaveSettingsCompanyRouteHandler,
  postApiV1MigrationStartRouteHandler,
  postApiV1OneTimeTokenRouteHandler,
  postApiV1PasskeysLoginOptionsRouteHandler,
  postApiV1PaymentsBulkRouteHandler,
  postApiV1PaymentsIdUploadRouteHandler,
  postApiV1PaymentsRefundRouteHandler,
  postApiV1PaymentsRouteHandler,
  postApiV1PaymentTermsBulkRouteHandler,
  postApiV1PaymentTermsRouteHandler,
  postApiV1PostmarkWebhookRouteHandler,
  postApiV1PreimportRouteHandler,
  postApiV1PreviewPurchaseOrderRouteHandler,
  postApiV1PreviewRouteHandler,
  postApiV1ProductsBulkRouteHandler,
  postApiV1ProductsIdUploadRouteHandler,
  postApiV1ProductsRouteHandler,
  postApiV1ProjectsBulkRouteHandler,
  postApiV1ProjectsIdUploadRouteHandler,
  postApiV1ProjectsRouteHandler,
  postApiV1PurchaseOrdersBulkRouteHandler,
  postApiV1PurchaseOrdersIdUploadRouteHandler,
  postApiV1PurchaseOrdersRouteHandler,
  postApiV1QuotesBulkRouteHandler,
  postApiV1QuotesIdUploadRouteHandler,
  postApiV1QuotesRouteHandler,
  postApiV1ReactivateEmailBounceIdRouteHandler,
  postApiV1RecurringExpensesBulkRouteHandler,
  postApiV1RecurringExpensesIdUploadRouteHandler,
  postApiV1RecurringExpensesRouteHandler,
  postApiV1RecurringInvoicesBulkRouteHandler,
  postApiV1RecurringInvoicesIdUploadRouteHandler,
  postApiV1RecurringInvoicesRouteHandler,
  postApiV1RecurringQuotesBulkRouteHandler,
  postApiV1RecurringQuotesRouteHandler,
  postApiV1RefreshRouteHandler,
  postApiV1ReportsActivitiesRouteHandler,
  postApiV1ReportsArDetailReportRouteHandler,
  postApiV1ReportsArSummaryReportRouteHandler,
  postApiV1ReportsClientBalanceReportRouteHandler,
  postApiV1ReportsClientContactsRouteHandler,
  postApiV1ReportsClientSalesReportRouteHandler,
  postApiV1ReportsClientsRouteHandler,
  postApiV1ReportsContactsRouteHandler,
  postApiV1ReportsCreditsRouteHandler,
  postApiV1ReportsDocumentsRouteHandler,
  postApiV1ReportsExpensesRouteHandler,
  postApiV1ReportsInvoiceItemsRouteHandler,
  postApiV1ReportsInvoicesRouteHandler,
  postApiV1ReportsPaymentsRouteHandler,
  postApiV1ReportsPreviewHashRouteHandler,
  postApiV1ReportsProductSalesRouteHandler,
  postApiV1ReportsProductsRouteHandler,
  postApiV1ReportsProfitlossRouteHandler,
  postApiV1ReportsProjectsRouteHandler,
  postApiV1ReportsQuoteItemsRouteHandler,
  postApiV1ReportsQuotesRouteHandler,
  postApiV1ReportsRecurringInvoicesRouteHandler,
  postApiV1ReportsTasksRouteHandler,
  postApiV1ReportsTaxPeriodReportRouteHandler,
  postApiV1ReportsTaxSummaryReportRouteHandler,
  postApiV1ReportsUserSalesReportRouteHandler,
  postApiV1SearchRouteHandler,
  postApiV1SelfUpdateCheckVersionRouteHandler,
  postApiV1SelfUpdateRouteHandler,
  postApiV1SettingsPasskeysOptionsRouteHandler,
  postApiV1SettingsPasskeysRouteHandler,
  postApiV1SubscriptionsBulkRouteHandler,
  postApiV1SubscriptionsRouteHandler,
  postApiV1SupportMessagesSendRouteHandler,
  postApiV1TagsBulkRouteHandler,
  postApiV1TagsRouteHandler,
  postApiV1TasksBulkRouteHandler,
  postApiV1TaskSchedulersBulkRouteHandler,
  postApiV1TaskSchedulersRouteHandler,
  postApiV1TasksIdUploadRouteHandler,
  postApiV1TasksRouteHandler,
  postApiV1TasksSortRouteHandler,
  postApiV1TaskStatusesBulkRouteHandler,
  postApiV1TaskStatusesRouteHandler,
  postApiV1TaxRatesBulkRouteHandler,
  postApiV1TemplatesPreviewHashRouteHandler,
  postApiV1TemplatesRouteHandler,
  postApiV1TokensBulkRouteHandler,
  postApiV1TokensRouteHandler,
  postApiV1UsersBulkRouteHandler,
  postApiV1UsersRouteHandler,
  postApiV1UsersUserInviteRouteHandler,
  postApiV1UsersUserReconfirmRouteHandler,
  postApiV1VendorsBulkRouteHandler,
  postApiV1VendorsIdUploadRouteHandler,
  postApiV1VendorsRouteHandler,
  postApiV1WebhooksBulkRouteHandler,
  postApiV1WebhooksRouteHandler,
  postApiV1YodleeRefreshRouteHandler,
  putApiV1BankIntegrationsIdRouteHandler,
  putApiV1BankTransactionRulesIdRouteHandler,
  putApiV1BankTransactionsIdRouteHandler,
  putApiV1ClientGatewayTokensIdRouteHandler,
  putApiV1ClientsIdRouteHandler,
  putApiV1CompaniesIdRouteHandler,
  putApiV1CompanyGatewaysIdRouteHandler,
  putApiV1CreditsIdRouteHandler,
  putApiV1DesignsIdRouteHandler,
  putApiV1ExpenseCategoriesIdRouteHandler,
  putApiV1ExpensesIdRouteHandler,
  putApiV1GroupSettingsIdRouteHandler,
  putApiV1InvoicesIdRouteHandler,
  putApiV1LocationsIdRouteHandler,
  putApiV1PaymentsIdRouteHandler,
  putApiV1PaymentTermsIdRouteHandler,
  putApiV1ProductsIdRouteHandler,
  putApiV1ProjectsIdRouteHandler,
  putApiV1PurchaseOrderIdRouteHandler,
  putApiV1QuotesIdRouteHandler,
  putApiV1RecurringExpensesIdRouteHandler,
  putApiV1RecurringInvoicesIdRouteHandler,
  putApiV1RecurringQuotesIdRouteHandler,
  putApiV1SubscriptionsIdRouteHandler,
  putApiV1TagsIdRouteHandler,
  putApiV1TaskSchedulersIdRouteHandler,
  putApiV1TasksIdRouteHandler,
  putApiV1TaskStatusesIdRouteHandler,
  putApiV1TaxRatesIdRouteHandler,
  putApiV1TokensIdRouteHandler,
  putApiV1UsersIdRouteHandler,
  putApiV1VendorsIdRouteHandler,
  putApiV1WebhooksIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiV1LoginRoute, postApiV1LoginRouteHandler)
  .openapi(getApiV1ActivitiesRoute, getApiV1ActivitiesRouteHandler)
  .openapi(
    getApiV1ActivitiesDownloadEntityActivityIdRoute,
    getApiV1ActivitiesDownloadEntityActivityIdRouteHandler,
  )
  .openapi(postApiV1ActivitiesEntityRoute, postApiV1ActivitiesEntityRouteHandler)
  .openapi(postApiV1ActivitiesNotesRoute, postApiV1ActivitiesNotesRouteHandler)
  .openapi(postApiV1PasskeysLoginOptionsRoute, postApiV1PasskeysLoginOptionsRouteHandler)
  .openapi(getApiV1SettingsPasskeysRoute, getApiV1SettingsPasskeysRouteHandler)
  .openapi(postApiV1SettingsPasskeysRoute, postApiV1SettingsPasskeysRouteHandler)
  .openapi(postApiV1SettingsPasskeysOptionsRoute, postApiV1SettingsPasskeysOptionsRouteHandler)
  .openapi(deleteApiV1SettingsPasskeysPasskeyRoute, deleteApiV1SettingsPasskeysPasskeyRouteHandler)
  .openapi(postApiV1RefreshRoute, postApiV1RefreshRouteHandler)
  .openapi(postApiV1YodleeRefreshRoute, postApiV1YodleeRefreshRouteHandler)
  .openapi(getApiV1BankIntegrationsRoute, getApiV1BankIntegrationsRouteHandler)
  .openapi(postApiV1BankIntegrationsRoute, postApiV1BankIntegrationsRouteHandler)
  .openapi(getApiV1BankIntegrationsIdRoute, getApiV1BankIntegrationsIdRouteHandler)
  .openapi(putApiV1BankIntegrationsIdRoute, putApiV1BankIntegrationsIdRouteHandler)
  .openapi(deleteApiV1BankIntegrationsIdRoute, deleteApiV1BankIntegrationsIdRouteHandler)
  .openapi(getApiV1BankIntegrationsIdEditRoute, getApiV1BankIntegrationsIdEditRouteHandler)
  .openapi(getApiV1BankIntegrationsCreateRoute, getApiV1BankIntegrationsCreateRouteHandler)
  .openapi(postApiV1BankIntegrationsBulkRoute, postApiV1BankIntegrationsBulkRouteHandler)
  .openapi(
    postApiV1BankIntegrationsRefreshAccountsRoute,
    postApiV1BankIntegrationsRefreshAccountsRouteHandler,
  )
  .openapi(
    postApiV1BankIntegrationsRemoveAccountAccountIdRoute,
    postApiV1BankIntegrationsRemoveAccountAccountIdRouteHandler,
  )
  .openapi(
    postApiV1BankIntegrationsGetTransactionsAccountIdRoute,
    postApiV1BankIntegrationsGetTransactionsAccountIdRouteHandler,
  )
  .openapi(getApiV1BankTransactionsRoute, getApiV1BankTransactionsRouteHandler)
  .openapi(postApiV1BankTransactionsRoute, postApiV1BankTransactionsRouteHandler)
  .openapi(getApiV1BankTransactionsIdRoute, getApiV1BankTransactionsIdRouteHandler)
  .openapi(putApiV1BankTransactionsIdRoute, putApiV1BankTransactionsIdRouteHandler)
  .openapi(deleteApiV1BankTransactionsIdRoute, deleteApiV1BankTransactionsIdRouteHandler)
  .openapi(getApiV1BankTransactionsIdEditRoute, getApiV1BankTransactionsIdEditRouteHandler)
  .openapi(getApiV1BankTransactionsCreateRoute, getApiV1BankTransactionsCreateRouteHandler)
  .openapi(postApiV1BankTransactionsBulkRoute, postApiV1BankTransactionsBulkRouteHandler)
  .openapi(postApiV1BankTransactionsMatchRoute, postApiV1BankTransactionsMatchRouteHandler)
  .openapi(getApiV1BankTransactionRulesRoute, getApiV1BankTransactionRulesRouteHandler)
  .openapi(postApiV1BankTransactionRulesRoute, postApiV1BankTransactionRulesRouteHandler)
  .openapi(getApiV1BankTransactionRulesIdRoute, getApiV1BankTransactionRulesIdRouteHandler)
  .openapi(putApiV1BankTransactionRulesIdRoute, putApiV1BankTransactionRulesIdRouteHandler)
  .openapi(deleteApiV1BankTransactionRulesIdRoute, deleteApiV1BankTransactionRulesIdRouteHandler)
  .openapi(getApiV1BankTransactionRulesIdEditRoute, getApiV1BankTransactionRulesIdEditRouteHandler)
  .openapi(getApiV1BankTransactionRulesCreateRoute, getApiV1BankTransactionRulesCreateRouteHandler)
  .openapi(postApiV1BankTransactionRulesBulkRoute, postApiV1BankTransactionRulesBulkRouteHandler)
  .openapi(postApiV1ChartsTotalsRoute, postApiV1ChartsTotalsRouteHandler)
  .openapi(postApiV1ChartsTotalsV2Route, postApiV1ChartsTotalsV2RouteHandler)
  .openapi(postApiV1ChartsChartSummaryV2Route, postApiV1ChartsChartSummaryV2RouteHandler)
  .openapi(postApiV1ChartsCalculatedFieldsRoute, postApiV1ChartsCalculatedFieldsRouteHandler)
  .openapi(getApiV1ClientGatewayTokensRoute, getApiV1ClientGatewayTokensRouteHandler)
  .openapi(postApiV1ClientGatewayTokensRoute, postApiV1ClientGatewayTokensRouteHandler)
  .openapi(getApiV1ClientGatewayTokensIdRoute, getApiV1ClientGatewayTokensIdRouteHandler)
  .openapi(putApiV1ClientGatewayTokensIdRoute, putApiV1ClientGatewayTokensIdRouteHandler)
  .openapi(deleteApiV1ClientGatewayTokensIdRoute, deleteApiV1ClientGatewayTokensIdRouteHandler)
  .openapi(getApiV1ClientGatewayTokensIdEditRoute, getApiV1ClientGatewayTokensIdEditRouteHandler)
  .openapi(getApiV1ClientGatewayTokensCreateRoute, getApiV1ClientGatewayTokensCreateRouteHandler)
  .openapi(getApiV1CompaniesRoute, getApiV1CompaniesRouteHandler)
  .openapi(postApiV1CompaniesRoute, postApiV1CompaniesRouteHandler)
  .openapi(getApiV1CompaniesCreateRoute, getApiV1CompaniesCreateRouteHandler)
  .openapi(getApiV1CompaniesIdRoute, getApiV1CompaniesIdRouteHandler)
  .openapi(putApiV1CompaniesIdRoute, putApiV1CompaniesIdRouteHandler)
  .openapi(deleteApiV1CompaniesIdRoute, deleteApiV1CompaniesIdRouteHandler)
  .openapi(getApiV1CompaniesIdEditRoute, getApiV1CompaniesIdEditRouteHandler)
  .openapi(postApiV1CompaniesIdUploadRoute, postApiV1CompaniesIdUploadRouteHandler)
  .openapi(postApiV1CompaniesCompanyDefaultRoute, postApiV1CompaniesCompanyDefaultRouteHandler)
  .openapi(postApiV1CompaniesCurrentRoute, postApiV1CompaniesCurrentRouteHandler)
  .openapi(getApiV1CompanyGatewaysRoute, getApiV1CompanyGatewaysRouteHandler)
  .openapi(postApiV1CompanyGatewaysRoute, postApiV1CompanyGatewaysRouteHandler)
  .openapi(getApiV1CompanyGatewaysCreateRoute, getApiV1CompanyGatewaysCreateRouteHandler)
  .openapi(getApiV1CompanyGatewaysIdRoute, getApiV1CompanyGatewaysIdRouteHandler)
  .openapi(putApiV1CompanyGatewaysIdRoute, putApiV1CompanyGatewaysIdRouteHandler)
  .openapi(deleteApiV1CompanyGatewaysIdRoute, deleteApiV1CompanyGatewaysIdRouteHandler)
  .openapi(getApiV1CompanyGatewaysIdEditRoute, getApiV1CompanyGatewaysIdEditRouteHandler)
  .openapi(postApiV1CompanyGatewaysBulkRoute, postApiV1CompanyGatewaysBulkRouteHandler)
  .openapi(getApiV1CompanyLedgerRoute, getApiV1CompanyLedgerRouteHandler)
  .openapi(postApiV1CompanyUsersRoute, postApiV1CompanyUsersRouteHandler)
  .openapi(postApiV1ConnectedAccountRoute, postApiV1ConnectedAccountRouteHandler)
  .openapi(getApiV1DesignsRoute, getApiV1DesignsRouteHandler)
  .openapi(postApiV1DesignsRoute, postApiV1DesignsRouteHandler)
  .openapi(getApiV1DesignsIdRoute, getApiV1DesignsIdRouteHandler)
  .openapi(putApiV1DesignsIdRoute, putApiV1DesignsIdRouteHandler)
  .openapi(deleteApiV1DesignsIdRoute, deleteApiV1DesignsIdRouteHandler)
  .openapi(getApiV1DesignsIdEditRoute, getApiV1DesignsIdEditRouteHandler)
  .openapi(getApiV1DesignsCreateRoute, getApiV1DesignsCreateRouteHandler)
  .openapi(postApiV1DesignsBulkRoute, postApiV1DesignsBulkRouteHandler)
  .openapi(getApiV1DocumentsRoute, getApiV1DocumentsRouteHandler)
  .openapi(postApiV1EmailsRoute, postApiV1EmailsRouteHandler)
  .openapi(getApiV1ExpenseCategoriesRoute, getApiV1ExpenseCategoriesRouteHandler)
  .openapi(postApiV1ExpenseCategoriesRoute, postApiV1ExpenseCategoriesRouteHandler)
  .openapi(getApiV1ExpenseCategoriesCreateRoute, getApiV1ExpenseCategoriesCreateRouteHandler)
  .openapi(getApiV1ExpenseCategoriesIdRoute, getApiV1ExpenseCategoriesIdRouteHandler)
  .openapi(putApiV1ExpenseCategoriesIdRoute, putApiV1ExpenseCategoriesIdRouteHandler)
  .openapi(deleteApiV1ExpenseCategoriesIdRoute, deleteApiV1ExpenseCategoriesIdRouteHandler)
  .openapi(getApiV1ExpenseCategoriesIdEditRoute, getApiV1ExpenseCategoriesIdEditRouteHandler)
  .openapi(postApiV1ExpenseCategoriesBulkRoute, postApiV1ExpenseCategoriesBulkRouteHandler)
  .openapi(getApiV1ExpensesRoute, getApiV1ExpensesRouteHandler)
  .openapi(postApiV1ExpensesRoute, postApiV1ExpensesRouteHandler)
  .openapi(getApiV1ExpensesIdRoute, getApiV1ExpensesIdRouteHandler)
  .openapi(putApiV1ExpensesIdRoute, putApiV1ExpensesIdRouteHandler)
  .openapi(deleteApiV1ExpensesIdRoute, deleteApiV1ExpensesIdRouteHandler)
  .openapi(getApiV1ExpensesIdEditRoute, getApiV1ExpensesIdEditRouteHandler)
  .openapi(getApiV1ExpensesCreateRoute, getApiV1ExpensesCreateRouteHandler)
  .openapi(postApiV1ExpensesBulkRoute, postApiV1ExpensesBulkRouteHandler)
  .openapi(postApiV1ExpensesIdUploadRoute, postApiV1ExpensesIdUploadRouteHandler)
  .openapi(postApiV1ExportRoute, postApiV1ExportRouteHandler)
  .openapi(getApiV1GroupSettingsRoute, getApiV1GroupSettingsRouteHandler)
  .openapi(postApiV1GroupSettingsRoute, postApiV1GroupSettingsRouteHandler)
  .openapi(getApiV1GroupSettingsCreateRoute, getApiV1GroupSettingsCreateRouteHandler)
  .openapi(getApiV1GroupSettingsIdRoute, getApiV1GroupSettingsIdRouteHandler)
  .openapi(putApiV1GroupSettingsIdRoute, putApiV1GroupSettingsIdRouteHandler)
  .openapi(deleteApiV1GroupSettingsIdRoute, deleteApiV1GroupSettingsIdRouteHandler)
  .openapi(getApiV1GroupSettingsIdEditRoute, getApiV1GroupSettingsIdEditRouteHandler)
  .openapi(postApiV1GroupSettingsBulkRoute, postApiV1GroupSettingsBulkRouteHandler)
  .openapi(postApiV1GroupSettingsIdUploadRoute, postApiV1GroupSettingsIdUploadRouteHandler)
  .openapi(postApiV1PreimportRoute, postApiV1PreimportRouteHandler)
  .openapi(postApiV1ImportRoute, postApiV1ImportRouteHandler)
  .openapi(postApiV1ImportJsonRoute, postApiV1ImportJsonRouteHandler)
  .openapi(postApiV1AppleConfirmPurchaseRoute, postApiV1AppleConfirmPurchaseRouteHandler)
  .openapi(postApiV1AppleProcessWebhookRoute, postApiV1AppleProcessWebhookRouteHandler)
  .openapi(getApiV1ClaimLicenseRoute, getApiV1ClaimLicenseRouteHandler)
  .openapi(postApiV1LogoutRoute, postApiV1LogoutRouteHandler)
  .openapi(postApiV1MigrationPurgeCompanyRoute, postApiV1MigrationPurgeCompanyRouteHandler)
  .openapi(
    postApiV1MigrationPurgeSaveSettingsCompanyRoute,
    postApiV1MigrationPurgeSaveSettingsCompanyRouteHandler,
  )
  .openapi(postApiV1MigrationStartRoute, postApiV1MigrationStartRouteHandler)
  .openapi(postApiV1OneTimeTokenRoute, postApiV1OneTimeTokenRouteHandler)
  .openapi(getApiV1PaymentTermsRoute, getApiV1PaymentTermsRouteHandler)
  .openapi(postApiV1PaymentTermsRoute, postApiV1PaymentTermsRouteHandler)
  .openapi(getApiV1PaymentTermsCreateRoute, getApiV1PaymentTermsCreateRouteHandler)
  .openapi(getApiV1PaymentTermsIdRoute, getApiV1PaymentTermsIdRouteHandler)
  .openapi(putApiV1PaymentTermsIdRoute, putApiV1PaymentTermsIdRouteHandler)
  .openapi(deleteApiV1PaymentTermsIdRoute, deleteApiV1PaymentTermsIdRouteHandler)
  .openapi(getApiV1PaymentTermsIdEditRoute, getApiV1PaymentTermsIdEditRouteHandler)
  .openapi(postApiV1PaymentTermsBulkRoute, postApiV1PaymentTermsBulkRouteHandler)
  .openapi(getApiV1PingRoute, getApiV1PingRouteHandler)
  .openapi(getApiV1HealthCheckRoute, getApiV1HealthCheckRouteHandler)
  .openapi(getApiV1LastErrorRoute, getApiV1LastErrorRouteHandler)
  .openapi(postApiV1PostmarkWebhookRoute, postApiV1PostmarkWebhookRouteHandler)
  .openapi(postApiV1PreviewRoute, postApiV1PreviewRouteHandler)
  .openapi(postApiV1PreviewPurchaseOrderRoute, postApiV1PreviewPurchaseOrderRouteHandler)
  .openapi(getApiV1RecurringExpensesRoute, getApiV1RecurringExpensesRouteHandler)
  .openapi(postApiV1RecurringExpensesRoute, postApiV1RecurringExpensesRouteHandler)
  .openapi(getApiV1RecurringExpensesIdRoute, getApiV1RecurringExpensesIdRouteHandler)
  .openapi(putApiV1RecurringExpensesIdRoute, putApiV1RecurringExpensesIdRouteHandler)
  .openapi(deleteApiV1RecurringExpensesIdRoute, deleteApiV1RecurringExpensesIdRouteHandler)
  .openapi(getApiV1RecurringExpensesIdEditRoute, getApiV1RecurringExpensesIdEditRouteHandler)
  .openapi(getApiV1RecurringExpensesCreateRoute, getApiV1RecurringExpensesCreateRouteHandler)
  .openapi(postApiV1RecurringExpensesBulkRoute, postApiV1RecurringExpensesBulkRouteHandler)
  .openapi(postApiV1RecurringExpensesIdUploadRoute, postApiV1RecurringExpensesIdUploadRouteHandler)
  .openapi(getApiV1RecurringQuotesRoute, getApiV1RecurringQuotesRouteHandler)
  .openapi(postApiV1RecurringQuotesRoute, postApiV1RecurringQuotesRouteHandler)
  .openapi(getApiV1RecurringQuotesCreateRoute, getApiV1RecurringQuotesCreateRouteHandler)
  .openapi(getApiV1RecurringQuotesIdRoute, getApiV1RecurringQuotesIdRouteHandler)
  .openapi(putApiV1RecurringQuotesIdRoute, putApiV1RecurringQuotesIdRouteHandler)
  .openapi(deleteApiV1RecurringQuotesIdRoute, deleteApiV1RecurringQuotesIdRouteHandler)
  .openapi(getApiV1RecurringQuotesIdEditRoute, getApiV1RecurringQuotesIdEditRouteHandler)
  .openapi(postApiV1RecurringQuotesBulkRoute, postApiV1RecurringQuotesBulkRouteHandler)
  .openapi(getApiV1RecurringQuotesIdActionRoute, getApiV1RecurringQuotesIdActionRouteHandler)
  .openapi(postApiV1ReportsContactsRoute, postApiV1ReportsContactsRouteHandler)
  .openapi(postApiV1ReportsClientsRoute, postApiV1ReportsClientsRouteHandler)
  .openapi(postApiV1ReportsCreditsRoute, postApiV1ReportsCreditsRouteHandler)
  .openapi(postApiV1ReportsDocumentsRoute, postApiV1ReportsDocumentsRouteHandler)
  .openapi(postApiV1ReportsExpensesRoute, postApiV1ReportsExpensesRouteHandler)
  .openapi(postApiV1ReportsInvoiceItemsRoute, postApiV1ReportsInvoiceItemsRouteHandler)
  .openapi(postApiV1ReportsInvoicesRoute, postApiV1ReportsInvoicesRouteHandler)
  .openapi(postApiV1ReportsPaymentsRoute, postApiV1ReportsPaymentsRouteHandler)
  .openapi(postApiV1ReportsProductsRoute, postApiV1ReportsProductsRouteHandler)
  .openapi(postApiV1ReportsProductSalesRoute, postApiV1ReportsProductSalesRouteHandler)
  .openapi(postApiV1ReportsProfitlossRoute, postApiV1ReportsProfitlossRouteHandler)
  .openapi(postApiV1ReportsQuoteItemsRoute, postApiV1ReportsQuoteItemsRouteHandler)
  .openapi(postApiV1ReportsQuotesRoute, postApiV1ReportsQuotesRouteHandler)
  .openapi(postApiV1ReportsRecurringInvoicesRoute, postApiV1ReportsRecurringInvoicesRouteHandler)
  .openapi(postApiV1ReportsTasksRoute, postApiV1ReportsTasksRouteHandler)
  .openapi(postApiV1ReportsActivitiesRoute, postApiV1ReportsActivitiesRouteHandler)
  .openapi(postApiV1ReportsClientContactsRoute, postApiV1ReportsClientContactsRouteHandler)
  .openapi(postApiV1ReportsArDetailReportRoute, postApiV1ReportsArDetailReportRouteHandler)
  .openapi(postApiV1ReportsArSummaryReportRoute, postApiV1ReportsArSummaryReportRouteHandler)
  .openapi(
    postApiV1ReportsClientBalanceReportRoute,
    postApiV1ReportsClientBalanceReportRouteHandler,
  )
  .openapi(postApiV1ReportsClientSalesReportRoute, postApiV1ReportsClientSalesReportRouteHandler)
  .openapi(postApiV1ReportsTaxSummaryReportRoute, postApiV1ReportsTaxSummaryReportRouteHandler)
  .openapi(postApiV1ReportsTaxPeriodReportRoute, postApiV1ReportsTaxPeriodReportRouteHandler)
  .openapi(postApiV1ReportsUserSalesReportRoute, postApiV1ReportsUserSalesReportRouteHandler)
  .openapi(postApiV1ReportsProjectsRoute, postApiV1ReportsProjectsRouteHandler)
  .openapi(postApiV1ReportsPreviewHashRoute, postApiV1ReportsPreviewHashRouteHandler)
  .openapi(postApiV1ExportsPreviewHashRoute, postApiV1ExportsPreviewHashRouteHandler)
  .openapi(postApiV1SelfUpdateRoute, postApiV1SelfUpdateRouteHandler)
  .openapi(postApiV1SelfUpdateCheckVersionRoute, postApiV1SelfUpdateCheckVersionRouteHandler)
  .openapi(getApiV1StaticsRoute, getApiV1StaticsRouteHandler)
  .openapi(getApiV1SubscriptionsRoute, getApiV1SubscriptionsRouteHandler)
  .openapi(postApiV1SubscriptionsRoute, postApiV1SubscriptionsRouteHandler)
  .openapi(getApiV1SubscriptionsCreateRoute, getApiV1SubscriptionsCreateRouteHandler)
  .openapi(getApiV1SubscriptionsIdRoute, getApiV1SubscriptionsIdRouteHandler)
  .openapi(putApiV1SubscriptionsIdRoute, putApiV1SubscriptionsIdRouteHandler)
  .openapi(deleteApiV1SubscriptionsIdRoute, deleteApiV1SubscriptionsIdRouteHandler)
  .openapi(getApiV1SubscriptionsIdEditRoute, getApiV1SubscriptionsIdEditRouteHandler)
  .openapi(postApiV1SubscriptionsBulkRoute, postApiV1SubscriptionsBulkRouteHandler)
  .openapi(getApiV1SchedulerRoute, getApiV1SchedulerRouteHandler)
  .openapi(postApiV1SupportMessagesSendRoute, postApiV1SupportMessagesSendRouteHandler)
  .openapi(getApiV1SystemLogsRoute, getApiV1SystemLogsRouteHandler)
  .openapi(getApiV1SystemLogsIdRoute, getApiV1SystemLogsIdRouteHandler)
  .openapi(getApiV1TaskSchedulersRoute, getApiV1TaskSchedulersRouteHandler)
  .openapi(postApiV1TaskSchedulersRoute, postApiV1TaskSchedulersRouteHandler)
  .openapi(getApiV1TaskSchedulersCreateRoute, getApiV1TaskSchedulersCreateRouteHandler)
  .openapi(getApiV1TaskSchedulersIdRoute, getApiV1TaskSchedulersIdRouteHandler)
  .openapi(putApiV1TaskSchedulersIdRoute, putApiV1TaskSchedulersIdRouteHandler)
  .openapi(deleteApiV1TaskSchedulersIdRoute, deleteApiV1TaskSchedulersIdRouteHandler)
  .openapi(postApiV1TaskSchedulersBulkRoute, postApiV1TaskSchedulersBulkRouteHandler)
  .openapi(getApiV1TaskStatusesRoute, getApiV1TaskStatusesRouteHandler)
  .openapi(postApiV1TaskStatusesRoute, postApiV1TaskStatusesRouteHandler)
  .openapi(getApiV1TaskStatusesCreateRoute, getApiV1TaskStatusesCreateRouteHandler)
  .openapi(getApiV1TaskStatusesIdRoute, getApiV1TaskStatusesIdRouteHandler)
  .openapi(putApiV1TaskStatusesIdRoute, putApiV1TaskStatusesIdRouteHandler)
  .openapi(deleteApiV1TaskStatusesIdRoute, deleteApiV1TaskStatusesIdRouteHandler)
  .openapi(getApiV1TaskStatusesIdEditRoute, getApiV1TaskStatusesIdEditRouteHandler)
  .openapi(postApiV1TaskStatusesBulkRoute, postApiV1TaskStatusesBulkRouteHandler)
  .openapi(getApiV1TaxRatesRoute, getApiV1TaxRatesRouteHandler)
  .openapi(getApiV1TaxRatesCreateRoute, getApiV1TaxRatesCreateRouteHandler)
  .openapi(getApiV1TaxRatesIdRoute, getApiV1TaxRatesIdRouteHandler)
  .openapi(putApiV1TaxRatesIdRoute, putApiV1TaxRatesIdRouteHandler)
  .openapi(deleteApiV1TaxRatesIdRoute, deleteApiV1TaxRatesIdRouteHandler)
  .openapi(getApiV1TaxRatesIdEditRoute, getApiV1TaxRatesIdEditRouteHandler)
  .openapi(postApiV1TaxRatesBulkRoute, postApiV1TaxRatesBulkRouteHandler)
  .openapi(postApiV1TemplatesRoute, postApiV1TemplatesRouteHandler)
  .openapi(postApiV1TemplatesPreviewHashRoute, postApiV1TemplatesPreviewHashRouteHandler)
  .openapi(postApiV1SearchRoute, postApiV1SearchRouteHandler)
  .openapi(getApiV1TokensRoute, getApiV1TokensRouteHandler)
  .openapi(postApiV1TokensRoute, postApiV1TokensRouteHandler)
  .openapi(getApiV1TokensIdRoute, getApiV1TokensIdRouteHandler)
  .openapi(putApiV1TokensIdRoute, putApiV1TokensIdRouteHandler)
  .openapi(deleteApiV1TokensIdRoute, deleteApiV1TokensIdRouteHandler)
  .openapi(getApiV1TokensIdEditRoute, getApiV1TokensIdEditRouteHandler)
  .openapi(getApiV1TokensCreateRoute, getApiV1TokensCreateRouteHandler)
  .openapi(postApiV1TokensBulkRoute, postApiV1TokensBulkRouteHandler)
  .openapi(getApiV1UsersRoute, getApiV1UsersRouteHandler)
  .openapi(postApiV1UsersRoute, postApiV1UsersRouteHandler)
  .openapi(getApiV1UsersCreateRoute, getApiV1UsersCreateRouteHandler)
  .openapi(getApiV1UsersIdRoute, getApiV1UsersIdRouteHandler)
  .openapi(putApiV1UsersIdRoute, putApiV1UsersIdRouteHandler)
  .openapi(deleteApiV1UsersIdRoute, deleteApiV1UsersIdRouteHandler)
  .openapi(getApiV1UsersIdEditRoute, getApiV1UsersIdEditRouteHandler)
  .openapi(postApiV1UsersBulkRoute, postApiV1UsersBulkRouteHandler)
  .openapi(
    deleteApiV1UsersUserDetachFromCompanyRoute,
    deleteApiV1UsersUserDetachFromCompanyRouteHandler,
  )
  .openapi(postApiV1UsersUserInviteRoute, postApiV1UsersUserInviteRouteHandler)
  .openapi(postApiV1UsersUserReconfirmRoute, postApiV1UsersUserReconfirmRouteHandler)
  .openapi(getApiV1WebcronRoute, getApiV1WebcronRouteHandler)
  .openapi(getApiV1WebhooksRoute, getApiV1WebhooksRouteHandler)
  .openapi(postApiV1WebhooksRoute, postApiV1WebhooksRouteHandler)
  .openapi(getApiV1WebhooksIdRoute, getApiV1WebhooksIdRouteHandler)
  .openapi(putApiV1WebhooksIdRoute, putApiV1WebhooksIdRouteHandler)
  .openapi(deleteApiV1WebhooksIdRoute, deleteApiV1WebhooksIdRouteHandler)
  .openapi(getApiV1WebhooksIdEditRoute, getApiV1WebhooksIdEditRouteHandler)
  .openapi(getApiV1WebhooksCreateRoute, getApiV1WebhooksCreateRouteHandler)
  .openapi(postApiV1WebhooksBulkRoute, postApiV1WebhooksBulkRouteHandler)
  .openapi(getApiV1CreditsRoute, getApiV1CreditsRouteHandler)
  .openapi(postApiV1CreditsRoute, postApiV1CreditsRouteHandler)
  .openapi(getApiV1CreditsIdRoute, getApiV1CreditsIdRouteHandler)
  .openapi(putApiV1CreditsIdRoute, putApiV1CreditsIdRouteHandler)
  .openapi(deleteApiV1CreditsIdRoute, deleteApiV1CreditsIdRouteHandler)
  .openapi(getApiV1CreditsIdEditRoute, getApiV1CreditsIdEditRouteHandler)
  .openapi(getApiV1CreditsCreateRoute, getApiV1CreditsCreateRouteHandler)
  .openapi(postApiV1CreditsBulkRoute, postApiV1CreditsBulkRouteHandler)
  .openapi(
    getApiV1CreditInvitationKeyDownloadRoute,
    getApiV1CreditInvitationKeyDownloadRouteHandler,
  )
  .openapi(postApiV1CreditsIdUploadRoute, postApiV1CreditsIdUploadRouteHandler)
  .openapi(getApiV1TagsRoute, getApiV1TagsRouteHandler)
  .openapi(postApiV1TagsRoute, postApiV1TagsRouteHandler)
  .openapi(getApiV1TagsCreateRoute, getApiV1TagsCreateRouteHandler)
  .openapi(getApiV1TagsIdRoute, getApiV1TagsIdRouteHandler)
  .openapi(putApiV1TagsIdRoute, putApiV1TagsIdRouteHandler)
  .openapi(deleteApiV1TagsIdRoute, deleteApiV1TagsIdRouteHandler)
  .openapi(getApiV1TagsIdEditRoute, getApiV1TagsIdEditRouteHandler)
  .openapi(postApiV1TagsBulkRoute, postApiV1TagsBulkRouteHandler)
  .openapi(getApiV1LocationsRoute, getApiV1LocationsRouteHandler)
  .openapi(postApiV1LocationsRoute, postApiV1LocationsRouteHandler)
  .openapi(getApiV1LocationsIdRoute, getApiV1LocationsIdRouteHandler)
  .openapi(putApiV1LocationsIdRoute, putApiV1LocationsIdRouteHandler)
  .openapi(deleteApiV1LocationsIdRoute, deleteApiV1LocationsIdRouteHandler)
  .openapi(getApiV1LocationsCreateRoute, getApiV1LocationsCreateRouteHandler)
  .openapi(postApiV1LocationsBulkRoute, postApiV1LocationsBulkRouteHandler)
  .openapi(getApiV1RecurringInvoicesRoute, getApiV1RecurringInvoicesRouteHandler)
  .openapi(postApiV1RecurringInvoicesRoute, postApiV1RecurringInvoicesRouteHandler)
  .openapi(getApiV1RecurringInvoicesIdRoute, getApiV1RecurringInvoicesIdRouteHandler)
  .openapi(putApiV1RecurringInvoicesIdRoute, putApiV1RecurringInvoicesIdRouteHandler)
  .openapi(deleteApiV1RecurringInvoicesIdRoute, deleteApiV1RecurringInvoicesIdRouteHandler)
  .openapi(getApiV1RecurringInvoicesIdEditRoute, getApiV1RecurringInvoicesIdEditRouteHandler)
  .openapi(getApiV1RecurringInvoicesCreateRoute, getApiV1RecurringInvoicesCreateRouteHandler)
  .openapi(postApiV1RecurringInvoicesBulkRoute, postApiV1RecurringInvoicesBulkRouteHandler)
  .openapi(getApiV1RecurringInvoicesIdActionRoute, getApiV1RecurringInvoicesIdActionRouteHandler)
  .openapi(
    getApiV1RecurringInvoiceInvitationKeyDownloadRoute,
    getApiV1RecurringInvoiceInvitationKeyDownloadRouteHandler,
  )
  .openapi(postApiV1RecurringInvoicesIdUploadRoute, postApiV1RecurringInvoicesIdUploadRouteHandler)
  .openapi(getApiV1TasksRoute, getApiV1TasksRouteHandler)
  .openapi(postApiV1TasksRoute, postApiV1TasksRouteHandler)
  .openapi(getApiV1TasksIdRoute, getApiV1TasksIdRouteHandler)
  .openapi(putApiV1TasksIdRoute, putApiV1TasksIdRouteHandler)
  .openapi(deleteApiV1TasksIdRoute, deleteApiV1TasksIdRouteHandler)
  .openapi(getApiV1TasksIdEditRoute, getApiV1TasksIdEditRouteHandler)
  .openapi(getApiV1TasksCreateRoute, getApiV1TasksCreateRouteHandler)
  .openapi(postApiV1TasksBulkRoute, postApiV1TasksBulkRouteHandler)
  .openapi(postApiV1TasksIdUploadRoute, postApiV1TasksIdUploadRouteHandler)
  .openapi(postApiV1TasksSortRoute, postApiV1TasksSortRouteHandler)
  .openapi(getApiV1QuotesRoute, getApiV1QuotesRouteHandler)
  .openapi(postApiV1QuotesRoute, postApiV1QuotesRouteHandler)
  .openapi(getApiV1QuotesIdRoute, getApiV1QuotesIdRouteHandler)
  .openapi(putApiV1QuotesIdRoute, putApiV1QuotesIdRouteHandler)
  .openapi(deleteApiV1QuotesIdRoute, deleteApiV1QuotesIdRouteHandler)
  .openapi(getApiV1QuotesIdEditRoute, getApiV1QuotesIdEditRouteHandler)
  .openapi(getApiV1QuotesCreateRoute, getApiV1QuotesCreateRouteHandler)
  .openapi(postApiV1QuotesBulkRoute, postApiV1QuotesBulkRouteHandler)
  .openapi(getApiV1QuotesIdActionRoute, getApiV1QuotesIdActionRouteHandler)
  .openapi(getApiV1QuoteInvitationKeyDownloadRoute, getApiV1QuoteInvitationKeyDownloadRouteHandler)
  .openapi(postApiV1QuotesIdUploadRoute, postApiV1QuotesIdUploadRouteHandler)
  .openapi(getApiV1InvoicesRoute, getApiV1InvoicesRouteHandler)
  .openapi(postApiV1InvoicesRoute, postApiV1InvoicesRouteHandler)
  .openapi(getApiV1InvoicesIdRoute, getApiV1InvoicesIdRouteHandler)
  .openapi(putApiV1InvoicesIdRoute, putApiV1InvoicesIdRouteHandler)
  .openapi(deleteApiV1InvoicesIdRoute, deleteApiV1InvoicesIdRouteHandler)
  .openapi(getApiV1InvoicesIdEditRoute, getApiV1InvoicesIdEditRouteHandler)
  .openapi(getApiV1InvoicesCreateRoute, getApiV1InvoicesCreateRouteHandler)
  .openapi(postApiV1InvoicesBulkRoute, postApiV1InvoicesBulkRouteHandler)
  .openapi(getApiV1InvoicesIdActionRoute, getApiV1InvoicesIdActionRouteHandler)
  .openapi(
    getApiV1InvoiceInvitationKeyDownloadRoute,
    getApiV1InvoiceInvitationKeyDownloadRouteHandler,
  )
  .openapi(getApiV1InvoicesIdDeliveryNoteRoute, getApiV1InvoicesIdDeliveryNoteRouteHandler)
  .openapi(postApiV1InvoicesIdUploadRoute, postApiV1InvoicesIdUploadRouteHandler)
  .openapi(getApiV1ProjectsRoute, getApiV1ProjectsRouteHandler)
  .openapi(postApiV1ProjectsRoute, postApiV1ProjectsRouteHandler)
  .openapi(getApiV1ProjectsIdRoute, getApiV1ProjectsIdRouteHandler)
  .openapi(putApiV1ProjectsIdRoute, putApiV1ProjectsIdRouteHandler)
  .openapi(deleteApiV1ProjectsIdRoute, deleteApiV1ProjectsIdRouteHandler)
  .openapi(getApiV1ProjectsIdEditRoute, getApiV1ProjectsIdEditRouteHandler)
  .openapi(getApiV1ProjectsCreateRoute, getApiV1ProjectsCreateRouteHandler)
  .openapi(postApiV1ProjectsBulkRoute, postApiV1ProjectsBulkRouteHandler)
  .openapi(postApiV1ProjectsIdUploadRoute, postApiV1ProjectsIdUploadRouteHandler)
  .openapi(getApiV1VendorsRoute, getApiV1VendorsRouteHandler)
  .openapi(postApiV1VendorsRoute, postApiV1VendorsRouteHandler)
  .openapi(getApiV1VendorsIdRoute, getApiV1VendorsIdRouteHandler)
  .openapi(putApiV1VendorsIdRoute, putApiV1VendorsIdRouteHandler)
  .openapi(deleteApiV1VendorsIdRoute, deleteApiV1VendorsIdRouteHandler)
  .openapi(getApiV1VendorsIdEditRoute, getApiV1VendorsIdEditRouteHandler)
  .openapi(getApiV1VendorsCreateRoute, getApiV1VendorsCreateRouteHandler)
  .openapi(postApiV1VendorsBulkRoute, postApiV1VendorsBulkRouteHandler)
  .openapi(postApiV1VendorsIdUploadRoute, postApiV1VendorsIdUploadRouteHandler)
  .openapi(getApiV1PaymentsRoute, getApiV1PaymentsRouteHandler)
  .openapi(postApiV1PaymentsRoute, postApiV1PaymentsRouteHandler)
  .openapi(getApiV1PaymentsIdRoute, getApiV1PaymentsIdRouteHandler)
  .openapi(putApiV1PaymentsIdRoute, putApiV1PaymentsIdRouteHandler)
  .openapi(deleteApiV1PaymentsIdRoute, deleteApiV1PaymentsIdRouteHandler)
  .openapi(getApiV1PaymentsIdEditRoute, getApiV1PaymentsIdEditRouteHandler)
  .openapi(getApiV1PaymentsCreateRoute, getApiV1PaymentsCreateRouteHandler)
  .openapi(postApiV1PaymentsRefundRoute, postApiV1PaymentsRefundRouteHandler)
  .openapi(postApiV1PaymentsBulkRoute, postApiV1PaymentsBulkRouteHandler)
  .openapi(getApiV1PaymentsIdActionRoute, getApiV1PaymentsIdActionRouteHandler)
  .openapi(postApiV1PaymentsIdUploadRoute, postApiV1PaymentsIdUploadRouteHandler)
  .openapi(getApiV1ClientsRoute, getApiV1ClientsRouteHandler)
  .openapi(postApiV1ClientsRoute, postApiV1ClientsRouteHandler)
  .openapi(getApiV1ClientsIdRoute, getApiV1ClientsIdRouteHandler)
  .openapi(putApiV1ClientsIdRoute, putApiV1ClientsIdRouteHandler)
  .openapi(deleteApiV1ClientsIdRoute, deleteApiV1ClientsIdRouteHandler)
  .openapi(getApiV1ClientsIdEditRoute, getApiV1ClientsIdEditRouteHandler)
  .openapi(getApiV1ClientsCreateRoute, getApiV1ClientsCreateRouteHandler)
  .openapi(postApiV1ClientsBulkRoute, postApiV1ClientsBulkRouteHandler)
  .openapi(postApiV1ClientsIdUploadRoute, postApiV1ClientsIdUploadRouteHandler)
  .openapi(postApiV1ClientsIdPurgeRoute, postApiV1ClientsIdPurgeRouteHandler)
  .openapi(
    postApiV1ClientsIdMergeableClientHashedIdMergeRoute,
    postApiV1ClientsIdMergeableClientHashedIdMergeRouteHandler,
  )
  .openapi(postApiV1ClientStatementRoute, postApiV1ClientStatementRouteHandler)
  .openapi(postApiV1ReactivateEmailBounceIdRoute, postApiV1ReactivateEmailBounceIdRouteHandler)
  .openapi(
    postApiV1ClientsClientUpdateTaxDataRoute,
    postApiV1ClientsClientUpdateTaxDataRouteHandler,
  )
  .openapi(getApiV1PurchaseOrdersRoute, getApiV1PurchaseOrdersRouteHandler)
  .openapi(postApiV1PurchaseOrdersRoute, postApiV1PurchaseOrdersRouteHandler)
  .openapi(getApiV1PurchaseOrdersIdRoute, getApiV1PurchaseOrdersIdRouteHandler)
  .openapi(putApiV1PurchaseOrderIdRoute, putApiV1PurchaseOrderIdRouteHandler)
  .openapi(deleteApiV1PurchaseOrderIdRoute, deleteApiV1PurchaseOrderIdRouteHandler)
  .openapi(getApiV1PurchaseOrdersIdEditRoute, getApiV1PurchaseOrdersIdEditRouteHandler)
  .openapi(getApiV1PurchaseOrdersCreateRoute, getApiV1PurchaseOrdersCreateRouteHandler)
  .openapi(postApiV1PurchaseOrdersBulkRoute, postApiV1PurchaseOrdersBulkRouteHandler)
  .openapi(getApiV1PurchaseOrdersIdActionRoute, getApiV1PurchaseOrdersIdActionRouteHandler)
  .openapi(postApiV1PurchaseOrdersIdUploadRoute, postApiV1PurchaseOrdersIdUploadRouteHandler)
  .openapi(
    getApiV1PurchaseOrderInvitationKeyDownloadRoute,
    getApiV1PurchaseOrderInvitationKeyDownloadRouteHandler,
  )
  .openapi(getApiV1ProductsRoute, getApiV1ProductsRouteHandler)
  .openapi(postApiV1ProductsRoute, postApiV1ProductsRouteHandler)
  .openapi(getApiV1ProductsIdRoute, getApiV1ProductsIdRouteHandler)
  .openapi(putApiV1ProductsIdRoute, putApiV1ProductsIdRouteHandler)
  .openapi(deleteApiV1ProductsIdRoute, deleteApiV1ProductsIdRouteHandler)
  .openapi(getApiV1ProductsIdEditRoute, getApiV1ProductsIdEditRouteHandler)
  .openapi(getApiV1ProductsCreateRoute, getApiV1ProductsCreateRouteHandler)
  .openapi(postApiV1ProductsBulkRoute, postApiV1ProductsBulkRouteHandler)
  .openapi(postApiV1ProductsIdUploadRoute, postApiV1ProductsIdUploadRouteHandler)

export default app
