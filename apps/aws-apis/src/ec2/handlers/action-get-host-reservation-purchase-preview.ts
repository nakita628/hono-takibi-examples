import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetHostReservationPurchasePreviewRoute,
  postActionGetHostReservationPurchasePreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetHostReservationPurchasePreviewHandler = app
  .openapi(getActionGetHostReservationPurchasePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetHostReservationPurchasePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
