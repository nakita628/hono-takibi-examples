import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVpclinksVpclinkIdRoute,
  getVpclinksRoute,
  getVpclinksVpclinkIdRoute,
  patchVpclinksVpclinkIdRoute,
  postVpclinksRoute,
} from '../routes'

export const postVpclinksRouteHandler: RouteHandler<typeof postVpclinksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVpclinksRouteHandler: RouteHandler<typeof getVpclinksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVpclinksVpclinkIdRouteHandler: RouteHandler<
  typeof deleteVpclinksVpclinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVpclinksVpclinkIdRouteHandler: RouteHandler<
  typeof getVpclinksVpclinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchVpclinksVpclinkIdRouteHandler: RouteHandler<
  typeof patchVpclinksVpclinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
