import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmailEnrichRoute } from '../routes'

const app = new OpenAPIHono()

export const emailHandler = app.openapi(postEmailEnrichRoute, (c) => {
  throw new Error('Not implemented')
})
