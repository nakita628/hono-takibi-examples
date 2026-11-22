import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TenantTenantIdPoolPoolNameVmVmNameRoute,
  getApiV1TenantTenantIdPoolPoolNameVmRoute,
  getApiV1TenantTenantIdPoolPoolNameVmVmNameRoute,
  postApiV1TenantTenantIdPoolPoolNameVmVmNameStartRoute,
  postApiV1TenantTenantIdPoolPoolNameVmVmNameStopRoute,
  putApiV1TenantTenantIdPoolPoolNameVmVmNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vmHandler = app
  .openapi(getApiV1TenantTenantIdPoolPoolNameVmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TenantTenantIdPoolPoolNameVmVmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TenantTenantIdPoolPoolNameVmVmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TenantTenantIdPoolPoolNameVmVmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TenantTenantIdPoolPoolNameVmVmNameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TenantTenantIdPoolPoolNameVmVmNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
