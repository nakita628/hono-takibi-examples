import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3AccountsAccountIdMantleMigrationStatusIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const mantleMigrationHandler = app.openapi(
  getApiV3AccountsAccountIdMantleMigrationStatusIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
