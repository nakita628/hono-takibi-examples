import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMetastoreV1TenantServiceDeleteTenantRoute,
  postMetastoreV1TenantServiceGetTenantRoute,
  postMetastoreV1TenantServiceGetTenantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metastoreV1TenantServiceHandler = app
  .openapi(postMetastoreV1TenantServiceDeleteTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetastoreV1TenantServiceGetTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetastoreV1TenantServiceGetTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
