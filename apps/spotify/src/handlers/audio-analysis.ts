import type { RouteHandler } from '@hono/zod-openapi'
import type { getAudioAnalysisIdRoute } from '../routes'

export const getAudioAnalysisIdRouteHandler: RouteHandler<typeof getAudioAnalysisIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
