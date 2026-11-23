import type { RouteHandler } from '@hono/zod-openapi'
import type { getSchemaSnapshotRoute, postSchemaApplyRoute, postSchemaDiffRoute } from '../routes'

export const getSchemaSnapshotRouteHandler: RouteHandler<typeof getSchemaSnapshotRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSchemaApplyRouteHandler: RouteHandler<typeof postSchemaApplyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSchemaDiffRouteHandler: RouteHandler<typeof postSchemaDiffRoute> = async (c) => {
  throw new Error('Not implemented')
}
