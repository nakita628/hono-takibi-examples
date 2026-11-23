import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyDBSubnetGroupRoute,
  postActionModifyDBSubnetGroupRoute,
} from '../routes'

export const getActionModifyDBSubnetGroupRouteHandler: RouteHandler<
  typeof getActionModifyDBSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDBSubnetGroupRouteHandler: RouteHandler<
  typeof postActionModifyDBSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
