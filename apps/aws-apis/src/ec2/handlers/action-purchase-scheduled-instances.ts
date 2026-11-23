import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPurchaseScheduledInstancesRoute,
  postActionPurchaseScheduledInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionPurchaseScheduledInstancesHandler = app
  .openapi(getActionPurchaseScheduledInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPurchaseScheduledInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
