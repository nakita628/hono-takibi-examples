import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBlocklistIdentifiersRoute,
  postBlocklistIdentifiersRoute,
  deleteBlocklistIdentifiersIdentifierIdRoute,
} from '../routes'

export const getBlocklistIdentifiersRouteHandler: RouteHandler<
  typeof getBlocklistIdentifiersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlocklistIdentifiersRouteHandler: RouteHandler<
  typeof postBlocklistIdentifiersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBlocklistIdentifiersIdentifierIdRouteHandler: RouteHandler<
  typeof deleteBlocklistIdentifiersIdentifierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
