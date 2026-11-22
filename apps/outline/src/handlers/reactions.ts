import { OpenAPIHono } from '@hono/zod-openapi'
import { postReactionsListRoute } from '../routes'

const app = new OpenAPIHono()

export const reactionsHandler = app.openapi(postReactionsListRoute, (c) => {
  throw new Error('Not implemented')
})
