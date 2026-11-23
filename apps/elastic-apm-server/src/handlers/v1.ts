import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1LogsRoute, postV1MetricsRoute, postV1TracesRoute } from '../routes'

export const postV1MetricsRouteHandler: RouteHandler<typeof postV1MetricsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TracesRouteHandler: RouteHandler<typeof postV1TracesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1LogsRouteHandler: RouteHandler<typeof postV1LogsRoute> = async (c) => {
  throw new Error('Not implemented')
}
