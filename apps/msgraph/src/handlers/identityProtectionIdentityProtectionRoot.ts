import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdentityProtectionRoute, patchIdentityProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const identityProtectionIdentityProtectionRootHandler = app
  .openapi(getIdentityProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
