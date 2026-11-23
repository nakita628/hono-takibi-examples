import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLogsLogIdRoute,
  getLogsRoute,
  optionsLogsLogIdRoute,
  optionsLogsRoute,
} from '../routes'

export const getLogsRouteHandler: RouteHandler<typeof getLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsLogsRouteHandler: RouteHandler<typeof optionsLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsLogIdRouteHandler: RouteHandler<typeof getLogsLogIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsLogsLogIdRouteHandler: RouteHandler<typeof optionsLogsLogIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
