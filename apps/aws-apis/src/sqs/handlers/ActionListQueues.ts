import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListQueuesRoute, postActionListQueuesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListQueuesHandler = app
  .openapi(getActionListQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
