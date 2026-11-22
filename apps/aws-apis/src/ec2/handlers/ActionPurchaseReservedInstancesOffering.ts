import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPurchaseReservedInstancesOfferingRoute,
  postActionPurchaseReservedInstancesOfferingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionPurchaseReservedInstancesOfferingHandler = app
  .openapi(getActionPurchaseReservedInstancesOfferingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPurchaseReservedInstancesOfferingRoute, (c) => {
    throw new Error('Not implemented')
  })
