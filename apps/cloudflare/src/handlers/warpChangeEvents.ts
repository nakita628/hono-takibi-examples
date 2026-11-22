import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdDexWarpChangeEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const warpChangeEventsHandler = app.openapi(
  getAccountsAccountIdDexWarpChangeEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
