import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAcceptanceRequested(
  args: InferRequestType<(typeof client)['acceptance-requested']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['acceptance-requested'].$post(args, options))
}

export async function putAttemptedDeliveryQueryResolved(
  args: InferRequestType<(typeof client)['attempted-delivery-query-resolved']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attempted-delivery-query-resolved'].$put(args, options))
}

export async function getCheckoutTenantCheckoutId(
  args: InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checkout[':tenant'][':checkoutId'].$get(args, options))
}

export async function patchCheckoutTenantCheckoutId(
  args: InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checkout[':tenant'][':checkoutId'].$patch(args, options))
}

export async function getCheckoutTenantCheckoutIdFulfilmentAvailabletimes(
  args: InferRequestType<
    (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.checkout[':tenant'][':checkoutId'].fulfilment.availabletimes.$get(args, options),
  )
}

export async function getConsumersTenant(
  args: InferRequestType<(typeof client.consumers)[':tenant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumers[':tenant'].$get(args, options))
}

export async function postConsumersTenant(
  args: InferRequestType<(typeof client.consumers)[':tenant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumers[':tenant'].$post(args, options))
}

export async function getConsumersTenantMeCommunicationPreferences(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':tenant'].me['communication-preferences'].$get(args, options),
  )
}

export async function getConsumersTenantMeCommunicationPreferencesType(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':tenant'].me['communication-preferences'][':type'].$get(args, options),
  )
}

export async function putConsumersTenantMeCommunicationPreferencesType(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':tenant'].me['communication-preferences'][':type'].$put(args, options),
  )
}

export async function postConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannel(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':tenant'].me['communication-preferences'][':type'].subscribedChannels[
      ':channel'
    ].$post(args, options),
  )
}

export async function deleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannel(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':tenant'].me['communication-preferences'][':type'].subscribedChannels[
      ':channel'
    ].$delete(args, options),
  )
}

export async function putDeliveryFailed(
  args: InferRequestType<(typeof client)['delivery-failed']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['delivery-failed'].$put(args, options))
}

export async function getDeliveryFeesTenant(
  args: InferRequestType<(typeof client)['delivery-fees'][':tenant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['delivery-fees'][':tenant'].$get(args, options))
}

export async function getDeliveryEstimate(
  args: InferRequestType<typeof client.delivery.estimate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery.estimate.$get(args, options))
}

export async function getDeliveryPools(options?: ClientRequestOptions) {
  return await parseResponse(client.delivery.pools.$get(undefined, options))
}

export async function postDeliveryPools(
  args: InferRequestType<typeof client.delivery.pools.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery.pools.$post(args, options))
}

export async function getDeliveryPoolsDeliveryPoolId(
  args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery.pools[':deliveryPoolId'].$get(args, options))
}

export async function putDeliveryPoolsDeliveryPoolId(
  args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery.pools[':deliveryPoolId'].$put(args, options))
}

export async function deleteDeliveryPoolsDeliveryPoolId(
  args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery.pools[':deliveryPoolId'].$delete(args, options))
}

export async function patchDeliveryPoolsDeliveryPoolId(
  args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery.pools[':deliveryPoolId'].$patch(args, options))
}

export async function getDeliveryPoolsDeliveryPoolIdAvailabilityRelative(
  args: InferRequestType<
    (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.delivery.pools[':deliveryPoolId'].availability.relative.$get(args, options),
  )
}

export async function putDeliveryPoolsDeliveryPoolIdAvailabilityRelative(
  args: InferRequestType<
    (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.delivery.pools[':deliveryPoolId'].availability.relative.$put(args, options),
  )
}

export async function putDeliveryPoolsDeliveryPoolIdHours(
  args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['hours']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery.pools[':deliveryPoolId'].hours.$put(args, options))
}

export async function putDeliveryPoolsDeliveryPoolIdRestaurants(
  args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.delivery.pools[':deliveryPoolId'].restaurants.$put(args, options),
  )
}

export async function deleteDeliveryPoolsDeliveryPoolIdRestaurants(
  args: InferRequestType<
    (typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.delivery.pools[':deliveryPoolId'].restaurants.$delete(args, options),
  )
}

