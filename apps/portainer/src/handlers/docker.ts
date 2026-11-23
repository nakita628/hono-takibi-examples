import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDockerEnvironmentIdContainersContainerIdGpusRoute,
  getDockerEnvironmentIdDashboardRoute,
  getDockerEnvironmentIdImagesRoute,
} from '../routes'

export const getDockerEnvironmentIdContainersContainerIdGpusRouteHandler: RouteHandler<
  typeof getDockerEnvironmentIdContainersContainerIdGpusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDockerEnvironmentIdDashboardRouteHandler: RouteHandler<
  typeof getDockerEnvironmentIdDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDockerEnvironmentIdImagesRouteHandler: RouteHandler<
  typeof getDockerEnvironmentIdImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
