import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app.openapi(getAccountNumbersRoute, (c) => {
  throw new Error('Not implemented')
})
