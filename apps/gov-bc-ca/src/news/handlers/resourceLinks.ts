import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiResourceLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const resourceLinksHandler = app.openapi(getApiResourceLinksRoute, (c) => {
  throw new Error('Not implemented')
})
