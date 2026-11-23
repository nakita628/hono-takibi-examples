import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCreativesCrvIdRoute,
  patchCreativesCrvIdRoute,
  postCreativesRoute,
} from '../routes'

export const postCreativesRouteHandler: RouteHandler<typeof postCreativesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCreativesCrvIdRouteHandler: RouteHandler<typeof getCreativesCrvIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchCreativesCrvIdRouteHandler: RouteHandler<
  typeof patchCreativesCrvIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
