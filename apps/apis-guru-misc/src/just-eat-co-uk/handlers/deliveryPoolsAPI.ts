import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeliveryPoolsDeliveryPoolIdRestaurantsRoute,
  deleteDeliveryPoolsDeliveryPoolIdRoute,
  getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute,
  getDeliveryPoolsDeliveryPoolIdRoute,
  getDeliveryPoolsRoute,
  patchDeliveryPoolsDeliveryPoolIdRoute,
  postDeliveryPoolsRoute,
  putDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute,
  putDeliveryPoolsDeliveryPoolIdHoursRoute,
  putDeliveryPoolsDeliveryPoolIdRestaurantsRoute,
  putDeliveryPoolsDeliveryPoolIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deliveryPoolsAPIHandler = app
  .openapi(getDeliveryPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeliveryPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeliveryPoolsDeliveryPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeliveryPoolsDeliveryPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeliveryPoolsDeliveryPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeliveryPoolsDeliveryPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeliveryPoolsDeliveryPoolIdHoursRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeliveryPoolsDeliveryPoolIdRestaurantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeliveryPoolsDeliveryPoolIdRestaurantsRoute, (c) => {
    throw new Error('Not implemented')
  })
