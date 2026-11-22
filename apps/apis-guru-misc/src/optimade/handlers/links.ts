import { OpenAPIHono } from '@hono/zod-openapi'
import { getLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const linksHandler = app.openapi(getLinksRoute, (c) => {
  throw new Error('Not implemented')
})
