import { OpenAPIHono } from '@hono/zod-openapi'
import { postReactionsAddRoute } from '../routes'

const app = new OpenAPIHono()

export const reactionsAddHandler = app.openapi(postReactionsAddRoute, (c) => {
  throw new Error('Not implemented')
})
