import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthenticatorsRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticatorsHandler = app.openapi(getAuthenticatorsRoute, (c) => {
  throw new Error('Not implemented')
})
