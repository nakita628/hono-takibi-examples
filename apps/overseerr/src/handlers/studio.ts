import { OpenAPIHono } from '@hono/zod-openapi'
import { getStudioStudioIdRoute } from '../routes'

const app = new OpenAPIHono()

export const studioHandler = app.openapi(getStudioStudioIdRoute, (c) => {
  throw new Error('Not implemented')
})
