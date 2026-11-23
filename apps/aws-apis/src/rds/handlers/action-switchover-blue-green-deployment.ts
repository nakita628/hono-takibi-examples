import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSwitchoverBlueGreenDeploymentRoute,
  postActionSwitchoverBlueGreenDeploymentRoute,
} from '../routes'

export const getActionSwitchoverBlueGreenDeploymentRouteHandler: RouteHandler<
  typeof getActionSwitchoverBlueGreenDeploymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSwitchoverBlueGreenDeploymentRouteHandler: RouteHandler<
  typeof postActionSwitchoverBlueGreenDeploymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
