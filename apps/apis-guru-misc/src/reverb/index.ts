import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteListingsListingIdImagesImageIdRoute,
  deleteListingsSlugRoute,
  deleteMyAddressesAddressIdRoute,
  deleteMyCuratedSetProductProductIdRoute,
  deleteMyFollowsBrandsSlugRoute,
  deleteMyFollowsCategoriesCategorySubcategoryRoute,
  deleteMyFollowsCategoriesIdentifierRoute,
  deleteMyFollowsCollectionsSlugRoute,
  deleteMyFollowsFollowIdAlertRoute,
  deleteMyFollowsFollowIdRoute,
  deleteMyFollowsHandpickedSlugRoute,
  deleteMyFollowsShopsSlugRoute,
  deleteMyWishlistIdRoute,
  deleteSalesSaleIdListingsRoute,
  deleteShopVacationRoute,
  deleteWantsIdRoute,
  deleteWebhooksRegistrationsIdRoute,
  getArticlesCategoriesRoute,
  getArticlesRoute,
  getCategoriesFlatRoute,
  getCategoriesProductTypeCategoryRoute,
  getCategoriesRoute,
  getCategoriesTaxonomyRoute,
  getCategoriesUuidRoute,
  getComparisonShoppingPagesFindRoute,
  getComparisonShoppingPagesIdListingsRoute,
  getComparisonShoppingPagesIdReviewsRoute,
  getComparisonShoppingPagesIdRoute,
  getComparisonShoppingPagesRoute,
  getCountriesRoute,
  getCspsCategoriesRoute,
  getCspsFindRoute,
  getCspsIdRoute,
  getCspsRoute,
  getCuratedSetsSlugRoute,
  getCurrenciesDisplayRoute,
  getCurrenciesListingRoute,
  getFeedbackFeedbackIdRoute,
  getHandpickedSlugRoute,
  getListingConditionsRoute,
  getListingsAllRoute,
  getListingsFacetsSellerLocationRoute,
  getListingsIdNegotiationRoute,
  getListingsListingIdBumpRoute,
  getListingsListingIdImagesRoute,
  getListingsListingIdSalesRoute,
  getListingsRoute,
  getListingsSlugEditRoute,
  getListingsSlugReviewsRoute,
  getListingsSlugRoute,
  getListingsSlugSimilarListingsRoute,
  getMyAccountRoute,
  getMyAddressesRoute,
  getMyConversationsIdRoute,
  getMyConversationsRoute,
  getMyCountsRoute,
  getMyFeedbackReceivedRoute,
  getMyFeedbackSentRoute,
  getMyFeedCustomizeRoute,
  getMyFeedGridRoute,
  getMyFeedRoute,
  getMyFollowsArticlesRoute,
  getMyFollowsBrandsSlugRoute,
  getMyFollowsCategoriesCategorySubcategoryRoute,
  getMyFollowsCategoriesIdentifierRoute,
  getMyFollowsCollectionsSlugRoute,
  getMyFollowsHandpickedSlugRoute,
  getMyFollowsRoute,
  getMyFollowsSearchRoute,
  getMyFollowsShopsSlugRoute,
  getMyListingsDraftsRoute,
  getMyListingsNegotiationsRoute,
  getMyListingsRoute,
  getMyListsRoute,
  getMyNegotiationsBuyingRoute,
  getMyNegotiationsIdRoute,
  getMyOrdersAwaitingFeedbackRoute,
  getMyOrdersBuyingAllRoute,
  getMyOrdersBuyingByUuidUuidRoute,
  getMyOrdersBuyingIdRoute,
  getMyOrdersBuyingUnpaidRoute,
  getMyOrdersSellingAllRoute,
  getMyOrdersSellingAwaitingShipmentRoute,
  getMyOrdersSellingBuyerHistoryBuyerIdRoute,
  getMyOrdersSellingByUuidUuidRoute,
  getMyOrdersSellingIdRoute,
  getMyOrdersSellingUnpaidRoute,
  getMyPaymentsSellingIdRoute,
  getMyPaymentsSellingRoute,
  getMyPayoutsIdLineItemsRoute,
  getMyPayoutsRoute,
  getMyRefundRequestsSellingRoute,
  getMyViewedListingsRoute,
  getMyWishlistRoute,
  getOrdersOrderIdFeedbackBuyerRoute,
  getOrdersOrderIdFeedbackSellerRoute,
  getPaymentMethodsRoute,
  getPriceguideIdTransactionsSummaryRoute,
  getProductsReviewsIdRoute,
  getProductsSlugReviewsRoute,
  getSalesReverbRoute,
  getSalesSellerRoute,
  getSalesSlugRoute,
  getShippingProvidersRoute,
  getShippingRegionsRoute,
  getShopListingConditionsRoute,
  getShopPaymentMethodsRoute,
  getShopRoute,
  getShopsIdStorefrontsRoute,
  getShopsShopIdShippingProfilesRoute,
  getShopsSlugFeedbackBuyerRoute,
  getShopsSlugFeedbackRoute,
  getShopsSlugFeedbackSellerRoute,
  getShopsSlugRoute,
  getShopVacationRoute,
  getWantsRoute,
  getWebhooksRegistrationsIdRoute,
  getWebhooksRegistrationsRoute,
  postConversationsConversationIdOfferRoute,
  postConversationsIdOfferRoute,
  postListingsIdOfferRoute,
  postListingsListingIdBumpBudgetTypeRoute,
  postListingsListingIdConversationsRoute,
  postListingsRoute,
  postListingsSlugFlagRoute,
  postListingsSlugReviewsRoute,
  postMyAddressesRoute,
  postMyConversationsConversationIdMessagesRoute,
  postMyConversationsRoute,
  postMyCuratedSetProductProductIdRoute,
  postMyFollowsArticlesRoute,
  postMyFollowsBrandsSlugRoute,
  postMyFollowsCategoriesCategorySubcategoryRoute,
  postMyFollowsCategoriesIdentifierRoute,
  postMyFollowsCategoriesUuidRoute,
  postMyFollowsCollectionsSlugRoute,
  postMyFollowsFollowIdAlertRoute,
  postMyFollowsHandpickedSlugRoute,
  postMyFollowsSearchRoute,
  postMyFollowsShopsSlugRoute,
  postMyNegotiationsIdAcceptRoute,
  postMyNegotiationsIdCounterRoute,
  postMyNegotiationsIdDeclineRoute,
  postMyOrdersBuyingIdMarkReceivedRoute,
  postMyOrdersSellingIdMarkPickedUpRoute,
  postMyOrdersSellingIdShipRoute,
  postMyOrdersSellingOrderIdRefundRequestsRoute,
  postOrdersOrderIdFeedbackBuyerRoute,
  postOrdersOrderIdFeedbackSellerRoute,
  postProductsSlugReviewsRoute,
  postSalesSaleIdListingsRoute,
  postShopVacationRoute,
  postWebhooksRegistrationsRoute,
  putListingsSlugRoute,
  putMyAccountRoute,
  putMyAddressesAddressIdRoute,
  putMyConversationsIdRoute,
  putMyListingsSlugStateEndRoute,
  putMyRefundRequestsSellingIdRoute,
  putMyWishlistIdRoute,
  putProductsReviewsIdRoute,
  putShopRoute,
  putWantsIdRoute,
} from './routes'
import {
  deleteListingsListingIdImagesImageIdRouteHandler,
  deleteListingsSlugRouteHandler,
  deleteMyAddressesAddressIdRouteHandler,
  deleteMyCuratedSetProductProductIdRouteHandler,
  deleteMyFollowsBrandsSlugRouteHandler,
  deleteMyFollowsCategoriesCategorySubcategoryRouteHandler,
  deleteMyFollowsCategoriesIdentifierRouteHandler,
  deleteMyFollowsCollectionsSlugRouteHandler,
  deleteMyFollowsFollowIdAlertRouteHandler,
  deleteMyFollowsFollowIdRouteHandler,
  deleteMyFollowsHandpickedSlugRouteHandler,
  deleteMyFollowsShopsSlugRouteHandler,
  deleteMyWishlistIdRouteHandler,
  deleteSalesSaleIdListingsRouteHandler,
  deleteShopVacationRouteHandler,
  deleteWantsIdRouteHandler,
  deleteWebhooksRegistrationsIdRouteHandler,
  getArticlesCategoriesRouteHandler,
  getArticlesRouteHandler,
  getCategoriesFlatRouteHandler,
  getCategoriesProductTypeCategoryRouteHandler,
  getCategoriesRouteHandler,
  getCategoriesTaxonomyRouteHandler,
  getCategoriesUuidRouteHandler,
  getComparisonShoppingPagesFindRouteHandler,
  getComparisonShoppingPagesIdListingsRouteHandler,
  getComparisonShoppingPagesIdReviewsRouteHandler,
  getComparisonShoppingPagesIdRouteHandler,
  getComparisonShoppingPagesRouteHandler,
  getCountriesRouteHandler,
  getCspsCategoriesRouteHandler,
  getCspsFindRouteHandler,
  getCspsIdRouteHandler,
  getCspsRouteHandler,
  getCuratedSetsSlugRouteHandler,
  getCurrenciesDisplayRouteHandler,
  getCurrenciesListingRouteHandler,
  getFeedbackFeedbackIdRouteHandler,
  getHandpickedSlugRouteHandler,
  getListingConditionsRouteHandler,
  getListingsAllRouteHandler,
  getListingsFacetsSellerLocationRouteHandler,
  getListingsIdNegotiationRouteHandler,
  getListingsListingIdBumpRouteHandler,
  getListingsListingIdImagesRouteHandler,
  getListingsListingIdSalesRouteHandler,
  getListingsRouteHandler,
  getListingsSlugEditRouteHandler,
  getListingsSlugReviewsRouteHandler,
  getListingsSlugRouteHandler,
  getListingsSlugSimilarListingsRouteHandler,
  getMyAccountRouteHandler,
  getMyAddressesRouteHandler,
  getMyConversationsIdRouteHandler,
  getMyConversationsRouteHandler,
  getMyCountsRouteHandler,
  getMyFeedbackReceivedRouteHandler,
  getMyFeedbackSentRouteHandler,
  getMyFeedCustomizeRouteHandler,
  getMyFeedGridRouteHandler,
  getMyFeedRouteHandler,
  getMyFollowsArticlesRouteHandler,
  getMyFollowsBrandsSlugRouteHandler,
  getMyFollowsCategoriesCategorySubcategoryRouteHandler,
  getMyFollowsCategoriesIdentifierRouteHandler,
  getMyFollowsCollectionsSlugRouteHandler,
  getMyFollowsHandpickedSlugRouteHandler,
  getMyFollowsRouteHandler,
  getMyFollowsSearchRouteHandler,
  getMyFollowsShopsSlugRouteHandler,
  getMyListingsDraftsRouteHandler,
  getMyListingsNegotiationsRouteHandler,
  getMyListingsRouteHandler,
  getMyListsRouteHandler,
  getMyNegotiationsBuyingRouteHandler,
  getMyNegotiationsIdRouteHandler,
  getMyOrdersAwaitingFeedbackRouteHandler,
  getMyOrdersBuyingAllRouteHandler,
  getMyOrdersBuyingByUuidUuidRouteHandler,
  getMyOrdersBuyingIdRouteHandler,
  getMyOrdersBuyingUnpaidRouteHandler,
  getMyOrdersSellingAllRouteHandler,
  getMyOrdersSellingAwaitingShipmentRouteHandler,
  getMyOrdersSellingBuyerHistoryBuyerIdRouteHandler,
  getMyOrdersSellingByUuidUuidRouteHandler,
  getMyOrdersSellingIdRouteHandler,
  getMyOrdersSellingUnpaidRouteHandler,
  getMyPaymentsSellingIdRouteHandler,
  getMyPaymentsSellingRouteHandler,
  getMyPayoutsIdLineItemsRouteHandler,
  getMyPayoutsRouteHandler,
  getMyRefundRequestsSellingRouteHandler,
  getMyViewedListingsRouteHandler,
  getMyWishlistRouteHandler,
  getOrdersOrderIdFeedbackBuyerRouteHandler,
  getOrdersOrderIdFeedbackSellerRouteHandler,
  getPaymentMethodsRouteHandler,
  getPriceguideIdTransactionsSummaryRouteHandler,
  getProductsReviewsIdRouteHandler,
  getProductsSlugReviewsRouteHandler,
  getSalesReverbRouteHandler,
  getSalesSellerRouteHandler,
  getSalesSlugRouteHandler,
  getShippingProvidersRouteHandler,
  getShippingRegionsRouteHandler,
  getShopListingConditionsRouteHandler,
  getShopPaymentMethodsRouteHandler,
  getShopRouteHandler,
  getShopsIdStorefrontsRouteHandler,
  getShopsShopIdShippingProfilesRouteHandler,
  getShopsSlugFeedbackBuyerRouteHandler,
  getShopsSlugFeedbackRouteHandler,
  getShopsSlugFeedbackSellerRouteHandler,
  getShopsSlugRouteHandler,
  getShopVacationRouteHandler,
  getWantsRouteHandler,
  getWebhooksRegistrationsIdRouteHandler,
  getWebhooksRegistrationsRouteHandler,
  postConversationsConversationIdOfferRouteHandler,
  postConversationsIdOfferRouteHandler,
  postListingsIdOfferRouteHandler,
  postListingsListingIdBumpBudgetTypeRouteHandler,
  postListingsListingIdConversationsRouteHandler,
  postListingsRouteHandler,
  postListingsSlugFlagRouteHandler,
  postListingsSlugReviewsRouteHandler,
  postMyAddressesRouteHandler,
  postMyConversationsConversationIdMessagesRouteHandler,
  postMyConversationsRouteHandler,
  postMyCuratedSetProductProductIdRouteHandler,
  postMyFollowsArticlesRouteHandler,
  postMyFollowsBrandsSlugRouteHandler,
  postMyFollowsCategoriesCategorySubcategoryRouteHandler,
  postMyFollowsCategoriesIdentifierRouteHandler,
  postMyFollowsCategoriesUuidRouteHandler,
  postMyFollowsCollectionsSlugRouteHandler,
  postMyFollowsFollowIdAlertRouteHandler,
  postMyFollowsHandpickedSlugRouteHandler,
  postMyFollowsSearchRouteHandler,
  postMyFollowsShopsSlugRouteHandler,
  postMyNegotiationsIdAcceptRouteHandler,
  postMyNegotiationsIdCounterRouteHandler,
  postMyNegotiationsIdDeclineRouteHandler,
  postMyOrdersBuyingIdMarkReceivedRouteHandler,
  postMyOrdersSellingIdMarkPickedUpRouteHandler,
  postMyOrdersSellingIdShipRouteHandler,
  postMyOrdersSellingOrderIdRefundRequestsRouteHandler,
  postOrdersOrderIdFeedbackBuyerRouteHandler,
  postOrdersOrderIdFeedbackSellerRouteHandler,
  postProductsSlugReviewsRouteHandler,
  postSalesSaleIdListingsRouteHandler,
  postShopVacationRouteHandler,
  postWebhooksRegistrationsRouteHandler,
  putListingsSlugRouteHandler,
  putMyAccountRouteHandler,
  putMyAddressesAddressIdRouteHandler,
  putMyConversationsIdRouteHandler,
  putMyListingsSlugStateEndRouteHandler,
  putMyRefundRequestsSellingIdRouteHandler,
  putMyWishlistIdRouteHandler,
  putProductsReviewsIdRouteHandler,
  putShopRouteHandler,
  putWantsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getArticlesRoute, getArticlesRouteHandler)
  .openapi(getArticlesCategoriesRoute, getArticlesCategoriesRouteHandler)
  .openapi(getCategoriesRoute, getCategoriesRouteHandler)
  .openapi(getCategoriesFlatRoute, getCategoriesFlatRouteHandler)
  .openapi(getCategoriesTaxonomyRoute, getCategoriesTaxonomyRouteHandler)
  .openapi(getCategoriesProductTypeCategoryRoute, getCategoriesProductTypeCategoryRouteHandler)
  .openapi(getCategoriesUuidRoute, getCategoriesUuidRouteHandler)
  .openapi(getComparisonShoppingPagesRoute, getComparisonShoppingPagesRouteHandler)
  .openapi(getComparisonShoppingPagesFindRoute, getComparisonShoppingPagesFindRouteHandler)
  .openapi(getComparisonShoppingPagesIdRoute, getComparisonShoppingPagesIdRouteHandler)
  .openapi(
    getComparisonShoppingPagesIdListingsRoute,
    getComparisonShoppingPagesIdListingsRouteHandler,
  )
  .openapi(
    getComparisonShoppingPagesIdReviewsRoute,
    getComparisonShoppingPagesIdReviewsRouteHandler,
  )
  .openapi(
    postConversationsConversationIdOfferRoute,
    postConversationsConversationIdOfferRouteHandler,
  )
  .openapi(postConversationsIdOfferRoute, postConversationsIdOfferRouteHandler)
  .openapi(getCountriesRoute, getCountriesRouteHandler)
  .openapi(getCspsRoute, getCspsRouteHandler)
  .openapi(getCspsCategoriesRoute, getCspsCategoriesRouteHandler)
  .openapi(getCspsFindRoute, getCspsFindRouteHandler)
  .openapi(getCspsIdRoute, getCspsIdRouteHandler)
  .openapi(getCuratedSetsSlugRoute, getCuratedSetsSlugRouteHandler)
  .openapi(getCurrenciesDisplayRoute, getCurrenciesDisplayRouteHandler)
  .openapi(getCurrenciesListingRoute, getCurrenciesListingRouteHandler)
  .openapi(getFeedbackFeedbackIdRoute, getFeedbackFeedbackIdRouteHandler)
  .openapi(getHandpickedSlugRoute, getHandpickedSlugRouteHandler)
  .openapi(getListingConditionsRoute, getListingConditionsRouteHandler)
  .openapi(getListingsRoute, getListingsRouteHandler)
  .openapi(postListingsRoute, postListingsRouteHandler)
  .openapi(getListingsAllRoute, getListingsAllRouteHandler)
  .openapi(getListingsFacetsSellerLocationRoute, getListingsFacetsSellerLocationRouteHandler)
  .openapi(getListingsIdNegotiationRoute, getListingsIdNegotiationRouteHandler)
  .openapi(postListingsIdOfferRoute, postListingsIdOfferRouteHandler)
  .openapi(getListingsListingIdBumpRoute, getListingsListingIdBumpRouteHandler)
  .openapi(
    postListingsListingIdBumpBudgetTypeRoute,
    postListingsListingIdBumpBudgetTypeRouteHandler,
  )
  .openapi(postListingsListingIdConversationsRoute, postListingsListingIdConversationsRouteHandler)
  .openapi(getListingsListingIdImagesRoute, getListingsListingIdImagesRouteHandler)
  .openapi(
    deleteListingsListingIdImagesImageIdRoute,
    deleteListingsListingIdImagesImageIdRouteHandler,
  )
  .openapi(getListingsListingIdSalesRoute, getListingsListingIdSalesRouteHandler)
  .openapi(deleteListingsSlugRoute, deleteListingsSlugRouteHandler)
  .openapi(getListingsSlugRoute, getListingsSlugRouteHandler)
  .openapi(putListingsSlugRoute, putListingsSlugRouteHandler)
  .openapi(getListingsSlugEditRoute, getListingsSlugEditRouteHandler)
  .openapi(postListingsSlugFlagRoute, postListingsSlugFlagRouteHandler)
  .openapi(getListingsSlugReviewsRoute, getListingsSlugReviewsRouteHandler)
  .openapi(postListingsSlugReviewsRoute, postListingsSlugReviewsRouteHandler)
  .openapi(getListingsSlugSimilarListingsRoute, getListingsSlugSimilarListingsRouteHandler)
  .openapi(getMyAccountRoute, getMyAccountRouteHandler)
  .openapi(putMyAccountRoute, putMyAccountRouteHandler)
  .openapi(getMyAddressesRoute, getMyAddressesRouteHandler)
  .openapi(postMyAddressesRoute, postMyAddressesRouteHandler)
  .openapi(deleteMyAddressesAddressIdRoute, deleteMyAddressesAddressIdRouteHandler)
  .openapi(putMyAddressesAddressIdRoute, putMyAddressesAddressIdRouteHandler)
  .openapi(getMyConversationsRoute, getMyConversationsRouteHandler)
  .openapi(postMyConversationsRoute, postMyConversationsRouteHandler)
  .openapi(
    postMyConversationsConversationIdMessagesRoute,
    postMyConversationsConversationIdMessagesRouteHandler,
  )
  .openapi(getMyConversationsIdRoute, getMyConversationsIdRouteHandler)
  .openapi(putMyConversationsIdRoute, putMyConversationsIdRouteHandler)
  .openapi(getMyCountsRoute, getMyCountsRouteHandler)
  .openapi(deleteMyCuratedSetProductProductIdRoute, deleteMyCuratedSetProductProductIdRouteHandler)
  .openapi(postMyCuratedSetProductProductIdRoute, postMyCuratedSetProductProductIdRouteHandler)
  .openapi(getMyFeedRoute, getMyFeedRouteHandler)
  .openapi(getMyFeedCustomizeRoute, getMyFeedCustomizeRouteHandler)
  .openapi(getMyFeedGridRoute, getMyFeedGridRouteHandler)
  .openapi(getMyFeedbackReceivedRoute, getMyFeedbackReceivedRouteHandler)
  .openapi(getMyFeedbackSentRoute, getMyFeedbackSentRouteHandler)
  .openapi(getMyFollowsRoute, getMyFollowsRouteHandler)
  .openapi(getMyFollowsArticlesRoute, getMyFollowsArticlesRouteHandler)
  .openapi(postMyFollowsArticlesRoute, postMyFollowsArticlesRouteHandler)
  .openapi(deleteMyFollowsBrandsSlugRoute, deleteMyFollowsBrandsSlugRouteHandler)
  .openapi(getMyFollowsBrandsSlugRoute, getMyFollowsBrandsSlugRouteHandler)
  .openapi(postMyFollowsBrandsSlugRoute, postMyFollowsBrandsSlugRouteHandler)
  .openapi(
    deleteMyFollowsCategoriesCategorySubcategoryRoute,
    deleteMyFollowsCategoriesCategorySubcategoryRouteHandler,
  )
  .openapi(
    getMyFollowsCategoriesCategorySubcategoryRoute,
    getMyFollowsCategoriesCategorySubcategoryRouteHandler,
  )
  .openapi(
    postMyFollowsCategoriesCategorySubcategoryRoute,
    postMyFollowsCategoriesCategorySubcategoryRouteHandler,
  )
  .openapi(
    deleteMyFollowsCategoriesIdentifierRoute,
    deleteMyFollowsCategoriesIdentifierRouteHandler,
  )
  .openapi(getMyFollowsCategoriesIdentifierRoute, getMyFollowsCategoriesIdentifierRouteHandler)
  .openapi(postMyFollowsCategoriesIdentifierRoute, postMyFollowsCategoriesIdentifierRouteHandler)
  .openapi(postMyFollowsCategoriesUuidRoute, postMyFollowsCategoriesUuidRouteHandler)
  .openapi(deleteMyFollowsCollectionsSlugRoute, deleteMyFollowsCollectionsSlugRouteHandler)
  .openapi(getMyFollowsCollectionsSlugRoute, getMyFollowsCollectionsSlugRouteHandler)
  .openapi(postMyFollowsCollectionsSlugRoute, postMyFollowsCollectionsSlugRouteHandler)
  .openapi(deleteMyFollowsHandpickedSlugRoute, deleteMyFollowsHandpickedSlugRouteHandler)
  .openapi(getMyFollowsHandpickedSlugRoute, getMyFollowsHandpickedSlugRouteHandler)
  .openapi(postMyFollowsHandpickedSlugRoute, postMyFollowsHandpickedSlugRouteHandler)
  .openapi(getMyFollowsSearchRoute, getMyFollowsSearchRouteHandler)
  .openapi(postMyFollowsSearchRoute, postMyFollowsSearchRouteHandler)
  .openapi(deleteMyFollowsShopsSlugRoute, deleteMyFollowsShopsSlugRouteHandler)
  .openapi(getMyFollowsShopsSlugRoute, getMyFollowsShopsSlugRouteHandler)
  .openapi(postMyFollowsShopsSlugRoute, postMyFollowsShopsSlugRouteHandler)
  .openapi(deleteMyFollowsFollowIdRoute, deleteMyFollowsFollowIdRouteHandler)
  .openapi(deleteMyFollowsFollowIdAlertRoute, deleteMyFollowsFollowIdAlertRouteHandler)
  .openapi(postMyFollowsFollowIdAlertRoute, postMyFollowsFollowIdAlertRouteHandler)
  .openapi(getMyListingsRoute, getMyListingsRouteHandler)
  .openapi(getMyListingsDraftsRoute, getMyListingsDraftsRouteHandler)
  .openapi(getMyListingsNegotiationsRoute, getMyListingsNegotiationsRouteHandler)
  .openapi(putMyListingsSlugStateEndRoute, putMyListingsSlugStateEndRouteHandler)
  .openapi(getMyListsRoute, getMyListsRouteHandler)
  .openapi(getMyNegotiationsBuyingRoute, getMyNegotiationsBuyingRouteHandler)
  .openapi(getMyNegotiationsIdRoute, getMyNegotiationsIdRouteHandler)
  .openapi(postMyNegotiationsIdAcceptRoute, postMyNegotiationsIdAcceptRouteHandler)
  .openapi(postMyNegotiationsIdCounterRoute, postMyNegotiationsIdCounterRouteHandler)
  .openapi(postMyNegotiationsIdDeclineRoute, postMyNegotiationsIdDeclineRouteHandler)
  .openapi(getMyOrdersAwaitingFeedbackRoute, getMyOrdersAwaitingFeedbackRouteHandler)
  .openapi(getMyOrdersBuyingAllRoute, getMyOrdersBuyingAllRouteHandler)
  .openapi(getMyOrdersBuyingByUuidUuidRoute, getMyOrdersBuyingByUuidUuidRouteHandler)
  .openapi(getMyOrdersBuyingUnpaidRoute, getMyOrdersBuyingUnpaidRouteHandler)
  .openapi(getMyOrdersBuyingIdRoute, getMyOrdersBuyingIdRouteHandler)
  .openapi(postMyOrdersBuyingIdMarkReceivedRoute, postMyOrdersBuyingIdMarkReceivedRouteHandler)
  .openapi(getMyOrdersSellingAllRoute, getMyOrdersSellingAllRouteHandler)
  .openapi(getMyOrdersSellingAwaitingShipmentRoute, getMyOrdersSellingAwaitingShipmentRouteHandler)
  .openapi(
    getMyOrdersSellingBuyerHistoryBuyerIdRoute,
    getMyOrdersSellingBuyerHistoryBuyerIdRouteHandler,
  )
  .openapi(getMyOrdersSellingByUuidUuidRoute, getMyOrdersSellingByUuidUuidRouteHandler)
  .openapi(getMyOrdersSellingUnpaidRoute, getMyOrdersSellingUnpaidRouteHandler)
  .openapi(getMyOrdersSellingIdRoute, getMyOrdersSellingIdRouteHandler)
  .openapi(postMyOrdersSellingIdMarkPickedUpRoute, postMyOrdersSellingIdMarkPickedUpRouteHandler)
  .openapi(postMyOrdersSellingIdShipRoute, postMyOrdersSellingIdShipRouteHandler)
  .openapi(
    postMyOrdersSellingOrderIdRefundRequestsRoute,
    postMyOrdersSellingOrderIdRefundRequestsRouteHandler,
  )
  .openapi(getMyPaymentsSellingRoute, getMyPaymentsSellingRouteHandler)
  .openapi(getMyPaymentsSellingIdRoute, getMyPaymentsSellingIdRouteHandler)
  .openapi(getMyPayoutsRoute, getMyPayoutsRouteHandler)
  .openapi(getMyPayoutsIdLineItemsRoute, getMyPayoutsIdLineItemsRouteHandler)
  .openapi(getMyRefundRequestsSellingRoute, getMyRefundRequestsSellingRouteHandler)
  .openapi(putMyRefundRequestsSellingIdRoute, putMyRefundRequestsSellingIdRouteHandler)
  .openapi(getMyViewedListingsRoute, getMyViewedListingsRouteHandler)
  .openapi(getMyWishlistRoute, getMyWishlistRouteHandler)
  .openapi(deleteMyWishlistIdRoute, deleteMyWishlistIdRouteHandler)
  .openapi(putMyWishlistIdRoute, putMyWishlistIdRouteHandler)
  .openapi(getOrdersOrderIdFeedbackBuyerRoute, getOrdersOrderIdFeedbackBuyerRouteHandler)
  .openapi(postOrdersOrderIdFeedbackBuyerRoute, postOrdersOrderIdFeedbackBuyerRouteHandler)
  .openapi(getOrdersOrderIdFeedbackSellerRoute, getOrdersOrderIdFeedbackSellerRouteHandler)
  .openapi(postOrdersOrderIdFeedbackSellerRoute, postOrdersOrderIdFeedbackSellerRouteHandler)
  .openapi(getPaymentMethodsRoute, getPaymentMethodsRouteHandler)
  .openapi(getPriceguideIdTransactionsSummaryRoute, getPriceguideIdTransactionsSummaryRouteHandler)
  .openapi(getProductsReviewsIdRoute, getProductsReviewsIdRouteHandler)
  .openapi(putProductsReviewsIdRoute, putProductsReviewsIdRouteHandler)
  .openapi(getProductsSlugReviewsRoute, getProductsSlugReviewsRouteHandler)
  .openapi(postProductsSlugReviewsRoute, postProductsSlugReviewsRouteHandler)
  .openapi(getSalesReverbRoute, getSalesReverbRouteHandler)
  .openapi(getSalesSellerRoute, getSalesSellerRouteHandler)
  .openapi(deleteSalesSaleIdListingsRoute, deleteSalesSaleIdListingsRouteHandler)
  .openapi(postSalesSaleIdListingsRoute, postSalesSaleIdListingsRouteHandler)
  .openapi(getSalesSlugRoute, getSalesSlugRouteHandler)
  .openapi(getShippingProvidersRoute, getShippingProvidersRouteHandler)
  .openapi(getShippingRegionsRoute, getShippingRegionsRouteHandler)
  .openapi(getShopRoute, getShopRouteHandler)
  .openapi(putShopRoute, putShopRouteHandler)
  .openapi(getShopListingConditionsRoute, getShopListingConditionsRouteHandler)
  .openapi(getShopPaymentMethodsRoute, getShopPaymentMethodsRouteHandler)
  .openapi(deleteShopVacationRoute, deleteShopVacationRouteHandler)
  .openapi(getShopVacationRoute, getShopVacationRouteHandler)
  .openapi(postShopVacationRoute, postShopVacationRouteHandler)
  .openapi(getShopsIdStorefrontsRoute, getShopsIdStorefrontsRouteHandler)
  .openapi(getShopsShopIdShippingProfilesRoute, getShopsShopIdShippingProfilesRouteHandler)
  .openapi(getShopsSlugRoute, getShopsSlugRouteHandler)
  .openapi(getShopsSlugFeedbackRoute, getShopsSlugFeedbackRouteHandler)
  .openapi(getShopsSlugFeedbackBuyerRoute, getShopsSlugFeedbackBuyerRouteHandler)
  .openapi(getShopsSlugFeedbackSellerRoute, getShopsSlugFeedbackSellerRouteHandler)
  .openapi(getWantsRoute, getWantsRouteHandler)
  .openapi(deleteWantsIdRoute, deleteWantsIdRouteHandler)
  .openapi(putWantsIdRoute, putWantsIdRouteHandler)
  .openapi(getWebhooksRegistrationsRoute, getWebhooksRegistrationsRouteHandler)
  .openapi(postWebhooksRegistrationsRoute, postWebhooksRegistrationsRouteHandler)
  .openapi(deleteWebhooksRegistrationsIdRoute, deleteWebhooksRegistrationsIdRouteHandler)
  .openapi(getWebhooksRegistrationsIdRoute, getWebhooksRegistrationsIdRouteHandler)

export default app
