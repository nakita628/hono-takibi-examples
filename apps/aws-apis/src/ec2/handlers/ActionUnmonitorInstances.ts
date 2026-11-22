import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUnmonitorInstancesRoute, postActionUnmonitorInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUnmonitorInstancesHandler = app
  .openapi(getActionUnmonitorInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUnmonitorInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
