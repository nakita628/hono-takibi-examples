import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetPathwayAsRoute } from '../routes'

export const getGetPathwayAsRouteHandler: RouteHandler<typeof getGetPathwayAsRoute> = async (c) => {
  throw new Error('Not implemented')
}
