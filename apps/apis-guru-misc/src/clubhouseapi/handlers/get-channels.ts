import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const getChannelsHandler = app.openapi(getGetChannelsRoute, (c) => {
  throw new Error('Not implemented')
})
