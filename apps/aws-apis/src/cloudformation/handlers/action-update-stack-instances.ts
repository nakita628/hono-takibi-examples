import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateStackInstancesRoute, postActionUpdateStackInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUpdateStackInstancesHandler = app
  .openapi(getActionUpdateStackInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateStackInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
