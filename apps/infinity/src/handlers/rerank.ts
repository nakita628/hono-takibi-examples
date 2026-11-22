import { OpenAPIHono } from '@hono/zod-openapi'
import { postRerankRoute } from '../routes'

const app = new OpenAPIHono()

export const rerankHandler = app.openapi(postRerankRoute, (c) => {
  throw new Error('Not implemented')
})
