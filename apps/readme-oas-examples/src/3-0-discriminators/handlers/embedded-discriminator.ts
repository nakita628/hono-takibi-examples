import type { RouteHandler } from '@hono/zod-openapi'
import type { patchEmbeddedDiscriminatorRoute } from '../routes'

export const patchEmbeddedDiscriminatorRouteHandler: RouteHandler<
  typeof patchEmbeddedDiscriminatorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
