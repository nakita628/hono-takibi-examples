import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TenantTenantIdPoolGroupPoolGroupNameRoute,
  getApiV1TenantTenantIdPoolGroupPoolGroupNameRoute,
  patchApiV1TenantTenantIdPoolGroupPoolGroupNameRoute,
  putApiV1TenantTenantIdPoolGroupPoolGroupNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const poolGroupHandler = app
  .openapi(deleteApiV1TenantTenantIdPoolGroupPoolGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TenantTenantIdPoolGroupPoolGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1TenantTenantIdPoolGroupPoolGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TenantTenantIdPoolGroupPoolGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
