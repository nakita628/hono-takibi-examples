import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCompleteMigrationRoute, postActionCompleteMigrationRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCompleteMigrationHandler = app
  .openapi(getActionCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
