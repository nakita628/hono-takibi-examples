import { OpenAPIHono } from '@hono/zod-openapi'
import { patchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const accountCapabilityHandler = app.openapi(
  patchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
