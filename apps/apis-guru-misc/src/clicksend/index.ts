import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAutomationsEmailReceiptRuleIdRoute,
  deleteAutomationsFaxInboundInboundRuleIdRoute,
  deleteAutomationsFaxReceiptsRuleIdRoute,
  deleteAutomationsSmsInboundInboundRuleIdRoute,
  deleteAutomationsSmsReceiptsReceiptRuleIdRoute,
  deleteAutomationsVoiceReceiptsReceiptRuleIdRoute,
  deleteEmailAddressesEmailAddressIdRoute,
  deleteEmailTemplatesTemplateIdRoute,
  deleteListsListIdContactsContactIdRoute,
  deleteListsListIdRoute,
  deletePostReturnAddressesReturnAddressIdRoute,
  deleteSmsEmailSmsEmailAddressIdRoute,
  deleteSmsEmailSmsStrippedStringsRuleIdRoute,
  deleteSmsTemplatesTemplateIdRoute,
  deleteSubaccountsSubaccountIdRoute,
  getAccountRoute,
  getAccountUsageYearMonthTypeRoute,
  getAutomationsEmailReceiptRoute,
  getAutomationsEmailReceiptRuleIdRoute,
  getAutomationsFaxInboundInboundRuleIdRoute,
  getAutomationsFaxInboundRoute,
  getAutomationsFaxReceiptsRoute,
  getAutomationsFaxReceiptsRuleIdRoute,
  getAutomationsSmsInboundInboundRuleIdRoute,
  getAutomationsSmsInboundRoute,
  getAutomationsSmsReceiptsReceiptRuleIdRoute,
  getAutomationsSmsReceiptsRoute,
  getAutomationsVoiceReceiptsReceiptRuleIdRoute,
  getAutomationsVoiceReceiptsRoute,
  getContactSuggestionsRoute,
  getCountriesRoute,
  getDeliveryIssuesRoute,
  getEmailAddressesEmailAddressIdRoute,
  getEmailAddressesRoute,
  getEmailCampaignsCampaignIdHistoryRoute,
  getEmailCampaignsEmailCampaignIdRoute,
  getEmailCampaignsRoute,
  getEmailHistoryExportFilenameFilenameRoute,
  getEmailHistoryRoute,
  getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesRoute,
  getEmailMasterTemplatesCategoriesCategoryIdRoute,
  getEmailMasterTemplatesCategoriesRoute,
  getEmailMasterTemplatesRoute,
  getEmailMasterTemplatesTemplateIdRoute,
  getEmailTemplatesRoute,
  getEmailTemplatesTemplateIdRoute,
  getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByRoute,
  getFaxHistoryExportFilenameFilenameRoute,
  getFaxReceiptsMessageIdRoute,
  getFaxReceiptsRoute,
  getListsListIdContactsContactIdRoute,
  getListsListIdContactsRoute,
  getListsListIdExportFilenameFilenameRoute,
  getListsListIdImportFieldsRoute,
  getListsListIdRoute,
  getListsRoute,
  getMmsHistoryExportFilenameFilenameRoute,
  getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToRoute,
  getMmsReceiptsMessageIdRoute,
  getMmsReceiptsRoute,
  getNumbersRoute,
  getNumbersSearchCountrySearch1SearchType2Route,
  getPostDirectMailCampaignsRoute,
  getPostDirectMailLocationsSearchCountryQQueryRoute,
  getPostLettersHistoryExportFilenameFilenameRoute,
  getPostLettersHistoryRoute,
  getPostPostcardsExportFilenameFilenameRoute,
  getPostPostcardsHistoryRoute,
  getPostReturnAddressesReturnAddressIdRoute,
  getPostReturnAddressesRoute,
  getPricingCountryCurrencyCurrencyRoute,
  getRechargeCreditCardRoute,
  getRechargePackagesCountryCountryRoute,
  getRechargeTransactionsRoute,
  getRechargeTransactionsTransactionIdRoute,
  getReferralAccountsRoute,
  getResellerAccountsClientUserIdRoute,
  getResellerAccountsRoute,
  getResellerRoute,
  getResellerSubdomainRoute,
  getSdkDownloadTypeRoute,
  getSearchContactsListsQQRoute,
  getSmsCampaignsCampaignIdLinkExportFilenameFilenameRoute,
  getSmsCampaignsCampaignIdLinkStatisticsRoute,
  getSmsCampaignsCampaignIdLinkTrackingRoute,
  getSmsCampaignsRoute,
  getSmsCampaignsSmsCampaignIdRoute,
  getSmsEmailSmsEmailAddressIdRoute,
  getSmsEmailSmsRoute,
  getSmsEmailSmsStrippedStringsRoute,
  getSmsEmailSmsStrippedStringsRuleIdRoute,
  getSmsHistoryDateFromDateFromDateToDateToRoute,
  getSmsHistoryExportFilenameFilenameRoute,
  getSmsInboundOutboundMessageIdRoute,
  getSmsInboundRoute,
  getSmsReceiptsMessageIdRoute,
  getSmsReceiptsRoute,
  getSmsTemplatesRoute,
  getStatisticsSmsRoute,
  getStatisticsVoiceRoute,
  getSubaccountsRoute,
  getSubaccountsSubaccountIdRoute,
  getTimezonesRoute,
  getVoiceHistoryDateFromDateFromDateToDateToRoute,
  getVoiceHistoryExportFilenameFilenameRoute,
  getVoiceLangRoute,
  getVoiceReceiptsMessageIdRoute,
  getVoiceReceiptsRoute,
  postAccountRoute,
  postAutomationsEmailReceiptRoute,
  postAutomationsFaxInboundRoute,
  postAutomationsFaxReceiptsRoute,
  postAutomationsSmsInboundIndexRoute,
  postAutomationsSmsReceiptsRoute,
  postAutomationsVoiceReceiptsRoute,
  postDeliveryIssuesRoute,
  postEmailAddressesRoute,
  postEmailCampaignsPriceRoute,
  postEmailCampaignsSendRoute,
  postEmailPriceRoute,
  postEmailReceiptsRoute,
  postEmailSendRoute,
  postEmailTemplatesImagesTemplateIdRoute,
  postEmailTemplatesRoute,
  postFaxPriceRoute,
  postFaxReceiptsRoute,
  postFaxSendRoute,
  postListsListIdContactsRoute,
  postListsListIdImportCsvPreviewRoute,
  postListsListIdImportRoute,
  postListsRoute,
  postMmsPriceRoute,
  postMmsSendRoute,
  postNumbersBuyDedicatedNumberRoute,
  postPostDirectMailCampaignsPriceRoute,
  postPostDirectMailCampaignsSendRoute,
  postPostLettersDetectAddressRoute,
  postPostLettersPriceRoute,
  postPostLettersSendRoute,
  postPostPostcardsPriceRoute,
  postPostPostcardsSendRoute,
  postPostReturnAddressesRoute,
  postResellerAccountsPublicRoute,
  postResellerAccountsRoute,
  postSmsCampaignsPriceRoute,
  postSmsCampaignsSendRoute,
  postSmsEmailSmsRoute,
  postSmsEmailSmsStrippedStringsRoute,
  postSmsInboundRoute,
  postSmsPriceRoute,
  postSmsReceiptsRoute,
  postSmsSendRoute,
  postSmsTemplatesRoute,
  postSubaccountsRoute,
  postUploadsConvertConvertRoute,
  postVoicePriceRoute,
  postVoiceReceiptsRoute,
  postVoiceSendRoute,
  putAccountRoute,
  putAccountVerifySendRoute,
  putAccountVerifyVerifyActivationTokenRoute,
  putAutomationsEmailReceiptRuleIdRoute,
  putAutomationsFaxInboundInboundRuleIdRoute,
  putAutomationsFaxReceiptsRuleIdRoute,
  putAutomationsSmsInboundInboundRuleIdRoute,
  putAutomationsSmsReceiptsReceiptRuleIdRoute,
  putAutomationsVoiceReceiptsReceiptRuleIdRoute,
  putEmailAddressVerifyEmailAddressIdSendRoute,
  putEmailAddressVerifyEmailAddressIdVerifyActivationTokenRoute,
  putEmailCampaignsEmailCampaignIdCancelRoute,
  putEmailCampaignsEmailCampaignIdRoute,
  putEmailTemplatesTemplateIdRoute,
  putFaxReceiptsReadRoute,
  putForgotPasswordRoute,
  putForgotPasswordVerifyRoute,
  putForgotUsernameRoute,
  putListsFromListIdContactsContactIdToListIdRoute,
  putListsListIdContactsContactIdRoute,
  putListsListIdRemoveDuplicatesRoute,
  putListsListIdRemoveOptedOutContactsOptOutListIdRoute,
  putListsListIdRoute,
  putMmsCancelAllRoute,
  putMmsMessageIdCancelRoute,
  putMmsReceiptsReadRoute,
  putPostReturnAddressesReturnAddressIdRoute,
  putRechargeCreditCardRoute,
  putRechargePurchasePackageIdRoute,
  putResellerAccountsClientUserIdRoute,
  putResellerRoute,
  putResellerTransferCreditRoute,
  putSmsCampaignsSmsCampaignIdCancelRoute,
  putSmsCampaignsSmsCampaignIdRoute,
  putSmsCancelAllRoute,
  putSmsEmailSmsEmailAddressIdRoute,
  putSmsEmailSmsStrippedStringsRuleIdRoute,
  putSmsInboundReadMessageIdRoute,
  putSmsInboundReadRoute,
  putSmsMessageIdCancelRoute,
  putSmsReceiptsReadRoute,
  putSmsTemplatesTemplateIdRoute,
  putSubaccountsSubaccountIdRegenApiKeyRoute,
  putSubaccountsSubaccountIdRoute,
  putVoiceCancelAllRoute,
  putVoiceMessageIdCancelRoute,
  putVoiceReceiptsReadDateBeforeDateBeforeRoute,
} from './routes'
import {
  deleteAutomationsEmailReceiptRuleIdRouteHandler,
  deleteAutomationsFaxInboundInboundRuleIdRouteHandler,
  deleteAutomationsFaxReceiptsRuleIdRouteHandler,
  deleteAutomationsSmsInboundInboundRuleIdRouteHandler,
  deleteAutomationsSmsReceiptsReceiptRuleIdRouteHandler,
  deleteAutomationsVoiceReceiptsReceiptRuleIdRouteHandler,
  deleteEmailAddressesEmailAddressIdRouteHandler,
  deleteEmailTemplatesTemplateIdRouteHandler,
  deleteListsListIdContactsContactIdRouteHandler,
  deleteListsListIdRouteHandler,
  deletePostReturnAddressesReturnAddressIdRouteHandler,
  deleteSmsEmailSmsEmailAddressIdRouteHandler,
  deleteSmsEmailSmsStrippedStringsRuleIdRouteHandler,
  deleteSmsTemplatesTemplateIdRouteHandler,
  deleteSubaccountsSubaccountIdRouteHandler,
  getAccountRouteHandler,
  getAccountUsageYearMonthTypeRouteHandler,
  getAutomationsEmailReceiptRouteHandler,
  getAutomationsEmailReceiptRuleIdRouteHandler,
  getAutomationsFaxInboundInboundRuleIdRouteHandler,
  getAutomationsFaxInboundRouteHandler,
  getAutomationsFaxReceiptsRouteHandler,
  getAutomationsFaxReceiptsRuleIdRouteHandler,
  getAutomationsSmsInboundInboundRuleIdRouteHandler,
  getAutomationsSmsInboundRouteHandler,
  getAutomationsSmsReceiptsReceiptRuleIdRouteHandler,
  getAutomationsSmsReceiptsRouteHandler,
  getAutomationsVoiceReceiptsReceiptRuleIdRouteHandler,
  getAutomationsVoiceReceiptsRouteHandler,
  getContactSuggestionsRouteHandler,
  getCountriesRouteHandler,
  getDeliveryIssuesRouteHandler,
  getEmailAddressesEmailAddressIdRouteHandler,
  getEmailAddressesRouteHandler,
  getEmailCampaignsCampaignIdHistoryRouteHandler,
  getEmailCampaignsEmailCampaignIdRouteHandler,
  getEmailCampaignsRouteHandler,
  getEmailHistoryExportFilenameFilenameRouteHandler,
  getEmailHistoryRouteHandler,
  getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesRouteHandler,
  getEmailMasterTemplatesCategoriesCategoryIdRouteHandler,
  getEmailMasterTemplatesCategoriesRouteHandler,
  getEmailMasterTemplatesRouteHandler,
  getEmailMasterTemplatesTemplateIdRouteHandler,
  getEmailTemplatesRouteHandler,
  getEmailTemplatesTemplateIdRouteHandler,
  getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByRouteHandler,
  getFaxHistoryExportFilenameFilenameRouteHandler,
  getFaxReceiptsMessageIdRouteHandler,
  getFaxReceiptsRouteHandler,
  getListsListIdContactsContactIdRouteHandler,
  getListsListIdContactsRouteHandler,
  getListsListIdExportFilenameFilenameRouteHandler,
  getListsListIdImportFieldsRouteHandler,
  getListsListIdRouteHandler,
  getListsRouteHandler,
  getMmsHistoryExportFilenameFilenameRouteHandler,
  getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToRouteHandler,
  getMmsReceiptsMessageIdRouteHandler,
  getMmsReceiptsRouteHandler,
  getNumbersRouteHandler,
  getNumbersSearchCountrySearch1SearchType2RouteHandler,
  getPostDirectMailCampaignsRouteHandler,
  getPostDirectMailLocationsSearchCountryQQueryRouteHandler,
  getPostLettersHistoryExportFilenameFilenameRouteHandler,
  getPostLettersHistoryRouteHandler,
  getPostPostcardsExportFilenameFilenameRouteHandler,
  getPostPostcardsHistoryRouteHandler,
  getPostReturnAddressesReturnAddressIdRouteHandler,
  getPostReturnAddressesRouteHandler,
  getPricingCountryCurrencyCurrencyRouteHandler,
  getRechargeCreditCardRouteHandler,
  getRechargePackagesCountryCountryRouteHandler,
  getRechargeTransactionsRouteHandler,
  getRechargeTransactionsTransactionIdRouteHandler,
  getReferralAccountsRouteHandler,
  getResellerAccountsClientUserIdRouteHandler,
  getResellerAccountsRouteHandler,
  getResellerRouteHandler,
  getResellerSubdomainRouteHandler,
  getSdkDownloadTypeRouteHandler,
  getSearchContactsListsQQRouteHandler,
  getSmsCampaignsCampaignIdLinkExportFilenameFilenameRouteHandler,
  getSmsCampaignsCampaignIdLinkStatisticsRouteHandler,
  getSmsCampaignsCampaignIdLinkTrackingRouteHandler,
  getSmsCampaignsRouteHandler,
  getSmsCampaignsSmsCampaignIdRouteHandler,
  getSmsEmailSmsEmailAddressIdRouteHandler,
  getSmsEmailSmsRouteHandler,
  getSmsEmailSmsStrippedStringsRouteHandler,
  getSmsEmailSmsStrippedStringsRuleIdRouteHandler,
  getSmsHistoryDateFromDateFromDateToDateToRouteHandler,
  getSmsHistoryExportFilenameFilenameRouteHandler,
  getSmsInboundOutboundMessageIdRouteHandler,
  getSmsInboundRouteHandler,
  getSmsReceiptsMessageIdRouteHandler,
  getSmsReceiptsRouteHandler,
  getSmsTemplatesRouteHandler,
  getStatisticsSmsRouteHandler,
  getStatisticsVoiceRouteHandler,
  getSubaccountsRouteHandler,
  getSubaccountsSubaccountIdRouteHandler,
  getTimezonesRouteHandler,
  getVoiceHistoryDateFromDateFromDateToDateToRouteHandler,
  getVoiceHistoryExportFilenameFilenameRouteHandler,
  getVoiceLangRouteHandler,
  getVoiceReceiptsMessageIdRouteHandler,
  getVoiceReceiptsRouteHandler,
  postAccountRouteHandler,
  postAutomationsEmailReceiptRouteHandler,
  postAutomationsFaxInboundRouteHandler,
  postAutomationsFaxReceiptsRouteHandler,
  postAutomationsSmsInboundIndexRouteHandler,
  postAutomationsSmsReceiptsRouteHandler,
  postAutomationsVoiceReceiptsRouteHandler,
  postDeliveryIssuesRouteHandler,
  postEmailAddressesRouteHandler,
  postEmailCampaignsPriceRouteHandler,
  postEmailCampaignsSendRouteHandler,
  postEmailPriceRouteHandler,
  postEmailReceiptsRouteHandler,
  postEmailSendRouteHandler,
  postEmailTemplatesImagesTemplateIdRouteHandler,
  postEmailTemplatesRouteHandler,
  postFaxPriceRouteHandler,
  postFaxReceiptsRouteHandler,
  postFaxSendRouteHandler,
  postListsListIdContactsRouteHandler,
  postListsListIdImportCsvPreviewRouteHandler,
  postListsListIdImportRouteHandler,
  postListsRouteHandler,
  postMmsPriceRouteHandler,
  postMmsSendRouteHandler,
  postNumbersBuyDedicatedNumberRouteHandler,
  postPostDirectMailCampaignsPriceRouteHandler,
  postPostDirectMailCampaignsSendRouteHandler,
  postPostLettersDetectAddressRouteHandler,
  postPostLettersPriceRouteHandler,
  postPostLettersSendRouteHandler,
  postPostPostcardsPriceRouteHandler,
  postPostPostcardsSendRouteHandler,
  postPostReturnAddressesRouteHandler,
  postResellerAccountsPublicRouteHandler,
  postResellerAccountsRouteHandler,
  postSmsCampaignsPriceRouteHandler,
  postSmsCampaignsSendRouteHandler,
  postSmsEmailSmsRouteHandler,
  postSmsEmailSmsStrippedStringsRouteHandler,
  postSmsInboundRouteHandler,
  postSmsPriceRouteHandler,
  postSmsReceiptsRouteHandler,
  postSmsSendRouteHandler,
  postSmsTemplatesRouteHandler,
  postSubaccountsRouteHandler,
  postUploadsConvertConvertRouteHandler,
  postVoicePriceRouteHandler,
  postVoiceReceiptsRouteHandler,
  postVoiceSendRouteHandler,
  putAccountRouteHandler,
  putAccountVerifySendRouteHandler,
  putAccountVerifyVerifyActivationTokenRouteHandler,
  putAutomationsEmailReceiptRuleIdRouteHandler,
  putAutomationsFaxInboundInboundRuleIdRouteHandler,
  putAutomationsFaxReceiptsRuleIdRouteHandler,
  putAutomationsSmsInboundInboundRuleIdRouteHandler,
  putAutomationsSmsReceiptsReceiptRuleIdRouteHandler,
  putAutomationsVoiceReceiptsReceiptRuleIdRouteHandler,
  putEmailAddressVerifyEmailAddressIdSendRouteHandler,
  putEmailAddressVerifyEmailAddressIdVerifyActivationTokenRouteHandler,
  putEmailCampaignsEmailCampaignIdCancelRouteHandler,
  putEmailCampaignsEmailCampaignIdRouteHandler,
  putEmailTemplatesTemplateIdRouteHandler,
  putFaxReceiptsReadRouteHandler,
  putForgotPasswordRouteHandler,
  putForgotPasswordVerifyRouteHandler,
  putForgotUsernameRouteHandler,
  putListsFromListIdContactsContactIdToListIdRouteHandler,
  putListsListIdContactsContactIdRouteHandler,
  putListsListIdRemoveDuplicatesRouteHandler,
  putListsListIdRemoveOptedOutContactsOptOutListIdRouteHandler,
  putListsListIdRouteHandler,
  putMmsCancelAllRouteHandler,
  putMmsMessageIdCancelRouteHandler,
  putMmsReceiptsReadRouteHandler,
  putPostReturnAddressesReturnAddressIdRouteHandler,
  putRechargeCreditCardRouteHandler,
  putRechargePurchasePackageIdRouteHandler,
  putResellerAccountsClientUserIdRouteHandler,
  putResellerRouteHandler,
  putResellerTransferCreditRouteHandler,
  putSmsCampaignsSmsCampaignIdCancelRouteHandler,
  putSmsCampaignsSmsCampaignIdRouteHandler,
  putSmsCancelAllRouteHandler,
  putSmsEmailSmsEmailAddressIdRouteHandler,
  putSmsEmailSmsStrippedStringsRuleIdRouteHandler,
  putSmsInboundReadMessageIdRouteHandler,
  putSmsInboundReadRouteHandler,
  putSmsMessageIdCancelRouteHandler,
  putSmsReceiptsReadRouteHandler,
  putSmsTemplatesTemplateIdRouteHandler,
  putSubaccountsSubaccountIdRegenApiKeyRouteHandler,
  putSubaccountsSubaccountIdRouteHandler,
  putVoiceCancelAllRouteHandler,
  putVoiceMessageIdCancelRouteHandler,
  putVoiceReceiptsReadDateBeforeDateBeforeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(postAccountRoute, postAccountRouteHandler)
  .openapi(putAccountRoute, putAccountRouteHandler)
  .openapi(putAccountVerifySendRoute, putAccountVerifySendRouteHandler)
  .openapi(
    putAccountVerifyVerifyActivationTokenRoute,
    putAccountVerifyVerifyActivationTokenRouteHandler,
  )
  .openapi(getAccountUsageYearMonthTypeRoute, getAccountUsageYearMonthTypeRouteHandler)
  .openapi(getAutomationsEmailReceiptRoute, getAutomationsEmailReceiptRouteHandler)
  .openapi(postAutomationsEmailReceiptRoute, postAutomationsEmailReceiptRouteHandler)
  .openapi(
    deleteAutomationsEmailReceiptRuleIdRoute,
    deleteAutomationsEmailReceiptRuleIdRouteHandler,
  )
  .openapi(getAutomationsEmailReceiptRuleIdRoute, getAutomationsEmailReceiptRuleIdRouteHandler)
  .openapi(putAutomationsEmailReceiptRuleIdRoute, putAutomationsEmailReceiptRuleIdRouteHandler)
  .openapi(getAutomationsFaxInboundRoute, getAutomationsFaxInboundRouteHandler)
  .openapi(postAutomationsFaxInboundRoute, postAutomationsFaxInboundRouteHandler)
  .openapi(
    deleteAutomationsFaxInboundInboundRuleIdRoute,
    deleteAutomationsFaxInboundInboundRuleIdRouteHandler,
  )
  .openapi(
    getAutomationsFaxInboundInboundRuleIdRoute,
    getAutomationsFaxInboundInboundRuleIdRouteHandler,
  )
  .openapi(
    putAutomationsFaxInboundInboundRuleIdRoute,
    putAutomationsFaxInboundInboundRuleIdRouteHandler,
  )
  .openapi(getAutomationsFaxReceiptsRoute, getAutomationsFaxReceiptsRouteHandler)
  .openapi(postAutomationsFaxReceiptsRoute, postAutomationsFaxReceiptsRouteHandler)
  .openapi(deleteAutomationsFaxReceiptsRuleIdRoute, deleteAutomationsFaxReceiptsRuleIdRouteHandler)
  .openapi(getAutomationsFaxReceiptsRuleIdRoute, getAutomationsFaxReceiptsRuleIdRouteHandler)
  .openapi(putAutomationsFaxReceiptsRuleIdRoute, putAutomationsFaxReceiptsRuleIdRouteHandler)
  .openapi(getAutomationsSmsInboundRoute, getAutomationsSmsInboundRouteHandler)
  .openapi(postAutomationsSmsInboundIndexRoute, postAutomationsSmsInboundIndexRouteHandler)
  .openapi(
    deleteAutomationsSmsInboundInboundRuleIdRoute,
    deleteAutomationsSmsInboundInboundRuleIdRouteHandler,
  )
  .openapi(
    getAutomationsSmsInboundInboundRuleIdRoute,
    getAutomationsSmsInboundInboundRuleIdRouteHandler,
  )
  .openapi(
    putAutomationsSmsInboundInboundRuleIdRoute,
    putAutomationsSmsInboundInboundRuleIdRouteHandler,
  )
  .openapi(getAutomationsSmsReceiptsRoute, getAutomationsSmsReceiptsRouteHandler)
  .openapi(postAutomationsSmsReceiptsRoute, postAutomationsSmsReceiptsRouteHandler)
  .openapi(
    deleteAutomationsSmsReceiptsReceiptRuleIdRoute,
    deleteAutomationsSmsReceiptsReceiptRuleIdRouteHandler,
  )
  .openapi(
    getAutomationsSmsReceiptsReceiptRuleIdRoute,
    getAutomationsSmsReceiptsReceiptRuleIdRouteHandler,
  )
  .openapi(
    putAutomationsSmsReceiptsReceiptRuleIdRoute,
    putAutomationsSmsReceiptsReceiptRuleIdRouteHandler,
  )
  .openapi(getAutomationsVoiceReceiptsRoute, getAutomationsVoiceReceiptsRouteHandler)
  .openapi(postAutomationsVoiceReceiptsRoute, postAutomationsVoiceReceiptsRouteHandler)
  .openapi(
    deleteAutomationsVoiceReceiptsReceiptRuleIdRoute,
    deleteAutomationsVoiceReceiptsReceiptRuleIdRouteHandler,
  )
  .openapi(
    getAutomationsVoiceReceiptsReceiptRuleIdRoute,
    getAutomationsVoiceReceiptsReceiptRuleIdRouteHandler,
  )
  .openapi(
    putAutomationsVoiceReceiptsReceiptRuleIdRoute,
    putAutomationsVoiceReceiptsReceiptRuleIdRouteHandler,
  )
  .openapi(getContactSuggestionsRoute, getContactSuggestionsRouteHandler)
  .openapi(getCountriesRoute, getCountriesRouteHandler)
  .openapi(getDeliveryIssuesRoute, getDeliveryIssuesRouteHandler)
  .openapi(postDeliveryIssuesRoute, postDeliveryIssuesRouteHandler)
  .openapi(getEmailCampaignsRoute, getEmailCampaignsRouteHandler)
  .openapi(postEmailCampaignsPriceRoute, postEmailCampaignsPriceRouteHandler)
  .openapi(postEmailCampaignsSendRoute, postEmailCampaignsSendRouteHandler)
  .openapi(getEmailCampaignsCampaignIdHistoryRoute, getEmailCampaignsCampaignIdHistoryRouteHandler)
  .openapi(getEmailCampaignsEmailCampaignIdRoute, getEmailCampaignsEmailCampaignIdRouteHandler)
  .openapi(putEmailCampaignsEmailCampaignIdRoute, putEmailCampaignsEmailCampaignIdRouteHandler)
  .openapi(
    putEmailCampaignsEmailCampaignIdCancelRoute,
    putEmailCampaignsEmailCampaignIdCancelRouteHandler,
  )
  .openapi(
    putEmailAddressVerifyEmailAddressIdSendRoute,
    putEmailAddressVerifyEmailAddressIdSendRouteHandler,
  )
  .openapi(
    putEmailAddressVerifyEmailAddressIdVerifyActivationTokenRoute,
    putEmailAddressVerifyEmailAddressIdVerifyActivationTokenRouteHandler,
  )
  .openapi(getEmailAddressesRoute, getEmailAddressesRouteHandler)
  .openapi(postEmailAddressesRoute, postEmailAddressesRouteHandler)
  .openapi(deleteEmailAddressesEmailAddressIdRoute, deleteEmailAddressesEmailAddressIdRouteHandler)
  .openapi(getEmailAddressesEmailAddressIdRoute, getEmailAddressesEmailAddressIdRouteHandler)
  .openapi(getEmailHistoryRoute, getEmailHistoryRouteHandler)
  .openapi(
    getEmailHistoryExportFilenameFilenameRoute,
    getEmailHistoryExportFilenameFilenameRouteHandler,
  )
  .openapi(getEmailMasterTemplatesRoute, getEmailMasterTemplatesRouteHandler)
  .openapi(getEmailMasterTemplatesCategoriesRoute, getEmailMasterTemplatesCategoriesRouteHandler)
  .openapi(
    getEmailMasterTemplatesCategoriesCategoryIdRoute,
    getEmailMasterTemplatesCategoriesCategoryIdRouteHandler,
  )
  .openapi(
    getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesRoute,
    getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesRouteHandler,
  )
  .openapi(getEmailMasterTemplatesTemplateIdRoute, getEmailMasterTemplatesTemplateIdRouteHandler)
  .openapi(postEmailPriceRoute, postEmailPriceRouteHandler)
  .openapi(postEmailReceiptsRoute, postEmailReceiptsRouteHandler)
  .openapi(postEmailSendRoute, postEmailSendRouteHandler)
  .openapi(getEmailTemplatesRoute, getEmailTemplatesRouteHandler)
  .openapi(postEmailTemplatesRoute, postEmailTemplatesRouteHandler)
  .openapi(postEmailTemplatesImagesTemplateIdRoute, postEmailTemplatesImagesTemplateIdRouteHandler)
  .openapi(deleteEmailTemplatesTemplateIdRoute, deleteEmailTemplatesTemplateIdRouteHandler)
  .openapi(getEmailTemplatesTemplateIdRoute, getEmailTemplatesTemplateIdRouteHandler)
  .openapi(putEmailTemplatesTemplateIdRoute, putEmailTemplatesTemplateIdRouteHandler)
  .openapi(
    getFaxHistoryExportFilenameFilenameRoute,
    getFaxHistoryExportFilenameFilenameRouteHandler,
  )
  .openapi(
    getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByRoute,
    getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByRouteHandler,
  )
  .openapi(postFaxPriceRoute, postFaxPriceRouteHandler)
  .openapi(getFaxReceiptsRoute, getFaxReceiptsRouteHandler)
  .openapi(postFaxReceiptsRoute, postFaxReceiptsRouteHandler)
  .openapi(putFaxReceiptsReadRoute, putFaxReceiptsReadRouteHandler)
  .openapi(getFaxReceiptsMessageIdRoute, getFaxReceiptsMessageIdRouteHandler)
  .openapi(postFaxSendRoute, postFaxSendRouteHandler)
  .openapi(putForgotPasswordRoute, putForgotPasswordRouteHandler)
  .openapi(putForgotPasswordVerifyRoute, putForgotPasswordVerifyRouteHandler)
  .openapi(putForgotUsernameRoute, putForgotUsernameRouteHandler)
  .openapi(getListsRoute, getListsRouteHandler)
  .openapi(postListsRoute, postListsRouteHandler)
  .openapi(
    putListsFromListIdContactsContactIdToListIdRoute,
    putListsFromListIdContactsContactIdToListIdRouteHandler,
  )
  .openapi(deleteListsListIdRoute, deleteListsListIdRouteHandler)
  .openapi(getListsListIdRoute, getListsListIdRouteHandler)
  .openapi(putListsListIdRoute, putListsListIdRouteHandler)
  .openapi(getListsListIdContactsRoute, getListsListIdContactsRouteHandler)
  .openapi(postListsListIdContactsRoute, postListsListIdContactsRouteHandler)
  .openapi(deleteListsListIdContactsContactIdRoute, deleteListsListIdContactsContactIdRouteHandler)
  .openapi(getListsListIdContactsContactIdRoute, getListsListIdContactsContactIdRouteHandler)
  .openapi(putListsListIdContactsContactIdRoute, putListsListIdContactsContactIdRouteHandler)
  .openapi(
    getListsListIdExportFilenameFilenameRoute,
    getListsListIdExportFilenameFilenameRouteHandler,
  )
  .openapi(postListsListIdImportRoute, postListsListIdImportRouteHandler)
  .openapi(postListsListIdImportCsvPreviewRoute, postListsListIdImportCsvPreviewRouteHandler)
  .openapi(getListsListIdImportFieldsRoute, getListsListIdImportFieldsRouteHandler)
  .openapi(putListsListIdRemoveDuplicatesRoute, putListsListIdRemoveDuplicatesRouteHandler)
  .openapi(
    putListsListIdRemoveOptedOutContactsOptOutListIdRoute,
    putListsListIdRemoveOptedOutContactsOptOutListIdRouteHandler,
  )
  .openapi(putMmsCancelAllRoute, putMmsCancelAllRouteHandler)
  .openapi(
    getMmsHistoryExportFilenameFilenameRoute,
    getMmsHistoryExportFilenameFilenameRouteHandler,
  )
  .openapi(
    getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToRoute,
    getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToRouteHandler,
  )
  .openapi(postMmsPriceRoute, postMmsPriceRouteHandler)
  .openapi(getMmsReceiptsRoute, getMmsReceiptsRouteHandler)
  .openapi(putMmsReceiptsReadRoute, putMmsReceiptsReadRouteHandler)
  .openapi(getMmsReceiptsMessageIdRoute, getMmsReceiptsMessageIdRouteHandler)
  .openapi(postMmsSendRoute, postMmsSendRouteHandler)
  .openapi(putMmsMessageIdCancelRoute, putMmsMessageIdCancelRouteHandler)
  .openapi(getNumbersRoute, getNumbersRouteHandler)
  .openapi(postNumbersBuyDedicatedNumberRoute, postNumbersBuyDedicatedNumberRouteHandler)
  .openapi(
    getNumbersSearchCountrySearch1SearchType2Route,
    getNumbersSearchCountrySearch1SearchType2RouteHandler,
  )
  .openapi(getPostDirectMailCampaignsRoute, getPostDirectMailCampaignsRouteHandler)
  .openapi(postPostDirectMailCampaignsPriceRoute, postPostDirectMailCampaignsPriceRouteHandler)
  .openapi(postPostDirectMailCampaignsSendRoute, postPostDirectMailCampaignsSendRouteHandler)
  .openapi(
    getPostDirectMailLocationsSearchCountryQQueryRoute,
    getPostDirectMailLocationsSearchCountryQQueryRouteHandler,
  )
  .openapi(postPostLettersDetectAddressRoute, postPostLettersDetectAddressRouteHandler)
  .openapi(getPostLettersHistoryRoute, getPostLettersHistoryRouteHandler)
  .openapi(
    getPostLettersHistoryExportFilenameFilenameRoute,
    getPostLettersHistoryExportFilenameFilenameRouteHandler,
  )
  .openapi(postPostLettersPriceRoute, postPostLettersPriceRouteHandler)
  .openapi(postPostLettersSendRoute, postPostLettersSendRouteHandler)
  .openapi(
    getPostPostcardsExportFilenameFilenameRoute,
    getPostPostcardsExportFilenameFilenameRouteHandler,
  )
  .openapi(getPostPostcardsHistoryRoute, getPostPostcardsHistoryRouteHandler)
  .openapi(postPostPostcardsPriceRoute, postPostPostcardsPriceRouteHandler)
  .openapi(postPostPostcardsSendRoute, postPostPostcardsSendRouteHandler)
  .openapi(getPostReturnAddressesRoute, getPostReturnAddressesRouteHandler)
  .openapi(postPostReturnAddressesRoute, postPostReturnAddressesRouteHandler)
  .openapi(
    deletePostReturnAddressesReturnAddressIdRoute,
    deletePostReturnAddressesReturnAddressIdRouteHandler,
  )
  .openapi(
    getPostReturnAddressesReturnAddressIdRoute,
    getPostReturnAddressesReturnAddressIdRouteHandler,
  )
  .openapi(
    putPostReturnAddressesReturnAddressIdRoute,
    putPostReturnAddressesReturnAddressIdRouteHandler,
  )
  .openapi(getPricingCountryCurrencyCurrencyRoute, getPricingCountryCurrencyCurrencyRouteHandler)
  .openapi(getRechargeCreditCardRoute, getRechargeCreditCardRouteHandler)
  .openapi(putRechargeCreditCardRoute, putRechargeCreditCardRouteHandler)
  .openapi(getRechargePackagesCountryCountryRoute, getRechargePackagesCountryCountryRouteHandler)
  .openapi(putRechargePurchasePackageIdRoute, putRechargePurchasePackageIdRouteHandler)
  .openapi(getRechargeTransactionsRoute, getRechargeTransactionsRouteHandler)
  .openapi(
    getRechargeTransactionsTransactionIdRoute,
    getRechargeTransactionsTransactionIdRouteHandler,
  )
  .openapi(getReferralAccountsRoute, getReferralAccountsRouteHandler)
  .openapi(getResellerRoute, getResellerRouteHandler)
  .openapi(putResellerRoute, putResellerRouteHandler)
  .openapi(getResellerAccountsRoute, getResellerAccountsRouteHandler)
  .openapi(postResellerAccountsRoute, postResellerAccountsRouteHandler)
  .openapi(postResellerAccountsPublicRoute, postResellerAccountsPublicRouteHandler)
  .openapi(getResellerAccountsClientUserIdRoute, getResellerAccountsClientUserIdRouteHandler)
  .openapi(putResellerAccountsClientUserIdRoute, putResellerAccountsClientUserIdRouteHandler)
  .openapi(putResellerTransferCreditRoute, putResellerTransferCreditRouteHandler)
  .openapi(getResellerSubdomainRoute, getResellerSubdomainRouteHandler)
  .openapi(getSdkDownloadTypeRoute, getSdkDownloadTypeRouteHandler)
  .openapi(getSearchContactsListsQQRoute, getSearchContactsListsQQRouteHandler)
  .openapi(getSmsCampaignsRoute, getSmsCampaignsRouteHandler)
  .openapi(postSmsCampaignsPriceRoute, postSmsCampaignsPriceRouteHandler)
  .openapi(postSmsCampaignsSendRoute, postSmsCampaignsSendRouteHandler)
  .openapi(
    getSmsCampaignsCampaignIdLinkExportFilenameFilenameRoute,
    getSmsCampaignsCampaignIdLinkExportFilenameFilenameRouteHandler,
  )
  .openapi(
    getSmsCampaignsCampaignIdLinkStatisticsRoute,
    getSmsCampaignsCampaignIdLinkStatisticsRouteHandler,
  )
  .openapi(
    getSmsCampaignsCampaignIdLinkTrackingRoute,
    getSmsCampaignsCampaignIdLinkTrackingRouteHandler,
  )
  .openapi(getSmsCampaignsSmsCampaignIdRoute, getSmsCampaignsSmsCampaignIdRouteHandler)
  .openapi(putSmsCampaignsSmsCampaignIdRoute, putSmsCampaignsSmsCampaignIdRouteHandler)
  .openapi(putSmsCampaignsSmsCampaignIdCancelRoute, putSmsCampaignsSmsCampaignIdCancelRouteHandler)
  .openapi(putSmsCancelAllRoute, putSmsCancelAllRouteHandler)
  .openapi(getSmsEmailSmsRoute, getSmsEmailSmsRouteHandler)
  .openapi(postSmsEmailSmsRoute, postSmsEmailSmsRouteHandler)
  .openapi(getSmsEmailSmsStrippedStringsRoute, getSmsEmailSmsStrippedStringsRouteHandler)
  .openapi(postSmsEmailSmsStrippedStringsRoute, postSmsEmailSmsStrippedStringsRouteHandler)
  .openapi(
    deleteSmsEmailSmsStrippedStringsRuleIdRoute,
    deleteSmsEmailSmsStrippedStringsRuleIdRouteHandler,
  )
  .openapi(
    getSmsEmailSmsStrippedStringsRuleIdRoute,
    getSmsEmailSmsStrippedStringsRuleIdRouteHandler,
  )
  .openapi(
    putSmsEmailSmsStrippedStringsRuleIdRoute,
    putSmsEmailSmsStrippedStringsRuleIdRouteHandler,
  )
  .openapi(deleteSmsEmailSmsEmailAddressIdRoute, deleteSmsEmailSmsEmailAddressIdRouteHandler)
  .openapi(getSmsEmailSmsEmailAddressIdRoute, getSmsEmailSmsEmailAddressIdRouteHandler)
  .openapi(putSmsEmailSmsEmailAddressIdRoute, putSmsEmailSmsEmailAddressIdRouteHandler)
  .openapi(
    getSmsHistoryExportFilenameFilenameRoute,
    getSmsHistoryExportFilenameFilenameRouteHandler,
  )
  .openapi(
    getSmsHistoryDateFromDateFromDateToDateToRoute,
    getSmsHistoryDateFromDateFromDateToDateToRouteHandler,
  )
  .openapi(getSmsInboundRoute, getSmsInboundRouteHandler)
  .openapi(postSmsInboundRoute, postSmsInboundRouteHandler)
  .openapi(putSmsInboundReadRoute, putSmsInboundReadRouteHandler)
  .openapi(putSmsInboundReadMessageIdRoute, putSmsInboundReadMessageIdRouteHandler)
  .openapi(getSmsInboundOutboundMessageIdRoute, getSmsInboundOutboundMessageIdRouteHandler)
  .openapi(postSmsPriceRoute, postSmsPriceRouteHandler)
  .openapi(getSmsReceiptsRoute, getSmsReceiptsRouteHandler)
  .openapi(postSmsReceiptsRoute, postSmsReceiptsRouteHandler)
  .openapi(putSmsReceiptsReadRoute, putSmsReceiptsReadRouteHandler)
  .openapi(getSmsReceiptsMessageIdRoute, getSmsReceiptsMessageIdRouteHandler)
  .openapi(postSmsSendRoute, postSmsSendRouteHandler)
  .openapi(getSmsTemplatesRoute, getSmsTemplatesRouteHandler)
  .openapi(postSmsTemplatesRoute, postSmsTemplatesRouteHandler)
  .openapi(deleteSmsTemplatesTemplateIdRoute, deleteSmsTemplatesTemplateIdRouteHandler)
  .openapi(putSmsTemplatesTemplateIdRoute, putSmsTemplatesTemplateIdRouteHandler)
  .openapi(putSmsMessageIdCancelRoute, putSmsMessageIdCancelRouteHandler)
  .openapi(getStatisticsSmsRoute, getStatisticsSmsRouteHandler)
  .openapi(getStatisticsVoiceRoute, getStatisticsVoiceRouteHandler)
  .openapi(getSubaccountsRoute, getSubaccountsRouteHandler)
  .openapi(postSubaccountsRoute, postSubaccountsRouteHandler)
  .openapi(deleteSubaccountsSubaccountIdRoute, deleteSubaccountsSubaccountIdRouteHandler)
  .openapi(getSubaccountsSubaccountIdRoute, getSubaccountsSubaccountIdRouteHandler)
  .openapi(putSubaccountsSubaccountIdRoute, putSubaccountsSubaccountIdRouteHandler)
  .openapi(
    putSubaccountsSubaccountIdRegenApiKeyRoute,
    putSubaccountsSubaccountIdRegenApiKeyRouteHandler,
  )
  .openapi(getTimezonesRoute, getTimezonesRouteHandler)
  .openapi(postUploadsConvertConvertRoute, postUploadsConvertConvertRouteHandler)
  .openapi(putVoiceCancelAllRoute, putVoiceCancelAllRouteHandler)
  .openapi(
    getVoiceHistoryExportFilenameFilenameRoute,
    getVoiceHistoryExportFilenameFilenameRouteHandler,
  )
  .openapi(
    getVoiceHistoryDateFromDateFromDateToDateToRoute,
    getVoiceHistoryDateFromDateFromDateToDateToRouteHandler,
  )
  .openapi(getVoiceLangRoute, getVoiceLangRouteHandler)
  .openapi(postVoicePriceRoute, postVoicePriceRouteHandler)
  .openapi(getVoiceReceiptsRoute, getVoiceReceiptsRouteHandler)
  .openapi(postVoiceReceiptsRoute, postVoiceReceiptsRouteHandler)
  .openapi(
    putVoiceReceiptsReadDateBeforeDateBeforeRoute,
    putVoiceReceiptsReadDateBeforeDateBeforeRouteHandler,
  )
  .openapi(getVoiceReceiptsMessageIdRoute, getVoiceReceiptsMessageIdRouteHandler)
  .openapi(postVoiceSendRoute, postVoiceSendRouteHandler)
  .openapi(putVoiceMessageIdCancelRoute, putVoiceMessageIdCancelRouteHandler)

export default app
