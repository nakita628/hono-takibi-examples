import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const fetchAccountInfoHandler = app.openapi(getAccountRoute, (c) => {
  throw new Error('Not implemented')
})
