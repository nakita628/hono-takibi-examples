import { OpenAPIHono } from '@hono/zod-openapi'
import { postArchiveApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const archiveApplicationHandler = app.openapi(postArchiveApplicationRoute, (c) => {
  throw new Error('Not implemented')
})