export async function putDriverAssignedToDelivery(
  args: InferRequestType<(typeof client)['driver-assigned-to-delivery']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['driver-assigned-to-delivery'].$put(args, options))
}

export async function putDriverAtDeliveryAddress(
  args: InferRequestType<(typeof client)['driver-at-delivery-address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['driver-at-delivery-address'].$put(args, options))
}

export async function putDriverAtRestaurant(
  args: InferRequestType<(typeof client)['driver-at-restaurant']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['driver-at-restaurant'].$put(args, options))
}

export async function putDriverHasDeliveredOrder(
  args: InferRequestType<(typeof client)['driver-has-delivered-order']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['driver-has-delivered-order'].$put(args, options))
}

export async function putDriverLocation(
  args: InferRequestType<(typeof client)['driver-location']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['driver-location'].$put(args, options))
}

export async function putDriverOnTheirWayToDeliveryAddress(
  args: InferRequestType<(typeof client)['driver-on-their-way-to-delivery-address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['driver-on-their-way-to-delivery-address'].$put(args, options))
}

export async function postLateOrderCompensationQuery(
  args: InferRequestType<(typeof client)['late-order-compensation-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['late-order-compensation-query'].$post(args, options))
}

export async function postLateOrderQuery(
  args: InferRequestType<(typeof client)['late-order-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['late-order-query'].$post(args, options))
}

export async function postMenuIngestionComplete(
  args: InferRequestType<(typeof client)['menu-ingestion-complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['menu-ingestion-complete'].$post(args, options))
}

export async function postOrderAccepted(
  args: InferRequestType<(typeof client)['order-accepted']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order-accepted'].$post(args, options))
}

export async function postOrderCancelled(
  args: InferRequestType<(typeof client)['order-cancelled']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order-cancelled'].$post(args, options))
}

export async function postOrderEligibleForRestaurantCompensation(
  args: InferRequestType<(typeof client)['order-eligible-for-restaurant-compensation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['order-eligible-for-restaurant-compensation'].$post(args, options),
  )
}

export async function putOrderIsReadyForPickup(
  args: InferRequestType<(typeof client)['order-is-ready-for-pickup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order-is-ready-for-pickup'].$put(args, options))
}

export async function postOrderReadyForPreparationAsync(
  args: InferRequestType<(typeof client)['order-ready-for-preparation-async']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order-ready-for-preparation-async'].$post(args, options))
}

export async function postOrderReadyForPreparationSync(
  args: InferRequestType<(typeof client)['order-ready-for-preparation-sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order-ready-for-preparation-sync'].$post(args, options))
}

export async function postOrderRejected(
  args: InferRequestType<(typeof client)['order-rejected']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order-rejected'].$post(args, options))
}

export async function putOrderRequiresDeliveryAcceptance(
  args: InferRequestType<(typeof client)['order-requires-delivery-acceptance']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order-requires-delivery-acceptance'].$put(args, options))
}

export async function postOrderTimeUpdated(
  args: InferRequestType<(typeof client)['order-time-updated']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order-time-updated'].$post(args, options))
}

export async function postOrders(
  args: InferRequestType<typeof client.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.$post(args, options))
}

export async function putOrdersDeliverystateDriverlocation(
  args: InferRequestType<typeof client.orders.deliverystate.driverlocation.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.deliverystate.driverlocation.$put(args, options))
}

export async function putOrdersOrderIdAccept(
  args: InferRequestType<(typeof client.orders)[':orderId']['accept']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':orderId'].accept.$put(args, options))
}

export async function putOrdersOrderIdCancel(
  args: InferRequestType<(typeof client.orders)[':orderId']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':orderId'].cancel.$put(args, options))
}

export async function postOrdersOrderIdComplete(
  args: InferRequestType<(typeof client.orders)[':orderId']['complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':orderId'].complete.$post(args, options))
}

export async function putOrdersOrderIdDeliverystateAtdeliveryaddress(
  args: InferRequestType<
    (typeof client.orders)[':orderId']['deliverystate']['atdeliveryaddress']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders[':orderId'].deliverystate.atdeliveryaddress.$put(args, options),
  )
}

