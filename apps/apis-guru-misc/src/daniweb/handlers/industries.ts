import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndustriesRoute } from '../routes'

const app = new OpenAPIHono()

export const industriesHandler = app.openapi(getIndustriesRoute, (c) => {
  throw new Error('Not implemented')
})
