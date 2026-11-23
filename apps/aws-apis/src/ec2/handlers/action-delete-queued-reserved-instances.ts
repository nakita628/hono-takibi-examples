import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteQueuedReservedInstancesRoute,
  postActionDeleteQueuedReservedInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteQueuedReservedInstancesHandler = app
  .openapi(getActionDeleteQueuedReservedInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteQueuedReservedInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
