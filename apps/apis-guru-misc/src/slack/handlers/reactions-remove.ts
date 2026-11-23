import { OpenAPIHono } from '@hono/zod-openapi'
import { postReactionsRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const reactionsRemoveHandler = app.openapi(postReactionsRemoveRoute, (c) => {
  throw new Error('Not implemented')
})
