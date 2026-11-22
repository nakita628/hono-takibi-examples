import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdDevicesOverrideCodesRoute } from '../routes'

const app = new OpenAPIHono()

export const overrideCodesHandler = app.openapi(
  postAccountsAccountIdDevicesOverrideCodesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
