import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRunScheduledInstancesRoute,
  postActionRunScheduledInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRunScheduledInstancesHandler = app
  .openapi(getActionRunScheduledInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRunScheduledInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
