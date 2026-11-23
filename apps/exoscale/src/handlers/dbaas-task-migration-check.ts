import { OpenAPIHono } from '@hono/zod-openapi'
import { postDbaasTaskMigrationCheckServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasTaskMigrationCheckHandler = app.openapi(
  postDbaasTaskMigrationCheckServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
