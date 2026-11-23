import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDeploymentstrategiesDeploymentStrategyIdRoute,
  getDeploymentstrategiesRoute,
  patchDeploymentstrategiesDeploymentStrategyIdRoute,
  postDeploymentstrategiesRoute,
} from '../routes'

export const postDeploymentstrategiesRouteHandler: RouteHandler<
  typeof postDeploymentstrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeploymentstrategiesRouteHandler: RouteHandler<
  typeof getDeploymentstrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeploymentstrategiesDeploymentStrategyIdRouteHandler: RouteHandler<
  typeof getDeploymentstrategiesDeploymentStrategyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDeploymentstrategiesDeploymentStrategyIdRouteHandler: RouteHandler<
  typeof patchDeploymentstrategiesDeploymentStrategyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