export async function putOrdersOrderIdDeliverystateAtrestaurant(
  args: InferRequestType<
    (typeof client.orders)[':orderId']['deliverystate']['atrestaurant']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders[':orderId'].deliverystate.atrestaurant.$put(args, options),
  )
}

export async function putOrdersOrderIdDeliverystateAtrestauranteta(
  args: InferRequestType<
    (typeof client.orders)[':orderId']['deliverystate']['atrestauranteta']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders[':orderId'].deliverystate.atrestauranteta.$put(args, options),
  )
}

export async function putOrdersOrderIdDeliverystateDelivered(
  args: InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['delivered']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':orderId'].deliverystate.delivered.$put(args, options))
}

export async function putOrdersOrderIdDeliverystateDriverassigned(
  args: InferRequestType<
    (typeof client.orders)[':orderId']['deliverystate']['driverassigned']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders[':orderId'].deliverystate.driverassigned.$put(args, options),
  )
}

export async function putOrdersOrderIdDeliverystateDriverlocation(
  args: InferRequestType<
    (typeof client.orders)[':orderId']['deliverystate']['driverlocation']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders[':orderId'].deliverystate.driverlocation.$put(args, options),
  )
}

export async function putOrdersOrderIdDeliverystateDriverunassigned(
  args: InferRequestType<
    (typeof client.orders)[':orderId']['deliverystate']['driverunassigned']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders[':orderId'].deliverystate.driverunassigned.$put(args, options),
  )
}

export async function putOrdersOrderIdDeliverystateOnitsway(
  args: InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['onitsway']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':orderId'].deliverystate.onitsway.$put(args, options))
}

export async function putOrdersOrderIdDuedate(
  args: InferRequestType<(typeof client.orders)[':orderId']['duedate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':orderId'].duedate.$put(args, options))
}

export async function putOrdersOrderIdIgnore(
  args: InferRequestType<(typeof client.orders)[':orderId']['ignore']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':orderId'].ignore.$put(args, options))
}

export async function postOrdersOrderIdReadyforcollection(
  args: InferRequestType<(typeof client.orders)[':orderId']['readyforcollection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':orderId'].readyforcollection.$post(args, options))
}

export async function putOrdersOrderIdReject(
  args: InferRequestType<(typeof client.orders)[':orderId']['reject']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':orderId'].reject.$put(args, options))
}

export async function postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponse(
  args: InferRequestType<
    (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateorder']['restaurantresponse']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders[':tenant'][':orderId'].consumerqueries.lateorder.restaurantresponse.$post(
      args,
      options,
    ),
  )
}

export async function postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponse(
  args: InferRequestType<
    (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateordercompensation']['restaurantresponse']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders[':tenant'][
      ':orderId'
    ].consumerqueries.lateordercompensation.restaurantresponse.$post(args, options),
  )
}

export async function postOrdersTenantOrderIdRestaurantqueriesCompensation(
  args: InferRequestType<
    (typeof client.orders)[':tenant'][':orderId']['restaurantqueries']['compensation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders[':tenant'][':orderId'].restaurantqueries.compensation.$post(args, options),
  )
}

export async function putRedeliveryRequested(
  args: InferRequestType<(typeof client)['redelivery-requested']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['redelivery-requested'].$put(args, options))
}

export async function putRestaurantOfflineStatus(
  args: InferRequestType<(typeof client)['restaurant-offline-status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['restaurant-offline-status'].$put(args, options))
}

export async function putRestaurantOnlineStatus(
  args: InferRequestType<(typeof client)['restaurant-online-status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['restaurant-online-status'].$put(args, options))
}

export async function getRestaurantsBylatlong(
  args: InferRequestType<typeof client.restaurants.bylatlong.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restaurants.bylatlong.$get(args, options))
}

export async function getRestaurantsBypostcodePostcode(
  args: InferRequestType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restaurants.bypostcode[':postcode'].$get(args, options))
}

