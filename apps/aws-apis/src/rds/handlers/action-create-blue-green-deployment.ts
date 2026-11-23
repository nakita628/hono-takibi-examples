import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateBlueGreenDeploymentRoute,
  postActionCreateBlueGreenDeploymentRoute,
} from '../routes'

export const getActionCreateBlueGreenDeploymentRouteHandler: RouteHandler<
  typeof getActionCreateBlueGreenDeploymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateBlueGreenDeploymentRouteHandler: RouteHandler<
  typeof postActionCreateBlueGreenDeploymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
