import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmbedSparseRoute } from '../routes'

const app = new OpenAPIHono()

export const embedSparseHandler = app.openapi(postEmbedSparseRoute, (c) => {
  throw new Error('Not implemented')
})
