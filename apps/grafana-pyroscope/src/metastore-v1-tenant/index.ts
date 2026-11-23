import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMetastoreV1TenantServiceDeleteTenantRoute,
  postMetastoreV1TenantServiceGetTenantRoute,
  postMetastoreV1TenantServiceGetTenantsRoute,
} from './routes'
import {
  postMetastoreV1TenantServiceDeleteTenantRouteHandler,
  postMetastoreV1TenantServiceGetTenantRouteHandler,
  postMetastoreV1TenantServiceGetTenantsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postMetastoreV1TenantServiceDeleteTenantRoute,
    postMetastoreV1TenantServiceDeleteTenantRouteHandler,
  )
  .openapi(
    postMetastoreV1TenantServiceGetTenantRoute,
    postMetastoreV1TenantServiceGetTenantRouteHandler,
  )
  .openapi(
    postMetastoreV1TenantServiceGetTenantsRoute,
    postMetastoreV1TenantServiceGetTenantsRouteHandler,
  )

export default app
