import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedTextContainerIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedTextContainerHandler = app.openapi(getSharedTextContainerIdRoute, (c) => {
  throw new Error('Not implemented')
})
