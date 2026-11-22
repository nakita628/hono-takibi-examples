import { OpenAPIHono } from '@hono/zod-openapi'
import { getSlackRoute, postSlackRoute } from '../routes'

const app = new OpenAPIHono()

export const slackHandler = app
  .openapi(getSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
