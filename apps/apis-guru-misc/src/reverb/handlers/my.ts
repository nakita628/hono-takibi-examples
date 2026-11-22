import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  putMyAccountRoute,
  putMyAddressesAddressIdRoute,
  putMyConversationsIdRoute,
  putMyListingsSlugStateEndRoute,
  putMyRefundRequestsSellingIdRoute,
  putMyWishlistIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const myHandler = app
  .openapi(getMyAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMyAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMyAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMyAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyConversationsConversationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyConversationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMyConversationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMyCuratedSetProductProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyCuratedSetProductProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFeedCustomizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFeedGridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFeedbackReceivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFeedbackSentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFollowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFollowsArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyFollowsArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMyFollowsBrandsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFollowsBrandsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyFollowsBrandsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMyFollowsCategoriesCategorySubcategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFollowsCategoriesCategorySubcategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyFollowsCategoriesCategorySubcategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMyFollowsCategoriesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFollowsCategoriesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyFollowsCategoriesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyFollowsCategoriesUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMyFollowsCollectionsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFollowsCollectionsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyFollowsCollectionsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMyFollowsHandpickedSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFollowsHandpickedSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyFollowsHandpickedSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFollowsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyFollowsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMyFollowsShopsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyFollowsShopsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyFollowsShopsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMyFollowsFollowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMyFollowsFollowIdAlertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyFollowsFollowIdAlertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyListingsDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyListingsNegotiationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMyListingsSlugStateEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyNegotiationsBuyingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyNegotiationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyNegotiationsIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyNegotiationsIdCounterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyNegotiationsIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyOrdersAwaitingFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyOrdersBuyingAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyOrdersBuyingByUuidUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyOrdersBuyingUnpaidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyOrdersBuyingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyOrdersBuyingIdMarkReceivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyOrdersSellingAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyOrdersSellingAwaitingShipmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyOrdersSellingBuyerHistoryBuyerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyOrdersSellingByUuidUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyOrdersSellingUnpaidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyOrdersSellingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyOrdersSellingIdMarkPickedUpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyOrdersSellingIdShipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMyOrdersSellingOrderIdRefundRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyPaymentsSellingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyPaymentsSellingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyPayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyPayoutsIdLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyRefundRequestsSellingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMyRefundRequestsSellingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyViewedListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMyWishlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMyWishlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMyWishlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
