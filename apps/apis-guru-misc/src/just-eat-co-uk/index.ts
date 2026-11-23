import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute,
  deleteDeliveryPoolsDeliveryPoolIdRestaurantsRoute,
  deleteDeliveryPoolsDeliveryPoolIdRoute,
  deleteV1TenantRestaurantsIdEventOfflineRoute,
  getCheckoutTenantCheckoutIdFulfilmentAvailabletimesRoute,
  getCheckoutTenantCheckoutIdRoute,
  getConsumersTenantMeCommunicationPreferencesRoute,
  getConsumersTenantMeCommunicationPreferencesTypeRoute,
  getConsumersTenantRoute,
  getDeliveryEstimateRoute,
  getDeliveryFeesTenantRoute,
  getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute,
  getDeliveryPoolsDeliveryPoolIdRoute,
  getDeliveryPoolsRoute,
  getRestaurantsBylatlongRoute,
  getRestaurantsBypostcodePostcodeRoute,
  getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesRoute,
  getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsRoute,
  getRestaurantsTenantRestaurantIdCatalogueCategoriesRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsRoute,
  getRestaurantsTenantRestaurantIdCatalogueRoute,
  getRestaurantsTenantRestaurantIdCustomerclaimsIdRoute,
  getRestaurantsTenantRestaurantIdCustomerclaimsRoute,
  getRestaurantsTenantRestaurantIdFeesRoute,
  getRestaurantsTenantRestaurantIdMenuRoute,
  getRestaurantsTenantRestaurantIdOrdertimesRoute,
  getRestaurantsTenantRestaurantIdServicetimesRoute,
  getSearchAutocompleteTenantRoute,
  getSearchRestaurantsTenantRoute,
  patchCheckoutTenantCheckoutIdRoute,
  patchDeliveryPoolsDeliveryPoolIdRoute,
  postAcceptanceRequestedRoute,
  postConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute,
  postConsumersTenantRoute,
  postDeliveryPoolsRoute,
  postLateOrderCompensationQueryRoute,
  postLateOrderQueryRoute,
  postMenuIngestionCompleteRoute,
  postOrderAcceptedRoute,
  postOrderCancelledRoute,
  postOrderEligibleForRestaurantCompensationRoute,
  postOrderReadyForPreparationAsyncRoute,
  postOrderReadyForPreparationSyncRoute,
  postOrderRejectedRoute,
  postOrdersOrderIdCompleteRoute,
  postOrdersOrderIdReadyforcollectionRoute,
  postOrdersRoute,
  postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseRoute,
  postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseRoute,
  postOrdersTenantOrderIdRestaurantqueriesCompensationRoute,
  postOrderTimeUpdatedRoute,
  postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseRoute,
  postSendToPosFailedRoute,
  postTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderRoute,
  postTenantOrdersOrderIdQueriesAttempteddeliveryRoute,
  postV1TenantRestaurantsEventOfflineRoute,
  putAttemptedDeliveryQueryResolvedRoute,
  putConsumersTenantMeCommunicationPreferencesTypeRoute,
  putDeliveryFailedRoute,
  putDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute,
  putDeliveryPoolsDeliveryPoolIdHoursRoute,
  putDeliveryPoolsDeliveryPoolIdRestaurantsRoute,
  putDeliveryPoolsDeliveryPoolIdRoute,
  putDriverAssignedToDeliveryRoute,
  putDriverAtDeliveryAddressRoute,
  putDriverAtRestaurantRoute,
  putDriverHasDeliveredOrderRoute,
  putDriverLocationRoute,
  putDriverOnTheirWayToDeliveryAddressRoute,
  putOrderIsReadyForPickupRoute,
  putOrderRequiresDeliveryAcceptanceRoute,
  putOrdersDeliverystateDriverlocationRoute,
  putOrdersOrderIdAcceptRoute,
  putOrdersOrderIdCancelRoute,
  putOrdersOrderIdDeliverystateAtdeliveryaddressRoute,
  putOrdersOrderIdDeliverystateAtrestaurantetaRoute,
  putOrdersOrderIdDeliverystateAtrestaurantRoute,
  putOrdersOrderIdDeliverystateDeliveredRoute,
  putOrdersOrderIdDeliverystateDriverassignedRoute,
  putOrdersOrderIdDeliverystateDriverlocationRoute,
  putOrdersOrderIdDeliverystateDriverunassignedRoute,
  putOrdersOrderIdDeliverystateOnitswayRoute,
  putOrdersOrderIdDuedateRoute,
  putOrdersOrderIdIgnoreRoute,
  putOrdersOrderIdRejectRoute,
  putRedeliveryRequestedRoute,
  putRestaurantOfflineStatusRoute,
  putRestaurantOnlineStatusRoute,
  putRestaurantsDriverEtaRoute,
  putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationRoute,
  putRestaurantsTenantRestaurantIdFeesRoute,
  putRestaurantsTenantRestaurantIdMenuRoute,
  putRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeRoute,
  putRestaurantsTenantRestaurantIdServicetimesRoute,
} from './routes'
import {
  deleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRouteHandler,
  deleteDeliveryPoolsDeliveryPoolIdRestaurantsRouteHandler,
  deleteDeliveryPoolsDeliveryPoolIdRouteHandler,
  deleteV1TenantRestaurantsIdEventOfflineRouteHandler,
  getCheckoutTenantCheckoutIdFulfilmentAvailabletimesRouteHandler,
  getCheckoutTenantCheckoutIdRouteHandler,
  getConsumersTenantMeCommunicationPreferencesRouteHandler,
  getConsumersTenantMeCommunicationPreferencesTypeRouteHandler,
  getConsumersTenantRouteHandler,
  getDeliveryEstimateRouteHandler,
  getDeliveryFeesTenantRouteHandler,
  getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRouteHandler,
  getDeliveryPoolsDeliveryPoolIdRouteHandler,
  getDeliveryPoolsRouteHandler,
  getRestaurantsBylatlongRouteHandler,
  getRestaurantsBypostcodePostcodeRouteHandler,
  getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesRouteHandler,
  getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsRouteHandler,
  getRestaurantsTenantRestaurantIdCatalogueCategoriesRouteHandler,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsRouteHandler,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsRouteHandler,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsRouteHandler,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsRouteHandler,
  getRestaurantsTenantRestaurantIdCatalogueItemsRouteHandler,
  getRestaurantsTenantRestaurantIdCatalogueRouteHandler,
  getRestaurantsTenantRestaurantIdCustomerclaimsIdRouteHandler,
  getRestaurantsTenantRestaurantIdCustomerclaimsRouteHandler,
  getRestaurantsTenantRestaurantIdFeesRouteHandler,
  getRestaurantsTenantRestaurantIdMenuRouteHandler,
  getRestaurantsTenantRestaurantIdOrdertimesRouteHandler,
  getRestaurantsTenantRestaurantIdServicetimesRouteHandler,
  getSearchAutocompleteTenantRouteHandler,
  getSearchRestaurantsTenantRouteHandler,
  patchCheckoutTenantCheckoutIdRouteHandler,
  patchDeliveryPoolsDeliveryPoolIdRouteHandler,
  postAcceptanceRequestedRouteHandler,
  postConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRouteHandler,
  postConsumersTenantRouteHandler,
  postDeliveryPoolsRouteHandler,
  postLateOrderCompensationQueryRouteHandler,
  postLateOrderQueryRouteHandler,
  postMenuIngestionCompleteRouteHandler,
  postOrderAcceptedRouteHandler,
  postOrderCancelledRouteHandler,
  postOrderEligibleForRestaurantCompensationRouteHandler,
  postOrderReadyForPreparationAsyncRouteHandler,
  postOrderReadyForPreparationSyncRouteHandler,
  postOrderRejectedRouteHandler,
  postOrdersOrderIdCompleteRouteHandler,
  postOrdersOrderIdReadyforcollectionRouteHandler,
  postOrdersRouteHandler,
  postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseRouteHandler,
  postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseRouteHandler,
  postOrdersTenantOrderIdRestaurantqueriesCompensationRouteHandler,
  postOrderTimeUpdatedRouteHandler,
  postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseRouteHandler,
  postSendToPosFailedRouteHandler,
  postTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderRouteHandler,
  postTenantOrdersOrderIdQueriesAttempteddeliveryRouteHandler,
  postV1TenantRestaurantsEventOfflineRouteHandler,
  putAttemptedDeliveryQueryResolvedRouteHandler,
  putConsumersTenantMeCommunicationPreferencesTypeRouteHandler,
  putDeliveryFailedRouteHandler,
  putDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRouteHandler,
  putDeliveryPoolsDeliveryPoolIdHoursRouteHandler,
  putDeliveryPoolsDeliveryPoolIdRestaurantsRouteHandler,
  putDeliveryPoolsDeliveryPoolIdRouteHandler,
  putDriverAssignedToDeliveryRouteHandler,
  putDriverAtDeliveryAddressRouteHandler,
  putDriverAtRestaurantRouteHandler,
  putDriverHasDeliveredOrderRouteHandler,
  putDriverLocationRouteHandler,
  putDriverOnTheirWayToDeliveryAddressRouteHandler,
  putOrderIsReadyForPickupRouteHandler,
  putOrderRequiresDeliveryAcceptanceRouteHandler,
  putOrdersDeliverystateDriverlocationRouteHandler,
  putOrdersOrderIdAcceptRouteHandler,
  putOrdersOrderIdCancelRouteHandler,
  putOrdersOrderIdDeliverystateAtdeliveryaddressRouteHandler,
  putOrdersOrderIdDeliverystateAtrestaurantetaRouteHandler,
  putOrdersOrderIdDeliverystateAtrestaurantRouteHandler,
  putOrdersOrderIdDeliverystateDeliveredRouteHandler,
  putOrdersOrderIdDeliverystateDriverassignedRouteHandler,
  putOrdersOrderIdDeliverystateDriverlocationRouteHandler,
  putOrdersOrderIdDeliverystateDriverunassignedRouteHandler,
  putOrdersOrderIdDeliverystateOnitswayRouteHandler,
  putOrdersOrderIdDuedateRouteHandler,
  putOrdersOrderIdIgnoreRouteHandler,
  putOrdersOrderIdRejectRouteHandler,
  putRedeliveryRequestedRouteHandler,
  putRestaurantOfflineStatusRouteHandler,
  putRestaurantOnlineStatusRouteHandler,
  putRestaurantsDriverEtaRouteHandler,
  putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationRouteHandler,
  putRestaurantsTenantRestaurantIdFeesRouteHandler,
  putRestaurantsTenantRestaurantIdMenuRouteHandler,
  putRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeRouteHandler,
  putRestaurantsTenantRestaurantIdServicetimesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAcceptanceRequestedRoute, postAcceptanceRequestedRouteHandler)
  .openapi(putAttemptedDeliveryQueryResolvedRoute, putAttemptedDeliveryQueryResolvedRouteHandler)
  .openapi(getCheckoutTenantCheckoutIdRoute, getCheckoutTenantCheckoutIdRouteHandler)
  .openapi(patchCheckoutTenantCheckoutIdRoute, patchCheckoutTenantCheckoutIdRouteHandler)
  .openapi(
    getCheckoutTenantCheckoutIdFulfilmentAvailabletimesRoute,
    getCheckoutTenantCheckoutIdFulfilmentAvailabletimesRouteHandler,
  )
  .openapi(getConsumersTenantRoute, getConsumersTenantRouteHandler)
  .openapi(postConsumersTenantRoute, postConsumersTenantRouteHandler)
  .openapi(
    getConsumersTenantMeCommunicationPreferencesRoute,
    getConsumersTenantMeCommunicationPreferencesRouteHandler,
  )
  .openapi(
    getConsumersTenantMeCommunicationPreferencesTypeRoute,
    getConsumersTenantMeCommunicationPreferencesTypeRouteHandler,
  )
  .openapi(
    putConsumersTenantMeCommunicationPreferencesTypeRoute,
    putConsumersTenantMeCommunicationPreferencesTypeRouteHandler,
  )
  .openapi(
    deleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute,
    deleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRouteHandler,
  )
  .openapi(
    postConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute,
    postConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRouteHandler,
  )
  .openapi(putDeliveryFailedRoute, putDeliveryFailedRouteHandler)
  .openapi(getDeliveryFeesTenantRoute, getDeliveryFeesTenantRouteHandler)
  .openapi(getDeliveryEstimateRoute, getDeliveryEstimateRouteHandler)
  .openapi(getDeliveryPoolsRoute, getDeliveryPoolsRouteHandler)
  .openapi(postDeliveryPoolsRoute, postDeliveryPoolsRouteHandler)
  .openapi(deleteDeliveryPoolsDeliveryPoolIdRoute, deleteDeliveryPoolsDeliveryPoolIdRouteHandler)
  .openapi(getDeliveryPoolsDeliveryPoolIdRoute, getDeliveryPoolsDeliveryPoolIdRouteHandler)
  .openapi(patchDeliveryPoolsDeliveryPoolIdRoute, patchDeliveryPoolsDeliveryPoolIdRouteHandler)
  .openapi(putDeliveryPoolsDeliveryPoolIdRoute, putDeliveryPoolsDeliveryPoolIdRouteHandler)
  .openapi(
    getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute,
    getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRouteHandler,
  )
  .openapi(
    putDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute,
    putDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRouteHandler,
  )
  .openapi(
    putDeliveryPoolsDeliveryPoolIdHoursRoute,
    putDeliveryPoolsDeliveryPoolIdHoursRouteHandler,
  )
  .openapi(
    deleteDeliveryPoolsDeliveryPoolIdRestaurantsRoute,
    deleteDeliveryPoolsDeliveryPoolIdRestaurantsRouteHandler,
  )
  .openapi(
    putDeliveryPoolsDeliveryPoolIdRestaurantsRoute,
    putDeliveryPoolsDeliveryPoolIdRestaurantsRouteHandler,
  )
  .openapi(putDriverAssignedToDeliveryRoute, putDriverAssignedToDeliveryRouteHandler)
  .openapi(putDriverAtDeliveryAddressRoute, putDriverAtDeliveryAddressRouteHandler)
  .openapi(putDriverAtRestaurantRoute, putDriverAtRestaurantRouteHandler)
  .openapi(putDriverHasDeliveredOrderRoute, putDriverHasDeliveredOrderRouteHandler)
  .openapi(putDriverLocationRoute, putDriverLocationRouteHandler)
  .openapi(
    putDriverOnTheirWayToDeliveryAddressRoute,
    putDriverOnTheirWayToDeliveryAddressRouteHandler,
  )
  .openapi(postLateOrderCompensationQueryRoute, postLateOrderCompensationQueryRouteHandler)
  .openapi(postLateOrderQueryRoute, postLateOrderQueryRouteHandler)
  .openapi(postMenuIngestionCompleteRoute, postMenuIngestionCompleteRouteHandler)
  .openapi(postOrderAcceptedRoute, postOrderAcceptedRouteHandler)
  .openapi(postOrderCancelledRoute, postOrderCancelledRouteHandler)
  .openapi(
    postOrderEligibleForRestaurantCompensationRoute,
    postOrderEligibleForRestaurantCompensationRouteHandler,
  )
  .openapi(putOrderIsReadyForPickupRoute, putOrderIsReadyForPickupRouteHandler)
  .openapi(postOrderReadyForPreparationAsyncRoute, postOrderReadyForPreparationAsyncRouteHandler)
  .openapi(postOrderReadyForPreparationSyncRoute, postOrderReadyForPreparationSyncRouteHandler)
  .openapi(postOrderRejectedRoute, postOrderRejectedRouteHandler)
  .openapi(putOrderRequiresDeliveryAcceptanceRoute, putOrderRequiresDeliveryAcceptanceRouteHandler)
  .openapi(postOrderTimeUpdatedRoute, postOrderTimeUpdatedRouteHandler)
  .openapi(postOrdersRoute, postOrdersRouteHandler)
  .openapi(
    putOrdersDeliverystateDriverlocationRoute,
    putOrdersDeliverystateDriverlocationRouteHandler,
  )
  .openapi(putOrdersOrderIdAcceptRoute, putOrdersOrderIdAcceptRouteHandler)
  .openapi(putOrdersOrderIdCancelRoute, putOrdersOrderIdCancelRouteHandler)
  .openapi(postOrdersOrderIdCompleteRoute, postOrdersOrderIdCompleteRouteHandler)
  .openapi(
    putOrdersOrderIdDeliverystateAtdeliveryaddressRoute,
    putOrdersOrderIdDeliverystateAtdeliveryaddressRouteHandler,
  )
  .openapi(
    putOrdersOrderIdDeliverystateAtrestaurantRoute,
    putOrdersOrderIdDeliverystateAtrestaurantRouteHandler,
  )
  .openapi(
    putOrdersOrderIdDeliverystateAtrestaurantetaRoute,
    putOrdersOrderIdDeliverystateAtrestaurantetaRouteHandler,
  )
  .openapi(
    putOrdersOrderIdDeliverystateDeliveredRoute,
    putOrdersOrderIdDeliverystateDeliveredRouteHandler,
  )
  .openapi(
    putOrdersOrderIdDeliverystateDriverassignedRoute,
    putOrdersOrderIdDeliverystateDriverassignedRouteHandler,
  )
  .openapi(
    putOrdersOrderIdDeliverystateDriverlocationRoute,
    putOrdersOrderIdDeliverystateDriverlocationRouteHandler,
  )
  .openapi(
    putOrdersOrderIdDeliverystateDriverunassignedRoute,
    putOrdersOrderIdDeliverystateDriverunassignedRouteHandler,
  )
  .openapi(
    putOrdersOrderIdDeliverystateOnitswayRoute,
    putOrdersOrderIdDeliverystateOnitswayRouteHandler,
  )
  .openapi(putOrdersOrderIdDuedateRoute, putOrdersOrderIdDuedateRouteHandler)
  .openapi(putOrdersOrderIdIgnoreRoute, putOrdersOrderIdIgnoreRouteHandler)
  .openapi(
    postOrdersOrderIdReadyforcollectionRoute,
    postOrdersOrderIdReadyforcollectionRouteHandler,
  )
  .openapi(putOrdersOrderIdRejectRoute, putOrdersOrderIdRejectRouteHandler)
  .openapi(
    postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseRoute,
    postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseRouteHandler,
  )
  .openapi(
    postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseRoute,
    postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseRouteHandler,
  )
  .openapi(
    postOrdersTenantOrderIdRestaurantqueriesCompensationRoute,
    postOrdersTenantOrderIdRestaurantqueriesCompensationRouteHandler,
  )
  .openapi(putRedeliveryRequestedRoute, putRedeliveryRequestedRouteHandler)
  .openapi(putRestaurantOfflineStatusRoute, putRestaurantOfflineStatusRouteHandler)
  .openapi(putRestaurantOnlineStatusRoute, putRestaurantOnlineStatusRouteHandler)
  .openapi(getRestaurantsBylatlongRoute, getRestaurantsBylatlongRouteHandler)
  .openapi(getRestaurantsBypostcodePostcodeRoute, getRestaurantsBypostcodePostcodeRouteHandler)
  .openapi(putRestaurantsDriverEtaRoute, putRestaurantsDriverEtaRouteHandler)
  .openapi(
    getRestaurantsTenantRestaurantIdCatalogueRoute,
    getRestaurantsTenantRestaurantIdCatalogueRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesRoute,
    getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdCatalogueCategoriesRoute,
    getRestaurantsTenantRestaurantIdCatalogueCategoriesRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsRoute,
    getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdCatalogueItemsRoute,
    getRestaurantsTenantRestaurantIdCatalogueItemsRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsRoute,
    getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsRoute,
    getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsRoute,
    getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsRoute,
    getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdCustomerclaimsRoute,
    getRestaurantsTenantRestaurantIdCustomerclaimsRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdCustomerclaimsIdRoute,
    getRestaurantsTenantRestaurantIdCustomerclaimsIdRouteHandler,
  )
  .openapi(
    postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseRoute,
    postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseRouteHandler,
  )
  .openapi(
    putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationRoute,
    putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdFeesRoute,
    getRestaurantsTenantRestaurantIdFeesRouteHandler,
  )
  .openapi(
    putRestaurantsTenantRestaurantIdFeesRoute,
    putRestaurantsTenantRestaurantIdFeesRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdMenuRoute,
    getRestaurantsTenantRestaurantIdMenuRouteHandler,
  )
  .openapi(
    putRestaurantsTenantRestaurantIdMenuRoute,
    putRestaurantsTenantRestaurantIdMenuRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdOrdertimesRoute,
    getRestaurantsTenantRestaurantIdOrdertimesRouteHandler,
  )
  .openapi(
    putRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeRoute,
    putRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeRouteHandler,
  )
  .openapi(
    getRestaurantsTenantRestaurantIdServicetimesRoute,
    getRestaurantsTenantRestaurantIdServicetimesRouteHandler,
  )
  .openapi(
    putRestaurantsTenantRestaurantIdServicetimesRoute,
    putRestaurantsTenantRestaurantIdServicetimesRouteHandler,
  )
  .openapi(getSearchAutocompleteTenantRoute, getSearchAutocompleteTenantRouteHandler)
  .openapi(getSearchRestaurantsTenantRoute, getSearchRestaurantsTenantRouteHandler)
  .openapi(postSendToPosFailedRoute, postSendToPosFailedRouteHandler)
  .openapi(
    postV1TenantRestaurantsEventOfflineRoute,
    postV1TenantRestaurantsEventOfflineRouteHandler,
  )
  .openapi(
    deleteV1TenantRestaurantsIdEventOfflineRoute,
    deleteV1TenantRestaurantsIdEventOfflineRouteHandler,
  )
  .openapi(
    postTenantOrdersOrderIdQueriesAttempteddeliveryRoute,
    postTenantOrdersOrderIdQueriesAttempteddeliveryRouteHandler,
  )
  .openapi(
    postTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderRoute,
    postTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderRouteHandler,
  )

export default app
