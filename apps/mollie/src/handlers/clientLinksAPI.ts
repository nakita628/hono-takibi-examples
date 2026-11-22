import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2ClientLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const clientLinksAPIHandler = app.openapi(postV2ClientLinksRoute, (c) => {
  throw new Error('Not implemented')
})
