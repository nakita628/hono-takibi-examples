import type { RouteHandler } from '@hono/zod-openapi'
import type { getRenderIdRoute, postRenderRoute } from '../routes'

export const postRenderRouteHandler: RouteHandler<typeof postRenderRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRenderIdRouteHandler: RouteHandler<typeof getRenderIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
