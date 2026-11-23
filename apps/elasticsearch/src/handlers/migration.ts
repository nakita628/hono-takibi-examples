import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMigrationDeprecationsRoute,
  getMigrationReindexIndexStatusRoute,
  getMigrationSystemFeaturesRoute,
  postMigrationReindexIndexCancelRoute,
  postMigrationReindexRoute,
  postMigrationSystemFeaturesRoute,
} from '../routes'

export const postMigrationReindexIndexCancelRouteHandler: RouteHandler<
  typeof postMigrationReindexIndexCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMigrationReindexIndexStatusRouteHandler: RouteHandler<
  typeof getMigrationReindexIndexStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMigrationReindexRouteHandler: RouteHandler<
  typeof postMigrationReindexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMigrationDeprecationsRouteHandler: RouteHandler<
  typeof getMigrationDeprecationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMigrationSystemFeaturesRouteHandler: RouteHandler<
  typeof getMigrationSystemFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMigrationSystemFeaturesRouteHandler: RouteHandler<
  typeof postMigrationSystemFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
