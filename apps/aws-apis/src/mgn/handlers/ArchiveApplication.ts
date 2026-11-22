import { OpenAPIHono } from '@hono/zod-openapi'
import { postArchiveApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const ArchiveApplicationHandler = app.openapi(postArchiveApplicationRoute, (c) => {
  throw new Error('Not implemented')
})
