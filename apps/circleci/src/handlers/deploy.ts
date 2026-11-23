import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDeployComponentsComponentIdRoute,
  getDeployComponentsComponentIdVersionsRoute,
  getDeployComponentsRoute,
  getDeployEnvironmentsEnvironmentIdRoute,
  getDeployEnvironmentsRoute,
} from '../routes'

export const getDeployEnvironmentsRouteHandler: RouteHandler<
  typeof getDeployEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeployEnvironmentsEnvironmentIdRouteHandler: RouteHandler<
  typeof getDeployEnvironmentsEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeployComponentsRouteHandler: RouteHandler<
  typeof getDeployComponentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeployComponentsComponentIdRouteHandler: RouteHandler<
  typeof getDeployComponentsComponentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeployComponentsComponentIdVersionsRouteHandler: RouteHandler<
  typeof getDeployComponentsComponentIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
