import { OpenAPIHono } from '@hono/zod-openapi'
import {
  putDriverAssignedToDeliveryRoute,
  putDriverAtDeliveryAddressRoute,
  putDriverAtRestaurantRoute,
  putDriverHasDeliveredOrderRoute,
  putDriverLocationRoute,
  putDriverOnTheirWayToDeliveryAddressRoute,
  putOrderIsReadyForPickupRoute,
  putOrderRequiresDeliveryAcceptanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderDeliveryWebhooksHandler = app
  .openapi(putDriverAssignedToDeliveryRoute, (c) => {})
  .openapi(putDriverAtDeliveryAddressRoute, (c) => {})
  .openapi(putDriverAtRestaurantRoute, (c) => {})
  .openapi(putDriverHasDeliveredOrderRoute, (c) => {})
  .openapi(putDriverLocationRoute, (c) => {})
  .openapi(putDriverOnTheirWayToDeliveryAddressRoute, (c) => {})
  .openapi(putOrderIsReadyForPickupRoute, (c) => {})
  .openapi(putOrderRequiresDeliveryAcceptanceRoute, (c) => {})
