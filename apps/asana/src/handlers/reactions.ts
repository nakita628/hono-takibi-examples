import { OpenAPIHono } from '@hono/zod-openapi'
import { getReactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const reactionsHandler = app.openapi(getReactionsRoute, (c) => {
  throw new Error('Not implemented')
})
