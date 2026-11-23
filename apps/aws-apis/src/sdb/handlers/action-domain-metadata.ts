import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDomainMetadataRoute, postActionDomainMetadataRoute } from '../routes'

export const getActionDomainMetadataRouteHandler: RouteHandler<
  typeof getActionDomainMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDomainMetadataRouteHandler: RouteHandler<
  typeof postActionDomainMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
