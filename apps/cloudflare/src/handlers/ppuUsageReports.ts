import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdPayPerUseUsageReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const ppuUsageReportsHandler = app.openapi(
  postAccountsAccountIdPayPerUseUsageReportsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
