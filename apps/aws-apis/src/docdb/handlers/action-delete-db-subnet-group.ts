import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteDBSubnetGroupRoute,
  postActionDeleteDBSubnetGroupRoute,
} from '../routes'

export const getActionDeleteDBSubnetGroupRouteHandler: RouteHandler<
  typeof getActionDeleteDBSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBSubnetGroupRouteHandler: RouteHandler<
  typeof postActionDeleteDBSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
