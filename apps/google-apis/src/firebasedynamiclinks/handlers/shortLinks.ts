import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ShortLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const shortLinksHandler = app.openapi(postV1ShortLinksRoute, (c) => {
  throw new Error('Not implemented')
})
