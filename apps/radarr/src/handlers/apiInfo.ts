import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiRoute } from '../routes'

const app = new OpenAPIHono()

export const apiInfoHandler = app.openapi(getApiRoute, (c) => {
  throw new Error('Not implemented')
})
