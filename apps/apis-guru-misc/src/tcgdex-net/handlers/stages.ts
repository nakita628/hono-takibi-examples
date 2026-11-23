import type { RouteHandler } from '@hono/zod-openapi'
import type { getStagesRoute, getStagesStageRoute } from '../routes'

export const getStagesRouteHandler: RouteHandler<typeof getStagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesStageRouteHandler: RouteHandler<typeof getStagesStageRoute> = async (c) => {
  throw new Error('Not implemented')
}
