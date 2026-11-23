import type { RouteHandler } from '@hono/zod-openapi'
import type { getRobotsTxtRoute } from '../routes'

export const getRobotsTxtRouteHandler: RouteHandler<typeof getRobotsTxtRoute> = async (c) => {
  throw new Error('Not implemented')
}
