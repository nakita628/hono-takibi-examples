import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getArticles(
  args: InferRequestType<typeof client.articles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles.$get(args, options))
}

export async function getArticlesCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.articles.categories.$get(undefined, options))
}

export async function getCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.categories.$get(undefined, options))
}

export async function getCategoriesFlat(options?: ClientRequestOptions) {
  return await parseResponse(client.categories.flat.$get(undefined, options))
}

export async function getCategoriesTaxonomy(options?: ClientRequestOptions) {
  return await parseResponse(client.categories.taxonomy.$get(undefined, options))
}

export async function getCategoriesProductTypeCategory(
  args: InferRequestType<(typeof client.categories)[':product_type'][':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':product_type'][':category'].$get(args, options))
}

export async function getCategoriesUuid(
  args: InferRequestType<(typeof client.categories)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':uuid'].$get(args, options))
}

export async function getComparisonShoppingPages(options?: ClientRequestOptions) {
  return await parseResponse(client.comparison_shopping_pages.$get(undefined, options))
}

export async function getComparisonShoppingPagesFind(
  args: InferRequestType<typeof client.comparison_shopping_pages.find.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comparison_shopping_pages.find.$get(args, options))
}

export async function getComparisonShoppingPagesId(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comparison_shopping_pages[':id'].$get(args, options))
}

export async function getComparisonShoppingPagesIdListings(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['listings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comparison_shopping_pages[':id'].listings.$get(args, options))
}

export async function getComparisonShoppingPagesIdReviews(
  args: InferRequestType<(typeof client.comparison_shopping_pages)[':id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comparison_shopping_pages[':id'].reviews.$get(args, options))
}

export async function postConversationsConversationIdOffer(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['offer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].offer.$post(args, options))
}

export async function postConversationsIdOffer(
  args: InferRequestType<(typeof client.conversations)[':id']['offer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':id'].offer.$post(args, options))
}

export async function getCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.countries.$get(undefined, options))
}

export async function getCsps(options?: ClientRequestOptions) {
  return await parseResponse(client.csps.$get(undefined, options))
}

export async function getCspsCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.csps.categories.$get(undefined, options))
}

export async function getCspsFind(
  args: InferRequestType<typeof client.csps.find.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.csps.find.$get(args, options))
}

export async function getCspsId(
  args: InferRequestType<(typeof client.csps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.csps[':id'].$get(args, options))
}

export async function getCuratedSetsSlug(
  args: InferRequestType<(typeof client.curated_sets)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.curated_sets[':slug'].$get(args, options))
}

export async function getCurrenciesDisplay(options?: ClientRequestOptions) {
  return await parseResponse(client.currencies.display.$get(undefined, options))
}

export async function getCurrenciesListing(options?: ClientRequestOptions) {
  return await parseResponse(client.currencies.listing.$get(undefined, options))
}

export async function getFeedbackFeedbackId(
  args: InferRequestType<(typeof client.feedback)[':feedback_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feedback[':feedback_id'].$get(args, options))
}

export async function getHandpickedSlug(
  args: InferRequestType<(typeof client.handpicked)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.handpicked[':slug'].$get(args, options))
}

export async function getListingConditions(options?: ClientRequestOptions) {
  return await parseResponse(client.listing_conditions.$get(undefined, options))
}

export async function getListings(
  args: InferRequestType<typeof client.listings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings.$get(args, options))
}

export async function postListings(
  args: InferRequestType<typeof client.listings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings.$post(args, options))
}

export async function getListingsAll(
  args: InferRequestType<typeof client.listings.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings.all.$get(args, options))
}

export async function getListingsFacetsSellerLocation(options?: ClientRequestOptions) {
  return await parseResponse(client.listings.facets.seller_location.$get(undefined, options))
}

export async function getListingsIdNegotiation(
  args: InferRequestType<(typeof client.listings)[':id']['negotiation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':id'].negotiation.$get(args, options))
}

export async function postListingsIdOffer(
  args: InferRequestType<(typeof client.listings)[':id']['offer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':id'].offer.$post(args, options))
}

export async function getListingsListingIdBump(
  args: InferRequestType<(typeof client.listings)[':listing_id']['bump']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':listing_id'].bump.$get(args, options))
}

