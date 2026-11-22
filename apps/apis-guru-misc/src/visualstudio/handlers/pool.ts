import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TenantTenantIdPoolPoolNameRoute,
  getApiV1TenantTenantIdPoolPoolNameRoute,
  patchApiV1TenantTenantIdPoolPoolNameRoute,
  putApiV1TenantTenantIdPoolPoolNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const poolHandler = app
  .openapi(deleteApiV1TenantTenantIdPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TenantTenantIdPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1TenantTenantIdPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TenantTenantIdPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
