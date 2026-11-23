import type { RouteHandler } from '@hono/zod-openapi'
import type { getBranchesRoute, headBranchesRoute } from '../routes'

export const getBranchesRouteHandler: RouteHandler<typeof getBranchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headBranchesRouteHandler: RouteHandler<typeof headBranchesRoute> = async (c) => {
  throw new Error('Not implemented')
}