export async function postListingsListingIdBumpBudgetType(
  args: InferRequestType<(typeof client.listings)[':listing_id']['bump'][':budget_type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.listings[':listing_id'].bump[':budget_type'].$post(args, options),
  )
}

export async function postListingsListingIdConversations(
  args: InferRequestType<(typeof client.listings)[':listing_id']['conversations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':listing_id'].conversations.$post(args, options))
}

export async function getListingsListingIdImages(
  args: InferRequestType<(typeof client.listings)[':listing_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':listing_id'].images.$get(args, options))
}

export async function deleteListingsListingIdImagesImageId(
  args: InferRequestType<(typeof client.listings)[':listing_id']['images'][':image_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.listings[':listing_id'].images[':image_id'].$delete(args, options),
  )
}

export async function getListingsListingIdSales(
  args: InferRequestType<(typeof client.listings)[':listing_id']['sales']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':listing_id'].sales.$get(args, options))
}

export async function getListingsSlug(
  args: InferRequestType<(typeof client.listings)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':slug'].$get(args, options))
}

export async function putListingsSlug(
  args: InferRequestType<(typeof client.listings)[':slug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':slug'].$put(args, options))
}

export async function deleteListingsSlug(
  args: InferRequestType<(typeof client.listings)[':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':slug'].$delete(args, options))
}

export async function getListingsSlugEdit(
  args: InferRequestType<(typeof client.listings)[':slug']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':slug'].edit.$get(args, options))
}

export async function postListingsSlugFlag(
  args: InferRequestType<(typeof client.listings)[':slug']['flag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':slug'].flag.$post(args, options))
}

export async function getListingsSlugReviews(
  args: InferRequestType<(typeof client.listings)[':slug']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':slug'].reviews.$get(args, options))
}

export async function postListingsSlugReviews(
  args: InferRequestType<(typeof client.listings)[':slug']['reviews']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':slug'].reviews.$post(args, options))
}

export async function getListingsSlugSimilarListings(
  args: InferRequestType<(typeof client.listings)[':slug']['similar_listings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings[':slug'].similar_listings.$get(args, options))
}

export async function getMyAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.my.account.$get(undefined, options))
}

export async function putMyAccount(
  args: InferRequestType<typeof client.my.account.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.account.$put(args, options))
}

export async function getMyAddresses(options?: ClientRequestOptions) {
  return await parseResponse(client.my.addresses.$get(undefined, options))
}

export async function postMyAddresses(options?: ClientRequestOptions) {
  return await parseResponse(client.my.addresses.$post(undefined, options))
}

export async function putMyAddressesAddressId(
  args: InferRequestType<(typeof client.my.addresses)[':address_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.addresses[':address_id'].$put(args, options))
}

export async function deleteMyAddressesAddressId(
  args: InferRequestType<(typeof client.my.addresses)[':address_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.addresses[':address_id'].$delete(args, options))
}

export async function getMyConversations(
  args: InferRequestType<typeof client.my.conversations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.conversations.$get(args, options))
}

export async function postMyConversations(
  args: InferRequestType<typeof client.my.conversations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.conversations.$post(args, options))
}

export async function postMyConversationsConversationIdMessages(
  args: InferRequestType<(typeof client.my.conversations)[':conversation_id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.my.conversations[':conversation_id'].messages.$post(args, options),
  )
}

export async function getMyConversationsId(
  args: InferRequestType<(typeof client.my.conversations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.conversations[':id'].$get(args, options))
}

export async function putMyConversationsId(
  args: InferRequestType<(typeof client.my.conversations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.conversations[':id'].$put(args, options))
}

export async function getMyCounts(options?: ClientRequestOptions) {
  return await parseResponse(client.my.counts.$get(undefined, options))
}

export async function postMyCuratedSetProductProductId(
  args: InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.curated_set.product[':product_id'].$post(args, options))
}

