import type { RouteHandler } from '@hono/zod-openapi'
import type { getSurveysIndexRoute } from '../routes'

export const getSurveysIndexRouteHandler: RouteHandler<typeof getSurveysIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
