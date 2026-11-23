import type { RouteHandler } from '@hono/zod-openapi'
import type { getMeshRoute } from '../routes'

export const getMeshRouteHandler: RouteHandler<typeof getMeshRoute> = async (c) => {
  throw new Error('Not implemented')
}
