import type { RouteHandler } from '@hono/zod-openapi'
import type { postModuleAuthV1TokenRoute } from '../routes'

export const postModuleAuthV1TokenRouteHandler: RouteHandler<
  typeof postModuleAuthV1TokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
