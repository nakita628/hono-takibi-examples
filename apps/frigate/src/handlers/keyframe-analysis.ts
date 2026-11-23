import type { RouteHandler } from '@hono/zod-openapi'
import type { getKeyframeAnalysisRoute } from '../routes'

export const getKeyframeAnalysisRouteHandler: RouteHandler<
  typeof getKeyframeAnalysisRoute
> = async (c) => {
  throw new Error('Not implemented')
}
