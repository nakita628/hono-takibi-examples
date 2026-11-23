import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingCustomersInvoicesInvoiceIdRoute,
  deleteAccountingCustomersPaymentsPaymentIdRoute,
  deleteAccountingProvidersInvoicesInvoiceIdRoute,
  deleteAccountingProvidersPaymentsPaymentIdRoute,
  deleteBrowserViewsViewIdColumnsColumnNameRoute,
  deleteBrowserViewsViewIdRoute,
  deleteCustomersCustomerIdRoute,
  deleteCustomersPersonsPersonIdRoute,
  deleteCustomersPriceListsPriceListIdRoute,
  deleteProjectsProjectIdFinancePayablesPayableIdRoute,
  deleteProjectsProjectIdFinanceReceivablesReceivableIdRoute,
  deleteProjectsProjectIdRoute,
  deleteProvidersPersonsPersonIdRoute,
  deleteProvidersPriceListsPriceListIdRoute,
  deleteProvidersProviderIdRoute,
  deleteQuotesQuoteIdFinancePayablesPayableIdRoute,
  deleteQuotesQuoteIdFinanceReceivablesReceivableIdRoute,
  deleteQuotesQuoteIdRoute,
  deleteReportsReportIdRoute,
  deleteSubscriptionSubscriptionIdRoute,
  deleteTasksTaskIdRoute,
  deleteV2ProjectsProjectIdFinancePayablesPayableIdRoute,
  deleteV2ProjectsProjectIdFinanceReceivablesReceivableIdRoute,
  deleteV2QuotesQuoteIdFinancePayablesPayableIdRoute,
  deleteV2QuotesQuoteIdFinanceReceivablesReceivableIdRoute,
  getAccountingCustomersInvoicesIdsRoute,
  getAccountingCustomersInvoicesInvoiceIdDatesRoute,
  getAccountingCustomersInvoicesInvoiceIdDocumentRoute,
  getAccountingCustomersInvoicesInvoiceIdPaymentsRoute,
  getAccountingCustomersInvoicesInvoiceIdPaymentTermsRoute,
  getAccountingCustomersInvoicesInvoiceIdRoute,
  getAccountingCustomersInvoicesRoute,
  getAccountingProvidersInvoicesIdsRoute,
  getAccountingProvidersInvoicesInvoiceIdDocumentRoute,
  getAccountingProvidersInvoicesInvoiceIdPaymentsRoute,
  getAccountingProvidersInvoicesInvoiceIdRoute,
  getAccountingProvidersInvoicesRoute,
  getBrowserCsvRoute,
  getBrowserRoute,
  getBrowserViewsDetailsForClassNameRoute,
  getBrowserViewsDetailsForClassNameViewIdRoute,
  getBrowserViewsForClassNameRoute,
  getBrowserViewsViewIdColumnsColumnNameSettingsRoute,
  getBrowserViewsViewIdColumnsRoute,
  getBrowserViewsViewIdFilterRoute,
  getBrowserViewsViewIdOrderRoute,
  getBrowserViewsViewIdPermissionsRoute,
  getBrowserViewsViewIdRoute,
  getBrowserViewsViewIdSettingsLocalRoute,
  getBrowserViewsViewIdSettingsRoute,
  getCustomersCustomerIdAddressRoute,
  getCustomersCustomerIdCategoriesRoute,
  getCustomersCustomerIdContactRoute,
  getCustomersCustomerIdCorrespondenceAddressRoute,
  getCustomersCustomerIdCustomFieldsCustomFieldKeyRoute,
  getCustomersCustomerIdCustomFieldsRoute,
  getCustomersCustomerIdIndustriesRoute,
  getCustomersCustomerIdRoute,
  getCustomersIdsRoute,
  getCustomersPersonsIdsRoute,
  getCustomersPersonsPersonIdContactRoute,
  getCustomersPersonsPersonIdCustomFieldsRoute,
  getCustomersPersonsPersonIdRoute,
  getCustomersRoute,
  getDictionariesActiveRoute,
  getDictionariesAllRoute,
  getDictionariesCurrencyIsoCodeExchangeRateRoute,
  getDictionariesTypeActiveRoute,
  getDictionariesTypeAllRoute,
  getDictionariesTypeIdRoute,
  getJobsJobIdFilesFileIdRoute,
  getJobsJobIdFilesRoute,
  getJobsJobIdRoute,
  getLicenseRoute,
  getProjectsFilesFileIdDownloadRoute,
  getProjectsIdsRoute,
  getProjectsProjectIdContactsRoute,
  getProjectsProjectIdCustomFieldsRoute,
  getProjectsProjectIdDatesRoute,
  getProjectsProjectIdFinanceRoute,
  getProjectsProjectIdInstructionsRoute,
  getProjectsProjectIdRoute,
  getProvidersIdsRoute,
  getProvidersPersonsIdsRoute,
  getProvidersPersonsPersonIdContactRoute,
  getProvidersPersonsPersonIdCustomFieldsRoute,
  getProvidersPersonsPersonIdRoute,
  getProvidersProviderIdAddressRoute,
  getProvidersProviderIdCompetenciesRoute,
  getProvidersProviderIdContactRoute,
  getProvidersProviderIdCorrespondenceAddressRoute,
  getProvidersProviderIdCustomFieldsRoute,
  getProvidersProviderIdRoute,
  getQuotesIdsRoute,
  getQuotesQuoteIdCustomFieldsRoute,
  getQuotesQuoteIdDatesRoute,
  getQuotesQuoteIdFinanceRoute,
  getQuotesQuoteIdInstructionsRoute,
  getQuotesQuoteIdRoute,
  getReportsReportIdResultCsvRoute,
  getReportsReportIdResultPrinterFriendlyRoute,
  getServicesActiveRoute,
  getServicesAllRoute,
  getSubscriptionRoute,
  getSubscriptionSupportsRoute,
  getTasksTaskIdContactsRoute,
  getTasksTaskIdCustomFieldsRoute,
  getTasksTaskIdDatesRoute,
  getTasksTaskIdFilesRoute,
  getTasksTaskIdInstructionsRoute,
  getTasksTaskIdProgressRoute,
  getUsersMeRoute,
  getUsersMeTimeZoneRoute,
  getUsersRoute,
  getUsersUserIdCustomFieldsCustomFieldKeyRoute,
  getUsersUserIdCustomFieldsRoute,
  getUsersUserIdRoute,
  getV2JobsForExternalIdRoute,
  getV2JobsJobIdFilesDeliveredRoute,
  getV2JobsJobIdFilesSharedReferenceFilesRoute,
  getV2JobsJobIdFilesSharedWorkFilesRoute,
  getV2JobsJobIdRoute,
  getV2ProjectsFilesFileIdDownloadFileNameRoute,
  getV2ProjectsFilesFileIdRoute,
  getV2ProjectsForExternalIdExternalProjectIdRoute,
  getV2ProjectsProjectIdCatToolProjectRoute,
  getV2ProjectsProjectIdClientContactsRoute,
  getV2ProjectsProjectIdCustomFieldsRoute,
  getV2ProjectsProjectIdFilesDeliverableRoute,
  getV2ProjectsProjectIdFilesRoute,
  getV2ProjectsProjectIdFinanceRoute,
  getV2ProjectsProjectIdJobsRoute,
  getV2ProjectsProjectIdProcessRoute,
  getV2ProjectsProjectIdRoute,
  getV2QuotesFilesFileIdDownloadFileNameRoute,
  getV2QuotesFilesFileIdRoute,
  getV2QuotesQuoteIdClientContactsRoute,
  getV2QuotesQuoteIdCustomFieldsRoute,
  getV2QuotesQuoteIdFilesRoute,
  getV2QuotesQuoteIdFinanceRoute,
  getV2QuotesQuoteIdJobsRoute,
  getV2QuotesQuoteIdRoute,
  postAccountingCustomersInvoicesDocumentsRoute,
  postAccountingCustomersInvoicesInvoiceIdDuplicateProFormaRoute,
  postAccountingCustomersInvoicesInvoiceIdDuplicateRoute,
  postAccountingCustomersInvoicesInvoiceIdPaymentsRoute,
  postAccountingCustomersInvoicesInvoiceIdSendReminderRoute,
  postAccountingCustomersInvoicesRoute,
  postAccountingCustomersInvoicesSendRemindersRoute,
  postAccountingProvidersInvoicesInvoiceIdPaymentsRoute,
  postAccountingProvidersInvoicesInvoiceIdSendRoute,
  postAccountingProvidersInvoicesInvoiceIdStatusRoute,
  postAccountingProvidersInvoicesRoute,
  postBrowserViewsDetailsForClassNameViewIdRoute,
  postBrowserViewsForClassNameRoute,
  postCustomersPersonsAccessTokenRoute,
  postCustomersPersonsRoute,
  postCustomersRoute,
  postDictionariesCurrencyIsoCodeExchangeRateRoute,
  postFilesRoute,
  postJobsJobIdFilesOutputRoute,
  postLicenseRefreshRoute,
  postMacrosMacroIdRunRoute,
  postProjectsProjectIdFinancePayablesRoute,
  postProjectsProjectIdFinanceReceivablesRoute,
  postProjectsProjectIdLanguageCombinationsRoute,
  postProjectsProjectIdTasksRoute,
  postProjectsRoute,
  postProvidersPersonsPersonIdNotificationInvitationRoute,
  postProvidersProviderIdNotificationInvitationRoute,
  postQuotesQuoteIdConfirmationSendRoute,
  postQuotesQuoteIdFinancePayablesRoute,
  postQuotesQuoteIdFinanceReceivablesRoute,
  postQuotesQuoteIdLanguageCombinationsRoute,
  postQuotesQuoteIdStartRoute,
  postQuotesQuoteIdTasksRoute,
  postReportsExportXmlRoute,
  postReportsImportXmlRoute,
  postReportsReportIdDuplicateRoute,
  postSubscriptionRoute,
  postTasksTaskIdFilesInputRoute,
  postTasksTaskIdStartRoute,
  postV2JobsJobIdFilesAddExternalLinkRoute,
  postV2JobsJobIdFilesDeliveredAddLinkRoute,
  postV2JobsJobIdFilesDeliveredUploadRoute,
  postV2ProjectsFilesArchiveRoute,
  postV2ProjectsProjectIdAddJobRoute,
  postV2ProjectsProjectIdFilesAddExternalLinkRoute,
  postV2ProjectsProjectIdFilesAddLinkRoute,
  postV2ProjectsProjectIdFilesUploadRoute,
  postV2ProjectsProjectIdFinancePayablesRoute,
  postV2ProjectsProjectIdFinanceReceivablesRoute,
  postV2ProjectsRoute,
  postV2QuotesFilesArchiveRoute,
  postV2QuotesQuoteIdFilesUploadRoute,
  postV2QuotesQuoteIdFinancePayablesRoute,
  postV2QuotesQuoteIdFinanceReceivablesRoute,
  postV2QuotesRoute,
  putBrowserViewsViewIdColumnsColumnNameSettingsRoute,
  putBrowserViewsViewIdColumnsRoute,
  putBrowserViewsViewIdFilterFilterPropertyRoute,
  putBrowserViewsViewIdFilterRoute,
  putBrowserViewsViewIdOrderRoute,
  putBrowserViewsViewIdPermissionsRoute,
  putBrowserViewsViewIdRoute,
  putBrowserViewsViewIdSettingsLocalRoute,
  putBrowserViewsViewIdSettingsRoute,
  putCustomersCustomerIdAddressRoute,
  putCustomersCustomerIdCategoriesRoute,
  putCustomersCustomerIdContactRoute,
  putCustomersCustomerIdCorrespondenceAddressRoute,
  putCustomersCustomerIdCustomFieldsCustomFieldKeyRoute,
  putCustomersCustomerIdCustomFieldsRoute,
  putCustomersCustomerIdIndustriesRoute,
  putCustomersCustomerIdRoute,
  putCustomersPersonsPersonIdContactRoute,
  putCustomersPersonsPersonIdCustomFieldsRoute,
  putCustomersPersonsPersonIdRoute,
  putJobsJobIdDatesRoute,
  putJobsJobIdInstructionsRoute,
  putJobsJobIdStatusRoute,
  putJobsJobIdVendorRoute,
  putProjectsProjectIdContactsRoute,
  putProjectsProjectIdCustomFieldsRoute,
  putProjectsProjectIdDatesRoute,
  putProjectsProjectIdFinancePayablesPayableIdRoute,
  putProjectsProjectIdFinanceReceivablesReceivableIdRoute,
  putProjectsProjectIdInstructionsRoute,
  putQuotesQuoteIdCustomFieldsRoute,
  putQuotesQuoteIdFinancePayablesPayableIdRoute,
  putQuotesQuoteIdFinanceReceivablesReceivableIdRoute,
  putQuotesQuoteIdInstructionsRoute,
  putReportsReportIdPreferredRoute,
  putTasksTaskIdClientTaskPONumberRoute,
  putTasksTaskIdContactsRoute,
  putTasksTaskIdCustomFieldsRoute,
  putTasksTaskIdDatesRoute,
  putTasksTaskIdInstructionsRoute,
  putTasksTaskIdNameRoute,
  putUsersUserIdCustomFieldsCustomFieldKeyRoute,
  putUsersUserIdCustomFieldsRoute,
  putUsersUserIdPasswordRoute,
  putUsersUserIdRoute,
  putV2JobsJobIdDatesRoute,
  putV2JobsJobIdFilesDeliveredAddRoute,
  putV2JobsJobIdFilesSharedReferenceFilesShareRoute,
  putV2JobsJobIdFilesSharedWorkFilesShareRoute,
  putV2JobsJobIdFilesStopSharingRoute,
  putV2JobsJobIdInstructionsRoute,
  putV2JobsJobIdStatusRoute,
  putV2JobsJobIdVendorRoute,
  putV2ProjectsProjectIdClientContactsRoute,
  putV2ProjectsProjectIdClientDeadlineRoute,
  putV2ProjectsProjectIdClientNotesRoute,
  putV2ProjectsProjectIdClientReferenceNumberRoute,
  putV2ProjectsProjectIdCustomFieldsKeyRoute,
  putV2ProjectsProjectIdFilesAddRoute,
  putV2ProjectsProjectIdFinancePayablesPayableIdRoute,
  putV2ProjectsProjectIdFinanceReceivablesReceivableIdRoute,
  putV2ProjectsProjectIdInternalNotesRoute,
  putV2ProjectsProjectIdOrderDateRoute,
  putV2ProjectsProjectIdSourceLanguageRoute,
  putV2ProjectsProjectIdSpecializationRoute,
  putV2ProjectsProjectIdStatusRoute,
  putV2ProjectsProjectIdTargetLanguagesRoute,
  putV2ProjectsProjectIdVendorInstructionsRoute,
  putV2ProjectsProjectIdVolumeRoute,
  putV2QuotesQuoteIdBusinessDaysRoute,
  putV2QuotesQuoteIdClientContactsRoute,
  putV2QuotesQuoteIdClientNotesRoute,
  putV2QuotesQuoteIdClientReferenceNumberRoute,
  putV2QuotesQuoteIdCustomFieldsKeyRoute,
  putV2QuotesQuoteIdExpectedDeliveryDateRoute,
  putV2QuotesQuoteIdFilesAddRoute,
  putV2QuotesQuoteIdFinancePayablesPayableIdRoute,
  putV2QuotesQuoteIdFinanceReceivablesReceivableIdRoute,
  putV2QuotesQuoteIdInternalNotesRoute,
  putV2QuotesQuoteIdQuoteExpiryRoute,
  putV2QuotesQuoteIdSourceLanguageRoute,
  putV2QuotesQuoteIdSpecializationRoute,
  putV2QuotesQuoteIdStatusRoute,
  putV2QuotesQuoteIdTargetLanguagesRoute,
  putV2QuotesQuoteIdVendorInstructionsRoute,
  putV2QuotesQuoteIdVolumeRoute,
} from './routes'
import {
  deleteAccountingCustomersInvoicesInvoiceIdRouteHandler,
  deleteAccountingCustomersPaymentsPaymentIdRouteHandler,
  deleteAccountingProvidersInvoicesInvoiceIdRouteHandler,
  deleteAccountingProvidersPaymentsPaymentIdRouteHandler,
  deleteBrowserViewsViewIdColumnsColumnNameRouteHandler,
  deleteBrowserViewsViewIdRouteHandler,
  deleteCustomersCustomerIdRouteHandler,
  deleteCustomersPersonsPersonIdRouteHandler,
  deleteCustomersPriceListsPriceListIdRouteHandler,
  deleteProjectsProjectIdFinancePayablesPayableIdRouteHandler,
  deleteProjectsProjectIdFinanceReceivablesReceivableIdRouteHandler,
  deleteProjectsProjectIdRouteHandler,
  deleteProvidersPersonsPersonIdRouteHandler,
  deleteProvidersPriceListsPriceListIdRouteHandler,
  deleteProvidersProviderIdRouteHandler,
  deleteQuotesQuoteIdFinancePayablesPayableIdRouteHandler,
  deleteQuotesQuoteIdFinanceReceivablesReceivableIdRouteHandler,
  deleteQuotesQuoteIdRouteHandler,
  deleteReportsReportIdRouteHandler,
  deleteSubscriptionSubscriptionIdRouteHandler,
  deleteTasksTaskIdRouteHandler,
  deleteV2ProjectsProjectIdFinancePayablesPayableIdRouteHandler,
  deleteV2ProjectsProjectIdFinanceReceivablesReceivableIdRouteHandler,
  deleteV2QuotesQuoteIdFinancePayablesPayableIdRouteHandler,
  deleteV2QuotesQuoteIdFinanceReceivablesReceivableIdRouteHandler,
  getAccountingCustomersInvoicesIdsRouteHandler,
  getAccountingCustomersInvoicesInvoiceIdDatesRouteHandler,
  getAccountingCustomersInvoicesInvoiceIdDocumentRouteHandler,
  getAccountingCustomersInvoicesInvoiceIdPaymentsRouteHandler,
  getAccountingCustomersInvoicesInvoiceIdPaymentTermsRouteHandler,
  getAccountingCustomersInvoicesInvoiceIdRouteHandler,
  getAccountingCustomersInvoicesRouteHandler,
  getAccountingProvidersInvoicesIdsRouteHandler,
  getAccountingProvidersInvoicesInvoiceIdDocumentRouteHandler,
  getAccountingProvidersInvoicesInvoiceIdPaymentsRouteHandler,
  getAccountingProvidersInvoicesInvoiceIdRouteHandler,
  getAccountingProvidersInvoicesRouteHandler,
  getBrowserCsvRouteHandler,
  getBrowserRouteHandler,
  getBrowserViewsDetailsForClassNameRouteHandler,
  getBrowserViewsDetailsForClassNameViewIdRouteHandler,
  getBrowserViewsForClassNameRouteHandler,
  getBrowserViewsViewIdColumnsColumnNameSettingsRouteHandler,
  getBrowserViewsViewIdColumnsRouteHandler,
  getBrowserViewsViewIdFilterRouteHandler,
  getBrowserViewsViewIdOrderRouteHandler,
  getBrowserViewsViewIdPermissionsRouteHandler,
  getBrowserViewsViewIdRouteHandler,
  getBrowserViewsViewIdSettingsLocalRouteHandler,
  getBrowserViewsViewIdSettingsRouteHandler,
  getCustomersCustomerIdAddressRouteHandler,
  getCustomersCustomerIdCategoriesRouteHandler,
  getCustomersCustomerIdContactRouteHandler,
  getCustomersCustomerIdCorrespondenceAddressRouteHandler,
  getCustomersCustomerIdCustomFieldsCustomFieldKeyRouteHandler,
  getCustomersCustomerIdCustomFieldsRouteHandler,
  getCustomersCustomerIdIndustriesRouteHandler,
  getCustomersCustomerIdRouteHandler,
  getCustomersIdsRouteHandler,
  getCustomersPersonsIdsRouteHandler,
  getCustomersPersonsPersonIdContactRouteHandler,
  getCustomersPersonsPersonIdCustomFieldsRouteHandler,
  getCustomersPersonsPersonIdRouteHandler,
  getCustomersRouteHandler,
  getDictionariesActiveRouteHandler,
  getDictionariesAllRouteHandler,
  getDictionariesCurrencyIsoCodeExchangeRateRouteHandler,
  getDictionariesTypeActiveRouteHandler,
  getDictionariesTypeAllRouteHandler,
  getDictionariesTypeIdRouteHandler,
  getJobsJobIdFilesFileIdRouteHandler,
  getJobsJobIdFilesRouteHandler,
  getJobsJobIdRouteHandler,
  getLicenseRouteHandler,
  getProjectsFilesFileIdDownloadRouteHandler,
  getProjectsIdsRouteHandler,
  getProjectsProjectIdContactsRouteHandler,
  getProjectsProjectIdCustomFieldsRouteHandler,
  getProjectsProjectIdDatesRouteHandler,
  getProjectsProjectIdFinanceRouteHandler,
  getProjectsProjectIdInstructionsRouteHandler,
  getProjectsProjectIdRouteHandler,
  getProvidersIdsRouteHandler,
  getProvidersPersonsIdsRouteHandler,
  getProvidersPersonsPersonIdContactRouteHandler,
  getProvidersPersonsPersonIdCustomFieldsRouteHandler,
  getProvidersPersonsPersonIdRouteHandler,
  getProvidersProviderIdAddressRouteHandler,
  getProvidersProviderIdCompetenciesRouteHandler,
  getProvidersProviderIdContactRouteHandler,
  getProvidersProviderIdCorrespondenceAddressRouteHandler,
  getProvidersProviderIdCustomFieldsRouteHandler,
  getProvidersProviderIdRouteHandler,
  getQuotesIdsRouteHandler,
  getQuotesQuoteIdCustomFieldsRouteHandler,
  getQuotesQuoteIdDatesRouteHandler,
  getQuotesQuoteIdFinanceRouteHandler,
  getQuotesQuoteIdInstructionsRouteHandler,
  getQuotesQuoteIdRouteHandler,
  getReportsReportIdResultCsvRouteHandler,
  getReportsReportIdResultPrinterFriendlyRouteHandler,
  getServicesActiveRouteHandler,
  getServicesAllRouteHandler,
  getSubscriptionRouteHandler,
  getSubscriptionSupportsRouteHandler,
  getTasksTaskIdContactsRouteHandler,
  getTasksTaskIdCustomFieldsRouteHandler,
  getTasksTaskIdDatesRouteHandler,
  getTasksTaskIdFilesRouteHandler,
  getTasksTaskIdInstructionsRouteHandler,
  getTasksTaskIdProgressRouteHandler,
  getUsersMeRouteHandler,
  getUsersMeTimeZoneRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdCustomFieldsCustomFieldKeyRouteHandler,
  getUsersUserIdCustomFieldsRouteHandler,
  getUsersUserIdRouteHandler,
  getV2JobsForExternalIdRouteHandler,
  getV2JobsJobIdFilesDeliveredRouteHandler,
  getV2JobsJobIdFilesSharedReferenceFilesRouteHandler,
  getV2JobsJobIdFilesSharedWorkFilesRouteHandler,
  getV2JobsJobIdRouteHandler,
  getV2ProjectsFilesFileIdDownloadFileNameRouteHandler,
  getV2ProjectsFilesFileIdRouteHandler,
  getV2ProjectsForExternalIdExternalProjectIdRouteHandler,
  getV2ProjectsProjectIdCatToolProjectRouteHandler,
  getV2ProjectsProjectIdClientContactsRouteHandler,
  getV2ProjectsProjectIdCustomFieldsRouteHandler,
  getV2ProjectsProjectIdFilesDeliverableRouteHandler,
  getV2ProjectsProjectIdFilesRouteHandler,
  getV2ProjectsProjectIdFinanceRouteHandler,
  getV2ProjectsProjectIdJobsRouteHandler,
  getV2ProjectsProjectIdProcessRouteHandler,
  getV2ProjectsProjectIdRouteHandler,
  getV2QuotesFilesFileIdDownloadFileNameRouteHandler,
  getV2QuotesFilesFileIdRouteHandler,
  getV2QuotesQuoteIdClientContactsRouteHandler,
  getV2QuotesQuoteIdCustomFieldsRouteHandler,
  getV2QuotesQuoteIdFilesRouteHandler,
  getV2QuotesQuoteIdFinanceRouteHandler,
  getV2QuotesQuoteIdJobsRouteHandler,
  getV2QuotesQuoteIdRouteHandler,
  postAccountingCustomersInvoicesDocumentsRouteHandler,
  postAccountingCustomersInvoicesInvoiceIdDuplicateProFormaRouteHandler,
  postAccountingCustomersInvoicesInvoiceIdDuplicateRouteHandler,
  postAccountingCustomersInvoicesInvoiceIdPaymentsRouteHandler,
  postAccountingCustomersInvoicesInvoiceIdSendReminderRouteHandler,
  postAccountingCustomersInvoicesRouteHandler,
  postAccountingCustomersInvoicesSendRemindersRouteHandler,
  postAccountingProvidersInvoicesInvoiceIdPaymentsRouteHandler,
  postAccountingProvidersInvoicesInvoiceIdSendRouteHandler,
  postAccountingProvidersInvoicesInvoiceIdStatusRouteHandler,
  postAccountingProvidersInvoicesRouteHandler,
  postBrowserViewsDetailsForClassNameViewIdRouteHandler,
  postBrowserViewsForClassNameRouteHandler,
  postCustomersPersonsAccessTokenRouteHandler,
  postCustomersPersonsRouteHandler,
  postCustomersRouteHandler,
  postDictionariesCurrencyIsoCodeExchangeRateRouteHandler,
  postFilesRouteHandler,
  postJobsJobIdFilesOutputRouteHandler,
  postLicenseRefreshRouteHandler,
  postMacrosMacroIdRunRouteHandler,
  postProjectsProjectIdFinancePayablesRouteHandler,
  postProjectsProjectIdFinanceReceivablesRouteHandler,
  postProjectsProjectIdLanguageCombinationsRouteHandler,
  postProjectsProjectIdTasksRouteHandler,
  postProjectsRouteHandler,
  postProvidersPersonsPersonIdNotificationInvitationRouteHandler,
  postProvidersProviderIdNotificationInvitationRouteHandler,
  postQuotesQuoteIdConfirmationSendRouteHandler,
  postQuotesQuoteIdFinancePayablesRouteHandler,
  postQuotesQuoteIdFinanceReceivablesRouteHandler,
  postQuotesQuoteIdLanguageCombinationsRouteHandler,
  postQuotesQuoteIdStartRouteHandler,
  postQuotesQuoteIdTasksRouteHandler,
  postReportsExportXmlRouteHandler,
  postReportsImportXmlRouteHandler,
  postReportsReportIdDuplicateRouteHandler,
  postSubscriptionRouteHandler,
  postTasksTaskIdFilesInputRouteHandler,
  postTasksTaskIdStartRouteHandler,
  postV2JobsJobIdFilesAddExternalLinkRouteHandler,
  postV2JobsJobIdFilesDeliveredAddLinkRouteHandler,
  postV2JobsJobIdFilesDeliveredUploadRouteHandler,
  postV2ProjectsFilesArchiveRouteHandler,
  postV2ProjectsProjectIdAddJobRouteHandler,
  postV2ProjectsProjectIdFilesAddExternalLinkRouteHandler,
  postV2ProjectsProjectIdFilesAddLinkRouteHandler,
  postV2ProjectsProjectIdFilesUploadRouteHandler,
  postV2ProjectsProjectIdFinancePayablesRouteHandler,
  postV2ProjectsProjectIdFinanceReceivablesRouteHandler,
  postV2ProjectsRouteHandler,
  postV2QuotesFilesArchiveRouteHandler,
  postV2QuotesQuoteIdFilesUploadRouteHandler,
  postV2QuotesQuoteIdFinancePayablesRouteHandler,
  postV2QuotesQuoteIdFinanceReceivablesRouteHandler,
  postV2QuotesRouteHandler,
  putBrowserViewsViewIdColumnsColumnNameSettingsRouteHandler,
  putBrowserViewsViewIdColumnsRouteHandler,
  putBrowserViewsViewIdFilterFilterPropertyRouteHandler,
  putBrowserViewsViewIdFilterRouteHandler,
  putBrowserViewsViewIdOrderRouteHandler,
  putBrowserViewsViewIdPermissionsRouteHandler,
  putBrowserViewsViewIdRouteHandler,
  putBrowserViewsViewIdSettingsLocalRouteHandler,
  putBrowserViewsViewIdSettingsRouteHandler,
  putCustomersCustomerIdAddressRouteHandler,
  putCustomersCustomerIdCategoriesRouteHandler,
  putCustomersCustomerIdContactRouteHandler,
  putCustomersCustomerIdCorrespondenceAddressRouteHandler,
  putCustomersCustomerIdCustomFieldsCustomFieldKeyRouteHandler,
  putCustomersCustomerIdCustomFieldsRouteHandler,
  putCustomersCustomerIdIndustriesRouteHandler,
  putCustomersCustomerIdRouteHandler,
  putCustomersPersonsPersonIdContactRouteHandler,
  putCustomersPersonsPersonIdCustomFieldsRouteHandler,
  putCustomersPersonsPersonIdRouteHandler,
  putJobsJobIdDatesRouteHandler,
  putJobsJobIdInstructionsRouteHandler,
  putJobsJobIdStatusRouteHandler,
  putJobsJobIdVendorRouteHandler,
  putProjectsProjectIdContactsRouteHandler,
  putProjectsProjectIdCustomFieldsRouteHandler,
  putProjectsProjectIdDatesRouteHandler,
  putProjectsProjectIdFinancePayablesPayableIdRouteHandler,
  putProjectsProjectIdFinanceReceivablesReceivableIdRouteHandler,
  putProjectsProjectIdInstructionsRouteHandler,
  putQuotesQuoteIdCustomFieldsRouteHandler,
  putQuotesQuoteIdFinancePayablesPayableIdRouteHandler,
  putQuotesQuoteIdFinanceReceivablesReceivableIdRouteHandler,
  putQuotesQuoteIdInstructionsRouteHandler,
  putReportsReportIdPreferredRouteHandler,
  putTasksTaskIdClientTaskPONumberRouteHandler,
  putTasksTaskIdContactsRouteHandler,
  putTasksTaskIdCustomFieldsRouteHandler,
  putTasksTaskIdDatesRouteHandler,
  putTasksTaskIdInstructionsRouteHandler,
  putTasksTaskIdNameRouteHandler,
  putUsersUserIdCustomFieldsCustomFieldKeyRouteHandler,
  putUsersUserIdCustomFieldsRouteHandler,
  putUsersUserIdPasswordRouteHandler,
  putUsersUserIdRouteHandler,
  putV2JobsJobIdDatesRouteHandler,
  putV2JobsJobIdFilesDeliveredAddRouteHandler,
  putV2JobsJobIdFilesSharedReferenceFilesShareRouteHandler,
  putV2JobsJobIdFilesSharedWorkFilesShareRouteHandler,
  putV2JobsJobIdFilesStopSharingRouteHandler,
  putV2JobsJobIdInstructionsRouteHandler,
  putV2JobsJobIdStatusRouteHandler,
  putV2JobsJobIdVendorRouteHandler,
  putV2ProjectsProjectIdClientContactsRouteHandler,
  putV2ProjectsProjectIdClientDeadlineRouteHandler,
  putV2ProjectsProjectIdClientNotesRouteHandler,
  putV2ProjectsProjectIdClientReferenceNumberRouteHandler,
  putV2ProjectsProjectIdCustomFieldsKeyRouteHandler,
  putV2ProjectsProjectIdFilesAddRouteHandler,
  putV2ProjectsProjectIdFinancePayablesPayableIdRouteHandler,
  putV2ProjectsProjectIdFinanceReceivablesReceivableIdRouteHandler,
  putV2ProjectsProjectIdInternalNotesRouteHandler,
  putV2ProjectsProjectIdOrderDateRouteHandler,
  putV2ProjectsProjectIdSourceLanguageRouteHandler,
  putV2ProjectsProjectIdSpecializationRouteHandler,
  putV2ProjectsProjectIdStatusRouteHandler,
  putV2ProjectsProjectIdTargetLanguagesRouteHandler,
  putV2ProjectsProjectIdVendorInstructionsRouteHandler,
  putV2ProjectsProjectIdVolumeRouteHandler,
  putV2QuotesQuoteIdBusinessDaysRouteHandler,
  putV2QuotesQuoteIdClientContactsRouteHandler,
  putV2QuotesQuoteIdClientNotesRouteHandler,
  putV2QuotesQuoteIdClientReferenceNumberRouteHandler,
  putV2QuotesQuoteIdCustomFieldsKeyRouteHandler,
  putV2QuotesQuoteIdExpectedDeliveryDateRouteHandler,
  putV2QuotesQuoteIdFilesAddRouteHandler,
  putV2QuotesQuoteIdFinancePayablesPayableIdRouteHandler,
  putV2QuotesQuoteIdFinanceReceivablesReceivableIdRouteHandler,
  putV2QuotesQuoteIdInternalNotesRouteHandler,
  putV2QuotesQuoteIdQuoteExpiryRouteHandler,
  putV2QuotesQuoteIdSourceLanguageRouteHandler,
  putV2QuotesQuoteIdSpecializationRouteHandler,
  putV2QuotesQuoteIdStatusRouteHandler,
  putV2QuotesQuoteIdTargetLanguagesRouteHandler,
  putV2QuotesQuoteIdVendorInstructionsRouteHandler,
  putV2QuotesQuoteIdVolumeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountingCustomersInvoicesRoute, getAccountingCustomersInvoicesRouteHandler)
  .openapi(postAccountingCustomersInvoicesRoute, postAccountingCustomersInvoicesRouteHandler)
  .openapi(
    postAccountingCustomersInvoicesDocumentsRoute,
    postAccountingCustomersInvoicesDocumentsRouteHandler,
  )
  .openapi(getAccountingCustomersInvoicesIdsRoute, getAccountingCustomersInvoicesIdsRouteHandler)
  .openapi(
    postAccountingCustomersInvoicesSendRemindersRoute,
    postAccountingCustomersInvoicesSendRemindersRouteHandler,
  )
  .openapi(
    deleteAccountingCustomersInvoicesInvoiceIdRoute,
    deleteAccountingCustomersInvoicesInvoiceIdRouteHandler,
  )
  .openapi(
    getAccountingCustomersInvoicesInvoiceIdRoute,
    getAccountingCustomersInvoicesInvoiceIdRouteHandler,
  )
  .openapi(
    getAccountingCustomersInvoicesInvoiceIdDatesRoute,
    getAccountingCustomersInvoicesInvoiceIdDatesRouteHandler,
  )
  .openapi(
    getAccountingCustomersInvoicesInvoiceIdDocumentRoute,
    getAccountingCustomersInvoicesInvoiceIdDocumentRouteHandler,
  )
  .openapi(
    postAccountingCustomersInvoicesInvoiceIdDuplicateRoute,
    postAccountingCustomersInvoicesInvoiceIdDuplicateRouteHandler,
  )
  .openapi(
    postAccountingCustomersInvoicesInvoiceIdDuplicateProFormaRoute,
    postAccountingCustomersInvoicesInvoiceIdDuplicateProFormaRouteHandler,
  )
  .openapi(
    getAccountingCustomersInvoicesInvoiceIdPaymentTermsRoute,
    getAccountingCustomersInvoicesInvoiceIdPaymentTermsRouteHandler,
  )
  .openapi(
    getAccountingCustomersInvoicesInvoiceIdPaymentsRoute,
    getAccountingCustomersInvoicesInvoiceIdPaymentsRouteHandler,
  )
  .openapi(
    postAccountingCustomersInvoicesInvoiceIdPaymentsRoute,
    postAccountingCustomersInvoicesInvoiceIdPaymentsRouteHandler,
  )
  .openapi(
    postAccountingCustomersInvoicesInvoiceIdSendReminderRoute,
    postAccountingCustomersInvoicesInvoiceIdSendReminderRouteHandler,
  )
  .openapi(
    deleteAccountingCustomersPaymentsPaymentIdRoute,
    deleteAccountingCustomersPaymentsPaymentIdRouteHandler,
  )
  .openapi(getAccountingProvidersInvoicesRoute, getAccountingProvidersInvoicesRouteHandler)
  .openapi(postAccountingProvidersInvoicesRoute, postAccountingProvidersInvoicesRouteHandler)
  .openapi(getAccountingProvidersInvoicesIdsRoute, getAccountingProvidersInvoicesIdsRouteHandler)
  .openapi(
    deleteAccountingProvidersInvoicesInvoiceIdRoute,
    deleteAccountingProvidersInvoicesInvoiceIdRouteHandler,
  )
  .openapi(
    getAccountingProvidersInvoicesInvoiceIdRoute,
    getAccountingProvidersInvoicesInvoiceIdRouteHandler,
  )
  .openapi(
    getAccountingProvidersInvoicesInvoiceIdDocumentRoute,
    getAccountingProvidersInvoicesInvoiceIdDocumentRouteHandler,
  )
  .openapi(
    getAccountingProvidersInvoicesInvoiceIdPaymentsRoute,
    getAccountingProvidersInvoicesInvoiceIdPaymentsRouteHandler,
  )
  .openapi(
    postAccountingProvidersInvoicesInvoiceIdPaymentsRoute,
    postAccountingProvidersInvoicesInvoiceIdPaymentsRouteHandler,
  )
  .openapi(
    postAccountingProvidersInvoicesInvoiceIdSendRoute,
    postAccountingProvidersInvoicesInvoiceIdSendRouteHandler,
  )
  .openapi(
    postAccountingProvidersInvoicesInvoiceIdStatusRoute,
    postAccountingProvidersInvoicesInvoiceIdStatusRouteHandler,
  )
  .openapi(
    deleteAccountingProvidersPaymentsPaymentIdRoute,
    deleteAccountingProvidersPaymentsPaymentIdRouteHandler,
  )
  .openapi(getBrowserRoute, getBrowserRouteHandler)
  .openapi(getBrowserCsvRoute, getBrowserCsvRouteHandler)
  .openapi(getBrowserViewsDetailsForClassNameRoute, getBrowserViewsDetailsForClassNameRouteHandler)
  .openapi(
    getBrowserViewsDetailsForClassNameViewIdRoute,
    getBrowserViewsDetailsForClassNameViewIdRouteHandler,
  )
  .openapi(
    postBrowserViewsDetailsForClassNameViewIdRoute,
    postBrowserViewsDetailsForClassNameViewIdRouteHandler,
  )
  .openapi(getBrowserViewsForClassNameRoute, getBrowserViewsForClassNameRouteHandler)
  .openapi(postBrowserViewsForClassNameRoute, postBrowserViewsForClassNameRouteHandler)
  .openapi(deleteBrowserViewsViewIdRoute, deleteBrowserViewsViewIdRouteHandler)
  .openapi(getBrowserViewsViewIdRoute, getBrowserViewsViewIdRouteHandler)
  .openapi(putBrowserViewsViewIdRoute, putBrowserViewsViewIdRouteHandler)
  .openapi(getBrowserViewsViewIdColumnsRoute, getBrowserViewsViewIdColumnsRouteHandler)
  .openapi(putBrowserViewsViewIdColumnsRoute, putBrowserViewsViewIdColumnsRouteHandler)
  .openapi(
    deleteBrowserViewsViewIdColumnsColumnNameRoute,
    deleteBrowserViewsViewIdColumnsColumnNameRouteHandler,
  )
  .openapi(
    getBrowserViewsViewIdColumnsColumnNameSettingsRoute,
    getBrowserViewsViewIdColumnsColumnNameSettingsRouteHandler,
  )
  .openapi(
    putBrowserViewsViewIdColumnsColumnNameSettingsRoute,
    putBrowserViewsViewIdColumnsColumnNameSettingsRouteHandler,
  )
  .openapi(getBrowserViewsViewIdFilterRoute, getBrowserViewsViewIdFilterRouteHandler)
  .openapi(putBrowserViewsViewIdFilterRoute, putBrowserViewsViewIdFilterRouteHandler)
  .openapi(
    putBrowserViewsViewIdFilterFilterPropertyRoute,
    putBrowserViewsViewIdFilterFilterPropertyRouteHandler,
  )
  .openapi(getBrowserViewsViewIdOrderRoute, getBrowserViewsViewIdOrderRouteHandler)
  .openapi(putBrowserViewsViewIdOrderRoute, putBrowserViewsViewIdOrderRouteHandler)
  .openapi(getBrowserViewsViewIdPermissionsRoute, getBrowserViewsViewIdPermissionsRouteHandler)
  .openapi(putBrowserViewsViewIdPermissionsRoute, putBrowserViewsViewIdPermissionsRouteHandler)
  .openapi(getBrowserViewsViewIdSettingsRoute, getBrowserViewsViewIdSettingsRouteHandler)
  .openapi(putBrowserViewsViewIdSettingsRoute, putBrowserViewsViewIdSettingsRouteHandler)
  .openapi(getBrowserViewsViewIdSettingsLocalRoute, getBrowserViewsViewIdSettingsLocalRouteHandler)
  .openapi(putBrowserViewsViewIdSettingsLocalRoute, putBrowserViewsViewIdSettingsLocalRouteHandler)
  .openapi(getCustomersRoute, getCustomersRouteHandler)
  .openapi(postCustomersRoute, postCustomersRouteHandler)
  .openapi(getCustomersIdsRoute, getCustomersIdsRouteHandler)
  .openapi(postCustomersPersonsRoute, postCustomersPersonsRouteHandler)
  .openapi(postCustomersPersonsAccessTokenRoute, postCustomersPersonsAccessTokenRouteHandler)
  .openapi(getCustomersPersonsIdsRoute, getCustomersPersonsIdsRouteHandler)
  .openapi(deleteCustomersPersonsPersonIdRoute, deleteCustomersPersonsPersonIdRouteHandler)
  .openapi(getCustomersPersonsPersonIdRoute, getCustomersPersonsPersonIdRouteHandler)
  .openapi(putCustomersPersonsPersonIdRoute, putCustomersPersonsPersonIdRouteHandler)
  .openapi(getCustomersPersonsPersonIdContactRoute, getCustomersPersonsPersonIdContactRouteHandler)
  .openapi(putCustomersPersonsPersonIdContactRoute, putCustomersPersonsPersonIdContactRouteHandler)
  .openapi(
    getCustomersPersonsPersonIdCustomFieldsRoute,
    getCustomersPersonsPersonIdCustomFieldsRouteHandler,
  )
  .openapi(
    putCustomersPersonsPersonIdCustomFieldsRoute,
    putCustomersPersonsPersonIdCustomFieldsRouteHandler,
  )
  .openapi(
    deleteCustomersPriceListsPriceListIdRoute,
    deleteCustomersPriceListsPriceListIdRouteHandler,
  )
  .openapi(deleteCustomersCustomerIdRoute, deleteCustomersCustomerIdRouteHandler)
  .openapi(getCustomersCustomerIdRoute, getCustomersCustomerIdRouteHandler)
  .openapi(putCustomersCustomerIdRoute, putCustomersCustomerIdRouteHandler)
  .openapi(getCustomersCustomerIdAddressRoute, getCustomersCustomerIdAddressRouteHandler)
  .openapi(putCustomersCustomerIdAddressRoute, putCustomersCustomerIdAddressRouteHandler)
  .openapi(getCustomersCustomerIdCategoriesRoute, getCustomersCustomerIdCategoriesRouteHandler)
  .openapi(putCustomersCustomerIdCategoriesRoute, putCustomersCustomerIdCategoriesRouteHandler)
  .openapi(getCustomersCustomerIdContactRoute, getCustomersCustomerIdContactRouteHandler)
  .openapi(putCustomersCustomerIdContactRoute, putCustomersCustomerIdContactRouteHandler)
  .openapi(
    getCustomersCustomerIdCorrespondenceAddressRoute,
    getCustomersCustomerIdCorrespondenceAddressRouteHandler,
  )
  .openapi(
    putCustomersCustomerIdCorrespondenceAddressRoute,
    putCustomersCustomerIdCorrespondenceAddressRouteHandler,
  )
  .openapi(getCustomersCustomerIdCustomFieldsRoute, getCustomersCustomerIdCustomFieldsRouteHandler)
  .openapi(putCustomersCustomerIdCustomFieldsRoute, putCustomersCustomerIdCustomFieldsRouteHandler)
  .openapi(
    getCustomersCustomerIdCustomFieldsCustomFieldKeyRoute,
    getCustomersCustomerIdCustomFieldsCustomFieldKeyRouteHandler,
  )
  .openapi(
    putCustomersCustomerIdCustomFieldsCustomFieldKeyRoute,
    putCustomersCustomerIdCustomFieldsCustomFieldKeyRouteHandler,
  )
  .openapi(getCustomersCustomerIdIndustriesRoute, getCustomersCustomerIdIndustriesRouteHandler)
  .openapi(putCustomersCustomerIdIndustriesRoute, putCustomersCustomerIdIndustriesRouteHandler)
  .openapi(getDictionariesActiveRoute, getDictionariesActiveRouteHandler)
  .openapi(getDictionariesAllRoute, getDictionariesAllRouteHandler)
  .openapi(
    getDictionariesCurrencyIsoCodeExchangeRateRoute,
    getDictionariesCurrencyIsoCodeExchangeRateRouteHandler,
  )
  .openapi(
    postDictionariesCurrencyIsoCodeExchangeRateRoute,
    postDictionariesCurrencyIsoCodeExchangeRateRouteHandler,
  )
  .openapi(getDictionariesTypeActiveRoute, getDictionariesTypeActiveRouteHandler)
  .openapi(getDictionariesTypeAllRoute, getDictionariesTypeAllRouteHandler)
  .openapi(getDictionariesTypeIdRoute, getDictionariesTypeIdRouteHandler)
  .openapi(postFilesRoute, postFilesRouteHandler)
  .openapi(getJobsJobIdRoute, getJobsJobIdRouteHandler)
  .openapi(putJobsJobIdDatesRoute, putJobsJobIdDatesRouteHandler)
  .openapi(getJobsJobIdFilesRoute, getJobsJobIdFilesRouteHandler)
  .openapi(postJobsJobIdFilesOutputRoute, postJobsJobIdFilesOutputRouteHandler)
  .openapi(getJobsJobIdFilesFileIdRoute, getJobsJobIdFilesFileIdRouteHandler)
  .openapi(putJobsJobIdInstructionsRoute, putJobsJobIdInstructionsRouteHandler)
  .openapi(putJobsJobIdStatusRoute, putJobsJobIdStatusRouteHandler)
  .openapi(putJobsJobIdVendorRoute, putJobsJobIdVendorRouteHandler)
  .openapi(getLicenseRoute, getLicenseRouteHandler)
  .openapi(postLicenseRefreshRoute, postLicenseRefreshRouteHandler)
  .openapi(postMacrosMacroIdRunRoute, postMacrosMacroIdRunRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(getProjectsFilesFileIdDownloadRoute, getProjectsFilesFileIdDownloadRouteHandler)
  .openapi(getProjectsIdsRoute, getProjectsIdsRouteHandler)
  .openapi(deleteProjectsProjectIdRoute, deleteProjectsProjectIdRouteHandler)
  .openapi(getProjectsProjectIdRoute, getProjectsProjectIdRouteHandler)
  .openapi(getProjectsProjectIdContactsRoute, getProjectsProjectIdContactsRouteHandler)
  .openapi(putProjectsProjectIdContactsRoute, putProjectsProjectIdContactsRouteHandler)
  .openapi(getProjectsProjectIdCustomFieldsRoute, getProjectsProjectIdCustomFieldsRouteHandler)
  .openapi(putProjectsProjectIdCustomFieldsRoute, putProjectsProjectIdCustomFieldsRouteHandler)
  .openapi(getProjectsProjectIdDatesRoute, getProjectsProjectIdDatesRouteHandler)
  .openapi(putProjectsProjectIdDatesRoute, putProjectsProjectIdDatesRouteHandler)
  .openapi(getProjectsProjectIdFinanceRoute, getProjectsProjectIdFinanceRouteHandler)
  .openapi(
    postProjectsProjectIdFinancePayablesRoute,
    postProjectsProjectIdFinancePayablesRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdFinancePayablesPayableIdRoute,
    deleteProjectsProjectIdFinancePayablesPayableIdRouteHandler,
  )
  .openapi(
    putProjectsProjectIdFinancePayablesPayableIdRoute,
    putProjectsProjectIdFinancePayablesPayableIdRouteHandler,
  )
  .openapi(
    postProjectsProjectIdFinanceReceivablesRoute,
    postProjectsProjectIdFinanceReceivablesRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdFinanceReceivablesReceivableIdRoute,
    deleteProjectsProjectIdFinanceReceivablesReceivableIdRouteHandler,
  )
  .openapi(
    putProjectsProjectIdFinanceReceivablesReceivableIdRoute,
    putProjectsProjectIdFinanceReceivablesReceivableIdRouteHandler,
  )
  .openapi(getProjectsProjectIdInstructionsRoute, getProjectsProjectIdInstructionsRouteHandler)
  .openapi(putProjectsProjectIdInstructionsRoute, putProjectsProjectIdInstructionsRouteHandler)
  .openapi(
    postProjectsProjectIdLanguageCombinationsRoute,
    postProjectsProjectIdLanguageCombinationsRouteHandler,
  )
  .openapi(postProjectsProjectIdTasksRoute, postProjectsProjectIdTasksRouteHandler)
  .openapi(getProvidersIdsRoute, getProvidersIdsRouteHandler)
  .openapi(getProvidersPersonsIdsRoute, getProvidersPersonsIdsRouteHandler)
  .openapi(deleteProvidersPersonsPersonIdRoute, deleteProvidersPersonsPersonIdRouteHandler)
  .openapi(getProvidersPersonsPersonIdRoute, getProvidersPersonsPersonIdRouteHandler)
  .openapi(getProvidersPersonsPersonIdContactRoute, getProvidersPersonsPersonIdContactRouteHandler)
  .openapi(
    getProvidersPersonsPersonIdCustomFieldsRoute,
    getProvidersPersonsPersonIdCustomFieldsRouteHandler,
  )
  .openapi(
    postProvidersPersonsPersonIdNotificationInvitationRoute,
    postProvidersPersonsPersonIdNotificationInvitationRouteHandler,
  )
  .openapi(
    deleteProvidersPriceListsPriceListIdRoute,
    deleteProvidersPriceListsPriceListIdRouteHandler,
  )
  .openapi(deleteProvidersProviderIdRoute, deleteProvidersProviderIdRouteHandler)
  .openapi(getProvidersProviderIdRoute, getProvidersProviderIdRouteHandler)
  .openapi(getProvidersProviderIdAddressRoute, getProvidersProviderIdAddressRouteHandler)
  .openapi(getProvidersProviderIdCompetenciesRoute, getProvidersProviderIdCompetenciesRouteHandler)
  .openapi(getProvidersProviderIdContactRoute, getProvidersProviderIdContactRouteHandler)
  .openapi(
    getProvidersProviderIdCorrespondenceAddressRoute,
    getProvidersProviderIdCorrespondenceAddressRouteHandler,
  )
  .openapi(getProvidersProviderIdCustomFieldsRoute, getProvidersProviderIdCustomFieldsRouteHandler)
  .openapi(
    postProvidersProviderIdNotificationInvitationRoute,
    postProvidersProviderIdNotificationInvitationRouteHandler,
  )
  .openapi(getQuotesIdsRoute, getQuotesIdsRouteHandler)
  .openapi(deleteQuotesQuoteIdRoute, deleteQuotesQuoteIdRouteHandler)
  .openapi(getQuotesQuoteIdRoute, getQuotesQuoteIdRouteHandler)
  .openapi(postQuotesQuoteIdConfirmationSendRoute, postQuotesQuoteIdConfirmationSendRouteHandler)
  .openapi(getQuotesQuoteIdCustomFieldsRoute, getQuotesQuoteIdCustomFieldsRouteHandler)
  .openapi(putQuotesQuoteIdCustomFieldsRoute, putQuotesQuoteIdCustomFieldsRouteHandler)
  .openapi(getQuotesQuoteIdDatesRoute, getQuotesQuoteIdDatesRouteHandler)
  .openapi(getQuotesQuoteIdFinanceRoute, getQuotesQuoteIdFinanceRouteHandler)
  .openapi(postQuotesQuoteIdFinancePayablesRoute, postQuotesQuoteIdFinancePayablesRouteHandler)
  .openapi(
    deleteQuotesQuoteIdFinancePayablesPayableIdRoute,
    deleteQuotesQuoteIdFinancePayablesPayableIdRouteHandler,
  )
  .openapi(
    putQuotesQuoteIdFinancePayablesPayableIdRoute,
    putQuotesQuoteIdFinancePayablesPayableIdRouteHandler,
  )
  .openapi(
    postQuotesQuoteIdFinanceReceivablesRoute,
    postQuotesQuoteIdFinanceReceivablesRouteHandler,
  )
  .openapi(
    deleteQuotesQuoteIdFinanceReceivablesReceivableIdRoute,
    deleteQuotesQuoteIdFinanceReceivablesReceivableIdRouteHandler,
  )
  .openapi(
    putQuotesQuoteIdFinanceReceivablesReceivableIdRoute,
    putQuotesQuoteIdFinanceReceivablesReceivableIdRouteHandler,
  )
  .openapi(getQuotesQuoteIdInstructionsRoute, getQuotesQuoteIdInstructionsRouteHandler)
  .openapi(putQuotesQuoteIdInstructionsRoute, putQuotesQuoteIdInstructionsRouteHandler)
  .openapi(
    postQuotesQuoteIdLanguageCombinationsRoute,
    postQuotesQuoteIdLanguageCombinationsRouteHandler,
  )
  .openapi(postQuotesQuoteIdStartRoute, postQuotesQuoteIdStartRouteHandler)
  .openapi(postQuotesQuoteIdTasksRoute, postQuotesQuoteIdTasksRouteHandler)
  .openapi(postReportsExportXmlRoute, postReportsExportXmlRouteHandler)
  .openapi(postReportsImportXmlRoute, postReportsImportXmlRouteHandler)
  .openapi(deleteReportsReportIdRoute, deleteReportsReportIdRouteHandler)
  .openapi(postReportsReportIdDuplicateRoute, postReportsReportIdDuplicateRouteHandler)
  .openapi(putReportsReportIdPreferredRoute, putReportsReportIdPreferredRouteHandler)
  .openapi(getReportsReportIdResultCsvRoute, getReportsReportIdResultCsvRouteHandler)
  .openapi(
    getReportsReportIdResultPrinterFriendlyRoute,
    getReportsReportIdResultPrinterFriendlyRouteHandler,
  )
  .openapi(getServicesActiveRoute, getServicesActiveRouteHandler)
  .openapi(getServicesAllRoute, getServicesAllRouteHandler)
  .openapi(getSubscriptionRoute, getSubscriptionRouteHandler)
  .openapi(postSubscriptionRoute, postSubscriptionRouteHandler)
  .openapi(getSubscriptionSupportsRoute, getSubscriptionSupportsRouteHandler)
  .openapi(deleteSubscriptionSubscriptionIdRoute, deleteSubscriptionSubscriptionIdRouteHandler)
  .openapi(deleteTasksTaskIdRoute, deleteTasksTaskIdRouteHandler)
  .openapi(putTasksTaskIdClientTaskPONumberRoute, putTasksTaskIdClientTaskPONumberRouteHandler)
  .openapi(getTasksTaskIdContactsRoute, getTasksTaskIdContactsRouteHandler)
  .openapi(putTasksTaskIdContactsRoute, putTasksTaskIdContactsRouteHandler)
  .openapi(getTasksTaskIdCustomFieldsRoute, getTasksTaskIdCustomFieldsRouteHandler)
  .openapi(putTasksTaskIdCustomFieldsRoute, putTasksTaskIdCustomFieldsRouteHandler)
  .openapi(getTasksTaskIdDatesRoute, getTasksTaskIdDatesRouteHandler)
  .openapi(putTasksTaskIdDatesRoute, putTasksTaskIdDatesRouteHandler)
  .openapi(getTasksTaskIdFilesRoute, getTasksTaskIdFilesRouteHandler)
  .openapi(postTasksTaskIdFilesInputRoute, postTasksTaskIdFilesInputRouteHandler)
  .openapi(getTasksTaskIdInstructionsRoute, getTasksTaskIdInstructionsRouteHandler)
  .openapi(putTasksTaskIdInstructionsRoute, putTasksTaskIdInstructionsRouteHandler)
  .openapi(putTasksTaskIdNameRoute, putTasksTaskIdNameRouteHandler)
  .openapi(getTasksTaskIdProgressRoute, getTasksTaskIdProgressRouteHandler)
  .openapi(postTasksTaskIdStartRoute, postTasksTaskIdStartRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(getUsersMeTimeZoneRoute, getUsersMeTimeZoneRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(putUsersUserIdRoute, putUsersUserIdRouteHandler)
  .openapi(getUsersUserIdCustomFieldsRoute, getUsersUserIdCustomFieldsRouteHandler)
  .openapi(putUsersUserIdCustomFieldsRoute, putUsersUserIdCustomFieldsRouteHandler)
  .openapi(
    getUsersUserIdCustomFieldsCustomFieldKeyRoute,
    getUsersUserIdCustomFieldsCustomFieldKeyRouteHandler,
  )
  .openapi(
    putUsersUserIdCustomFieldsCustomFieldKeyRoute,
    putUsersUserIdCustomFieldsCustomFieldKeyRouteHandler,
  )
  .openapi(putUsersUserIdPasswordRoute, putUsersUserIdPasswordRouteHandler)
  .openapi(getV2JobsForExternalIdRoute, getV2JobsForExternalIdRouteHandler)
  .openapi(getV2JobsJobIdRoute, getV2JobsJobIdRouteHandler)
  .openapi(putV2JobsJobIdDatesRoute, putV2JobsJobIdDatesRouteHandler)
  .openapi(
    postV2JobsJobIdFilesAddExternalLinkRoute,
    postV2JobsJobIdFilesAddExternalLinkRouteHandler,
  )
  .openapi(getV2JobsJobIdFilesDeliveredRoute, getV2JobsJobIdFilesDeliveredRouteHandler)
  .openapi(putV2JobsJobIdFilesDeliveredAddRoute, putV2JobsJobIdFilesDeliveredAddRouteHandler)
  .openapi(
    postV2JobsJobIdFilesDeliveredAddLinkRoute,
    postV2JobsJobIdFilesDeliveredAddLinkRouteHandler,
  )
  .openapi(
    postV2JobsJobIdFilesDeliveredUploadRoute,
    postV2JobsJobIdFilesDeliveredUploadRouteHandler,
  )
  .openapi(
    getV2JobsJobIdFilesSharedReferenceFilesRoute,
    getV2JobsJobIdFilesSharedReferenceFilesRouteHandler,
  )
  .openapi(
    putV2JobsJobIdFilesSharedReferenceFilesShareRoute,
    putV2JobsJobIdFilesSharedReferenceFilesShareRouteHandler,
  )
  .openapi(getV2JobsJobIdFilesSharedWorkFilesRoute, getV2JobsJobIdFilesSharedWorkFilesRouteHandler)
  .openapi(
    putV2JobsJobIdFilesSharedWorkFilesShareRoute,
    putV2JobsJobIdFilesSharedWorkFilesShareRouteHandler,
  )
  .openapi(putV2JobsJobIdFilesStopSharingRoute, putV2JobsJobIdFilesStopSharingRouteHandler)
  .openapi(putV2JobsJobIdInstructionsRoute, putV2JobsJobIdInstructionsRouteHandler)
  .openapi(putV2JobsJobIdStatusRoute, putV2JobsJobIdStatusRouteHandler)
  .openapi(putV2JobsJobIdVendorRoute, putV2JobsJobIdVendorRouteHandler)
  .openapi(postV2ProjectsRoute, postV2ProjectsRouteHandler)
  .openapi(postV2ProjectsFilesArchiveRoute, postV2ProjectsFilesArchiveRouteHandler)
  .openapi(getV2ProjectsFilesFileIdRoute, getV2ProjectsFilesFileIdRouteHandler)
  .openapi(
    getV2ProjectsFilesFileIdDownloadFileNameRoute,
    getV2ProjectsFilesFileIdDownloadFileNameRouteHandler,
  )
  .openapi(
    getV2ProjectsForExternalIdExternalProjectIdRoute,
    getV2ProjectsForExternalIdExternalProjectIdRouteHandler,
  )
  .openapi(getV2ProjectsProjectIdRoute, getV2ProjectsProjectIdRouteHandler)
  .openapi(postV2ProjectsProjectIdAddJobRoute, postV2ProjectsProjectIdAddJobRouteHandler)
  .openapi(
    getV2ProjectsProjectIdCatToolProjectRoute,
    getV2ProjectsProjectIdCatToolProjectRouteHandler,
  )
  .openapi(
    getV2ProjectsProjectIdClientContactsRoute,
    getV2ProjectsProjectIdClientContactsRouteHandler,
  )
  .openapi(
    putV2ProjectsProjectIdClientContactsRoute,
    putV2ProjectsProjectIdClientContactsRouteHandler,
  )
  .openapi(
    putV2ProjectsProjectIdClientDeadlineRoute,
    putV2ProjectsProjectIdClientDeadlineRouteHandler,
  )
  .openapi(putV2ProjectsProjectIdClientNotesRoute, putV2ProjectsProjectIdClientNotesRouteHandler)
  .openapi(
    putV2ProjectsProjectIdClientReferenceNumberRoute,
    putV2ProjectsProjectIdClientReferenceNumberRouteHandler,
  )
  .openapi(getV2ProjectsProjectIdCustomFieldsRoute, getV2ProjectsProjectIdCustomFieldsRouteHandler)
  .openapi(
    putV2ProjectsProjectIdCustomFieldsKeyRoute,
    putV2ProjectsProjectIdCustomFieldsKeyRouteHandler,
  )
  .openapi(getV2ProjectsProjectIdFilesRoute, getV2ProjectsProjectIdFilesRouteHandler)
  .openapi(putV2ProjectsProjectIdFilesAddRoute, putV2ProjectsProjectIdFilesAddRouteHandler)
  .openapi(
    postV2ProjectsProjectIdFilesAddExternalLinkRoute,
    postV2ProjectsProjectIdFilesAddExternalLinkRouteHandler,
  )
  .openapi(
    postV2ProjectsProjectIdFilesAddLinkRoute,
    postV2ProjectsProjectIdFilesAddLinkRouteHandler,
  )
  .openapi(
    getV2ProjectsProjectIdFilesDeliverableRoute,
    getV2ProjectsProjectIdFilesDeliverableRouteHandler,
  )
  .openapi(postV2ProjectsProjectIdFilesUploadRoute, postV2ProjectsProjectIdFilesUploadRouteHandler)
  .openapi(getV2ProjectsProjectIdFinanceRoute, getV2ProjectsProjectIdFinanceRouteHandler)
  .openapi(
    postV2ProjectsProjectIdFinancePayablesRoute,
    postV2ProjectsProjectIdFinancePayablesRouteHandler,
  )
  .openapi(
    deleteV2ProjectsProjectIdFinancePayablesPayableIdRoute,
    deleteV2ProjectsProjectIdFinancePayablesPayableIdRouteHandler,
  )
  .openapi(
    putV2ProjectsProjectIdFinancePayablesPayableIdRoute,
    putV2ProjectsProjectIdFinancePayablesPayableIdRouteHandler,
  )
  .openapi(
    postV2ProjectsProjectIdFinanceReceivablesRoute,
    postV2ProjectsProjectIdFinanceReceivablesRouteHandler,
  )
  .openapi(
    deleteV2ProjectsProjectIdFinanceReceivablesReceivableIdRoute,
    deleteV2ProjectsProjectIdFinanceReceivablesReceivableIdRouteHandler,
  )
  .openapi(
    putV2ProjectsProjectIdFinanceReceivablesReceivableIdRoute,
    putV2ProjectsProjectIdFinanceReceivablesReceivableIdRouteHandler,
  )
  .openapi(
    putV2ProjectsProjectIdInternalNotesRoute,
    putV2ProjectsProjectIdInternalNotesRouteHandler,
  )
  .openapi(getV2ProjectsProjectIdJobsRoute, getV2ProjectsProjectIdJobsRouteHandler)
  .openapi(putV2ProjectsProjectIdOrderDateRoute, putV2ProjectsProjectIdOrderDateRouteHandler)
  .openapi(getV2ProjectsProjectIdProcessRoute, getV2ProjectsProjectIdProcessRouteHandler)
  .openapi(
    putV2ProjectsProjectIdSourceLanguageRoute,
    putV2ProjectsProjectIdSourceLanguageRouteHandler,
  )
  .openapi(
    putV2ProjectsProjectIdSpecializationRoute,
    putV2ProjectsProjectIdSpecializationRouteHandler,
  )
  .openapi(putV2ProjectsProjectIdStatusRoute, putV2ProjectsProjectIdStatusRouteHandler)
  .openapi(
    putV2ProjectsProjectIdTargetLanguagesRoute,
    putV2ProjectsProjectIdTargetLanguagesRouteHandler,
  )
  .openapi(
    putV2ProjectsProjectIdVendorInstructionsRoute,
    putV2ProjectsProjectIdVendorInstructionsRouteHandler,
  )
  .openapi(putV2ProjectsProjectIdVolumeRoute, putV2ProjectsProjectIdVolumeRouteHandler)
  .openapi(postV2QuotesRoute, postV2QuotesRouteHandler)
  .openapi(postV2QuotesFilesArchiveRoute, postV2QuotesFilesArchiveRouteHandler)
  .openapi(getV2QuotesFilesFileIdRoute, getV2QuotesFilesFileIdRouteHandler)
  .openapi(
    getV2QuotesFilesFileIdDownloadFileNameRoute,
    getV2QuotesFilesFileIdDownloadFileNameRouteHandler,
  )
  .openapi(getV2QuotesQuoteIdRoute, getV2QuotesQuoteIdRouteHandler)
  .openapi(putV2QuotesQuoteIdBusinessDaysRoute, putV2QuotesQuoteIdBusinessDaysRouteHandler)
  .openapi(getV2QuotesQuoteIdClientContactsRoute, getV2QuotesQuoteIdClientContactsRouteHandler)
  .openapi(putV2QuotesQuoteIdClientContactsRoute, putV2QuotesQuoteIdClientContactsRouteHandler)
  .openapi(putV2QuotesQuoteIdClientNotesRoute, putV2QuotesQuoteIdClientNotesRouteHandler)
  .openapi(
    putV2QuotesQuoteIdClientReferenceNumberRoute,
    putV2QuotesQuoteIdClientReferenceNumberRouteHandler,
  )
  .openapi(getV2QuotesQuoteIdCustomFieldsRoute, getV2QuotesQuoteIdCustomFieldsRouteHandler)
  .openapi(putV2QuotesQuoteIdCustomFieldsKeyRoute, putV2QuotesQuoteIdCustomFieldsKeyRouteHandler)
  .openapi(
    putV2QuotesQuoteIdExpectedDeliveryDateRoute,
    putV2QuotesQuoteIdExpectedDeliveryDateRouteHandler,
  )
  .openapi(getV2QuotesQuoteIdFilesRoute, getV2QuotesQuoteIdFilesRouteHandler)
  .openapi(putV2QuotesQuoteIdFilesAddRoute, putV2QuotesQuoteIdFilesAddRouteHandler)
  .openapi(postV2QuotesQuoteIdFilesUploadRoute, postV2QuotesQuoteIdFilesUploadRouteHandler)
  .openapi(getV2QuotesQuoteIdFinanceRoute, getV2QuotesQuoteIdFinanceRouteHandler)
  .openapi(postV2QuotesQuoteIdFinancePayablesRoute, postV2QuotesQuoteIdFinancePayablesRouteHandler)
  .openapi(
    deleteV2QuotesQuoteIdFinancePayablesPayableIdRoute,
    deleteV2QuotesQuoteIdFinancePayablesPayableIdRouteHandler,
  )
  .openapi(
    putV2QuotesQuoteIdFinancePayablesPayableIdRoute,
    putV2QuotesQuoteIdFinancePayablesPayableIdRouteHandler,
  )
  .openapi(
    postV2QuotesQuoteIdFinanceReceivablesRoute,
    postV2QuotesQuoteIdFinanceReceivablesRouteHandler,
  )
  .openapi(
    deleteV2QuotesQuoteIdFinanceReceivablesReceivableIdRoute,
    deleteV2QuotesQuoteIdFinanceReceivablesReceivableIdRouteHandler,
  )
  .openapi(
    putV2QuotesQuoteIdFinanceReceivablesReceivableIdRoute,
    putV2QuotesQuoteIdFinanceReceivablesReceivableIdRouteHandler,
  )
  .openapi(putV2QuotesQuoteIdInternalNotesRoute, putV2QuotesQuoteIdInternalNotesRouteHandler)
  .openapi(getV2QuotesQuoteIdJobsRoute, getV2QuotesQuoteIdJobsRouteHandler)
  .openapi(putV2QuotesQuoteIdQuoteExpiryRoute, putV2QuotesQuoteIdQuoteExpiryRouteHandler)
  .openapi(putV2QuotesQuoteIdSourceLanguageRoute, putV2QuotesQuoteIdSourceLanguageRouteHandler)
  .openapi(putV2QuotesQuoteIdSpecializationRoute, putV2QuotesQuoteIdSpecializationRouteHandler)
  .openapi(putV2QuotesQuoteIdStatusRoute, putV2QuotesQuoteIdStatusRouteHandler)
  .openapi(putV2QuotesQuoteIdTargetLanguagesRoute, putV2QuotesQuoteIdTargetLanguagesRouteHandler)
  .openapi(
    putV2QuotesQuoteIdVendorInstructionsRoute,
    putV2QuotesQuoteIdVendorInstructionsRouteHandler,
  )
  .openapi(putV2QuotesQuoteIdVolumeRoute, putV2QuotesQuoteIdVolumeRouteHandler)

export default app
