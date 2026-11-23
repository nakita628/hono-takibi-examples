import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDebugReplayStatusRoute,
  postDebugReplayStartFromExportRoute,
  postDebugReplayStartRoute,
  postDebugReplayStopRoute,
} from '../routes'

export const postDebugReplayStartRouteHandler: RouteHandler<
  typeof postDebugReplayStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDebugReplayStartFromExportRouteHandler: RouteHandler<
  typeof postDebugReplayStartFromExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDebugReplayStatusRouteHandler: RouteHandler<
  typeof getDebugReplayStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDebugReplayStopRouteHandler: RouteHandler<
  typeof postDebugReplayStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}
