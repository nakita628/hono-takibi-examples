import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateDomainMetadataRoute } from '../routes'

export const postUpdateDomainMetadataRouteHandler: RouteHandler<
  typeof postUpdateDomainMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
