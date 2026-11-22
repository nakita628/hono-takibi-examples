import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRunInstancesRoute, postActionRunInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRunInstancesHandler = app
  .openapi(getActionRunInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRunInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