export async function deleteMyCuratedSetProductProductId(
  args: InferRequestType<(typeof client.my.curated_set.product)[':product_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.curated_set.product[':product_id'].$delete(args, options))
}

export async function getMyFeed(options?: ClientRequestOptions) {
  return await parseResponse(client.my.feed.$get(undefined, options))
}

export async function getMyFeedCustomize(options?: ClientRequestOptions) {
  return await parseResponse(client.my.feed.customize.$get(undefined, options))
}

export async function getMyFeedGrid(options?: ClientRequestOptions) {
  return await parseResponse(client.my.feed.grid.$get(undefined, options))
}

export async function getMyFeedbackReceived(options?: ClientRequestOptions) {
  return await parseResponse(client.my.feedback.received.$get(undefined, options))
}

export async function getMyFeedbackSent(options?: ClientRequestOptions) {
  return await parseResponse(client.my.feedback.sent.$get(undefined, options))
}

export async function getMyFollows(options?: ClientRequestOptions) {
  return await parseResponse(client.my.follows.$get(undefined, options))
}

export async function getMyFollowsArticles(options?: ClientRequestOptions) {
  return await parseResponse(client.my.follows.articles.$get(undefined, options))
}

export async function postMyFollowsArticles(
  args: InferRequestType<typeof client.my.follows.articles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.articles.$post(args, options))
}

export async function getMyFollowsBrandsSlug(
  args: InferRequestType<(typeof client.my.follows.brands)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.brands[':slug'].$get(args, options))
}

export async function postMyFollowsBrandsSlug(
  args: InferRequestType<(typeof client.my.follows.brands)[':slug']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.brands[':slug'].$post(args, options))
}

export async function deleteMyFollowsBrandsSlug(
  args: InferRequestType<(typeof client.my.follows.brands)[':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.brands[':slug'].$delete(args, options))
}

export async function getMyFollowsCategoriesCategorySubcategory(
  args: InferRequestType<
    (typeof client.my.follows.categories)[':category'][':subcategory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.my.follows.categories[':category'][':subcategory'].$get(args, options),
  )
}

export async function postMyFollowsCategoriesCategorySubcategory(
  args: InferRequestType<
    (typeof client.my.follows.categories)[':category'][':subcategory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.my.follows.categories[':category'][':subcategory'].$post(args, options),
  )
}

export async function deleteMyFollowsCategoriesCategorySubcategory(
  args: InferRequestType<
    (typeof client.my.follows.categories)[':category'][':subcategory']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.my.follows.categories[':category'][':subcategory'].$delete(args, options),
  )
}

export async function getMyFollowsCategoriesIdentifier(
  args: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.categories[':identifier'].$get(args, options))
}

export async function postMyFollowsCategoriesIdentifier(
  args: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.categories[':identifier'].$post(args, options))
}

export async function deleteMyFollowsCategoriesIdentifier(
  args: InferRequestType<(typeof client.my.follows.categories)[':identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.categories[':identifier'].$delete(args, options))
}

export async function postMyFollowsCategoriesUuid(
  args: InferRequestType<(typeof client.my.follows.categories)[':uuid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.categories[':uuid'].$post(args, options))
}

export async function getMyFollowsCollectionsSlug(
  args: InferRequestType<(typeof client.my.follows.collections)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.collections[':slug'].$get(args, options))
}

export async function postMyFollowsCollectionsSlug(
  args: InferRequestType<(typeof client.my.follows.collections)[':slug']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.collections[':slug'].$post(args, options))
}

export async function deleteMyFollowsCollectionsSlug(
  args: InferRequestType<(typeof client.my.follows.collections)[':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.collections[':slug'].$delete(args, options))
}

export async function getMyFollowsHandpickedSlug(
  args: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.handpicked[':slug'].$get(args, options))
}

export async function postMyFollowsHandpickedSlug(
  args: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.handpicked[':slug'].$post(args, options))
}

export async function deleteMyFollowsHandpickedSlug(
  args: InferRequestType<(typeof client.my.follows.handpicked)[':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.handpicked[':slug'].$delete(args, options))
}

export async function getMyFollowsSearch(options?: ClientRequestOptions) {
  return await parseResponse(client.my.follows.search.$get(undefined, options))
}

export async function postMyFollowsSearch(
  args: InferRequestType<typeof client.my.follows.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.search.$post(args, options))
}

