import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteBlueGreenDeploymentRoute,
  postActionDeleteBlueGreenDeploymentRoute,
} from '../routes'

export const getActionDeleteBlueGreenDeploymentRouteHandler: RouteHandler<
  typeof getActionDeleteBlueGreenDeploymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteBlueGreenDeploymentRouteHandler: RouteHandler<
  typeof postActionDeleteBlueGreenDeploymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
