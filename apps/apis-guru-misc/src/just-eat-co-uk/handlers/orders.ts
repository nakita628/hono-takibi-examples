import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOrdersOrderIdCompleteRoute,
  postOrdersOrderIdReadyforcollectionRoute,
  postOrdersRoute,
  postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseRoute,
  postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseRoute,
  postOrdersTenantOrderIdRestaurantqueriesCompensationRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(postOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersDeliverystateDriverlocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdCompleteRoute, (c) => {
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
  .openapi(putOrdersOrderIdDuedateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdIgnoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdReadyforcollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrdersTenantOrderIdRestaurantqueriesCompensationRoute, (c) => {
    throw new Error('Not implemented')
  })
