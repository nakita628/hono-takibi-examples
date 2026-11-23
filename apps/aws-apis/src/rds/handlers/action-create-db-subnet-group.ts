import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateDBSubnetGroupRoute,
  postActionCreateDBSubnetGroupRoute,
} from '../routes'

export const getActionCreateDBSubnetGroupRouteHandler: RouteHandler<
  typeof getActionCreateDBSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBSubnetGroupRouteHandler: RouteHandler<
  typeof postActionCreateDBSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
