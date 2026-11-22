import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TenantsIdRoute,
  getV1TenantsIdRoute,
  getV1TenantsRoute,
  postV1TenantsBulkDeleteRoute,
  postV1TenantsBulkSetRoute,
  putV1TenantsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tenantsHandler = app
  .openapi(getV1TenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TenantsBulkSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TenantsBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TenantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TenantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TenantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
