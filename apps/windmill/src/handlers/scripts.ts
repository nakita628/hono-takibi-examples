import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getScriptsHubGetFullPathRoute,
  getScriptsHubGetPathRoute,
  getScriptsHubPickPathRoute,
  getScriptsHubTopRoute,
} from '../routes'

export const getScriptsHubGetPathRouteHandler: RouteHandler<
  typeof getScriptsHubGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScriptsHubGetFullPathRouteHandler: RouteHandler<
  typeof getScriptsHubGetFullPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScriptsHubPickPathRouteHandler: RouteHandler<
  typeof getScriptsHubPickPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScriptsHubTopRouteHandler: RouteHandler<typeof getScriptsHubTopRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
