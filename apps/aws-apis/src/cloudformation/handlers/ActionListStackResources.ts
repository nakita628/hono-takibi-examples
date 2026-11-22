import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListStackResourcesRoute, postActionListStackResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListStackResourcesHandler = app
  .openapi(getActionListStackResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListStackResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
