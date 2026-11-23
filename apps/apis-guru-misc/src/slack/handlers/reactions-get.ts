import { OpenAPIHono } from '@hono/zod-openapi'
import { getReactionsGetRoute } from '../routes'

const app = new OpenAPIHono()

export const reactionsGetHandler = app.openapi(getReactionsGetRoute, (c) => {
  throw new Error('Not implemented')
})
