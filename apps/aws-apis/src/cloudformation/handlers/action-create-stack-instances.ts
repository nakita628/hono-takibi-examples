import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateStackInstancesRoute, postActionCreateStackInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateStackInstancesHandler = app
  .openapi(getActionCreateStackInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateStackInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
