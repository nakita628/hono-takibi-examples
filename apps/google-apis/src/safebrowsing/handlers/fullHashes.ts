import { OpenAPIHono } from '@hono/zod-openapi'
import { postV4FullHashesFindRoute } from '../routes'

const app = new OpenAPIHono()

export const fullHashesHandler = app.openapi(postV4FullHashesFindRoute, (c) => {
  throw new Error('Not implemented')
})
