import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3AccountsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app.openapi(getApiV3AccountsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
