import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiEventsRoute,
  getApiLogsRoute,
  getApiLogsStreamRoute,
  postApiRunRoute,
} from '../routes'

export const getApiEventsRouteHandler: RouteHandler<typeof getApiEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLogsRouteHandler: RouteHandler<typeof getApiLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLogsStreamRouteHandler: RouteHandler<typeof getApiLogsStreamRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiRunRouteHandler: RouteHandler<typeof postApiRunRoute> = async (c) => {
  throw new Error('Not implemented')
}
