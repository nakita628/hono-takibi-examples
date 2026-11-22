import { OpenAPIHono } from '@hono/zod-openapi'
import { getTenantRelationshipsRoute, patchTenantRelationshipsRoute } from '../routes'

const app = new OpenAPIHono()

export const tenantRelationshipsTenantRelationshipHandler = app
  .openapi(getTenantRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
