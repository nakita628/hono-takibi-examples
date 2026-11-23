import { OpenAPIHono } from '@hono/zod-openapi'
import { getReactionsListRoute } from '../routes'

const app = new OpenAPIHono()

export const reactionsListHandler = app.openapi(getReactionsListRoute, (c) => {
  throw new Error('Not implemented')
})