export async function getMyFollowsShopsSlug(
  args: InferRequestType<(typeof client.my.follows.shops)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.shops[':slug'].$get(args, options))
}

export async function postMyFollowsShopsSlug(
  args: InferRequestType<(typeof client.my.follows.shops)[':slug']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.shops[':slug'].$post(args, options))
}

export async function deleteMyFollowsShopsSlug(
  args: InferRequestType<(typeof client.my.follows.shops)[':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows.shops[':slug'].$delete(args, options))
}

export async function deleteMyFollowsFollowId(
  args: InferRequestType<(typeof client.my.follows)[':follow_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows[':follow_id'].$delete(args, options))
}

export async function postMyFollowsFollowIdAlert(
  args: InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows[':follow_id'].alert.$post(args, options))
}

export async function deleteMyFollowsFollowIdAlert(
  args: InferRequestType<(typeof client.my.follows)[':follow_id']['alert']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.follows[':follow_id'].alert.$delete(args, options))
}

export async function getMyListings(
  args: InferRequestType<typeof client.my.listings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.listings.$get(args, options))
}

export async function getMyListingsDrafts(
  args: InferRequestType<typeof client.my.listings.drafts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.listings.drafts.$get(args, options))
}

export async function getMyListingsNegotiations(
  args: InferRequestType<typeof client.my.listings.negotiations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.listings.negotiations.$get(args, options))
}

export async function putMyListingsSlugStateEnd(
  args: InferRequestType<(typeof client.my.listings)[':slug']['state']['end']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.listings[':slug'].state.end.$put(args, options))
}

export async function getMyLists(options?: ClientRequestOptions) {
  return await parseResponse(client.my.lists.$get(undefined, options))
}

export async function getMyNegotiationsBuying(
  args: InferRequestType<typeof client.my.negotiations.buying.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.negotiations.buying.$get(args, options))
}

export async function getMyNegotiationsId(
  args: InferRequestType<(typeof client.my.negotiations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.negotiations[':id'].$get(args, options))
}

export async function postMyNegotiationsIdAccept(
  args: InferRequestType<(typeof client.my.negotiations)[':id']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.negotiations[':id'].accept.$post(args, options))
}

export async function postMyNegotiationsIdCounter(
  args: InferRequestType<(typeof client.my.negotiations)[':id']['counter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.negotiations[':id'].counter.$post(args, options))
}

export async function postMyNegotiationsIdDecline(
  args: InferRequestType<(typeof client.my.negotiations)[':id']['decline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.negotiations[':id'].decline.$post(args, options))
}

export async function getMyOrdersAwaitingFeedback(options?: ClientRequestOptions) {
  return await parseResponse(client.my.orders.awaiting_feedback.$get(undefined, options))
}

export async function getMyOrdersBuyingAll(options?: ClientRequestOptions) {
  return await parseResponse(client.my.orders.buying.all.$get(undefined, options))
}

export async function getMyOrdersBuyingByUuidUuid(
  args: InferRequestType<(typeof client.my.orders.buying.by_uuid)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.orders.buying.by_uuid[':uuid'].$get(args, options))
}

export async function getMyOrdersBuyingUnpaid(options?: ClientRequestOptions) {
  return await parseResponse(client.my.orders.buying.unpaid.$get(undefined, options))
}

export async function getMyOrdersBuyingId(
  args: InferRequestType<(typeof client.my.orders.buying)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.orders.buying[':id'].$get(args, options))
}

export async function postMyOrdersBuyingIdMarkReceived(
  args: InferRequestType<(typeof client.my.orders.buying)[':id']['mark_received']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.orders.buying[':id'].mark_received.$post(args, options))
}

export async function getMyOrdersSellingAll(options?: ClientRequestOptions) {
  return await parseResponse(client.my.orders.selling.all.$get(undefined, options))
}

export async function getMyOrdersSellingAwaitingShipment(options?: ClientRequestOptions) {
  return await parseResponse(client.my.orders.selling.awaiting_shipment.$get(undefined, options))
}

