import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdPayPerUseEnabledPublishersRoute } from '../routes'

const app = new OpenAPIHono()

export const ppuEnabledPublishersHandler = app.openapi(
  getAccountsAccountIdPayPerUseEnabledPublishersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
