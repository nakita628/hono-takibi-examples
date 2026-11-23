import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const ipInfoHandler = app.openapi(getIpInfoRoute, (c) => {
  throw new Error('Not implemented')
})
