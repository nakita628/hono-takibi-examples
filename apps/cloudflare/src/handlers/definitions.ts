import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdFlagshipAppsAppIdDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const definitionsHandler = app.openapi(
  getAccountsAccountIdFlagshipAppsAppIdDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
