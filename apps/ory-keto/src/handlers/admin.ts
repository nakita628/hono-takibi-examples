import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAdminRelationTuplesRoute,
  patchAdminRelationTuplesRoute,
  putAdminRelationTuplesRoute,
} from '../routes'

export const deleteAdminRelationTuplesRouteHandler: RouteHandler<
  typeof deleteAdminRelationTuplesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminRelationTuplesRouteHandler: RouteHandler<
  typeof patchAdminRelationTuplesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRelationTuplesRouteHandler: RouteHandler<
  typeof putAdminRelationTuplesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
