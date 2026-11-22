import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdWorkersPlacementRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const workersSmartPlacementHandler = app.openapi(
  getAccountsAccountIdWorkersPlacementRegionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
