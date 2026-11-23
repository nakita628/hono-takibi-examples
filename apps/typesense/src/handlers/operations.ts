import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOperationsSchemaChangesRoute,
  postOperationsCacheClearRoute,
  postOperationsDbCompactRoute,
  postOperationsSnapshotRoute,
  postOperationsVoteRoute,
} from '../routes'

export const getOperationsSchemaChangesRouteHandler: RouteHandler<
  typeof getOperationsSchemaChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOperationsSnapshotRouteHandler: RouteHandler<
  typeof postOperationsSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOperationsVoteRouteHandler: RouteHandler<typeof postOperationsVoteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOperationsCacheClearRouteHandler: RouteHandler<
  typeof postOperationsCacheClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOperationsDbCompactRouteHandler: RouteHandler<
  typeof postOperationsDbCompactRoute
> = async (c) => {
  throw new Error('Not implemented')
}
