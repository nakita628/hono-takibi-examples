import { OpenAPIHono } from '@hono/zod-openapi'
import {
  putOrdersOrderIdAcceptRoute,
  putOrdersOrderIdCancelRoute,
  postOrdersOrderIdCompleteRoute,
  putOrdersOrderIdDuedateRoute,
  putOrdersOrderIdIgnoreRoute,
  postOrdersOrderIdReadyforcollectionRoute,
  putOrdersOrderIdRejectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderAcceptanceAPIHandler = app
  .openapi(putOrdersOrderIdAcceptRoute, (c) => {})
  .openapi(putOrdersOrderIdCancelRoute, (c) => {})
  .openapi(postOrdersOrderIdCompleteRoute, (c) => {})
  .openapi(putOrdersOrderIdDuedateRoute, (c) => {})
  .openapi(putOrdersOrderIdIgnoreRoute, (c) => {})
  .openapi(postOrdersOrderIdReadyforcollectionRoute, (c) => {})
  .openapi(putOrdersOrderIdRejectRoute, (c) => {})
