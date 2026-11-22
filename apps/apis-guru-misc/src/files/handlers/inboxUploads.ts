import { OpenAPIHono } from '@hono/zod-openapi'
import { getInboxUploadsRoute } from '../routes'

const app = new OpenAPIHono()

export const inboxUploadsHandler = app.openapi(getInboxUploadsRoute, (c) => {
  throw new Error('Not implemented')
})
