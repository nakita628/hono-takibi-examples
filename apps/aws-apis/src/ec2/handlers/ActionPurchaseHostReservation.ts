import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPurchaseHostReservationRoute,
  postActionPurchaseHostReservationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionPurchaseHostReservationHandler = app
  .openapi(getActionPurchaseHostReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPurchaseHostReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
