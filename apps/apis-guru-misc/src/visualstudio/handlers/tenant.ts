import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TenantTenantIdRoute,
  getApiV1TenantTenantIdRoute,
  putApiV1TenantTenantIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tenantHandler = app
  .openapi(deleteApiV1TenantTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TenantTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TenantTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
