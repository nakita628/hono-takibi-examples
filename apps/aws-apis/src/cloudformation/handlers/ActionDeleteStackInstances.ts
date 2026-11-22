import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteStackInstancesRoute, postActionDeleteStackInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteStackInstancesHandler = app
  .openapi(getActionDeleteStackInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteStackInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
