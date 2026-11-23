import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatisticsSmsRoute, getStatisticsVoiceRoute } from '../routes'

export const getStatisticsSmsRouteHandler: RouteHandler<typeof getStatisticsSmsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStatisticsVoiceRouteHandler: RouteHandler<typeof getStatisticsVoiceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
