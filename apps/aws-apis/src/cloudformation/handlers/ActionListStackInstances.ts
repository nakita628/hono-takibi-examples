import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListStackInstancesRoute, postActionListStackInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListStackInstancesHandler = app
  .openapi(getActionListStackInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListStackInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
