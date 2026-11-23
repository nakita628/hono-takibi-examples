import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEnvironmentDefaultDirectoryBrowserRoute,
  getEnvironmentDirectoryContentsRoute,
  getEnvironmentDrivesRoute,
  getEnvironmentParentPathRoute,
  postEnvironmentValidatePathRoute,
} from '../routes'

export const getEnvironmentDefaultDirectoryBrowserRouteHandler: RouteHandler<
  typeof getEnvironmentDefaultDirectoryBrowserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnvironmentDirectoryContentsRouteHandler: RouteHandler<
  typeof getEnvironmentDirectoryContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnvironmentDrivesRouteHandler: RouteHandler<
  typeof getEnvironmentDrivesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnvironmentParentPathRouteHandler: RouteHandler<
  typeof getEnvironmentParentPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEnvironmentValidatePathRouteHandler: RouteHandler<
  typeof postEnvironmentValidatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
