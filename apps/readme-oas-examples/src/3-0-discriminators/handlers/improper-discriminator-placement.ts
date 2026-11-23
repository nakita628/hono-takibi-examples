import type { RouteHandler } from '@hono/zod-openapi'
import type { patchImproperDiscriminatorPlacementRoute } from '../routes'

export const patchImproperDiscriminatorPlacementRouteHandler: RouteHandler<
  typeof patchImproperDiscriminatorPlacementRoute
> = async (c) => {
  throw new Error('Not implemented')
}
