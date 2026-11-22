import { OpenAPIHono } from '@hono/zod-openapi'
import { postPlaycustomappV1AccountsAccountCustomAppsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app.openapi(
  postPlaycustomappV1AccountsAccountCustomAppsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
