import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttachmentsIdRoute,
  deleteAuthenticationTokensTokenRoute,
  deleteBlocklistsIdRoute,
  deleteCredentialsIdRoute,
  deleteCustomersIdLeadSourceRoute,
  deleteCustomersIdRoute,
  deleteCustomersIdTimelineMessageIdRoute,
  deleteFilesIdRoute,
  deleteInvoicesIdTimelineMessageIdRoute,
  deleteKycRequestsIdRoute,
  deletePasswordTokensIdRoute,
  deletePlansIdRoute,
  deleteProductsIdRoute,
  deleteShippingZonesIdRoute,
  deleteSubscriptionCancellationsIdRoute,
  deleteSubscriptionsIdTimelineMessageIdRoute,
  deleteTagsTagCustomersCustomerIdRoute,
  deleteTagsTagCustomersRoute,
  deleteTagsTagRoute,
  deleteTransactionsIdTimelineMessageIdRoute,
  get3dsecureIdRoute,
  get3dsecureRoute,
  getAmlRoute,
  getAttachmentsIdRoute,
  getAttachmentsRoute,
  getAuthenticationOptionsRoute,
  getAuthenticationTokensRoute,
  getAuthenticationTokensTokenRoute,
  getBankAccountsIdRoute,
  getBankAccountsRoute,
  getBlocklistsIdRoute,
  getBlocklistsRoute,
  getCouponsIdRoute,
  getCouponsRedemptionsIdRoute,
  getCouponsRedemptionsRoute,
  getCouponsRoute,
  getCredentialsIdRoute,
  getCredentialsRoute,
  getCustomersIdLeadSourceRoute,
  getCustomersIdRoute,
  getCustomersIdTimelineMessageIdRoute,
  getCustomersIdTimelineRoute,
  getCustomersIdUpcomingInvoicesRoute,
  getCustomersRoute,
  getCustomerTimelineCustomEventsIdRoute,
  getCustomerTimelineCustomEventsRoute,
  getCustomerTimelineEventsRoute,
  getCustomFieldsResourceNameRoute,
  getCustomFieldsResourceRoute,
  getDisputesIdRoute,
  getDisputesRoute,
  getFilesIdDownloadExtensionRoute,
  getFilesIdDownloadRoute,
  getFilesIdRoute,
  getFilesRoute,
  getInvoicesIdItemsRoute,
  getInvoicesIdRoute,
  getInvoicesIdTimelineMessageIdRoute,
  getInvoicesIdTimelineRoute,
  getInvoicesIdTransactionAllocationsRoute,
  getInvoicesRoute,
  getKycDocumentsIdRoute,
  getKycDocumentsRoute,
  getKycRequestsIdRoute,
  getKycRequestsRoute,
  getPasswordTokensIdRoute,
  getPasswordTokensRoute,
  getPaymentCardsIdRoute,
  getPaymentCardsRoute,
  getPaymentInstrumentsIdRoute,
  getPaymentInstrumentsRoute,
  getPaypalAccountsIdRoute,
  getPaypalAccountsRoute,
  getPlansIdRoute,
  getPlansRoute,
  getProductsIdRoute,
  getProductsRoute,
  getSearchRoute,
  getShippingZonesIdRoute,
  getShippingZonesRoute,
  getSubscriptionCancellationsIdRoute,
  getSubscriptionCancellationsRoute,
  getSubscriptionReactivationsIdRoute,
  getSubscriptionReactivationsRoute,
  getSubscriptionsIdRoute,
  getSubscriptionsIdTimelineMessageIdRoute,
  getSubscriptionsIdTimelineRoute,
  getSubscriptionsIdUpcomingInvoicesRoute,
  getSubscriptionsRoute,
  getTagsRoute,
  getTagsTagRoute,
  getTokensRoute,
  getTokensTokenRoute,
  getTransactionsIdRoute,
  getTransactionsIdTimelineMessageIdRoute,
  getTransactionsIdTimelineRoute,
  getTransactionsRoute,
  patchBankAccountsIdRoute,
  patchKycRequestsIdRoute,
  patchPaymentCardsIdRoute,
  patchPaymentInstrumentsIdRoute,
  patchTagsTagRoute,
  patchTransactionsIdRoute,
  post3dsecureRoute,
  postAttachmentsRoute,
  postAuthenticationTokensRoute,
  postAuthenticationTokensTokenExchangeRoute,
  postBankAccountsIdDeactivationRoute,
  postBankAccountsRoute,
  postBlocklistsRoute,
  postCouponsIdExpirationRoute,
  postCouponsRedemptionsIdCancelRoute,
  postCouponsRedemptionsRoute,
  postCouponsRoute,
  postCredentialsRoute,
  postCustomersIdTimelineRoute,
  postCustomersRoute,
  postCustomerTimelineCustomEventsRoute,
  postDigitalWalletsValidationRoute,
  postDisputesRoute,
  postFilesRoute,
  postInvoicesIdAbandonRoute,
  postInvoicesIdIssueRoute,
  postInvoicesIdItemsRoute,
  postInvoicesIdRecalculateRoute,
  postInvoicesIdReissueRoute,
  postInvoicesIdTimelineRoute,
  postInvoicesIdTransactionRoute,
  postInvoicesIdVoidRoute,
  postInvoicesRoute,
  postKycDocumentsIdAcceptanceRoute,
  postKycDocumentsIdMatchesRoute,
  postKycDocumentsIdRejectionRoute,
  postKycDocumentsIdReviewRoute,
  postKycDocumentsRoute,
  postKycRequestsRoute,
  postPasswordTokensRoute,
  postPaymentCardsIdDeactivationRoute,
  postPaymentCardsRoute,
  postPaymentInstrumentsIdDeactivationRoute,
  postPaymentInstrumentsRoute,
  postPayoutsRoute,
  postPaypalAccountsIdDeactivationRoute,
  postPaypalAccountsRoute,
  postPlansRoute,
  postProductsRoute,
  postReadyToPayRoute,
  postShippingZonesRoute,
  postSubscriptionCancellationsRoute,
  postSubscriptionReactivationsRoute,
  postSubscriptionsIdChangeItemsRoute,
  postSubscriptionsIdInterimInvoiceRoute,
  postSubscriptionsIdTimelineRoute,
  postSubscriptionsIdUpcomingInvoicesInvoiceIdIssueRoute,
  postSubscriptionsRoute,
  postTagsRoute,
  postTagsTagCustomersCustomerIdRoute,
  postTagsTagCustomersRoute,
  postTokensRoute,
  postTransactionsIdQueryRoute,
  postTransactionsIdRefundRoute,
  postTransactionsIdTimelineRoute,
  postTransactionsIdUpdateRoute,
  postTransactionsRoute,
  putAttachmentsIdRoute,
  putAuthenticationOptionsRoute,
  putBankAccountsIdRoute,
  putBlocklistsIdRoute,
  putCouponsIdRoute,
  putCredentialsIdRoute,
  putCustomersIdLeadSourceRoute,
  putCustomersIdRoute,
  putCustomFieldsResourceNameRoute,
  putDisputesIdRoute,
  putFilesIdRoute,
  putInvoicesIdRoute,
  putKycDocumentsIdRoute,
  putPaymentCardsIdRoute,
  putPaypalAccountsIdRoute,
  putPlansIdRoute,
  putProductsIdRoute,
  putShippingZonesIdRoute,
  putSubscriptionCancellationsIdRoute,
  putSubscriptionsIdRoute,
} from './routes'
import {
  deleteAttachmentsIdRouteHandler,
  deleteAuthenticationTokensTokenRouteHandler,
  deleteBlocklistsIdRouteHandler,
  deleteCredentialsIdRouteHandler,
  deleteCustomersIdLeadSourceRouteHandler,
  deleteCustomersIdRouteHandler,
  deleteCustomersIdTimelineMessageIdRouteHandler,
  deleteFilesIdRouteHandler,
  deleteInvoicesIdTimelineMessageIdRouteHandler,
  deleteKycRequestsIdRouteHandler,
  deletePasswordTokensIdRouteHandler,
  deletePlansIdRouteHandler,
  deleteProductsIdRouteHandler,
  deleteShippingZonesIdRouteHandler,
  deleteSubscriptionCancellationsIdRouteHandler,
  deleteSubscriptionsIdTimelineMessageIdRouteHandler,
  deleteTagsTagCustomersCustomerIdRouteHandler,
  deleteTagsTagCustomersRouteHandler,
  deleteTagsTagRouteHandler,
  deleteTransactionsIdTimelineMessageIdRouteHandler,
  get3dsecureIdRouteHandler,
  get3dsecureRouteHandler,
  getAmlRouteHandler,
  getAttachmentsIdRouteHandler,
  getAttachmentsRouteHandler,
  getAuthenticationOptionsRouteHandler,
  getAuthenticationTokensRouteHandler,
  getAuthenticationTokensTokenRouteHandler,
  getBankAccountsIdRouteHandler,
  getBankAccountsRouteHandler,
  getBlocklistsIdRouteHandler,
  getBlocklistsRouteHandler,
  getCouponsIdRouteHandler,
  getCouponsRedemptionsIdRouteHandler,
  getCouponsRedemptionsRouteHandler,
  getCouponsRouteHandler,
  getCredentialsIdRouteHandler,
  getCredentialsRouteHandler,
  getCustomersIdLeadSourceRouteHandler,
  getCustomersIdRouteHandler,
  getCustomersIdTimelineMessageIdRouteHandler,
  getCustomersIdTimelineRouteHandler,
  getCustomersIdUpcomingInvoicesRouteHandler,
  getCustomersRouteHandler,
  getCustomerTimelineCustomEventsIdRouteHandler,
  getCustomerTimelineCustomEventsRouteHandler,
  getCustomerTimelineEventsRouteHandler,
  getCustomFieldsResourceNameRouteHandler,
  getCustomFieldsResourceRouteHandler,
  getDisputesIdRouteHandler,
  getDisputesRouteHandler,
  getFilesIdDownloadExtensionRouteHandler,
  getFilesIdDownloadRouteHandler,
  getFilesIdRouteHandler,
  getFilesRouteHandler,
  getInvoicesIdItemsRouteHandler,
  getInvoicesIdRouteHandler,
  getInvoicesIdTimelineMessageIdRouteHandler,
  getInvoicesIdTimelineRouteHandler,
  getInvoicesIdTransactionAllocationsRouteHandler,
  getInvoicesRouteHandler,
  getKycDocumentsIdRouteHandler,
  getKycDocumentsRouteHandler,
  getKycRequestsIdRouteHandler,
  getKycRequestsRouteHandler,
  getPasswordTokensIdRouteHandler,
  getPasswordTokensRouteHandler,
  getPaymentCardsIdRouteHandler,
  getPaymentCardsRouteHandler,
  getPaymentInstrumentsIdRouteHandler,
  getPaymentInstrumentsRouteHandler,
  getPaypalAccountsIdRouteHandler,
  getPaypalAccountsRouteHandler,
  getPlansIdRouteHandler,
  getPlansRouteHandler,
  getProductsIdRouteHandler,
  getProductsRouteHandler,
  getSearchRouteHandler,
  getShippingZonesIdRouteHandler,
  getShippingZonesRouteHandler,
  getSubscriptionCancellationsIdRouteHandler,
  getSubscriptionCancellationsRouteHandler,
  getSubscriptionReactivationsIdRouteHandler,
  getSubscriptionReactivationsRouteHandler,
  getSubscriptionsIdRouteHandler,
  getSubscriptionsIdTimelineMessageIdRouteHandler,
  getSubscriptionsIdTimelineRouteHandler,
  getSubscriptionsIdUpcomingInvoicesRouteHandler,
  getSubscriptionsRouteHandler,
  getTagsRouteHandler,
  getTagsTagRouteHandler,
  getTokensRouteHandler,
  getTokensTokenRouteHandler,
  getTransactionsIdRouteHandler,
  getTransactionsIdTimelineMessageIdRouteHandler,
  getTransactionsIdTimelineRouteHandler,
  getTransactionsRouteHandler,
  patchBankAccountsIdRouteHandler,
  patchKycRequestsIdRouteHandler,
  patchPaymentCardsIdRouteHandler,
  patchPaymentInstrumentsIdRouteHandler,
  patchTagsTagRouteHandler,
  patchTransactionsIdRouteHandler,
  post3dsecureRouteHandler,
  postAttachmentsRouteHandler,
  postAuthenticationTokensRouteHandler,
  postAuthenticationTokensTokenExchangeRouteHandler,
  postBankAccountsIdDeactivationRouteHandler,
  postBankAccountsRouteHandler,
  postBlocklistsRouteHandler,
  postCouponsIdExpirationRouteHandler,
  postCouponsRedemptionsIdCancelRouteHandler,
  postCouponsRedemptionsRouteHandler,
  postCouponsRouteHandler,
  postCredentialsRouteHandler,
  postCustomersIdTimelineRouteHandler,
  postCustomersRouteHandler,
  postCustomerTimelineCustomEventsRouteHandler,
  postDigitalWalletsValidationRouteHandler,
  postDisputesRouteHandler,
  postFilesRouteHandler,
  postInvoicesIdAbandonRouteHandler,
  postInvoicesIdIssueRouteHandler,
  postInvoicesIdItemsRouteHandler,
  postInvoicesIdRecalculateRouteHandler,
  postInvoicesIdReissueRouteHandler,
  postInvoicesIdTimelineRouteHandler,
  postInvoicesIdTransactionRouteHandler,
  postInvoicesIdVoidRouteHandler,
  postInvoicesRouteHandler,
  postKycDocumentsIdAcceptanceRouteHandler,
  postKycDocumentsIdMatchesRouteHandler,
  postKycDocumentsIdRejectionRouteHandler,
  postKycDocumentsIdReviewRouteHandler,
  postKycDocumentsRouteHandler,
  postKycRequestsRouteHandler,
  postPasswordTokensRouteHandler,
  postPaymentCardsIdDeactivationRouteHandler,
  postPaymentCardsRouteHandler,
  postPaymentInstrumentsIdDeactivationRouteHandler,
  postPaymentInstrumentsRouteHandler,
  postPayoutsRouteHandler,
  postPaypalAccountsIdDeactivationRouteHandler,
  postPaypalAccountsRouteHandler,
  postPlansRouteHandler,
  postProductsRouteHandler,
  postReadyToPayRouteHandler,
  postShippingZonesRouteHandler,
  postSubscriptionCancellationsRouteHandler,
  postSubscriptionReactivationsRouteHandler,
  postSubscriptionsIdChangeItemsRouteHandler,
  postSubscriptionsIdInterimInvoiceRouteHandler,
  postSubscriptionsIdTimelineRouteHandler,
  postSubscriptionsIdUpcomingInvoicesInvoiceIdIssueRouteHandler,
  postSubscriptionsRouteHandler,
  postTagsRouteHandler,
  postTagsTagCustomersCustomerIdRouteHandler,
  postTagsTagCustomersRouteHandler,
  postTokensRouteHandler,
  postTransactionsIdQueryRouteHandler,
  postTransactionsIdRefundRouteHandler,
  postTransactionsIdTimelineRouteHandler,
  postTransactionsIdUpdateRouteHandler,
  postTransactionsRouteHandler,
  putAttachmentsIdRouteHandler,
  putAuthenticationOptionsRouteHandler,
  putBankAccountsIdRouteHandler,
  putBlocklistsIdRouteHandler,
  putCouponsIdRouteHandler,
  putCredentialsIdRouteHandler,
  putCustomersIdLeadSourceRouteHandler,
  putCustomersIdRouteHandler,
  putCustomFieldsResourceNameRouteHandler,
  putDisputesIdRouteHandler,
  putFilesIdRouteHandler,
  putInvoicesIdRouteHandler,
  putKycDocumentsIdRouteHandler,
  putPaymentCardsIdRouteHandler,
  putPaypalAccountsIdRouteHandler,
  putPlansIdRouteHandler,
  putProductsIdRouteHandler,
  putShippingZonesIdRouteHandler,
  putSubscriptionCancellationsIdRouteHandler,
  putSubscriptionsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(get3dsecureRoute, get3dsecureRouteHandler)
  .openapi(post3dsecureRoute, post3dsecureRouteHandler)
  .openapi(get3dsecureIdRoute, get3dsecureIdRouteHandler)
  .openapi(getAmlRoute, getAmlRouteHandler)
  .openapi(getAttachmentsRoute, getAttachmentsRouteHandler)
  .openapi(postAttachmentsRoute, postAttachmentsRouteHandler)
  .openapi(deleteAttachmentsIdRoute, deleteAttachmentsIdRouteHandler)
  .openapi(getAttachmentsIdRoute, getAttachmentsIdRouteHandler)
  .openapi(putAttachmentsIdRoute, putAttachmentsIdRouteHandler)
  .openapi(getAuthenticationOptionsRoute, getAuthenticationOptionsRouteHandler)
  .openapi(putAuthenticationOptionsRoute, putAuthenticationOptionsRouteHandler)
  .openapi(getAuthenticationTokensRoute, getAuthenticationTokensRouteHandler)
  .openapi(postAuthenticationTokensRoute, postAuthenticationTokensRouteHandler)
  .openapi(deleteAuthenticationTokensTokenRoute, deleteAuthenticationTokensTokenRouteHandler)
  .openapi(getAuthenticationTokensTokenRoute, getAuthenticationTokensTokenRouteHandler)
  .openapi(
    postAuthenticationTokensTokenExchangeRoute,
    postAuthenticationTokensTokenExchangeRouteHandler,
  )
  .openapi(getBankAccountsRoute, getBankAccountsRouteHandler)
  .openapi(postBankAccountsRoute, postBankAccountsRouteHandler)
  .openapi(getBankAccountsIdRoute, getBankAccountsIdRouteHandler)
  .openapi(patchBankAccountsIdRoute, patchBankAccountsIdRouteHandler)
  .openapi(putBankAccountsIdRoute, putBankAccountsIdRouteHandler)
  .openapi(postBankAccountsIdDeactivationRoute, postBankAccountsIdDeactivationRouteHandler)
  .openapi(getBlocklistsRoute, getBlocklistsRouteHandler)
  .openapi(postBlocklistsRoute, postBlocklistsRouteHandler)
  .openapi(deleteBlocklistsIdRoute, deleteBlocklistsIdRouteHandler)
  .openapi(getBlocklistsIdRoute, getBlocklistsIdRouteHandler)
  .openapi(putBlocklistsIdRoute, putBlocklistsIdRouteHandler)
  .openapi(getCouponsRoute, getCouponsRouteHandler)
  .openapi(postCouponsRoute, postCouponsRouteHandler)
  .openapi(getCouponsRedemptionsRoute, getCouponsRedemptionsRouteHandler)
  .openapi(postCouponsRedemptionsRoute, postCouponsRedemptionsRouteHandler)
  .openapi(getCouponsRedemptionsIdRoute, getCouponsRedemptionsIdRouteHandler)
  .openapi(postCouponsRedemptionsIdCancelRoute, postCouponsRedemptionsIdCancelRouteHandler)
  .openapi(getCouponsIdRoute, getCouponsIdRouteHandler)
  .openapi(putCouponsIdRoute, putCouponsIdRouteHandler)
  .openapi(postCouponsIdExpirationRoute, postCouponsIdExpirationRouteHandler)
  .openapi(getCredentialsRoute, getCredentialsRouteHandler)
  .openapi(postCredentialsRoute, postCredentialsRouteHandler)
  .openapi(deleteCredentialsIdRoute, deleteCredentialsIdRouteHandler)
  .openapi(getCredentialsIdRoute, getCredentialsIdRouteHandler)
  .openapi(putCredentialsIdRoute, putCredentialsIdRouteHandler)
  .openapi(getCustomFieldsResourceRoute, getCustomFieldsResourceRouteHandler)
  .openapi(getCustomFieldsResourceNameRoute, getCustomFieldsResourceNameRouteHandler)
  .openapi(putCustomFieldsResourceNameRoute, putCustomFieldsResourceNameRouteHandler)
  .openapi(getCustomerTimelineCustomEventsRoute, getCustomerTimelineCustomEventsRouteHandler)
  .openapi(postCustomerTimelineCustomEventsRoute, postCustomerTimelineCustomEventsRouteHandler)
  .openapi(getCustomerTimelineCustomEventsIdRoute, getCustomerTimelineCustomEventsIdRouteHandler)
  .openapi(getCustomerTimelineEventsRoute, getCustomerTimelineEventsRouteHandler)
  .openapi(getCustomersRoute, getCustomersRouteHandler)
  .openapi(postCustomersRoute, postCustomersRouteHandler)
  .openapi(deleteCustomersIdRoute, deleteCustomersIdRouteHandler)
  .openapi(getCustomersIdRoute, getCustomersIdRouteHandler)
  .openapi(putCustomersIdRoute, putCustomersIdRouteHandler)
  .openapi(deleteCustomersIdLeadSourceRoute, deleteCustomersIdLeadSourceRouteHandler)
  .openapi(getCustomersIdLeadSourceRoute, getCustomersIdLeadSourceRouteHandler)
  .openapi(putCustomersIdLeadSourceRoute, putCustomersIdLeadSourceRouteHandler)
  .openapi(getCustomersIdTimelineRoute, getCustomersIdTimelineRouteHandler)
  .openapi(postCustomersIdTimelineRoute, postCustomersIdTimelineRouteHandler)
  .openapi(deleteCustomersIdTimelineMessageIdRoute, deleteCustomersIdTimelineMessageIdRouteHandler)
  .openapi(getCustomersIdTimelineMessageIdRoute, getCustomersIdTimelineMessageIdRouteHandler)
  .openapi(getCustomersIdUpcomingInvoicesRoute, getCustomersIdUpcomingInvoicesRouteHandler)
  .openapi(postDigitalWalletsValidationRoute, postDigitalWalletsValidationRouteHandler)
  .openapi(getDisputesRoute, getDisputesRouteHandler)
  .openapi(postDisputesRoute, postDisputesRouteHandler)
  .openapi(getDisputesIdRoute, getDisputesIdRouteHandler)
  .openapi(putDisputesIdRoute, putDisputesIdRouteHandler)
  .openapi(getFilesRoute, getFilesRouteHandler)
  .openapi(postFilesRoute, postFilesRouteHandler)
  .openapi(deleteFilesIdRoute, deleteFilesIdRouteHandler)
  .openapi(getFilesIdRoute, getFilesIdRouteHandler)
  .openapi(putFilesIdRoute, putFilesIdRouteHandler)
  .openapi(getFilesIdDownloadRoute, getFilesIdDownloadRouteHandler)
  .openapi(getFilesIdDownloadExtensionRoute, getFilesIdDownloadExtensionRouteHandler)
  .openapi(getInvoicesRoute, getInvoicesRouteHandler)
  .openapi(postInvoicesRoute, postInvoicesRouteHandler)
  .openapi(getInvoicesIdRoute, getInvoicesIdRouteHandler)
  .openapi(putInvoicesIdRoute, putInvoicesIdRouteHandler)
  .openapi(postInvoicesIdAbandonRoute, postInvoicesIdAbandonRouteHandler)
  .openapi(postInvoicesIdIssueRoute, postInvoicesIdIssueRouteHandler)
  .openapi(getInvoicesIdItemsRoute, getInvoicesIdItemsRouteHandler)
  .openapi(postInvoicesIdItemsRoute, postInvoicesIdItemsRouteHandler)
  .openapi(postInvoicesIdRecalculateRoute, postInvoicesIdRecalculateRouteHandler)
  .openapi(postInvoicesIdReissueRoute, postInvoicesIdReissueRouteHandler)
  .openapi(getInvoicesIdTimelineRoute, getInvoicesIdTimelineRouteHandler)
  .openapi(postInvoicesIdTimelineRoute, postInvoicesIdTimelineRouteHandler)
  .openapi(deleteInvoicesIdTimelineMessageIdRoute, deleteInvoicesIdTimelineMessageIdRouteHandler)
  .openapi(getInvoicesIdTimelineMessageIdRoute, getInvoicesIdTimelineMessageIdRouteHandler)
  .openapi(postInvoicesIdTransactionRoute, postInvoicesIdTransactionRouteHandler)
  .openapi(
    getInvoicesIdTransactionAllocationsRoute,
    getInvoicesIdTransactionAllocationsRouteHandler,
  )
  .openapi(postInvoicesIdVoidRoute, postInvoicesIdVoidRouteHandler)
  .openapi(getKycDocumentsRoute, getKycDocumentsRouteHandler)
  .openapi(postKycDocumentsRoute, postKycDocumentsRouteHandler)
  .openapi(getKycDocumentsIdRoute, getKycDocumentsIdRouteHandler)
  .openapi(putKycDocumentsIdRoute, putKycDocumentsIdRouteHandler)
  .openapi(postKycDocumentsIdAcceptanceRoute, postKycDocumentsIdAcceptanceRouteHandler)
  .openapi(postKycDocumentsIdMatchesRoute, postKycDocumentsIdMatchesRouteHandler)
  .openapi(postKycDocumentsIdRejectionRoute, postKycDocumentsIdRejectionRouteHandler)
  .openapi(postKycDocumentsIdReviewRoute, postKycDocumentsIdReviewRouteHandler)
  .openapi(getKycRequestsRoute, getKycRequestsRouteHandler)
  .openapi(postKycRequestsRoute, postKycRequestsRouteHandler)
  .openapi(deleteKycRequestsIdRoute, deleteKycRequestsIdRouteHandler)
  .openapi(getKycRequestsIdRoute, getKycRequestsIdRouteHandler)
  .openapi(patchKycRequestsIdRoute, patchKycRequestsIdRouteHandler)
  .openapi(getPasswordTokensRoute, getPasswordTokensRouteHandler)
  .openapi(postPasswordTokensRoute, postPasswordTokensRouteHandler)
  .openapi(deletePasswordTokensIdRoute, deletePasswordTokensIdRouteHandler)
  .openapi(getPasswordTokensIdRoute, getPasswordTokensIdRouteHandler)
  .openapi(getPaymentCardsRoute, getPaymentCardsRouteHandler)
  .openapi(postPaymentCardsRoute, postPaymentCardsRouteHandler)
  .openapi(getPaymentCardsIdRoute, getPaymentCardsIdRouteHandler)
  .openapi(patchPaymentCardsIdRoute, patchPaymentCardsIdRouteHandler)
  .openapi(putPaymentCardsIdRoute, putPaymentCardsIdRouteHandler)
  .openapi(postPaymentCardsIdDeactivationRoute, postPaymentCardsIdDeactivationRouteHandler)
  .openapi(getPaymentInstrumentsRoute, getPaymentInstrumentsRouteHandler)
  .openapi(postPaymentInstrumentsRoute, postPaymentInstrumentsRouteHandler)
  .openapi(getPaymentInstrumentsIdRoute, getPaymentInstrumentsIdRouteHandler)
  .openapi(patchPaymentInstrumentsIdRoute, patchPaymentInstrumentsIdRouteHandler)
  .openapi(
    postPaymentInstrumentsIdDeactivationRoute,
    postPaymentInstrumentsIdDeactivationRouteHandler,
  )
  .openapi(postPayoutsRoute, postPayoutsRouteHandler)
  .openapi(getPaypalAccountsRoute, getPaypalAccountsRouteHandler)
  .openapi(postPaypalAccountsRoute, postPaypalAccountsRouteHandler)
  .openapi(getPaypalAccountsIdRoute, getPaypalAccountsIdRouteHandler)
  .openapi(putPaypalAccountsIdRoute, putPaypalAccountsIdRouteHandler)
  .openapi(postPaypalAccountsIdDeactivationRoute, postPaypalAccountsIdDeactivationRouteHandler)
  .openapi(getPlansRoute, getPlansRouteHandler)
  .openapi(postPlansRoute, postPlansRouteHandler)
  .openapi(deletePlansIdRoute, deletePlansIdRouteHandler)
  .openapi(getPlansIdRoute, getPlansIdRouteHandler)
  .openapi(putPlansIdRoute, putPlansIdRouteHandler)
  .openapi(getProductsRoute, getProductsRouteHandler)
  .openapi(postProductsRoute, postProductsRouteHandler)
  .openapi(deleteProductsIdRoute, deleteProductsIdRouteHandler)
  .openapi(getProductsIdRoute, getProductsIdRouteHandler)
  .openapi(putProductsIdRoute, putProductsIdRouteHandler)
  .openapi(postReadyToPayRoute, postReadyToPayRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getShippingZonesRoute, getShippingZonesRouteHandler)
  .openapi(postShippingZonesRoute, postShippingZonesRouteHandler)
  .openapi(deleteShippingZonesIdRoute, deleteShippingZonesIdRouteHandler)
  .openapi(getShippingZonesIdRoute, getShippingZonesIdRouteHandler)
  .openapi(putShippingZonesIdRoute, putShippingZonesIdRouteHandler)
  .openapi(getSubscriptionCancellationsRoute, getSubscriptionCancellationsRouteHandler)
  .openapi(postSubscriptionCancellationsRoute, postSubscriptionCancellationsRouteHandler)
  .openapi(deleteSubscriptionCancellationsIdRoute, deleteSubscriptionCancellationsIdRouteHandler)
  .openapi(getSubscriptionCancellationsIdRoute, getSubscriptionCancellationsIdRouteHandler)
  .openapi(putSubscriptionCancellationsIdRoute, putSubscriptionCancellationsIdRouteHandler)
  .openapi(getSubscriptionReactivationsRoute, getSubscriptionReactivationsRouteHandler)
  .openapi(postSubscriptionReactivationsRoute, postSubscriptionReactivationsRouteHandler)
  .openapi(getSubscriptionReactivationsIdRoute, getSubscriptionReactivationsIdRouteHandler)
  .openapi(getSubscriptionsRoute, getSubscriptionsRouteHandler)
  .openapi(postSubscriptionsRoute, postSubscriptionsRouteHandler)
  .openapi(getSubscriptionsIdRoute, getSubscriptionsIdRouteHandler)
  .openapi(putSubscriptionsIdRoute, putSubscriptionsIdRouteHandler)
  .openapi(postSubscriptionsIdChangeItemsRoute, postSubscriptionsIdChangeItemsRouteHandler)
  .openapi(postSubscriptionsIdInterimInvoiceRoute, postSubscriptionsIdInterimInvoiceRouteHandler)
  .openapi(getSubscriptionsIdTimelineRoute, getSubscriptionsIdTimelineRouteHandler)
  .openapi(postSubscriptionsIdTimelineRoute, postSubscriptionsIdTimelineRouteHandler)
  .openapi(
    deleteSubscriptionsIdTimelineMessageIdRoute,
    deleteSubscriptionsIdTimelineMessageIdRouteHandler,
  )
  .openapi(
    getSubscriptionsIdTimelineMessageIdRoute,
    getSubscriptionsIdTimelineMessageIdRouteHandler,
  )
  .openapi(getSubscriptionsIdUpcomingInvoicesRoute, getSubscriptionsIdUpcomingInvoicesRouteHandler)
  .openapi(
    postSubscriptionsIdUpcomingInvoicesInvoiceIdIssueRoute,
    postSubscriptionsIdUpcomingInvoicesInvoiceIdIssueRouteHandler,
  )
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(postTagsRoute, postTagsRouteHandler)
  .openapi(deleteTagsTagRoute, deleteTagsTagRouteHandler)
  .openapi(getTagsTagRoute, getTagsTagRouteHandler)
  .openapi(patchTagsTagRoute, patchTagsTagRouteHandler)
  .openapi(deleteTagsTagCustomersRoute, deleteTagsTagCustomersRouteHandler)
  .openapi(postTagsTagCustomersRoute, postTagsTagCustomersRouteHandler)
  .openapi(deleteTagsTagCustomersCustomerIdRoute, deleteTagsTagCustomersCustomerIdRouteHandler)
  .openapi(postTagsTagCustomersCustomerIdRoute, postTagsTagCustomersCustomerIdRouteHandler)
  .openapi(getTokensRoute, getTokensRouteHandler)
  .openapi(postTokensRoute, postTokensRouteHandler)
  .openapi(getTokensTokenRoute, getTokensTokenRouteHandler)
  .openapi(getTransactionsRoute, getTransactionsRouteHandler)
  .openapi(postTransactionsRoute, postTransactionsRouteHandler)
  .openapi(getTransactionsIdRoute, getTransactionsIdRouteHandler)
  .openapi(patchTransactionsIdRoute, patchTransactionsIdRouteHandler)
  .openapi(postTransactionsIdQueryRoute, postTransactionsIdQueryRouteHandler)
  .openapi(postTransactionsIdRefundRoute, postTransactionsIdRefundRouteHandler)
  .openapi(getTransactionsIdTimelineRoute, getTransactionsIdTimelineRouteHandler)
  .openapi(postTransactionsIdTimelineRoute, postTransactionsIdTimelineRouteHandler)
  .openapi(
    deleteTransactionsIdTimelineMessageIdRoute,
    deleteTransactionsIdTimelineMessageIdRouteHandler,
  )
  .openapi(getTransactionsIdTimelineMessageIdRoute, getTransactionsIdTimelineMessageIdRouteHandler)
  .openapi(postTransactionsIdUpdateRoute, postTransactionsIdUpdateRouteHandler)

export default app
