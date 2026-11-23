import type { RouteHandler } from '@hono/zod-openapi'
import type { patchRedoclyFlavoredDiscriminatorRoute } from '../routes'

export const patchRedoclyFlavoredDiscriminatorRouteHandler: RouteHandler<
  typeof patchRedoclyFlavoredDiscriminatorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
