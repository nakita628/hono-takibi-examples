import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListStackInstancesRoute, postActionListStackInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListStackInstancesHandler = app
  .openapi(getActionListStackInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListStackInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
