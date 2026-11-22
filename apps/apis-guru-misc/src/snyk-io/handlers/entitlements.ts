import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrgOrgIdEntitlementEntitlementKeyRoute, getOrgOrgIdEntitlementsRoute } from '../routes'

const app = new OpenAPIHono()

export const entitlementsHandler = app
  .openapi(getOrgOrgIdEntitlementEntitlementKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
