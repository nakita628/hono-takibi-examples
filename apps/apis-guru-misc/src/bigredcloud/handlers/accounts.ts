import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app.openapi(getV1AccountsRoute, (c) => {
  throw new Error('Not implemented')
})
