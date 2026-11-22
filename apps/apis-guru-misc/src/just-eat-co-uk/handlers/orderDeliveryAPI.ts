import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeliveryEstimateRoute,
  putOrdersDeliverystateDriverlocationRoute,
  putOrdersOrderIdDeliverystateAtdeliveryaddressRoute,
  putOrdersOrderIdDeliverystateAtrestaurantetaRoute,
  putOrdersOrderIdDeliverystateAtrestaurantRoute,
  putOrdersOrderIdDeliverystateDeliveredRoute,
  putOrdersOrderIdDeliverystateDriverassignedRoute,
  putOrdersOrderIdDeliverystateDriverlocationRoute,
  putOrdersOrderIdDeliverystateDriverunassignedRoute,
  putOrdersOrderIdDeliverystateOnitswayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderDeliveryAPIHandler = app
  .openapi(getDeliveryEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersDeliverystateDriverlocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdDeliverystateAtdeliveryaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdDeliverystateAtrestaurantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdDeliverystateAtrestaurantetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdDeliverystateDeliveredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdDeliverystateDriverassignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdDeliverystateDriverlocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdDeliverystateDriverunassignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdDeliverystateOnitswayRoute, (c) => {
    throw new Error('Not implemented')
  })
