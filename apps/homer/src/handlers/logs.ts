import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLogsLokiLabelsRoute,
  getLogsLokiValuesRoute,
  postLogsLokiQueryRoute,
} from '../routes'

export const getLogsLokiLabelsRouteHandler: RouteHandler<typeof getLogsLokiLabelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLogsLokiValuesRouteHandler: RouteHandler<typeof getLogsLokiValuesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postLogsLokiQueryRouteHandler: RouteHandler<typeof postLogsLokiQueryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
