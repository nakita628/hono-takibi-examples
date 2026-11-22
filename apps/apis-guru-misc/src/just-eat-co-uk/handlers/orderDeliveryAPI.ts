import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeliveryEstimateRoute,
  putOrdersDeliverystateDriverlocationRoute,
  putOrdersOrderIdDeliverystateAtdeliveryaddressRoute,
  putOrdersOrderIdDeliverystateAtrestaurantRoute,
  putOrdersOrderIdDeliverystateAtrestaurantetaRoute,
  putOrdersOrderIdDeliverystateDeliveredRoute,
  putOrdersOrderIdDeliverystateDriverassignedRoute,
  putOrdersOrderIdDeliverystateDriverlocationRoute,
  putOrdersOrderIdDeliverystateDriverunassignedRoute,
  putOrdersOrderIdDeliverystateOnitswayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderDeliveryAPIHandler = app
  .openapi(getDeliveryEstimateRoute, (c) => {})
  .openapi(putOrdersDeliverystateDriverlocationRoute, (c) => {})
  .openapi(putOrdersOrderIdDeliverystateAtdeliveryaddressRoute, (c) => {})
  .openapi(putOrdersOrderIdDeliverystateAtrestaurantRoute, (c) => {})
  .openapi(putOrdersOrderIdDeliverystateAtrestaurantetaRoute, (c) => {})
  .openapi(putOrdersOrderIdDeliverystateDeliveredRoute, (c) => {})
  .openapi(putOrdersOrderIdDeliverystateDriverassignedRoute, (c) => {})
  .openapi(putOrdersOrderIdDeliverystateDriverlocationRoute, (c) => {})
  .openapi(putOrdersOrderIdDeliverystateDriverunassignedRoute, (c) => {})
  .openapi(putOrdersOrderIdDeliverystateOnitswayRoute, (c) => {})
