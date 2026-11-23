import { OpenAPIHono } from '@hono/zod-openapi'
import { postContactEnrichRoute } from '../routes'

const app = new OpenAPIHono()

export const contactHandler = app.openapi(postContactEnrichRoute, (c) => {
  throw new Error('Not implemented')
})
