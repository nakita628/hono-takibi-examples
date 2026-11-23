import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDetachInstancesRoute, postActionDetachInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDetachInstancesHandler = app
  .openapi(getActionDetachInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
