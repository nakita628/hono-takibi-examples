import { OpenAPIHono } from '@hono/zod-openapi'
import { postCqactionsHtmlRoute } from '../routes'

const app = new OpenAPIHono()

export const cqactionsHtmlHandler = app.openapi(postCqactionsHtmlRoute, (c) => {
  throw new Error('Not implemented')
})
