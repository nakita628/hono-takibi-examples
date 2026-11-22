import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStartInstancesRoute, postActionStartInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionStartInstancesHandler = app
  .openapi(getActionStartInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
