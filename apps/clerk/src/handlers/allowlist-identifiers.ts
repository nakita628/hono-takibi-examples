import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAllowlistIdentifiersRoute,
  postAllowlistIdentifiersRoute,
  deleteAllowlistIdentifiersIdentifierIdRoute,
} from '../routes'

export const getAllowlistIdentifiersRouteHandler: RouteHandler<
  typeof getAllowlistIdentifiersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAllowlistIdentifiersRouteHandler: RouteHandler<
  typeof postAllowlistIdentifiersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAllowlistIdentifiersIdentifierIdRouteHandler: RouteHandler<
  typeof deleteAllowlistIdentifiersIdentifierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
