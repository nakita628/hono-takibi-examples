import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPurchaseReservedNodeOfferingRoute,
  postActionPurchaseReservedNodeOfferingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionPurchaseReservedNodeOfferingHandler = app
  .openapi(getActionPurchaseReservedNodeOfferingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPurchaseReservedNodeOfferingRoute, (c) => {
    throw new Error('Not implemented')
  })
