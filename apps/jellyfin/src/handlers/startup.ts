import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStartupConfigurationRoute,
  getStartupFirstUserRoute,
  getStartupUserRoute,
  postStartupCompleteRoute,
  postStartupConfigurationRoute,
  postStartupRemoteAccessRoute,
  postStartupUserRoute,
} from '../routes'

export const postStartupCompleteRouteHandler: RouteHandler<
  typeof postStartupCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStartupConfigurationRouteHandler: RouteHandler<
  typeof getStartupConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStartupConfigurationRouteHandler: RouteHandler<
  typeof postStartupConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStartupFirstUserRouteHandler: RouteHandler<
  typeof getStartupFirstUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStartupRemoteAccessRouteHandler: RouteHandler<
  typeof postStartupRemoteAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStartupUserRouteHandler: RouteHandler<typeof getStartupUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postStartupUserRouteHandler: RouteHandler<typeof postStartupUserRoute> = async (c) => {
  throw new Error('Not implemented')
}
