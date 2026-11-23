import { OpenAPIHono } from '@hono/zod-openapi'
import {
  acceptanceRequestedHandler,
  attemptedDeliveryQueryResolvedHandler,
  checkoutHandler,
  consumersHandler,
  deliveryFailedHandler,
  deliveryFeesHandler,
  deliveryHandler,
  driverAssignedToDeliveryHandler,
  driverAtDeliveryAddressHandler,
  driverAtRestaurantHandler,
  driverHasDeliveredOrderHandler,
  driverLocationHandler,
  driverOnTheirWayToDeliveryAddressHandler,
  lateOrderCompensationQueryHandler,
  lateOrderQueryHandler,
  menuIngestionCompleteHandler,
  orderAcceptedHandler,
  orderCancelledHandler,
  orderEligibleForRestaurantCompensationHandler,
  orderIsReadyForPickupHandler,
  orderReadyForPreparationAsyncHandler,
  orderReadyForPreparationSyncHandler,
  orderRejectedHandler,
  orderRequiresDeliveryAcceptanceHandler,
  ordersHandler,
  orderTimeUpdatedHandler,
  redeliveryRequestedHandler,
  restaurantOfflineStatusHandler,
  restaurantOnlineStatusHandler,
  restaurantsHandler,
  searchHandler,
  sendToPosFailedHandler,
  tenantHandler,
  v1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', acceptanceRequestedHandler)
  .route('/', attemptedDeliveryQueryResolvedHandler)
  .route('/', checkoutHandler)
  .route('/', consumersHandler)
  .route('/', deliveryFailedHandler)
  .route('/', deliveryFeesHandler)
  .route('/', deliveryHandler)
  .route('/', driverAssignedToDeliveryHandler)
  .route('/', driverAtDeliveryAddressHandler)
  .route('/', driverAtRestaurantHandler)
  .route('/', driverHasDeliveredOrderHandler)
  .route('/', driverLocationHandler)
  .route('/', driverOnTheirWayToDeliveryAddressHandler)
  .route('/', lateOrderCompensationQueryHandler)
  .route('/', lateOrderQueryHandler)
  .route('/', menuIngestionCompleteHandler)
  .route('/', orderAcceptedHandler)
  .route('/', orderCancelledHandler)
  .route('/', orderEligibleForRestaurantCompensationHandler)
  .route('/', orderIsReadyForPickupHandler)
  .route('/', orderReadyForPreparationAsyncHandler)
  .route('/', orderReadyForPreparationSyncHandler)
  .route('/', orderRejectedHandler)
  .route('/', orderRequiresDeliveryAcceptanceHandler)
  .route('/', orderTimeUpdatedHandler)
  .route('/', ordersHandler)
  .route('/', redeliveryRequestedHandler)
  .route('/', restaurantOfflineStatusHandler)
  .route('/', restaurantOnlineStatusHandler)
  .route('/', restaurantsHandler)
  .route('/', searchHandler)
  .route('/', sendToPosFailedHandler)
  .route('/', v1Handler)
  .route('/', tenantHandler)

export default app
