import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStartMigrationRoute, postActionStartMigrationRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionStartMigrationHandler = app
  .openapi(getActionStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
