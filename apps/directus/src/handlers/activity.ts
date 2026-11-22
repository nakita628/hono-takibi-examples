import { OpenAPIHono } from '@hono/zod-openapi'
import { getActivityIdRoute, getActivityRoute } from '../routes'

const app = new OpenAPIHono()

export const activityHandler = app
  .openapi(getActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
