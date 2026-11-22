import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdCloudforceOneV2SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const threatIntelligenceHandler = app.openapi(
  postAccountsAccountIdCloudforceOneV2SearchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
