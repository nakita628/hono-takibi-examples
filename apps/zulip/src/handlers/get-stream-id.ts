import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetStreamIdRoute } from '../routes'

const app = new OpenAPIHono()

export const getStreamIdHandler = app.openapi(getGetStreamIdRoute, (c) => {
  throw new Error('Not implemented')
})
