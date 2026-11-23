import type { RouteHandler } from '@hono/zod-openapi'
import type { getExamplesRoute } from '../routes'

export const getExamplesRouteHandler: RouteHandler<typeof getExamplesRoute> = async (c) => {
  throw new Error('Not implemented')
}
