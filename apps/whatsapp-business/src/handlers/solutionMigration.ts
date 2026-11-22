import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionWABAIDSetSolutionMigrationIntentRoute } from '../routes'

const app = new OpenAPIHono()

export const solutionMigrationHandler = app.openapi(
  postVersionWABAIDSetSolutionMigrationIntentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
