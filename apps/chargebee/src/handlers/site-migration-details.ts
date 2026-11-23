import { OpenAPIHono } from '@hono/zod-openapi'
import { getSiteMigrationDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const siteMigrationDetailsHandler = app.openapi(getSiteMigrationDetailsRoute, (c) => {
  throw new Error('Not implemented')
})
