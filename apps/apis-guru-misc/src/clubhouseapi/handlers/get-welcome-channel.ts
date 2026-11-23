import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetWelcomeChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const getWelcomeChannelHandler = app.openapi(getGetWelcomeChannelRoute, (c) => {
  throw new Error('Not implemented')
})