export async function putRestaurantsDriverEta(
  args: InferRequestType<typeof client.restaurants.driver.eta.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restaurants.driver.eta.$put(args, options))
}

export async function getRestaurantsTenantRestaurantIdCatalogue(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].catalogue.$get(args, options),
  )
}

export async function getRestaurantsTenantRestaurantIdCatalogueAvailabilities(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].catalogue.availabilities.$get(args, options),
  )
}

export async function getRestaurantsTenantRestaurantIdCatalogueCategories(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].catalogue.categories.$get(args, options),
  )
}

export async function getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItems(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].catalogue.categories[':categoryId'].items.$get(
      args,
      options,
    ),
  )
}

export async function getRestaurantsTenantRestaurantIdCatalogueItems(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].catalogue.items.$get(args, options),
  )
}

export async function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroups(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups.$get(
      args,
      options,
    ),
  )
}

export async function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariations(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups[
      ':dealGroupId'
    ].dealitemvariations.$get(args, options),
  )
}

export async function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroups(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].modifiergroups.$get(
      args,
      options,
    ),
  )
}

export async function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariations(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].variations.$get(
      args,
      options,
    ),
  )
}

export async function getRestaurantsTenantRestaurantIdCustomerclaims(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].customerclaims.$get(args, options),
  )
}

export async function getRestaurantsTenantRestaurantIdCustomerclaimsId(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].customerclaims[':id'].$get(args, options),
  )
}

export async function postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponse(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].customerclaims[':id'].restaurantresponse.$post(
      args,
      options,
    ),
  )
}

export async function putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustification(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['justification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].customerclaims[
      ':id'
    ].restaurantresponse.justification.$put(args, options),
  )
}

export async function getRestaurantsTenantRestaurantIdFees(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].fees.$get(args, options),
  )
}

export async function putRestaurantsTenantRestaurantIdFees(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].fees.$put(args, options),
  )
}

export async function getRestaurantsTenantRestaurantIdMenu(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].menu.$get(args, options),
  )
}

export async function putRestaurantsTenantRestaurantIdMenu(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].menu.$put(args, options),
  )
}

export async function getRestaurantsTenantRestaurantIdOrdertimes(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].ordertimes.$get(args, options),
  )
}

export async function putRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceType(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes'][':dayOfWeek'][':serviceType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].ordertimes[':dayOfWeek'][':serviceType'].$put(
      args,
      options,
    ),
  )
}

export async function getRestaurantsTenantRestaurantIdServicetimes(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].servicetimes.$get(args, options),
  )
}

export async function putRestaurantsTenantRestaurantIdServicetimes(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restaurants[':tenant'][':restaurantId'].servicetimes.$put(args, options),
  )
}

export async function getSearchAutocompleteTenant(
  args: InferRequestType<(typeof client.search.autocomplete)[':tenant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.autocomplete[':tenant'].$get(args, options))
}

export async function getSearchRestaurantsTenant(
  args: InferRequestType<(typeof client.search.restaurants)[':tenant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.restaurants[':tenant'].$get(args, options))
}

export async function postSendToPosFailed(
  args: InferRequestType<(typeof client)['send-to-pos-failed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['send-to-pos-failed'].$post(args, options))
}

export async function postV1TenantRestaurantsEventOffline(
  args: InferRequestType<(typeof client.v1)[':tenant']['restaurants']['event']['offline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':tenant'].restaurants.event.offline.$post(args, options))
}

export async function deleteV1TenantRestaurantsIdEventOffline(
  args: InferRequestType<
    (typeof client.v1)[':tenant']['restaurants'][':id']['event']['offline']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':tenant'].restaurants[':id'].event.offline.$delete(args, options),
  )
}

export async function postTenantOrdersOrderIdQueriesAttempteddelivery(
  args: InferRequestType<
    (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenant'].orders[':orderId'].queries.attempteddelivery.$post(args, options),
  )
}

export async function postTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorder(
  args: InferRequestType<
    (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['resolution']['redeliverorder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenant'].orders[':orderId'].queries.attempteddelivery.resolution.redeliverorder.$post(
      args,
      options,
    ),
  )
}
