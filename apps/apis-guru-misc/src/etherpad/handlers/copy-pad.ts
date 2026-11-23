import type { RouteHandler } from '@hono/zod-openapi'
import type { getCopyPadRoute, postCopyPadRoute } from '../routes'

export const getCopyPadRouteHandler: RouteHandler<typeof getCopyPadRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCopyPadRouteHandler: RouteHandler<typeof postCopyPadRoute> = async (c) => {
  throw new Error('Not implemented')
}
