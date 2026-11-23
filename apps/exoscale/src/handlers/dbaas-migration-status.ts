import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasMigrationStatusNameRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasMigrationStatusHandler = app.openapi(getDbaasMigrationStatusNameRoute, (c) => {
  throw new Error('Not implemented')
})
