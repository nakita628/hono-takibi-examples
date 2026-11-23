import type { RouteHandler } from '@hono/zod-openapi'
import type { getLbheartbeatRoute } from '../routes'

export const getLbheartbeatRouteHandler: RouteHandler<typeof getLbheartbeatRoute> = async (c) => {
  throw new Error('Not implemented')
}
