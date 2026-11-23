import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnalyzedResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const analyzedResourceHandler = app.openapi(postAnalyzedResourceRoute, (c) => {
  throw new Error('Not implemented')
})
