import type { RouteHandler } from '@hono/zod-openapi'
import type { postSandboxUserPersonRoute } from '../routes'

export const postSandboxUserPersonRouteHandler: RouteHandler<
  typeof postSandboxUserPersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
