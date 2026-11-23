import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListGroupsRoute, postActionListGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListGroupsHandler = app
  .openapi(getActionListGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
