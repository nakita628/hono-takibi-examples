import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendbatchRoute } from '../routes'

export const postSendbatchRouteHandler: RouteHandler<typeof postSendbatchRoute> = async (c) => {
  throw new Error('Not implemented')
}
