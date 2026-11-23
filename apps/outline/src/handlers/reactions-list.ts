import { OpenAPIHono } from '@hono/zod-openapi'
import { postReactionsListRoute } from '../routes'

const app = new OpenAPIHono()

export const reactionsListHandler = app.openapi(postReactionsListRoute, (c) => {
  throw new Error('Not implemented')
})