export async function getMyOrdersSellingBuyerHistoryBuyerId(
  args: InferRequestType<(typeof client.my.orders.selling.buyer_history)[':buyer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.my.orders.selling.buyer_history[':buyer_id'].$get(args, options),
  )
}

export async function getMyOrdersSellingByUuidUuid(
  args: InferRequestType<(typeof client.my.orders.selling.by_uuid)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.orders.selling.by_uuid[':uuid'].$get(args, options))
}

export async function getMyOrdersSellingUnpaid(options?: ClientRequestOptions) {
  return await parseResponse(client.my.orders.selling.unpaid.$get(undefined, options))
}

export async function getMyOrdersSellingId(
  args: InferRequestType<(typeof client.my.orders.selling)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.orders.selling[':id'].$get(args, options))
}

export async function postMyOrdersSellingIdMarkPickedUp(
  args: InferRequestType<(typeof client.my.orders.selling)[':id']['mark_picked_up']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.orders.selling[':id'].mark_picked_up.$post(args, options))
}

export async function postMyOrdersSellingIdShip(
  args: InferRequestType<(typeof client.my.orders.selling)[':id']['ship']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.orders.selling[':id'].ship.$post(args, options))
}

export async function postMyOrdersSellingOrderIdRefundRequests(
  args: InferRequestType<
    (typeof client.my.orders.selling)[':order_id']['refund_requests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.my.orders.selling[':order_id'].refund_requests.$post(args, options),
  )
}

export async function getMyPaymentsSelling(
  args: InferRequestType<typeof client.my.payments.selling.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.payments.selling.$get(args, options))
}

export async function getMyPaymentsSellingId(
  args: InferRequestType<(typeof client.my.payments.selling)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.payments.selling[':id'].$get(args, options))
}

export async function getMyPayouts(options?: ClientRequestOptions) {
  return await parseResponse(client.my.payouts.$get(undefined, options))
}

export async function getMyPayoutsIdLineItems(
  args: InferRequestType<(typeof client.my.payouts)[':id']['line_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.payouts[':id'].line_items.$get(args, options))
}

export async function getMyRefundRequestsSelling(options?: ClientRequestOptions) {
  return await parseResponse(client.my.refund_requests.selling.$get(undefined, options))
}

export async function putMyRefundRequestsSellingId(
  args: InferRequestType<(typeof client.my.refund_requests.selling)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.refund_requests.selling[':id'].$put(args, options))
}

export async function getMyViewedListings(options?: ClientRequestOptions) {
  return await parseResponse(client.my.viewed_listings.$get(undefined, options))
}

export async function getMyWishlist(options?: ClientRequestOptions) {
  return await parseResponse(client.my.wishlist.$get(undefined, options))
}

export async function putMyWishlistId(
  args: InferRequestType<(typeof client.my.wishlist)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.wishlist[':id'].$put(args, options))
}

export async function deleteMyWishlistId(
  args: InferRequestType<(typeof client.my.wishlist)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.my.wishlist[':id'].$delete(args, options))
}

export async function getOrdersOrderIdFeedbackBuyer(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':order_id'].feedback.buyer.$get(args, options))
}

export async function postOrdersOrderIdFeedbackBuyer(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['buyer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':order_id'].feedback.buyer.$post(args, options))
}

export async function getOrdersOrderIdFeedbackSeller(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':order_id'].feedback.seller.$get(args, options))
}

export async function postOrdersOrderIdFeedbackSeller(
  args: InferRequestType<(typeof client.orders)[':order_id']['feedback']['seller']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':order_id'].feedback.seller.$post(args, options))
}

export async function getPaymentMethods(options?: ClientRequestOptions) {
  return await parseResponse(client.payment_methods.$get(undefined, options))
}

export async function getPriceguideIdTransactionsSummary(
  args: InferRequestType<(typeof client.priceguide)[':id']['transactions']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.priceguide[':id'].transactions.summary.$get(args, options))
}

export async function getProductsReviewsId(
  args: InferRequestType<(typeof client.products.reviews)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.reviews[':id'].$get(args, options))
}

