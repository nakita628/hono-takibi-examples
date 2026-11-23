import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDeploymentEnvironmentsDeploymentEnvironmentIdRoute,
  getDeploymentEnvironmentsRoute,
  optionsDeploymentEnvironmentsDeploymentEnvironmentIdRoute,
  optionsDeploymentEnvironmentsRoute,
} from '../routes'

export const getDeploymentEnvironmentsRouteHandler: RouteHandler<
  typeof getDeploymentEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsDeploymentEnvironmentsRouteHandler: RouteHandler<
  typeof optionsDeploymentEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeploymentEnvironmentsDeploymentEnvironmentIdRouteHandler: RouteHandler<
  typeof getDeploymentEnvironmentsDeploymentEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsDeploymentEnvironmentsDeploymentEnvironmentIdRouteHandler: RouteHandler<
  typeof optionsDeploymentEnvironmentsDeploymentEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
