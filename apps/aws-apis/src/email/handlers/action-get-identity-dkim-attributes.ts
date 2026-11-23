import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetIdentityDkimAttributesRoute,
  postActionGetIdentityDkimAttributesRoute,
} from '../routes'

export const getActionGetIdentityDkimAttributesRouteHandler: RouteHandler<
  typeof getActionGetIdentityDkimAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetIdentityDkimAttributesRouteHandler: RouteHandler<
  typeof postActionGetIdentityDkimAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
