import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarkupRoute } from '../routes'

const app = new OpenAPIHono()

export const markupHandler = app.openapi(postMarkupRoute, (c) => {
  throw new Error('Not implemented')
})
