import { OpenAPIHono } from '@hono/zod-openapi'
import { getFileMigrationsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const fileMigrationsHandler = app.openapi(getFileMigrationsIdRoute, (c) => {
  throw new Error('Not implemented')
})
