import type { RouteHandler } from '@hono/zod-openapi'
import type { getLongpollRoute } from '../routes'

export const getLongpollRouteHandler: RouteHandler<typeof getLongpollRoute> = async (c) => {
  throw new Error('Not implemented')
}
