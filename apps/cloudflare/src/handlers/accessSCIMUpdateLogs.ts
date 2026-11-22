import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdAccessLogsScimUpdatesRoute } from '../routes'

const app = new OpenAPIHono()

export const accessSCIMUpdateLogsHandler = app.openapi(
  getAccountsAccountIdAccessLogsScimUpdatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
