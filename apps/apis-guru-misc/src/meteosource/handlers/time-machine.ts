import type { RouteHandler } from '@hono/zod-openapi'
import type { getTimeMachineRoute } from '../routes'

export const getTimeMachineRouteHandler: RouteHandler<typeof getTimeMachineRoute> = async (c) => {
  throw new Error('Not implemented')
}
