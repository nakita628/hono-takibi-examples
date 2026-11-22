import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOrdersOrderIdCompleteRoute,
  postOrdersOrderIdReadyforcollectionRoute,
  putOrdersOrderIdAcceptRoute,
  putOrdersOrderIdCancelRoute,
  putOrdersOrderIdDuedateRoute,
  putOrdersOrderIdIgnoreRoute,
  putOrdersOrderIdRejectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderAcceptanceAPIHandler = app
  .openapi(putOrdersOrderIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdCompleteRoute, (c) => {
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
