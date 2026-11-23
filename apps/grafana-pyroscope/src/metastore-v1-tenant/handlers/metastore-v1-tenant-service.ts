import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMetastoreV1TenantServiceDeleteTenantRoute,
  postMetastoreV1TenantServiceGetTenantRoute,
  postMetastoreV1TenantServiceGetTenantsRoute,
} from '../routes'

export const postMetastoreV1TenantServiceDeleteTenantRouteHandler: RouteHandler<
  typeof postMetastoreV1TenantServiceDeleteTenantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetastoreV1TenantServiceGetTenantRouteHandler: RouteHandler<
  typeof postMetastoreV1TenantServiceGetTenantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetastoreV1TenantServiceGetTenantsRouteHandler: RouteHandler<
  typeof postMetastoreV1TenantServiceGetTenantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
