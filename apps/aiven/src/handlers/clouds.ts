import type { RouteHandler } from '@hono/zod-openapi'
import type { getCloudsRoute } from '../routes'

export const getCloudsRouteHandler: RouteHandler<typeof getCloudsRoute> = async (c) => {
  throw new Error('Not implemented')
}
