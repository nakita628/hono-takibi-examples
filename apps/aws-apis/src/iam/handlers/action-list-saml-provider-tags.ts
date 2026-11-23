import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListSAMLProviderTagsRoute,
  postActionListSAMLProviderTagsRoute,
} from '../routes'

export const getActionListSAMLProviderTagsRouteHandler: RouteHandler<
  typeof getActionListSAMLProviderTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListSAMLProviderTagsRouteHandler: RouteHandler<
  typeof postActionListSAMLProviderTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
