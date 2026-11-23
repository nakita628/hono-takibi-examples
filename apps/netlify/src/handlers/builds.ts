import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBuildsBuildIdRoute,
  postBuildsBuildIdLogRoute,
  postBuildsBuildIdStartRoute,
} from '../routes'

export const getBuildsBuildIdRouteHandler: RouteHandler<typeof getBuildsBuildIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBuildsBuildIdLogRouteHandler: RouteHandler<
  typeof postBuildsBuildIdLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBuildsBuildIdStartRouteHandler: RouteHandler<
  typeof postBuildsBuildIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}
