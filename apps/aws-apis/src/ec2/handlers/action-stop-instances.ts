import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStopInstancesRoute, postActionStopInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionStopInstancesHandler = app
  .openapi(getActionStopInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStopInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
