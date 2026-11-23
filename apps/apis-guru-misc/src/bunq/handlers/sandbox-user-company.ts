import type { RouteHandler } from '@hono/zod-openapi'
import type { postSandboxUserCompanyRoute } from '../routes'

export const postSandboxUserCompanyRouteHandler: RouteHandler<
  typeof postSandboxUserCompanyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
