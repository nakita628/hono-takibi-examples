import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCacheKeyRoute,
  deleteContinuousProjectsIdRoute,
  deleteContinuousProjectsIdSubscriptionRoute,
  deleteContinuousProjectsProjectIdStringsCachedRoute,
  deleteContinuousProjectsProjectIdWidgetsWidgetIdRoute,
  deleteDeleteAccountRoute,
  deletePaymentCardIdDeleteRoute,
  deleteProjectsIdRoute,
  deleteProjectsIdWebhooksRoute,
  deleteProjectsProjectIdDocumentsDocumentIdRoute,
  deleteProjectsProjectIdGlossariesGlossaryIdRoute,
  deleteProjectsProjectIdStyleguidesStyleGuideIdRoute,
  deleteUserIdDeleteAccountRoute,
  getAsyncDownloadRoute,
  getBlogsRoute,
  getCommissionsRoute,
  getContinuousProjectsIdAnalyticsTokenRoute,
  getContinuousProjectsIdRoute,
  getContinuousProjectsIdSubscriptionRoute,
  getContinuousProjectsProjectIdDocumentsDocumentIdProgressRoute,
  getContinuousProjectsProjectIdDocumentsDocumentIdRoute,
  getContinuousProjectsProjectIdDocumentsDocumentIdStringsRoute,
  getContinuousProjectsProjectIdDocumentsRoute,
  getContinuousProjectsProjectIdInvoicesRoute,
  getContinuousProjectsProjectIdProgressRoute,
  getContinuousProjectsProjectIdStringsCachedRoute,
  getContinuousProjectsProjectIdStringsRoute,
  getContinuousProjectsProjectIdWidgetsRoute,
  getContinuousProjectsProjectIdWidgetsWidgetIdRoute,
  getContinuousProjectsRoute,
  getCorporatePermissionsRoute,
  getCorporateRoute,
  getCorporatesAllRoute,
  getCorporatesCorporateIdPermissionsRoute,
  getCorporatesCorporateIdRoute,
  getCorporatesCorporateIdUserGroupsRoute,
  getCorporatesCorporateIdUsersRoute,
  getCorporateUserGroupsRoute,
  getCorporateUsersRoute,
  getDocumentsDocumentIdProgressRoute,
  getDocumentsDocumentIdRoute,
  getDocumentsDocumentIdSimilarsRoute,
  getDocumentsRoute,
  getDocumentsSubjectsRoute,
  getEarningsRoute,
  getFormatsRoute,
  getGlossaryRoute,
  getIntegrationsTokenRoute,
  getLanguagesRoute,
  getMeRoute,
  getPamProfilesClientClientIdRoute,
  getPamProjectsProjectIdCompletionReportRoute,
  getPaymentCardIdRoute,
  getPaymentRoute,
  getPermissionsRoute,
  getProjectsFromInternalIdProjectIdRoute,
  getProjectsIdCallbackActionTypeRoute,
  getProjectsIdDownloadLanguageRoute,
  getProjectsIdDownloadRoute,
  getProjectsIdInvoiceHtmlRoute,
  getProjectsIdInvoicePdfRoute,
  getProjectsIdInvoiceRoute,
  getProjectsIdPackageCheckRoute,
  getProjectsIdProgressRoute,
  getProjectsIdRoute,
  getProjectsIdSalesActivitiesRoute,
  getProjectsIdWebhooksRoute,
  getProjectsProjectIdActivitiesActivityIdCommentsRoute,
  getProjectsProjectIdActivitiesActivityIdRoute,
  getProjectsProjectIdActivitiesRoute,
  getProjectsProjectIdCommentsRoute,
  getProjectsProjectIdDocumentsDocumentIdDownloadRoute,
  getProjectsProjectIdDocumentsDocumentIdRoute,
  getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageRoute,
  getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageRoute,
  getProjectsProjectIdDocumentsDocumentIdTranslationsRoute,
  getProjectsProjectIdDocumentsRoute,
  getProjectsProjectIdGlossariesGlossaryIdDownloadRoute,
  getProjectsProjectIdGlossariesGlossaryIdRoute,
  getProjectsProjectIdGlossariesRoute,
  getProjectsProjectIdStringsLanguageCodePackageStatusRoute,
  getProjectsProjectIdStringsLanguageRoute,
  getProjectsProjectIdStringsPackageStatusRoute,
  getProjectsProjectIdStringsRoute,
  getProjectsProjectIdStyleguidesRoute,
  getProjectsProjectIdStyleguidesStyleGuideIdDownloadRoute,
  getProjectsProjectIdStyleguidesStyleGuideIdRoute,
  getProjectsProjectIdTranslationsLanguageRoute,
  getProjectsProjectIdTranslationsRoute,
  getProjectsProjectIdVendorsRoute,
  getProjectsRoute,
  getProjectsVendorRoute,
  getResponsivityRoute,
  getRoute,
  getSearchDocumentsReindexStatusRoute,
  getSearchRoute,
  getStatsCommissionsRoute,
  getStatsPopularPairsRoute,
  getStatsProjectsRoute,
  getStatsRoute,
  getStatsStringsRoute,
  getStringsLanguageCodePackageStatusRoute,
  getStringsRoute,
  getStyleguideRoute,
  getSurveysScopeTypeRoute,
  getSwaggerRoute,
  getUserGroupsRoute,
  getUserIdDocumentsRoute,
  getUserIdEarningsRoute,
  getUserIdPaymentRoute,
  getUserIdPermissionsRoute,
  getUserIdProjectsVendorRoute,
  getUserIdResponsivityRoute,
  getUserIdRoute,
  getUserIdStatsPopularPairsRoute,
  getUserIdStatsProjectsRoute,
  getUserIdStatsRoute,
  getUserIdUserGroupsRoute,
  getUsersRoute,
  getUsersTagsRoute,
  postCommissionsRoute,
  postContinuousProjectsIdCollectAnalyticsRoute,
  postContinuousProjectsIdCompleteRoute,
  postContinuousProjectsIdDocumentsDocumentIdCompleteRoute,
  postContinuousProjectsIdDocumentsDocumentIdQuoteRoute,
  postContinuousProjectsIdDocumentsQuoteRoute,
  postContinuousProjectsIdLanguagesQuoteRoute,
  postContinuousProjectsIdLanguagesTargetLanguageCompleteRoute,
  postContinuousProjectsIdLanguagesTargetLanguageQuoteRoute,
  postContinuousProjectsIdRoute,
  postContinuousProjectsIdSubscriptionRoute,
  postContinuousProjectsIdTranslateTargetLanguageRoute,
  postContinuousProjectsProjectIdDocumentsDocumentIdRoute,
  postContinuousProjectsProjectIdDocumentsProgressRoute,
  postContinuousProjectsProjectIdDocumentsRoute,
  postContinuousProjectsProjectIdDocumentsStringsRoute,
  postContinuousProjectsProjectIdStringsRecacheTmsRoute,
  postContinuousProjectsProjectIdWidgetsRoute,
  postContinuousProjectsProjectIdWidgetsWidgetIdResetTokenRoute,
  postContinuousProjectsProjectIdWidgetsWidgetIdRoute,
  postContinuousProjectsRoute,
  postCorporatesCorporateIdUserGroupsRoute,
  postCorporateUserGroupsRoute,
  postCorporateUsersRoute,
  postDocumentsDocumentIdRegeneratePreviewRoute,
  postDocumentsDocumentIdUseAsDraftRoute,
  postDocumentsDocumentIdUseAsRegularRoute,
  postDowngradeProofreaderRoute,
  postFreezeAccountRoute,
  postGlossaryRoute,
  postInvitationVendorsRoute,
  postLocationRoute,
  postMakeProofreaderRoute,
  postMeRoute,
  postMlDeliveryPredictionRoute,
  postNotificationsSubscribeRoute,
  postNotificationsUnsubscribeRoute,
  postPamChatRoute,
  postPasswordRoute,
  postPaymentCardIdResetPaymentCodeRoute,
  postPaymentResetCorporatePaymentCodeRoute,
  postPaymentRoute,
  postPaymentToggleCorporateAutoChargeRoute,
  postProfilePictureRoute,
  postProjectsIdAssignCmRoute,
  postProjectsIdCancelRoute,
  postProjectsIdDeliverRoute,
  postProjectsIdEmailQuoteRoute,
  postProjectsIdLaunchRoute,
  postProjectsIdPackageLanguageRoute,
  postProjectsIdPackageRoute,
  postProjectsIdRecreateRoute,
  postProjectsIdReportsRoute,
  postProjectsIdSalesActivitiesRoute,
  postProjectsIdWebhooksRoute,
  postProjectsProjectIdActivitiesActivityIdRoute,
  postProjectsProjectIdDocumentsDocumentIdRoute,
  postProjectsProjectIdDocumentsRoute,
  postProjectsProjectIdGlossariesRoute,
  postProjectsProjectIdStringsLanguageCodePackageRoute,
  postProjectsProjectIdStringsPackageRoute,
  postProjectsProjectIdStyleguidesRoute,
  postProjectsRoute,
  postReportsFilterRoute,
  postReportsLanguagePairsRoute,
  postReportsProjectsRoute,
  postReportsQaRoute,
  postReportsUsersRoute,
  postResendEmailConfirmationRoute,
  postSearchDocumentsReindexRoute,
  postStatsCommissionsRoute,
  postStringsLanguageCodePackageRoute,
  postStringsRoute,
  postStyleguideRoute,
  postSurveysScopeTypeRoute,
  postTokenRoute,
  postUnfreezeAccountRoute,
  postUserIdApproveRoute,
  postUserIdDowngradeProofreaderRoute,
  postUserIdFreezeAccountRoute,
  postUserIdMakeProofreaderRoute,
  postUserIdNotificationsSubscribeRoute,
  postUserIdNotificationsUnsubscribeRoute,
  postUserIdPaymentRoute,
  postUserIdProfilePictureRoute,
  postUserIdRejectRoute,
  postUserIdResendEmailConfirmationRoute,
  postUserIdRoute,
  postUserIdSuspendRoute,
  postUserIdUnfreezeAccountRoute,
  postUserIdUserGroupsRoute,
  postUsersAvailableVendorsRoute,
  postUsersFilterRoute,
  postUsersRoute,
  postUsersSendPasswordReminderRoute,
  putContinuousProjectsIdSubscriptionPaymentRoute,
  putContinuousProjectsIdSubscriptionRoute,
  putProjectsIdRoute,
  putProjectsIdWebhooksRoute,
  putProjectsProjectIdGlossariesGlossaryIdRoute,
  putProjectsProjectIdStyleguidesStyleGuideIdRoute,
  putStringsRoute,
} from './routes'
import {
  deleteCacheKeyRouteHandler,
  deleteContinuousProjectsIdRouteHandler,
  deleteContinuousProjectsIdSubscriptionRouteHandler,
  deleteContinuousProjectsProjectIdStringsCachedRouteHandler,
  deleteContinuousProjectsProjectIdWidgetsWidgetIdRouteHandler,
  deleteDeleteAccountRouteHandler,
  deletePaymentCardIdDeleteRouteHandler,
  deleteProjectsIdRouteHandler,
  deleteProjectsIdWebhooksRouteHandler,
  deleteProjectsProjectIdDocumentsDocumentIdRouteHandler,
  deleteProjectsProjectIdGlossariesGlossaryIdRouteHandler,
  deleteProjectsProjectIdStyleguidesStyleGuideIdRouteHandler,
  deleteUserIdDeleteAccountRouteHandler,
  getAsyncDownloadRouteHandler,
  getBlogsRouteHandler,
  getCommissionsRouteHandler,
  getContinuousProjectsIdAnalyticsTokenRouteHandler,
  getContinuousProjectsIdRouteHandler,
  getContinuousProjectsIdSubscriptionRouteHandler,
  getContinuousProjectsProjectIdDocumentsDocumentIdProgressRouteHandler,
  getContinuousProjectsProjectIdDocumentsDocumentIdRouteHandler,
  getContinuousProjectsProjectIdDocumentsDocumentIdStringsRouteHandler,
  getContinuousProjectsProjectIdDocumentsRouteHandler,
  getContinuousProjectsProjectIdInvoicesRouteHandler,
  getContinuousProjectsProjectIdProgressRouteHandler,
  getContinuousProjectsProjectIdStringsCachedRouteHandler,
  getContinuousProjectsProjectIdStringsRouteHandler,
  getContinuousProjectsProjectIdWidgetsRouteHandler,
  getContinuousProjectsProjectIdWidgetsWidgetIdRouteHandler,
  getContinuousProjectsRouteHandler,
  getCorporatePermissionsRouteHandler,
  getCorporateRouteHandler,
  getCorporatesAllRouteHandler,
  getCorporatesCorporateIdPermissionsRouteHandler,
  getCorporatesCorporateIdRouteHandler,
  getCorporatesCorporateIdUserGroupsRouteHandler,
  getCorporatesCorporateIdUsersRouteHandler,
  getCorporateUserGroupsRouteHandler,
  getCorporateUsersRouteHandler,
  getDocumentsDocumentIdProgressRouteHandler,
  getDocumentsDocumentIdRouteHandler,
  getDocumentsDocumentIdSimilarsRouteHandler,
  getDocumentsRouteHandler,
  getDocumentsSubjectsRouteHandler,
  getEarningsRouteHandler,
  getFormatsRouteHandler,
  getGlossaryRouteHandler,
  getIntegrationsTokenRouteHandler,
  getLanguagesRouteHandler,
  getMeRouteHandler,
  getPamProfilesClientClientIdRouteHandler,
  getPamProjectsProjectIdCompletionReportRouteHandler,
  getPaymentCardIdRouteHandler,
  getPaymentRouteHandler,
  getPermissionsRouteHandler,
  getProjectsFromInternalIdProjectIdRouteHandler,
  getProjectsIdCallbackActionTypeRouteHandler,
  getProjectsIdDownloadLanguageRouteHandler,
  getProjectsIdDownloadRouteHandler,
  getProjectsIdInvoiceHtmlRouteHandler,
  getProjectsIdInvoicePdfRouteHandler,
  getProjectsIdInvoiceRouteHandler,
  getProjectsIdPackageCheckRouteHandler,
  getProjectsIdProgressRouteHandler,
  getProjectsIdRouteHandler,
  getProjectsIdSalesActivitiesRouteHandler,
  getProjectsIdWebhooksRouteHandler,
  getProjectsProjectIdActivitiesActivityIdCommentsRouteHandler,
  getProjectsProjectIdActivitiesActivityIdRouteHandler,
  getProjectsProjectIdActivitiesRouteHandler,
  getProjectsProjectIdCommentsRouteHandler,
  getProjectsProjectIdDocumentsDocumentIdDownloadRouteHandler,
  getProjectsProjectIdDocumentsDocumentIdRouteHandler,
  getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageRouteHandler,
  getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageRouteHandler,
  getProjectsProjectIdDocumentsDocumentIdTranslationsRouteHandler,
  getProjectsProjectIdDocumentsRouteHandler,
  getProjectsProjectIdGlossariesGlossaryIdDownloadRouteHandler,
  getProjectsProjectIdGlossariesGlossaryIdRouteHandler,
  getProjectsProjectIdGlossariesRouteHandler,
  getProjectsProjectIdStringsLanguageCodePackageStatusRouteHandler,
  getProjectsProjectIdStringsLanguageRouteHandler,
  getProjectsProjectIdStringsPackageStatusRouteHandler,
  getProjectsProjectIdStringsRouteHandler,
  getProjectsProjectIdStyleguidesRouteHandler,
  getProjectsProjectIdStyleguidesStyleGuideIdDownloadRouteHandler,
  getProjectsProjectIdStyleguidesStyleGuideIdRouteHandler,
  getProjectsProjectIdTranslationsLanguageRouteHandler,
  getProjectsProjectIdTranslationsRouteHandler,
  getProjectsProjectIdVendorsRouteHandler,
  getProjectsRouteHandler,
  getProjectsVendorRouteHandler,
  getResponsivityRouteHandler,
  getRouteHandler,
  getSearchDocumentsReindexStatusRouteHandler,
  getSearchRouteHandler,
  getStatsCommissionsRouteHandler,
  getStatsPopularPairsRouteHandler,
  getStatsProjectsRouteHandler,
  getStatsRouteHandler,
  getStatsStringsRouteHandler,
  getStringsLanguageCodePackageStatusRouteHandler,
  getStringsRouteHandler,
  getStyleguideRouteHandler,
  getSurveysScopeTypeRouteHandler,
  getSwaggerRouteHandler,
  getUserGroupsRouteHandler,
  getUserIdDocumentsRouteHandler,
  getUserIdEarningsRouteHandler,
  getUserIdPaymentRouteHandler,
  getUserIdPermissionsRouteHandler,
  getUserIdProjectsVendorRouteHandler,
  getUserIdResponsivityRouteHandler,
  getUserIdRouteHandler,
  getUserIdStatsPopularPairsRouteHandler,
  getUserIdStatsProjectsRouteHandler,
  getUserIdStatsRouteHandler,
  getUserIdUserGroupsRouteHandler,
  getUsersRouteHandler,
  getUsersTagsRouteHandler,
  postCommissionsRouteHandler,
  postContinuousProjectsIdCollectAnalyticsRouteHandler,
  postContinuousProjectsIdCompleteRouteHandler,
  postContinuousProjectsIdDocumentsDocumentIdCompleteRouteHandler,
  postContinuousProjectsIdDocumentsDocumentIdQuoteRouteHandler,
  postContinuousProjectsIdDocumentsQuoteRouteHandler,
  postContinuousProjectsIdLanguagesQuoteRouteHandler,
  postContinuousProjectsIdLanguagesTargetLanguageCompleteRouteHandler,
  postContinuousProjectsIdLanguagesTargetLanguageQuoteRouteHandler,
  postContinuousProjectsIdRouteHandler,
  postContinuousProjectsIdSubscriptionRouteHandler,
  postContinuousProjectsIdTranslateTargetLanguageRouteHandler,
  postContinuousProjectsProjectIdDocumentsDocumentIdRouteHandler,
  postContinuousProjectsProjectIdDocumentsProgressRouteHandler,
  postContinuousProjectsProjectIdDocumentsRouteHandler,
  postContinuousProjectsProjectIdDocumentsStringsRouteHandler,
  postContinuousProjectsProjectIdStringsRecacheTmsRouteHandler,
  postContinuousProjectsProjectIdWidgetsRouteHandler,
  postContinuousProjectsProjectIdWidgetsWidgetIdResetTokenRouteHandler,
  postContinuousProjectsProjectIdWidgetsWidgetIdRouteHandler,
  postContinuousProjectsRouteHandler,
  postCorporatesCorporateIdUserGroupsRouteHandler,
  postCorporateUserGroupsRouteHandler,
  postCorporateUsersRouteHandler,
  postDocumentsDocumentIdRegeneratePreviewRouteHandler,
  postDocumentsDocumentIdUseAsDraftRouteHandler,
  postDocumentsDocumentIdUseAsRegularRouteHandler,
  postDowngradeProofreaderRouteHandler,
  postFreezeAccountRouteHandler,
  postGlossaryRouteHandler,
  postInvitationVendorsRouteHandler,
  postLocationRouteHandler,
  postMakeProofreaderRouteHandler,
  postMeRouteHandler,
  postMlDeliveryPredictionRouteHandler,
  postNotificationsSubscribeRouteHandler,
  postNotificationsUnsubscribeRouteHandler,
  postPamChatRouteHandler,
  postPasswordRouteHandler,
  postPaymentCardIdResetPaymentCodeRouteHandler,
  postPaymentResetCorporatePaymentCodeRouteHandler,
  postPaymentRouteHandler,
  postPaymentToggleCorporateAutoChargeRouteHandler,
  postProfilePictureRouteHandler,
  postProjectsIdAssignCmRouteHandler,
  postProjectsIdCancelRouteHandler,
  postProjectsIdDeliverRouteHandler,
  postProjectsIdEmailQuoteRouteHandler,
  postProjectsIdLaunchRouteHandler,
  postProjectsIdPackageLanguageRouteHandler,
  postProjectsIdPackageRouteHandler,
  postProjectsIdRecreateRouteHandler,
  postProjectsIdReportsRouteHandler,
  postProjectsIdSalesActivitiesRouteHandler,
  postProjectsIdWebhooksRouteHandler,
  postProjectsProjectIdActivitiesActivityIdRouteHandler,
  postProjectsProjectIdDocumentsDocumentIdRouteHandler,
  postProjectsProjectIdDocumentsRouteHandler,
  postProjectsProjectIdGlossariesRouteHandler,
  postProjectsProjectIdStringsLanguageCodePackageRouteHandler,
  postProjectsProjectIdStringsPackageRouteHandler,
  postProjectsProjectIdStyleguidesRouteHandler,
  postProjectsRouteHandler,
  postReportsFilterRouteHandler,
  postReportsLanguagePairsRouteHandler,
  postReportsProjectsRouteHandler,
  postReportsQaRouteHandler,
  postReportsUsersRouteHandler,
  postResendEmailConfirmationRouteHandler,
  postSearchDocumentsReindexRouteHandler,
  postStatsCommissionsRouteHandler,
  postStringsLanguageCodePackageRouteHandler,
  postStringsRouteHandler,
  postStyleguideRouteHandler,
  postSurveysScopeTypeRouteHandler,
  postTokenRouteHandler,
  postUnfreezeAccountRouteHandler,
  postUserIdApproveRouteHandler,
  postUserIdDowngradeProofreaderRouteHandler,
  postUserIdFreezeAccountRouteHandler,
  postUserIdMakeProofreaderRouteHandler,
  postUserIdNotificationsSubscribeRouteHandler,
  postUserIdNotificationsUnsubscribeRouteHandler,
  postUserIdPaymentRouteHandler,
  postUserIdProfilePictureRouteHandler,
  postUserIdRejectRouteHandler,
  postUserIdResendEmailConfirmationRouteHandler,
  postUserIdRouteHandler,
  postUserIdSuspendRouteHandler,
  postUserIdUnfreezeAccountRouteHandler,
  postUserIdUserGroupsRouteHandler,
  postUsersAvailableVendorsRouteHandler,
  postUsersFilterRouteHandler,
  postUsersRouteHandler,
  postUsersSendPasswordReminderRouteHandler,
  putContinuousProjectsIdSubscriptionPaymentRouteHandler,
  putContinuousProjectsIdSubscriptionRouteHandler,
  putProjectsIdRouteHandler,
  putProjectsIdWebhooksRouteHandler,
  putProjectsProjectIdGlossariesGlossaryIdRouteHandler,
  putProjectsProjectIdStyleguidesStyleGuideIdRouteHandler,
  putStringsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getAsyncDownloadRoute, getAsyncDownloadRouteHandler)
  .openapi(getBlogsRoute, getBlogsRouteHandler)
  .openapi(deleteCacheKeyRoute, deleteCacheKeyRouteHandler)
  .openapi(getCommissionsRoute, getCommissionsRouteHandler)
  .openapi(postCommissionsRoute, postCommissionsRouteHandler)
  .openapi(getContinuousProjectsRoute, getContinuousProjectsRouteHandler)
  .openapi(postContinuousProjectsRoute, postContinuousProjectsRouteHandler)
  .openapi(deleteContinuousProjectsIdRoute, deleteContinuousProjectsIdRouteHandler)
  .openapi(getContinuousProjectsIdRoute, getContinuousProjectsIdRouteHandler)
  .openapi(postContinuousProjectsIdRoute, postContinuousProjectsIdRouteHandler)
  .openapi(
    getContinuousProjectsIdAnalyticsTokenRoute,
    getContinuousProjectsIdAnalyticsTokenRouteHandler,
  )
  .openapi(
    postContinuousProjectsIdCollectAnalyticsRoute,
    postContinuousProjectsIdCollectAnalyticsRouteHandler,
  )
  .openapi(postContinuousProjectsIdCompleteRoute, postContinuousProjectsIdCompleteRouteHandler)
  .openapi(
    postContinuousProjectsIdDocumentsQuoteRoute,
    postContinuousProjectsIdDocumentsQuoteRouteHandler,
  )
  .openapi(
    postContinuousProjectsIdDocumentsDocumentIdCompleteRoute,
    postContinuousProjectsIdDocumentsDocumentIdCompleteRouteHandler,
  )
  .openapi(
    postContinuousProjectsIdDocumentsDocumentIdQuoteRoute,
    postContinuousProjectsIdDocumentsDocumentIdQuoteRouteHandler,
  )
  .openapi(
    postContinuousProjectsIdLanguagesQuoteRoute,
    postContinuousProjectsIdLanguagesQuoteRouteHandler,
  )
  .openapi(
    postContinuousProjectsIdLanguagesTargetLanguageCompleteRoute,
    postContinuousProjectsIdLanguagesTargetLanguageCompleteRouteHandler,
  )
  .openapi(
    postContinuousProjectsIdLanguagesTargetLanguageQuoteRoute,
    postContinuousProjectsIdLanguagesTargetLanguageQuoteRouteHandler,
  )
  .openapi(
    deleteContinuousProjectsIdSubscriptionRoute,
    deleteContinuousProjectsIdSubscriptionRouteHandler,
  )
  .openapi(
    getContinuousProjectsIdSubscriptionRoute,
    getContinuousProjectsIdSubscriptionRouteHandler,
  )
  .openapi(
    postContinuousProjectsIdSubscriptionRoute,
    postContinuousProjectsIdSubscriptionRouteHandler,
  )
  .openapi(
    putContinuousProjectsIdSubscriptionRoute,
    putContinuousProjectsIdSubscriptionRouteHandler,
  )
  .openapi(
    putContinuousProjectsIdSubscriptionPaymentRoute,
    putContinuousProjectsIdSubscriptionPaymentRouteHandler,
  )
  .openapi(
    postContinuousProjectsIdTranslateTargetLanguageRoute,
    postContinuousProjectsIdTranslateTargetLanguageRouteHandler,
  )
  .openapi(
    getContinuousProjectsProjectIdDocumentsRoute,
    getContinuousProjectsProjectIdDocumentsRouteHandler,
  )
  .openapi(
    postContinuousProjectsProjectIdDocumentsRoute,
    postContinuousProjectsProjectIdDocumentsRouteHandler,
  )
  .openapi(
    postContinuousProjectsProjectIdDocumentsProgressRoute,
    postContinuousProjectsProjectIdDocumentsProgressRouteHandler,
  )
  .openapi(
    postContinuousProjectsProjectIdDocumentsStringsRoute,
    postContinuousProjectsProjectIdDocumentsStringsRouteHandler,
  )
  .openapi(
    getContinuousProjectsProjectIdDocumentsDocumentIdRoute,
    getContinuousProjectsProjectIdDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    postContinuousProjectsProjectIdDocumentsDocumentIdRoute,
    postContinuousProjectsProjectIdDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    getContinuousProjectsProjectIdDocumentsDocumentIdProgressRoute,
    getContinuousProjectsProjectIdDocumentsDocumentIdProgressRouteHandler,
  )
  .openapi(
    getContinuousProjectsProjectIdDocumentsDocumentIdStringsRoute,
    getContinuousProjectsProjectIdDocumentsDocumentIdStringsRouteHandler,
  )
  .openapi(
    getContinuousProjectsProjectIdInvoicesRoute,
    getContinuousProjectsProjectIdInvoicesRouteHandler,
  )
  .openapi(
    getContinuousProjectsProjectIdProgressRoute,
    getContinuousProjectsProjectIdProgressRouteHandler,
  )
  .openapi(
    getContinuousProjectsProjectIdStringsRoute,
    getContinuousProjectsProjectIdStringsRouteHandler,
  )
  .openapi(
    deleteContinuousProjectsProjectIdStringsCachedRoute,
    deleteContinuousProjectsProjectIdStringsCachedRouteHandler,
  )
  .openapi(
    getContinuousProjectsProjectIdStringsCachedRoute,
    getContinuousProjectsProjectIdStringsCachedRouteHandler,
  )
  .openapi(
    postContinuousProjectsProjectIdStringsRecacheTmsRoute,
    postContinuousProjectsProjectIdStringsRecacheTmsRouteHandler,
  )
  .openapi(
    getContinuousProjectsProjectIdWidgetsRoute,
    getContinuousProjectsProjectIdWidgetsRouteHandler,
  )
  .openapi(
    postContinuousProjectsProjectIdWidgetsRoute,
    postContinuousProjectsProjectIdWidgetsRouteHandler,
  )
  .openapi(
    deleteContinuousProjectsProjectIdWidgetsWidgetIdRoute,
    deleteContinuousProjectsProjectIdWidgetsWidgetIdRouteHandler,
  )
  .openapi(
    getContinuousProjectsProjectIdWidgetsWidgetIdRoute,
    getContinuousProjectsProjectIdWidgetsWidgetIdRouteHandler,
  )
  .openapi(
    postContinuousProjectsProjectIdWidgetsWidgetIdRoute,
    postContinuousProjectsProjectIdWidgetsWidgetIdRouteHandler,
  )
  .openapi(
    postContinuousProjectsProjectIdWidgetsWidgetIdResetTokenRoute,
    postContinuousProjectsProjectIdWidgetsWidgetIdResetTokenRouteHandler,
  )
  .openapi(getCorporateRoute, getCorporateRouteHandler)
  .openapi(getCorporatePermissionsRoute, getCorporatePermissionsRouteHandler)
  .openapi(getCorporateUserGroupsRoute, getCorporateUserGroupsRouteHandler)
  .openapi(postCorporateUserGroupsRoute, postCorporateUserGroupsRouteHandler)
  .openapi(getCorporateUsersRoute, getCorporateUsersRouteHandler)
  .openapi(postCorporateUsersRoute, postCorporateUsersRouteHandler)
  .openapi(getCorporatesAllRoute, getCorporatesAllRouteHandler)
  .openapi(getCorporatesCorporateIdRoute, getCorporatesCorporateIdRouteHandler)
  .openapi(
    getCorporatesCorporateIdPermissionsRoute,
    getCorporatesCorporateIdPermissionsRouteHandler,
  )
  .openapi(getCorporatesCorporateIdUserGroupsRoute, getCorporatesCorporateIdUserGroupsRouteHandler)
  .openapi(
    postCorporatesCorporateIdUserGroupsRoute,
    postCorporatesCorporateIdUserGroupsRouteHandler,
  )
  .openapi(getCorporatesCorporateIdUsersRoute, getCorporatesCorporateIdUsersRouteHandler)
  .openapi(deleteDeleteAccountRoute, deleteDeleteAccountRouteHandler)
  .openapi(getDocumentsRoute, getDocumentsRouteHandler)
  .openapi(getDocumentsSubjectsRoute, getDocumentsSubjectsRouteHandler)
  .openapi(getDocumentsDocumentIdRoute, getDocumentsDocumentIdRouteHandler)
  .openapi(getDocumentsDocumentIdProgressRoute, getDocumentsDocumentIdProgressRouteHandler)
  .openapi(
    postDocumentsDocumentIdRegeneratePreviewRoute,
    postDocumentsDocumentIdRegeneratePreviewRouteHandler,
  )
  .openapi(getDocumentsDocumentIdSimilarsRoute, getDocumentsDocumentIdSimilarsRouteHandler)
  .openapi(postDocumentsDocumentIdUseAsDraftRoute, postDocumentsDocumentIdUseAsDraftRouteHandler)
  .openapi(
    postDocumentsDocumentIdUseAsRegularRoute,
    postDocumentsDocumentIdUseAsRegularRouteHandler,
  )
  .openapi(postDowngradeProofreaderRoute, postDowngradeProofreaderRouteHandler)
  .openapi(getEarningsRoute, getEarningsRouteHandler)
  .openapi(getFormatsRoute, getFormatsRouteHandler)
  .openapi(postFreezeAccountRoute, postFreezeAccountRouteHandler)
  .openapi(getGlossaryRoute, getGlossaryRouteHandler)
  .openapi(postGlossaryRoute, postGlossaryRouteHandler)
  .openapi(getIntegrationsTokenRoute, getIntegrationsTokenRouteHandler)
  .openapi(postInvitationVendorsRoute, postInvitationVendorsRouteHandler)
  .openapi(getLanguagesRoute, getLanguagesRouteHandler)
  .openapi(postLocationRoute, postLocationRouteHandler)
  .openapi(postMakeProofreaderRoute, postMakeProofreaderRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(postMeRoute, postMeRouteHandler)
  .openapi(postMlDeliveryPredictionRoute, postMlDeliveryPredictionRouteHandler)
  .openapi(postNotificationsSubscribeRoute, postNotificationsSubscribeRouteHandler)
  .openapi(postNotificationsUnsubscribeRoute, postNotificationsUnsubscribeRouteHandler)
  .openapi(postPamChatRoute, postPamChatRouteHandler)
  .openapi(getPamProfilesClientClientIdRoute, getPamProfilesClientClientIdRouteHandler)
  .openapi(
    getPamProjectsProjectIdCompletionReportRoute,
    getPamProjectsProjectIdCompletionReportRouteHandler,
  )
  .openapi(postPasswordRoute, postPasswordRouteHandler)
  .openapi(getPaymentRoute, getPaymentRouteHandler)
  .openapi(postPaymentRoute, postPaymentRouteHandler)
  .openapi(
    postPaymentResetCorporatePaymentCodeRoute,
    postPaymentResetCorporatePaymentCodeRouteHandler,
  )
  .openapi(
    postPaymentToggleCorporateAutoChargeRoute,
    postPaymentToggleCorporateAutoChargeRouteHandler,
  )
  .openapi(getPaymentCardIdRoute, getPaymentCardIdRouteHandler)
  .openapi(deletePaymentCardIdDeleteRoute, deletePaymentCardIdDeleteRouteHandler)
  .openapi(postPaymentCardIdResetPaymentCodeRoute, postPaymentCardIdResetPaymentCodeRouteHandler)
  .openapi(getPermissionsRoute, getPermissionsRouteHandler)
  .openapi(postProfilePictureRoute, postProfilePictureRouteHandler)
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(getProjectsFromInternalIdProjectIdRoute, getProjectsFromInternalIdProjectIdRouteHandler)
  .openapi(getProjectsVendorRoute, getProjectsVendorRouteHandler)
  .openapi(deleteProjectsIdRoute, deleteProjectsIdRouteHandler)
  .openapi(getProjectsIdRoute, getProjectsIdRouteHandler)
  .openapi(putProjectsIdRoute, putProjectsIdRouteHandler)
  .openapi(postProjectsIdAssignCmRoute, postProjectsIdAssignCmRouteHandler)
  .openapi(getProjectsIdCallbackActionTypeRoute, getProjectsIdCallbackActionTypeRouteHandler)
  .openapi(postProjectsIdCancelRoute, postProjectsIdCancelRouteHandler)
  .openapi(postProjectsIdDeliverRoute, postProjectsIdDeliverRouteHandler)
  .openapi(getProjectsIdDownloadRoute, getProjectsIdDownloadRouteHandler)
  .openapi(getProjectsIdDownloadLanguageRoute, getProjectsIdDownloadLanguageRouteHandler)
  .openapi(postProjectsIdEmailQuoteRoute, postProjectsIdEmailQuoteRouteHandler)
  .openapi(getProjectsIdInvoiceRoute, getProjectsIdInvoiceRouteHandler)
  .openapi(getProjectsIdInvoiceHtmlRoute, getProjectsIdInvoiceHtmlRouteHandler)
  .openapi(getProjectsIdInvoicePdfRoute, getProjectsIdInvoicePdfRouteHandler)
  .openapi(postProjectsIdLaunchRoute, postProjectsIdLaunchRouteHandler)
  .openapi(postProjectsIdPackageRoute, postProjectsIdPackageRouteHandler)
  .openapi(getProjectsIdPackageCheckRoute, getProjectsIdPackageCheckRouteHandler)
  .openapi(postProjectsIdPackageLanguageRoute, postProjectsIdPackageLanguageRouteHandler)
  .openapi(getProjectsIdProgressRoute, getProjectsIdProgressRouteHandler)
  .openapi(postProjectsIdRecreateRoute, postProjectsIdRecreateRouteHandler)
  .openapi(postProjectsIdReportsRoute, postProjectsIdReportsRouteHandler)
  .openapi(getProjectsIdSalesActivitiesRoute, getProjectsIdSalesActivitiesRouteHandler)
  .openapi(postProjectsIdSalesActivitiesRoute, postProjectsIdSalesActivitiesRouteHandler)
  .openapi(deleteProjectsIdWebhooksRoute, deleteProjectsIdWebhooksRouteHandler)
  .openapi(getProjectsIdWebhooksRoute, getProjectsIdWebhooksRouteHandler)
  .openapi(postProjectsIdWebhooksRoute, postProjectsIdWebhooksRouteHandler)
  .openapi(putProjectsIdWebhooksRoute, putProjectsIdWebhooksRouteHandler)
  .openapi(getProjectsProjectIdActivitiesRoute, getProjectsProjectIdActivitiesRouteHandler)
  .openapi(
    getProjectsProjectIdActivitiesActivityIdRoute,
    getProjectsProjectIdActivitiesActivityIdRouteHandler,
  )
  .openapi(
    postProjectsProjectIdActivitiesActivityIdRoute,
    postProjectsProjectIdActivitiesActivityIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdActivitiesActivityIdCommentsRoute,
    getProjectsProjectIdActivitiesActivityIdCommentsRouteHandler,
  )
  .openapi(getProjectsProjectIdCommentsRoute, getProjectsProjectIdCommentsRouteHandler)
  .openapi(getProjectsProjectIdDocumentsRoute, getProjectsProjectIdDocumentsRouteHandler)
  .openapi(postProjectsProjectIdDocumentsRoute, postProjectsProjectIdDocumentsRouteHandler)
  .openapi(
    deleteProjectsProjectIdDocumentsDocumentIdRoute,
    deleteProjectsProjectIdDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDocumentsDocumentIdRoute,
    getProjectsProjectIdDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    postProjectsProjectIdDocumentsDocumentIdRoute,
    postProjectsProjectIdDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDocumentsDocumentIdDownloadRoute,
    getProjectsProjectIdDocumentsDocumentIdDownloadRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDocumentsDocumentIdTranslationsRoute,
    getProjectsProjectIdDocumentsDocumentIdTranslationsRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageRoute,
    getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageRoute,
    getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageRouteHandler,
  )
  .openapi(getProjectsProjectIdGlossariesRoute, getProjectsProjectIdGlossariesRouteHandler)
  .openapi(postProjectsProjectIdGlossariesRoute, postProjectsProjectIdGlossariesRouteHandler)
  .openapi(
    deleteProjectsProjectIdGlossariesGlossaryIdRoute,
    deleteProjectsProjectIdGlossariesGlossaryIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdGlossariesGlossaryIdRoute,
    getProjectsProjectIdGlossariesGlossaryIdRouteHandler,
  )
  .openapi(
    putProjectsProjectIdGlossariesGlossaryIdRoute,
    putProjectsProjectIdGlossariesGlossaryIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdGlossariesGlossaryIdDownloadRoute,
    getProjectsProjectIdGlossariesGlossaryIdDownloadRouteHandler,
  )
  .openapi(getProjectsProjectIdStringsRoute, getProjectsProjectIdStringsRouteHandler)
  .openapi(
    postProjectsProjectIdStringsPackageRoute,
    postProjectsProjectIdStringsPackageRouteHandler,
  )
  .openapi(
    getProjectsProjectIdStringsPackageStatusRoute,
    getProjectsProjectIdStringsPackageStatusRouteHandler,
  )
  .openapi(
    postProjectsProjectIdStringsLanguageCodePackageRoute,
    postProjectsProjectIdStringsLanguageCodePackageRouteHandler,
  )
  .openapi(
    getProjectsProjectIdStringsLanguageCodePackageStatusRoute,
    getProjectsProjectIdStringsLanguageCodePackageStatusRouteHandler,
  )
  .openapi(
    getProjectsProjectIdStringsLanguageRoute,
    getProjectsProjectIdStringsLanguageRouteHandler,
  )
  .openapi(getProjectsProjectIdStyleguidesRoute, getProjectsProjectIdStyleguidesRouteHandler)
  .openapi(postProjectsProjectIdStyleguidesRoute, postProjectsProjectIdStyleguidesRouteHandler)
  .openapi(
    deleteProjectsProjectIdStyleguidesStyleGuideIdRoute,
    deleteProjectsProjectIdStyleguidesStyleGuideIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdStyleguidesStyleGuideIdRoute,
    getProjectsProjectIdStyleguidesStyleGuideIdRouteHandler,
  )
  .openapi(
    putProjectsProjectIdStyleguidesStyleGuideIdRoute,
    putProjectsProjectIdStyleguidesStyleGuideIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdStyleguidesStyleGuideIdDownloadRoute,
    getProjectsProjectIdStyleguidesStyleGuideIdDownloadRouteHandler,
  )
  .openapi(getProjectsProjectIdTranslationsRoute, getProjectsProjectIdTranslationsRouteHandler)
  .openapi(
    getProjectsProjectIdTranslationsLanguageRoute,
    getProjectsProjectIdTranslationsLanguageRouteHandler,
  )
  .openapi(getProjectsProjectIdVendorsRoute, getProjectsProjectIdVendorsRouteHandler)
  .openapi(postReportsFilterRoute, postReportsFilterRouteHandler)
  .openapi(postReportsLanguagePairsRoute, postReportsLanguagePairsRouteHandler)
  .openapi(postReportsProjectsRoute, postReportsProjectsRouteHandler)
  .openapi(postReportsQaRoute, postReportsQaRouteHandler)
  .openapi(postReportsUsersRoute, postReportsUsersRouteHandler)
  .openapi(postResendEmailConfirmationRoute, postResendEmailConfirmationRouteHandler)
  .openapi(getResponsivityRoute, getResponsivityRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(postSearchDocumentsReindexRoute, postSearchDocumentsReindexRouteHandler)
  .openapi(getSearchDocumentsReindexStatusRoute, getSearchDocumentsReindexStatusRouteHandler)
  .openapi(getStatsRoute, getStatsRouteHandler)
  .openapi(getStatsCommissionsRoute, getStatsCommissionsRouteHandler)
  .openapi(postStatsCommissionsRoute, postStatsCommissionsRouteHandler)
  .openapi(getStatsPopularPairsRoute, getStatsPopularPairsRouteHandler)
  .openapi(getStatsProjectsRoute, getStatsProjectsRouteHandler)
  .openapi(getStatsStringsRoute, getStatsStringsRouteHandler)
  .openapi(getStringsRoute, getStringsRouteHandler)
  .openapi(postStringsRoute, postStringsRouteHandler)
  .openapi(putStringsRoute, putStringsRouteHandler)
  .openapi(postStringsLanguageCodePackageRoute, postStringsLanguageCodePackageRouteHandler)
  .openapi(
    getStringsLanguageCodePackageStatusRoute,
    getStringsLanguageCodePackageStatusRouteHandler,
  )
  .openapi(getStyleguideRoute, getStyleguideRouteHandler)
  .openapi(postStyleguideRoute, postStyleguideRouteHandler)
  .openapi(getSurveysScopeTypeRoute, getSurveysScopeTypeRouteHandler)
  .openapi(postSurveysScopeTypeRoute, postSurveysScopeTypeRouteHandler)
  .openapi(getSwaggerRoute, getSwaggerRouteHandler)
  .openapi(postTokenRoute, postTokenRouteHandler)
  .openapi(postUnfreezeAccountRoute, postUnfreezeAccountRouteHandler)
  .openapi(getUserGroupsRoute, getUserGroupsRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(postUsersAvailableVendorsRoute, postUsersAvailableVendorsRouteHandler)
  .openapi(postUsersFilterRoute, postUsersFilterRouteHandler)
  .openapi(postUsersSendPasswordReminderRoute, postUsersSendPasswordReminderRouteHandler)
  .openapi(getUsersTagsRoute, getUsersTagsRouteHandler)
  .openapi(getUserIdRoute, getUserIdRouteHandler)
  .openapi(postUserIdRoute, postUserIdRouteHandler)
  .openapi(postUserIdApproveRoute, postUserIdApproveRouteHandler)
  .openapi(deleteUserIdDeleteAccountRoute, deleteUserIdDeleteAccountRouteHandler)
  .openapi(getUserIdDocumentsRoute, getUserIdDocumentsRouteHandler)
  .openapi(postUserIdDowngradeProofreaderRoute, postUserIdDowngradeProofreaderRouteHandler)
  .openapi(getUserIdEarningsRoute, getUserIdEarningsRouteHandler)
  .openapi(postUserIdFreezeAccountRoute, postUserIdFreezeAccountRouteHandler)
  .openapi(postUserIdMakeProofreaderRoute, postUserIdMakeProofreaderRouteHandler)
  .openapi(postUserIdNotificationsSubscribeRoute, postUserIdNotificationsSubscribeRouteHandler)
  .openapi(postUserIdNotificationsUnsubscribeRoute, postUserIdNotificationsUnsubscribeRouteHandler)
  .openapi(getUserIdPaymentRoute, getUserIdPaymentRouteHandler)
  .openapi(postUserIdPaymentRoute, postUserIdPaymentRouteHandler)
  .openapi(getUserIdPermissionsRoute, getUserIdPermissionsRouteHandler)
  .openapi(postUserIdProfilePictureRoute, postUserIdProfilePictureRouteHandler)
  .openapi(getUserIdProjectsVendorRoute, getUserIdProjectsVendorRouteHandler)
  .openapi(postUserIdRejectRoute, postUserIdRejectRouteHandler)
  .openapi(postUserIdResendEmailConfirmationRoute, postUserIdResendEmailConfirmationRouteHandler)
  .openapi(getUserIdResponsivityRoute, getUserIdResponsivityRouteHandler)
  .openapi(getUserIdStatsRoute, getUserIdStatsRouteHandler)
  .openapi(getUserIdStatsPopularPairsRoute, getUserIdStatsPopularPairsRouteHandler)
  .openapi(getUserIdStatsProjectsRoute, getUserIdStatsProjectsRouteHandler)
  .openapi(postUserIdSuspendRoute, postUserIdSuspendRouteHandler)
  .openapi(postUserIdUnfreezeAccountRoute, postUserIdUnfreezeAccountRouteHandler)
  .openapi(getUserIdUserGroupsRoute, getUserIdUserGroupsRouteHandler)
  .openapi(postUserIdUserGroupsRoute, postUserIdUserGroupsRouteHandler)

export default app
