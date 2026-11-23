import type { RouteHandler } from '@hono/zod-openapi'
import type { postSamlTestMetadataRoute } from '../routes'

export const postSamlTestMetadataRouteHandler: RouteHandler<
  typeof postSamlTestMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
