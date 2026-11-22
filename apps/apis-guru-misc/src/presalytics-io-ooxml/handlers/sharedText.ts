import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedTextIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedTextHandler = app.openapi(getSharedTextIdRoute, (c) => {
  throw new Error('Not implemented')
})
