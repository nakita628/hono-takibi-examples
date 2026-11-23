import type { RouteHandler } from '@hono/zod-openapi'
import type { getTutorialRoute } from '../routes'

export const getTutorialRouteHandler: RouteHandler<typeof getTutorialRoute> = async (c) => {
  throw new Error('Not implemented')
}
