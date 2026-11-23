import type { RouteHandler } from '@hono/zod-openapi'
import type { getV11DeploymentsDeploymentIdBuildsRoute } from '../routes'

export const getV11DeploymentsDeploymentIdBuildsRouteHandler: RouteHandler<
  typeof getV11DeploymentsDeploymentIdBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
