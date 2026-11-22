import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeliveryPoolsRoute,
  postDeliveryPoolsRoute,
  deleteDeliveryPoolsDeliveryPoolIdRoute,
  getDeliveryPoolsDeliveryPoolIdRoute,
  patchDeliveryPoolsDeliveryPoolIdRoute,
  putDeliveryPoolsDeliveryPoolIdRoute,
  getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute,
  putDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute,
  putDeliveryPoolsDeliveryPoolIdHoursRoute,
  deleteDeliveryPoolsDeliveryPoolIdRestaurantsRoute,
  putDeliveryPoolsDeliveryPoolIdRestaurantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deliveryPoolsAPIHandler = app
  .openapi(getDeliveryPoolsRoute, (c) => {})
  .openapi(postDeliveryPoolsRoute, (c) => {})
  .openapi(deleteDeliveryPoolsDeliveryPoolIdRoute, (c) => {})
  .openapi(getDeliveryPoolsDeliveryPoolIdRoute, (c) => {})
  .openapi(patchDeliveryPoolsDeliveryPoolIdRoute, (c) => {})
  .openapi(putDeliveryPoolsDeliveryPoolIdRoute, (c) => {})
  .openapi(getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute, (c) => {})
  .openapi(putDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute, (c) => {})
  .openapi(putDeliveryPoolsDeliveryPoolIdHoursRoute, (c) => {})
  .openapi(deleteDeliveryPoolsDeliveryPoolIdRestaurantsRoute, (c) => {})
  .openapi(putDeliveryPoolsDeliveryPoolIdRestaurantsRoute, (c) => {})
