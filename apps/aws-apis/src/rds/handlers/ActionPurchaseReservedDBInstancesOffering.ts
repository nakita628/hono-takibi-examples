import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPurchaseReservedDBInstancesOfferingRoute,
  postActionPurchaseReservedDBInstancesOfferingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionPurchaseReservedDBInstancesOfferingHandler = app
  .openapi(getActionPurchaseReservedDBInstancesOfferingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPurchaseReservedDBInstancesOfferingRoute, (c) => {
    throw new Error('Not implemented')
  })
