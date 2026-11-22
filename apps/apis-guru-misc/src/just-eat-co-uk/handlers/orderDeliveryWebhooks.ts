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
  .openapi(putDriverAssignedToDeliveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDriverAtDeliveryAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDriverAtRestaurantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDriverHasDeliveredOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDriverLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDriverOnTheirWayToDeliveryAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrderIsReadyForPickupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrderRequiresDeliveryAcceptanceRoute, (c) => {
    throw new Error('Not implemented')
  })
