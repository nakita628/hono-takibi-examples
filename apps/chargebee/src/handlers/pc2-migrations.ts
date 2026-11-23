import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPc2MigrationsPc2MigrationIdRoute,
  postPc2MigrationsPc2MigrationIdContactSupportRoute,
  postPc2MigrationsPc2MigrationIdInitiateRoute,
  postPc2MigrationsRoute,
} from '../routes'

export const postPc2MigrationsPc2MigrationIdContactSupportRouteHandler: RouteHandler<
  typeof postPc2MigrationsPc2MigrationIdContactSupportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPc2MigrationsPc2MigrationIdRouteHandler: RouteHandler<
  typeof getPc2MigrationsPc2MigrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPc2MigrationsRouteHandler: RouteHandler<typeof postPc2MigrationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPc2MigrationsPc2MigrationIdInitiateRouteHandler: RouteHandler<
  typeof postPc2MigrationsPc2MigrationIdInitiateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
