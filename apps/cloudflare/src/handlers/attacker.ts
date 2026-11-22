import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdCloudforceOneEventsAttackersRoute } from '../routes'

const app = new OpenAPIHono()

export const attackerHandler = app.openapi(
  getAccountsAccountIdCloudforceOneEventsAttackersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