export async function putProductsReviewsId(
  args: InferRequestType<(typeof client.products.reviews)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.reviews[':id'].$put(args, options))
}

export async function getProductsSlugReviews(
  args: InferRequestType<(typeof client.products)[':slug']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':slug'].reviews.$get(args, options))
}

export async function postProductsSlugReviews(
  args: InferRequestType<(typeof client.products)[':slug']['reviews']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':slug'].reviews.$post(args, options))
}

export async function getSalesReverb(options?: ClientRequestOptions) {
  return await parseResponse(client.sales.reverb.$get(undefined, options))
}

export async function getSalesSeller(options?: ClientRequestOptions) {
  return await parseResponse(client.sales.seller.$get(undefined, options))
}

export async function postSalesSaleIdListings(
  args: InferRequestType<(typeof client.sales)[':sale_id']['listings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales[':sale_id'].listings.$post(args, options))
}

export async function deleteSalesSaleIdListings(
  args: InferRequestType<(typeof client.sales)[':sale_id']['listings']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales[':sale_id'].listings.$delete(args, options))
}

export async function getSalesSlug(
  args: InferRequestType<(typeof client.sales)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales[':slug'].$get(args, options))
}

export async function getShippingProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.shipping.providers.$get(undefined, options))
}

export async function getShippingRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.shipping.regions.$get(undefined, options))
}

export async function getShop(options?: ClientRequestOptions) {
  return await parseResponse(client.shop.$get(undefined, options))
}

export async function putShop(
  args: InferRequestType<typeof client.shop.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shop.$put(args, options))
}

export async function getShopListingConditions(options?: ClientRequestOptions) {
  return await parseResponse(client.shop.listing_conditions.$get(undefined, options))
}

export async function getShopPaymentMethods(options?: ClientRequestOptions) {
  return await parseResponse(client.shop.payment_methods.$get(undefined, options))
}

export async function getShopVacation(options?: ClientRequestOptions) {
  return await parseResponse(client.shop.vacation.$get(undefined, options))
}

export async function postShopVacation(options?: ClientRequestOptions) {
  return await parseResponse(client.shop.vacation.$post(undefined, options))
}

export async function deleteShopVacation(options?: ClientRequestOptions) {
  return await parseResponse(client.shop.vacation.$delete(undefined, options))
}

export async function getShopsIdStorefronts(
  args: InferRequestType<(typeof client.shops)[':id']['storefronts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shops[':id'].storefronts.$get(args, options))
}

export async function getShopsShopIdShippingProfiles(
  args: InferRequestType<(typeof client.shops)[':shop_id']['shipping_profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shops[':shop_id'].shipping_profiles.$get(args, options))
}

export async function getShopsSlug(
  args: InferRequestType<(typeof client.shops)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shops[':slug'].$get(args, options))
}

export async function getShopsSlugFeedback(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shops[':slug'].feedback.$get(args, options))
}

export async function getShopsSlugFeedbackBuyer(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['buyer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shops[':slug'].feedback.buyer.$get(args, options))
}

export async function getShopsSlugFeedbackSeller(
  args: InferRequestType<(typeof client.shops)[':slug']['feedback']['seller']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shops[':slug'].feedback.seller.$get(args, options))
}

export async function getWants(options?: ClientRequestOptions) {
  return await parseResponse(client.wants.$get(undefined, options))
}

export async function putWantsId(
  args: InferRequestType<(typeof client.wants)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wants[':id'].$put(args, options))
}

export async function deleteWantsId(
  args: InferRequestType<(typeof client.wants)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wants[':id'].$delete(args, options))
}

export async function getWebhooksRegistrations(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.registrations.$get(undefined, options))
}

export async function postWebhooksRegistrations(
  args: InferRequestType<typeof client.webhooks.registrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.registrations.$post(args, options))
}

export async function getWebhooksRegistrationsId(
  args: InferRequestType<(typeof client.webhooks.registrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.registrations[':id'].$get(args, options))
}

export async function deleteWebhooksRegistrationsId(
  args: InferRequestType<(typeof client.webhooks.registrations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.registrations[':id'].$delete(args, options))
}
